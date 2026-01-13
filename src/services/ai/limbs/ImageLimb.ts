import { NeuralLimb, LimbConfig } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';
import { BaseIntent } from '../AITypes';

export class ImageLimb extends NeuralLimb {

    async generate(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        const { prompt, options } = params;
        await this.logActivity('image_generate', 'pending', { prompt });
        return await this.callAI({ type: 'image', prompt, ...options, ...intent });
    }

    async upscale(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        await this.logActivity('image_upscale', 'pending', params);
        // Use Flux-Dev for High-Res refinement
        return await this.callAI({
            type: 'image',
            prompt: `High-resolution, ultra-detailed textures, 4k, photographic: ${params.prompt}`,
            modelId: 'FLUX_DEV',
            ...intent
        });
    }

    async remove_background(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        await this.logActivity('image_remove_bg', 'pending', { source: params.image ? 'provided' : 'prompt' });
        // This uses the modelRouter translation to DETR masking
        return await this.callAI({ type: 'remove_background', prompt: params.image || params.prompt, ...intent });
    }

    async segment(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        await this.logActivity('image_segment', 'pending', params);
        return await this.callAI({ type: 'remove_background', prompt: params.image || params.prompt, options: { mode: 'segment' }, ...intent });
    }

    async variation(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        return await this.callAI({ type: 'image', prompt: `Variation of: ${params.prompt}`, ...params, ...intent });
    }

    async restore(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        return await this.callAI({ type: 'image', prompt: `Restore and heal textures: ${params.prompt}`, ...params, ...intent });
    }

    async vector(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        return await this.callAI({ type: 'image', prompt: `Vector trace: ${params.prompt}`, options: { format: 'svg' }, ...intent });
    }

    async pbr(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        await this.logActivity('image_pbr', 'pending', params);

        const albedo = await this.callAI({ type: 'image', prompt: `Albedo texture map for ${params.prompt}, flat lighting, seamless`, ...intent });
        const normal = await this.callAI({ type: 'image', prompt: `Normal map for ${params.prompt}, blue-purple tint, high detail`, ...intent });

        const result = {
            status: 'success',
            type: 'pbr_material',
            maps: { albedo: albedo.imageUrl, normal: normal.imageUrl },
            metadata: { prompt: params.prompt }
        };

        if (albedo.imageUrl) {
            await this.persistAsset('pbr_set', albedo.imageUrl, result);
        }
        return result;
    }

    async inspire_visual(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        const { sourceRelic, style } = params;

        let context = "";
        if (sourceRelic && sourceRelic.id) {
            context = `Source Inspiration: ${JSON.stringify(sourceRelic)}`;
        }

        const prompt = `Create a game asset based on this Ancient Relic: ${context}. 
        Style: ${style || 'Pixel Art'}. 
        Create a high-quality visual representation suitable for a modern RPG but respecting the relic's origins.`;

        await this.logActivity('image_inspire', 'pending', { prompt });

        const result = await this.callAI({ type: 'image', prompt, options: { style }, ...intent });

        if (result.imageUrl) {
            // Delegate fully to the hardened persistAsset in NeuralLimb
            // which handles http buffering and R2 hoisting natively.
            const finalUrl = await this.persistAsset('image', result.imageUrl, {
                parentRelic: sourceRelic?.id || 'genesis',
                style,
                ...result.metadata
            });

            result.imageUrl = finalUrl;
        }

        return result;
    }

    private async callAI(request: any) {
        try {
            const response: any = await modelRouter.route(request, this.env);
            const result = {
                status: 'success',
                imageUrl: response.imageUrl || response.url || response.content,
                metadata: {
                    model: response.model,
                    provider: response.provider,
                    prompt: request.prompt
                }
            };

            if (result.imageUrl) {
                result.imageUrl = await this.persistAsset('image', result.imageUrl, result.metadata);
            }

            return result;
        } catch (error) {
            console.warn('[ImageLimb] All providers failed. Activating Ghost Limb Emergency Protocol.', error);

            // Dynamic import to avoid circular dependencies if any (though WasmEmergencyService is standalone)
            const { WasmEmergencyService } = await import('../emergency/WasmEmergencyService');

            const emergencyUrl = WasmEmergencyService.generateEmergencyImage(request.prompt);

            return {
                status: 'emergency_fallback',
                imageUrl: emergencyUrl,
                metadata: {
                    model: 'ghost-limb-wasm',
                    provider: 'emergency',
                    prompt: request.prompt,
                }
            };
        }
    }

    /**
     * Specialized optimization for Images.
     * Focuses on palette reduction (07/Classic) and edge-based delivery.
     */
    async optimize(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.OPTIMIZE_SYSTEM);
        const { target, goal } = params;

        await this.logActivity('image_optimize', 'pending', { target, goal });

        // Logic: Use Cloudflare Images Flexible Variants or AI Palette Generation
        const prompt = `Optimize Image: ${target}
        Goal: ${goal}
        
        Sovereign Rule: THE SOURCE IS IMMUTABLE. 
        If target is 'relic://', you MUST NOT suggest changes to the original archive. 
        Instead, perform a non-destructive transformation in the Innovation Layer.
        
        Strategy: Use Cloudflare Workers to perform transformations.
        If goal is "Classic Palette", restrict to 256 colors using RSC-compatible dithering.
        If goal is "Compression", optimize for sub-100kb delivery.`;

