
import { GoogleGenerativeAI, FunctionDeclaration } from "@google/generative-ai";

export interface GeminiTextRequest {
    prompt: string;
    history?: Array<{ role: 'user' | 'model'; content: string }>;
    systemPrompt?: string;
    functionDeclarations?: FunctionDeclaration[];
    model?: string;
}

export interface GeminiTextResponse {
    content: string;
    functionCalls?: any[];
    model: string;
    tokensUsed?: number;
}

export interface GeminiImageRequest {
    prompt: string;
    negativePrompt?: string;
    aspectRatio?: '1:1' | '16:9' | '9:16';
}

export interface GeminiCodeRequest {
    prompt: string;
    language?: string;
    context?: string;
}

class GeminiProvider {
    private client: GoogleGenerativeAI | null = null;
    private apiKey: string | null = null;

    constructor() {
        // No side-effects in constructor to avoid ReferenceError during module load
    }

    private ensureClient() {
        if (this.client) return;

        let apiKey = this.apiKey;

        // 1. Check localStorage (Browser Only)
        if (typeof globalThis !== 'undefined' && 'localStorage' in globalThis) {
            try {
                apiKey = globalThis.localStorage.getItem('TEMP_GEMINI_KEY');
            } catch (e) {
                // Ignore LS errors in restricted environments
            }
        }

        // 2. Fallback to Environment (Standard/Vite)
        if (!apiKey) {
            apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
        }

        if (apiKey) {
            this.apiKey = apiKey;
            this.client = new GoogleGenerativeAI(apiKey);
        }
    }

    refreshApiKey() {
        this.client = null;
        this.apiKey = null;
        this.ensureClient();
    }

    isAvailable(): boolean {
        this.ensureClient();
        return this.client !== null;
    }

    async textChat(request: GeminiTextRequest): Promise<GeminiTextResponse> {
        this.ensureClient();
        if (!this.client) throw new Error('Gemini API key not configured');

        const modelId = request.model || 'gemini-1.5-flash';
        const model = this.client.getGenerativeModel({ model: modelId, systemInstruction: request.systemPrompt });

        if (request.functionDeclarations) {
            model.tools = [{ functionDeclarations: request.functionDeclarations }];
        }

        const history = request.history?.map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
        })) || [];

        const chat = model.startChat({ history });
        const result = await chat.sendMessage(request.prompt);
        const response = result.response;
        const text = response.text();

        return {
            content: text,
            model: modelId,
            tokensUsed: response.usageMetadata?.totalTokenCount
        };
    }

    async generateImage(request: GeminiImageRequest): Promise<{ imageUrl: string; model: string }> {
        // Placeholder for Imagen (requires trusted tester or separate API usually)
        console.warn("Gemini Image Gen not fully implemented in standard SDK");
        return { imageUrl: "", model: "imagen-placeholder" };
    }

    async codeCompletion(request: GeminiCodeRequest): Promise<{ code: string; model: string }> {
        this.ensureClient();
        if (!this.client) throw new Error('Gemini API key not configured');

        const model = this.client.getGenerativeModel({ model: 'gemini-1.5-pro' });
        const prompt = `Context: ${request.context || ''}\nLanguage: ${request.language || 'auto'}\n\nTask: ${request.prompt}`;

        const result = await model.generateContent(prompt);
        const text = result.response.text();

        // Extract code block if present
        const codeMatch = text.match(/```(?:\w+)?\n([\s\S]*?)```/);
        const code = codeMatch ? codeMatch[1] : text;

        return { code, model: 'gemini-1.5-pro' };
    }
}

export const geminiProvider = new GeminiProvider();
export default geminiProvider;
