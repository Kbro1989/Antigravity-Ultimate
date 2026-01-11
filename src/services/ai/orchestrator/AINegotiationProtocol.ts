
import { EventEmitter } from 'events';
import { AIParticipant, NegotiationRound, TaskProposal, WorkDistribution, CollaborationContext } from './types';
import { cloudflareProvider } from '../providers/CloudflareProvider';
import { ollamaProvider } from '../providers/OllamaProvider';

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
                capabilities: ['reasoning', 'speed', 'security'],
                priority: 1,
                model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
                provider: 'cloudflare'
            },
            {
                id: 'ollama',
                name: 'Ollama AI (Engineer)',
                capabilities: ['code', 'local-knowledge', 'implementation'],
                priority: 2,
                model: 'llama3', // Default, overrideable
                provider: 'ollama'
            }
        ];
    }

    async negotiateTask(request: string): Promise<{ finalPlan: string; rounds: NegotiationRound[] }> {
        const rounds: NegotiationRound[] = [];
        let roundNumber = 1;
        let consensusReached = false;
        let finalPlan = '';

        // Round 1: Initial Proposals
        const initialProposals = await this.generateInitialProposals(request);
        rounds.push({ round: 1, proposals: initialProposals, timestamp: Date.now() });

        if (this.checkConsensus(initialProposals)) {
            finalPlan = this.mergeProposals(initialProposals).plan;
            consensusReached = true;
        }

        // Iterative Refinement
        while (!consensusReached && roundNumber < this.maxRounds) {
            roundNumber++;
            const previousRound = rounds[rounds.length - 1];
            const refinedProposals = await this.refineProposals(previousRound.proposals, request);

            rounds.push({ round: roundNumber, proposals: refinedProposals, timestamp: Date.now() });

            if (this.checkConsensus(refinedProposals)) {
                finalPlan = this.mergeProposals(refinedProposals).plan;
                consensusReached = true;
            }
        }

        if (!consensusReached) {
            // Fallback to highest confidence
            const all = rounds.flatMap(r => r.proposals);
            finalPlan = all.reduce((max, p) => p.confidence > max.confidence ? p : max).plan;
        }

        return { finalPlan, rounds };
    }

    private async generateInitialProposals(request: string): Promise<TaskProposal[]> {
        const proposals: TaskProposal[] = [];
        for (const p of this.participants) {
            proposals.push(await this.generateProposal(p, request));
        }
        return proposals;
    }

    private async generateProposal(participant: AIParticipant, request: string): Promise<TaskProposal> {
        const prompt = `
            You are ${participant.name}.
            Capabilities: ${participant.capabilities.join(', ')}.
            Task: ${request}
            
            Output strictly valid JSON with: { "plan": "string", "confidence": number, "reasoning": "string" }
        `;

        let responseText = '';
        try {
            if (participant.provider === 'cloudflare') {
                const res = await cloudflareProvider.textChat({ prompt, systemPrompt: 'You are a JSON generator.' });
                responseText = res.result?.response || res.response || JSON.stringify(res);
            } else {
                const res = await ollamaProvider.textChat(prompt, participant.model);
                responseText = res.text || '';
            }
            return this.parseResponse(participant.id, responseText);
        } catch (e) {
            return { ai: participant.id, plan: 'Failed to generate', confidence: 0, estimatedComplexity: 0, prerequisiteFiles: [], reasoning: 'Error', timestamp: Date.now() };
        }
    }

    private async refineProposals(previous: TaskProposal[], request: string): Promise<TaskProposal[]> {
        const refined: TaskProposal[] = [];
        for (const p of previous) {
            // In a real implementation, we'd cross-feed the proposals. 
            // For now, we simulate self-reflection or basic refinement.
            const others = previous.filter(x => x.ai !== p.ai).map(x => `${x.ai}: ${x.plan}`).join('\n');
            const prompt = `
                Refine your plan based on peer feedback.
                Original Task: ${request}
                Peer Plans: ${others}
                
                Output JSON: { "plan": "string", "confidence": number, "reasoning": "string" }
             `;
            // Reuse generate logic structure directly for simplicity here
            // In full port, we'd use a dedicated refine method.
            // We'll mimic generateProposal call but with new prompt.
            // ... (Logic abbreviated for this step, effectively similar to generateProposal)
        }
        // Returning same for now to unblock compilation, effectively 1 round if consensus fail
        return previous;
    }

    private parseResponse(aiId: string, text: string): TaskProposal {
        try {
            const jsonStr = text.match(/\{[\s\S]*\}/)?.[0] || '{}';
            const parsed = JSON.parse(jsonStr);
            return {
                ai: aiId,
                plan: parsed.plan || text,
                confidence: parsed.confidence || 0.5,
                estimatedComplexity: parsed.complexity || 3,
                prerequisiteFiles: [],
                reasoning: parsed.reasoning || 'None',
                timestamp: Date.now()
            };
        } catch (e) {
            return { ai: aiId, plan: text, confidence: 0.5, estimatedComplexity: 3, prerequisiteFiles: [], reasoning: 'Parse Error', timestamp: Date.now() };
        }
    }

    private checkConsensus(proposals: TaskProposal[]): boolean {
        // Simple consensus: Both high confidence or identical plans approximately
        if (proposals.length < 2) return true; // Single agent is consensus
        const avgParam = proposals.reduce((acc, p) => acc + p.confidence, 0) / proposals.length;
        return avgParam > this.consensusThreshold;
    }

    private mergeProposals(proposals: TaskProposal[]): { plan: string } {
        const best = proposals.reduce((max, p) => p.confidence > max.confidence ? p : max);
        return { plan: best.plan };
    }
}
