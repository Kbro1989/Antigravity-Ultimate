import React, { useState, useEffect } from 'react';
import { useServiceHub, useNotification } from '../../hooks';
import { useStateManager } from '../../../services/core/StateManager';
import type { SynthEngine } from '../../services/SynthEngine';

interface AudioTrack {
    id: 'drums' | 'bass' | 'synth' | 'voice';
    name: string;
    active: boolean;
    volume: number;
    color: string;
    waveform: number[];
}

function WaveformLane({ track, isPlaying }: { track: AudioTrack; isPlaying: boolean }) {
    const glowColor = track.color === 'cyan' ? 'var(--neon-cyan)' : track.color === 'magenta' ? 'var(--neon-magenta)' : track.color === 'purple' ? 'var(--neon-purple)' : 'var(--neon-cyan)';
    const [mockBars, setMockBars] = useState(track.waveform);

    useEffect(() => {
        if (isPlaying && track.active) {
            const interval = setInterval(() => {
                setMockBars(prev => prev.map(b => Math.max(10, Math.min(100, b + (Math.random() - 0.5) * 20))));
            }, 100);
            return () => clearInterval(interval);
        }
    }, [isPlaying, track.active]);

    return (
        <div className={`flex items-center gap-6 p-5 rounded-[32px] transition-all duration-700 border ${track.active ? 'bg-white/5 border-white/10 shadow-xl' : 'opacity-20 border-transparent scale-[0.98]'}`}>
            <div className="flex flex-col gap-1 w-32">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-1" style={{ color: glowColor }}>{track.name}</div>
                <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: glowColor, boxShadow: `0 0 10px ${glowColor}` }} />
                    <span className="text-[7px] font-mono text-white/40 uppercase tracking-widest">TRUTH_SYNC_0{track.id === 'drums' ? 1 : track.id === 'bass' ? 2 : track.id === 'synth' ? 3 : 4}</span>
                </div>
            </div>

            <div className="flex-1 h-20 glass rounded-2xl overflow-hidden flex items-end gap-[2px] p-3 relative group border border-white/5 bg-black/40">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                {isPlaying && <div className="absolute top-0 bottom-0 w-[1px] bg-white shadow-[0_0_20px_white] z-10 animate-scan-slow opacity-60" />}
                {mockBars.map((bar, i) => (
                    <div key={i} className="flex-1 rounded-full transition-all duration-150"
                        style={{
                            height: `${bar}%`,
                            backgroundColor: track.active ? glowColor : 'rgba(255,255,255,0.05)',
                            opacity: isPlaying && track.active ? 0.8 : 0.3,
                            boxShadow: isPlaying && track.active && bar > 70 ? `0 0 15px ${glowColor}` : 'none'
                        }}
                    />
                ))}
            </div>

            <div className="flex items-center gap-4 px-4">
                <div className="flex flex-col items-center gap-1">
                    <span className="text-[7px] font-black text-white/20 uppercase tracking-widest">Gain</span>
                    <div className="w-1 h-12 bg-white/5 rounded-full relative overflow-hidden">
                        <div className="absolute bottom-0 w-full bg-white/40 transition-all" style={{ height: `${track.volume * 100}%` }} />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <button className={`w-9 h-9 rounded-xl glass border transition-all flex items-center justify-center text-[9px] font-black ${track.active ? 'border-neon-cyan/40 text-neon-cyan' : 'border-white/5 text-white/20'}`}>M</button>
                </div>
            </div>
        </div>
    );
}

function FXKnob({ label, value, color = 'var(--neon-cyan)' }: { label: string; value: number; color?: string }) {
    const rotation = (value / 100) * 270 - 135;
    return (
        <div className="flex flex-col items-center gap-4 group cursor-pointer">
            <div className="w-20 h-20 rounded-full border border-white/5 relative flex items-center justify-center glass-ultra shadow-2xl transition-all group-hover:border-white/20">
                <div className="absolute inset-2 rounded-full border border-white/5 border-dashed animate-spin-slow opacity-20" />
                <div className="absolute w-1 h-5 top-2 rounded-full origin-bottom transition-transform duration-700 shadow-[0_0_15px_currentColor]" style={{ transform: `rotate(${rotation}deg) translateY(2px)`, backgroundColor: color, color }} />
                <div className="w-12 h-12 rounded-full bg-black/40 shadow-inner flex items-center justify-center">
                    <div className="text-[8px] font-mono text-white/40">{value}%</div>
                </div>
            </div>
            <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white group-hover:tracking-[0.4em] transition-all">{label}</div>
        </div>
    );
}

