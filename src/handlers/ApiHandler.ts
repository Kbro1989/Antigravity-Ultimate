import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { Env } from '../types/env';
import { SignatureVerifier } from '../services/security/SignatureVerifier';
import { ensurePipeline } from '../services/ai/trinity/TrinityWorker';

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

// Proxy to Session Agent
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
    // If we got here, it wasn't /session/... or other specific routes
    // Forward to 'default' session agent to support CloudflareService.ts stateless calls
    const id = c.env.SESSION_AGENT!.idFromName('default');
    const stub = c.env.SESSION_AGENT!.get(id);
    return stub.fetch(c.req.raw);
});

export default app;
