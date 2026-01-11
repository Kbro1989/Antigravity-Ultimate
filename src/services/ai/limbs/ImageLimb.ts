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
        return await this.callAI({ type: 'image', prompt: `Upscale: ${params.prompt}`, options: { upscale: true }, ...intent });
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
            const creationId = `img_${Date.now()}`;
            const stagedPath = `image/visuals/${creationId}.png`;

            // If the result gives us a URL, we should fetch it to get the buffer for reliable persistence
            // If it gives us base64 (often case with some providers), we pass that directly
            let contentToPersist: any = undefined;
            if (result.imageUrl.startsWith('data:')) {
                // It's base64, persistAsset handles this if passed as URL, but let's be explicit if possible
                // Actually `persistAsset` logic I wrote handles data URI in the URL field. 
                // So passing the URL is enough there.
            } else if (result.imageUrl.startsWith('http')) {
                // Fetch valid buffer so we don't rely on 'staged' mock logic
                try {
                    const resp = await fetch(result.imageUrl);
                    contentToPersist = await resp.arrayBuffer();
                } catch (e) {
                    console.warn("Failed to fetch image for persistence, falling back to URL reference", e);
                }
            }

            const finalUrl = await this.persistAsset('image', `staged://${stagedPath}`, {
                parentRelic: sourceRelic?.id || 'genesis',
                originalSource: result.imageUrl,
                ...result.metadata
            }, contentToPersist);

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
                    note: 'Generated by deterministic fallback protocol'
                }
            };
        }
    }
}
