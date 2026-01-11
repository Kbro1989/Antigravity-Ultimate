import React, { useState, useEffect } from 'react';
import { useServiceHub, useNotification } from '../../hooks';
import { useStateManager } from '../../../services/core/StateManager';

export function VideoWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const { sourceRelic } = useStateManager();
    const [isProcessing, setIsProcessing] = useState(false);
    const [activeTab, setActiveTab] = useState<'sequence' | 'director'>('sequence');
    const [synthPrompt, setSynthPrompt] = useState('An epic battle scene on a volcanic ridge...');

    // Cinematic State
    const [script, setScript] = useState('// Cinematic Directive Alpha\ncamera_reveal(target: RELIC_DNA, duration: 5s);\nactor_spawn(npc: 5, pose: "EMOTE_VICTORY");');
    const [cameraMode, setCameraMode] = useState('ORBITAL');
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSubSecond, setIsSubSecond] = useState(false);
    const [rtcMetrics, setRtcMetrics] = useState({ rtt: 42, jitter: 3 });
    const DURATION = 30; // 30s limit for cloud scene synthesis

    const handleDirectorAction = async (action: string) => {
        setIsProcessing(true);
        try {
            const contextRelic = sourceRelic || { id: 'genesis', type: 'system' };
            addNotification('info', `Scene Builder: Initializing latent cinematic buffer...`);

            const result: any = await callLimb('video', action === 'video_render_cutscene' ? 'render' : action, {
                prompt: activeTab === 'director' ? synthPrompt : script,
                options: {
                    cameraMode,
                    sourceRelic: contextRelic,
                    fidelity: 'PRO_GRADE'
                }
            });

            if (result.status === 'success') {
                // Cloudflare Stream Integration: Construct HLS/WHEP manifest URL from UID
                const streamUid = result.uid || result.videoUrl?.split('/').pop();
                const customerCode = 'pog-network'; // Placeholder customer code
                const manifestUrl = isSubSecond
                    ? `https://customer-${customerCode}.cloudflarestream.com/${streamUid}/manifest/video.whep`
                    : `https://customer-${customerCode}.cloudflarestream.com/${streamUid}/manifest/video.m3u8`;

                setPreviewUrl(manifestUrl);
                addNotification('success', `Cinema Engine: ${isSubSecond ? 'Magical HDMI Link (WHEP)' : 'Stream Manifest'} Distributed`);
            } else {
                addNotification('error', `Cinema Engine Error: ${result.message || 'Unknown fault'}`);
            }
        } catch (e: any) {
            addNotification('error', `Cinema Engine Error: ${e.message}`);
        } finally {
            setIsProcessing(false);
        }
    };

    const formatTime = (t: number) => {
        const mins = Math.floor(t / 60);
        const secs = Math.floor(t % 60);
        const ms = Math.floor((t % 1) * 100);
        return `00:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 animate-fade-in relative overflow-hidden">
            <div className="flex-1 flex gap-6 p-6 overflow-hidden">
                {/* Cinema Viewport */}
                <div className="flex-1 glass-ultra rounded-[40px] relative overflow-hidden border border-white/5 flex flex-col group shadow-2xl">
                    <div className="absolute inset-0 bg-black">
                        {previewUrl ? (
                            <video
                                key={previewUrl}
                                className={`w-full h-full object-cover transition-opacity duration-1000 ${isProcessing ? 'opacity-20' : 'opacity-80'}`}
                                loop
                                autoPlay
                                muted
                                playsInline
                            >
                                <source src={previewUrl} type={isSubSecond ? 'application/vnd.apple.mpegurl' : 'video/mp4'} />
                            </video>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle,rgba(0,242,255,0.05)_0%,transparent_70%)]">
                                <div className="text-[10px] font-black uppercase tracking-[0.8em] text-white/10">Waiting for Render Directive</div>
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                        {isProcessing && (
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 border-4 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin shadow-[0_0_20px_var(--neon-cyan)]" />
                                    <div className="text-[10px] font-black uppercase tracking-[0.6em] text-neon-cyan animate-pulse">Choreographing Scene...</div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Top HUD */}
                    <div className="absolute top-6 left-6 z-10 flex gap-3">
                        <div className="glass px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-white border border-white/10 uppercase bg-white/5 backdrop-blur-md">Active_Scene: Cinematic_01</div>
                        <div className="glass px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-neon-cyan border border-neon-cyan/30 uppercase bg-neon-cyan/5 backdrop-blur-md">Director Mode</div>

                        {/* WHEP Toggle */}
                        <div
                            className={`glass px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase cursor-pointer transition-all border ${isSubSecond ? 'text-neon-cyan border-neon-cyan/50 bg-neon-cyan/10' : 'text-white/20 border-white/5 bg-black/40'}`}
                            onClick={() => {
                                setIsSubSecond(!isSubSecond);
                                if (previewUrl) {
                                    const newUrl = !isSubSecond
                                        ? previewUrl.replace('.m3u8', '.whep')
                                        : previewUrl.replace('.whep', '.m3u8');
                                    setPreviewUrl(newUrl);
                                }
                            }}
                        >
                            {isSubSecond ? 'Sub-Second: ON' : 'Sub-Second: OFF'}
                        </div>
                        <div className="glass px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-white/40 border border-white/5 uppercase bg-black/40 backdrop-blur-md">30s</div>

                        {/* RTC Metrics HUD */}
                        {isSubSecond && (
                            <div className="flex flex-col gap-1 items-end opacity-80 scale-90 origin-right">
                                <div className="text-[9px] font-black tracking-widest text-neon-cyan uppercase">Edge_RTT: {rtcMetrics.rtt}ms</div>
                                <div className="text-[8px] font-mono text-white/40 uppercase">Jitter: {rtcMetrics.jitter}ms</div>
                            </div>
                        )}
                        <div className="glass px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-amber-500 border border-amber-500/20 uppercase bg-black/40 backdrop-blur-md">
                            {sourceRelic ? `Actor: ${sourceRelic.id}` : 'No Actor Bound'}
                        </div>
                    </div>

                    {/* Timeline Scrubber */}
                    <div className="mt-auto p-8 z-10 space-y-4 bg-gradient-to-t from-black to-transparent">
                        <div className="flex justify-between items-end text-[10px] font-mono text-white/50 px-2 tracking-0.2em uppercase">
                            <div className="flex flex-col gap-1">
                                <span className="text-[8px] text-neon-cyan/60">TIMECODE</span>
                                <span className="text-white">{formatTime(currentTime)}</span>
                            </div>
                            <div className="text-right flex flex-col gap-1">
                                <span className="text-[8px] text-white/20">TRUTH_SYNC</span>
                                <span>{formatTime(DURATION)}</span>
                            </div>
                        </div>

                        {/* Functional Timeline */}
                        <div className="h-20 relative group/scrub cursor-pointer flex flex-col gap-1" onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            setCurrentTime((x / rect.width) * DURATION);
                        }}>
                            <div className="flex-1 relative glass rounded-xl border border-white/5 overflow-hidden">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full h-[1px] bg-white/10" />
                                </div>
                                <div className="absolute inset-y-0 left-[0%] w-[100%] bg-white/5" />

                                {/* Current Time Marker */}
                                <div className="absolute h-full w-[2px] bg-neon-cyan shadow-[0_0_15px_rgba(0,242,255,1)] z-30 transition-all duration-100" style={{ left: `${(currentTime / DURATION) * 100}%` }}>
                                    <div className="absolute top-0 -left-1.5 w-4 h-4 rounded-b-full bg-neon-cyan shadow-xl" />
                                </div>

                                {/* Block visualization */}
                                <div className="absolute inset-y-2 left-[10%] w-[80%] glass-ultra rounded-lg border border-neon-cyan/20 flex items-center px-6">
                                    <span className="text-[7px] text-neon-cyan font-black uppercase tracking-widest">Master Shot Reconstruction - grounded in relic://{sourceRelic?.id || 'genesis'}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-10">
                            <button onClick={() => setCurrentTime(0)} className="text-white/40 hover:text-white transition-all scale-125">⏮</button>
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all transform hover:scale-110
                                    ${isPlaying ? 'bg-neon-magenta text-white border-neon-magenta shadow-[0_0_20px_rgba(255,0,225,0.4)]' : 'bg-white text-black border-white/20 hover:bg-neon-cyan'}
                                `}
                            >
                                <span className="text-xl">{isPlaying ? '⏸' : '▶'}</span>
                            </button>
                            <button onClick={() => setCurrentTime(DURATION)} className="text-white/40 hover:text-white transition-all scale-125">⏭</button>
                        </div>
                    </div>
                </div>

                {/* Control Panel */}
                <div className="w-96 flex flex-col gap-6">
                    <div className="glass-ultra rounded-[40px] p-8 flex-1 flex flex-col border border-white/5 shadow-2xl bg-white/5 backdrop-blur-3xl overflow-hidden">
                        {/* Tab Switcher */}
                        <div className="flex gap-2 mb-8 p-1 glass rounded-2xl border border-white/5 bg-black/20">
                            <button
                                onClick={() => setActiveTab('sequence')}
                                className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'sequence' ? 'bg-neon-cyan/20 text-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.2)]' : 'text-white/20 hover:text-white/40'}`}
                            >
                                Sequence
                            </button>
                            <button
                                onClick={() => setActiveTab('director')}
                                className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'director' ? 'bg-neon-purple/20 text-neon-purple shadow-[0_0_15px_rgba(188,0,255,0.2)]' : 'text-white/20 hover:text-white/40'}`}
                            >
                                Director
                            </button>
                        </div>

                        {activeTab === 'sequence' ? (
                            <div className="flex-1 flex flex-col gap-8 animate-in fade-in slide-in-from-left-4 duration-500">
                                <div className="text-[10px] font-black tracking-[0.4em] text-neon-cyan uppercase flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_var(--neon-cyan)]"></span>
                                    Choreography Lab
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 border-b border-white/5 pb-2">Manual Script</div>
                                        <textarea
                                            value={script}
                                            onChange={(e) => setScript(e.target.value)}
                                            className="w-full bg-black/40 border border-white/5 rounded-2xl p-4 text-[11px] text-white/80 font-mono resize-none focus:border-neon-cyan/50 outline-none h-32 shadow-inner"
                                            placeholder="Envision the sequence..."
                                        />
                                    </div>

                                    <div>
                                        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 border-b border-white/5 pb-2">Camera Logic</div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {['Dynamic', 'Static', 'Pan Left', 'Orbit'].map(mode => (
                                                <button key={mode} onClick={() => setCameraMode(mode)}
                                                    className={`py-3 rounded-xl text-[9px] font-black transition-all border ${cameraMode === mode ? 'bg-neon-cyan text-black border-neon-cyan' : 'bg-white/5 text-white/40 border-white/5 hover:border-white/20'}`}
                                                >
                                                    {mode.toUpperCase()}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Media Pipeline (Cloudflare Native)</div>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { label: 'Video (H.264)', val: 'Optimized MP4', color: 'text-neon-cyan' },
                                                { label: 'Frame (Still)', val: 'AVIF / PNG / JPG', color: 'text-white/60' },
                                                { label: 'Spritesheet', val: 'JPEG Frame Grid', color: 'text-neon-magenta' },
                                                { label: 'Audio Extract', val: 'AAC (M4A)', color: 'text-white/60' }
                                            ].map(m => (
                                                <div key={m.label} className="p-4 glass rounded-[24px] border border-white/5 flex flex-col gap-1 hover:border-white/20 transition-all cursor-pointer group">
                                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest group-hover:text-neon-cyan/50">{m.label}</span>
                                                    <span className={`text-[10px] font-black uppercase ${m.color}`}>{m.val}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-[8px] font-mono text-white/20 px-2 italic">
                                            * Serves from Zone. Max: 100MB / 10m. Supports time/duration slicing.
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleDirectorAction('video_render_cutscene')}
                                    disabled={isProcessing}
                                    className={`w-full py-5 rounded-2xl mt-auto font-black text-xs tracking-[0.2em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                        ${isProcessing
                                            ? 'bg-neon-cyan/20 text-white border border-neon-cyan/50 cursor-wait'
                                            : 'bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'
                                        }
                                    `}
                                >
                                    {isProcessing ? 'Directing...' : '🎬 Action!'}
                                </button>
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="text-[10px] font-black tracking-[0.4em] text-neon-purple uppercase flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse shadow-[0_0_8px_var(--neon-purple)]"></span>
                                    Scene Director AI
                                </div>

                                <div className="space-y-4">
                                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Director's Intent</div>
                                    <textarea
                                        value={synthPrompt}
                                        onChange={(e) => setSynthPrompt(e.target.value)}
                                        placeholder="Describe the cinematic sequence (e.g., 'A dramatic reveal of the ancient dragon, camera orbits slowly showing the scale')..."
                                        className="w-full h-40 bg-black/40 border border-white/10 rounded-2xl p-4 text-[11px] font-mono text-white/70 outline-none focus:border-neon-purple/40 transition-all resize-none shadow-inner"
                                    />

                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { label: 'Epic Reveal', prompt: 'Cinematic wide shot sweeping across the landscape revealing the main castle' },
                                            { label: 'Combat Intro', prompt: 'Fast-paced rhythmic cuts showing two warriors preparing for battle' },
                                            { label: 'Atmospheric', prompt: 'Slow moody pan across the foggy forest with bioluminescence' },
                                            { label: 'Retro Cut', prompt: 'Classic frame-stepped cutscene style with sharp static angles' }
                                        ].map(preset => (
                                            <button
                                                key={preset.label}
                                                onClick={() => setSynthPrompt(preset.prompt)}
                                                className="p-3 glass rounded-xl border border-white/5 hover:border-neon-purple/30 text-[9px] font-bold text-white/40 hover:text-white transition-all text-left"
                                            >
                                                {preset.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleDirectorAction('video_render_cutscene')}
                                    disabled={!synthPrompt || isProcessing}
                                    className={`w-full py-5 rounded-2xl mt-auto font-black text-xs tracking-[0.2em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3 ${isProcessing ? 'bg-white/10 text-white/20' : 'bg-neon-purple text-white hover:shadow-[0_0_30px_rgba(188,0,255,0.4)]'}`}
                                >
                                    {isProcessing ? 'Rendering Scene...' : 'Synthesize Sequence'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
