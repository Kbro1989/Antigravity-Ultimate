import { ScriptFS, ScriptFSEntry } from "./scriptrunner";
import { Buffer } from "buffer"; // Standard shim import

/**
 * Cloud-Native ScriptFS implementation for Cloudflare Workers.
 * Resolves files from R2 and uses KV for rapid manifest lookups.
 */
export class CloudScriptFS implements ScriptFS {
    constructor(private env: any, private prefix: string = "") { }

    private getFullKey(sub: string): string {
        let key = this.prefix ? `${this.prefix}/${sub}` : sub;
        // Normalize slashes
        return key.replace(/\\/g, "/").replace(/\/+/g, "/");
    }

    async mkDir(name: string): Promise<any> {
        // No-op for R2/KV but we can log it
        console.log(`[CloudScriptFS] mkDir: ${name} (Simulated)`);
        return Promise.resolve();
    }

    async writeFile(name: string, data: Buffer | string): Promise<void> {
        const key = this.getFullKey(name);
        if (!this.env.ASSETS_BUCKET) throw new Error("ASSETS_BUCKET not bound");

        // R2 Bucket.put accepts string, ArrayBuffer, ArrayBufferView, or ReadableStream.
        // Buffer from 'buffer' shim is an Uint8Array, so it's compatible.
        await this.env.ASSETS_BUCKET.put(key, data);
        console.log(`[CloudScriptFS] Written: ${key} to R2`);
    }

    async readFileText(name: string): Promise<string> {
        const buffer = await this.readFileBuffer(name);
        return new TextDecoder().decode(buffer);
    }

    async readFileBuffer(name: string): Promise<Buffer> {
        const key = this.getFullKey(name);

        // 1. Try R2 (Primary Storage)
        if (this.env.ASSETS_BUCKET) {
            const obj = await this.env.ASSETS_BUCKET.get(key);
            if (obj) {
                const arr = await obj.arrayBuffer();
                return Buffer.from(arr);
            }
        }

        // 2. Try KV (Static Cache Fallback)
        if (this.env.KV) {
            const kvData = await this.env.KV.get(key, { type: "arrayBuffer" });
            if (kvData) {
                return Buffer.from(kvData);
            }
        }

        throw new Error(`[CloudScriptFS] File not found: ${key}`);
    }

    async readDir(dir: string): Promise<ScriptFSEntry[]> {
        const fullDir = this.getFullKey(dir);
        if (!this.env.ASSETS_BUCKET) return [];

        // List from R2 (Limited to first 1000)
        const list = await this.env.ASSETS_BUCKET.list({ prefix: fullDir + "/" });

        // Transform to ScriptFSEntry
        const entries: ScriptFSEntry[] = [];

        // Files
        for (const obj of list.objects) {
            const rel = obj.key.substring(fullDir.length).replace(/^\//, "");
            if (rel && !rel.includes("/")) {
                entries.push({ name: rel, kind: "file" });
            }
        }

        // Directories (Common Prefixes)
        for (const cp of list.delimitedPrefixes) {
            const rel = cp.substring(fullDir.length).replace(/^\//, "").replace(/\/$/, "");
            if (rel) {
                entries.push({ name: rel, kind: "directory" });
            }
        }

        return entries;
    }

    async copyFile(from: string, to: string, symlink: boolean): Promise<void> {
        const fromKey = this.getFullKey(from);
        const toKey = this.getFullKey(to);

        if (!this.env.ASSETS_BUCKET) throw new Error("ASSETS_BUCKET not bound");

        const obj = await this.env.ASSETS_BUCKET.get(fromKey);
        if (!obj) throw new Error(`Source file not found: ${fromKey}`);

        await this.env.ASSETS_BUCKET.put(toKey, await obj.arrayBuffer());
    }

    async unlink(name: string): Promise<void> {
        const key = this.getFullKey(name);
        if (this.env.ASSETS_BUCKET) {
            await this.env.ASSETS_BUCKET.delete(key);
        }
    }
}
