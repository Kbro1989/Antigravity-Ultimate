
/**
 * ObservabilityLimiter
 * 
 * Enforces a strict rate limit on system logging to protect the Cloudflare Observability quota.
 * Limit: 200,000 events / day (~2.3 events / second).
 * Implementation: Token Bucket Algorithm.
 */
export class ObservabilityLimiter {
    private static instance: ObservabilityLimiter;

    // Config: 200k/day
    private readonly DAILY_LIMIT = 200000;
    private readonly REFILL_RATE_MS = this.DAILY_LIMIT / (24 * 60 * 60 * 1000); // ~0.0023 tokens/ms
    private readonly BUCKET_CAPACITY = 100; // Burst size allowed

    private tokens: number;
    private lastRefill: number;
    private droppedCount: number = 0;

    private constructor() {
        this.tokens = this.BUCKET_CAPACITY;
        this.lastRefill = Date.now();
    }

    public static getInstance(): ObservabilityLimiter {
        if (!ObservabilityLimiter.instance) {
            ObservabilityLimiter.instance = new ObservabilityLimiter();
        }
        return ObservabilityLimiter.instance;
    }

    /**
     * Checks if a log event can be emitted.
     * @returns true if allowed, false if rate limited
     */
    public canEmit(): boolean {
        this.refill();

        if (this.tokens >= 1) {
            this.tokens -= 1;
            return true;
        }

        this.droppedCount++;
        if (this.droppedCount % 50 === 0) {
            // Force emit a warning every 50 dropped logs, bypass bucket check safely?
            // No, we don't want to spam warnings either.
        }
        return false;
    }

    private refill() {
        const now = Date.now();
        const delta = now - this.lastRefill;
        const tokensToAdd = delta * this.REFILL_RATE_MS;

        this.tokens = Math.min(this.BUCKET_CAPACITY, this.tokens + tokensToAdd);
        this.lastRefill = now;
    }

    public getStats() {
        return {
            tokens: this.tokens,
            dropped: this.droppedCount,
            rateMs: this.REFILL_RATE_MS
        };
    }
}

export const limitObserver = ObservabilityLimiter.getInstance();
