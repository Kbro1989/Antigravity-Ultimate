import { DurableObject } from "cloudflare:workers";
import { EncryptionService } from "../security/EncryptionService";
import { Env } from "../../types/env";

interface TokenEntry {
    provider: string; // e.g., 'openai', 'huggingface'
    encryptedKey: string;
    updatedAt: number;
    status: 'active' | 'revoked';
}

/**
 * UserTokenVaultDO
 * 
 * A Trauma-Hardened Durable Object for storing sensitive user credentials.
 * Features:
 * - SQLite storage for structure
 * - Application-layer encryption (AES-GCM)
 * - "Kill Switch" for instant revocation
 */
export class UserTokenVaultDO extends DurableObject<Env> {
    private sql: any;
    private masterKey: CryptoKey | null = null;
    private initialized = false;

    constructor(state: DurableObjectState, env: any) {
        super(state, env);
        // Initialize SQLite
        this.sql = state.storage.sql;

        // Create table if not exists
        this.sql.exec(`
            CREATE TABLE IF NOT EXISTS tokens (
                provider TEXT PRIMARY KEY,
                encrypted_key TEXT NOT NULL,
                updated_at INTEGER NOT NULL,
                status TEXT NOT NULL
            );
        `);
    }

    /**
     * Securely initialize the master key from environment secret
     */
    private async ensureKey() {
        if (!this.masterKey) {
            const secret = this.env.PLATFORM_BACKUP_KEY || "dev-fallback-key-do-not-use-in-prod";
            this.masterKey = await EncryptionService.importKey(secret);
        }
    }

    async fetch(request: Request): Promise<Response> {
        await this.ensureKey();
        const url = new URL(request.url);
        const path = url.pathname;

        try {
            // --- STORE KEY ---
            if (path === '/store' && request.method === 'POST') {
                const { provider, key } = await request.json() as any;
                if (!provider || !key) return new Response('Missing provider or key', { status: 400 });

                const encrypted = await EncryptionService.encrypt(key, this.masterKey!);

                this.sql.exec(`
                    INSERT OR REPLACE INTO tokens (provider, encrypted_key, updated_at, status)
                    VALUES (?, ?, ?, 'active')
                `, provider, encrypted, Date.now());

                return new Response(JSON.stringify({ status: 'stored', provider }), { status: 200 });
            }

            // --- GET KEY ---
            if (path === '/get' && request.method === 'GET') {
                const provider = url.searchParams.get('provider');
                if (!provider) return new Response('Missing provider param', { status: 400 });

                const result = this.sql.exec(`
                    SELECT encrypted_key, status FROM tokens WHERE provider = ?
                `, provider).one();

                if (!result) return new Response('Not found', { status: 404 });
                if (result.status === 'revoked') return new Response('Key revoked', { status: 403 });

                const decrypted = await EncryptionService.decrypt(result.encrypted_key as string, this.masterKey!);
                return new Response(JSON.stringify({ key: decrypted }), { status: 200 });
            }

            // --- KILL SWITCH ---
            if (path === '/kill-switch' && request.method === 'POST') {
                // Instantly revoke ALL tokens
                this.sql.exec(`UPDATE tokens SET status = 'revoked', updated_at = ?`, Date.now());
                console.log(`[UserTokenVault] KILL SWITCH ACTIVATED for ${this.ctx.id}`);
                return new Response(JSON.stringify({ status: 'all_revoked' }), { status: 200 });
            }

            // --- LIST STATUS (No keys) ---
            if (path === '/status' && request.method === 'GET') {
                const results = this.sql.exec(`SELECT provider, status, updated_at FROM tokens`).toArray();
                return new Response(JSON.stringify({ tokens: results }), { status: 200 });
            }

            return new Response('Not found', { status: 404 });

        } catch (e: any) {
            console.error('[UserTokenVault] Error:', e);
            return new Response(`Vault Error: ${e.message}`, { status: 500 });
        }
    }
}
