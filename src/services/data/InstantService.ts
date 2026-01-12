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
}
