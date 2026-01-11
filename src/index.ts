import './buffer-shim';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { routePartykitRequest } from 'partyserver';
import { SessionAgent } from './agents/SessionAgent';
import { Collaboration } from './services/network/CollaborationServer';
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

// Safe import for __STATIC_CONTENT_MANIFEST (may not exist in local dev mode)
let manifestJSON: any = {};
try {
    // @ts-ignore - This module is injected by Cloudflare during deploy
    manifestJSON = require('__STATIC_CONTENT_MANIFEST');
} catch {
    console.warn('[MANIFEST] __STATIC_CONTENT_MANIFEST not available (local dev mode)');
}

// Export Workflow for Cloudflare Runtime
export { SymphonyWorkflow } from './workflows/SymphonyWorkflow';

import { Env } from './types/env';
import { ensurePipeline } from './services/ai/trinity/TrinityWorker';

// Helper for lazy manifest retrieval
let cachedManifest: any = null;
const getAssetManifest = () => {
    if (cachedManifest) return cachedManifest;
    try {
        // Prioritize the imported manifestJSON (modern ESM way)
        if (typeof manifestJSON !== 'undefined') {
            cachedManifest = typeof manifestJSON === 'string'
                ? JSON.parse(manifestJSON)
                : manifestJSON;
            console.log(`[MANIFEST] Loaded ${Object.keys(cachedManifest).length} assets from import.`);
            return cachedManifest;
        }

        // Fallback to global (legacy way)
        // @ts-ignore
        const globalManifest = typeof __STATIC_CONTENT_MANIFEST !== 'undefined' ? __STATIC_CONTENT_MANIFEST : undefined;

        if (typeof globalManifest === 'undefined') {
            console.warn('[MANIFEST] Both import and global manifest are undefined');
            return {};
        }

        cachedManifest = typeof globalManifest === 'string'
            ? JSON.parse(globalManifest)
            : globalManifest;

        console.log(`[MANIFEST] Loaded ${Object.keys(cachedManifest).length} assets from global.`);
        return cachedManifest;
    } catch (e) {
        console.error('[MANIFEST] Parse failed', e);
        return {};
    }
};

const app = new Hono<{ Bindings: Env }>();

// Root Health Check (Handled by static index.html fallback or service worker)
// app.get('/', (c) => c.text('POG API Ready'));

// --------------------------------------------------------------------------------
// [Relay] Bridge Routing - MUST BE TOP LEVEL TO BYPASS MIDDLEWARE
// --------------------------------------------------------------------------------
app.all('/bridge/:bridgeId/*', (c) => {
    console.log(`[BRIDGE_ROUTE] Request: ${c.req.method} ${c.req.url} | Upgrade: ${c.req.header('Upgrade')}`);
    try {
        const bridgeId = c.req.param('bridgeId');
        const id = c.env.SESSION_AGENT.idFromName(bridgeId);
        return c.env.SESSION_AGENT.get(id).fetch(c.req.raw);
    } catch (e: any) {
        console.error(`[BRIDGE_ROUTE] Fault: ${e.message}`);
        return c.text(`Bridge Fault: ${e.message}`, 500);
    }
});

// Specialized Route: Observability Token Bank
app.all('/ws/observability', (c) => {
    console.log(`[OBSERVABILITY_ROUTE] WebSocket request: ${c.req.url}`);
    try {
        const id = c.env.SESSION_AGENT.idFromName('system_observatory');
        return c.env.SESSION_AGENT.get(id).fetch(c.req.raw);
    } catch (e: any) {
        console.error(`[OBSERVABILITY_ROUTE] Fault: ${e.message}`);
        return c.text(`Observability Fault: ${e.message}`, 500);
    }
});

