import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function PhysicsWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [gravity, setGravity] = useState(-9.81);
    const [timeScale, setTimeScale] = useState(1.0);
    const [isSimulating, setIsSimulating] = useState(true);

    const handleStep = async () => {
        try {
            await callLimb('physics', 'step_simulation', { gravity, time_scale: timeScale });
            addNotification('info', 'Continuum Engine: Simulation Step Commanded');
        } catch (e: any) {
            addNotification('error', `Physics Fault: ${e.message}`);
        }
    };

    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Simulation HUD */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col group">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

                <div className="absolute top-10 left-10 flex gap-4 z-20">
                    <div className="glass-ultra px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-neon-yellow border border-neon-yellow/30 shadow-2xl">FPS: 120.0</div>
                    <div className="glass px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-white/20 border border-white/5 shadow-2xl">Solver: RK4_Neural</div>
                    <div className="glass px-6 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-green-400 bg-green-500/10 border border-green-500/20">Sim_Live</div>
                </div>

                <div className="flex-1 relative overflow-hidden flex items-center justify-center">
                    {/* Simulated Elements Mockup */}
                    <div className="relative w-full h-full">
                        <div className="absolute top-1/4 left-1/3 w-20 h-20 glass-ultra border-2 border-neon-yellow rotate-12 shadow-[0_0_30px_rgba(255,255,0,0.2)] animate-bounce" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full glass-ultra border-2 border-neon-cyan shadow-[0_0_30px_rgba(0,242,255,0.2)] animate-pulse" />
                        <div className="absolute bottom-24 left-20 right-20 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent border-t border-white/5" />
                    </div>
                </div>

                {/* Transport Bar */}
                <div className="h-24 glass-ultra border-t border-white/5 flex items-center px-10 gap-8 bg-black/40 backdrop-blur-3xl z-20">
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-2xl glass border border-white/10 hover:border-white/40 flex items-center justify-center text-xl hover:bg-white/5 transition-all text-white/60">⏮</button>
                        <button onClick={() => setIsSimulating(!isSimulating)} className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-2xl transition-all shadow-2xl ${isSimulating ? 'bg-neon-yellow/10 border-neon-yellow text-neon-yellow shadow-[0_0_20px_rgba(255,255,0,0.2)]' : 'bg-white text-black hover:bg-neon-yellow'}`}>
                            {isSimulating ? '⏸' : '▶'}
                        </button>
                        <button onClick={handleStep} className="w-12 h-12 rounded-2xl glass border border-white/10 hover:border-white/40 flex items-center justify-center text-xl hover:bg-white/5 transition-all text-white/60">⏭</button>
                    </div>
                    <div className="flex-1 h-2 bg-black/60 rounded-full relative overflow-hidden group border border-white/5 shadow-inner">
                        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-neon-yellow to-neon-orange shadow-[0_0_15px_var(--neon-yellow)]" />
                    </div>
                    <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">t + 14.52s</div>
                </div>
            </div>

            {/* Newton Rack */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 flex flex-col gap-10 border border-white/5 shadow-2xl relative overflow-hidden flex-1">
                    <div className="text-[10px] font-black tracking-[0.6em] text-neon-yellow uppercase">Continuum Engine v6.5</div>

                    <div className="space-y-8">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Fundamental Constants</div>
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/60">
                                    <span>Gravity Scale</span>
                                    <span className="text-neon-yellow">{gravity.toFixed(2)} m/s²</span>
                                </div>
                                <input type="range" min="-20" max="0" step="0.01" value={gravity} onChange={(e) => setGravity(parseFloat(e.target.value))}
                                    className="w-full h-1 bg-black/40 rounded-full appearance-none cursor-pointer accent-neon-yellow"
                                />
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/60">
                                    <span>Temporal Scale</span>
                                    <span className="text-neon-yellow">{timeScale.toFixed(2)}x</span>
                                </div>
                                <input type="range" min="0" max="2" step="0.1" value={timeScale} onChange={(e) => setTimeScale(parseFloat(e.target.value))}
                                    className="w-full h-1 bg-black/40 rounded-full appearance-none cursor-pointer accent-neon-yellow"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Material Matrix</div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Bounciness', val: '0.35' },
                                { label: 'Friction', val: '0.82' },
                                { label: 'Air Drag', val: '0.04' },
                                { label: 'Buoyancy', val: '1.00' }
                            ].map(m => (
                                <div key={m.label} className="p-4 glass rounded-[24px] border border-white/5 flex flex-col gap-1 hover:border-white/20 transition-all cursor-pointer">
                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{m.label}</span>
                                    <span className="text-sm font-bold text-white">{m.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="w-full py-5 rounded-2xl mt-auto bg-white text-black font-black text-xs tracking-[0.4em] hover:bg-neon-yellow hover:shadow-[0_0_40px_rgba(255,255,0,0.4)] transition-all uppercase shadow-2xl">
                        Reset Space-Time
                    </button>
                </div>
            </div>
        </div>
    );
}
