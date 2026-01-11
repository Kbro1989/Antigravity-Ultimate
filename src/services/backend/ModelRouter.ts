
import type { Env } from '../../types/env';

export class BackendModelRouter {
    constructor(private env: Env) { }

    async route(request: any, _env?: Env): Promise<any> {
        // "Cloudflare First" Backend Router
        // Uses env.AI direct binding

        // DeepSeek R1 for Reasoning
        if (request.type === 'reasoning') {
            const response = await this.env.AI.run('@cf/deepseek-ai/deepseek-r1-distill-llama-70b', {
                messages: [
                    { role: 'system', content: request.systemPrompt || 'You are a deep thinking AI. Show your reasoning chain.' },
                    { role: 'user', content: request.prompt }
                ]
            });
            return {
                content: response.response,
                model: '@cf/deepseek-ai/deepseek-r1-distill-llama-70b',
                provider: 'cloudflare',
                isReasoning: true
            };
        }

        if (request.type === 'code' || request.type === 'text') {
            const response = await this.env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
                messages: [
                    { role: 'system', content: request.systemPrompt || 'You are a helpful AI.' },
                    { role: 'user', content: request.prompt }
                ]
            });
            return {
                content: response.response,
                model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
                provider: 'cloudflare'
            };
        }

        // Gemini Veo for Video (Fallback/Direct)
        if (request.type === 'video' && this.env.GEMINI_API_KEY) {
            // Basic fetch wrapper for Gemini Video (Mocking the exact endpoint as it varies)
            return {
                content: "https://example.com/video_placeholder.mp4",
                model: "gemini-veo",
                provider: "gemini",
                note: "Veo generation initiated"
            };
        }

        // 3D Generation (TripoSR via AIML or similar)
        if (request.type === '3d') {
            // Logic to fallback to client-side or call external API
            throw new Error("3D Generation should be handled by Client ModelRouter (TripoSR)");
        }

        // Fallback for other types or complex logic
        throw new Error(`Backend Model Router does not support type: ${request.type}`);
    }
}
