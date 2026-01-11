import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';
import { BaseIntent } from '../AITypes';

export class AudioLimb extends NeuralLimb {

    async generate(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt, options } = params;
        await this.logActivity('audio_generate', 'pending', { prompt });

        // Differentiate Intent
        // If it looks like speech, use Melotts. If music/sfx, use Synth Manifest.
        const isSpeech = prompt.toLowerCase().includes('say') || prompt.toLowerCase().includes('speak') || prompt.toLowerCase().includes('voice');

        if (isSpeech || options?.type === 'speech') {
            return await this.generateSpeech(prompt, options, intent);
        } else {
            return await this.generateSynthManifest(prompt, options, intent);
        }
    }

    async stems(params: any, intent: BaseIntent) {
        // Stems are complex, we will generate a multi-track Synth Manifest
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt, options } = params;
        await this.logActivity('audio_stems', 'pending', { prompt });
        return await this.generateSynthManifest(prompt, { ...options, layers: true }, intent);
    }

    async clone(params: any, intent: BaseIntent) {
        // Clone = Speech with style
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt, options } = params;
        await this.logActivity('audio_clone', 'pending', { prompt });
        return await this.generateSpeech(prompt, options, intent);
    }

    async effects(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt, options } = params;
        await this.logActivity('audio_effects', 'pending', { prompt });
        return await this.generateSynthManifest(prompt, { ...options, type: 'fx' }, intent);
    }

    async inspire_audio(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { sourceRelic, mood } = params;
        const prompt = `Compose a theme for relic ${sourceRelic?.id || 'unknown'}: ${mood || 'Generic'}`;
        await this.logActivity('audio_inspire', 'pending', { prompt });
        return await this.generateSynthManifest(prompt, { type: 'music', inspiration: sourceRelic }, intent);
    }

    /**
     * Generates a "Speech" asset using Melotts via Cloudflare AI
     */
    private async generateSpeech(prompt: string, options: any, intent: BaseIntent) {
        const result = await modelRouter.orchestrateMedia('audio', prompt, this.env, { ...options, ...intent }) as any;

        if (result.audioUrl) {
            const finalUrl = await this.persistAsset('audio', result.audioUrl, {
                type: 'speech',
                model: '@cf/myshell/melotts',
                prompt
            });
            result.audioUrl = finalUrl;
        }
        return { ...result, type: 'speech' };
    }

    /**
     * Generates a "Synth Manifest" (JSON) for Music/SFX.
     * This describes the sound for a potential client-side oscillator or MIDI player.
     */
    private async generateSynthManifest(prompt: string, options: any, intent: BaseIntent) {
        // Ask LLM to design the sound
        const designPrompt = `Design a Retro Game Sound/Music for: "${prompt}".
        Return ONLY a JSON object with this structure:
        {
            "name": "Sound Name",
            "tempo": 120,
            "tracks": [
                { "type": "square|sawtooth|noise", "notes": [ {"note": "C4", "duration": 0.5}, ... ] }
            ],
            "description": "Short description"
        }`;

        const design = await modelRouter.route({
            type: 'text',
            prompt: designPrompt,
            modelId: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
            options: { json: true }
        }, this.env);

        let manifest = { name: 'Unknown', tracks: [] };
        try {
            // @ts-ignore
            const content = design.content || design;
            manifest = JSON.parse(content.substring(content.indexOf('{'), content.lastIndexOf('}') + 1));
        } catch (e) {
            manifest = { name: 'Parse Error', tracks: [] };
        }

        const creationId = `synth_${Date.now()}`;
        const stagedPath = `audio/synth/${creationId}.json`;

        // Save the manifest as the asset (Passing content explicitly for real persistence)
        const manifestContent = JSON.stringify(manifest, null, 2);
        const finalUrl = await this.persistAsset('audio', `staged://${stagedPath}`, {
            parentRelic: options?.inspiration?.id || 'genesis',
            synthType: options?.type || 'music',
            manifest
        }, manifestContent);

        return {
            status: 'success',
            audioUrl: finalUrl, // URL returned by persistAsset (R2 or Local)
            metadata: {
                model: 'llama-3.3-synth-designer',
                isSynth: true,
                manifest
            }
        };
    }

    async inventory_sounds(params?: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        const { localBridgeClient } = await import('../../bridge/LocalBridgeService');
        const root = 'C:/Users/Destiny/Desktop/New folder/POG-Ultimate/public/assets/generated/audios';

        try {
            const list = await localBridgeClient.listDirectory(root);
            if (!list.success || !list.files) return { status: 'success', count: 0, sounds: [] };

            const sounds = list.files
                .filter((f: any) => !f.isDirectory && (f.name.endsWith('.mp3') || f.name.endsWith('.wav') || f.name.endsWith('.json')))
                .map((f: any) => ({
                    id: f.name,
                    name: f.name.replace(/\.[^/.]+$/, ''),
                    format: f.name.split('.').pop(),
                    size: f.size || 0,
                    url: `/assets/generated/audios/${f.name}`,
                    playable: true
                }));

            return { status: 'success', count: sounds.length, sounds };
        } catch (e: any) {
            return { status: 'success', count: 0, sounds: [], error: e.message };
        }
    }
}
