import { init, id } from "@instantdb/admin";

export interface MetabolismQuota {
    cloudflare: { tokens: number; limit: number; resetAt: number };
    gemini: { budget: number; limit: number; resetAt: number };
    tier: string;
    updatedAt: number;
}

/**
 * MetabolismService
 * 
 * Bridges POG-Ultimate to InstantDB for persistent economy tracking.
 * Offloads state from Durable Objects to reduce memory pressure and hop count.
 */
export class MetabolismService {
    private db: any;

    constructor(env: any) {
        if (!env.INSTANT_APP_ID || !env.INSTANT_ADMIN_TOKEN) {
            console.warn("[MetabolismService] Missing InstantDB credentials. Economy tracking disabled.");
            this.db = null;
            return;
        }
        try {
            this.db = init({
                appId: env.INSTANT_APP_ID,
                adminToken: env.INSTANT_ADMIN_TOKEN
            });
        } catch (e) {
            console.warn("[MetabolismService] Failed to initialize InstantDB client:", e);
            this.db = null;
        }
    }

    /**
     * Get or Initialize user quota from InstantDB
     */
    async getQuota(userId: string): Promise<MetabolismQuota> {
        // Fallback if DB is not initialized (e.g. missing credentials)
        if (!this.db) {
            return this.getDefaultQuota();
        }

        try {
            // Use 'asUser' if possible or ensure admin token was provided.
            // If we are in a context where we might not have admin rights, we should use `db.asUser(userId)` logic if supported 
            // but the error suggests we need admin token for root queries or use asUser.
            // Since this is a server-side service, we might want to impersonate or just use admin.

            // For now, we wrap in try/catch and return default if it fails, which is what the current catch block does,
            // BUT the init() call itself might have failed or created a limited client.

            const query = { metabolism: { $: { where: { userId } } } };
            const result = await this.db.query(query);
            const entry = result.metabolism[0];

            if (!entry) {
                return await this.initUser(userId);
            }

            // Check for resets (Daily/Monthly logic preserved from DO implementation)
            return await this.checkResets(entry);
        } catch (e) {
            console.error("[MetabolismService] getQuota failed:", e);
            return this.getDefaultQuota();
        }
    }

    /**
     * Deduct usage after AI action
     */
    async deductUsage(userId: string, provider: string, tokens: number, cost: number): Promise<void> {
        try {
            const quota = await this.getQuota(userId);
            const entry = (await this.db.query({ metabolism: { $: { where: { userId } } } })).metabolism[0];

            if (!entry) return;

            if (provider === 'cloudflare') {
                await this.db.transact(
                    this.db.tx.metabolism[entry.id].update({
                        cfTokens: Math.max(0, entry.cfTokens - tokens),
                        updatedAt: Date.now()
                    })
                );
            } else if (provider === 'gemini') {
                await this.db.transact(
                    this.db.tx.metabolism[entry.id].update({
                        geminiBudget: Math.max(0, entry.geminiBudget - cost),
                        updatedAt: Date.now()
                    })
                );
            }
        } catch (e) {
            console.error("[MetabolismService] deductUsage failed:", e);
        }
    }

    private async initUser(userId: string): Promise<MetabolismQuota> {
        const quota = this.getDefaultQuota();
        const entryId = id();

        await this.db.transact(
            this.db.tx.metabolism[entryId].create({
                userId,
                cfTokens: quota.cloudflare.limit,
                cfLimit: quota.cloudflare.limit,
                cfResetAt: quota.cloudflare.resetAt,
                geminiBudget: quota.gemini.limit,
                geminiLimit: quota.gemini.limit,
                geminiResetAt: quota.gemini.resetAt,
                tier: quota.tier,
                updatedAt: Date.now()
            })
        );

        return quota;
    }

    private async checkResets(entry: any): Promise<MetabolismQuota> {
        const now = Date.now();
        let needsUpdate = false;
        const updates: any = {};

        // Day Reset (Cloudflare)
        if (now >= entry.cfResetAt) {
            const limit = entry.tier === 'pro' ? 100000 : 10000;
            updates.cfTokens = limit;
            updates.cfLimit = limit;
            updates.cfResetAt = this.getNextDayReset();
            needsUpdate = true;
        }

        // Month Reset (Gemini)
        if (now >= entry.geminiResetAt) {
            const limit = entry.tier === 'pro' ? 25.0 : 5.0;
            updates.geminiBudget = limit;
            updates.geminiLimit = limit;
            updates.geminiResetAt = this.getNextMonthReset();
            needsUpdate = true;
        }

        if (needsUpdate) {
            updates.updatedAt = now;
            await this.db.transact(this.db.tx.metabolism[entry.id].update(updates));
            // Re-fetch or return merged
            return {
                cloudflare: { tokens: updates.cfTokens || entry.cfTokens, limit: updates.cfLimit || entry.cfLimit, resetAt: updates.cfResetAt || entry.cfResetAt },
                gemini: { budget: updates.geminiBudget || entry.geminiBudget, limit: updates.geminiLimit || entry.geminiLimit, resetAt: updates.geminiResetAt || entry.geminiResetAt },
                tier: entry.tier,
                updatedAt: now
            };
        }

        return {
            cloudflare: { tokens: entry.cfTokens, limit: entry.cfLimit, resetAt: entry.cfResetAt },
            gemini: { budget: entry.geminiBudget, limit: entry.geminiLimit, resetAt: entry.geminiResetAt },
            tier: entry.tier,
            updatedAt: entry.updatedAt
        };
    }

    private getDefaultQuota(): MetabolismQuota {
        return {
            cloudflare: { tokens: 10000, limit: 10000, resetAt: this.getNextDayReset() },
            gemini: { budget: 5.0, limit: 5.0, resetAt: this.getNextMonthReset() },
            tier: 'free',
            updatedAt: Date.now()
        };
    }

    private getNextDayReset(): number {
        const d = new Date();
        d.setUTCDate(d.getUTCDate() + 1);
        d.setUTCHours(0, 0, 0, 0);
        return d.getTime();
    }

    private getNextMonthReset(): number {
        const d = new Date();
        d.setUTCMonth(d.getUTCMonth() + 1, 1);
        d.setUTCHours(0, 0, 0, 0);
        return d.getTime();
    }
}
