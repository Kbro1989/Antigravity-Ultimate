import { DurableObject } from "cloudflare:workers";

interface Env {
    METABOLISM_DO: DurableObjectNamespace;
    INSTANT_APP_ID: string;
    INSTANT_APP_ADMIN_TOKEN: string;
}

import { InstantService } from "../data/InstantService";

interface QuotaStatus {
    cloudflare: { tokens: number; limit: number; resetAt: number };
    gemini: { budget: number; limit: number; resetAt: number };
    tier: string;
}

/**
 * MetabolismDO
 * 
 * The metabolic engine of the neural mesh.
 * Tracks and enforces energy (token/budget) consumption limits across all limbs.
 * Persists state using SQLite to prevent memory loss during sleep cycles.
 */
export class MetabolismDO extends DurableObject<Env> {
    private sql: any;

    constructor(state: DurableObjectState, env: Env) {
        super(state, env);
        this.sql = state.storage.sql;

        // Initialize schema
        this.sql.exec(`
            CREATE TABLE IF NOT EXISTS metabolism (
                user_id TEXT PRIMARY KEY,
                tier TEXT NOT NULL DEFAULT 'free',
                cf_tokens INTEGER NOT NULL DEFAULT 10000,
                cf_limit INTEGER NOT NULL DEFAULT 10000,
                cf_reset_at INTEGER NOT NULL,
                gemini_spend REAL NOT NULL DEFAULT 0,
                gemini_limit REAL NOT NULL DEFAULT 5.0,
                gemini_reset_at INTEGER NOT NULL
            );
        `);
    }

    async fetch(request: Request): Promise<Response> {
        const url = new URL(request.url);
        const path = url.pathname;

        try {
            // --- GET METRICS/QUOTA ---
            if (path === '/quota' && request.method === 'GET') {
                const userId = url.searchParams.get('userId');
                if (!userId) return new Response('Missing userId', { status: 400 });

                const quota = this.getOrInitUser(userId);
                return new Response(JSON.stringify(quota), { status: 200 });
            }

            // --- DEDUCT USAGE ---
            if (path === '/deduct' && request.method === 'POST') {
                const { userId, provider, amount, cost } = await request.json() as any;
                if (!userId || !provider) return new Response('Invalid payload', { status: 400 });

                this.deduct(userId, provider, amount || 0, cost || 0);
                return new Response(JSON.stringify({ status: 'consumed' }), { status: 200 });
            }

            // --- FORCE RESET (Admin/Debug) ---
            if (path === '/reset' && request.method === 'POST') {
                const { userId } = await request.json() as any;
                if (!userId) return new Response('Missing userId', { status: 400 });

                this.sql.exec(`DELETE FROM metabolism WHERE user_id = ?`, userId);
                return new Response(JSON.stringify({ status: 'metabolism_reset' }), { status: 200 });
            }

            return new Response('Not found', { status: 404 });

        } catch (e: any) {
            console.error('[MetabolismDO] Error:', e);
            return new Response(`Metabolic Failure: ${e.message}`, { status: 500 });
        }
    }

    /**
     * Get user state, initializing or resetting if needed
     */
    private getOrInitUser(userId: string): QuotaStatus {
        let row = this.sql.exec(`SELECT * FROM metabolism WHERE user_id = ?`, userId).one();
        const now = Date.now();

        // Init if missing
        if (!row) {
            const nextDay = this.getNextDayReset();
            const nextMonth = this.getNextMonthReset();
            this.sql.exec(`
                INSERT INTO metabolism (user_id, cf_reset_at, gemini_reset_at)
                VALUES (?, ?, ?)
            `, userId, nextDay, nextMonth);
            row = this.sql.exec(`SELECT * FROM metabolism WHERE user_id = ?`, userId).one();
        }

        // Check Resets
        let updated = false;

        // Cloudflare Daily Reset
        if (now >= row.cf_reset_at) {
            const limit = row.tier === 'pro' ? 100000 : 10000;
            this.sql.exec(`
                UPDATE metabolism 
                SET cf_tokens = ?, cf_limit = ?, cf_reset_at = ?
                WHERE user_id = ?
            `, limit, limit, this.getNextDayReset(), userId);
            updated = true;
        }

        // Gemini Monthly Reset
        if (now >= row.gemini_reset_at) {
            const limit = row.tier === 'pro' ? 25.0 : 5.0;
            this.sql.exec(`
                UPDATE metabolism 
                SET gemini_spend = 0, gemini_limit = ?, gemini_reset_at = ?
                WHERE user_id = ?
            `, limit, this.getNextMonthReset(), userId);
            updated = true;
        }

        if (updated) {
            row = this.sql.exec(`SELECT * FROM metabolism WHERE user_id = ?`, userId).one();
        }

        return {
            cloudflare: {
                tokens: row.cf_tokens,
                limit: row.cf_limit,
                resetAt: row.cf_reset_at
            },
            gemini: {
                budget: row.gemini_limit - row.gemini_spend, // budget remaining
                limit: row.gemini_limit,
                resetAt: row.gemini_reset_at
            },
            tier: row.tier
        };
    }

    private async syncToInstant(userId: string, quota: QuotaStatus) {
        try {
            const instant = InstantService.getInstance(this.env as any);
            await instant.recordMetabolism(userId, {
                cfTokens: quota.cloudflare.tokens,
                cfLimit: quota.cloudflare.limit,
                cfResetAt: quota.cloudflare.resetAt,
                geminiBudget: quota.gemini.budget,
                geminiLimit: quota.gemini.limit,
                geminiResetAt: quota.gemini.resetAt,
                tier: quota.tier
            });
        } catch (e) {
            console.warn('[MetabolismDO] InstantDB Sync Failed', e);
        }
    }

    private deduct(userId: string, provider: string, tokens: number, cost: number) {
        const quota = this.getOrInitUser(userId); // Ensure exists/reset

        if (provider === 'cloudflare') {
            this.sql.exec(`
                UPDATE metabolism 
                SET cf_tokens = MAX(0, cf_tokens - ?)
                WHERE user_id = ?
            `, tokens, userId);
        } else if (provider === 'gemini') {
            this.sql.exec(`
                UPDATE metabolism 
                SET gemini_spend = gemini_spend + ?
                WHERE user_id = ?
            `, cost, userId);
        }

        // Sync to InstantDB (Async/WaitUntil if possible)
        this.syncToInstant(userId, this.getOrInitUser(userId));
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
