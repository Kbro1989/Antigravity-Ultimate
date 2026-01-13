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

    async transcribe(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { audio } = params;
        await this.logActivity('audio_transcribe', 'pending', { hasAudio: !!audio });
        return await modelRouter.route({ type: 'stt', prompt: audio, ...intent }, this.env);
    }

    async analyze(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt, audioUrl } = params;
        await this.logActivity('audio_analyze', 'pending', { audioUrl });

        // Use reasoning model to analyze manifest or transcribed text
        return await modelRouter.route({
            type: 'text',
            prompt: `Analyze this audio request: "${prompt}". Provide BPM, Mood, and Genre in JSON.`,
            modelId: 'REASONING',
            ...intent
        }, this.env);
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
        try {
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
        } catch (error) {
            console.warn('[AudioLimb] Speech generation failed. Activating Wasm survival mode.', error);
            const { WasmEmergencyService } = await import('../emergency/WasmEmergencyService');
            const emergencyUrl = WasmEmergencyService.generateEmergencyAudio(prompt);

            return {
                status: 'emergency_fallback',
                audioUrl: emergencyUrl,
                type: 'speech',
                metadata: {
                    model: 'ghost-limb-wasm',
                    provider: 'emergency',
                    prompt
                }
            };
        }
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

        let manifest: any = { name: 'Unknown', tracks: [] };
        try {
            const design = await modelRouter.route({
                type: 'text',
                prompt: designPrompt,
                modelId: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
                options: { json: true }
            }, this.env);

            // Robust JSON extraction from LLM response
            const content = (design as any).content || design;
            const jsonMatch = typeof content === 'string' ? content.match(/\{[\s\S]*\}/) : null;
            if (jsonMatch) {
                manifest = JSON.parse(jsonMatch[0]);
            } else if (typeof content === 'object') {
                manifest = content;
            } else {
                throw new Error("No valid design data found in LLM response");
            }
        } catch (e) {
            console.warn("[AudioLimb] Synth Manifest design failed. Falling back to deterministic procedural audio.", e);
            const { WasmEmergencyService } = await import('../emergency/WasmEmergencyService');
            const emergencyUrl = WasmEmergencyService.generateEmergencyAudio(prompt);

            return {
                status: 'emergency_fallback',
                audioUrl: emergencyUrl,
                metadata: {
                    model: 'ghost-limb-wasm',
                    isSynth: false,
                    prompt
                }
            };
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

        const root = 'audio/generated'; // Normalized R2 prefix

        // 1. Try Cloud R2 (Primacy)
        if (this.env?.ASSETS_BUCKET) {
            try {
                const list = await this.env.ASSETS_BUCKET.list({ prefix: root + '/' });
                const sounds = list.objects
                    .filter((f: any) => f.key.endsWith('.mp3') || f.key.endsWith('.wav') || f.key.endsWith('.json'))
                    .map((f: any) => ({
                        id: f.key.split('/').pop(),
                        name: f.key.split('/').pop().replace(/\.[^/.]+$/, ''),
                        format: f.key.split('.').pop(),
                        size: f.size || 0,
                        url: `/ai/assets/${f.key}`,
                        playable: true,
                        source: 'cloud'
                    }));
                return { status: 'success', count: sounds.length, sounds };
            } catch (e: any) {
                console.warn(`[AudioLimb] R2 sweep failed: ${e.message}`);
            }
        }

        // 2. Legacy Bridge Fallback (Optional Extension)
        const bridge = await this.getBridge();
        if (!bridge) {
            return { status: 'success', count: 0, sounds: [], note: '[Sovereignty Alert] Local Bridge unavailable.' };
        }

        const localRoot = this.env?.LOCAL_ASSETS_ROOT || './public/assets/generated';
        const searchRoot = `${localRoot}/audios`;

        try {
            const list = await bridge.listDirectory(searchRoot);
            if (!list.success || !list.files) return { status: 'success', count: 0, sounds: [] };

            const sounds = list.files
                .filter((f: any) => !f.isDirectory && (f.name.endsWith('.mp3') || f.name.endsWith('.wav') || f.name.endsWith('.json')))
                .map((f: any) => ({
                    id: f.name,
                    name: f.name.replace(/\.[^/.]+$/, ''),
                    format: f.name.split('.').pop(),
                    size: f.size || 0,
                    url: `/assets/generated/audios/${f.name}`,
                    playable: true,
                    source: 'bridge'
                }));

            return { status: 'success', count: sounds.length, sounds };
        } catch (e: any) {
            return { status: 'success', count: 0, sounds: [], error: e.message };
        }
    }

    private async getBridge() {
        try {
            const { localBridgeClient } = await import('../../bridge/LocalBridgeService');
            return localBridgeClient;
        } catch (e) {
            return null;
        }
    }

    // ==================== OPTIMIZED AUDIO OPERATIONS ====================

    /**
     * Extract audio data from a relic asset.
     * Directly parses RSC MIDI/samples without AI overhead.
     */
    async extract_from_relic(params: { relicId: string }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AUDIO_OPERATIONS);
        const { relicId } = params;

        await this.logActivity('audio_extract_relic', 'pending', { relicId });

        // Use direct relic access for speed
        const relicData = await this.getRelicContent(relicId, 'audio');

        if (relicData) {
            await this.logActivity('audio_extract_relic', 'success', { relicId, source: 'direct' });
            return {
                status: 'success',
                relicId,
                audioUrl: `rsmv://relic:${relicId}`,
                format: relicData.format || 'midi',
                duration: relicData.duration || 0,
                data: relicData,
                source: 'relic_direct'
            };
        }

        // Fallback: Use AI to interpret the relic
        const synthManifest = await this.generateSynthManifest(
            `Sound effect based on relic asset: ${relicId}`,
            { action: 'extract', relicId },
            intent
        );

        await this.logActivity('audio_extract_relic', 'success', { relicId, source: 'synth' });

        return {
            status: 'success',
            relicId,
            synthManifest,
            source: 'ai_synthesis'
        };
    }

    /**
     * Batch synthesize multiple audio assets in parallel.
     * Optimized for bulk content creation.
     */
    async batch_synthesize(params: { prompts: string[]; type?: string }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AUDIO_OPERATIONS);
        const { prompts, type = 'sfx' } = params;

        await this.logActivity('audio_batch_synthesize', 'pending', { count: prompts.length });

        const results = await Promise.all(
            prompts.map(prompt =>
                this.generateSynthManifest(prompt, { type }, intent)
            )
        );

        await this.logActivity('audio_batch_synthesize', 'success', { count: results.length });

        return {
            status: 'success',
            count: results.length,
            results: results.map((r: any, i: number) => ({
                prompt: prompts[i],
                manifest: r,
                playable: true
            }))
        };
    }

    /**
     * Mix multiple audio tracks together.
     * Creates a layered audio composition.
     */
    async mix_tracks(params: { trackIds: string[]; levels?: number[] }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AUDIO_OPERATIONS);
        const { trackIds, levels } = params;

        await this.logActivity('audio_mix_tracks', 'pending', { trackCount: trackIds.length });

        // Generate a mix manifest for client-side processing
        const mixManifest = {
            id: `mix_${Date.now()}`,
            tracks: trackIds.map((id, i) => ({
                trackId: id,
                level: levels?.[i] ?? 1.0,
                pan: 0
            })),
            masterLevel: 1.0,
            format: 'mix_manifest'
        };

        await this.logActivity('audio_mix_tracks', 'success', { mixId: mixManifest.id });

        return {
            status: 'success',
            mixManifest,
            trackCount: trackIds.length
        };
    }
}

