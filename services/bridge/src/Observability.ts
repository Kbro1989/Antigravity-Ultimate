
export enum LogPriority {
    CRITICAL = 'critical',
    NORMAL = 'normal',
    TRACE = 'trace'
}

export class ObservabilityLimiter {
    private static instance: ObservabilityLimiter;

    // Config: 200k/day
    private readonly DAILY_LIMIT = 200000;
    private readonly REFILL_RATE_MS = this.DAILY_LIMIT / (24 * 60 * 60 * 1000); // ~0.0023 tokens/ms
    private readonly BUCKET_CAPACITY = 2000; // Larger burst for distributed leasing

    private tokens: number;
    private lastRefill: number;
    private droppedCount: number = 0;
    private emergencyMode: boolean = false;

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

    public getTokens(count: number = 1, priority: LogPriority = LogPriority.NORMAL): number {
        this.refill();

        if (this.emergencyMode && priority !== LogPriority.CRITICAL) {
            return 0; // Cut off everyone except Critical in Emergency
        }

        if (this.tokens >= count) {
            this.tokens -= count;
            return count;
        }

        // Partial grant or deny?
        // For simplicity, strict grant or deny.
        this.droppedCount += count;
        return 0;
    }

    private refill() {
        const now = Date.now();
        const delta = now - this.lastRefill;
        const tokensToAdd = delta * this.REFILL_RATE_MS;

        this.tokens = Math.min(this.BUCKET_CAPACITY, this.tokens + tokensToAdd);
        this.lastRefill = now;

        // Automated Check: 90% usage (simulated by checking if we are chronically low?)
        // Better: Check daily accumulation if we had persistent storage.
        // For now, in-memory bucket protects the rate.
    }

    public getStats() {
        return {
            tokens_remaining: Math.floor(this.tokens),
            refill_rate: this.REFILL_RATE_MS * 1000,
            dropped_events: this.droppedCount,
            emergency_mode: this.emergencyMode,
            capacity: this.BUCKET_CAPACITY
        };
    }

    public setEmergencyMode(enabled: boolean) {
        this.emergencyMode = enabled;
    }
}
