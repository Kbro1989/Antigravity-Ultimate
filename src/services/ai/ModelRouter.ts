
import geminiProvider from './providers/GeminiProvider';
import cloudflareProvider from './providers/CloudflareProvider';
import { hardBlockEnforcer } from '../core/HardBlockEnforcer';
import { contextService } from './contextService';
import aiUsageService from './AIUsageService';
import { ModelKey, ModelType } from '../../types';
import { validatePrompt } from '../utils/validateInput';
import { logAIAccess, logSecurityEvent } from '../core/LoggingService';
import aimlapiService from './aimlapiService';
import { nexusBus } from '../core/NexusCommandBus';

// Stub for now - Game specific
const orchestrateRSMV = async (req: any) => ({ content: "RSMV Not Implemented", model: "stub" });
// Removed bad import
const sessionService = { isOverQuota: () => false, updateMetrics: () => { } };

import { LimbRegistry } from './LimbRegistry';
import { cliBridge } from '../cli/CLIBridge';
import { mcpConfigManager } from '../mcp/MCPConfigManager';
import mcpConfig from '../../config/mcp_config.json';

// Initialize LimbRegistry (singleton pattern for router)
export const limbRegistry = new LimbRegistry('default-user', cliBridge);

export interface ModelRequest {
    type: ModelType;
    prompt: string;
    history?: Array<{ role: 'user' | 'model'; content: string }>;
    systemPrompt?: string;
    functionDeclarations?: any[];
    negativePrompt?: string;
    language?: string;
    context?: string;
    options?: any;
    tier?: 'standard' | 'premium';
    grounding?: boolean;
    bundle?: boolean;
    subRequests?: ModelRequest[];
    domain?: '3D' | 'MEDIA' | 'AI' | 'SYSTEM';
    source?: 'RSMV' | 'NIF' | 'GLTF' | 'REMOTE';
    modelId?: string;
    provider?: string;
}

export interface ModelResponse {
    content?: string;
    code?: string;
    imageUrl?: string;
    videoUrl?: string;
    audioUrl?: string;
    modelUrl?: string;
    functionCalls?: any[];
    model: string;
    provider: 'gemini' | 'cloudflare' | 'local' | 'local-rsmv' | 'unknown';
    latency: number;
    tokensUsed?: number;
    cost?: number;
}

type ProviderExecutor = (request: ModelRequest, signal?: AbortSignal) => Promise<Omit<ModelResponse, 'provider' | 'latency' | 'cost'> | ReadableStream>;

interface PipelineStep {
    provider: 'gemini' | 'cloudflare' | 'local';
    executor: ProviderExecutor;
}

import { aiCacheService } from './AICacheService';

export async function route(request: ModelRequest): Promise<ModelResponse | ReadableStream> {
    const startTime = Date.now();

    // -1. Check Cache
    const cached = await aiCacheService.getCachedResponse(request);
    if (cached) {
        return {
            ...cached,
            cost: 0,
            latency: 0,
            provider: 'local' // Cached
        };
    }

    // 0. Detect Intent/Action
    if (request.prompt.startsWith('{') && (request.options?.isIntent || request.prompt.includes('"action"'))) {
        try {
            const intent = JSON.parse(request.prompt);
            console.log(`[ROUTER] Intent detected: ${intent.action}`);
            const result = await limbRegistry.processIntent(intent);
            return {
                content: JSON.stringify(result.data || result),
                model: 'limb-direct',
                provider: 'local',
                latency: Date.now() - startTime
            };
        } catch (e) {
            console.warn('[ROUTER] Failed to parse intent prompt as JSON:', e);
        }
    }

    // 0. Security Validation
    const validation = validatePrompt(request.prompt);
    if (!validation.isValid) {
        logSecurityEvent('BLOCKED_AI_PROMPT', { prompt: request.prompt, error: validation.error });
        throw new Error(`[SECURITY] ${validation.error}`);
    }

    // 1. Handle Bundled Requests
    if (request.bundle && request.subRequests) {
        const results = await Promise.all(request.subRequests.map(sr => route({ ...sr, options: { ...sr.options, ...request.options } })));
        return {
            content: results.map(r => (r as ModelResponse).content).filter(Boolean).join('\n---\n'),
            model: 'composite-bundle',
            provider: 'unknown',
            latency: Date.now() - startTime
        };
    }

    const abortController = new AbortController();
    const taskId = `ai-${Math.random().toString(36).slice(2, 9)}`;

    // Register Job
    nexusBus.registerJob({
        id: taskId,
        type: 'ai',
        description: `AI ${request.type}: ${request.prompt.substring(0, 30)}...`,
        abortController
    });

    const pipeline: PipelineStep[] = [];

    if (request.modelId && request.provider) {
        // Explicit Override Mode
        console.log(`[ROUTER] Using explicit override: ${request.provider}/${request.modelId}`);
        const executor = request.provider === 'gemini' ? routeToGemini : routeToCloudflare;
        pipeline.push({ provider: request.provider as any, executor });
    } else {
        // Default "Cloudflare First" Doctrine
        if (hardBlockEnforcer.canUseProvider('cloudflare')) {
            pipeline.push({ provider: 'cloudflare', executor: routeToCloudflare });
        }

        if (geminiProvider.isAvailable() && hardBlockEnforcer.canUseProvider('gemini')) {
            pipeline.push({ provider: 'gemini', executor: routeToGemini });
        }
    }

    if (pipeline.length === 0) {
        throw new Error('HARD BLOCK: All Daily Free Quotas Exhausted.');
    }

    let finalResponse: ModelResponse | ReadableStream | undefined;
    let lastError: any;

    try {
        for (const step of pipeline) {
            try {
                console.log(`[ROUTER] Attempting ${step.provider} for ${request.type}...`);
                const result = await step.executor(request, abortController.signal);

                if (result instanceof ReadableStream) {
                    return result;
                }

                const latency = Date.now() - startTime;
                const tokens = result.tokensUsed || (result.content?.length || 0) / 4;
                const cost = aiUsageService.calculateCost(step.provider, result.model, request.prompt.length / 4, tokens);

                finalResponse = {
                    ...result,
                    provider: step.provider,
                    latency,
                    cost
                };
                break; // Success!
            } catch (error) {
                console.warn(`[ROUTER] Step ${step.provider} failed:`, error);
                nexusBus.dispatchEvent('REFLEX_PAIN', { provider: step.provider, error: error });
                lastError = error;
                continue;
            }
        }

        if (!finalResponse) {
            throw lastError || new Error(`All providers failed for ${request.type}`);
        }

        if (!(finalResponse instanceof ReadableStream)) {
            const resp = finalResponse as ModelResponse;

            aiUsageService.logAIUsage({
                model: resp.model,
                provider: resp.provider,
                taskType: request.type as any,
                inputTokens: Math.ceil(request.prompt.length / 4),
                outputTokens: resp.tokensUsed || Math.ceil((resp.content?.length || 0) / 4),
                cost: resp.cost || 0,
                duration: resp.latency,
                success: true
            });

            const actualProvider = resp.model === 'triposr' ? 'paid' : resp.provider;
            hardBlockEnforcer.trackUsage(actualProvider as any, resp.cost);

            // Cache Success
            await aiCacheService.setCachedResponse(request, resp);
        }

        return finalResponse;

    } catch (error) {
        logAIAccess('error', request.prompt, false);
        throw error;
    } finally {
        nexusBus.completeJob(taskId);
    }
}

