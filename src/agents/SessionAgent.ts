import { Hono } from 'hono';
import { DurableObject } from 'cloudflare:workers';
import type { Env } from '../types/env';
import { ServiceContainer } from '../services/backend/ServiceContainer';
import { AINegotiationProtocol } from '../services/ai/AINegotiationProtocol';
import { SharedMemorySystem } from '../services/ai/SharedMemorySystem';
import { chronoshell } from '../services/core/Chronoshell';
import { AIAction } from '../services/ai/AITypes';

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
        this.services = new ServiceContainer(env, state.storage);

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
                }
            } catch (e) {
                console.error('[SessionAgent] Critical Init Error:', e);
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

    setupRoutes() {
        this.app.get('/health', (c) => c.json({ status: 'active', id: this.state.id.toString() }));

        // --- PUBLIC AI API ENDPOINTS ---

        // 1. Chat Completion
        this.app.post('/api/chat', async (c) => {
            const body = await c.req.json();
            const provider = body.model?.split('/')[0] === '@cf' ? 'cloudflare' : 'external';

            if (!await this.services.enforcer.checkQuota(provider, this.state.id.toString())) {
                return c.json({ error: 'Daily quota exceeded' }, 429);
            }

            try {
                const result = await this.services.router.route({
                    type: 'text',
                    prompt: body.message,
                    history: body.history,
                    systemPrompt: body.systemPrompt,
                    modelId: body.modelId || body.model,
                    provider: body.provider,
                    ...body.options
                });

                await this.services.enforcer.trackUsage(provider, 1, 0);
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

        // 5. Monitoring & Usage Stats
        this.app.get('/api/session/stats', async (c) => {
            try {
                const report = await this.services.enforcer.getUsageReport(this.state.id.toString());
                return c.json(report);
            } catch (e) {
                return c.json({
                    tokensUsed: 0,
                    tokensLimit: 100000,
                    cost: 0,
                    requests: 0,
                    latency: 5,
                    error: 'Enforcer stats not available'
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

        // 8. AI Completion Alignment (ServiceHub compatibility)
        this.app.post('/ai/complete', async (c) => {
            const body = await c.req.json();
            try {
                const result = await this.services.router.route({
                    type: 'text',
                    prompt: body.prompt || body.message,
                    history: body.history,
                    systemPrompt: body.systemPrompt,
                    modelId: body.modelId,
                    provider: body.provider
                });
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

        if (url.pathname.startsWith('/bridge/')) {
            if (request.headers.get('Upgrade') !== 'websocket') {
                return new Response('Expected Upgrade: websocket', { status: 426 });
            }

            const bridgeId = url.pathname.split('/')[2];
            const role = url.searchParams.get('role') || 'client';

            const pair = new WebSocketPair();
            const [client, server] = Object.values(pair);

            this.state.acceptWebSocket(server, [bridgeId, role]);

            return new Response(null, { status: 101, webSocket: client });
        }

        return this.app.fetch(request);
    }

    async webSocketMessage(ws: WebSocket, message: string | ArrayBuffer) {
        try {
            const tags = this.state.getTags(ws);
            const bridgeId = tags[0];
            const role = tags[1];

            const msgData = typeof message === 'string' ? JSON.parse(message) : JSON.parse(new TextDecoder().decode(message));

            if (role === 'client') {
                const hosts = this.state.getWebSockets(bridgeId);
                let hostFound = false;
                for (const host of hosts) {
                    const hostTags = this.state.getTags(host);
                    if (hostTags.includes('host') && host.readyState === 1) {
                        host.send(JSON.stringify(msgData));
                        hostFound = true;
                    }
                }

                if (!hostFound) {
                    ws.send(JSON.stringify({
                        type: `${msgData.type}_response`,
                        messageId: msgData.messageId,
                        success: false,
                        error: 'Host not connected'
                    }));
                }

            } else if (role === 'host') {
                const peers = this.state.getWebSockets(bridgeId);
                for (const peer of peers) {
                    const peerTags = this.state.getTags(peer);
                    if (peerTags.includes('client') && peer !== ws && peer.readyState === 1) {
                        peer.send(JSON.stringify(msgData));
                    }
                }
            }
        } catch (e) {
            console.error('[Relay] Error processing message:', e);
        }
    }

    async webSocketClose(ws: WebSocket, code: number, reason: string, wasClean: boolean) {
        const tags = this.state.getTags(ws);
        const bridgeId = tags[0];
        const role = tags[1];

        if (role === 'host') {
            const peers = this.state.getWebSockets(bridgeId);
            for (const peer of peers) {
                if (this.state.getTags(peer).includes('client')) {
                    peer.send(JSON.stringify({ type: 'system', status: 'host_disconnected' }));
                }
            }
        }
    }

    async webSocketError(ws: WebSocket, error: any) {
        console.error('[Relay] WebSocket Error:', error);
    }
}
