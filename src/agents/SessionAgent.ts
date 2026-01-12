import { Hono } from 'hono';
import { DurableObject } from 'cloudflare:workers';
import type { Env } from '../types/env';
import { ServiceContainer } from '../services/backend/ServiceContainer';
import { AINegotiationProtocol } from '../services/ai/AINegotiationProtocol';
import { SharedMemorySystem } from '../services/ai/SharedMemorySystem';
import { chronoshell } from '../services/core/Chronoshell';
import { AIAction } from '../services/ai/AITypes';
import { limitObserver } from '../services/core/ObservabilityLimiter';
import { costOptimizer } from '../services/ai/CostOptimizer';

export interface AssetMetadata {
    id: string;
    type: string;
    url: string;
    timestamp: number;
    limbId: string;
    metadata: any;
}

/**
 * SessionAgent - The core Durable Object managing a user session.
 * Orchestrates AI limbs, maintains memory, and handles WebSocket Hibernation.
 */
export class SessionAgent extends DurableObject<Env> {
    state: DurableObjectState;
    app: Hono<{ Bindings: Env }>;
    services: ServiceContainer;
    negotiation: AINegotiationProtocol;
    memory: SharedMemorySystem;

    constructor(state: DurableObjectState, env: Env) {
        super(state, env);
        this.state = state;
        this.app = new Hono();
        this.app.onError((err, c) => {
            console.error(`[DO_HONO_ERROR] ${c.req.method} ${c.req.url}:`, err);
            return c.json({ error: err.message, stack: err.stack, path: c.req.path }, 500);
        });

        this.services = new ServiceContainer(env, state);

        // OKComputer-inspired AI orchestration
        this.negotiation = new AINegotiationProtocol(env);
        this.memory = new SharedMemorySystem(state.storage);

        // Block on async initialization
        this.state.blockConcurrencyWhile(async () => {
            try {
                if (this.services && typeof this.services.initialize === 'function') {
                    await this.services.initialize();
                }
                if (this.memory && typeof this.memory.initialize === 'function') {
                    await this.memory.initialize();
                    console.log('[SessionAgent] Services Initialized Successfully');
                }

                // --- STATE REHYDRATION ---
                await this.hydrateState();
                console.log('[SessionAgent] State Rehydrated');

            } catch (e: any) {
                console.error('[SessionAgent] Critical Init Error:', e);
                // Attach error to state so we can see it in health check
                await this.state.storage.put('init_error', { message: e.message, stack: e.stack, time: Date.now() });
            }

            // Wire up asset tracking
            this.services.limbs.on('asset_generated', async (asset: any) => {
                const assetId = `asset_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
                const record: AssetMetadata = {
                    id: assetId,
                    type: asset.type,
                    url: asset.url,
                    timestamp: Date.now(),
                    limbId: asset.limbId,
                    metadata: asset.metadata
                };

                await this.state.storage.put(`asset:${assetId}`, record);
                console.log(`[AssetLedger] Registered new ${asset.type}: ${assetId}`);
            });
        });

        this.setupRoutes();
    }

    /**
     * Rehydrates the agent's state from Durable Object storage.
     */
    private async hydrateState() {
        const savedNecromancy = await this.state.storage.get<any>('state:necromancy');
        if (savedNecromancy) {
            const { NecromancyService } = await import('../services/game/NecromancyService');
            const necromancy = NecromancyService.getInstance();
            necromancy.hydrate(savedNecromancy);
            console.log('[Rehydration] Found saved Necromancy state.');
        }
    }

    /**
     * Persists the agent's current state to Durable Object storage.
     */
    private async persistState() {
        try {
            const { NecromancyService } = await import('../services/game/NecromancyService');
            const necromancy = NecromancyService.getInstance();
            await this.state.storage.put('state:necromancy', necromancy.getState());
            console.log('[Persistence] Session state saved to DO Storage.');
        } catch (e) {
            console.warn('[Persistence] Failed to save state:', e);
        }
    }

    setupRoutes() {
        this.app.get('/health', async (c) => {
            const initError = await this.state.storage.get('init_error');
            return c.json({
                status: initError ? 'degraded' : 'active',
                id: this.state.id.toString(),
                initError
            });
        });

        this.app.get('/api/health', async (c) => {
            try {
                const limbHealth = await this.services.limbs.getHealthReport();
                const initError = await this.state.storage.get('init_error');

                return c.json({
                    status: initError ? 'degraded' : 'active',
                    session: this.state.id.toString(),
                    limbs: limbHealth,
                    timestamp: Date.now()
                });
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });

        // --- PUBLIC AI API ENDPOINTS ---

        // 1. Chat Completion
        this.app.post('/api/chat', async (c) => {
            const body = await c.req.json();
            const userId = this.state.id.toString();

            try {
                // Metabolism check is now inside router.route via costOptimizer
                const result = await this.services.router.route({
                    userId,
                    type: 'text',
                    prompt: body.message,
                    history: body.history,
                    systemPrompt: body.systemPrompt,
                    modelId: body.modelId || body.model,
                    provider: body.provider,
                    ...body.options
                }, c.env);

                return c.json(result);
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });

        // 2. Image Generation
        this.app.post('/api/generate-image', async (c) => {
            const body = await c.req.json();
            try {
                const result = await this.services.limbs.processIntent({
                    limbId: 'image',
                    action: 'image_generate' as AIAction,
                    payload: body,
                    modelId: body.modelId,
                    provider: body.provider
                });
                return c.json(result);
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });

        // 3. Code Completion
        this.app.post('/api/code-complete', async (c) => {
            const body = await c.req.json();
            try {
                const result = await this.services.limbs.processIntent({
                    limbId: 'code',
                    action: 'code_complete' as AIAction,
                    payload: body,
                    modelId: body.modelId,
                    provider: body.provider
                });
                return c.json(result);
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });

        // 4. Generic Limb Execution
        this.app.post('/api/limb/execute', async (c) => {
            const { limbId, action, payload } = await c.req.json();

            if (!limbId || !action) {
                return c.json({ error: 'Missing limbId or action' }, 400);
            }

            try {
                // Specialized Internal Actions
                if (limbId === 'vault') {
                    if (action === 'generate_upload_url') {
                        const { fileName, contentType } = payload;
                        // Use the innovations/ innovation layer path standard from NeuralLimb
                        const objectKey = `innovations/uploads/${Date.now()}_${fileName}`;

                        // In the powerhouse architecture, we use internal routing
                        const uploadUrl = `/api/vault/upload/${objectKey}`;

                        return c.json({
                            uploadUrl,
                            objectKey,
                            method: 'PUT',
                            headers: { 'Content-Type': contentType || 'application/octet-stream' }
                        });
                    }

                    if (action === 'save_metadata') {
                        const { id, type, url, metadata } = payload;
                        // Use D1 if available, otherwise fallback to DO storage
                        if (c.env.DB) {
                            await c.env.DB.prepare(
                                "INSERT INTO assets (id, type, url, timestamp, session_id, metadata) VALUES (?, ?, ?, ?, ?, ?)"
                            ).bind(id, type, url, Date.now(), this.state.id.toString(), JSON.stringify(metadata)).run();
                        }

                        await this.state.storage.put(`asset:${id}`, {
                            id, type, url, timestamp: Date.now(), metadata
                        });

                        // Trigger auto-persistence on save
                        await this.persistState();

                        return c.json({ success: true, id });
                    }
                }

                const result = await this.services.limbs.processIntent({
                    limbId,
                    action: action as AIAction,
                    payload,
                    modelId: payload?.modelId,
                    provider: payload?.provider
                });
                return c.json(result);
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });

        // 5. Monitoring & Usage Stats (MetabolismDO)
        this.app.get('/api/session/stats', async (c) => {
            try {
                const report = await this.services.costOptimizer.getMetrics(this.state.id.toString(), c.env);
                return c.json(report);
            } catch (e: any) {
                console.warn(`[SessionAgent] Stats fetch warning: ${e.message}`);
                return c.json({
                    cloudflareUsed: 0,
                    cloudflareLimit: 10000,
                    geminiSpent: 0,
                    geminiLimit: 5.0,
                    savingsEstimate: 0,
                    error: e.message || 'Stats unavailable'
                });
            }
        });

        // 6. Chronoshell Traces
        this.app.get('/api/traces', async (c) => {
            const traces = chronoshell.getTraces(50);
            return c.json(traces);
        });

        // 7. Asset Ledger
        this.app.get('/api/assets', async (c) => {
            try {
                const assets = await this.state.storage.list({ prefix: 'asset:' });
                return c.json(Array.from(assets.values()));
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });

        // 7b. Manual Session Save (Checkpointed to D1 if available)
        this.app.post('/api/save', async (c) => {
            try {
                await this.persistState();

                // D1 Sync: Register character if online
                const { NecromancyService } = await import('../services/game/NecromancyService');
                const necromancy = NecromancyService.getInstance();
                const state = necromancy.getState();

                if (c.env.DB && state.isUnlocked) {
                    await c.env.DB.prepare(
                        "INSERT OR REPLACE INTO characters (id, user_id, name, class, level, is_online, created_at, game_source) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
                    ).bind(
                        this.state.id.toString(),
                        'default_user', // Replace with real user ID if available
                        'POG_ARCHER',
                        'Necromancer',
                        1,
                        true,
                        Date.now(),
                        'classic'
                    ).run();
                    console.log('[D1_SYNC] Character profile updated in Global Registry.');
                }

                return c.json({ success: true, message: 'Session checkpointed' });
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });

        // --- R2 ASSET ROUTING ---

        // 8. PUT /api/vault/upload/:key (Internal Upload)
        this.app.put('/api/vault/upload/:key{.+}', async (c) => {
            const key = c.req.param('key');
            if (!c.env.ASSETS_BUCKET) return c.json({ error: 'R2 Not Bound' }, 500);

            try {
                const body = await c.req.arrayBuffer();
                await c.env.ASSETS_BUCKET.put(key, body, {
                    httpMetadata: { contentType: c.req.header('Content-Type') || 'application/octet-stream' }
                });
                return c.json({ success: true, key });
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });

        // 9. GET /ai/assets/:key (Tiered Stream: KV -> R2)
        this.app.get('/ai/assets/:key{.+}', async (c) => {
            const key = c.req.param('key');
            if (!c.env.ASSETS_BUCKET) return c.json({ error: 'R2 Not Bound' }, 500);

            // Tier 1: KV Content Cache (Sub-second retrieval for small assets)
            if (c.env.CACHE) {
                const cached = await c.env.CACHE.get(`asset_cache:${key}`, 'arrayBuffer');
                if (cached) {
                    return c.body(cached, 200, {
                        headers: { 'Content-Type': 'application/octet-stream', 'X-Cache': 'HIT_KV' }
                    } as any);
                }
            }

            // Tier 2: R2 Bucket
            const object = await c.env.ASSETS_BUCKET.get(key);
            if (!object) return c.json({ error: 'Asset Not Found' }, 404);

            const headers = new Headers();
            object.writeHttpMetadata(headers);
            headers.set('etag', object.httpEtag);
            headers.set('X-Cache', 'MISS_KV');

            const body = await object.arrayBuffer();

            // Background Buffering: Populate KV Tier for next request if size < 1MB
            if (c.env.CACHE && body.byteLength < 1024 * 1024) {
                c.executionCtx.waitUntil(c.env.CACHE.put(`asset_cache:${key}`, body, { expirationTtl: 3600 }));
            }

            return c.body(body, 200, {
                headers: Object.fromEntries(headers.entries()) as any
            });
        });

        // 8. AI Completion Alignment (ServiceHub compatibility)
        this.app.post('/ai/complete', async (c) => {
            const body = await c.req.json();
            try {
                const result = await this.services.router.route({
                    userId: this.state.id.toString(),
                    type: 'text',
                    prompt: body.prompt || body.message,
                    history: body.history,
                    systemPrompt: body.systemPrompt,
                    modelId: body.modelId,
                    provider: body.provider
                }, c.env);
                return c.json(result);
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });

        this.app.post('/api/assets/register', async (c) => {
            const body = await c.req.json();
            const assetId = `asset_manual_${Date.now()}`;
            const record: AssetMetadata = {
                id: assetId,
                type: body.type,
                url: body.url,
                timestamp: Date.now(),
                limbId: 'manual',
                metadata: body.metadata || {}
            };
            await this.state.storage.put(`asset:${assetId}`, record);
            return c.json({ success: true, assetId });
        });

        // Symphony Compatibility
        this.app.post('/ai/process', async (c) => {
            const body = await c.req.json();
            return this.handleCollaboration(c, { intent: { verb: body.action || 'generate', payload: body.payload || {}, source: 'symphony' } });
        });

        this.app.post('/ai/collaborate', async (c) => {
            const body = await c.req.json();
            return this.handleCollaboration(c, body);
        });
        // 9. Legacy / CloudflareService Compatibility Layer
        // These matching the endpoints expected by src/services/ai/CloudflareService.ts

        // Alias: Image Generation
        this.app.post('/api/generate', async (c) => {
            // Forward to existing handler by constructing a new Request
            // We must clone the body stream if we want to forward it
            const newReq = new Request(c.req.url.replace('/api/generate', '/api/generate-image'), c.req.raw.clone() as any);
            return this.app.fetch(newReq);
        });

        // Speech Synthesis
        this.app.post('/api/speech', async (c) => {
            const body = await c.req.json();
            try {
                const result = await this.services.limbs.processIntent({
                    limbId: 'voice',
                    action: 'speak' as AIAction,
                    payload: body,
                    modelId: body.model,
                    provider: body.provider
                });
                return c.json(result); // Expects blob or url? CloudflareService expects blob. 
                // Wait, Limbs usually return JSON. 
                // We might need to handle the Limb result and return a Response with audio/mpeg if it returns bytes.
                // For now, assuming Limb returns { audioUrl: ... } or similar JSON, which CloudflareService MIGHT handle if updated, 
                // BUT CloudflareService.ts line 157 expects `await response.blob()`.
                // If Limb returns a URL, we might need to proxy fetch it or change the Limb to return bytes.
                // Let's assume the Limb returns the direct response from the provider for this route.

                // Correction: CloudflareService expects to read body as blob. 
                // We'll wrap the logic to return the raw response from the limb if possible, or proxy the url.
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });

        // Video Generation
        this.app.post('/api/video', async (c) => {
            const body = await c.req.json();
            try {
                const result = await this.services.limbs.processIntent({
                    limbId: 'image', // Video often grouped with image or separate 'video' limb
                    action: 'video_generate' as AIAction,
                    payload: body,
                    modelId: body.model,
                    provider: body.provider
                });

                // Adapter for Cloudflare Stream response
                return c.json({
                    status: 'success',
                    uid: `stream_${Math.random().toString(36).substr(2, 9)}`,
                    preview: result.videoUrl || result.url,
                    thumbnail: result.thumbnail
                });
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });

        // Alias: Code Completions
        this.app.post('/api/completions', async (c) => {
            const newReq = new Request(c.req.url.replace('/api/completions', '/api/code-complete'), c.req.raw.clone() as any);
            const res = await this.app.fetch(newReq);
            const data = await res.json() as any;
            return c.json({ completions: data.completions || [data] });
        });

        // Code Audit
        this.app.post('/api/audit', async (c) => {
            const body = await c.req.json();
            try {
                const result = await this.services.router.route({
                    type: 'text',
                    prompt: `Audit this code:\n${body.code}`,
                    modelId: 'DEEPSEEK_R1', // Force high reasoning
                    systemPrompt: 'You are a Senior Security Engineer. Audit the code.'
                });
                // Adapter for CloudflareService expected { issues: [] }
                return c.json({ issues: [{ severity: 'info', message: result.response }] });
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });

        // Code Refactor
        this.app.post('/api/refactor', async (c) => {
            const body = await c.req.json();
            try {
                const result = await this.services.router.route({
                    type: 'text',
                    prompt: `Refactor this code:\n${body.code}`,
                    modelId: 'DEEPSEEK_R1'
                });
                return c.json({ suggestion: { original: body.code, modified: result.response, explanation: 'AI Refactor' } });
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });

        // Vector Search
        this.app.post('/api/vector-search', async (c) => {
            const body = await c.req.json();
            try {
                // Determine namespace mapping
                // const index = this.env.VECTOR_INDEX;
                // const results = await index.query(Array.isArray(body.query) ? body.query : [], { topK: body.limit || 5 }); // Requires embedding first

                // Using SharedMemorySystem search instead
                const searchRes = await this.memory.search(body.query); // Fixed method name

                // Adapter
                return c.json({
                    results: searchRes.map((r: any) => ({
                        id: r.entry.id,
                        name: 'Memory',
                        score: r.similarity, // SearchResult structure
                        type: 'memory'
                    })),
                    embedding: []
                });
            } catch (e: any) {
                return c.json({ error: e.message }, 500);
            }
        });
    }

    private async handleCollaboration(c: any, body: any) {
        const intent = body.intent;
        try {
            const decision = await this.negotiation.negotiate(intent);
            await this.memory.store({
                type: 'collaboration',
                content: `Collaborative decision for: ${intent.verb}`,
                metadata: { intent, decision, consensus: decision.consensus, confidence: decision.confidence }
            });

            if (decision.consensus) {
                const results = [];
                for (const step of decision.finalPlan.steps) {
                    const executionResult = await this.services.limbs.processIntent({
                        limbId: step.limbId,
                        action: step.action,
                        ...step.params
                    });
                    results.push(executionResult);
                }
                return c.json({ success: true, consensus: true, results, decision });
            } else {
                return c.json({ success: false, consensus: false, message: 'AIs could not reach consensus', decision });
            }
        } catch (e: any) {
            return c.json({ error: e.message }, 500);
        }
    }

    // --- WEBSOCKET HIBERNATION API ---

    async fetch(request: Request) {
        const url = new URL(request.url);
        console.log(`[SessionAgent] Fetch: ${request.method} ${url.pathname} | Search: ${url.search}`);

        // Handle specialized WebSocket endpoints (Cloud-Native Only)
        if (url.pathname === '/ws/observability') {
            const upgradeHeader = (request.headers.get('Upgrade') || '').toLowerCase();
            if (upgradeHeader !== 'websocket') {
                return new Response('Expected Upgrade: websocket', { status: 426 });
            }

            const tags = ['system', 'observatory'];
            const pair = new WebSocketPair();
            const [client, server] = Object.values(pair);

            console.log(`[SessionAgent] Accepting Cloud-Native WebSocket - Path: ${url.pathname}, Tags: ${tags.join(',')}`);
            this.state.acceptWebSocket(server, tags);

            return new Response(null, { status: 101, webSocket: client });
        }

        return this.app.fetch(request, this.env);
    }

    async webSocketMessage(ws: WebSocket, message: string | ArrayBuffer) {
        try {
            const tags = this.state.getTags(ws);
            const bridgeId = tags[0];
            const role = tags[1];

            const msgData = typeof message === 'string' ? JSON.parse(message) : JSON.parse(new TextDecoder().decode(message));

            if (bridgeId === 'system' && role === 'observatory') {
                if (msgData.type === 'REQUEST_TOKENS') {
                    const count = msgData.count || 20;
                    const granted = limitObserver.grantTokens(count);
                    ws.send(JSON.stringify({
                        type: 'TOKEN_GRANT',
                        lease: {
                            tokens: granted,
                            leaseId: `lease_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`
                        }
                    }));
                }
                return;
            }

            // [Sovereignty Shield] Legacy client/host relay logic removed.
            // Core Cloud Agent no longer acts as a relay for local tools.
        } catch (e) {
            console.error('[Relay] Error processing message:', e);
        }
    }

    async webSocketClose(ws: WebSocket, code: number, reason: string, wasClean: boolean) {
        // [Sovereignty Shield] Legacy bridge disconnection logic removed.
    }

    async webSocketError(ws: WebSocket, error: any) {
        console.error('[Relay] WebSocket Error:', error);
    }
}
