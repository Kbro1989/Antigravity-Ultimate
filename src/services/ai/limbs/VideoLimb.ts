import { NeuralLimb, LimbConfig } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';
import { BaseIntent } from '../AITypes';

export class VideoLimb extends NeuralLimb {

    async render(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt, options } = params;
        await this.logActivity('video_render', 'pending', { prompt });
        return await this.callMedia('video', prompt, { ...options, mode: 'text-to-video', ...intent });
    }

    async render_cutscene(params: any, intent: BaseIntent) {
        return this.render(params, intent);
    }

    async edit(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt, options } = params;
        await this.logActivity('video_edit', 'pending', { prompt });
        return await this.callMedia('video', prompt, { ...options, mode: 'edit', ...intent });
    }

    async fx(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt, options } = params;
        await this.logActivity('video_fx', 'pending', { prompt });
        return await this.callMedia('video', prompt, { ...options, mode: 'fx', ...intent });
    }

    private async callMedia(type: 'audio' | 'video', prompt: string, options?: any) {
        const response: any = await modelRouter.orchestrateMedia(type, prompt, options);
        const result = {
            status: 'success',
            videoUrl: response.videoUrl || response.url || response.content,
            metadata: {
                model: response.model,
                provider: response.provider,
                cost: response.cost
            }
        };

        if (result.videoUrl) {
            await this.persistAsset('video', result.videoUrl, result.metadata);
        }

        return result;
    }
}
