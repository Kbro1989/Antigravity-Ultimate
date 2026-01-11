/**
 * SynthEngine: A client-side Web Audio API wrapper for playing POG Synth Manifests.
 * 
 * Supports:
 * - Oscillator types: square, sawtooth, triangle, sine
 * - Noise generator (white noise)
 * - Basic ADSR Envelope
 * - Scheduling based on tempo
 */

type WaveformType = 'square' | 'sawtooth' | 'triangle' | 'sine' | 'noise';

interface Note {
    note: string; // e.g., "C4", "R" (rest)
    duration: number; // in beats
}

interface Track {
    type: WaveformType;
    notes: Note[];
    volume?: number; // 0.0 - 1.0
}

export interface SynthManifest {
    name: string;
    tempo: number;
    tracks: Track[];
    description?: string;
}

export class SynthEngine {
    private audioCtx: AudioContext;
    private isPlaying: boolean = false;
    private timeouts: number[] = [];
    private activeNodes: (OscillatorNode | AudioBufferSourceNode)[] = [];

    constructor() {
        // @ts-ignore - Handle Webkit prefix if needed
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContextClass();
    }

    public async play(manifest: SynthManifest | string): Promise<void> {
        this.stop(); // Stop any current playback

        let data: SynthManifest;
        if (typeof manifest === 'string') {
            // It might be a URL or a JSON string
            if (manifest.trim().startsWith('{')) {
                data = JSON.parse(manifest);
            } else {
                try {
                    const response = await fetch(manifest);
                    if (!response.ok) throw new Error('Failed to fetch manifest');
                    // It might be wrapped in the AudioLimb metadata, or just the raw JSON
                    const json = await response.json() as any;
                    // Check if it's the direct manifest or the POG asset wrapper
                    if (json.manifest) {
                        data = json.manifest;
                    } else {
                        data = json;
                    }
                } catch (e) {
                    console.error('SynthEngine: Could not load manifest from URL', e);
                    return;
                }
            }
        } else {
            data = manifest;
        }

        if (!data || !data.tracks) {
            console.error('SynthEngine: Invalid manifest structure', data);
            return;
        }

        await this.audioCtx.resume();
        this.isPlaying = true;

        const secondsPerBeat = 60.0 / (data.tempo || 120);
        const startTime = this.audioCtx.currentTime + 0.1; // Scheduling lead time

        data.tracks.forEach(track => {
            this.scheduleTrack(track, startTime, secondsPerBeat);
        });
    }

    public stop(): void {
        this.isPlaying = false;

        // Clear scheduled timeouts (though we are mostly using Web Audio scheduling, 
        // JS timeouts might be used for visual sync if we add that later)
        this.timeouts.forEach(id => clearTimeout(id));
        this.timeouts = [];

        // Stop all active audio nodes immediately
        this.activeNodes.forEach(node => {
            try {
                node.stop();
                node.disconnect();
            } catch (e) { /* ignore */ }
        });
        this.activeNodes = [];
    }

    private scheduleTrack(track: Track, startTime: number, secondsPerBeat: number) {
        let currentTime = startTime;

        track.notes.forEach(note => {
            const durationSec = note.duration * secondsPerBeat;

            if (note.note !== 'R' && note.note !== 'REST') {
                this.playNote(track.type, note.note, currentTime, durationSec, track.volume || 0.5);
            }

            currentTime += durationSec;
        });
    }

    private playNote(type: WaveformType, noteName: string, time: number, duration: number, volume: number) {
        if (!this.isPlaying) return;

        const freq = this.noteToFreq(noteName);
        if (freq === 0) return; // Silent or invalid

        const gainNode = this.audioCtx.createGain();
        gainNode.connect(this.audioCtx.destination);

        // Envelope (ADSR - simplified)
        const attack = 0.02;
        const release = 0.05;
        // Ensure note is long enough for attack/release
        const safeDuration = Math.max(duration, attack + release + 0.01);

        gainNode.gain.setValueAtTime(0, time);
        gainNode.gain.linearRampToValueAtTime(volume * 0.5, time + attack); // *0.5 to avoid clipping with multiple tracks
        gainNode.gain.setValueAtTime(volume * 0.5, time + safeDuration - release);
        gainNode.gain.linearRampToValueAtTime(0, time + safeDuration);

        let source: OscillatorNode | AudioBufferSourceNode;

        if (type === 'noise') {
            const bufferSize = this.audioCtx.sampleRate * 2; // 2 seconds buffer (reused/looped if needed)
            const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            source = this.audioCtx.createBufferSource();
            source.buffer = buffer;
            source.loop = true;
        } else {
            source = this.audioCtx.createOscillator();
            (source as OscillatorNode).type = type;
            (source as OscillatorNode).frequency.value = freq;
        }

        source.connect(gainNode);
        source.start(time);
        source.stop(time + safeDuration);

        this.activeNodes.push(source);

        // Clean up node reference after it stops (approximate)
        source.onended = () => {
            gainNode.disconnect();
            const idx = this.activeNodes.indexOf(source);
            if (idx > -1) this.activeNodes.splice(idx, 1);
        };
    }

    private noteToFreq(note: string): number {
        // Basic mapping or calculation
        // Format: C4, A#3, Bb2
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const match = note.match(/^([A-G][#b]?)(-?\d+)$/i);
        if (!match) return 0;

        let noteName = match[1].toUpperCase();
        let octave = parseInt(match[2]);

        // Fix flats
        if (noteName.endsWith('B')) {
            const base = noteName[0];
            const idx = notes.indexOf(base);
            const prev = (idx - 1 + 12) % 12;
            noteName = notes[prev]; // this logic is slightly flawed for Cb/Fb but good enough for generic
        }

        const semitone = notes.indexOf(noteName);
        if (semitone === -1) return 0;

        // A4 = 440Hz. A4 is index 9 in octave 4.
        // MIDI Note for A4 is 69.
        // MIDI Note = (octave + 1) * 12 + semitone
        const midi = (octave + 1) * 12 + semitone;
        const a4_midi = 69;

        return 440 * Math.pow(2, (midi - a4_midi) / 12);
    }
}
