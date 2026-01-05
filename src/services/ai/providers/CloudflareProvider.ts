
import type { Env } from '../../../types/env';

const WORKER_URL = import.meta.env.VITE_AI_WORKER_URL || '';

export interface CloudflareTextRequest {
    prompt: string;
    history?: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>;
    systemPrompt?: string;
    maxTokens?: number;
    model?: string;
}

class CloudflareProvider {
    private workerUrl: string;
    private env?: Env;

    constructor(env?: Env) {
        this.workerUrl = typeof window !== 'undefined' ? (window as any).POG_WORKER_URL || WORKER_URL : WORKER_URL;
        this.env = env;
    }

    public setEnv(env: Env) {
        this.env = env;
    }

    /**
     * Direct binding check
     */
    private isBackend(): boolean {
        return !!(this.env && this.env.AI);
    }

    async textChat(request: CloudflareTextRequest, stream = false): Promise<any> {
        if (this.isBackend()) {
            // Direct Worker Binding Implementation
            const model = request.model || '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
            const messages = [
                { role: 'system', content: request.systemPrompt || 'You are POG AI.' },
                ...(request.history || []),
                { role: 'user', content: request.prompt }
            ];

            return this.env!.AI.run(model, {
                messages,
                stream
            });
        }

        // Frontend/Remote Fallback
        const response = await fetch(`${this.workerUrl}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: request.prompt,
                history: request.history,
                systemPrompt: request.systemPrompt,
                model: request.model,
                stream
            })
        });

        if (stream) return response.body;
        return response.json();
    }

    async generateImage(request: { prompt: string, negativePrompt?: string }): Promise<{ imageUrl: string, model: string }> {
        if (this.isBackend()) {
            const result = await this.env!.AI.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', {
                prompt: request.prompt
            });
            // Result is a binary stream in workers, would need to handle R2/Response here
            return { imageUrl: 'data:image/png;base64,...', model: 'SDXL-Direct' };
        }

        const response = await fetch(`${this.workerUrl}/api/generate-image`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        });
        const blob = await response.blob();
        return { imageUrl: URL.createObjectURL(blob), model: '@cf/stabilityai/stable-diffusion-xl-base-1.0' };
    }

    async codeCompletion(request: any): Promise<{ code: string, model: string }> {
        if (this.isBackend()) {
            const result = await this.env!.AI.run('@cf/qwen/qwen2.5-coder-32b-instruct', {
                prompt: request.prefix
            });
            return { code: result.response || result, model: 'Qwen-Direct' };
        }

        const response = await fetch(`${this.workerUrl}/api/code-complete`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        });
        const data = await response.json() as any;
        return { code: data.code || data.result, model: 'qwen-2.5-coder' };
    }
}

export const cloudflareProvider = new CloudflareProvider();
export default cloudflareProvider;
export { CloudflareProvider };
