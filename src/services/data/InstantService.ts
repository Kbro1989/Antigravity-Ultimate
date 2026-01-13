import { init } from "@instantdb/admin";
import schema from "./instant.schema";
import type { Env } from "../../types/env";

export class InstantService {
    private static instance: InstantService;
    public db: any;

    private constructor(env: Env) {
        const appId = env.INSTANT_APP_ID || "9e151e9b-e6b2-4efd-88a4-c21276ae1e9b";
        const adminToken = env.INSTANT_APP_ADMIN_TOKEN || "bc107e6c-e6e1-4eee-a16e-733cff319750";

        this.db = init({
            appId,
            adminToken,
            schema
        });
        console.log(`[InstantService] Initialized with App ID: ${appId}`);
    }

    public static getInstance(env: Env): InstantService {
        if (!InstantService.instance) {
            InstantService.instance = new InstantService(env);
        }
        return InstantService.instance;
    }

    /**
     * Records a metabolism snapshot to InstantDB.
     * This offloads the data from internal state to a real-time database.
     */
    async recordMetabolism(userId: string, stats: any) {
        try {
            await this.db.transact([
                this.db.tx.metabolism[userId].update({
                    ...stats,
                    updatedAt: Date.now()
                })
            ]);
        } catch (e) {
            console.error('[InstantService] Failed to record metabolism:', e);
        }
    }

    /**
     * Records an AI trace to InstantDB.
     */
    async recordTrace(userId: string, trace: any) {
        try {
            await this.db.transact([
                this.db.tx.traces[this.db.id()].create({
                    ...trace,
                    userId,
                    timestamp: Date.now()
                })
            ]);
        } catch (e) {
            console.error('[InstantService] Failed to record trace:', e);
        }
    }

    // ==================== OVERFLOW ROUTING METHODS ====================
    // These methods handle high-volume data that would otherwise hit DO quota limits

    /**
     * Get assets from InstantDB (bypasses DO).
     */
    async getAssets(userId: string): Promise<any[]> {
        try {
            const result = await this.db.query({ assets: { $: { where: { userId } } } });
            return result?.assets || [];
        } catch (e) {
            console.warn('[InstantService] Failed to get assets:', e);
            return [];
        }
    }

    /**
     * Save asset to InstantDB (bypasses DO).
     */
    async saveAsset(userId: string, asset: any): Promise<string> {
        const assetId = `asset_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
        try {
            await this.db.transact([
                this.db.tx.assets[assetId].create({
                    ...asset,
                    id: assetId,
                    userId,
                    timestamp: Date.now()
                })
            ]);
            return assetId;
        } catch (e) {
            console.error('[InstantService] Failed to save asset:', e);
            throw e;
        }
    }

    /**
     * Get session stats from InstantDB (bypasses DO).
     */
    async getStats(userId: string): Promise<any> {
        try {
            const result = await this.db.query({ metabolism: { $: { where: { id: userId } } } });
            const stats = result?.metabolism?.[0];
            return stats || {
                cloudflareUsed: 0,
                cloudflareLimit: 10000,
                geminiSpent: 0,
                geminiLimit: 5.0,
                savingsEstimate: 0,
                source: 'instant_default'
            };
        } catch (e) {
            console.warn('[InstantService] Failed to get stats:', e);
            return {
                cloudflareUsed: 0,
                cloudflareLimit: 10000,
                geminiSpent: 0,
                geminiLimit: 5.0,
                savingsEstimate: 0,
                error: String(e),
                source: 'instant_fallback'
            };
        }
    }

    /**
     * Save session stats to InstantDB.
     */
    async saveStats(userId: string, stats: any): Promise<void> {
        try {
            await this.db.transact([
                this.db.tx.metabolism[userId].update({
                    ...stats,
                    id: userId,
                    updatedAt: Date.now()
                })
            ]);
        } catch (e) {
            console.error('[InstantService] Failed to save stats:', e);
        }
    }
}

