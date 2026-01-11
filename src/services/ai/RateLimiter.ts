/**
 * Intelligent Rate Limiter (Leaky Bucket Pattern) 🚰
 * Prevents Cloudflare 429 Errors by enforcing RPM limits client-side.
 */

interface Bucket {
    tokens: number;
    lastRefill: number;
    rpm: number;
    max: number;
}

// Limits based on Cloudflare Docs + Research
// @see research_cloudflare_limits.md
const DEFAULT_LIMITS: Record<string, { rpm: number, max: number }> = {
    'text-large': { rpm: 300, max: 10 },   // Llama-3-70b
    'text-small': { rpm: 1500, max: 50 },  // Llama-3-8b
    'image': { rpm: 3000, max: 100 },      // Stable Diffusion
    'audio': { rpm: 720, max: 20 },        // Mellotron
    'embedding': { rpm: 3000, max: 100 },  // BGE
    'default': { rpm: 300, max: 10 }       // Conservative fallback
};

export class RateLimiter {
    private buckets: Record<string, Bucket> = {};

    constructor() {
        this.initializeBuckets();
    }

    private initializeBuckets() {
        for (const [key, limit] of Object.entries(DEFAULT_LIMITS)) {
            this.buckets[key] = {
                tokens: limit.max,
                lastRefill: Date.now(),
                rpm: limit.rpm,
                max: limit.max
            };
        }
    }

    private getCategory(model: string): string {
        if (model.includes('70b')) return 'text-large';
        if (model.includes('8b') || model.includes('qwen')) return 'text-small';
        if (model.includes('diffusion') || model.includes('flux')) return 'image';
        if (model.includes('mello') || model.includes('audio')) return 'audio';
        if (model.includes('bge') || model.includes('embed')) return 'embedding';
        return 'default';
    }

    private refill(key: string) {
        const bucket = this.buckets[key];
        const now = Date.now();
        const elapsedMinutes = (now - bucket.lastRefill) / 60000;

        if (elapsedMinutes > 0) {
            const tokensToAdd = Math.floor(elapsedMinutes * bucket.rpm);
            if (tokensToAdd > 0) {
                bucket.tokens = Math.min(bucket.max, bucket.tokens + tokensToAdd);
                bucket.lastRefill = now;
            }
        }
    }

    /**
     * Enforces rate limits. If bucket is empty, it waits.
     */
    async enforce(model: string): Promise<void> {
        const key = this.getCategory(model);
        const bucket = this.buckets[key] || this.buckets['default']; // Safety fallback

        // 1. Refill first
        this.refill(key);

        // 2. Check tokens
        if (bucket.tokens >= 1) {
            bucket.tokens -= 1;
            return; // Go ahead
        }

        // 3. Bucket Empty - Throttling Required
        const msPerToken = (60000 / bucket.rpm);
        console.warn(`[RateLimiter] 🛑 Throttling ${model} (${key}). Waiting ${msPerToken.toFixed(0)}ms...`);

        await new Promise(resolve => setTimeout(resolve, msPerToken));

        // Recursive check ensures we don't cheat race conditions
        return this.enforce(model);
    }

    /**
     * Returns current status of buckets for UI/Debug
     */
    getStats() {
        // Refill all before reporting
        Object.keys(this.buckets).forEach(k => this.refill(k));
        return this.buckets;
    }
}

export const rateLimiter = new RateLimiter();
export default rateLimiter;
