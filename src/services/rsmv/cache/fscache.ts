import { get, set } from 'idb-keyval';
// using global Buffer

/**
 * Universal Cache Interface
 * Supports:
 * 1. Cloudflare D1 (Server-side)
 * 2. IndexedDB (Client-side)
 * 3. In-Memory Fallback
 */

export class FileSourceFsCache {
    ready: Promise<void>;
    isready: boolean = false;
    useD1: boolean = false;
    useIDB: boolean = false;

    // Cloudflare Bindings (injected via global env if available)
    private db?: D1Database;
    private kv?: KVNamespace;

    constructor(filename: string) {
        // Detect Environment
        this.useD1 = (typeof process === 'undefined' || (process as any).browser) === false && !!(globalThis as any).env?.DB;
        this.useIDB = typeof window !== 'undefined' && !!window.indexedDB;

        if (this.useD1) {
            this.db = (globalThis as any).env.DB;
        }

        this.ready = this.init();
    }

    async init() {
        if (this.useIDB) {
            // IDB initialization if needed (idb-keyval handles it mostly)
            console.log('[Cache] using IndexedDB');
        } else if (this.useD1) {
            console.log('[Cache] using Cloudflare D1');
            // Ensure table exists
            try {
                await this.db!.prepare(`
                    CREATE TABLE IF NOT EXISTS groupcache (
                        major INTEGER, 
                        minor INTEGER, 
                        crc INTEGER, 
                        file BLOB,
                        PRIMARY KEY (major, minor, crc)
                    )
                `).run();
            } catch (e) {
                console.error('[Cache] D1 Init Failed', e);
            }
        } else {
            console.warn('[Cache] No persistence layer found. Using minimal in-memory strategy?');
        }
        this.isready = true;
    }

    static tryCreate() {
        return new FileSourceFsCache('default');
    }

    async addFile(major: number, minor: number, crc: number, file: Buffer | Uint8Array) {
        if (!this.isready) await this.ready;

        const key = `cache:${major}:${minor}:${crc}`;

        if (this.useIDB) {
            await set(key, file);
        } else if (this.useD1) {
            // Write to D1
            // Note: D1 has limits on BLOB size. If > 100KB, should use R2. 
            // For now, assuming small cache headers.
            try {
                await this.db!.prepare(
                    `INSERT OR REPLACE INTO groupcache (major, minor, crc, file) VALUES (?, ?, ?, ?)`
                ).bind(major, minor, crc, new Uint8Array(file)).run();
            } catch (e) {
                console.error('[Cache] D1 Write Failed', e);
            }
        }
    }

    async getFile(major: number, minor: number, crc: number): Promise<Buffer | null> {
        if (!this.isready) await this.ready;

        const key = `cache:${major}:${minor}:${crc}`;

        if (this.useIDB) {
            const val = await get(key);
            if (val) return Buffer.from(val);
        } else if (this.useD1) {
            try {
                const result = await this.db!.prepare(
                    `SELECT file FROM groupcache WHERE major=? AND minor=? AND crc=?`
                ).bind(major, minor, crc).first('file');

                if (result) {
                    // D1 returns ArrayBuffer for BLOBs
                    return Buffer.from(result as ArrayBuffer);
                }
            } catch (e) {
                console.error('[Cache] D1 Read Failed', e);
            }
        }

        return null;
    }
}

