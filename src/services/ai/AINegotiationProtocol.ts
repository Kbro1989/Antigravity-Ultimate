
import { AgentCapability, NEGOTIATION_LAW } from './AgentConstitution';
import { TernaryState, TERNARY } from './AITypes';

export interface NegotiationOption {
    provider: string;
    cost: number;
    latency: number;
    quality: number;
    consensus: TernaryState; // Hardened Logic
    confidence: number;
    finalPlan: {
        steps: Array<{
            id: string;
            action: string;
            limbId: string;
            params: any;
        }>;
    };
}

/**
 * AINegotiationProtocol - The "V6.1 Symphony" Core.
 * Conducts intent-driven negotiation between AI providers.
 */
export class AINegotiationProtocol {
    private env: any;

    constructor(env?: any) {
        this.env = env;
    }

    async negotiate(intent: any): Promise<NegotiationOption> {
        console.log(`[Negotiation] Analyzing intent: ${intent.verb} - ${JSON.stringify(intent.payload)}`);

        // Use ModelRouter (assuming global or passed in context, but for now we import or use CloudflareProvider equivalent from context)
        // Since AINegotiationProtocol is used in SessionAgent which has services, we should inject router. 
        // But checking constructor, it receives 'env'. 
        // Let's assume we can instantiate the Router or use the existing binding.
        // For simplicity/robustness, we'll use a direct fetch to the AI binding if possible, or use the 'ServiceContainer' pattern if we can.
        // Actually, 'modelRouter' is exported from '../ModelRouter' in some files.

        let planSteps = [];
        let modelUsed = 'simulated';
        let voteSum = 0; // Ternary accumulator

        try {
            // DYNAMIC PLAN GENERATION
            // We'll ask the AI to break down the user's request into actionable limb steps.
            const prompt = `
            You are the Orchestrator AI. The user wants to: "${intent.verb} ${JSON.stringify(intent.payload || {})}".
            
            Available Limbs (Tools):
            - code: write/edit code, audit (Priority: +1)
            - image: generate concepts, textures (Priority: 0)
            - mesh: generate 3d models, process geometry (Priority: 0)
            - network: fetch, ping (Priority: -1)
            - security: audit, lock (Priority: +1)
            
            Return a JSON object with a "steps" array. Each step has: "id", "limbId", "action", "params".
            Example: { "steps": [{ "id": "1", "limbId": "image", "action": "generate", "params": {"prompt": "hero"} }] }
            `;

            // Note: We need access to the AI provider here. 
            // Since this runs in Worker, we can use env.AI if available.
            // If we can't easily access modelRouter from here without circular deps, we might need to rely on a passed-in service.
            // SessionAgent passes 'env'.

            if (this.env && this.env.AI) {
                const response = await this.env.AI.run('@cf/meta/llama-3-8b-instruct', {
                    messages: [{ role: 'user', content: prompt }]
                });

                // Parse JSON from response
                // Warning: LLMs can be chatty. ideally we use constrained generation or regex.
                const text = response.response || "";
                try {
                    const jsonMatch = text.match(/\{[\s\S]*\}/);
                    if (jsonMatch) {
                        const parsed = JSON.parse(jsonMatch[0]);
                        planSteps = parsed.steps || [];
                        modelUsed = '@cf/meta/llama-3-8b-instruct';
                        voteSum = planSteps.length > 0 ? TERNARY.TRUE : TERNARY.UNKNOWN;
                    }
                } catch (e) {
                    console.warn('Failed to parse AI plan', e);
                    voteSum = TERNARY.FALSE;
                }
            }
        } catch (e) {
            console.error('AI Planning failed', e);
            voteSum = TERNARY.FALSE;
        }

        // Fallback to single step if AI fails or is unavailable
        if (planSteps.length === 0) {
            planSteps = [
                { id: '1', action: intent.verb, limbId: 'orchestrator', params: intent.payload || {} }
            ];
            voteSum = TERNARY.UNKNOWN; // Weak execution
        }

        return {
            provider: 'cloudflare-orchestrator',
            cost: 0,
            latency: 200,
            quality: 0.9,
            consensus: voteSum > 0 ? TERNARY.TRUE : (voteSum < 0 ? TERNARY.FALSE : TERNARY.UNKNOWN), // Hardened Logic
            confidence: 0.95,
            finalPlan: {
                steps: planSteps
            }
        };
    }
}

export const aiNegotiation = new AINegotiationProtocol();
