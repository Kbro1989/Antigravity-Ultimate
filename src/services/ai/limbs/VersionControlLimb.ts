import { NeuralLimb, LimbConfig } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { BaseIntent } from '../AITypes';

export interface VersionedAsset {
    id: string;
    version: string;
    versionHash: string;
    author: string;
    timestamp: number;
    type: string;
    asset: any;
    metadata: Record<string, any>;
    parent?: string;
    storageKey?: string;
}

export class VersionControlLimb extends NeuralLimb {
    name = 'VersionControlLimb';

    constructor(config: LimbConfig) {
        super(config);
    }

    async commit(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.COMMIT_CHANGES);
        const { asset, author, type, metadata } = params;
        await this.logActivity('commit_asset', 'pending', { type });

        const timestamp = Date.now();

        // Real hashing logic (SHA-256)
        const assetString = JSON.stringify(asset);
        const encoder = new TextEncoder();
        const data = encoder.encode(assetString);

        let versionHash: string;
        try {
            // Using web crypto for worker compatibility
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            versionHash = Array.from(new Uint8Array(hashBuffer))
                .map(b => b.toString(16).padStart(2, '0'))
                .join('');
        } catch (e) {
            // Fallback for node environments without global web crypto
            const cryptoNode = await import('crypto');
            versionHash = cryptoNode.createHash('sha256').update(assetString).digest('hex');
        }

        const currentVersion = await this.getLatestVersion(type, asset.name);
        const version = this.incrementVersion(currentVersion);

        const storageKey = `commits/${type}/${asset.name}/v${version}_${versionHash}.json`;

        const commit: VersionedAsset = {
            id: crypto.randomUUID(),
            version,
            versionHash,
            author,
            timestamp,
            type,
            asset,
            metadata: metadata || {},
            storageKey
        };

        // --- PERSISTENCE LAYER ---
        const commitData = JSON.stringify(commit, null, 2);

        // 1. Try Cloudflare KV
        if (this.env?.KV) {
            await this.env.KV.put(storageKey, commitData);
            // Update "latest" pointer
            await this.env.KV.put(`commits/${type}/${asset.name}/latest`, version);
        }
        // 2. Fallback to Local Bridge
        else {
            // Local path: .pog/commits/...
            const localPath = `C:/Users/Destiny/Desktop/New folder/POG-Ultimate/.pog/${storageKey}`;
            const { localBridgeClient } = await import('../../bridge/LocalBridgeService');
            await localBridgeClient.writeLocalFile(localPath, commitData);
            // We can't easily maintain a "latest" pointer file without reading all, or writing a sidebar file.
            // Writing strict latest file:
            await localBridgeClient.writeLocalFile(`C:/Users/Destiny/Desktop/New folder/POG-Ultimate/.pog/commits/${type}/${asset.name}/latest.txt`, version);
        }

        await this.logActivity('commit_asset', 'success', { version, hash: versionHash, storage: storageKey });

        return commit;
    }

    async history(params: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        const { type, name } = params;
        await this.logActivity('version_history', 'pending', params);

        // 1. Try Cloudflare KV
        if (this.env?.KV) {
            const prefix = `commits/${type}/${name}/v`; // v indicates version files
            const list = await this.env.KV.list({ prefix });
            return {
                status: 'success',
                source: 'kv',
                commits: list.keys.map((k: any) => k.name)
            };
        }

        // 2. Fallback to Bridge
        const localPath = `C:/Users/Destiny/Desktop/New folder/POG-Ultimate/.pog/commits/${type}/${name}`;
        try {
            const { localBridgeClient } = await import('../../bridge/LocalBridgeService');
            const files = await localBridgeClient.listDirectory(localPath);
            return {
                status: 'success',
                source: 'local_fs',
                commits: files.success && files.files ? files.files.map((f: any) => f.name) : []
            };
        } catch (e) {
            return { status: 'error', message: 'History unavailable in this environment.' };
        }
    }

    private async getLatestVersion(type: string, name: string): Promise<string> {
        // 1. Try KV
        if (this.env?.KV) {
            const latest = await this.env.KV.get(`commits/${type}/${name}/latest`);
            if (latest) return latest;
        }

        // 2. Try Local FS
        try {
            const { localBridgeClient } = await import('../../bridge/LocalBridgeService');
            const latestPath = `C:/Users/Destiny/Desktop/New folder/POG-Ultimate/.pog/commits/${type}/${name}/latest.txt`;
            const result = await localBridgeClient.readLocalFile(latestPath);
            if (result.success && result.content) {
                // Ensure plain text content is returned (bridge might base64?)
                // Bridge readLocalFile returns content as string (base64 if binary, but here it's text?)
                // Assuming utf8 if not specified base64 param.
                // Wait, readLocalFile usually handles text.
                // Checking previous usages: readLocalFile(path, base64?)
                return result.content.trim();
            }
        } catch (e) { }

        return "0.0.0";
    }

    private incrementVersion(version: string): string {
        const parts = version.split('.');
        if (parts.length >= 3) {
            const patch = parseInt(parts[2]) || 0;
            return `${parts[0]}.${parts[1]}.${patch + 1}`;
        }
        return "1.0.0";
    }
}
