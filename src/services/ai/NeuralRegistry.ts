import { Env } from '../../index';
import { ModelRouter } from './ModelRouter';
import { OrchestratorLimb } from './limbs/OrchestratorLimb';
import { AIIntent } from '../../types';

import { VectorMemory } from './VectorMemory';

export class NeuralRegistry {
    private orchestrator: OrchestratorLimb;
    public memory: VectorMemory;

    constructor(private env: Env, private router: ModelRouter) {
        this.orchestrator = new OrchestratorLimb({
            id: 'orchestrator-core',
            userId: 'system',
            capabilities: ['EXECUTE_COMMAND', 'AI_INFERENCE']
        });
        this.memory = new VectorMemory(env);
    }

    async executeCapability(limbId: string, intent: AIIntent) {
        console.log(`[NeuralRegistry] Executing capability: ${limbId}.${intent.verb}`);

        if (intent.verb === 'symphony') {
            return this.orchestrator.conductSymphony(intent);
        }

        // RAG Capability (Infinite Memory)
        if (limbId === 'memory' || intent.verb === 'explain') {
            const context = await this.memory.search(intent.payload.text, 3);
            // Augment prompt with context
            intent.payload.text += `\n\n[Context from Memory]:\n${JSON.stringify(context)}`;
        }

        // Map limb + verb to ModelRequest
        let requestType: 'text' | 'code' | 'image' = 'text';

        if (limbId === 'code' || intent.verb === 'refactor') {
            requestType = 'code';
        } else if (limbId === 'image') {
            requestType = 'image';
        }

        // Delegate to Router
        return this.router.route({
            type: requestType,
            prompt: intent.payload.text,
            options: {
                temperature: 0.7
            }
        });
    }
}
