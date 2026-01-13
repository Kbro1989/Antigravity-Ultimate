import { nexusBus } from '../../core/NexusCommandBus';
import { logTask } from '../../core/LoggingService';
import { AgentCapability, assertCapability, AgentLaw, RSC_SOVEREIGN_DIRECTIVE } from '../AgentConstitution';
import { chronoshell, Chronoshell } from '../../core/Chronoshell';
import { BaseIntent } from '../AITypes';
import { Env } from '../../../types/env';
import { modelRouter } from '../ModelRouter';

// Cache entry interface for LimbCache
interface CacheEntry {
    result: any;
    expiry: number;
    hits: number;
}

export interface LimbConfig {
    id: string;
    userId: string;
    capabilities: string[];
    onAssetGenerated?: (asset: { type: string; url: string; metadata: any }) => void;
    env?: Env;
    state?: any;
    limbs?: any;
}

export abstract class NeuralLimb {
    public id: string;
    protected userId: string;
    protected capabilities: string[];
    protected chronos: Chronoshell;
    protected env: Env;
    protected state: any;
    protected limbs: any;
    protected config: LimbConfig;

    // LimbCache: Smart caching layer for AI responses
    private cache = new Map<string, CacheEntry>();
    private static CACHE_DEFAULT_TTL = 60000; // 60 seconds
    private static CACHE_MAX_SIZE = 100;


    constructor(config: LimbConfig) {
        this.config = config;
        this.id = config.id;
        this.userId = config.userId;
        this.capabilities = config.capabilities;
        this.chronos = chronoshell;
        this.env = config.env as Env;
        this.state = config.state;
        this.limbs = config.limbs;
    }

    /**
     * Updates the environment bindings for the limb.
     */
    public setEnv(env: Env) {
        this.env = env;
    }

    /**
     * Main entry point for the Limb to process an Intent.
     * Automatically dispatches to public methods based on action name.
     */
    async process(intent: BaseIntent & { modelId?: string; provider?: string }): Promise<any> {
        const { action, payload } = intent;

        // 1. Precise Match
        let targetMethod = (this as any)[action];

        // 2. Prefix-aware Suffix Match (e.g., 'image_generate' -> 'generate')
        if (!targetMethod && action.includes('_')) {
            const methodSuffix = action.split('_').slice(1).join('_');
            targetMethod = (this as any)[methodSuffix];
        }

        // 3. Case-Insensitive Fuzzy Match (Hermit Crab Upgrade)
        if (!targetMethod) {
            const normalizedAction = action.toLowerCase().replace(/_/g, '');
            const allMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));

            const fuzzyMatch = allMethods.find(m => {
                const normalizedM = m.toLowerCase().replace(/_/g, '');
                return normalizedM === normalizedAction ||
                    (action.includes('_') && normalizedM === action.split('_').slice(1).join('_').toLowerCase().replace(/_/g, ''));
            });

