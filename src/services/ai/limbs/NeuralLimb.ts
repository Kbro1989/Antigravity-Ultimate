import { nexusBus } from '../../core/NexusCommandBus';
import { logTask } from '../../core/LoggingService';
import { AgentCapability, assertCapability, AgentLaw } from '../AgentConstitution';
import { chronoshell, Chronoshell } from '../../core/Chronoshell';
import { BaseIntent } from '../AITypes';

export interface LimbConfig {
    id: string;
    userId: string;
    capabilities: string[];
    onAssetGenerated?: (asset: { type: string; url: string; metadata: any }) => void;
}

export abstract class NeuralLimb {
    public id: string;
    protected userId: string;
    protected capabilities: string[];
    protected chronos: Chronoshell;

    protected config: LimbConfig;

    constructor(config: LimbConfig) {
        this.config = config;
        this.id = config.id;
        this.userId = config.userId;
        this.capabilities = config.capabilities;
        this.chronos = chronoshell;
    }

    /**
     * Main entry point for the Limb to process an Intent.
     * Automatically dispatches to public methods based on action name.
     */
    async process(intent: BaseIntent & { modelId?: string; provider?: string }): Promise<any> {
        const { action, payload } = intent;

        // Remove limb prefix if present (e.g., 'audio_generate' -> 'generate')
        const methodSuffix = action.includes('_') ? action.split('_').slice(1).join('_') : action;

        // Strategy: Look for specific method first, then fallback to general action method
        const targetMethod = (this as any)[methodSuffix] || (this as any)[action];

        if (typeof targetMethod === 'function') {
            return await targetMethod.call(this, payload, intent);
        }

        // Fallback or explicit implementation requirement
        return await this.handleUnknownAction(intent);
    }

    protected async handleUnknownAction(intent: BaseIntent): Promise<any> {
        throw new Error(`Limb ${this.id} does not implement support for action: ${intent.action}`);
    }

    protected async logActivity(step: string, status: 'success' | 'failure' | 'pending', metadata?: any) {
        // Legacy system log
        await logTask({
            taskId: this.id,
            step,
            status,
            timestamp: Date.now(),
            metadata
        });

        // ULTIMATE temporal trace
        this.chronos.logTrace({
            layer: 'ai',
            action: `${this.id}_${step}`,
            metadata: { ...metadata, status }
        });
    }

    protected async persistAsset(type: string, url: string, metadata: any) {
        await this.logActivity(`asset_persistence`, 'pending', { type, url });
        if ((this as any).config?.onAssetGenerated) {
            (this as any).config.onAssetGenerated({ type, url, metadata });
        }
    }

    public hasCapability(cap: string): boolean {
        return this.capabilities.includes(cap);
    }

    /**
     * Enforces the agent constitution for a specific capability
     */
    protected enforceCapability(capability: AgentCapability, law?: AgentLaw) {
        assertCapability(this.constructor.name, capability, law);
    }
}
