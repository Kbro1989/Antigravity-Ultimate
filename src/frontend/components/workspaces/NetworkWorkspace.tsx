import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function NetworkWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [isPinging, setIsPinging] = useState(false);

    const handlePing = async () => {
        setIsPinging(true);
        try {
            await callLimb('network', 'ping_limbs', {
                include_latency_matrix: true,
                distributed_trace: true
            });
            addNotification('info', 'Temporal Bridge: Routing Diagnostic Packets...');
            setTimeout(() => {
                addNotification('success', 'Global Neural Link: All 23 Nodes Synchronized');
                setIsPinging(false);
            }, 2000);
        } catch (e: any) {
            addNotification('error', `Network Fault: ${e.message}`);
            setIsPinging(false);
        }
    };

    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Topology HUD */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-blue-500/20 shadow-2xl relative overflow-hidden flex flex-col group">
                <div className="absolute inset-0 bg-black/40" />

                {/* Fake SVG Graph */}
                <div className="flex-1 relative">
                    <svg className="w-full h-full opacity-60">
                        <defs>
                            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        {/* Mesh Connections */}
                        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#00f2ff" strokeWidth="0.5" strokeDasharray="5 5" className="animate-pulse" />
                        <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#00f2ff" strokeWidth="0.5" strokeDasharray="5 5" />
                        <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#00f2ff" strokeWidth="0.5" strokeDasharray="5 5" />
                        <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#00f2ff" strokeWidth="0.5" strokeDasharray="5 5" className="animate-pulse" />

                        {/* Nodes */}
                        <circle cx="50%" cy="50%" r="6" fill="#00f2ff" className="animate-ping" />
                        <circle cx="50%" cy="50%" r="4" fill="#00f2ff" />
                        <circle cx="20%" cy="20%" r="3" fill="#fff" opacity="0.4" />
                        <circle cx="80%" cy="20%" r="3" fill="#fff" opacity="0.4" />
                        <circle cx="20%" cy="80%" r="3" fill="#fff" opacity="0.4" />
                        <circle cx="80%" cy="80%" r="3" fill="#fff" opacity="0.4" />
                    </svg>

                    <div className="absolute top-10 left-10 flex flex-col gap-4">
                        <div className="text-[10px] font-black uppercase tracking-[0.6em] text-neon-cyan mb-2 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_var(--neon-cyan)]"></span>
                            Topology_Master: Mesh
                        </div>
                        <div className="flex gap-3">
                            <span className="glass px-3 py-1 rounded-xl text-[9px] font-mono text-white/40 uppercase">Nodes: 23 Active</span>
                            <span className="glass px-3 py-1 rounded-xl text-[9px] font-mono text-green-400 uppercase tracking-widest">Bridged</span>
                        </div>
                    </div>
                </div>

                <div className="h-32 border-t border-white/5 bg-black/40 p-8 flex items-center justify-between">
                    <div className="flex gap-12">
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-black uppercase text-white/20 tracking-widest">Neural Latency</span>
                            <span className="text-xl font-black text-neon-cyan">4.2ms <span className="text-[8px] opacity-40">Avg</span></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-black uppercase text-white/20 tracking-widest">Loss Rate</span>
                            <span className="text-xl font-black text-white">0.0001%</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-[8px] font-mono text-white/20 text-right uppercase">Edge_Computing_Enabled<br />Distributed_Buffer_Ready</div>
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">🌐</div>
                    </div>
                </div>
            </div>

            {/* Side Panel */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 flex-1 flex flex-col gap-8 border border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Protocol Analyzer</div>

                    <div className="space-y-6 flex-1 overflow-y-auto pr-2">
                        {[
                            { name: 'WebSocket (Secure)', latency: '12ms', status: 'Optimal', load: 12 },
                            { name: 'Neural gRPC', latency: '8ms', status: 'Optimal', load: 85 },
                            { name: 'Edge HTTP/3', latency: '24ms', status: 'Degraded', load: 42 },
                            { name: 'UDP Multicast', latency: '2ms', status: 'Optimal', load: 4 }
                        ].map(p => (
                            <div key={p.name} className="p-5 glass rounded-3xl border border-white/5 group hover:border-neon-cyan/30 transition-all flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{p.name}</span>
                                    <span className={`text-[9px] font-black ${p.status === 'Optimal' ? 'text-green-400' : 'text-neon-cyan'}`}>{p.latency}</span>
                                </div>
                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                    <div className={`h-full bg-neon-cyan shadow-[0_0_8px_var(--neon-cyan)]`} style={{ width: `${p.load}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="h-[1px] bg-white/5 w-full" />

                    <button
                        onClick={handlePing}
                        disabled={isPinging}
                        className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.2em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                            ${isPinging
                                ? 'bg-neon-cyan/20 text-white border border-neon-cyan/50'
                                : 'bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'
                            }
                        `}
                    >
                        {isPinging ? 'Pinging Core...' : '📡 Re-Sync Neural Links'}
                    </button>
                </div>

                {/* Bandwidth Monitor */}
                <div className="h-64 glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-6">
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Temporal Stream</div>
                    <div className="flex-1 flex items-end gap-1 px-2">
                        {Array(25).fill(0).map((_, i) => (
                            <div key={i} className="flex-1 bg-neon-cyan opacity-40 rounded-t-sm animate-pulse-slow" style={{ height: `${Math.random() * 80 + 20}%`, animationDelay: `${i * 100}ms` }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