// Enable CORS
app.use('/*', cors({
    origin: '*', // For dev; restrict in prod
    allowHeaders: ['Content-Type', 'Authorization', 'X-Session-ID'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    maxAge: 600,
}));

// PartyServer Routing
app.all('/parties/*', async (c) => {
    return (
        (await routePartykitRequest(c.req.raw, c.env)) ||
        new Response("Not Found", { status: 404 })
    );
});

// Security Middleware (ECDSA)
import { SignatureVerifier } from './services/security/SignatureVerifier';

app.use('/api/*', async (c, next) => {
    // Skip verification for OPTIONS or local dev if ENV set
    // Also skip verification for specific frontend-facing AI endpoints that rely on Rate Limiting instead of signatures
    if (c.req.method === 'OPTIONS' ||
        c.req.path.includes('/api/chat') ||
        c.req.path.includes('/api/generate-image') ||
        c.req.path.includes('/api/code-complete') ||
        c.req.path.includes('/api/limb/execute') ||
        c.req.path.endsWith('/api/session/stats') ||
        c.req.path.includes('/api/assets') ||
        c.req.path.includes('/health')
    ) return next();

    // Verify
    const result = await SignatureVerifier.verify(c.req.raw);
    if (!result.isValid) {
        return c.json({ error: result.error || 'Unauthorized' }, 401);
    }

    await next();
});

app.onError((err, c) => {
    console.error("[GLOBAL_ERROR]", err);
    return c.text(`GLOBAL_ERROR: ${err.message}\nStack: ${err.stack}`, 500);
});

// Proxy to Session Agent
app.all('/api/session/:sessionId/*', async (c) => {
    try {
        const sessionId = c.req.param('sessionId');
        const id = c.env.SESSION_AGENT!.idFromName(sessionId);
        const stub = c.env.SESSION_AGENT!.get(id);

        // Strip /api/session/:sessionId prefix
        const url = new URL(c.req.url);
        const prefix = `/api/session/${sessionId}`;

        // Ensure accurate pathname stripping
        if (url.pathname.startsWith(prefix)) {
            url.pathname = url.pathname.slice(prefix.length);
        }

        // Ensure path starts with / if it's now empty
        if (!url.pathname) url.pathname = '/';
        if (!url.pathname.startsWith('/')) url.pathname = '/' + url.pathname;

        console.log(`[SESSION_PROXY] Forwarding to DO: ${url.pathname} (Session: ${sessionId}) | Original: ${c.req.path}`);

        // Create a new request and forward it to the DO stub
        // We use the stripped pathname but keep the rest of the request info
        const proxyRequest = new Request(url.toString(), c.req.raw);
        const response = await stub.fetch(proxyRequest);

        if (!response.ok) {
            const errorBody = await response.clone().text();
            console.error(`[SESSION_PROXY] DO Error ${response.status} for ${url.pathname}. Body: ${errorBody.slice(0, 500)}`);
            // If body is empty, inject a helpful error message to prevent "Unexpected end of JSON input"
            if (!errorBody.trim()) {
                return c.json({
                    error: `Durable Object returned ${response.status} with empty body`,
                    path: url.pathname,
                    sessionId
                }, response.status as any);
            }
        }

        return response;
    } catch (e: any) {
        console.error(`[SESSION_PROXY] Error: ${e.message}`);
        return c.json({ error: e.message }, 500);
    }
});



// Comprehensive Neural Chain Health Check
app.get('/health/chain', async (c) => {
    const urls = {
        bridge: 'https://pog-bridge-signal.workers.dev/health',
        cli: 'https://pog-cli-signal.workers.dev/health'
    };

    try {
        const [bridgeRes, cliRes] = await Promise.all([
            fetch(urls.bridge).then(r => r.json()).catch(() => ({ status: 'offline' })),
            fetch(urls.cli).then(r => r.json()).catch(() => ({ status: 'offline' }))
        ]);

        return c.json({
            status: 'online',
            timestamp: new Date().toISOString(),
            chain: {
                terminal: cliRes, // Terminal pings CLI signal
                bridge: bridgeRes,
                cloud: { status: 'ok', component: 'cloud' }
            }
        });
    } catch (e: any) {
        return c.json({ status: 'degraded', error: e.message }, 500);
    }
});

// --------------------------------------------------------------------------------
// [Distribution] Limb & Asset Serving (R2 & KV)
// --------------------------------------------------------------------------------
app.get('/ai/assets/*', async (c) => {
    const key = c.req.path.replace('/ai/assets/', '');
    if (!c.env.ASSETS_BUCKET) return c.text('R2 Not Configured', 503);

    const object = await c.env.ASSETS_BUCKET.get(key);
    if (!object) return c.text('Asset Not Found', 404);

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set('etag', object.httpEtag);
    headers.set('Access-Control-Allow-Origin', '*');

    return new Response(object.body, { headers });
});

app.get('/limbs/:limbId', async (c) => {
    const limbId = c.req.param('limbId');
    const manifest = getAssetManifest();
    const path = `/limbs/${limbId}.json`;

    try {
        return await getAssetFromKV(
            {
                request: new Request(`${new URL(c.req.url).origin}${path}`, c.req.raw),
                waitUntil(promise) { return promise; },
            },
            {
                ASSET_NAMESPACE: c.env.__STATIC_CONTENT,
                ASSET_MANIFEST: manifest,
            }
        );
    } catch (e) {
        return c.json({ error: `Limb ${limbId} not synchronized.`, status: 'OFFLINE' }, 404);
    }
});

app.get('/dist/:assetName', async (c) => {
    const assetName = c.req.param('assetName');
    const manifest = getAssetManifest();
    const path = `/dist/${assetName}`;

    try {
        const response = await getAssetFromKV(
            {
                request: new Request(`${new URL(c.req.url).origin}${path}`, c.req.raw),
                waitUntil(promise) { return promise; },
            },
            {
                ASSET_NAMESPACE: c.env.__STATIC_CONTENT,
                ASSET_MANIFEST: manifest,
            }
        );

        // Force binary content type for .bin files
        if (assetName.endsWith('.bin')) {
            return new Response(response.body, {
                ...response,
                headers: {
                    ...Object.fromEntries(response.headers),
                    'Content-Type': 'application/octet-stream',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }
        return response;
    } catch (e) {
        return c.text(`Asset ${assetName} not found in distribution.`, 404);
    }
});

// --------------------------------------------------------------------------------
// [Trinity] Conscious Neural Mesh Integration
// --------------------------------------------------------------------------------
app.post('/trinity/execute', async (c) => {
    try {
        const pipeline = await ensurePipeline(c.env as any);
        const task = await c.req.json();
        const result = await pipeline.execute(task);
        return c.json(result);
    } catch (e: any) {
        return c.json({ error: e.message, stack: e.stack }, 500);
    }
});

app.get('/trinity/introspect', async (c) => {
    try {
        const pipeline = await ensurePipeline(c.env as any);
        return c.json(pipeline.getHealth());
    } catch (e: any) {
        return c.json({ error: e.message }, 500);
    }
});

// --------------------------------------------------------------------------------
// [API Fallback] Route global /api/* to default session if not handled above
// --------------------------------------------------------------------------------
app.all('/api/*', async (c) => {
    // If we got here, it wasn't /api/session/... or other specific routes
    // Forward to 'default' session agent to support CloudflareService.ts stateless calls
    const id = c.env.SESSION_AGENT!.idFromName('default');
    const stub = c.env.SESSION_AGENT!.get(id);
    return stub.fetch(c.req.raw);
});

// Static asset serving from Workers Sites
import { VariantRouter } from './services/core/VariantRouter';

app.get('/*', async (c) => {
    // --------------------------------------------------------------------------------
    // [Variant Routing] Multi-Variant Architecture Interception
    // --------------------------------------------------------------------------------
    try {
        const router = VariantRouter.getInstance();
        const variantResponse = await router.getAsset(new URL(c.req.url).pathname, c.env, c.req.raw, c.executionCtx as any);

        // If the router handled it (200 OK) and it's not a passthrough fallback, return it
        // Note: VariantRouter returns standard KV response, so we check if it found something distinct
        // But simply returning the response is usually enough as it wraps getAssetFromKV
        if (variantResponse) return variantResponse;
    } catch (e) {
        console.warn(`[VariantRouter] Bypass: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }

    const manifest = getAssetManifest();
    try {
        console.log(`[ASSET] Attempting to serve: ${c.req.url}`);
        return await getAssetFromKV(
            {
                request: c.req.raw,
                waitUntil(promise) { return promise; },
            },
            {
                ASSET_NAMESPACE: c.env.__STATIC_CONTENT,
                ASSET_MANIFEST: manifest,
            }
        );
    } catch (e: any) {
        console.warn(`[ASSET] Primary lookup failed for ${c.req.path}: ${e.message}`);

        // Fallback to index.html for SPA routing
        try {
            console.log(`[ASSET] Falling back to index.html for: ${c.req.path}`);
            const notFoundResponse = await getAssetFromKV(
                {
                    request: new Request(`${new URL(c.req.url).origin}/index.html`, c.req.raw),
                    waitUntil(promise) { return promise; },
                },
                {
                    ASSET_NAMESPACE: c.env.__STATIC_CONTENT,
                    ASSET_MANIFEST: manifest,
                }
            );
            return new Response(notFoundResponse.body, {
                ...notFoundResponse,
                status: 200, // Override 404 for SPA
            });
        } catch (e2: any) {
            const manifestKeys = Object.keys(manifest);
            console.error(`[ASSET] Fatal error serving ${c.req.path}: ${e2.message}`, {
                hasKV: !!c.env.__STATIC_CONTENT,
                manifestSize: manifestKeys.length,
                sampleKeys: manifestKeys.slice(0, 10),
                hasIndex: manifestKeys.includes('index.html') || manifestKeys.some(k => k.startsWith('index.'))
            });
            return c.text(`POG Dashboard - Asset Loading Error: ${e2.message} (Manifest Size: ${manifestKeys.length}). Sample keys: ${manifestKeys.slice(0, 5).join(', ')}`, 500);
        }
    }
});

export default {
    fetch: app.fetch,
};

// Export DO classes so Cloudflare can find them (Aliased for SQLite Migration + Legacy Support)
export { SessionAgent as SessionAgentSQL, Collaboration as CollaborationSQL };
export { SessionAgent, Collaboration }; // Legacy export for v1/v2 history

export { SessionDO as SessionDOSQL } from './services/symphony/SessionDO';
export { SessionDO } from './services/symphony/SessionDO'; // Legacy export for v3

export { MetabolismDO as MetabolismDOSQL } from './services/durable_objects/MetabolismDO';
export { MetabolismDO } from './services/durable_objects/MetabolismDO';
