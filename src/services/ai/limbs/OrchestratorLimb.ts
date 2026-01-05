import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';
import { BaseIntent } from '../AITypes';

export class OrchestratorLimb extends NeuralLimb {
    async conductSymphony(intent: any) {
        const prompt = intent.payload?.text || intent.payload?.request || JSON.stringify(intent.payload || {});

        const plan = await this.architect_solution({ prompt }, intent);

        return {
            conductor: 'OrchestratorLimb (Real)',
            symphony_id: (crypto as any).randomUUID?.() || `sym_${Date.now()}`,
            plan: plan,
            status: 'orchestrated'
        };
    }

    async execute_graph(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const { nodes, edges } = params;

        return await this.callAI({
            type: 'text',
            prompt: `Interpret and execute this logic graph:\nNodes: ${JSON.stringify(nodes)}\nEdges: ${JSON.stringify(edges)}`,
            systemPrompt: 'You are a graph execution engine. Analyze the flow and return the final output state.'
        });
    }

    async align_limbs(params: any) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { context = {} } = params;
        return await this.callAI({
            type: 'text',
            prompt: `Alignment request for context: ${JSON.stringify(context)}`,
            systemPrompt: 'Analyze the current system state and suggest limb synchronization protocols.'
        });
    }

    async architect_solution(params: any, intent: BaseIntent & { modelId?: string; provider?: string }) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt: archPrompt } = params;

        return await this.callAI({
            type: 'text',
            prompt: `Architect a technical blueprint for: ${archPrompt}`,
            systemPrompt: 'You are a Senior Software Architect. Return ONLY a valid JSON object with the following structure: { "plan": { "solutionId": "string", "blueprint": [ { "step": number, "action": "string", "file": "string", "description": "string" } ], "estimatedComplexity": "string" } }',
            modelId: intent.modelId,
            provider: intent.provider
        });
    }

    async negotiate_consensus(params: any) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { request } = params;
        return await this.callAI({
            type: 'text',
            prompt: `Perform multi-agent negotiation for: ${request}`,
            systemPrompt: 'Return a valid JSON object with: { "state": "aligned", "finalPlan": "string", "confidence": number, "rounds": [ { "agent": "string", "thought": "string", "confidence": number } ] }'
        });
    }

    async get_symphony_status(params: any) {
        return {
            status: 'success',
            agents: [
                { name: 'Architect', status: 'ACTIVE', health: 1.0, load: 0.12 },
                { name: 'Strategist', status: 'ACTIVE', health: 0.98, load: 0.05 },
                { name: 'Critic', status: 'IDLE', health: 1.0, load: 0.0 },
                { name: 'Symphony', status: 'SYNCING', health: 0.95, load: 0.45 }
            ]
        };
    }

    private async callAI(request: any) {
        const response: any = await modelRouter.route(request);

        let data = response;
        if (typeof response === 'string' || (response && typeof response.content === 'string')) {
            const content = typeof response === 'string' ? response : response.content;
            try {
                const jsonStr = content.replace(/```json\n?|\n?```/g, '').trim();
                data = JSON.parse(jsonStr);
            } catch (e) {
                data = { rawResponse: content };
            }
        }

        return {
            status: 'success',
            ...data,
            provider: response.provider || 'ai-router',
            model: response.model || 'neural-matrix',
            timestamp: Date.now()
        };
    }
}
