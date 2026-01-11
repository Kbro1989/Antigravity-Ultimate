import { NeuralLimb } from './NeuralLimb';
import { AppDataManager } from '../../storage/AppDataManager';
import { AgentCapability } from '../AgentConstitution';
import { useStateManager } from '../../core/StateManager';
import { BaseIntent } from '../AITypes';

export class DataLimb extends NeuralLimb {
    private appData: AppDataManager;

    constructor(config: any) {
        super(config);
        this.appData = AppDataManager.getInstance();
    }

    async save(params: any) {
        this.enforceCapability(AgentCapability.WRITE_FILES);
        const { key, data } = params;
        await this.appData.save(key, data);
        return { success: true };
    }

    async load(params: any) {
        this.enforceCapability(AgentCapability.MEMORY_QUERY);
        const { key } = params;
        return await this.appData.load(key);
    }

    async prune_cache(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        await this.appData.clearCategory('cache');
        return {
            status: 'Cache Purged',
            reclaimed: 'Variable',
            timestamp: Date.now()
        };
    }

    async prune_vector(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);

        if (!this.env?.VECTOR_INDEX) {
            return { status: 'skipped', reason: 'No VECTOR_INDEX binding found' };
        }

        try {
            // Cloudflare Vectorize deletion requires IDs.
            // As this is a high-risk operation, we require HITL confirmation or explicitly tracked IDs.
            if (!params.confirm || !params.ids) {
                throw new Error('[HITL Required] Vector pruning requires explicit confirmation and ID list. Use { confirm: true, ids: [...] }.');
            }

            // Real implementation using the binding (assuming deleteByIds is available on the binding type)
            // If the binding interface is unknown, we fall back to a safe error until binding types are updated.
            if (typeof this.env.VECTOR_INDEX.deleteByIds === 'function') {
                await this.env.VECTOR_INDEX.deleteByIds(params.ids);
                return { status: 'success', deleted: params.ids.length };
            } else {
                throw new Error('[System Limit] Vector binding does not support deletion operation.');
            }
        } catch (e: any) {
            return { status: 'error', error: e.message };
        }
    }

    async get_metrics(params: any) {
        this.enforceCapability(AgentCapability.METRIC_ACCESS);
        const state = useStateManager.getState();
        return {
            app: state.metrics,
            mode: state.mode,
            activeWorkspace: state.activeWorkspace,
            memory_footprint: (process as any).memoryUsage?.() || 'N/A'
        };
    }
}
