import { NeuralLimb } from './NeuralLimb';
import { AppDataManager } from '../../storage/AppDataManager';
import { AgentCapability } from '../AgentConstitution';
import { useStateManager } from '../../core/StateManager';

export class DataLimb extends NeuralLimb {
    private appData: AppDataManager;

    constructor(config: any) {
        super(config);
        this.appData = AppDataManager.getInstance();
    }

    async process(intent: any) {
        const { action, key, data } = intent;

        await this.logActivity(`data_${action}`, 'pending', { key });

        try {
            let result;
            switch (action) {
                case 'save':
                    this.enforceCapability(AgentCapability.WRITE_FILES);
                    await this.appData.save(key, data);
                    result = { success: true };
                    break;

                case 'load':
                    this.enforceCapability(AgentCapability.MEMORY_QUERY);
                    result = await this.appData.load(key);
                    break;

                case 'prune_cache':
                    this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
                    // Use real clearing logic
                    await this.appData.clearCategory('cache');
                    result = {
                        status: 'Cache Purged',
                        reclaimed: 'Variable',
                        timestamp: Date.now()
                    };
                    break;

                case 'get_metrics':
                    this.enforceCapability(AgentCapability.METRIC_ACCESS);
                    const state = useStateManager.getState();
                    result = {
                        app: state.metrics,
                        mode: state.mode,
                        activeWorkspace: state.activeWorkspace,
                        memory_footprint: process.memoryUsage?.() || 'N/A'
                    };
                    break;

                default:
                    throw new Error(`Unknown data action: ${action}`);
            }

            await this.logActivity(`data_${action}`, 'success', { key });
            return { status: 'success', data: result };
        } catch (e: any) {
            await this.logActivity(`data_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
    }
}
