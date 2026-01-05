/**
 * AI Usage Service (Adapted for Cloudflare D1)
 * Tracks AI model usage, token consumption, and costs
 */

// Placeholder for Types - TO BE DEFINED in global types
export interface AIUsageMetrics {
    model: string;
    provider: string;
    taskType: string;
    inputTokens: number;
    outputTokens: number;
    cost: number;
    duration: number;
    success: boolean;
    userId?: string;
    timestamp?: number;
}

export interface AIUsageParams extends AIUsageMetrics { }

/**
 * Log AI usage
 * Note: In a real Cloudflare environment, this should probably POST to a Worker endpoint
 * that performs the INSERT, rather than running client-side.
 * For now, we'll assume this runs in the context where `env.DB` might be available via proxy or local storage.
 * 
 * ADAPTATION: Storing in LocalStorage for now to match Client-side nature of React,
 * but designed to sync to D1 if this were running in the Worker.
 */
export async function logAIUsage(params: AIUsageParams): Promise<string> {
    const usageId = crypto.randomUUID();
    const record = { ...params, id: usageId, timestamp: Date.now() };

    // 1. Local Persistence (for immediate UI feedback)
    const history = JSON.parse(localStorage.getItem('ai_usage_history') || '[]');
    history.push(record);
    // Keep last 1000
    if (history.length > 1000) history.shift();
    localStorage.setItem('ai_usage_history', JSON.stringify(history));

    console.log('[AI Usage]', record);

    return usageId;
}

/**
 * Helper to calculate approximate costs based on provider and model
 */
export function calculateCost(
    provider: string,
    model: string,
    inputTokens: number,
    outputTokens: number
): number {
    // Approximate costs per 1M tokens (in USD)
    const pricingTable: Record<string, { input: number; output: number }> = {
        'gemini-2.0-flash': { input: 0.075, output: 0.30 },
        'gemini-1.5-pro': { input: 1.25, output: 5.00 },
        'gemini-1.5-flash': { input: 0.075, output: 0.30 },
        // Cloudflare Workers AI is typically free tier or very low cost
        'cloudflare': { input: 0.001, output: 0.001 },
    };

    const pricing = pricingTable[model] || pricingTable[provider] || { input: 0, output: 0 };

    const inputCost = (inputTokens / 1_000_000) * pricing.input;
    const outputCost = (outputTokens / 1_000_000) * pricing.output;

    return inputCost + outputCost;
}

export const aiUsageHelpers = {
    /**
     * Calculate total cost from usage records
     */
    calculateTotalCost(usageRecords: AIUsageMetrics[]): number {
        return usageRecords.reduce((sum, record) => sum + (record.cost || 0), 0);
    },

    /**
     * Calculate total tokens from usage records
     */
    calculateTotalTokens(usageRecords: AIUsageMetrics[]): {
        input: number;
        output: number;
        total: number;
    } {
        const input = usageRecords.reduce((sum, r) => sum + (r.inputTokens || 0), 0);
        const output = usageRecords.reduce((sum, r) => sum + (r.outputTokens || 0), 0);

        return { input, output, total: input + output };
    },

    /**
     * Group usage by provider
     */
    groupByProvider(usageRecords: AIUsageMetrics[]): Record<string, AIUsageMetrics[]> {
        return usageRecords.reduce((groups, record) => {
            const provider = record.provider || 'unknown';
            if (!groups[provider]) {
                groups[provider] = [];
            }
            groups[provider].push(record);
            return groups;
        }, {} as Record<string, AIUsageMetrics[]>);
    },

    /**
     * Get success rate percentage
     */
    getSuccessRate(usageRecords: AIUsageMetrics[]): number {
        if (usageRecords.length === 0) return 0;

        const successful = usageRecords.filter(r => r.success).length;
        return (successful / usageRecords.length) * 100;
    },
};

export default {
    logAIUsage,
    calculateCost,
    helpers: aiUsageHelpers,
};
