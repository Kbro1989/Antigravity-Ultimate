import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function LiveWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [isSimulating, setIsSimulating] = useState(false);
    const [entities, setEntities] = useState(0);
    const [fps, setFps] = useState(60);

    const handleSimulationAction = async (action: string, data: any = {}) => {
        try {
            const result = await callLimb('live_game', ('live_game_' + action) as any, data);
            addNotification('info', `Simulation: ${action.toUpperCase()} Triggered`);
            if (action === 'spawn_npc') setEntities(prev => prev + 1);
        } catch (e: any) {
            addNotification('error', `Simulation Fault: ${e.message}`);
        }
    };

    const toggleSimulation = async () => {
        if (!isSimulating) {
            try {
                // Load the staged environment
                await callLimb('live_game', 'live_game_load_stage', { stageId: 'latest_build' });
                addNotification('success', 'Staged Assets Injected into Runtime');
            } catch (e) {
                console.error("Stage load failed", e);
            }
        }
        setIsSimulating(!isSimulating);
        addNotification(isSimulating ? 'warning' : 'info', isSimulating ? 'Simulation Suspended' : 'Live Session Started');
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Header Metrics */}
            <div className="p-6 grid grid-cols-4 gap-6">
                {[
                    { label: 'Session FPS', value: `${fps}`, color: 'neon-cyan' },
                    { label: 'Active Actors', value: `${entities}`, color: 'neon-magenta' },
                    { label: 'Logic Latency', value: '4.2ms', color: 'green-400' },
                    { label: 'VRAM Usage', value: '2.4GB', color: 'neon-purple' }
                ].map(m => (
                    <div key={m.label} className="glass-ultra rounded-2xl p-4 border border-white/5 flex flex-col gap-1">
                        <span className="text-[9px] font-black uppercase text-white/30 tracking-[0.2em]">{m.label}</span>
                        <span className={`text-xl font-black text-${m.color}`}>{m.value}</span>
                    </div>
                ))}
            </div>

            <div className="flex-1 flex gap-6 p-6 pt-0 overflow-hidden">
                {/* Live Play Viewport */}
                <div className="flex-1 glass-ultra rounded-3xl flex flex-col border border-white/5 shadow-2xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-black">
                        {/* Game Mockup */}
                        <div className={`w-full h-full bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200')] bg-cover bg-center transition-all duration-1000 ${isSimulating ? 'saturate-100' : 'saturate-0 blur-sm'}`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {!isSimulating && (
                            <div className="absolute inset-0 flex items-center justify-center z-10 flex-col gap-4">
                                <div className="glass px-8 py-6 rounded-3xl border border-white/10 flex flex-col items-center gap-4 bg-black/60 backdrop-blur-xl">
                                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Staged Content Detected</div>
                                    <div className="flex gap-2">
                                        {['QUEST_DATA', 'AUDIO_THEME', 'TEXTURE_SET'].map(t => (
                                            <span key={t} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[8px] font-bold rounded border border-cyan-500/20">{t}</span>
                                        ))}
                                    </div>
                                    <button onClick={toggleSimulation} className="px-12 py-4 bg-white text-black font-black uppercase tracking-[0.2em] rounded-xl hover:bg-neon-cyan transition-all shadow-2xl mt-2 flex items-center gap-3">
                                        <span>▶</span> Load & Play Scene
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="absolute top-6 left-6 flex gap-3">
                        <div className="glass px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-white border border-white/10 uppercase bg-white/5">Map: Volcanic_Ridge_v4</div>
                        {isSimulating && <div className="glass px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-neon-magenta border border-neon-magenta/30 uppercase bg-neon-magenta/5 animate-pulse">Recording Session</div>}
                    </div>

                    {isSimulating && (
                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-4 glass rounded-2xl">
                            <div className="flex gap-4">
                                <button onClick={() => handleSimulationAction('spawn_npc')} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white text-white hover:text-black transition-all" title="Spawn NPC">👤</button>
                                <button onClick={() => handleSimulationAction('toggle_physics')} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white text-white hover:text-black transition-all" title="Toggle Physics">⚛️</button>
                                <button onClick={() => handleSimulationAction('change_weather')} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white text-white hover:text-black transition-all" title="Change Weather">⛈️</button>
                            </div>
                            <button onClick={toggleSimulation} className="px-6 py-2 bg-red-500/20 text-red-400 border border-red-500/40 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">Terminate</button>
                        </div>
                    )}
                </div>

                {/* Debug Console / Statistics */}
                <div className="w-96 glass-ultra rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden flex flex-col bg-black/40">
                    <div className="p-6 border-b border-white/5 flex justify-between items-center">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-neon-cyan flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
                            God Mode
                        </div>
                        <div className="text-[8px] font-mono text-white/30">v9.9.PRO</div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Live Injector */}
                        <div className="space-y-3">
                            <div className="text-[9px] font-black text-white/30 uppercase border-b border-white/5 pb-2">Live Injectors</div>
                            <div className="grid grid-cols-2 gap-3">
                                <button onClick={() => handleSimulationAction('hot_swap_asset', { assetId: 'skybox_night', type: 'texture', newData: 'nebula_v2' })}
                                    className="p-3 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-xl text-[8px] font-black uppercase hover:bg-indigo-500 hover:text-white transition-all text-center">
                                    Swap Skybox
                                </button>
                                <button onClick={() => handleSimulationAction('hot_swap_asset', { assetId: 'hero_color', type: 'shader', newData: '#ff00ff' })}
                                    className="p-3 bg-pink-500/20 text-pink-300 border border-pink-500/30 rounded-xl text-[8px] font-black uppercase hover:bg-pink-500 hover:text-white transition-all text-center">
                                    Reskin Hero
                                </button>
                                <button onClick={() => handleSimulationAction('hot_swap_asset', { assetId: 'gravity', type: 'variable', newData: 0.5 })}
                                    className="p-3 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-xl text-[8px] font-black uppercase hover:bg-purple-500 hover:text-white transition-all text-center">
                                    Low Gravity
                                </button>
                                <button onClick={() => handleSimulationAction('spawn_npc', { id: `clone_${Date.now()}` })}
                                    className="p-3 bg-green-500/20 text-green-300 border border-green-500/30 rounded-xl text-[8px] font-black uppercase hover:bg-green-500 hover:text-white transition-all text-center">
                                    Clone Target
                                </button>
                            </div>
                        </div>

                        <div className="p-4 glass rounded-2xl border border-white/5 space-y-4">
                            <div className="text-[9px] font-black text-white/30 uppercase">Runtime Profiler</div>
                            <div className="flex items-end gap-1 h-12">
                                {[4, 7, 5, 9, 12, 6, 4, 8, 15, 5, 4, 9].map((h, i) => (
                                    <div key={i} className="flex-1 bg-neon-cyan/40 rounded-t-sm" style={{ height: `${h * 4}%` }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
