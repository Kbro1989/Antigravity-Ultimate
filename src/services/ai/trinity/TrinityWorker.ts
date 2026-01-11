/**
 * Cloudflare Worker entry point for Trinity-POG Integration
 */

import { TrinityPipeline } from './TrinityPipeline';
import { Env, Task } from './types/index';
import { Model } from './types/index';
import { POGTask } from './types/pog-adapters';

// [ADJUSTED] Correct relative path from src/services/ai/trinity/ to src/services/ai/
// .. -> src/services/ai/
import { NeuralRegistry } from '../NeuralRegistry';
import { ModelRouter } from '../ModelRouter';
import { GhostLimb } from '../limbs/GhostLimb';
import { BaseIntent } from '../AITypes';
// ../.. -> src/services/. AITypes is in src/services/ai. So this is WRONG.
// Should be ../AITypes.

// Global instances
let pipeline: TrinityPipeline | null = null;
let neuralRegistry: NeuralRegistry | null = null;
let ghostLimb: GhostLimb | null = null;

export async function ensurePipeline(env: Env): Promise<TrinityPipeline> {
    if (!pipeline) {
        const modelRouter = new ModelRouter(env);
        neuralRegistry = new NeuralRegistry(env, modelRouter);
        ghostLimb = new GhostLimb({
            id: 'limb-ghost',
            userId: 'system',
            capabilities: ['AI_INFERENCE'],
            env
        });

        pipeline = new TrinityPipeline(env, {
            isolation: { memoryLimitBytes: 8 * 1024 * 1024, cpuTimeLimitMs: 10 },
            routing: {
                maxLatencyMs: 30000, maxCostPerToken: 0.01, minConfidence: 0.1, reputationWeight: 0.3,
                weights: { latency: 0.3, cost: 0.3, confidence: 0.4 }
            },
            metacognitive: { haltThreshold: 0.3, haltSustainMs: 3000, hysteresisGap: 0.1, maxHistorySize: 1000 },
            provenance: { batchSize: 100, batchTimeoutMs: 5000 },
            limbs: neuralRegistry,
            ghost: ghostLimb
        });

        await pipeline.initialize();

        const pogModels: Model[] = Array.from(neuralRegistry.getAllLimbs().entries()).map(
            ([limbId, limb]) => ({
                id: `pog-${limbId}`,
                name: `${limbId} (POG Limb)`,
                costPerToken: (limb as any).costPerToken || 0.001,
                capabilities: {
                    estimatedLatencyMs: (limb as any).estimatedLatencyMs || 500,
                    maxTokens: (limb as any).maxTokens || 10000,
                    specializations: (limb as any).specializations || [],
                    canAccessRSC: limbId === 'relic',
                    canAccessGameViewer: limbId === 'gameviewer',
                    canGenerateCode: limbId === 'code',
                },
                accessibleLimbs: [limbId],
                limbPermissions: 'whitelist',
                getConfidence: async (task: Task) => {
                    const belief = (ghostLimb as any)!.getBelief(limbId);
                    return belief?.confidence || 0.5;
                },
                generate: async (task: Task) => {
                    const intent: BaseIntent = {
                        action: 'process_task' as any,
                        limbId: limbId,
                        payload: {
                            prompt: task.prompt,
                            context: task.context,
                            allowedLimbs: (task as POGTask).allowedLimbs || [limbId],
                            originalTaskId: task.id
                        }
                    };
                    const start = performance.now();
                    const limb = await neuralRegistry!.getLimb(limbId); // Use lazy retrieval if sync doesn't work, though NeuralRegistry usually populates on use
                    const actualLimb = limb || await (neuralRegistry as any).ensureLimb(limbId);

                    const response = await actualLimb.process(intent);
                    const end = performance.now();
                    return {
                        output: typeof response === 'string' ? response : JSON.stringify(response),
                        confidence: response.confidence || 0.8,
                        tokens: (response.tokenCount) || (JSON.stringify(response).length / 4),
                        metadata: {
                            limbId,
                            executionTime: end - start,
                            tier: 'primary'
                        }
                    };
                }
            })
        );

        const cfModels: Model[] = [
            {
                id: 'cf-@cf/meta/llama-2-7b-chat-int8',
                name: 'Cloudflare Llama 2 7B',
                costPerToken: 0.0001,
                capabilities: { estimatedLatencyMs: 200, maxTokens: 2048, specializations: ['general', 'speed'] },
                accessibleLimbs: [],
                limbPermissions: 'none',
                getConfidence: async () => 0.7,
                generate: async (task: Task) => {
                    const ai = (env as any).AI;
                    if (ai) {
                        const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', { prompt: task.prompt });
                        return {
                            output: response.response || JSON.stringify(response),
                            confidence: 0.7,
                            tokens: (response.response || '').length,
                            metadata: { model: 'llama-2-7b' }
                        };
                    } else {
                        return { output: "Cloudflare AI not bounded.", confidence: 0, tokens: 0 };
                    }
                }
            }
        ];

        pipeline.registerModels([...pogModels, ...cfModels]);
    }
    return pipeline;
}

try {
    addEventListener('unload', () => {
        if (pipeline) { }
        if (neuralRegistry) { }
    });
} catch (e) { }
