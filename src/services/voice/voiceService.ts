// VoiceService - Real implementation using Workers AI
import { modelRegistry } from '../ai/ModelRegistry';

export interface VoicePreset {
    id: string;
    name: string;
    category: string;
    language?: string;
}

export const VOICE_PRESETS: VoicePreset[] = [
    // English voices
    { id: 'asteria', name: 'Asteria', category: 'English', language: 'en' },
    { id: 'luna', name: 'Luna', category: 'English', language: 'en' },
    { id: 'stella', name: 'Stella', category: 'English', language: 'en' },
    { id: 'athena', name: 'Athena', category: 'English', language: 'en' },
    { id: 'hera', name: 'Hera', category: 'English', language: 'en' },
    { id: 'orion', name: 'Orion', category: 'English', language: 'en' },
    { id: 'arcas', name: 'Arcas', category: 'English', language: 'en' },
    { id: 'perseus', name: 'Perseus', category: 'English', language: 'en' },
    // Spanish voices
    { id: 'maria', name: 'Maria', category: 'Spanish', language: 'es' },
    { id: 'diego', name: 'Diego', category: 'Spanish', language: 'es' },
];

// Legacy export for backwards compatibility
export const MOCK_VOICES = VOICE_PRESETS;

export class VoiceService {
    private static instance: VoiceService;
    private aiBinding: Ai | null = null;

    static getInstance(): VoiceService {
        if (!VoiceService.instance) {
            VoiceService.instance = new VoiceService();
        }
        return VoiceService.instance;
    }

    /**
     * Initialize with Workers AI binding
     */
    setAIBinding(ai: Ai): void {
        this.aiBinding = ai;
    }

    async getVoices(): Promise<VoicePreset[]> {
        return VOICE_PRESETS;
    }

    /**
     * Synthesize text to speech using Deepgram Aura-2
     */
    async synthesize(text: string, voiceId: string): Promise<Blob> {
        const voice = VOICE_PRESETS.find(v => v.id === voiceId) ?? VOICE_PRESETS[0];
        const isSpanish = voice.language === 'es';

        // Get the appropriate model from registry
        const model = modelRegistry.getModel('textToSpeech', isSpanish ? 'spanish' as any : 'default');

        if (!this.aiBinding) {
            console.warn('[VoiceService] No AI binding available, returning empty audio');
            return new Blob([], { type: 'audio/wav' });
        }

        try {
            const response = await this.aiBinding.run(model.id as any, {
                text,
            });

            // Deepgram returns audio data directly
            if (response instanceof ArrayBuffer) {
                return new Blob([response], { type: 'audio/wav' });
            }

            // Handle ReadableStream response
            if (response instanceof ReadableStream) {
                const reader = response.getReader();
                const chunks: Uint8Array[] = [];
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    chunks.push(value);
                }
                return new Blob(chunks as any[], { type: 'audio/wav' });
            }

            return new Blob([response as any], { type: 'audio/wav' });
        } catch (error) {
            console.error('[VoiceService] TTS synthesis failed:', error);
            throw error;
        }
    }

    /**
     * Transcribe audio to text using Deepgram Nova-3 or Whisper
     */
    async transcribe(audio: Blob, quality: 'fast' | 'quality' = 'fast'): Promise<string> {
        const model = modelRegistry.getModel('speechToText', quality);

        if (!this.aiBinding) {
            console.warn('[VoiceService] No AI binding available');
            return '';
        }

        try {
            const arrayBuffer = await audio.arrayBuffer();
            const response = await this.aiBinding.run(model.id as any, {
                audio: [...new Uint8Array(arrayBuffer)],
            });

            return (response as any).text ?? '';
        } catch (error) {
            console.error('[VoiceService] Transcription failed:', error);
            throw error;
        }
    }
}
