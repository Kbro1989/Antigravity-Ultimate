import { getAssetFromKV } from '@cloudflare/kv-asset-handler';
import { Env } from '../../types/env';

export interface DeploymentManifest {
    activeVariants: Record<string, string>; // workspace -> hash
    variants: Record<string, Array<{
        hash: string;
        deploymentTag: 'latest' | 'stable' | 'legacy' | 'mobile-variant';
        size: number;
    }>>;
}

export class VariantRouter {
    private manifest: DeploymentManifest | null = null;
    private static instance: VariantRouter;
    private lastManifestLoad: number = 0;
    private readonly MANIFEST_TTL = 60000; // 60 seconds

    private constructor() { }

    static getInstance(): VariantRouter {
        if (!VariantRouter.instance) {
            VariantRouter.instance = new VariantRouter();
        }
        return VariantRouter.instance;
    }

    async getAsset(path: string, env: Env, request: Request, ctx: ExecutionContext): Promise<Response> {
        // Fix for "Key name cannot be empty" - if path is / we should look for /index.html
        const normalizedPath = path === '/' ? '/index.html' : path;

        // Path: /assets/AnimationWorkspace-XXXXXXXX.js
        const match = normalizedPath.match(/^\/assets\/(.+?)-([A-Za-z0-9_-]{8,})\.js$/);

        // Construct the event object expected by getAssetFromKV
        const kvEvent = {
            request: new Request(`${new URL(request.url).origin}${normalizedPath}`, request),
            waitUntil: (p: Promise<any>) => ctx.waitUntil(p)
        };

        // Helper for manifest parsing
        const getManifest = () => {
            try {
                const raw = env.__STATIC_CONTENT_MANIFEST as any;
                if (!raw) return {};
                let data = raw;
                if (typeof data === 'object' && 'default' in data) {
                    data = data.default;
                }
                return typeof data === 'string' ? JSON.parse(data) : data;
            } catch (e) {
                return {};
            }
        };

        // If it's not a hashed asset, or we fail routing, pass through to KV handler
        if (!match) {
            return getAssetFromKV(kvEvent, {
                mapRequestToAsset: (req) => req,
                ASSET_NAMESPACE: env.__STATIC_CONTENT,
                ASSET_MANIFEST: getManifest()
            });
        }

        const workspace = match[1];

        // Load manifest if not cached or expired
        if (!this.manifest || (Date.now() - this.lastManifestLoad > this.MANIFEST_TTL)) {
            try {
                const manifestObj = await env.ASSETS_BUCKET.get('deployment-manifest.json');
                if (manifestObj) {
                    this.manifest = await manifestObj.json() as DeploymentManifest;
                    this.lastManifestLoad = Date.now();
                    console.log(`[VariantRouter] Manifest refreshed from R2 (Variants: ${Object.keys(this.manifest.variants).length})`);
                } else {
                    console.warn('[VariantRouter] Manifest not found in R2');
                }
            } catch (e) {
                console.warn(`[VariantRouter] Failed to load manifest from R2: ${e instanceof Error ? e.message : 'Unknown error'}`);
            }
        }

        // Determine which variant to serve
        const userSegment = this.getUserSegment(request);
        const targetHash = this.selectVariant(workspace, userSegment);

        // If targetHash is different from requested, we rewrite
        if (targetHash && targetHash !== match[2]) {
            const url = new URL(request.url);
            url.pathname = `/assets/${workspace}-${targetHash}.js`;
            console.log(`[VariantRouter] Rerouting ${match[2]} -> ${targetHash} (${userSegment})`);
            const newRequest = new Request(url.toString(), request);

            try {
                return await getAssetFromKV({ ...kvEvent, request: newRequest }, {
                    mapRequestToAsset: (req) => newRequest,
                    ASSET_NAMESPACE: env.__STATIC_CONTENT,
                    ASSET_MANIFEST: getManifest()
                });
            } catch (e) {
                console.warn(`[VariantRouter] KV miss for ${url.pathname}, attempting R2 fallback`);
                // Fallback to R2 (RealityLimb)
                // Remove leading slash for R2 key: /assets/file -> assets/file
                const r2Key = url.pathname.startsWith('/') ? url.pathname.substring(1) : url.pathname;
                const r2Obj = await env.ASSETS_BUCKET.get(r2Key);

                if (r2Obj) {
                    return new Response(r2Obj.body, {
                        headers: {
                            'Content-Type': 'application/javascript',
                            'Cache-Control': 'public, max-age=31536000, immutable',
                            'X-Variant-Source': 'R2'
                        }
                    });
                }
                throw e; // Propagate to bypass if not in R2 either
            }
        }

        return getAssetFromKV(kvEvent, {
            mapRequestToAsset: (req) => new Request(req.url, req),
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: getManifest()
        });
    }

    private getUserSegment(request: Request): string {
        // Use CF-Ray, cookies, or custom headers
        const cfRay = request.headers.get('CF-Ray') || '';
        // A simple deterministic hash of the ray ID to get a 0-99 bucket
        const shard = parseInt(cfRay.substring(0, 8), 16) % 100;

        if (shard < 20) return 'canary'; // 20%
        if (shard < 50) return 'staging'; // 30%
        return 'production'; // 50%
    }

    private selectVariant(workspace: string, segment: string): string | null {
        if (!this.manifest || !this.manifest.variants[workspace]) return null;

        const variants = this.manifest.variants[workspace];

        switch (segment) {
            case 'canary':
                return variants.find(v => v.deploymentTag === 'latest')?.hash || variants[0].hash;
            case 'staging':
                return Math.random() < 0.1
                    ? variants.find(v => v.deploymentTag === 'latest')?.hash || variants[0].hash
                    : variants.find(v => v.deploymentTag === 'stable')?.hash || variants[0].hash;
            default:
                return variants.find(v => v.deploymentTag === 'stable')?.hash || variants[0].hash;
        }
    }
}
