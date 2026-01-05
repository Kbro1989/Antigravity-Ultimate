import './buffer-shim';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { routePartykitRequest } from 'partyserver';
import { SessionAgent } from './agents/SessionAgent';
import { CollaborationServer } from './services/network/CollaborationServer';
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';
// @ts-ignore
import manifestJSON from '__STATIC_CONTENT_MANIFEST';

// Export Workflow for Cloudflare Runtime
export { SymphonyWorkflow } from './workflows/SymphonyWorkflow';

import { Env } from './types/env';

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

// Root Health Check (for Integration Tests)
app.get('/', (c) => c.text('POG API Ready'));

// --------------------------------------------------------------------------------
// [Relay] Bridge Routing - MUST BE TOP LEVEL TO BYPASS MIDDLEWARE
// --------------------------------------------------------------------------------
app.all('/bridge/:bridgeId/*', (c) => {
    try {
        // Route to the SessionAgent which now handles WebSocket Hibernation
        const id = c.env.SESSION_AGENT.idFromName(c.req.param('bridgeId'));
        return c.env.SESSION_AGENT.get(id).fetch(c.req.raw);
    } catch (e: any) {
        return c.text(`Bridge Fault: ${e.message}`, 500);
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
        c.req.path.includes('/api/limb/execute')
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
    const sessionId = c.req.param('sessionId');
    const id = c.env.SESSION_AGENT!.idFromName(sessionId);
    const stub = c.env.SESSION_AGENT!.get(id);

    // Strip /api/session/:sessionId prefix
    const url = new URL(c.req.url);
    url.pathname = url.pathname.replace(`/api/session/${sessionId}`, '');

    return stub.fetch(url.toString(), c.req.raw);
});

// Stress Test / Failover Verification Endpoint
app.post('/test-failover', async (c) => {
    const { triggerProvider, forceError } = await c.req.json();
    console.log(`[STRESS_TEST] Simulating failure for: ${triggerProvider}`);

    // In a real implementation, we'd inject a failure flag into the session or context.
    // For this test, we'll return a diagnostic of how the router WOULD respond.
    return c.json({
        status: 'simulated',
        provider: triggerProvider,
        fallback_active: forceError,
        strategy: 'cloudflare-first',
        action_required: 'Check ModelRouter logs for retry/continue block'
    });
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
// [Distribution] Limb & Asset Serving
// --------------------------------------------------------------------------------
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

// Static asset serving from Workers Sites
app.get('/*', async (c) => {
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
            console.error(`[ASSET] Fatal error serving ${c.req.path}: ${e2.message}`, {
                hasKV: !!c.env.__STATIC_CONTENT,
                manifestSize: Object.keys(manifest).length
            });
            return c.text(`POG Dashboard - Asset Loading Error: ${e2.message} (Manifest Size: ${Object.keys(manifest).length})`, 500);
        }
    }
});

export default {
    fetch: app.fetch,
};

// Export DO classes so Cloudflare can find them
export { SessionAgent, CollaborationServer as Collaboration };
