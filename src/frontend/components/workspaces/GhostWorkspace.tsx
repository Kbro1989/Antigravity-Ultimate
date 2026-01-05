import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function GhostWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [isStabilizing, setIsStabilizing] = useState(false);
    const [ghostStatus, setGhostStatus] = useState('Dormant');

    const handleStabilize = async () => {
        setIsStabilizing(true);
        try {
            await callLimb('ghost', 'stabilize', {
                target_dimension: 'symphony_core',
                neural_gain: 1.2
            });
            addNotification('info', 'Wraith Engine: Injecting Stabilization Wave...');
            setTimeout(() => {
                setGhostStatus('Monitoring');
                addNotification('success', 'Ghost Dimension Stabilized');
                setIsStabilizing(false);
            }, 2500);
        } catch (e: any) {
            addNotification('error', `Stabilization Failed: ${e.message}`);
            setIsStabilizing(false);
        }
    };

    return (
        <div className="flex-1 flex gap-6 h-full p-6 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Wraith Core Visualizer */}
            <div className="flex-1 glass-ultra rounded-3xl relative overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(188,0,255,0.05)_0%,transparent_70%)]" />

                {/* Ghost Avatar Mockup */}
                <div className="relative w-80 h-80">
                    <div className={`absolute inset-0 rounded-full border border-neon-purple/20 transition-all duration-[3000ms] ${ghostStatus === 'Monitoring' ? 'scale-[1.5] opacity-0' : 'scale-100 opacity-100'}`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-32 h-32 bg-neon-purple/20 blur-3xl animate-pulse transition-all ${ghostStatus === 'Monitoring' ? 'opacity-100' : 'opacity-40'}`} />
                        <svg className="w-48 h-48 text-neon-purple" viewBox="0 0 100 100">
                            <path
                                d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 Z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                strokeDasharray="1 3"
                                className="animate-spin-slow"
                            />
                            <path
                                d="M50 20 L50 80 M20 50 L80 50"
                                stroke="currentColor"
                                strokeWidth="0.2"
                                opacity="0.3"
                            />
                        </svg>
                    </div>
                </div>

                <div className="absolute top-8 left-8 flex flex-col gap-4">
                    <div className="text-[10px] font-black uppercase text-neon-purple tracking-[0.4em] mb-2 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full bg-neon-purple ${ghostStatus === 'Monitoring' ? 'animate-ping' : 'opacity-30'}`}></span>
                        WraithEngine: {ghostStatus}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="glass px-4 py-2 rounded-2xl border border-white/5 flex items-center justify-between min-w-[200px]">
                            <span className="text-[9px] font-black tracking-widest text-white/40 uppercase">Spirit Drift</span>
                            <span className="text-xs font-mono text-white">0.0004%</span>
                        </div>
                        <div className="glass px-4 py-2 rounded-2xl border border-white/5 flex items-center justify-between min-w-[200px]">
                            <span className="text-[9px] font-black tracking-widest text-white/40 uppercase">Ecto-Buffer</span>
                            <span className="text-xs font-mono text-neon-cyan">CLEAR</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reconduction Protocols */}
            <div className="w-96 flex flex-col gap-4">
                <div className="glass-ultra rounded-3xl p-8 flex-1 flex flex-col gap-8 border border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 text-[40px] opacity-5 pointer-events-none">👻</div>

                    <div className="text-[10px] font-black tracking-[0.4em] text-neon-purple uppercase flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse shadow-[0_0_8px_var(--neon-purple)]"></span>
                        Self-Healing Protocols
                    </div>

                    <div className="space-y-6">
                        {/* Protocol Selection */}
                        <div className="space-y-3">
                            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Active Wraiths</div>
                            {[
                                { name: 'Reconduct_Core', status: 'Standby' },
                                { name: 'Self_Heal_D1', status: 'Monitoring' },
                                { name: 'Latency_Wraith', status: 'Standby' }
                            ].map(p => (
                                <div key={p.name} className="flex items-center justify-between p-4 glass rounded-2xl border border-white/5 group hover:border-neon-purple/40 transition-all cursor-pointer">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-white group-hover:text-neon-purple transition-colors">{p.name}</span>
                                        <span className="text-[8px] text-white/30 uppercase tracking-widest">{p.status}</span>
                                    </div>
                                    <div className={`w-1.5 h-1.5 rounded-full ${p.status === 'Monitoring' ? 'bg-green-400' : 'bg-white/10'}`} />
                                </div>
                            ))}
                        </div>

                        {/* Recent Reanimations */}
                        <div className="space-y-4">
                            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Recent Reanimations</div>
                            <div className="space-y-2">
                                <div className="p-3 bg-white/5 rounded-xl border-l-2 border-neon-cyan">
                                    <div className="text-[9px] font-bold text-white">LimbRegistry Coroutiene Crash</div>
                                    <div className="text-[8px] text-white/40">Resolved via Ghost_Reconduct • 12m ago</div>
                                </div>
                                <div className="p-3 bg-white/5 rounded-xl border-l-2 border-neon-magenta">
                                    <div className="text-[9px] font-bold text-white">KV Cache Timeout</div>
                                    <div className="text-[8px] text-white/40">Buffered via Wraith_Bridge • 1h ago</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stabilize Button */}
                    <button
                        onClick={handleStabilize}
                        disabled={isStabilizing}
                        className={`w-full py-5 rounded-2xl mt-auto font-black text-xs tracking-[0.2em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                            ${isStabilizing
                                ? 'bg-neon-purple/20 text-white border border-neon-purple/50 cursor-wait'
                                : 'bg-black text-neon-purple border border-neon-purple/30 hover:bg-neon-purple hover:text-white hover:shadow-[0_0_30px_rgba(188,0,255,0.4)]'
                            }
                        `}
                    >
                        {isStabilizing ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Injecting Reality...</span>
                            </>
                        ) : 'Force Dimensional Stabilization'}
                    </button>
                </div>
            </div>
        </div>
    );
}
