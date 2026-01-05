import { NeuralLimb, LimbConfig } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';

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

    async process(intent: any): Promise<any> {
        const { action, payload } = intent;

        switch (action) {
            case 'commit_asset':
                return this.commitAsset(payload);
            default:
                throw new Error(`Unknown Version Control action: ${action}`);
        }
    }

    async commitAsset(options: {
        asset: any;
        author: string;
        type: string;
        metadata?: Record<string, any>;
    }): Promise<VersionedAsset> {
        this.enforceCapability(AgentCapability.COMMIT_CHANGES);
        await this.logActivity('commit_asset', 'pending', { type: options.type });

        const timestamp = Date.now();
        const version = "1.0.0"; // Mock versioning logic
        const versionHash = "hash_" + Math.random().toString(36).substring(7);

        // Git-like commit object
        const commit: VersionedAsset = {
            id: crypto.randomUUID(),
            version,
            versionHash,
            author: options.author,
            timestamp,
            type: options.type,
            asset: options.asset,
            metadata: options.metadata || {},
            storageKey: `commits/${options.type}/${options.asset.name}/v${version}_${versionHash}.json`
        };

        await this.logActivity('commit_asset', 'success', { version, hash: versionHash });

        return commit;
    }
}
