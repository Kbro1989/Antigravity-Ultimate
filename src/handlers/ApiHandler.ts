import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { Env } from '../types/env';
import { SignatureVerifier } from '../services/security/SignatureVerifier';
import { ensurePipeline } from '../services/ai/trinity/TrinityWorker';
import { modelRouter } from '../services/ai/ModelRouter';
import { InstantService } from '../services/data/InstantService';

const app = new Hono<{ Bindings: Env }>();

// Enable CORS for API
app.use('/*', cors({
    origin: '*', // For dev; restrict in prod
    allowHeaders: ['Content-Type', 'Authorization', 'X-Session-ID'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    maxAge: 600,
}));

// Security Middleware (ECDSA)
app.use('/*', async (c, next) => {
    // Skip verification for OPTIONS or local dev if ENV set
    // Also skip verification for specific frontend-facing AI endpoints that rely on Rate Limiting instead of signatures
    if (c.req.method === 'OPTIONS' ||
        c.req.path.includes('/api/chat') ||
        c.req.path.includes('/api/generate-image') ||
        c.req.path.includes('/api/code-complete') ||
        c.req.path.includes('/api/limb/execute') ||
        c.req.path.includes('/api/assets') ||
        c.req.path.includes('/ai/assets') ||
        c.req.path.includes('/ai/complete') ||
        c.req.path.includes('/ai/process') ||
        c.req.path.endsWith('/api/session/stats') ||
        c.req.path.includes('/health')
    ) return next();

    // Verify
    const result = await SignatureVerifier.verify(c.req.raw);
    if (!result.isValid) {
        return c.json({ error: result.error || 'Unauthorized' }, 401);
    }

    await next();
});

// ==================== INSTANTDB OVERFLOW ROUTES ====================
// These bypass the Durable Object to avoid quota exhaustion

// GET /session/:sessionId/api/assets -> InstantDB
app.get('/session/:sessionId/api/assets', async (c) => {
    const sessionId = c.req.param('sessionId');
    console.log(`[INSTANT_BYPASS] Serving assets from InstantDB for session: ${sessionId}`);
    try {
        const instant = InstantService.getInstance(c.env);
        const assets = await instant.getAssets(sessionId);
        return c.json(assets);
    } catch (e: any) {
        console.error(`[INSTANT_BYPASS] Asset fetch failed: ${e.message}`);
        return c.json([], 200); // Return empty array on failure
    }
});

// POST /session/:sessionId/api/assets/register -> InstantDB
app.post('/session/:sessionId/api/assets/register', async (c) => {
    const sessionId = c.req.param('sessionId');
    console.log(`[INSTANT_BYPASS] Saving asset via InstantDB for session: ${sessionId}`);
    try {
        const body = await c.req.json();
        const instant = InstantService.getInstance(c.env);
        const assetId = await instant.saveAsset(sessionId, body);
        return c.json({ success: true, assetId });
    } catch (e: any) {
        console.error(`[INSTANT_BYPASS] Asset save failed: ${e.message}`);
        return c.json({ error: e.message }, 500);
    }
});

// GET /session/:sessionId/api/session/stats -> InstantDB
app.get('/session/:sessionId/api/session/stats', async (c) => {
    const sessionId = c.req.param('sessionId');
    console.log(`[INSTANT_BYPASS] Serving stats from InstantDB for session: ${sessionId}`);
    try {
        const instant = InstantService.getInstance(c.env);
        const stats = await instant.getStats(sessionId);
        return c.json(stats);
    } catch (e: any) {
        console.error(`[INSTANT_BYPASS] Stats fetch failed: ${e.message}`);
        return c.json({
            cloudflareUsed: 0,
            cloudflareLimit: 10000,
            geminiSpent: 0,
            geminiLimit: 5.0,
            savingsEstimate: 0,
            error: e.message,
            source: 'fallback'
        });
    }
});

// GET /session/:sessionId/api/health -> Stateless (no DO needed)
app.get('/session/:sessionId/api/health', async (c) => {
    const sessionId = c.req.param('sessionId');
    console.log(`[STATELESS_BYPASS] Health check for session: ${sessionId}`);
    return c.json({
        status: 'ok',
        mode: 'stateless_bypass',
        sessionId,
        timestamp: Date.now(),
        message: 'DO quota protection active - using stateless mode'
    });
});

// POST /session/:sessionId/api/limb/execute -> Stateless AI (bypass DO)
app.post('/session/:sessionId/api/limb/execute', async (c) => {
    const sessionId = c.req.param('sessionId');
    console.log(`[STATELESS_BYPASS] Limb execute for session: ${sessionId}`);
    try {
        const body = await c.req.json();
        const { limbId, action, params, payload } = body;
        const requestParams = params || payload || {};

        // Route through modelRouter directly without DO
        const result = await modelRouter.route({
            userId: sessionId,
            type: action === 'generate' || action === 'image' ? 'image' : 'text',
            prompt: requestParams.prompt || requestParams.message || JSON.stringify(requestParams) || '',
            modelId: requestParams.model || requestParams.modelId,
            provider: requestParams.provider
        }, c.env);

        if (result instanceof ReadableStream) {
            return c.body(result);
        }

        return c.json({
            status: 'success',
            limbId,
            action,
            result,
            mode: 'stateless_bypass'
        });
    } catch (e: any) {
        console.error(`[STATELESS_BYPASS] Limb execute failed: ${e.message}`);
        return c.json({
            status: 'error',
            error: e.message,
            mode: 'stateless_bypass'
        }, 500);
    }
});

// ==================== END INSTANTDB OVERFLOW ROUTES ====================

// Proxy to Session Agent (remaining routes that aren't bypassed)
app.all('/session/:sessionId/*', async (c) => {
    try {
        const sessionId = c.req.param('sessionId');
        const id = c.env.SESSION_AGENT!.idFromName(sessionId);
        const stub = c.env.SESSION_AGENT!.get(id);

        // Strip /api/session/:sessionId prefix
        // Note: The parent router mounts this at /api, so we are relative to that
        // But we need to reconstruct the path for the DO depending on how it expects it.
        // Original logic stripped `/api/session/${sessionId}`.

        const url = new URL(c.req.url);
        // The mount path in index.ts will be /api, so the full path is /api/session/:sessionId/...
        // We want to pass the remainder to the DO.

        // Let's just rely on the original logic helper but adapted
        // We know the structure is /api/session/:sessionId/...
        const prefix = `/api/session/${sessionId}`;

        if (url.pathname.startsWith(prefix)) {
            url.pathname = url.pathname.slice(prefix.length);
        }

        if (!url.pathname) url.pathname = '/';
        if (!url.pathname.startsWith('/')) url.pathname = '/' + url.pathname;

        console.log(`[SESSION_PROXY] Forwarding to DO: ${url.pathname} (Session: ${sessionId}) | Original: ${c.req.path}`);

        const proxyRequest = new Request(url.toString(), c.req.raw);
        const response = await stub.fetch(proxyRequest);

        if (!response.ok) {
            const errorBody = await response.clone().text();
            console.error(`[SESSION_PROXY] DO Error ${response.status} for ${url.pathname}. Body: ${errorBody.slice(0, 500)}`);
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

// Trinity AI Integration
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

// Fallback for generic API calls
app.all('/*', async (c) => {
    const path = c.req.path;

    // --- STATELESS AI BYPASS ---
    // Handle expensive AI calls directly in the Worker context to save DO CPU/Memory
    if (path.includes('/api/chat') || path.includes('/api/generate-image') || path.includes('/api/code-complete')) {
        try {
            const body = await c.req.json();
            const result = await modelRouter.route({
                userId: c.req.header('X-User-ID') || 'anonymous',
                type: path.includes('chat') ? 'text' : path.includes('image') ? 'image' : 'code',
                prompt: body.prompt || body.message || '',
                history: body.history,
                systemPrompt: body.systemPrompt,
                modelId: body.model || body.modelId,
                provider: body.provider
            }, c.env);

            if (result instanceof ReadableStream) {
                return c.body(result);
            }
            return c.json(result);
        } catch (e: any) {
            console.error(`[ApiHandler] Stateless AI Failure: ${e.message}`);
            // Fallback to DO if stateless fails
        }
    }

    // If we got here, it wasn't a bypass or the bypass failed
    // Forward to 'default' session agent to support legacy stateful calls
    const id = c.env.SESSION_AGENT!.idFromName('default');
    const stub = c.env.SESSION_AGENT!.get(id);
    return stub.fetch(c.req.raw);
});

export default app;