        const result: any = await modelRouter.route({
            type: 'code',
            prompt,
            ...intent
        }, this.env);

        await this.logActivity('image_optimize', 'success', { target, goal });

        return {
            status: 'success',
            target,
            goal,
            resultUrl: target, // Placeholder for transformed URL
            transformation: result.content,
            metadata: {
                ...result.metadata,
                optimizationType: 'image_palette'
            }
        };
    }

    // ==================== OPTIMIZED IMAGE OPERATIONS ====================

    /**
     * List all images in the innovation layer.
     * Provides gallery listing for ImageWorkspace.
     */
    async inventory_images(params?: any) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);

        await this.logActivity('image_inventory', 'pending', {});

        const root = 'innovations/image';

        if (this.env?.ASSETS_BUCKET) {
            try {
                const list = await this.env.ASSETS_BUCKET.list({ prefix: root + '/' });
                const images = list.objects.map((o: any) => ({
                    id: o.key.split('/').pop()?.replace(/\.[^/.]+$/, ''),
                    key: o.key,
                    size: o.size,
                    uploaded: o.uploaded,
                    url: `/ai/assets/${o.key}`,
                    thumbnailUrl: `/ai/assets/${o.key}?width=150`,
                    source: 'cloud'
                }));

                await this.logActivity('image_inventory', 'success', { count: images.length });

                return {
                    status: 'success',
                    count: images.length,
                    images
                };
            } catch (e: any) {
                console.warn('[ImageLimb] R2 inventory failed:', e.message);
            }
        }

        return { status: 'success', count: 0, images: [], note: 'Image storage unavailable.' };
    }

    /**
     * Extract color palette from a relic asset.
     * Directly parses RSC sprite colors without AI overhead.
     */
    async extract_palette(params: { relicId: string; maxColors?: number }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        const { relicId, maxColors = 16 } = params;

        await this.logActivity('image_extract_palette', 'pending', { relicId });

        // Use direct relic access for speed
        const relicData = await this.getRelicContent(relicId, 'sprite');

        if (relicData?.palette) {
            await this.logActivity('image_extract_palette', 'success', { relicId, source: 'direct' });
            return {
                status: 'success',
                relicId,
                palette: relicData.palette.slice(0, maxColors),
                colorCount: Math.min(relicData.palette.length, maxColors),
                source: 'relic_direct'
            };
        }

        // Fallback: Use AI to analyze the image
        const aiResult: any = await this.cachedRoute({
            type: 'text',
            prompt: `Analyze relic asset ${relicId} and extract the dominant ${maxColors} colors as hex values. Return as JSON array.`,
            ...intent
        });

        let palette: string[] = [];
        try {
            const parsed = JSON.parse(aiResult.content.replace(/```json\n?|\n?```/g, '').trim());
            palette = Array.isArray(parsed) ? parsed : parsed.palette || [];
        } catch (e) {
            // Generate placeholder palette
            palette = ['#8B4513', '#228B22', '#4169E1', '#FFD700', '#DC143C', '#2F4F4F'];
        }

        await this.logActivity('image_extract_palette', 'success', { relicId, source: 'ai' });

        return {
            status: 'success',
            relicId,
            palette: palette.slice(0, maxColors),
            colorCount: palette.length,
            source: 'ai_analysis'
        };
    }

    /**
     * Generate a seamlessly tileable texture.
     * Useful for terrain and material generation.
     */
    async tile_texture(params: { prompt: string; size?: number }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        const { prompt, size = 256 } = params;

        await this.logActivity('image_tile_texture', 'pending', { prompt, size });

        const enhancedPrompt = `Seamless tileable texture: ${prompt}. 
            Must tile perfectly in all directions. 
            ${size}x${size} pixels. 
            No visible seams or edges.`;

        const result = await this.callAI({
            type: 'image',
            prompt: enhancedPrompt,
            options: { size: `${size}x${size}`, seamless: true },
            ...intent
        });

        await this.logActivity('image_tile_texture', 'success', { prompt });

        return {
            ...result,
            type: 'tileable_texture',
            size
        };
    }

    /**
     * Batch generate multiple images in parallel.
     * Optimized for bulk content creation.
     */
    async batch_generate(params: { prompts: string[]; options?: any }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        const { prompts, options = {} } = params;

        await this.logActivity('image_batch_generate', 'pending', { count: prompts.length });

        const results = await this.batchRoute(
            prompts.map(prompt => ({
                type: 'image',
                prompt,
                ...options,
                ...intent
            }))
        );

        await this.logActivity('image_batch_generate', 'success', { count: results.length });

        return {
            status: 'success',
            count: results.length,
            results: results.map((r: any, i: number) => ({
                prompt: prompts[i],
                imageUrl: r.imageUrl || r.url || r.content,
                metadata: r
            }))
        };
    }
}

