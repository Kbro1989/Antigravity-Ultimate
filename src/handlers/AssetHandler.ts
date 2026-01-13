import { Hono } from 'hono';
import { Env } from '../types/env';
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';
import { VariantRouter } from '../services/core/VariantRouter';

const app = new Hono<{ Bindings: Env }>();

import manifestJSONImport from '__STATIC_CONTENT_MANIFEST';

// Safe check for manifest (may be string or object depending on wrangler version)
let rawManifest: any = {};
try {
    rawManifest = manifestJSONImport;
    // Log the structure for debugging in production logs
    console.log(`[MANIFEST] Raw Import Type: ${typeof rawManifest}, Keys: ${Object.keys(rawManifest || {}).join(',')}`);
} catch (e) {
    console.warn('[MANIFEST] __STATIC_CONTENT_MANIFEST import failure');
}

// Helper for lazy manifest retrieval
let cachedManifest: any = null;
const getAssetManifest = () => {
    if (cachedManifest) return cachedManifest;
    try {
        // Handle different possible shapes of manifestData
        let data = rawManifest;

        // If it's a module with a default export (common in ESM/Vite)
        if (data && typeof data === 'object' && 'default' in data) {
            data = data.default;
        }

        // If it's a stringified JSON (common in older Wrangler versions)
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }

        cachedManifest = data || {};
        const keys = Object.keys(cachedManifest);
        console.log(`[MANIFEST] Successfully resolved ${keys.length} assets.`);
        return cachedManifest;
    } catch (e) {
        console.error('[MANIFEST] Resolution failed', e);
        return {};
    }
};

// Health Check
app.get('/health', async (c) => {
    return c.json({
        status: 'online',
        timestamp: new Date().toISOString(),
        cloud: { status: 'ok', component: 'cloud' }
    });
});

// Manifest Debug
app.get('/api/manifest-debug', async (c) => {
    const manifest = getAssetManifest();
    const manifestKeys = Object.keys(manifest);

    let kvKeys: any[] = [];
    try {
        if (c.env.__STATIC_CONTENT) {
            const list = await c.env.__STATIC_CONTENT.list({ limit: 10 });
            kvKeys = list.keys.map(k => k.name);
        }
    } catch (e) {
        kvKeys = [`Error listing KV: ${e instanceof Error ? e.message : 'Unknown'}`];
    }

    return c.json({
        manifestType: typeof rawManifest,
        manifestKeysCount: manifestKeys.length,
        manifestSample: manifestKeys.slice(0, 5),
        kvKeysSample: kvKeys,
        envKeys: Object.keys(c.env)
    });
});

// Distribution / Limbs / Assets
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

app.get('/ai/assets-list/*', async (c) => {
    const key = c.req.path.replace('/ai/assets-list/', '');
    if (!c.env.ASSETS_BUCKET) return c.json({ error: 'R2 Not Configured' }, 503);

    try {
        const list = await c.env.ASSETS_BUCKET.list({ prefix: key + '/' });
        return c.json({
            success: true,
            files: list.objects.map(o => ({
                name: o.key.split('/').pop(),
                size: o.size,
                path: o.key
            }))
        });
    } catch (e: any) {
        return c.json({ error: e.message }, 500);
    }
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

        const binaryExtensions = ['.bin', '.jag', '.mem', '.idx', '.jag85', '.jag63', '.jag36', '.jag17', '.jag24', '.jag58'];
        if (binaryExtensions.some(ext => assetName.endsWith(ext))) {
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

// Static asset serving (The Catch-All)
app.get('/*', async (c) => {
    const path = new URL(c.req.url).pathname;

    // Variant Routing Interception
    try {
        const router = VariantRouter.getInstance();
        const variantResponse = await router.getAsset(path, c.env, c.req.raw, c.executionCtx as any);
        if (variantResponse) return variantResponse;
    } catch (e) {
        console.warn(`[VariantRouter] Bypass: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }

    const manifest = getAssetManifest();
    try {
        // Normalize path for KV lookup
        const normalizedPath = path === '/' ? '/index.html' : path;
        console.log(`[ASSET] Attempting to serve: ${normalizedPath} (Proxy: ${c.req.url})`);

        return await getAssetFromKV(
            {
                request: new Request(`${new URL(c.req.url).origin}${normalizedPath}`, c.req.raw),
                waitUntil(promise) { return promise; },
            },
            {
                ASSET_NAMESPACE: c.env.__STATIC_CONTENT,
                ASSET_MANIFEST: manifest,
            }
        );
    } catch (e: any) {
        console.warn(`[ASSET] Primary lookup failed for ${path}: ${e.message}`);

        // Fallback to index.html for SPA routing
        if (path !== '/' && path !== '/index.html') {
            try {
                console.log(`[ASSET] Falling back to index.html for: ${path}`);
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
                console.error(`[ASSET] Fatal error serving ${path}: ${e2.message}`, {
                    hasKV: !!c.env.__STATIC_CONTENT,
                    manifestSize: Object.keys(manifest).length,
                });
            }
        }

        return c.text(`POG Dashboard - Asset Loading Error: ${e.message}\nPath: ${path}\nManifest Size: ${Object.keys(manifest).length}`, 500);
    }
});

export default app;
