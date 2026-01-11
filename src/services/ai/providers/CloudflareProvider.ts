
import type { Env } from '../../../types/env';
import { rateLimiter } from '../RateLimiter';

export interface CloudflareTextRequest {
    prompt: string;
    history?: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>;
    systemPrompt?: string;
    maxTokens?: number;
    model?: string;
    lora?: string;
}

class CloudflareProvider {
    private workerUrl: string | null = null;
    private env?: Env;

    constructor(env?: Env) {
        // Safe constructor, no side-effects
        this.env = env;
    }

    private getWorkerUrl(): string {
        if (this.workerUrl) return this.workerUrl;

        let url = '';

        // 1. Check window (Browser Only)
        if (typeof globalThis !== 'undefined' && (globalThis as any).window) {
            url = (globalThis as any).window.POG_WORKER_URL;
        }

        // 2. Check import.meta.env (Vite/Build-time)
        if (!url) {
            try {
                url = (import.meta as any).env?.VITE_AI_WORKER_URL;
            } catch (e) {
                // Ignore environment errors
            }
        }

        this.workerUrl = url || '';
        return this.workerUrl;
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
            await rateLimiter.enforce(model);

            const messages = [
                { role: 'system', content: request.systemPrompt || 'You are POG AI.' },
                ...(request.history || []),
                { role: 'user', content: request.prompt }
            ];

            return this.env!.AI.run(model, {
                messages,
                stream,
                ...(request.lora ? { lora: request.lora } : {})
            });
        }

        // Frontend/Remote Fallback
        const workerUrl = this.getWorkerUrl();
        await rateLimiter.enforce(request.model || 'text-default');

        const response = await fetch(`${workerUrl}/api/chat`, {
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
            const model = '@cf/stabilityai/stable-diffusion-xl-base-1.0';
            await rateLimiter.enforce(model);

            const result = await this.env!.AI.run(model, {
                prompt: request.prompt
            });

            // result is the image stream in workers, convert to base64
            const reader = result.getReader();
            const chunks = [];
            let totalLength = 0;
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(value);
                totalLength += value.length;
            }

            const fullArray = new Uint8Array(totalLength);
            let offset = 0;
            for (const chunk of chunks) {
                fullArray.set(chunk, offset);
                offset += chunk.length;
            }

            // Standard Web API Base64
            let binary = '';
            const bytes = new Uint8Array(fullArray);
            const len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            const b64 = btoa(binary);

            return { imageUrl: `data:image/png;base64,${b64}`, model: '@cf/stabilityai/stable-diffusion-xl-base-1.0' };
        }

        const workerUrl = this.getWorkerUrl();
        await rateLimiter.enforce('image-default');

        const response = await fetch(`${workerUrl}/api/generate-image`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        });
        const blob = await response.blob();
        return { imageUrl: URL.createObjectURL(blob), model: '@cf/stabilityai/stable-diffusion-xl-base-1.0' };
    }

    async codeCompletion(request: any): Promise<{ code: string, model: string }> {
        if (this.isBackend()) {
            const model = '@cf/qwen/qwen2.5-coder-32b-instruct';
            await rateLimiter.enforce(model);

            const result = await this.env!.AI.run(model, {
                prompt: request.prefix
            });
            return { code: result.response || result, model: 'Qwen-Direct' };
        }

        const workerUrl = this.getWorkerUrl();
        const response = await fetch(`${workerUrl}/api/code-complete`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        });
        const data = await response.json() as any;
        return { code: data.code || data.result, model: 'qwen-2.5-coder' };
    }

    async generateAudio(request: { prompt: string }): Promise<{ audioUrl: string, model: string }> {
        if (this.isBackend()) {
            const model = '@cf/myshell/melotts';
            await rateLimiter.enforce(model);

            const result = await this.env!.AI.run(model, {
                text: request.prompt
            });

            // Handle the audio stream
            const reader = result.getReader();
            const chunks = [];
            let totalLength = 0;
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(value);
                totalLength += value.length;
            }

            const fullArray = new Uint8Array(totalLength);
            let offset = 0;
            for (const chunk of chunks) {
                fullArray.set(chunk, offset);
                offset += chunk.length;
            }

            // Standard Web API Base64
            let binary = '';
            for (let i = 0; i < fullArray.byteLength; i++) {
                binary += String.fromCharCode(fullArray[i]);
            }
            const b64 = btoa(binary);

            return { audioUrl: `data:audio/mpeg;base64,${b64}`, model: '@cf/myshell/melotts' };
        }

        const workerUrl = this.getWorkerUrl();
        const response = await fetch(`${workerUrl}/api/generate-audio`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        });
        const blob = await response.blob();
        return { audioUrl: URL.createObjectURL(blob), model: '@cf/myshell/melotts' };
    }
}

export const cloudflareProvider = new CloudflareProvider();
export default cloudflareProvider;
export { CloudflareProvider };
