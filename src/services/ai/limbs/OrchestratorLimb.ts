import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';

export class OrchestratorLimb extends NeuralLimb {
    async conductSymphony(intent: any) {
        // High-level "Symphony" orchestration
        // Maps the intent to the most appropriate high-level action
        // For "1 prompt game creation", we use 'architect_solution' and 'negotiate_consensus'

        const prompt = intent.payload.text || intent.payload.request || JSON.stringify(intent.payload);

        // Step 1: Architect the solution
        const plan = await this.process({
            action: 'architect_solution',
            prompt: prompt
        });

        // Step 2: If we have a plan, we might auto-execute or return it
        // The stub returned { conductor, symphony_id, results }
        // We should format the output to match what NeuralRegistry expects or enhance it.

        return {
            conductor: 'OrchestratorLimb (Real)',
            symphony_id: crypto.randomUUID(),
            plan: plan,
            status: 'orchestrated'
        };
    }

    async process(intent: any) {
        const { action, request, context = {} } = intent;

        await this.logActivity(`orchestrate_${action}`, 'pending', { request });

        try {
            switch (action) {
                case 'execute_graph':
                    this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
                    const { nodes, edges } = intent;

                    // Execute real AI interpretation of the flow
                    return await this.callAI({
                        type: 'text',
                        prompt: `Interpret and execute this logic graph:\nNodes: ${JSON.stringify(nodes)}\nEdges: ${JSON.stringify(edges)}`,
                        systemPrompt: 'You are a graph execution engine. Analyze the flow and return the final output state.'
                    });

                // (Duplicate case removed)

                case 'align_limbs':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callAI({
                        type: 'text',
                        prompt: `Alignment request for context: ${JSON.stringify(context)}`,
                        systemPrompt: 'Analyze the current system state and suggest limb synchronization protocols.'
                    });

                case 'architect_solution':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    const { prompt: archPrompt } = intent;

                    return await this.callAI({
                        type: 'text',
                        prompt: `Architect a technical blueprint for: ${archPrompt}`,
                        systemPrompt: 'You are a Senior Software Architect. Return ONLY a valid JSON object with the following structure: { "plan": { "solutionId": "string", "blueprint": [ { "step": number, "action": "string", "file": "string", "description": "string" } ], "estimatedComplexity": "string" } }'
                    });

                case 'negotiate_consensus':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callAI({
                        type: 'text',
                        prompt: `Perform multi-agent negotiation for: ${request}`,
                        systemPrompt: 'Return a valid JSON object with: { "state": "aligned", "finalPlan": "string", "confidence": number, "rounds": [ { "agent": "string", "thought": "string", "confidence": number } ] }'
                    });

                case 'get_symphony_status':
                    return {
                        status: 'success',
                        agents: [
                            { name: 'Architect', status: 'ACTIVE', health: 1.0, load: 0.12 },
                            { name: 'Strategist', status: 'ACTIVE', health: 0.98, load: 0.05 },
                            { name: 'Critic', status: 'IDLE', health: 1.0, load: 0.0 },
                            { name: 'Symphony', status: 'SYNCING', health: 0.95, load: 0.45 }
                        ]
                    };

                default:
                    throw new Error(`Unknown high-end orchestrator action: ${action}`);
            }
        } catch (e: any) {
            await this.logActivity(`orchestrate_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
    }

    private async callAI(request: any) {
        const response: any = await modelRouter.route(request);

        // Parse JSON if the response is a string, otherwise use it directly
        let data = response;
        if (typeof response === 'string' || (response && typeof response.content === 'string')) {
            const content = typeof response === 'string' ? response : response.content;
            try {
                // Strip markdown backticks if present
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
