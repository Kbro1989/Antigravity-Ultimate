import { NeuralLimb } from './NeuralLimb';
import { CLIBridge } from '../../cli/CLIBridge';
import { AgentCapability } from '../AgentConstitution';

/**
 * ProxyLimb.ts
 * A generic limb that forwards intents to the local bridge.
 * Allows POG to be extended with local Node.js modules without redeploying the Worker.
 */
export class ProxyLimb extends NeuralLimb {
    private bridge: CLIBridge;
    private extensionId: string;

    constructor(config: { id: string; userId: string; capabilities: AgentCapability[] }) {
        super(config);
        this.extensionId = config.id;
        this.bridge = CLIBridge.getInstance();
    }

    async process(intent: any) {
        const { action } = intent;

        await this.logActivity(`ext_${this.extensionId}_${action}`, 'pending', intent.payload);

        try {
            // Forward request to local bridge
            const result = await this.bridge.sendRequest('dynamic_limb_request', {
                extensionId: this.extensionId,
                action,
                payload: intent.payload || {}
            });

            await this.logActivity(`ext_${this.extensionId}_${action}`, 'success', result);
            return result;
        } catch (e: any) {
            await this.logActivity(`ext_${this.extensionId}_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
    }
}