async function routeToGemini(request: ModelRequest, signal?: AbortSignal): Promise<Omit<ModelResponse, 'provider' | 'latency'>> {
    switch (request.type) {
        case 'text':
        case 'function_calling': {
            const response = await geminiProvider.textChat({
                prompt: request.prompt,
                history: request.history,
                systemPrompt: request.systemPrompt,
                functionDeclarations: request.functionDeclarations,
                model: ModelKey.COMMANDER
            });
            return { content: response.content, functionCalls: response.functionCalls, model: response.model, tokensUsed: response.tokensUsed };
        }
        case 'code': {
            const response = await geminiProvider.codeCompletion({
                prompt: request.prompt,
                language: request.language,
                context: request.context
            });
            return { code: response.code, model: response.model };
        }
        default:
            throw new Error(`Unsupported model type for Gemini Router: ${request.type}`);
    }
}

async function routeToCloudflare(request: ModelRequest, signal?: AbortSignal): Promise<Omit<ModelResponse, 'provider' | 'latency'> | ReadableStream> {
    switch (request.type) {
        case 'text':
        case 'function_calling': {
            const history = (request.history || []).map(h => ({
                role: (h.role === 'model' ? 'assistant' : 'user') as 'user' | 'assistant' | 'system',
                content: h.content
            }));
            const response = await cloudflareProvider.textChat({
                history,
                prompt: request.prompt,
                systemPrompt: request.systemPrompt,
                model: request.modelId
            });
            return {
                content: (response as any).content || response,
                model: (response as any).model || 'cloudflare',
                tokensUsed: (response as any).tokensUsed
            };
        }
        case 'image': {
            const response = await cloudflareProvider.generateImage({
                prompt: request.prompt,
                negativePrompt: request.negativePrompt
            });
            return { imageUrl: response.imageUrl, model: response.model };
        }
        case 'image-to-3d': {
            const apiMLKey = (typeof globalThis !== 'undefined' && 'localStorage' in globalThis)
                ? globalThis.localStorage.getItem('TEMP_AIMLAPI_KEY')
                : null;
            const apiKey = mcpConfigManager.getApiKey('fireworks') || apiMLKey;

            if (!apiKey) throw new Error('AI Model Key required (Fireworks or AIML)');
            const result = await aimlapiService.imageToModel(request.prompt, apiKey);
            return { modelUrl: result.url, model: 'triposr', content: `Generated ${result.fileName}` };
        }
        default:
            throw new Error(`Unsupported model type for Cloudflare: ${request.type}`);
    }
}

// Media Orchestration Helper
export async function orchestrateMedia(type: 'audio' | 'video', prompt: string, options?: any) {
    return route({
        type: type as ModelType,
        prompt,
        options,
        domain: 'MEDIA'
    });
}

export const modelRouter = { route, orchestrateMedia };
export default modelRouter;

// Class wrapper for dependency injection
export class ModelRouter {
    constructor(private env: any) { }
    async route(request: ModelRequest): Promise<ModelResponse | ReadableStream> {
        return route(request);
    }
}
