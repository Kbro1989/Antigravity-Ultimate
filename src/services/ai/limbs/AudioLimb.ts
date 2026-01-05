import { NeuralLimb, LimbConfig } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';
import { BaseIntent } from '../AITypes';

export class AudioLimb extends NeuralLimb {

    async generate(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt, options } = params;
        await this.logActivity('audio_generate', 'pending', { prompt });
        return await this.callMedia('audio', prompt, { ...options, type: 'music', ...intent });
    }

    async stems(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt, options } = params;
        await this.logActivity('audio_stems', 'pending', { prompt });
        const result = await this.callMedia('audio', prompt, { ...options, type: 'stem', ...intent });
        if (result.audioUrl) {
            await this.persistAsset('audio_stem', result.audioUrl, { prompt, stems: true });
        }
        return result;
    }

    async clone(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt, options } = params;
        await this.logActivity('audio_clone', 'pending', { prompt });
        return await this.callMedia('audio', prompt, { ...options, type: 'speech', ...intent });
    }

    async effects(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt, options } = params;
        await this.logActivity('audio_effects', 'pending', { prompt });
        return await this.callMedia('audio', prompt, { ...options, type: 'fx', ...intent });
    }

    async inspire_audio(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { sourceRelic, mood } = params;

        let context = "";
        if (sourceRelic && sourceRelic.id) {
            context = `Source Inspiration: ${JSON.stringify(sourceRelic)}`;
        }

        const prompt = `Compose a musical theme based on this Ancient Relic: ${context}. 
        Mood: ${mood || 'Epic'}. 
        Translate the visual/lore vibe of the relic into an auditory experience.`;

        await this.logActivity('audio_inspire', 'pending', { prompt });

        // We route this as a standard generation but with the "inspiration" context
        const result = await this.callMedia('audio', prompt, { type: 'music', ...intent });

        if (result.audioUrl) {
            const creationId = `audio_${Date.now()}`;
            const stagedPath = `audio/themes/${creationId}.mp3`;
            // Persist with relic lineage
            await this.persistAsset('audio', `staged://${stagedPath}`, {
                parentRelic: sourceRelic?.id || 'genesis',
                ...result.metadata
            });
            result.audioUrl = `staged://${stagedPath}`; // Return the staged path for the playback
        }

        return result;
    }

    private async callMedia(type: 'audio' | 'video', prompt: string, options?: any) {
        const response: any = await modelRouter.orchestrateMedia(type, prompt, options);
        const result = {
            status: 'success',
            audioUrl: response.audioUrl || response.url || response.content,
            metadata: {
                model: response.model,
                provider: response.provider,
                cost: response.cost
            }
        };

        if (result.audioUrl) {
            await this.persistAsset('audio', result.audioUrl, result.metadata);
        }

        return result;
    }
}
