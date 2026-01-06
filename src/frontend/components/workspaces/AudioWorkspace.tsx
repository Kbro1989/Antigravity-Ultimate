import React, { useState, useEffect } from 'react';
import { useServiceHub, useNotification } from '../../hooks';
import { useStateManager } from '../../../services/core/StateManager';

interface AudioTrack {
    id: 'drums' | 'bass' | 'synth' | 'fx';
    name: string;
    active: boolean;
    volume: number;
    color: string;
    waveform: number[];
}

function WaveformLane({ track, isPlaying }: { track: AudioTrack; isPlaying: boolean }) {
    const glowColor = track.color === 'cyan' ? 'var(--neon-cyan)' : track.color === 'magenta' ? 'var(--neon-magenta)' : track.color === 'purple' ? 'var(--neon-purple)' : '#4ade80';
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
                    <span className="text-[7px] font-mono text-white/40 uppercase tracking-widest">LAYER_0{track.id === 'drums' ? 1 : track.id === 'bass' ? 2 : track.id === 'synth' ? 3 : 4}</span>
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
                    <button className="w-9 h-9 rounded-xl glass border border-white/5 text-[9px] font-black text-white/20 hover:text-white transition-all">S</button>
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

    const [tracks, setTracks] = useState<AudioTrack[]>([
        { id: 'drums', name: 'Rhythm Core', active: true, volume: 0.8, color: 'magenta', waveform: Array(50).fill(0).map(() => Math.random() * 80 + 20) },
        { id: 'bass', name: 'Sub Pulse', active: true, volume: 0.9, color: 'cyan', waveform: Array(50).fill(0).map(() => Math.random() * 60 + 20) },
        { id: 'synth', name: 'Neural Lead', active: true, volume: 0.7, color: 'purple', waveform: Array(50).fill(0).map(() => Math.random() * 90 + 10) },
        { id: 'fx', name: 'Atmosphere', active: false, volume: 0.5, color: 'green', waveform: Array(50).fill(0).map(() => Math.random() * 40 + 10) },
    ]);

    const [mode, setMode] = useState<'SYNTH' | 'INSPIRE'>('SYNTH');

    const handleIgnite = async () => {
        if (!isPlaying) {
            setIsGenerating(true);
            try {
                addNotification('info', 'Sonic Refinery: Generating Neural Audio Stems...');

                const result = await callLimb('audio', 'audio_generate', {
                    prompt,
                    options: {
                        title: 'Neural Genesis',
                        duration: '3:00',
                        bpm: 128,
                        sourceRelic: sourceRelic || { id: 'default', type: 'oscillator' }
                    }
                }) as any;

                if (result.status === 'success') {
                    setAudioUrl(result.audioUrl);
                    setIsPlaying(true);
                    addNotification('success', `Audio synthesized: ${result.title || 'Neural Genesis'}`);
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

    const handleInspire = async () => {
        setIsGenerating(true);
        try {
            const contextRelic = sourceRelic || { id: 'track_autumn_voyage', type: 'audio_config', tags: ['melancholy', 'flute', 'midi'] };

            addNotification('info', `Constructing composition from ${sourceRelic ? 'pinned relic' : 'archetype'}...`);
            const result = await callLimb('audio', 'audio_inspire_audio', {
                sourceRelic: contextRelic,
                mood: 'Epic Orchestral'
            });

            if (result.status === 'success') {
                setAudioUrl(result.audioUrl);
                setIsPlaying(true);
                addNotification('success', `Relic Theme Inspired`);
            }
        } catch (e: any) {
            addNotification('error', `Inspiration Fault: ${e.message}`);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Transport Header */}
            <div className="h-24 border-b border-white/5 flex items-center px-10 gap-8 bg-white/5 backdrop-blur-3xl shadow-2xl">
                <div className="w-14 h-14 rounded-3xl bg-neon-purple/20 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(188,0,255,0.2)] border border-neon-purple/30">🎻</div>
                <div className="flex-1 max-w-2xl">
                    <div className="flex gap-4 mr-4">
                        <button onClick={() => setMode('SYNTH')} className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${mode === 'SYNTH' ? 'bg-white text-black' : 'bg-black/40 text-white/40'}`}>Free Synth</button>
                        <button onClick={() => setMode('INSPIRE')} className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${mode === 'INSPIRE' ? 'bg-white text-black' : 'bg-black/40 text-white/40'}`}>Relic Inspire</button>
                    </div>

                    {mode === 'SYNTH' ? (
                        <input
                            value={prompt} onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Define sonic vectors (e.g., 'Ethereal Techno with heavy sub pulse')..."
                            className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-xs text-neon-cyan outline-none focus:border-neon-cyan/50 transition-all font-mono shadow-inner"
                        />
                    ) : (
                        <div className="flex-1 bg-cyan-900/20 border border-cyan-500/20 rounded-2xl px-6 py-4 flex items-center justify-between">
                            <div className="text-[10px] font-mono text-cyan-200">SOURCE: <strong>RSC_ARCHIVE_SECTOR_7G</strong> (Reverb Echoes)</div>
                            <div className="text-[9px] font-black text-cyan-500 uppercase">READY</div>
                        </div>
                    )}
                </div>
                <button onClick={mode === 'SYNTH' ? handleIgnite : handleInspire} disabled={isGenerating}
                    className={`h-14 px-10 rounded-[20px] font-black uppercase text-[11px] tracking-[0.4em] transition-all shadow-2xl
                        ${isPlaying ? 'bg-neon-magenta text-white hover:shadow-[0_0_30px_rgba(255,0,225,0.4)]' : 'bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'}
                    `}
                >
                    {isGenerating ? 'Synthesizing...' : isPlaying ? 'Stop Sequence' : (mode === 'SYNTH' ? 'Ignite Engine' : 'Inspire Theme')}
                </button>
            </div>

            {audioUrl && (
                <div className="hidden">
                    <audio src={audioUrl} autoPlay={isPlaying} loop onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
                </div>
            )}

            <div className="flex-1 flex overflow-hidden p-8 gap-8">
                {/* Timeline Surface */}
                <div className="flex-1 flex flex-col gap-6 overflow-y-auto">
                    <div className="flex justify-between items-center mb-2 px-2">
                        <div className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20">Sonic Refinery Suite v6.5</div>
                        <div className="text-[9px] font-mono text-neon-cyan opacity-40 uppercase tracking-widest">MASTER_SYNC: 128Hz</div>
                    </div>
                    <div className="space-y-4">
                        {tracks.map(t => <WaveformLane key={t.id} track={t} isPlaying={isPlaying} />)}
                    </div>
                </div>

                {/* Side Rack */}
                <div className="w-[400px] flex flex-col gap-8">
                    {/* Master Visualizer */}
                    <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 relative overflow-hidden">
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
                            <div className="p-4 glass rounded-2xl border border-white/5 flex flex-col gap-1">
                                <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Entropy</span>
                                <span className="text-sm font-black text-neon-magenta">0.82 Hz</span>
                            </div>
                        </div>
                    </div>

                    {/* FX Controls */}
                    <div className="flex-1 glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Neural FX Rack</div>
                        <div className="grid grid-cols-2 gap-y-10">
                            <FXKnob label="Diffusion" value={65} color="var(--neon-cyan)" />
                            <FXKnob label="Exciter" value={42} color="var(--neon-magenta)" />
                            <FXKnob label="Spectral" value={88} color="var(--neon-purple)" />
                            <FXKnob label="Conduction" value={12} color="#4ade80" />
                        </div>
                        <button className="mt-auto w-full py-4 glass rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:border-white/20 transition-all">Export Neural Manifest</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
