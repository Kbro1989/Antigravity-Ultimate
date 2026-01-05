
export enum ModelKey {
    CLOUDFLARE_CHAT = '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
    CLOUDFLARE_CODE = '@cf/qwen/qwen2.5-coder-32b-instruct',
    GEMINI_FLASH = 'gemini-1.5-flash',
    GEMINI_PRO = 'gemini-1.5-pro',
    COMMANDER = 'gemini-1.5-flash', // Default commander model
    GEMINI_1_5_FLASH_8B = 'gemini-1.5-flash-8b-latest',
    CLOUDFLARE_LLAMA_3 = '@cf/meta/llama-3-8b-instruct'
}

export type ModelType = 'text' | 'function_calling' | 'image' | 'code' | 'audio' | 'video' | 'reasoning' | 'vision' | '3d' | 'image-to-3d' | 'animation';

export interface AIUsageMetrics {
    id: string;
    timestamp: number;
    model: string;
    provider: 'gemini' | 'cloudflare' | 'local';
    tokensIn: number;
    tokensOut: number;
    cost: number;
    latency: number;
    userId: string;
    contextType: string;
}

export interface AIIntent {
    source: 'omnibar' | 'chat' | 'direct_button';
    verb: 'explain' | 'refactor' | 'generate' | 'symphony';
    context: {
        aiMode: string;
        projectEnv: string;
        panicState: boolean;
    };
    payload: {
        selection: string;
        activeFile: string;
        text: string;
    };
}
