
const QUOTA_LIMITS = {
    CLOUDFLARE_DAILY: 100000,
    GEMINI_FLASH_DAILY: 1500,
    PAID_HARD_LIMIT_USD: 1.00
};

export class HardBlockEnforcer {
    private storage: DurableObjectStorage;
    private isPaidEnabled: boolean = false;
    private lastReset: number = 0;

    constructor(storage: DurableObjectStorage) {
        this.storage = storage;
    }

    async initialize() {
        const state = await this.storage.get<{ paid_enabled: boolean, last_reset: number }>('hardblock_state');
        if (state) {
            this.isPaidEnabled = state.paid_enabled;
            this.lastReset = state.last_reset;
        }
        await this.checkReset();
    }

    private async checkReset() {
        const now = new Date();
        const last = new Date(this.lastReset);

        if (now.getUTCDate() !== last.getUTCDate() || now.getTime() - this.lastReset > 24 * 60 * 60 * 1000) {
            console.log('[HardBlock] 🔄 DAILY QUOTA RESET');
            // Clear usage keys
            const keys = await this.storage.list({ prefix: 'usage_' });
            const keyArray = Array.from(keys.keys());
            await this.storage.delete(keyArray);

            this.lastReset = Date.now();
            await this.saveState();
        }
    }

    private async saveState() {
        await this.storage.put('hardblock_state', {
            paid_enabled: this.isPaidEnabled,
            last_reset: this.lastReset
        });
    }

    async checkQuota(provider: string, user_id: string): Promise<boolean> {
        await this.checkReset();
        const today = new Date().toISOString().split('T')[0];
        // Keys: usage_{provider}_{date}_{user_id} ? 
        // Or global usage for the DO if it's per-user DO?
        // Assuming SessionAgent is per-user, so 'usage_{provider}' is fine for this user.

        const usageKey = `usage_${provider}`;
        const currentUsage = (await this.storage.get<number>(usageKey)) || 0;

        if (provider === 'cloudflare') return currentUsage < QUOTA_LIMITS.CLOUDFLARE_DAILY;
        if (provider === 'gemini') return currentUsage < QUOTA_LIMITS.GEMINI_FLASH_DAILY;
        if (provider === 'paid') {
            if (!this.isPaidEnabled) return false;
            const paidUsage = (await this.storage.get<number>('usage_paid_usd')) || 0;
            return paidUsage < QUOTA_LIMITS.PAID_HARD_LIMIT_USD;
        }

        return true;
    }

    async trackUsage(provider: string, tokens: number, costUsd: number = 0) {
        const usageKey = `usage_${provider}`;
        const current = (await this.storage.get<number>(usageKey)) || 0;
        await this.storage.put(usageKey, current + 1); // Track requests count or tokens? name is 'usage', usually requests for limits.

        // Also track detailed DB metrics (if D1 binding available, but here we are in DO)
        // ideally we push to a queue or D1.

        if (costUsd > 0) {
            const paidKey = 'usage_paid_usd';
            const currentPaid = (await this.storage.get<number>(paidKey)) || 0.0;
            await this.storage.put(paidKey, currentPaid + costUsd);
        }
    }

    async setPaidEnabled(enabled: boolean) {
        this.isPaidEnabled = enabled;
        await this.saveState();
    }

    async getUsageReport(userId: string) {
        // Aggregate usage from storage
        const cfUsage = await this.storage.get<number>('usage_cloudflare') || 0;
        const geminiUsage = await this.storage.get<number>('usage_gemini') || 0;
        const paidUsage = await this.storage.get<number>('usage_paid_usd') || 0.0;
        const externalUsage = await this.storage.get<number>('usage_external') || 0;

        // Total Requests roughly
        const totalRequests = cfUsage + geminiUsage + externalUsage;

        // Return structured data for dashboard
        return {
            tokensUsed: totalRequests, // We're tracking requests as tokens for now in the simple view
            tokensLimit: QUOTA_LIMITS.CLOUDFLARE_DAILY,
            cost: paidUsage,
            requests: totalRequests,
            breakdown: {
                cloudflare: cfUsage,
                gemini: geminiUsage,
                external: externalUsage
            }
        };
    }
}
