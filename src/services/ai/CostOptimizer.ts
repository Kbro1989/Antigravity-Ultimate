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
        text: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
        code: '@cf/qwen/qwen-2.5-coder-32b',
        reasoning: '@cf/deepseek-ai/deepseek-r1-distill-llama-70b',
        image: '@cf/black-forest-labs/flux-1-schnell',
        audio: '@cf/openai/whisper'
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
    async route(request: AIRequest): Promise<Route> {
        const quota = await this.getQuota(request.userId);
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
        if (quota.ollama.available) {
            console.log(`[CostOptimizer] Quotas exceeded, falling back to Ollama`);
            return {
                provider: 'ollama',
                model: MODEL_MAP.ollama[request.type] || MODEL_MAP.ollama.text,
                cost: 0,
                confidence: 0.85,
                latency: 'high'
            };
        }

        // Emergency: All providers exhausted
        throw new Error('All AI providers exhausted. Please try again later.');
    }

    /**
     * Deduct usage after successful request
     */
    async deductUsage(
        userId: string,
        usage: { provider: string; tokens: number; cost: number }
    ): Promise<void> {
        const quota = await this.getQuota(userId);

        if (usage.provider === 'cloudflare') {
            quota.cloudflare.tokens -= usage.tokens;
        } else if (usage.provider === 'gemini') {
            quota.gemini.budget -= usage.cost;
        }

        this.quotaCache.set(userId, quota);

        // Persist to storage (D1) in production
        console.log(`[CostOptimizer] Deducted ${usage.tokens} tokens from ${usage.provider} for ${userId}`);
    }

    /**
     * Get current quota status for a user
     */
    async getQuota(userId: string): Promise<QuotaStatus> {
        // Check cache first
        if (this.quotaCache.has(userId)) {
            const cached = this.quotaCache.get(userId)!;

            // Check for reset
            const now = new Date();
            if (now >= cached.cloudflare.resetAt) {
                cached.cloudflare.tokens = this.TIERS.free.cloudflare.tokensPerDay;
                cached.cloudflare.resetAt = this.getNextDayReset();
            }
            if (now >= cached.gemini.resetAt) {
                cached.gemini.budget = this.TIERS.free.gemini.budgetPerMonth;
                cached.gemini.resetAt = this.getNextMonthReset();
            }

            return cached;
        }

        // Initialize new user quota
        const quota: QuotaStatus = {
            cloudflare: {
                tokens: this.TIERS.free.cloudflare.tokensPerDay,
                limit: this.TIERS.free.cloudflare.tokensPerDay,
                resetAt: this.getNextDayReset()
            },
            gemini: {
                budget: this.TIERS.free.gemini.budgetPerMonth,
                limit: this.TIERS.free.gemini.budgetPerMonth,
                resetAt: this.getNextMonthReset()
            },
            ollama: { available: true } // Assume available
        };

        this.quotaCache.set(userId, quota);
        return quota;
    }

    /**
     * Estimate tokens from prompt
     */
    private estimateTokens(prompt: string): number {
        // Rough estimate: ~4 chars per token
        return Math.ceil(prompt.length / 4);
    }

    /**
     * Get next daily reset time (midnight UTC)
     */
    private getNextDayReset(): Date {
        const tomorrow = new Date();
        tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
        tomorrow.setUTCHours(0, 0, 0, 0);
        return tomorrow;
    }

    /**
     * Get next monthly reset time (1st of next month)
     */
    private getNextMonthReset(): Date {
        const nextMonth = new Date();
        nextMonth.setUTCMonth(nextMonth.getUTCMonth() + 1, 1);
        nextMonth.setUTCHours(0, 0, 0, 0);
        return nextMonth;
    }

    /**
     * Get usage metrics for display
     */
    async getMetrics(userId: string): Promise<{
        cloudflareUsed: number;
        cloudflareLimit: number;
        geminiSpent: number;
        geminiLimit: number;
        savingsEstimate: number;
    }> {
        const quota = await this.getQuota(userId);
        const cfUsed = quota.cloudflare.limit - quota.cloudflare.tokens;
        const geminiSpent = quota.gemini.limit - quota.gemini.budget;

        return {
            cloudflareUsed: cfUsed,
            cloudflareLimit: quota.cloudflare.limit,
            geminiSpent,
            geminiLimit: quota.gemini.limit,
            savingsEstimate: (cfUsed / 1000) * COST_PER_1K.gemini // What it would have cost on Gemini
        };
    }
}

// Singleton export
export const costOptimizer = new CostOptimizer();
