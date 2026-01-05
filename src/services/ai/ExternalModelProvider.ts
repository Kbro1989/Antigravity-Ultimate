/**
 * ExternalModelProvider - Handles calls to non-Cloudflare AI providers
 * Supports Hugging Face, Fireworks AI, and OpenRouter
 */

export interface ExternalModelConfig {
    huggingfaceToken?: string;
    fireworksToken?: string;
    openrouterToken?: string;
}

export interface InferenceResult {
    success: boolean;
    data?: any;
    error?: string;
}

export class ExternalModelProvider {
    private config: ExternalModelConfig;

    constructor(config: ExternalModelConfig = {}) {
        this.config = config;
    }

    /**
     * Update tokens from environment
     */
    setTokens(config: Partial<ExternalModelConfig>): void {
        this.config = { ...this.config, ...config };
    }

    /**
     * Run inference on Hugging Face Inference API
     */
    async runHuggingFace<T = any>(model: string, inputs: any): Promise<InferenceResult> {
        if (!this.config.huggingfaceToken) {
            return { success: false, error: 'Hugging Face token not configured' };
        }

        try {
            const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
                headers: {
                    Authorization: `Bearer ${this.config.huggingfaceToken}`,
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(inputs),
            });

            if (!response.ok) {
                const error = await response.text();
                return { success: false, error: `HF API error: ${error}` };
            }

            const data = await response.json();
            return { success: true, data: data as T };
        } catch (error) {
            return { success: false, error: `HF request failed: ${error}` };
        }
    }

    /**
     * Run inference on Fireworks AI
     */
    async runFireworks<T = any>(
        model: string,
        messages: { role: string; content: string }[],
        options: { maxTokens?: number; temperature?: number } = {}
    ): Promise<InferenceResult> {
        if (!this.config.fireworksToken) {
            return { success: false, error: 'Fireworks token not configured' };
        }

        try {
            const response = await fetch('https://api.fireworks.ai/inference/v1/chat/completions', {
                headers: {
                    Authorization: `Bearer ${this.config.fireworksToken}`,
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    model,
                    messages,
                    max_tokens: options.maxTokens ?? 4096,
                    temperature: options.temperature ?? 0.7,
                }),
            });

            if (!response.ok) {
                const error = await response.text();
                return { success: false, error: `Fireworks API error: ${error}` };
            }

            const data = await response.json();
            return { success: true, data: data as T };
        } catch (error) {
            return { success: false, error: `Fireworks request failed: ${error}` };
        }
    }

    /**
     * Run inference on OpenRouter (aggregates many models)
     */
    async runOpenRouter<T = any>(
        model: string,
        messages: { role: string; content: string }[],
        options: { maxTokens?: number; temperature?: number } = {}
    ): Promise<InferenceResult> {
        if (!this.config.openrouterToken) {
            return { success: false, error: 'OpenRouter token not configured' };
        }

        try {
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                headers: {
                    Authorization: `Bearer ${this.config.openrouterToken}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'https://POG.ai',
                    'X-Title': 'POG Engine',
                },
                method: 'POST',
                body: JSON.stringify({
                    model,
                    messages,
                    max_tokens: options.maxTokens ?? 4096,
                    temperature: options.temperature ?? 0.7,
                }),
            });

            if (!response.ok) {
                const error = await response.text();
                return { success: false, error: `OpenRouter API error: ${error}` };
            }

            const data = await response.json();
            return { success: true, data: data as T };
        } catch (error) {
            return { success: false, error: `OpenRouter request failed: ${error}` };
        }
    }

    /**
     * Generate 3D model from image using TripoSR on Hugging Face
     */
    async generate3DFromImage(imageBase64: string): Promise<InferenceResult> {
        return this.runHuggingFace('stabilityai/TripoSR', {
            inputs: imageBase64,
        });
    }

    /**
     * Clone/synthesize voice using XTTS on Hugging Face
     */
    async synthesizeVoiceClone(text: string, referenceAudio: string): Promise<InferenceResult> {
        return this.runHuggingFace('coqui/XTTS-v2', {
            inputs: {
                text,
                speaker_wav: referenceAudio,
            },
        });
    }
}

// Singleton instance
export const externalModelProvider = new ExternalModelProvider();
