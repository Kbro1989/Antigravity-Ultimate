import { Env } from '../../types/env';
import type { ModelRouter } from './ModelRouter';
import { OrchestratorLimb } from './limbs/OrchestratorLimb';
import { BaseIntent } from './AITypes';

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

    async executeCapability(limbId: string, intent: BaseIntent) {
        console.log(`[NeuralRegistry] Executing capability: ${limbId}.${intent.action}`);

        if (intent.action === 'orchestrate_negotiate') {
            return this.orchestrator.conductSymphony(intent as any);
        }

        // RAG Capability (Infinite Memory)
        if (limbId === 'memory' || intent.action === 'world_query') {
            const context = await this.memory.search(intent.payload.text, 3);
            // Augment prompt with context
            intent.payload.text += `\n\n[Context from Memory]:\n${JSON.stringify(context)}`;
        }

        // Map limb + verb to ModelRequest
        let requestType: 'text' | 'code' | 'image' = 'text';

        if (limbId === 'code' || intent.action === 'code_refactor') {
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