            if (fuzzyMatch) {
                targetMethod = (this as any)[fuzzyMatch];
                console.log(`[NeuralLimb] Fuzzy resolution: ${action} -> ${fuzzyMatch}`);
            }
        }

        if (typeof targetMethod === 'function') {
            try {
                return await targetMethod.call(this, payload, intent);
            } catch (err: any) {
                console.error(`[NeuralLimb] Execution Error in ${this.id}.${action}:`, err);
                throw err;
            }
        }

        // Fallback or explicit implementation requirement
        return await this.handleUnknownAction(intent);
    }

    protected async handleUnknownAction(intent: BaseIntent): Promise<any> {
        throw new Error(`Limb ${this.id} does not implement support for action: ${intent.action}`);
    }

    /**
     * Default optimization handler.
     * Specific limbs should override this to provide domain-specific logic.
     */
    async optimize(params: any, intent: BaseIntent): Promise<any> {
        this.enforceCapability(AgentCapability.OPTIMIZE_SYSTEM);
        const { target, goal } = params;

        await this.logActivity('system_optimize', 'pending', { target, goal });

        // Basic delegation to AI for a general optimization plan if not overridden
        const prompt = `System Optimization Request for Limb ${this.id}:
        Target: ${target}
        Goal: ${goal}
        
        Using the Museum Truth knowledge base and Cloudflare Worker strengths, provide a detailed optimization plan or execution result.`;

        const response: any = await modelRouter.route({
            action: 'code_complete', // Using code_complete as a proxy for technical planning
            payload: { prompt },
            ...intent
        }, this.env);

        await this.logActivity('system_optimize', 'success', { target, goal });

        return {
            status: 'success',
            plan: response.content || response.imageUrl || response.url,
            metadata: {
                model: response.model,
                provider: response.provider
            }
        };
    }

    // ==================== CACHING LAYER ====================

    /**
     * Cached AI routing - returns cached result if available and valid.
     * Significantly reduces latency for repeated prompts.
     */
    protected async cachedRoute(request: any, ttlMs = NeuralLimb.CACHE_DEFAULT_TTL): Promise<any> {
        const key = this.hashRequest(request);
        const cached = this.cache.get(key);

        if (cached && Date.now() < cached.expiry) {
            cached.hits++;
            console.log(`[NeuralLimb] Cache HIT for ${this.id}: ${key.substring(0, 20)}... (${cached.hits} hits)`);
            return cached.result;
        }

        const result = await modelRouter.route(request, this.env);

        // Evict oldest if at capacity
        if (this.cache.size >= NeuralLimb.CACHE_MAX_SIZE) {
            const oldestKey = this.cache.keys().next().value;
            if (oldestKey) this.cache.delete(oldestKey);
        }

        this.cache.set(key, { result, expiry: Date.now() + ttlMs, hits: 1 });
        return result;
    }

    /**
     * Batch AI routing - processes multiple requests in parallel.
     * Returns array of results in same order as requests.
     */
    protected async batchRoute(requests: any[]): Promise<any[]> {
        console.log(`[NeuralLimb] Batch routing ${requests.length} requests for ${this.id}`);
        return Promise.all(requests.map(req => modelRouter.route(req, this.env)));
    }

    /**
     * Direct relic content access - bypasses AI for authentic data extraction.
     * Uses RelicLimb if available in registry.
     */
    protected async getRelicContent(relicId: string, type: string = 'raw'): Promise<any> {
        if (this.limbs && typeof this.limbs.call === 'function') {
            try {
                const result = await this.limbs.call('relic', 'fetch_relic_content', {
                    id: relicId,
                    type
                });
                return result?.data || null;
            } catch (e) {
                console.warn(`[NeuralLimb] Relic fetch failed for ${relicId}:`, e);
            }
        }
        return null;
    }

    /**
     * Generates a hash key for caching based on request properties.
     */
    private hashRequest(request: any): string {
        const normalized = JSON.stringify({
            type: request.type,
            prompt: request.prompt?.substring(0, 200), // Truncate long prompts
            modelId: request.modelId,
            options: request.options
        });
        // Simple hash function
        let hash = 0;
        for (let i = 0; i < normalized.length; i++) {
            const char = normalized.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return `${this.id}_${hash.toString(36)}`;
    }

    /**
     * Clears the limb's cache. Can be called after major state changes.
     */
    protected clearCache(): void {
        this.cache.clear();
        console.log(`[NeuralLimb] Cache cleared for ${this.id}`);
    }

    protected async logActivity(step: string, status: 'success' | 'failure' | 'pending', metadata?: any) {
        // Legacy system log
        await logTask({
            taskId: this.id,
            step,
            status,
            timestamp: Date.now(),
            metadata
        });

        // ULTIMATE temporal trace
        this.chronos.logTrace({
            layer: 'ai',
            action: `${this.id}_${step}`,
            metadata: { ...metadata, status }
        });
    }

    /**
     * Persists an asset to Cloudflare R2 if available, otherwise falls back to Local Bridge.
     * Automatically hoists data: URIs and remote URLs to the ASSETS_BUCKET or local disk.
     */
    protected async persistAsset(type: string, url: string, metadata: any, contentBody?: string | Uint8Array | ArrayBuffer): Promise<string> {
        await this.logActivity(`asset_persistence_start`, 'pending', { type, url });
        let finalUrl = url;
        let body: any = contentBody;
        let contentType = 'application/octet-stream';

        // 1. Resolve Content (if not provided explicitly)
        if (!body) {
            if (url.startsWith('data:')) {
                const parts = url.split(',');
                const decoded = atob(parts[1]);
                const array = new Uint8Array(decoded.length);
                for (let i = 0; i < decoded.length; i++) array[i] = decoded.charCodeAt(i);
                body = array;
                contentType = url.split(':')[1].split(';')[0];
            } else if (url.startsWith('http')) {
                try {
                    const response = await fetch(url);
                    body = await response.arrayBuffer();
                    contentType = response.headers.get('Content-Type') || 'application/octet-stream';
                } catch (e) {
                    console.warn(`[NeuralLimb] Failed to fetch remote asset for persistence: ${url}`);
                }
            }
        }

        // 2. Generate Key / Path
        const timestamp = Date.now();
        const randomId = Math.random().toString(36).substring(2, 7);
        const fileExt = this.getExtensionForType(type);
        const key = `innovations/${type}/${timestamp}_${randomId}.${fileExt}`;

        // 3. Persist
        try {
            if (body) {
                // --- CLOUD PRIMACY: IMAGES & R2 STORAGE ---
                if (type === 'image' || type === 'texture') {
                    const imagesService = new (require('../CloudflareImagesService').CloudflareImagesService)(this.env);
                    const imageResult = await imagesService.uploadFromUrl(url, metadata);
                    finalUrl = imagesService.getTransformUrl(imageResult.id);
                    console.log(`[NeuralLimb] Persisted to Cloud Images: ${imageResult.id}`);
                } else if (this.env?.ASSETS_BUCKET) {
                    await this.env.ASSETS_BUCKET.put(key, body, {
                        httpMetadata: { contentType }
                    });
                    finalUrl = `/ai/assets/${key}`;
                    console.log(`[NeuralLimb] Persisted to Cloud R2: ${key}`);
                } else {
                    console.error(`[NeuralLimb] Cloud Storage unavailable. Local persistence blocked.`);
                    throw new Error("Persistence failed: No cloud storage available.");
                }
            } else if (url.startsWith('staged://')) {
                // If no body was resolved and it was 'staged', we assume the caller FAILED to provide content.
                // This is the "Mock" catch.
                console.warn("[NeuralLimb] 'staged://' URL provided without content body. Persistence skipped (Potential Mock Logic).");
            }
        } catch (e) {
            console.error(`[NeuralLimb] Persistence Failed for ${type}:`, e);
            await this.logActivity(`asset_persistence_error`, 'failure', { error: String(e) });
        }

        if ((this as any).config?.onAssetGenerated) {
            (this as any).config.onAssetGenerated({ type, url: finalUrl, metadata });
        }

        await this.logActivity(`asset_persistence_complete`, 'success', { type, originalUrl: url, finalUrl });
        return finalUrl;
    }

    private getExtensionForType(type: string): string {
        const map: Record<string, string> = {
            'image': 'png',
            'audio': 'mp3',
            'video': 'mp4',
            'mesh': 'glb',
            'material': 'json',
            'code': 'ts'
        };
        return map[type] || 'bin';
    }

    public hasCapability(cap: string): boolean {
        return this.capabilities.includes(cap);
    }

    /**
     * Enforces the agent constitution for a specific capability
     */
    protected enforceCapability(capability: AgentCapability, law?: AgentLaw) {
        assertCapability(this.constructor.name, capability, law);
    }

    /**
     * Returns the base constitutional prompt derived from current directives.
     */
    protected getConstitutionalPrompt(): string {
        return RSC_SOVEREIGN_DIRECTIVE;
    }

    /**
     * Standardized Health Probe for the Service Mesh.
     * Returns the current operational status and workload of the limb.
     */
    public async status() {
        // --- EDGE COMPATIBILITY: Protective process check ---
        const proc = (typeof process !== 'undefined') ? process : null;
        const memoryUsage = (proc && proc.memoryUsage) ? proc.memoryUsage().heapUsed : 0;
        const uptime = (proc && proc.uptime) ? Math.floor(proc.uptime()) : 0;

        return {
            id: this.id,
            status: 'online',
            capabilities: this.capabilities,
            uptime: uptime,
            workload: 0, // Should be overridden by specific limbs if tracking active jobs
            memoryUsage,
            version: '1.2.0' // Mesh Protocol Version
        };
    }

    /**
     * Mesh Signaling Proxy: Allows any limb to broadcast signals to the game world.
     * Automatically routes via 'live_game' limb if available in the registry.
     */
    protected async send(paramsOrType: any, data?: any) {
        let packet = typeof paramsOrType === 'string' ? { type: paramsOrType, data } : paramsOrType;

        // Route via LiveGameLimb if available in the limb registry
        if (this.limbs && typeof this.limbs.getLimb === 'function') {
            const liveGame = this.limbs.getLimb('live_game');
            if (liveGame && typeof liveGame.send === 'function') {
                return await liveGame.send(packet);
            }
        }

        // Fallback: If this IS the LiveGameLimb (handled by override) or no mesh available
        console.warn(`[NeuralLimb] Mesh 'send' failed for ${this.id}: 'live_game' limb not reachable.`);
        return { status: 'error', reason: 'mesh_unreachable' };
    }
}
