import { localBridgeClient, SyncMode } from '../bridge/LocalBridgeService';

/**
 * GhostCacheBridge
 * 
 * Specialized service for secure, read-only access to local game caches (RS3)
 * and professional DCC tools (Blender 5.0).
 * 
 * Works in tandem with the LocalBridgeService to bridge the gap between
 * the Cloudflare sandbox and the User's local workstation.
 */
export class GhostCacheBridge {
    private readonly JAGEX_CACHE_ROOT = 'C:/Users/Destiny/Desktop/New folder/POG-Ultimate/public/assets/shadow_cache';
    private readonly BLENDER_PATH = 'C:/Program Files/Blender Foundation/Blender 5.0/blender.exe';

    /**
     * Verifies if the local RS3 cache is accessible through the bridge.
     */
    async verifyCacheStatus(): Promise<{ success: boolean; root: string; message: string }> {
        try {
            const stat = await localBridgeClient.statFile(this.JAGEX_CACHE_ROOT);
            if (stat.success) {
                return {
                    success: true,
                    root: this.JAGEX_CACHE_ROOT,
                    message: "RS3 Local Cache Detected and Verified."
                };
            }
            return {
                success: false,
                root: this.JAGEX_CACHE_ROOT,
                message: "Local Cache not found. Ensure Jagex Launcher has downloaded the client."
            };
        } catch (e) {
            return { success: false, root: this.JAGEX_CACHE_ROOT, message: "Bridge Offline." };
        }
    }

    /**
     * Lists files from the specific RS3 cache sub-directory.
     */
    async listCacheFiles(subDir: string = 'RuneScape') {
        const fullPath = `${this.JAGEX_CACHE_ROOT}/${subDir}`;
        return localBridgeClient.listDirectory(fullPath);
    }

    /**
     * Reads an RS3 cache blob.
     */
    async readCacheFile(filePath: string) {
        // Ensure the path is within the allowed Jagex root for safety
        if (!filePath.startsWith(this.JAGEX_CACHE_ROOT)) {
            throw new Error("Access Denied: Path outside Jagex Cache root.");
        }
        return localBridgeClient.readLocalFile(filePath, true); // Always base64 for binary
    }

    /**
     * DCC Integration: Launch Blender with a specific model or project.
     */
    async launchBlender(projectPath?: string) {
        const command = projectPath
            ? `"${this.BLENDER_PATH}" "${projectPath}"`
            : `"${this.BLENDER_PATH}"`;

        console.log(`[GhostCacheBridge] Launching DCC: ${command}`);
        return localBridgeClient.runTerminalCommand(command);
    }

    /**
     * Pushes a model (as GLB) directly to Blender for professional editing.
     */
    async exportToBlender(glbBase64: string, filename: string) {
        const stagingPath = `${this.JAGEX_CACHE_ROOT}/staging/${filename}.glb`;

        // 1. Write the GLB to a staging area
        await localBridgeClient.writeLocalFile(stagingPath, glbBase64, true);

        // 2. Launch Blender with the staged file
        return this.launchBlender(stagingPath);
    }

    /**
     * CLOUD-FIRST INGESTION: Writes dropped cache files to the Shadow Cache.
     */
    async ingestCacheFile(filename: string, base64Content: string) {
        const targetPath = `${this.JAGEX_CACHE_ROOT}/${filename}`;
        console.log(`[GhostCacheBridge] Ingesting into Shadow Cache: ${targetPath}`);
        return localBridgeClient.writeLocalFile(targetPath, base64Content, true);
    }

    /**
     * DCC INGESTION: Imports an external asset (like a modified GLB from Blender) into the project.
     */
    async ingestExternalAsset(sourcePath: string, targetName: string) {
        console.log(`[GhostCacheBridge] Importing external asset: ${sourcePath} -> ${targetName}`);
        const data = await localBridgeClient.readLocalFile(sourcePath, true);
        if (data.success && data.content) {
            const targetPath = `${this.JAGEX_CACHE_ROOT}/innovations/${targetName}`;
            return localBridgeClient.writeLocalFile(targetPath, data.content, true);
        }
        return { success: false, message: "Failed to read external asset." };
    }
}

export const ghostCacheBridge = new GhostCacheBridge();
