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

            await this.persistAsset('image', `staged://${stagedPath}`, {
                parentRelic: sourceRelic?.id || 'genesis',
                ...result.metadata
            });
            result.imageUrl = `staged://${stagedPath}`;
        }

        return result;
    }

    private async callAI(request: any) {
        const response: any = await modelRouter.route(request);
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
            await this.persistAsset('image', result.imageUrl, result.metadata);
        }

        return result;
    }
}
