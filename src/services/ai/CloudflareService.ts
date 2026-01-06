/**
 * CloudflareService - AI Orchestration Layer
 * Ported from POG-engine for POG Ultimate
 * Provides unified access to Cloudflare Workers AI endpoints
 */

// Default worker URL - can be overridden
// Default worker URL - can be overridden
let WORKER_URL = 'https://ai-game-studio.workers.dev';
try {
    WORKER_URL = (import.meta as any).env?.VITE_AI_WORKER_URL || WORKER_URL;
} catch (e) {
    // Ignore environment errors in non-Vite environments
}

export const setWorkerUrl = (url: string) => {
    WORKER_URL = url;
    console.log(`[CloudflareService] Worker URL set to: ${url}`);
};

// Types
export interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export interface CodeCompletion {
    text: string;
    confidence: number;
}

export interface CodeIssue {
    severity: 'error' | 'warning' | 'info';
    message: string;
    line?: number;
}

export interface TokenMetrics {
    used: number;
    limit: number;
    isFallbackActive: boolean;
}

// Rate Limiter
class CloudflareRateLimiter {
    private usedTokens: number = 0;
    private readonly LIMIT = 100000000;

    addUsage(tokens: number) { this.usedTokens += tokens; }
    getMetrics(): TokenMetrics {
        return {
            used: this.usedTokens,
            limit: this.LIMIT,
            isFallbackActive: false
        };
    }
}

export const cloudflareLimiter = new CloudflareRateLimiter();

/**
 * Main orchestration - Chat with function calling
 */
export const runOrchestration = async (
    prompt: string,
    history: Message[],
    context: string = '',
    reasoningLevel: 'standard' | 'high' = 'standard'
) => {
    try {
        const model = reasoningLevel === 'high' ? 'DEEPSEEK_R1' : 'GPT_OSS';
        const response = await fetch(`${WORKER_URL}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: prompt,
                history: history.map(m => ({ role: m.role, content: m.content })),
                model: model,
                systemPrompt: context || 'You are POG AI. Execute tasks with precision.'
            })
        });

        if (!response.ok) {
            throw new Error(`Worker error: ${response.status}`);
        }

        const data = await response.json() as any;
        cloudflareLimiter.addUsage(data.tokensUsed || 1000);

        return {
            text: data.response,
            functionCalls: data.functionCalls || [],
            model: data.model,
            latency: data.latency
        };
    } catch (error) {
        console.error("[CloudflareService] Orchestration Failure:", error);
        throw error;
    }
};

/**
 * Image Generation - Uses FLUX via Cloudflare
 */
export const generateImage = async (
    prompt: string,
    options: {
        aspectRatio?: "1:1" | "16:9" | "9:16",
        modelId?: string,
        provider?: string
    } = {}
) => {
    try {
        const { aspectRatio = "1:1", modelId = 'FLUX', provider = 'cloudflare' } = options;
        const response = await fetch(`${WORKER_URL}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, model: modelId, aspectRatio, provider })
        });

        if (!response.ok) {
            throw new Error(`Image generation failed: ${response.status}`);
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        return { imageUrl: url, model: 'Cloudflare AI Image' };
    } catch (error) {
        console.error("[CloudflareService] Image Generation Failed:", error);
        return { imageUrl: null, model: 'Cloudflare AI Image' };
    }
};

/**
 * Speech Synthesis - Uses Cloudflare TTS
 */
export const synthesizeSpeech = async (
    text: string,
    options: {
        modelId?: string,
        provider?: string
    } = {}
) => {
    try {
        const { modelId = 'deepgram/aura-2-en', provider = 'cloudflare' } = options;
        const response = await fetch(`${WORKER_URL}/api/speech`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, model: modelId, provider })
        });

        if (!response.ok) {
            throw new Error(`Speech synthesis failed: ${response.status}`);
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        return { audioUrl: url, model: 'Cloudflare AI TTS' };
    } catch (error) {
        console.error("[CloudflareService] Speech Synthesis Failed:", error);
        return { audioUrl: null, model: 'Cloudflare AI TTS' };
    }
};

