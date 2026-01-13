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
}
