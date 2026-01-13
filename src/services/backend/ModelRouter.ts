
import type { Env } from '../../types/env';

export class BackendModelRouter {
    constructor(private env: Env) { }

    async route(request: any, _env?: Env): Promise<any> {
        const { provider, modelId, apiKeys, allowPaid } = request;
        const systemPrompt = request.systemPrompt || 'You are POG AI. Execute tasks with precision.';

        // 1. Cloudflare Workers AI (Default / Zero Cost)
        if (!provider || provider === 'cloudflare' || provider === '@cf') {
            return this.routeCloudflare(request);
        }

        // 2. Google Gemini (Vertex/AI Studio)
        if (provider === 'gemini') {
            const apiKey = apiKeys?.gemini || this.env.GEMINI_API_KEY;
            if (!apiKey) throw new Error("Missing Gemini API Key. Configure in Settings.");

            return this.routeGemini(request, apiKey, modelId || 'gemini-1.5-pro-latest');
        }

        // 3. Fireworks AI (Video/Image/Fast LLM)
        if (provider === 'fireworks') {
            const apiKey = apiKeys?.fireworks || this.env.FIREWORKS_API_KEY;
            if (!apiKey) throw new Error("Missing Fireworks API Key. Configure in Settings.");
            if (!allowPaid && !this.env.FIREWORKS_API_KEY) throw new Error("Paid Overflow Disabled. Enable 'Hard-Block' in Settings to use personal keys.");

            return this.routeFireworks(request, apiKey, modelId);
        }

        // 4. OpenRouter (Aggregator)
        if (provider === 'openrouter') {
            const apiKey = apiKeys?.openRouter || this.env.OPENROUTER_API_KEY;
            if (!apiKey) throw new Error("Missing OpenRouter Key.");
            return this.routeOpenAIStyle(request, 'https://openrouter.ai/api/v1/chat/completions', apiKey, modelId);
        }

        throw new Error(`Unsupported Provider: ${provider}`);
    }

    // --- Provider Implementations ---

    private async routeCloudflare(request: any) {
        // DeepSeek R1 for Reasoning
        if (request.type === 'reasoning' || request.modelId?.includes('deepseek-r1')) {
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
            const model = request.modelId?.startsWith('@cf') ? request.modelId : '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
            const response = await this.env.AI.run(model, {
                messages: [
                    { role: 'system', content: request.systemPrompt || 'You are a helpful AI.' },
                    { role: 'user', content: request.prompt }
                ]
            });
            return {
                content: response.response,
                model: model,
                provider: 'cloudflare'
            };
        }

        throw new Error(`Cloudflare Router: Unsupported request type ${request.type}`);
    }

    private async routeGemini(request: any, apiKey: string, model: string) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const contents = [{
            role: 'user',
            parts: [{ text: request.systemPrompt ? `${request.systemPrompt}\n\n${request.prompt}` : request.prompt }]
        }];

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents })
        });

        if (!response.ok) {
            const err = await response.json() as any;
            throw new Error(`Gemini Error: ${err.error?.message || response.statusText}`);
        }

        const data = await response.json() as any;
        return {
            content: data.candidates?.[0]?.content?.parts?.[0]?.text || '',
            model: model,
            provider: 'gemini'
        };
    }

    private async routeFireworks(request: any, apiKey: string, model: string) {
        // Use OpenAI-compatible endpoint for Fireworks LLMs
        // For Image/Video, we might need specific endpoints check
        if (request.type === 'video') {
            const url = `https://api.fireworks.ai/inference/v1/workflows/accounts/fireworks/models/${model || 'fireworks/gen-3'}/text_to_video`;
            // Implementation specific to video... omitted for brevity, assuming standard completion for now
            throw new Error("Fireworks Video routing requires specific implementation update.");
        }

        return this.routeOpenAIStyle(request, 'https://api.fireworks.ai/inference/v1/chat/completions', apiKey, model || 'accounts/fireworks/models/llama-v3-70b-instruct');
    }

    private async routeOpenAIStyle(request: any, endpoint: string, apiKey: string, model: string) {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model,
                messages: [
                    { role: 'system', content: request.systemPrompt || '' },
                    { role: 'user', content: request.prompt }
                ]
            })
        });

        if (!response.ok) throw new Error(`Provider Error (${endpoint}): ${response.statusText}`);
        const data = await response.json() as any;
        return {
            content: data.choices?.[0]?.message?.content || '',
            model: model,
            provider: 'external'
        };
    }
}
