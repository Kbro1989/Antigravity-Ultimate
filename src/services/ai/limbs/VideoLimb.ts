import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';

export class VideoLimb extends NeuralLimb {
    async process(intent: any) {
        const { action, prompt, options } = intent;
        await this.logActivity(`video_${action}`, 'pending', { prompt, options });

        try {
            switch (action) {
                case 'generate_video':
                case 'text_to_video':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callMedia('video', prompt, { ...options, mode: 'text-to-video' });

                case 'image_to_video':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callMedia('video', `Animate this image: ${options?.imageUrl || prompt}`, { ...options, mode: 'image-to-video' });

                case 'upscale':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callMedia('video', `Upscale video at ${options?.sourceUrl || prompt} to ${intent.target_resolution || '4K'}`, { ...options, mode: 'upscale' });

                case 'interpolate':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callMedia('video', `Interpolate video for ${options?.targetFps || 60} fps: ${prompt}`, { ...options, mode: 'interpolate' });

                case 'lip_sync':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callMedia('video', `Perform lip sync for: ${prompt}`, { ...options, mode: 'lip-sync' });

                default:
                    throw new Error(`Unknown video action: ${action}`);
            }
        } catch (e: any) {
            await this.logActivity(`video_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
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
