import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';

export class AudioLimb extends NeuralLimb {
    async process(intent: any) {
        const { action, prompt, options } = intent;
        await this.logActivity(`audio_${action}`, 'pending', { prompt, options });

        try {
            switch (action) {
                // Music Generation (Suno Tier)
                case 'generate_music':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callMedia('audio', prompt, { ...options, type: 'music' });

                // SFX Generation (ElevenLabs Tier)
                case 'generate_sfx':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    if (prompt.toLowerCase().includes('legacy') || prompt.toLowerCase().includes('rsc')) {
                        const { getClassicRSMV } = await import('../../rsmv');
                        const rsc = await getClassicRSMV();
                        // Attempt to extract a sound (id 1 as a test or derivative)
                        const legacySound = await rsc.loadAudio(1);
                        if (legacySound) {
                            await this.persistAsset('audio', `rsc://audio_1`, { source: 'rsc', prompt });
                            return { status: 'success', audioUrl: 'rsc://audio_1', synthesized: false, legacy: true };
                        }
                    }
                    return await this.callMedia('audio', prompt, { ...options, type: 'sfx' });

                // Voice Synthesis (ElevenLabs Tier)
                case 'synthesize_speech':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callMedia('audio', prompt, { ...options, type: 'speech' });

                // Ambiance (Stable Audio Tier)
                case 'generate_ambiance':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callMedia('audio', prompt, { ...options, type: 'ambiance' });

                case 'remix':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    // If router serves remix, we pass it. If not, it might fallback or fail.
                    // But we try to route it.
                    return await this.callMedia('audio', prompt, { ...options, type: 'remix' });

                case 'synthesize_audio':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    await this.logActivity(`audio_synthesis`, 'pending', { prompt });
                    const audio = await this.callMedia('audio', prompt, { ...options, loop: true, highRes: true });

                    await this.persistAsset('audio_stem', audio.audioUrl!, { prompt, loop: true });
                    return { ...audio, synthesized: true, type: 'loopable_stem' };

                default:
                    throw new Error(`Unknown audio action: ${action}`);
            }
        } catch (e: any) {
            await this.logActivity(`audio_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
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
