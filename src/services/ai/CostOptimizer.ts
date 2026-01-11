/**
 * CostOptimizer - Strategic AI Resource Rotation
 * Multi-tier cost routing with budget enforcement
 * Inspired by recreation pass architecture v5.0
 */

export interface QuotaStatus {
    cloudflare: { tokens: number; limit: number; resetAt: Date };
    gemini: { budget: number; limit: number; resetAt: Date };
    ollama: { available: boolean };
}

export interface AIRequest {
    userId: string;
    type: 'text' | 'image' | 'audio' | 'code' | 'reasoning' | 'video';
    prompt: string;
    estimatedTokens?: number;
    estimatedCost?: number;
    timeout?: number;
}

export interface Route {
    provider: 'cloudflare' | 'gemini' | 'ollama';
    model: string;
    cost: number;
    confidence: number;
    latency?: 'low' | 'medium' | 'high';
}

// Cost estimates per 1K tokens
const COST_PER_1K = {
    cloudflare: 0, // Free tier
    gemini: 0.0005, // ~$0.50 per 1M tokens
    ollama: 0 // Local
};

// Model mappings by provider and type
const MODEL_MAP: Record<string, Record<string, string>> = {
    cloudflare: {
        text: '@cf/openai/gpt-oss-120b',
        code: '@cf/qwen/qwen2.5-coder-32b-instruct',
        reasoning: '@cf/qwen/qwq-32b',
        image: '@cf/black-forest-labs/flux-1-schnell',
        audio: '@cf/openai/whisper-large-v3-turbo'
    },
    gemini: {
        text: 'gemini-2.0-flash',
        code: 'gemini-2.0-flash',
        reasoning: 'gemini-2.0-flash-thinking-exp',
        image: 'imagen-3.0-generate-001',
        video: 'veo-001'
    },
    ollama: {
        text: 'llama3.2',
        code: 'codellama',
        reasoning: 'mistral'
    }
};

export class CostOptimizer {
    private quotaCache: Map<string, QuotaStatus> = new Map();

    // Default limits
    private readonly TIERS = {
        free: {
            cloudflare: { tokensPerDay: 10000 },
            gemini: { budgetPerMonth: 5.00 }
        },
        pro: {
            cloudflare: { tokensPerDay: 100000 },
            gemini: { budgetPerMonth: 25.00 }
        }
    };

    /**
     * Get optimal route for an AI request
     */
    async route(request: AIRequest, env: Env): Promise<Route> {
        const quota = await this.getQuota(request.userId, env);
        const estimatedTokens = request.estimatedTokens || this.estimateTokens(request.prompt);
        const estimatedCost = (estimatedTokens / 1000) * COST_PER_1K.gemini;

        // Priority 1: Cloudflare (Free)
        if (quota.cloudflare.tokens >= estimatedTokens) {
            return {
                provider: 'cloudflare',
                model: MODEL_MAP.cloudflare[request.type] || MODEL_MAP.cloudflare.text,
                cost: 0,
                confidence: 0.95,
                latency: 'low'
            };
        }

        // Priority 2: Gemini (Paid with budget)
        if (quota.gemini.budget >= estimatedCost) {
            return {
                provider: 'gemini',
                model: MODEL_MAP.gemini[request.type] || MODEL_MAP.gemini.text,
                cost: estimatedCost,
                confidence: 0.98,
                latency: 'medium'
            };
        }

        // Priority 3: Ollama (Local fallback)
        // Note: Ollama availability is currently checked via local config, assuming yes for now if others fail
        console.log(`[CostOptimizer] Quotas exceeded, checking local fallback`);
        return {
            provider: 'ollama',
            model: MODEL_MAP.ollama[request.type] || MODEL_MAP.ollama.text,
            cost: 0,
            confidence: 0.85,
            latency: 'high'
        };
    }

    /**
     * Deduct usage after successful request
     */
    async deductUsage(
        userId: string,
        usage: { provider: string; tokens: number; cost: number },
        env: any
    ): Promise<void> {
        const id = env.METABOLISM_DO.idFromName(userId);
        const stub = env.METABOLISM_DO.get(id);

        await stub.deductUsage(userId, usage.provider, usage.tokens, usage.cost);

        console.log(`[CostOptimizer] Deducted ${usage.tokens} tokens from ${usage.provider} for ${userId} (RPC)`);
    }

    /**
     * Get current quota status for a user from MetabolismDO
     */
    async getQuota(userId: string, env: any): Promise<QuotaStatus> {
        const id = env.METABOLISM_DO.idFromName(userId);
        const stub = env.METABOLISM_DO.get(id);

        const data = await stub.getQuota(userId) as QuotaStatus;
        return { ...data, ollama: { available: true } }; // Client-side mixin
    }

    /**
     * Estimate tokens from prompt
     */
    private estimateTokens(prompt: string): number {
        // Rough estimate: ~4 chars per token
        return Math.ceil(prompt.length / 4);
    }

    /**
     * Get usage metrics for display
     */
    async getMetrics(userId: string, env: Env): Promise<{
        cloudflareUsed: number;
        cloudflareLimit: number;
        geminiSpent: number;
        geminiLimit: number;
        savingsEstimate: number;
    }> {
        const quota = await this.getQuota(userId, env);
        const cfUsed = quota.cloudflare.limit - quota.cloudflare.tokens;
        const geminiSpent = quota.gemini.limit - quota.gemini.budget;

        return {
            cloudflareUsed: cfUsed,
            cloudflareLimit: quota.cloudflare.limit,
            geminiSpent,
            geminiLimit: quota.gemini.limit,
            savingsEstimate: (cfUsed / 1000) * COST_PER_1K.gemini
        };
    }
}

// Singleton export
export const costOptimizer = new CostOptimizer();
