import { ScriptFS, ScriptFSEntry } from "./scriptrunner";
import { Buffer } from "buffer";

/**
 * HttpScriptFS - Browser-Compatible Asset Loader
 * Fetches assets via the Worker's HTTP API (/ai/assets/*)
 */
export class HttpScriptFS implements ScriptFS {
    constructor(private prefix: string = "") { }

    private getUrl(name: string): string {
        // Construct URL pointing to the Worker's asset endpoint
        // Normalize path separators
        const cleanName = name.replace(/\\/g, '/');
        const cleanPrefix = this.prefix.replace(/\\/g, '/');
        const fullPath = cleanPrefix ? `${cleanPrefix}/${cleanName}` : cleanName;

        // Use relative URL so it works on both localhost and cloud domain
        return `/ai/assets/${fullPath}`;
    }

    async readFileBuffer(name: string): Promise<Buffer> {
        const url = this.getUrl(name);
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
            const arrayBuffer = await res.arrayBuffer();
            return Buffer.from(arrayBuffer);
        } catch (e: any) {
            console.error(`[HttpScriptFS] Failed to load ${name}:`, e);
            throw new Error(`File not found: ${name} (${e.message})`);
        }
    }

    async readFileText(name: string): Promise<string> {
        const url = this.getUrl(name);
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
            return await res.text();
        } catch (e: any) {
            console.error(`[HttpScriptFS] Failed to load text ${name}:`, e);
            throw new Error(`File not found: ${name}`);
        }
    }

    async readDir(dir: string): Promise<ScriptFSEntry[]> {
        const cleanDir = dir.replace(/\\/g, '/');
        const cleanPrefix = this.prefix.replace(/\\/g, '/');
        const fullPath = cleanPrefix ? `${cleanPrefix}/${cleanDir}` : cleanDir;

        try {
            const res = await fetch(`/ai/assets-list/${fullPath}`);
            if (!res.ok) {
                console.warn(`[HttpScriptFS] List failed for ${fullPath}: ${res.status}`);
                return [];
            }
            const data = await res.json();
            if (data.success && Array.isArray(data.files)) {
                return data.files.map((f: any) => ({
                    name: f.name,
                    kind: 'file', // R2 list is flat-ish, assuming file unless delimited
                    size: f.size
                }));
            }
            return [];
        } catch (e) {
            console.error("[HttpScriptFS] Directory list error:", e);
            return [];
        }
    }

    // Write operations are not supported in Browser -> Worker flow (Read-Only)
    async mkDir(name: string): Promise<void> {
        throw new Error("Read-only file system");
    }
    async writeFile(name: string, data: string | Buffer): Promise<void> {
        throw new Error("Read-only file system");
    }
    async copyFile(from: string, to: string, symlink: boolean): Promise<void> {
        throw new Error("Read-only file system");
    }
    async unlink(name: string): Promise<void> {
        throw new Error("Read-only file system");
    }
}
