
import { ModelResponse, ModelRequest } from './ModelRouter';

// Simple FNV-1a hash for cache keys
function hashString(str: string): string {
    let hash = 2166136261;
    for (let i = 0; i < str.length; i++) {
        hash ^= str.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16);
}

export class AICacheService {
    private static instance: AICacheService;
    private cacheEnabled = true;

    private constructor() { }

    static getInstance() {
        if (!AICacheService.instance) {
            AICacheService.instance = new AICacheService();
        }
        return AICacheService.instance;
    }

    private getCacheKey(request: ModelRequest): string {
        const payload = JSON.stringify({
            model: request.options?.model || 'default',
            type: request.type,
            prompt: request.prompt,
            system: request.systemPrompt,
            history: request.history?.length || 0 // Rough history check
        });
        return `ai_cache:${hashString(payload)}`;
    }

    async getCachedResponse(request: ModelRequest): Promise<ModelResponse | null> {
        if (!this.cacheEnabled) return null;

        try {
            // Bridge/Cloudflare based KV access override
            // Prioritize standard fetch if agentAPI not available or fallback to localStorage for dev
            const key = this.getCacheKey(request);

            if (typeof globalThis !== 'undefined' && 'localStorage' in globalThis) {
                const cached = globalThis.localStorage.getItem(key);

                if (cached) {
                    const entry = JSON.parse(cached);
                    if (Date.now() < entry.expires) {
                        console.log(`[AICache] HIT: ${key} (${entry.data.model})`);
                        return entry.data as ModelResponse;
                    } else {
                        localStorage.removeItem(key);
                    }
                }
            }
        } catch (e) {
            console.warn('[AICache] Read failed', e);
        }
        return null;
    }

    async setCachedResponse(request: ModelRequest, response: ModelResponse) {
        if (!this.cacheEnabled) return;
        if (response.content && response.content.length > 50000) return; // Don't cache huge responses in LS

        try {
            const key = this.getCacheKey(request);
            const entry = {
                data: response,
                expires: Date.now() + (24 * 60 * 60 * 1000) // 24h TTL
            };
            if (typeof globalThis !== 'undefined' && 'localStorage' in globalThis) {
                globalThis.localStorage.setItem(key, JSON.stringify(entry));
                console.log(`[AICache] SET: ${key}`);
            }
        } catch (e) {
            console.warn('[AICache] Write failed', e);
        }
    }
}

export const aiCacheService = AICacheService.getInstance();
