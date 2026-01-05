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

        const commit: VersionedAsset = {
            id: crypto.randomUUID(),
            version,
            versionHash,
            author,
            timestamp,
            type,
            asset,
            metadata: metadata || {},
            storageKey: `commits/${type}/${asset.name}/v${version}_${versionHash}.json`
        };

        await this.logActivity('commit_asset', 'success', { version, hash: versionHash });

        return commit;
    }

    async history(params: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        await this.logActivity('version_history', 'pending', params);
        return []; // Placeholder
    }

    private async getLatestVersion(type: string, name: string): Promise<string> {
        return "1.0.0";
    }

    private incrementVersion(version: string): string {
        const parts = version.split('.');
        if (parts.length === 3) {
            const patch = parseInt(parts[2]) + 1;
            return `${parts[0]}.${parts[1]}.${patch}`;
        }
        return "1.0.1";
    }
}
