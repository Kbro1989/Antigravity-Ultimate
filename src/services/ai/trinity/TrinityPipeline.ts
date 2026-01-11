/**
 * Trinity Pipeline - POG Neural Registry Integration
 * Now with Tool-Use Loop for Limb Execution
 */

import { LimbIsolator, IsolationError } from './isolation/LimbIsolator';
import { QuantumArtifactSigner, IDAuditor } from './crypto/QuantumProvenance';
import { VickreyRouter } from './orchestration/VickreyRouter';
import { MetacognitiveState, EmergencyHaltError } from './consciousness/MetacognitiveState';
import {
    Task,
    Model,
    LimbArtifact,
    GenerationResult,
    Env,
    ProductionMetrics,
    ModelResponse,
    ToolUseRequest,
    INeuralRegistry
} from './types';

export interface TrinityConfig {
    isolation?: {
        memoryLimitBytes?: number;
        cpuTimeLimitMs?: number;
    };
    routing?: {
        maxLatencyMs?: number;
        maxCostPerToken?: number;
        minConfidence?: number;
        reputationWeight?: number;
        weights?: {
            latency: number;
            cost: number;
            confidence: number;
        };
    };
    metacognitive?: {
        haltThreshold?: number;
        haltSustainMs?: number;
        hysteresisGap?: number;
        maxHistorySize?: number;
    };
    provenance?: {
        batchSize?: number;
        batchTimeoutMs?: number;
    };

    // [ADD] POG Neural Registry injection
    limbs?: INeuralRegistry;
    ghost?: any;  // GhostLimb instance for metacognitive tracking
}

export interface ExecutionResult {
    output: string;
    confidence: number;
    tier: string;
    limbPath: string[];
    metrics: any;
    artifact?: LimbArtifact;
    verified: boolean;
    modelId?: string;
    error?: string;
}

export class TrinityPipeline {
    private router: VickreyRouter;
    private metacognitive: MetacognitiveState;
    private quantumSigner: QuantumArtifactSigner;
    private auditor: IDAuditor;
    private limbs: Map<string, LimbIsolator> = new Map();
    private models: Model[] = [];
    private isShuttingDown = false;

    // [ADD] POG Neural Registry reference
    private neuralRegistry: INeuralRegistry;
    private ghostLimb: any;

    constructor(
        private env: Env,
        private config: TrinityConfig = {}
    ) {
        this.router = new VickreyRouter(env, this.config.routing);
        this.metacognitive = new MetacognitiveState(env, this.config.metacognitive);
        this.quantumSigner = new QuantumArtifactSigner(
            { R2_ARTIFACTS: env.R2_ARTIFACTS, R2_BATCHES: env.R2_BATCHES },
            this.config.provenance
        );
        this.auditor = new IDAuditor(
            { R2_ARTIFACTS: env.R2_ARTIFACTS, R2_BATCHES: env.R2_BATCHES }
        );

        // [ADD] Inject POG Neural Registry
        if (!config.limbs) {
            throw new Error('TrinityPipeline requires limbs (POG NeuralRegistry)');
        }
        this.neuralRegistry = config.limbs;
        this.ghostLimb = config.ghost;
    }

    async initialize() {
        await this.quantumSigner.init();
        ProductionMetrics.log('pipeline_initialized', { timestamp: Date.now() });
    }

    registerModels(models: Model[]) {
        this.models = models;
    }

    shutdown() {
        this.isShuttingDown = true;
        return Promise.resolve();
    }

    getHealth() {
        return {
            healthy: !this.isShuttingDown,
            limbs: Array.from(this.limbs.keys()),
            models: this.models.length,
            metacognitive: this.metacognitive.getHealth()
        };
    }

    // [ADD] Tool-Use Detection
    private detectToolUse(response: string): boolean {
        // Look for POG tool invocation patterns
        // e.g., "CALL_LIMB:relic:scan_game_needs({...})"
        return response.includes('CALL_LIMB:') ||
            response.includes('TOOL_REQUEST:');
    }