/**
 * Video Generation
 */
export const generateVideo = async (
    prompt: string,
    options: {
        modelId?: string,
        provider?: string
    } = {}
) => {
    try {
        const { modelId = 'runway/gen-3', provider = 'fireworks' } = options;
        const response = await fetch(`${WORKER_URL}/api/video`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, model: modelId, provider })
        });

        if (!response.ok) {
            throw new Error(`Video generation failed: ${response.status}`);
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        return { videoUrl: url, model: 'Cloudflare AI Video' };
    } catch (error) {
        console.error("[CloudflareService] Video Generation Failed:", error);
        return { videoUrl: null, model: 'Cloudflare AI Video' };
    }
};

/**
 * Code Completions - Uses Qwen Coder
 */
export const getCodeCompletions = async (
    prefix: string,
    suffix: string,
    filename: string,
    options: {
        modelId?: string,
        provider?: string
    } = {}
): Promise<CodeCompletion[]> => {
    try {
        const { modelId = 'qwen/qwen2.5-coder-32b-instruct', provider = 'cloudflare' } = options;
        const response = await fetch(`${WORKER_URL}/api/completions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prefix, suffix, filename, model: modelId, provider })
        });

        if (!response.ok) {
            return [];
        }

        const data = await response.json() as any;
        return data.completions || [];
    } catch (error) {
        console.error("[CloudflareService] Autocomplete Failed:", error);
        return [];
    }
};

/**
 * Health check
 */
export const checkWorkerHealth = async () => {
    try {
        const response = await fetch(`${WORKER_URL}/api/health`);
        const data = await response.json() as any;
        return {
            status: data.status,
            models: data.models,
            version: data.version
        };
    } catch (error) {
        return { status: 'offline', models: 0, version: 'unknown' };
    }
};

/**
 * AI Code Audit
 */
export const auditCode = async (
    code: string,
    filename: string
): Promise<CodeIssue[]> => {
    try {
        const response = await fetch(`${WORKER_URL}/api/audit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, filename })
        });

        if (!response.ok) {
            return [];
        }

        const data = await response.json() as any;
        return data.issues || [];
    } catch (error) {
        console.error("[CloudflareService] Audit Failed:", error);
        return [];
    }
};

/**
 * AI Code Refactoring
 */
export const refactorCode = async (
    code: string,
    filename: string
): Promise<{ original: string, modified: string, explanation: string } | null> => {
    try {
        const response = await fetch(`${WORKER_URL}/api/refactor`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, filename })
        });

        if (!response.ok) {
            return null;
        }

        const data = await response.json() as any;
        return data.suggestion || null;
    } catch (error) {
        console.error("[CloudflareService] Refactor Failed:", error);
        return null;
    }
};

/**
 * Semantic Asset Search
 */
export const searchSimilarAssets = async (
    query: string,
    limit: number = 10
): Promise<{
    results: Array<{ id: string; name: string; score: number; type: string }>;
    searchVector?: number[];
} | null> => {
    try {
        const response = await fetch(`${WORKER_URL}/api/vector-search`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, limit, namespace: 'game-assets' })
        });

        if (!response.ok) {
            return { results: [] };
        }

        const data = await response.json() as any;
        return {
            results: data.results || [],
            searchVector: data.embedding
        };
    } catch (error) {
        console.error("[CloudflareService] Semantic Search Failed:", error);
        return null;
    }
};

// Default export for convenience
export default {
    runOrchestration,
    generateImage,
    synthesizeSpeech,
    generateVideo,
    getCodeCompletions,
    checkWorkerHealth,
    auditCode,
    refactorCode,
    searchSimilarAssets,
    setWorkerUrl,
    cloudflareLimiter
};
