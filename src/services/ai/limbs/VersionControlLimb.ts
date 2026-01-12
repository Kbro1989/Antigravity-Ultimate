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

        const assetString = JSON.stringify(asset);
        const encoder = new TextEncoder();
        const data = encoder.encode(assetString);

        // Sovereignty: Use Web Crypto (Edge Native)
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const versionHash = Array.from(new Uint8Array(hashBuffer))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');

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

        // --- SOVEREIGN PERSISTENCE ---
        const commitData = JSON.stringify(commit, null, 2);

        if (this.env?.KV) {
            await this.env.KV.put(storageKey, commitData);
            await this.env.KV.put(`commits/${type}/${asset.name}/latest`, version);
        } else {
            console.warn('[VersionControlLimb] KV unavailable. Persistence skipped.');
        }

        await this.logActivity('commit_asset', 'success', { version, hash: versionHash, storage: storageKey });

        return commit;
    }

    async history(params: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        const { type, name } = params;
        await this.logActivity('version_history', 'pending', params);

        if (this.env?.KV) {
            const prefix = `commits/${type}/${name}/v`;
            const list = await this.env.KV.list({ prefix });
            return {
                status: 'success',
                source: 'kv',
                commits: list.keys.map((k: any) => k.name)
            };
        }

        return { status: 'error', message: 'History unavailable (KV link missing).' };
    }

    private async getLatestVersion(type: string, name: string): Promise<string> {
        if (this.env?.KV) {
            const latest = await this.env.KV.get(`commits/${type}/${name}/latest`);
            if (latest) return latest;
        }
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