    // [ADD] Parse Tool Request from Model Output
    private parseToolRequests(response: string): ToolUseRequest[] {
        const requests: ToolUseRequest[] = [];

        // Pattern: CALL_LIMB:{limbId}:{capability}({params})
        const callPattern = /CALL_LIMB:([\w-]+):([\w-]+)\((\{.*?\})\)/g;
        let match;

        while ((match = callPattern.exec(response)) !== null) {
            const [, limbId, capability, paramsStr] = match;
            try {
                requests.push({
                    type: 'tool_call',
                    tool: {
                        limbId,
                        capability,
                        params: JSON.parse(paramsStr),
                        timestamp: Date.now(),
                        provenance: {
                            modelId: 'unknown',  // Will be set by caller
                            reasoning: `Parsed from model output: ${response.substring(0, 100)}...`
                        }
                    }
                });
            } catch (e) {
                console.error('Failed to parse tool params:', paramsStr);
            }
        }

        return requests;
    }

    // [ADD] Execute Limb Tool
    private async executeLimbTool(tool: ToolUseRequest['tool']): Promise<any> {
        const startTime = performance.now();

        ProductionMetrics.log('limb_tool_execution', {
            limbId: tool.limbId,
            capability: tool.capability,
            modelId: tool.provenance.modelId
        });

        try {
            // Execute through POG Neural Registry
            // We assume executeCapability determines method from capability string or maps it
            // In POG-Ultimate NeuralRegistry, we used `process(intent)`
            // The authoritative code in Step 2528 says `neuralRegistry.executeCapability`.
            // I included that method in INeuralRegistry interface.
            // I need to ensure NeuralRegistry.ts implementation has it.
            // I added it in Step 2456.

            const result = await this.neuralRegistry.executeCapability(
                tool.limbId,
                {
                    type: tool.capability,
                    payload: tool.params,
                    timestamp: tool.timestamp,
                    source: `trinity-${tool.provenance.modelId}`
                } as any
            );

            const executionTime = performance.now() - startTime;

            // Update Ghost Limb belief
            if (this.ghostLimb) {
                this.ghostLimb.updateBelief(tool.limbId, {
                    success: true,
                    executionTime,
                    confidence: result.confidence || 0.5
                });
            }

            return {
                success: true,
                output: result,
                executionTime,
                limbId: tool.limbId
            };
        } catch (error: any) {
            // Update Ghost Limb belief with failure
            const message = error instanceof Error ? error.message : String(error);
            if (this.ghostLimb) {
                this.ghostLimb.updateBelief(tool.limbId, {
                    success: false,
                    error: message
                });
            }

            return {
                success: false,
                error: message,
                limbId: tool.limbId
            };
        }
    }

    // [MODIFIED] Main execution with Tool-Use Loop
    async execute(task: Task): Promise<ExecutionResult> {
        if (this.isShuttingDown) {
            throw new Error('Pipeline is shutting down');
        }

        const startTime = performance.now();
        const limbPath: string[] = ['orchestrator'];

        try {
            // TIER 1: Primary orchestration with Tool-Use Loop
            const result = await this.executePrimary(task, limbPath, startTime);

            // Reflect on execution
            this.metacognitive.reflect({
                limbPath: result.limbPath,
                routingPenalty: result.metrics.routingPenalty,
                validationErrors: result.error ? [result.error] : [],
                latency: result.metrics.totalLatency,
                timestamp: Date.now(),
                confidence: result.confidence,
                tokensGenerated: result.output.length
            });

            return result;

        } catch (error) {
            if (error instanceof IsolationError) {
                return await this.executeGhost(task, limbPath, startTime);
            }

            if (error instanceof EmergencyHaltError) {
                throw error;
            }

            // Unknown error - escalate to emergency
            return await this.executeEmergency(task, limbPath, startTime, error);
        }
    }

