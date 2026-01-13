
import { EventEmitter } from 'events';
import { AIParticipant, NegotiationRound, TaskProposal, WorkDistribution, CollaborationContext, AIResponse } from './types';
import { modelRouter } from '../ModelRouter';
import { nexusBus } from '../../core/NexusCommandBus';

export class AINegotiationProtocol extends EventEmitter {
    private participants: AIParticipant[];
    private maxRounds = 3;
    private consensusThreshold = 0.8;

    constructor() {
        super();
        this.participants = [
            {
                id: 'cloudflare',
                name: 'Cloudflare AI (Architect)',
                capabilities: ['reasoning', 'speed', 'security', 'topology', 'mesh-composition'],
                priority: 1,
                model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
                provider: 'cloudflare'
            },
            {
                id: 'ollama',
                name: 'Ollama AI (Engineer)',
                capabilities: ['code', 'rsc-implementation', 'entity-logic', 'world-building'],
                priority: 2,
                model: 'llama3',
                provider: 'ollama'
            }
        ];
    }

    async negotiateTask(
        request: string,
        projectRoot = 'willow-ai-game-dev',
        userPatterns: Record<string, any> = {},
        recentHistory: any[] = []
    ): Promise<{
        finalPlan: string;
        workDistribution: WorkDistribution;
        consensusConfidence: number;
        rounds: NegotiationRound[];
    }> {
        this.emit('negotiation:start', { request, projectRoot });

        const context: CollaborationContext = {
            request,
            projectRoot,
            userPatterns,
            recentHistory,
            activeFiles: new Set(),
            errors: []
        };

        const rounds: NegotiationRound[] = [];
        let roundNumber = 1;
        let consensusReached = false;
        let finalPlan = '';
        let workDistribution: WorkDistribution = { tasks: [], totalComplexity: 0, estimatedDuration: 0 };

        // Round 1: Initial Proposals
        const initialProposals = await this.generateInitialProposals(request, context);
        rounds.push({
            round: roundNumber,
            proposals: initialProposals,
            timestamp: Date.now()
        });

        if (this.checkConsensus(initialProposals)) {
            const result = this.mergeProposals(initialProposals);
            finalPlan = result.plan;
            workDistribution = result.workDistribution;
            consensusReached = true;
            rounds[0].consensus = finalPlan;
        }

        // Iterative Refinement
        while (!consensusReached && roundNumber < this.maxRounds) {
            roundNumber++;

            const refinedProposals = await this.refineProposals(
                rounds[rounds.length - 1].proposals,
                context
            );

            const currentRound: NegotiationRound = {
                round: roundNumber,
                proposals: refinedProposals,
                timestamp: Date.now()
            };

            if (this.checkConsensus(refinedProposals)) {
                const result = this.mergeProposals(refinedProposals);
                finalPlan = result.plan;
                workDistribution = result.workDistribution;
                consensusReached = true;
                currentRound.consensus = finalPlan;
            }

            rounds.push(currentRound);
            this.emit('negotiation:round', { round: roundNumber, proposals: refinedProposals });
        }

        if (!consensusReached) {
            const allProposals = rounds.flatMap(r => r.proposals);
            const bestProposal = allProposals.reduce((best, current) =>
                current.confidence > best.confidence ? current : best
            );

            finalPlan = bestProposal.plan;
            workDistribution = this.createWorkDistribution(bestProposal);
        }

        const consensusConfidence = consensusReached
            ? rounds[rounds.length - 1].proposals.reduce((sum, p) => sum + p.confidence, 0) / rounds[rounds.length - 1].proposals.length
            : 0.6;

        this.emit('negotiation:end', { finalPlan, workDistribution, consensusConfidence, rounds });

        return { finalPlan, workDistribution, consensusConfidence, rounds };
    }

    private async generateInitialProposals(request: string, context: CollaborationContext): Promise<TaskProposal[]> {
        const proposals: TaskProposal[] = [];
        for (const p of this.participants) {
            proposals.push(await this.generateProposal(p, request, context));
        }
        return proposals;
    }

    private async generateProposal(participant: AIParticipant, request: string, context: CollaborationContext): Promise<TaskProposal> {
        const prompt = this.buildProposalPrompt(participant, request, context);
        const response = await this.callAI(participant, prompt);
        return this.parseProposalResponse(participant.id, response.content, response);
    }

