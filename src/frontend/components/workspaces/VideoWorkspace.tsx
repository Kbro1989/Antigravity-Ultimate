import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function VideoWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [isProcessing, setIsProcessing] = useState(false);
    const [script, setScript] = useState('An epic battle scene on a volcanic ridge...');
    const [cameraMode, setCameraMode] = useState('Dynamic');

    const handleDirectorAction = async (action: string) => {
        setIsProcessing(true);
        try {
            await callLimb('video', action, { script, cameraMode });
            addNotification('success', `Cinema Engine: ${action.toUpperCase()} Initialized`);
            setTimeout(() => {
                addNotification('success', 'Scene Direction Finalized: Preview Ready');
                setIsProcessing(false);
            }, 3000);
        } catch (e: any) {
            addNotification('error', `Cinema Engine Error: ${e.message}`);
            setIsProcessing(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 animate-fade-in relative overflow-hidden">
            <div className="flex-1 flex gap-6 p-6 overflow-hidden">
                {/* Cinema Viewport */}
                <div className="flex-1 glass-ultra rounded-3xl relative overflow-hidden border border-white/5 flex flex-col group shadow-2xl">
                    <div className="absolute inset-0 bg-black">
                        {/* Video Placeholder */}
                        <div className="w-full h-full opacity-40 bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200')] bg-cover bg-center" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                        {isProcessing && (
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 border-4 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin" />
                                    <div className="text-[10px] font-black uppercase tracking-[0.6em] text-neon-cyan animate-pulse">Choreographing Scene...</div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Top HUD */}
                    <div className="absolute top-6 left-6 z-10 flex gap-3">
                        <div className="glass px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-white border border-white/10 uppercase bg-white/5 backdrop-blur-md">Active_Scene: Cinematic_01</div>
                        <div className="glass px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-neon-cyan border border-neon-cyan/30 uppercase bg-neon-cyan/5 backdrop-blur-md animate-pulse">Director Mode</div>
                    </div>

                    {/* Timeline Scrubber */}
                    <div className="mt-auto p-8 z-10 space-y-4">
                        <div className="flex justify-between text-[10px] font-mono text-white/50 px-2 tracking-0.2em uppercase">
                            <span>00:04:15:12</span>
                            <span>00:12:45:00</span>
                        </div>
                        <div className="h-6 relative group/scrub cursor-pointer">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full h-[2px] bg-white/10 rounded-full" />
                            </div>
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-[35%] h-[2px] bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-full shadow-[0_0_15px_rgba(0,242,255,0.5)]" />
                            </div>
                            <div className="absolute top-1/2 left-[35%] -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-xl scale-0 group-hover/scrub:scale-100 transition-transform duration-300" />
                        </div>

                        <div className="flex items-center justify-center gap-8">
                            <button className="text-white/40 hover:text-white transition-colors">⏮</button>
                            <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:border-white/50 hover:bg-white/20 transition-all">
                                <span className="text-white text-xl">▶</span>
                            </button>
                            <button className="text-white/40 hover:text-white transition-colors">⏭</button>
                        </div>
                    </div>
                </div>

                {/* Control Panel */}
                <div className="w-96 flex flex-col gap-6">
                    <div className="glass-ultra rounded-3xl p-6 flex-1 flex flex-col gap-8 border border-white/5 shadow-2xl">
                        <div className="text-[10px] font-black tracking-[0.4em] text-neon-cyan uppercase flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_var(--neon-cyan)]"></span>
                            Cinematic Director
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-3">Script-to-Screen</div>
                                <textarea
                                    value={script}
                                    onChange={(e) => setScript(e.target.value)}
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-[11px] text-white/80 font-mono resize-none focus:border-neon-cyan/50 outline-none h-32"
                                    placeholder="Envision the sequence..."
                                />
                            </div>

                            <div>
                                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-3">Camera Choreography</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Dynamic', 'Static', 'Pan Left', 'Orbit'].map(mode => (
                                        <button key={mode} onClick={() => setCameraMode(mode)}
                                            className={`py-3 rounded-xl text-[9px] font-black transition-all border ${cameraMode === mode ? 'bg-neon-cyan text-black border-neon-cyan' : 'bg-white/5 text-white/40 border-white/5 hover:border-white/20'}`}
                                        >
                                            {mode}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-3">Cast Management</div>
                                <div className="flex gap-2">
                                    {['ActorA', 'ActorB', 'NPC_Horde'].map(cast => (
                                        <div key={cast} className="flex-1 py-2 glass rounded-lg border border-white/5 text-[8px] font-black text-center text-white/30 uppercase tracking-widest hover:border-neon-magenta/40 hover:text-white transition-all cursor-pointer">
                                            {cast}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Execute Button */}
                        <button
                            onClick={() => handleDirectorAction('render_cutscene')}
                            disabled={isProcessing}
                            className={`w-full py-5 rounded-2xl mt-auto font-black text-xs tracking-[0.2em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                ${isProcessing
                                    ? 'bg-neon-cyan/20 text-white border border-neon-cyan/50 cursor-wait'
                                    : 'bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'
                                }
                            `}
                        >
                            {isProcessing ? 'Directing...' : '🎬 Action! (Render)'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