    // [MODIFIED] Primary execution with Tool-Use Loop
    private async executePrimary(
        task: Task,
        limbPath: string[],
        startTime: number
    ): Promise<ExecutionResult> {
        const routingStart = performance.now();

        // Run VCG auction
        const auctionResult = await this.router.selectModel(task, this.models);
        const model = auctionResult.winner;

        const routingLatency = performance.now() - routingStart;
        limbPath.push(`primary:${model.id}`);

        // Initial generation
        let currentTask = task;
        let toolIterations = 0;
        const MAX_TOOL_ITERATIONS = 3;

        while (toolIterations < MAX_TOOL_ITERATIONS) {
            // Execute model
            let result: GenerationResult;
            if (this.shouldIsolate(model)) {
                const isolator = await this.getOrCreateLimb(model.id);
                result = await isolator.invoke('generate', currentTask);
            } else {
                result = await model.generate(currentTask);
            }

            // Check if model wants to use tools
            if (this.detectToolUse(result.output) && toolIterations < MAX_TOOL_ITERATIONS) {
                const toolRequests = this.parseToolRequests(result.output);

                if (toolRequests.length > 0) {
                    // Execute all requested tools
                    const toolResults = await Promise.all(
                        toolRequests.map(request => this.executeLimbTool(request.tool))
                    );

                    // Add tool execution to limb path
                    limbPath.push(`tool:${toolResults.map(t => t.limbId).join(',')}`);

                    // Update task with tool results
                    currentTask = {
                        ...task,
                        prompt: `${task.prompt}\n\nTool Results:\n${JSON.stringify(toolResults, null, 2)}`,
                        metadata: {
                            ...task.metadata,
                            toolIteration: toolIterations + 1,
                            toolResults
                        }
                    };

                    toolIterations++;
                    continue; // Loop again for next iteration
                }
            }

            // No tools requested or max iterations reached - finalize
            const artifact = await this.createArtifact(model.id, task, result);
            const signature = await this.quantumSigner.stageArtifact(artifact);
            const verification = await this.auditor.verify(artifact);

            const totalLatency = performance.now() - startTime;

            return {
                output: result.output,
                confidence: result.confidence,
                tier: 'primary',
                limbPath,
                metrics: {
                    totalLatency,
                    routingLatency,
                    generationLatency: totalLatency - routingLatency,
                    routingPenalty: toolIterations * 0.1  // Penalty for tool usage
                },
                artifact,
                verified: verification.valid,
                modelId: model.id
            };
        }

        throw new Error('Max tool iterations exceeded');
    }

    private async executeGhost(task: Task, limbPath: string[], startTime: number): Promise<ExecutionResult> {
        limbPath.push('ghost:stabilizer');

        ProductionMetrics.log('ghost_stabilization', {
            task: task.id,
            timestamp: Date.now()
        });

        try {
            // Select simplest/cheapest model as fallback
            const ghostModel = this.models.sort((a, b) => a.costPerToken - b.costPerToken)[0];

            if (!ghostModel) throw new Error('No models registered');

            const result = await ghostModel.generate(task);
            const artifact = await this.createArtifact(ghostModel.id, task, result);
            await this.quantumSigner.stageArtifact(artifact);

            const totalLatency = performance.now() - startTime;

            return {
                output: result.output,
                confidence: result.confidence * 0.8,
                tier: 'ghost',
                limbPath,
                metrics: {
                    totalLatency,
                    routingLatency: 0,
                    generationLatency: totalLatency,
                    routingPenalty: 0.5
                },
                artifact,
                verified: false,
                modelId: ghostModel.id
            };
        } catch (error) {
            return await this.executeEmergency(task, limbPath, startTime, error);
        }
    }

    private async executeEmergency(task: Task, limbPath: string[], startTime: number, error: any): Promise<ExecutionResult> {
        return {
            output: `Emergency Halt: ${error.message}`,
            confidence: 0.0,
            tier: 'emergency',
            limbPath: [...limbPath, 'emergency'],
            metrics: { totalLatency: 0, routingLatency: 0, generationLatency: 0, routingPenalty: 0 },
            verified: false,
            error: error.message
        };
    }

    private shouldIsolate(model: Model): boolean {
        return false; // Default off for now
    }

    private async getOrCreateLimb(id: string) {
        if (!this.limbs.has(id)) {
            this.limbs.set(id, new LimbIsolator(id, {}));
        }
        return this.limbs.get(id)!;
    }

    private async createArtifact(modelId: string, task: Task, result: GenerationResult): Promise<LimbArtifact> {
        return {
            id: `art-${Date.now()}`,
            content: {
                task: task.id,
                output: result.output,
                metadata: result.metadata
            },
            provenance: {
                limbId: modelId,
                timestamp: Date.now(),
                version: '1.0',
                inputHash: 'hash',
                outputHash: 'hash',
                confidence: result.confidence
            }
        };
    }
}
