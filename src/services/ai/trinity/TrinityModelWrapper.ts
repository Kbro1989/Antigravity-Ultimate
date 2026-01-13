
import { Model, Task, GenerationResult } from './types';
import { ModelRouter, ModelRequest } from '../ModelRouter';

/**
 * TrinityModelWrapper - Adapts Universal ModelRouter models for the Trinity Pipeline.
 * Enables Capability-Aware Scoring and Vickrey Auctions for standard AI models.
 */
export class TrinityModelWrapper implements Model {
    id: string;
    costPerToken: number;
    accessibleLimbs?: string[];
    limbPermissions?: 'all' | 'whitelist' | 'none';

    constructor(
        private modelKey: string,
        private router: ModelRouter,
        private options: {
            cost?: number;
            accessibleLimbs?: string[];
            permissions?: 'all' | 'whitelist' | 'none';
        } = {}
    ) {
        this.id = modelKey;
        this.costPerToken = options.cost || 0.0001; // Default low cost
        this.accessibleLimbs = options.accessibleLimbs || [];
        this.limbPermissions = options.permissions || 'whitelist';
    }

    async getConfidence(task: Task): Promise<number> {
        // Simple heuristic: Does the task match the model's key?
        // In the future, this could use IntelRegistry or historical metrics.
        if (this.id.includes('CODER') && task.prompt.toLowerCase().includes('code')) return 0.95;
        if (this.id.includes('REASONING') && task.prompt.length > 500) return 0.98;
        return 0.85; // Baseline confidence
    }

    async generate(task: Task): Promise<GenerationResult> {
        const request: ModelRequest = {
            userId: (task.metadata?.userId as string) || 'trinity-system',
            type: 'text', // Trinity handles tool loop internally, so we use text
            prompt: task.prompt,
            modelId: this.id,
            context: JSON.stringify(task.context || {}),
            options: task.metadata?.options
        };

        const response: any = await this.router.route(request);

        return {
            output: response.content || response,
            confidence: response.confidence || 0.90,
            tokens: response.tokensUsed || 0,
            metadata: response.metadata
        };
    }
}
