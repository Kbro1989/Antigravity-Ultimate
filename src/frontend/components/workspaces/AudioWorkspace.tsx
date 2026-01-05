import React, { useState, useEffect } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

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

    return (
        <div className={`flex items-center gap-6 p-4 rounded-3xl transition-all duration-500 border ${track.active ? 'bg-white/5 border-white/10' : 'opacity-20 border-transparent scale-95'}`}>
            <div className={`w-32 text-[10px] font-black uppercase tracking-[0.3em]`} style={{ color: glowColor }}>{track.name}</div>

            <div className="flex-1 h-16 glass rounded-2xl overflow-hidden flex items-end gap-[2px] p-2 relative group border border-white/5">
                {isPlaying && <div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_white] z-10 animate-scan-slow" />}
                {track.waveform.map((bar, i) => (
                    <div key={i} className="flex-1 rounded-full transition-all duration-300"
                        style={{ height: `${bar}%`, backgroundColor: track.active ? glowColor : 'rgba(255,255,255,0.1)', opacity: isPlaying && track.active ? 0.9 : 0.4 }}
                    />
                ))}
            </div>

            <div className="flex flex-col gap-2 scale-75 origin-right">
                <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-xl glass border border-white/10 text-[9px] font-black text-white/40 hover:text-white transition-all uppercase">M</button>
                    <button className="w-8 h-8 rounded-xl glass border border-white/10 text-[9px] font-black text-white/40 hover:text-white transition-all uppercase">S</button>
                </div>
            </div>
        </div>
    );
}

function FXKnob({ label, value, color = 'var(--neon-cyan)' }: { label: string; value: number; color?: string }) {
    const rotation = (value / 100) * 270 - 135;
    return (
        <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full border border-white/10 relative flex items-center justify-center glass-ultra shadow-2xl cursor-pointer hover:border-white/40 transition-all">
                <div className="absolute w-1 h-4 top-1 rounded-full origin-bottom transition-transform duration-500 shadow-[0_0_10px_currentColor]" style={{ transform: `rotate(${rotation}deg) translateY(2px)`, backgroundColor: color, color }} />
                <div className="w-10 h-10 rounded-full bg-white/5 shadow-inner" />
            </div>
            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">{label}</div>
        </div>
    );
}

export function AudioWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [isPlaying, setIsPlaying] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const [tracks, setTracks] = useState<AudioTrack[]>([
        { id: 'drums', name: 'Rhythm Core', active: true, volume: 0.8, color: 'magenta', waveform: Array(50).fill(0).map(() => Math.random() * 80 + 20) },
        { id: 'bass', name: 'Sub Pulse', active: true, volume: 0.9, color: 'cyan', waveform: Array(50).fill(0).map(() => Math.random() * 60 + 20) },
        { id: 'synth', name: 'Neural Lead', active: true, volume: 0.7, color: 'purple', waveform: Array(50).fill(0).map(() => Math.random() * 90 + 10) },
        { id: 'fx', name: 'Atmosphere', active: false, volume: 0.5, color: 'green', waveform: Array(50).fill(0).map(() => Math.random() * 40 + 10) },
    ]);

    const handleIgnite = async () => {
        if (!isPlaying) {
            setIsGenerating(true);
            try {
                addNotification('info', 'Sonic Refinery: Generating Neural Audio Stems...');

                const result = await callLimb('audio', 'generate_music', {
                    action: 'generate_music',
                    prompt,
                    options: {
                        title: 'Neural Genesis',
                        duration: '3:00',
                        bpm: 128,
                        key: 'C Minor',
                        genre: 'Cinematic'
                    }
                }) as any;

                if (result.status === 'success') {
                    setIsPlaying(true);
                    addNotification('success', `Audio synthesized: ${result.title || 'Neural Genesis'}`);
                } else {
                    addNotification('warning', 'Audio generation returned unexpected status');
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

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Transport Header */}
            <div className="h-24 border-b border-white/5 flex items-center px-10 gap-8 bg-white/5 backdrop-blur-3xl shadow-2xl">
                <div className="w-14 h-14 rounded-3xl bg-neon-purple/20 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(188,0,255,0.2)] border border-neon-purple/30">🎻</div>
                <div className="flex-1 max-w-2xl">
                    <input
                        value={prompt} onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Define sonic vectors (e.g., 'Ethereal Techno with heavy sub pulse')..."
                        className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-xs text-neon-cyan outline-none focus:border-neon-cyan/50 transition-all font-mono shadow-inner"
                    />
                </div>
                <button onClick={handleIgnite} disabled={isGenerating}
                    className={`h-14 px-10 rounded-[20px] font-black uppercase text-[11px] tracking-[0.4em] transition-all shadow-2xl
                        ${isPlaying ? 'bg-neon-magenta text-white hover:shadow-[0_0_30px_rgba(255,0,225,0.4)]' : 'bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'}
                    `}
                >
                    {isGenerating ? 'Synthesizing...' : isPlaying ? 'Stop Sequence' : 'Ignite Engine'}
                </button>
            </div>

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