    private buildProposalPrompt(participant: AIParticipant, request: string, context: CollaborationContext): string {
        return `
<|im_start|>system
You are ${participant.name}, a specialized AI for RuneScape Classic (RSC) Game Development.
Capabilities: ${participant.capabilities.join(', ')}.
Project: willow-ai-game-dev (Full asset access via the 'relics' system).

CRITICAL CONTEXT:
1. This project contains a WHOLE GAME as assets (relics).
2. DO NOT suggest "adding" random or generic assets.
3. TRACE data from .jag archives outward to handlers before deciding limb paths.
4. AUTHORITY DIRECTORIES: /src/handlers, /src/services/rsc, /src/services/rsmv, /src/services/data.
5. Align all plans with the authentic RSC data structures (config85, models36, etc.).

Guidelines:
1. Analyze the request for RSC integration (Entity logic, world composition using relics).
2. Create a detailed, sequential plan tracing from .jag data to implementation.
3. Be specific about RSC asset IDs (relic IDs) if applicable.

Response JSON: { "plan": "string", "confidence": number, "estimatedComplexity": number, "prerequisiteFiles": ["string"], "reasoning": "string" }
<|im_end|>
<|im_start|>user
${request}
<|im_end|>
<|im_start|>assistant
{ "plan": "`;
    }

    private async refineProposals(previous: TaskProposal[], context: CollaborationContext): Promise<TaskProposal[]> {
        const refined: TaskProposal[] = [];
        for (const proposal of previous) {
            const otherProposals = previous.filter(p => p.ai !== proposal.ai);
            refined.push(await this.refineProposal(proposal, otherProposals, context));
        }
        return refined;
    }

    private async refineProposal(own: TaskProposal, others: TaskProposal[], context: CollaborationContext): Promise<TaskProposal> {
        const participant = this.participants.find(p => p.id === own.ai)!;
        const prompt = `
<|im_start|>system
Refine your RSC implementation plan based on peer feedback.
Your Original Plan: ${own.plan}
Other Proposals: ${others.map(p => `${p.ai}: ${p.plan}`).join('\n\n')}

Response JSON: { "plan": "string", "confidence": number, "estimatedComplexity": number, "prerequisiteFiles": ["string"], "reasoning": "string" }
<|im_end|>
<|im_start|>assistant
{ "plan": "`;
        const response = await this.callAI(participant, prompt);
        return this.parseProposalResponse(own.ai, response.content, response);
    }

    private async callAI(participant: AIParticipant, prompt: string): Promise<AIResponse> {
        const res: any = await modelRouter.route({
            type: 'text',
            prompt,
            modelId: participant.model,
            provider: participant.provider
        }, (globalThis as any).POG_ENV);

        return {
            content: typeof res === 'string' ? res : res.content || JSON.stringify(res),
            confidence: 0.8,
            tokensUsed: 0,
            model: participant.model,
            timestamp: Date.now()
        };
    }

    private parseProposalResponse(aiId: string, content: string, response: AIResponse): TaskProposal {
        try {
            const jsonStr = content.match(/\{[\s\S]*\}/)?.[0] || '{}';
            const parsed = JSON.parse(jsonStr);
            return {
                ai: aiId,
                plan: parsed.plan || content,
                confidence: parsed.confidence || 0.7,
                estimatedComplexity: parsed.estimatedComplexity || 3,
                prerequisiteFiles: parsed.prerequisiteFiles || [],
                reasoning: parsed.reasoning || 'Derived from RSC heuristics.',
                timestamp: response.timestamp
            };
        } catch (e) {
            return { ai: aiId, plan: content, confidence: 0.6, estimatedComplexity: 3, prerequisiteFiles: [], reasoning: 'Fallback parsing.', timestamp: response.timestamp };
        }
    }

    private checkConsensus(proposals: TaskProposal[]): boolean {
        if (proposals.length < 2) return true;
        const avgConf = proposals.reduce((sum, p) => sum + p.confidence, 0) / proposals.length;
        return avgConf >= this.consensusThreshold;
    }

    private mergeProposals(proposals: TaskProposal[]): { plan: string; workDistribution: WorkDistribution } {
        const best = proposals.reduce((max, p) => p.confidence > max.confidence ? p : max);
        return { plan: best.plan, workDistribution: this.createWorkDistribution(best) };
    }

    private createWorkDistribution(proposal: TaskProposal): WorkDistribution {
        return {
            tasks: [{
                id: '1',
                description: proposal.reasoning,
                assignedTo: proposal.ai as any,
                estimatedEffort: proposal.estimatedComplexity,
                dependencies: [],
                files: proposal.prerequisiteFiles
            }],
            totalComplexity: proposal.estimatedComplexity,
            estimatedDuration: proposal.estimatedComplexity * 1.5
        };
    }
}