export function AudioWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const { sourceRelic } = useStateManager();
    const [isPlaying, setIsPlaying] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [activeAudioTab, setActiveAudioTab] = useState<'studio' | 'refinery'>('studio');
    const [texturePrompt, setTexturePrompt] = useState('');
    const [selectedPersona, setSelectedPersona] = useState('Architect Core');

    const [tracks, setTracks] = useState<AudioTrack[]>([
        { id: 'drums', name: 'Truth Core', active: true, volume: 0.8, color: 'magenta', waveform: Array(50).fill(0).map(() => Math.random() * 80 + 20) },
        { id: 'bass', name: 'Sub Pulse', active: true, volume: 0.9, color: 'cyan', waveform: Array(50).fill(0).map(() => Math.random() * 60 + 20) },
        { id: 'synth', name: 'Neural Lead', active: true, volume: 0.7, color: 'purple', waveform: Array(50).fill(0).map(() => Math.random() * 90 + 10) },
        { id: 'voice', name: 'AI Voiceover', active: true, volume: 1.0, color: 'cyan', waveform: Array(50).fill(0).map(() => Math.random() * 40 + 10) },
    ]);

    const [mode, setMode] = useState<'SYNTH' | 'VOICEOVER'>('SYNTH');

    // --- Synth Engine Integration ---
    const synthRef = React.useRef<SynthEngine | null>(null);
    const audioRef = React.useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        import('../../services/SynthEngine').then(({ SynthEngine }) => {
            synthRef.current = new SynthEngine();
        });
        return () => {
            if (synthRef.current) synthRef.current.stop();
        };
    }, []);

    useEffect(() => {
        const handlePlayback = async () => {
            if (!audioUrl) return;
            if (synthRef.current) synthRef.current.stop();
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }

            if (isPlaying) {
                const isSynthManifest = audioUrl.endsWith('.json') || audioUrl.includes('audio/synth');
                if (isSynthManifest && synthRef.current) {
                    try {
                        await synthRef.current.play(audioUrl);
                    } catch (e) {
                        setIsPlaying(false);
                        addNotification('error', 'Synth Playback Failed');
                    }
                } else if (audioRef.current) {
                    audioRef.current.src = audioUrl;
                    audioRef.current.play().catch(() => setIsPlaying(false));
                }
            }
        };
        handlePlayback();
    }, [isPlaying, audioUrl]);

    const handleIgnite = async () => {
        if (!isPlaying) {
            setIsGenerating(true);
            try {
                addNotification('info', `Sonic Refinery: Grounding sequence in relic://${sourceRelic?.id || 'genesis'}`);
                const result = await callLimb('audio', 'audio_generate', {
                    prompt,
                    options: {
                        title: 'Neural Genesis',
                        sourceRelic: sourceRelic || { id: 'default', type: 'oscillator' },
                        fidelity: 'PRO_GRADE'
                    }
                }) as any;

                if (result.status === 'success') {
                    setAudioUrl(result.audioUrl);
                    setIsPlaying(true);
                    addNotification('success', `Audio synthesized: Grounded in Truth`);
                }
            } catch (e: any) {
                addNotification('error', `Sonic Fault: ${e.message}`);
            } finally {
                setIsGenerating(false);
            }
        } else {
            setIsPlaying(false);
        }
    };

    const handleVoiceover = async () => {
        setIsGenerating(true);
        try {
            addNotification('info', `Divine Voice: Synthesizing narrative overlay...`);
            const result = await callLimb('audio', 'audio_process_audio', {
                operation: 'voiceover',
                parameters: {
                    text: prompt || "Welcome to the scoured reality. The archive is open.",
                    voice: 'ARCHITECT_CORE'
                }
            }) as any;

            if (result.status === 'success') {
                setAudioUrl(result.audioUrl);
                setIsPlaying(true);
                addNotification('success', `Voiceover Manifested`);
            }
        } catch (e: any) {
            addNotification('error', `Vocal Fault: ${e.message}`);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Transport Header */}
            <div className="h-28 border-b border-white/5 flex items-center px-10 gap-8 bg-black/60 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-neon-magenta/5 pointer-events-none" />
                <div className="flex-1 max-w-2xl relative z-10">
                    <div className="flex gap-4 mb-3">
                        <button
                            onClick={() => setActiveAudioTab('studio')}
                            className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeAudioTab === 'studio' ? 'bg-white text-black shadow-[0_0_20px_white]' : 'bg-white/5 text-white/40 hover:text-white'}`}
                        >
                            Logic Studio
                        </button>
                        <button
                            onClick={() => setActiveAudioTab('refinery')}
                            className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeAudioTab === 'refinery' ? 'bg-neon-magenta text-white shadow-[0_0_20px_rgba(255,0,225,0.3)]' : 'bg-white/5 text-white/40 hover:text-white'}`}
                        >
                            Sonic Refinery
                        </button>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex gap-2 bg-black/40 p-1.5 rounded-2xl border border-white/5 shadow-inner">
                            <button onClick={() => setMode('SYNTH')} className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${mode === 'SYNTH' ? 'bg-white/10 text-white' : 'text-white/20 hover:text-white'}`}>Synth</button>
                            <button onClick={() => setMode('VOICEOVER')} className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${mode === 'VOICEOVER' ? 'bg-white/10 text-white' : 'text-white/20 hover:text-white'}`}>Voice</button>
                        </div>
                        <input
                            value={prompt} onChange={(e) => setPrompt(e.target.value)}
                            placeholder={mode === 'SYNTH' ? "Define sonic vectors..." : "Enter narrative text..."}
                            className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-3 text-[11px] text-neon-cyan outline-none focus:border-neon-cyan/50 transition-all font-mono shadow-inner"
                        />
                    </div>
                </div>
                <button onClick={mode === 'SYNTH' ? handleIgnite : handleVoiceover} disabled={isGenerating}
                    className={`h-16 px-12 rounded-2xl font-black uppercase text-[11px] tracking-[0.4em] transition-all shadow-2xl relative z-10
                        ${isPlaying ? 'bg-neon-magenta text-white hover:shadow-[0_0_40px_rgba(255,0,225,0.4)]' : 'bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_40px_rgba(0,242,255,0.4)]'}
                    `}
                >
                    {isGenerating ? 'Synthesizing...' : isPlaying ? 'Stop Master' : 'Ignite Engine'}
                </button>
            </div>



            <audio ref={audioRef} className="hidden" onEnded={() => setIsPlaying(false)} onError={() => setIsPlaying(false)} />


            <div className="flex-1 flex overflow-hidden p-8 gap-8">
                {activeAudioTab === 'studio' ? (
                    <>
                        {/* Timeline Surface */}
                        <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-4 animate-in fade-in slide-in-from-left-4 duration-500">
                            <div className="flex justify-between items-center mb-2 px-2">
                                <div className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20">Sonic Refinery Studio v7.0</div>
                                <div className="text-[9px] font-mono text-neon-cyan opacity-40 uppercase tracking-widest">
                                    {sourceRelic ? `TRUTH_ANCHOR: relic://${sourceRelic.id}` : 'FLOATING_CONTEXT'}
                                </div>
                            </div>
                            <div className="space-y-4">
                                {tracks.map(t => <WaveformLane key={t.id} track={t} isPlaying={isPlaying} />)}
                            </div>
                        </div>

                        {/* Side Rack */}
                        <div className="w-[400px] flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            {/* Master Visualizer */}
                            <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 relative overflow-hidden bg-white/5 backdrop-blur-3xl">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Master Bus Output</div>
                                <div className="h-40 glass rounded-3xl bg-black/60 flex items-end gap-[3px] p-6 border border-white/5">
                                    {Array(30).fill(0).map((_, i) => (
                                        <div key={i} className="flex-1 bg-gradient-to-t from-neon-purple to-neon-cyan rounded-full transition-all duration-75"
                                            style={{ height: isPlaying ? `${Math.max(10, Math.random() * 100)}%` : '5%' }}
                                        />
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 glass rounded-2xl border border-white/5 flex flex-col gap-1">
                                        <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">RMS Power</span>
                                        <span className="text-sm font-black text-white">-12.4dB</span>
                                    </div>
                                    <div className="p-4 glass rounded-[24px] border border-white/5 flex flex-col gap-1 bg-cyan-500/5">
                                        <span className="text-[9px] font-black text-neon-cyan uppercase tracking-widest">Groundedness</span>
                                        <span className="text-sm font-black text-white">{sourceRelic ? '100% Truth' : '0.42 Latent'}</span>
                                    </div>
                                </div>
                            </div>

                            {/* FX Controls */}
                            <div className="flex-1 glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 bg-white/5 backdrop-blur-3xl">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Neural FX Rack</div>
                                <div className="grid grid-cols-2 gap-y-10">
                                    <FXKnob label="Diffusion" value={65} color="var(--neon-cyan)" />
                                    <FXKnob label="Exciter" value={42} color="var(--neon-magenta)" />
                                    <FXKnob label="Spectral" value={88} color="var(--neon-purple)" />
                                    <FXKnob label="Conduction" value={12} color="var(--neon-cyan)" />
                                </div>
                                <button className="mt-auto w-full py-4 glass rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:border-white/20 transition-all">Export Reality Manifest</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex-1 glass-ultra rounded-[40px] p-10 border border-white/5 shadow-2xl flex flex-col gap-10 bg-white/5 backdrop-blur-3xl">
                            <div className="space-y-6">
                                <div className="text-[10px] font-black uppercase tracking-[0.6em] text-neon-magenta border-b border-neon-magenta/20 pb-4">Sonic Texture Synthesis</div>
                                <textarea
                                    value={texturePrompt}
                                    onChange={(e) => setTexturePrompt(e.target.value)}
                                    placeholder="Describe the sonic atmosphere (e.g., 'Ethereal crystal cavern with rhythmic water droplets')..."
                                    className="w-full h-40 bg-black/40 border border-white/10 rounded-3xl p-6 text-[13px] font-mono text-white/70 outline-none focus:border-neon-magenta/40 transition-all resize-none shadow-inner"
                                />
                            </div>

                            <div className="space-y-6">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Vocal Persona Selection</div>
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { id: 'arch', label: 'Architect Core', icon: '🏛️' },
                                        { id: 'oracle', label: 'RSC Oracle', icon: '🔮' },
                                        { id: 'void', label: 'Void Whisper', icon: '🌌' }
                                    ].map(persona => (
                                        <button
                                            key={persona.id}
                                            onClick={() => setSelectedPersona(persona.label)}
                                            className={`p-6 glass rounded-2xl border flex flex-col items-center gap-3 transition-all group ${selectedPersona === persona.label ? 'border-neon-magenta bg-neon-magenta/5 shadow-[0_0_20px_rgba(255,0,225,0.2)]' : 'border-white/5 hover:border-white/20'}`}
                                        >
                                            <span className="text-2xl group-hover:scale-125 transition-transform">{persona.icon}</span>
                                            <span className={`text-[9px] font-black uppercase tracking-widest transition-colors ${selectedPersona === persona.label ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>{persona.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Media Extraction (Cloudflare Native)</div>
                                <div className="p-6 glass rounded-3xl border border-white/5 flex items-center justify-between group hover:border-neon-cyan/40 transition-all cursor-pointer">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[11px] font-black text-neon-cyan uppercase tracking-widest">Audio Mode (M4A)</span>
                                        <span className="text-[8px] text-white/40 uppercase font-mono">mode=audio | time=0s | duration=60s</span>
                                    </div>
                                    <div className="px-4 py-2 glass rounded-xl border border-white/10 text-[9px] font-black text-white hover:bg-white hover:text-black">Extract_from_Video</div>
                                </div>
                                <div className="text-[8px] font-mono text-white/20 px-2 italic">
                                    * Optimized for AI inference/transcription. Max duration: 60s.
                                </div>
                            </div>

                            <div className="mt-auto flex gap-4">
                                <button
                                    onClick={handleIgnite}
                                    disabled={isGenerating || !texturePrompt}
                                    className="flex-1 py-6 rounded-3xl bg-neon-magenta text-white font-black text-xs tracking-[0.6em] uppercase shadow-[0_0_40px_rgba(255,0,225,0.4)] hover:scale-[1.02] transition-all disabled:opacity-20 disabled:grayscale"
                                >
                                    Synthesize Atmosphere
                                </button>
                                <button
                                    onClick={() => handleVoiceover()}
                                    disabled={isGenerating}
                                    className="px-12 py-6 rounded-3xl glass border border-white/10 text-white font-black text-xs tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all"
                                >
                                    Narrate
                                </button>
                            </div>
                        </div>

                        <div className="w-[350px] space-y-6">
                            <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-6 bg-white/5 backdrop-blur-3xl h-full">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Atmospheric DNA</div>
                                <div className="flex-1 space-y-6 overflow-y-auto pr-2">
                                    {[
                                        { label: 'Spectral Density', val: 78, color: 'magenta' },
                                        { label: 'Temporal Drift', val: 24, color: 'cyan' },
                                        { label: 'Resonance Force', val: 56, color: 'purple' },
                                        { label: 'Truth Alignment', val: 92, color: 'cyan' }
                                    ].map(stat => (
                                        <div key={stat.label} className="space-y-2">
                                            <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-white/30">
                                                <span>{stat.label}</span>
                                                <span style={{ color: `var(--neon-${stat.color})` }}>{stat.val}%</span>
                                            </div>
                                            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full transition-all duration-1000" style={{ width: `${stat.val}%`, backgroundColor: `var(--neon-${stat.color})`, boxShadow: `0 0 10px var(--neon-${stat.color})` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-black/40 rounded-2xl border border-white/5 text-[9px] font-mono text-white/30 leading-relaxed italic">
                                    "Neural weights adjusted for {selectedPersona} bias. Sonic grounding achieved via relic://{sourceRelic?.id || 'null'}."
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}
