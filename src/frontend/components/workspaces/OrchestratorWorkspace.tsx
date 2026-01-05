import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function OrchestratorWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [strategy, setStrategy] = useState('Negotiation');
    const [isThinking, setIsThinking] = useState(false);

    const handleReplan = async () => {
        setIsThinking(true);
        try {
            await callLimb('orchestrator', 'generate_plan', {
                strategy: strategy,
                objective: 'Maximize visual fidelity while maintaining 60fps edge performance.'
            });
            addNotification('info', `Symphony Master: Recalibrating with ${strategy} Strategy...`);
            setTimeout(() => {
                addNotification('success', 'Neural Plan Optimized & Synchronized');
                setIsThinking(false);
            }, 2500);
        } catch (e: any) {
            addNotification('error', `Planning Fault: ${e.message}`);
            setIsThinking(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Strategy HUD */}
            <div className="p-8 pb-0">
                <div className="glass-ultra rounded-3xl p-6 border border-white/5 flex items-center justify-between shadow-2xl">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(0,242,255,0.2)] border border-neon-cyan/20">
                            🎼
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Active Orchestration Mode</div>
                            <div className="text-2xl font-black text-white">{strategy} Engine <span className="text-neon-cyan font-mono text-sm ml-2">v6.5.PRO</span></div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        {['Negotiation', 'Critique', 'Consensus'].map(s => (
                            <button
                                key={s}
                                onClick={() => setStrategy(s)}
                                className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest border transition-all ${strategy === s ? 'bg-white text-black border-white' : 'glass-dark text-white/40 border-white/5 hover:border-white/20'}`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex-1 flex gap-8 p-8 overflow-hidden">
                {/* Negotiation Visualizer */}
                <div className="flex-1 glass-ultra rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex flex-col relative group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,242,255,0.05)_0%,transparent_70%)] opacity-40" />
                    <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                        <div className="text-[10px] font-black tracking-[0.4em] text-white uppercase uppercase">Limb Negotiation Graph</div>
                        <div className="text-[10px] font-mono text-neon-cyan animate-pulse">OPTIMIZING_FLOW...</div>
                    </div>

                    <div className="flex-1 relative flex items-center justify-center">
                        {/* Fake Circular Graph */}
                        <div className="relative w-96 h-96">
                            <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow" />
                            <div className="absolute inset-8 border border-white/5 rounded-full animate-spin-reverse" />

                            {/* Central Node */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-[0_0_40px_white]">
                                <span className="text-2xl">🧠</span>
                            </div>

                            {/* Outer Nodes */}
                            {[
                                { angle: 0, icon: '🖼️', label: 'Image' },
                                { angle: 60, icon: '🔊', label: 'Audio' },
                                { angle: 120, icon: '🌐', label: 'World' },
                                { angle: 180, icon: '📦', label: 'Mesh' },
                                { angle: 240, icon: '🔐', label: 'Security' },
                                { angle: 300, icon: '🧬', label: 'Entity' }
                            ].map((n, i) => {
                                const rad = (n.angle * Math.PI) / 180;
                                const x = 50 + 40 * Math.cos(rad);
                                const y = 50 + 40 * Math.sin(rad);
                                return (
                                    <div
                                        key={i}
                                        style={{ left: `${x}%`, top: `${y}%` }}
                                        className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-lg hover:border-neon-cyan transition-all cursor-pointer">
                                            {n.icon}
                                        </div>
                                        <span className="text-[8px] font-black uppercase text-white/30 group-hover:text-white transition-colors">{n.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="p-6 border-t border-white/5 bg-black/40 flex items-center justify-between">
                        <div className="flex gap-8">
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-black text-white/30 uppercase">Negotiation Entropy</span>
                                <span className="text-xs font-mono text-neon-cyan">0.024 RMS</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-black text-white/30 uppercase">Consensus Time</span>
                                <span className="text-xs font-mono text-neon-magenta">142ms</span>
                            </div>
                        </div>
                        <button
                            onClick={handleReplan}
                            disabled={isThinking}
                            className={`px-8 py-3 rounded-2xl font-black text-[10px] uppercase transition-all shadow-xl ${isThinking ? 'bg-white/10 text-white animate-pulse' : 'bg-neon-cyan text-black hover:bg-white'}`}
                        >
                            {isThinking ? 'Calculating...' : 'Force Global Re-Plan'}
                        </button>
                    </div>
                </div>

                {/* Intent Queue */}
                <div className="w-[450px] flex flex-col gap-8">
                    <div className="glass-ultra rounded-3xl p-8 flex-1 flex flex-col gap-8 border border-white/5 shadow-2xl relative overflow-hidden">
                        <div className="text-[10px] font-black tracking-[0.4em] text-white/60 uppercase">High-Priority Intent Queue</div>

                        <div className="space-y-4 flex-1 overflow-y-auto pr-2">
                            {[
                                { intent: 'GENERATE_CINEMA_TEXTURE', limb: 'MaterialLimb', priority: 'CRITICAL', status: 'Pending' },
                                { intent: 'AUDIT_SECURITY_LAYER', limb: 'SecurityLimb', priority: 'HIGH', status: 'Active' },
                                { intent: 'SYNCHRONIZE_D1_NODES', limb: 'DataLimb', priority: 'MEDIUM', status: 'Waiting' },
                                { intent: 'RECONDUCT_GHOST_SOUL', limb: 'GhostLimb', priority: 'LOW', status: 'Queued' }
                            ].map((item, i) => (
                                <div key={i} className="p-4 glass rounded-2xl border border-white/5 flex items-center justify-between gap-4 group hover:bg-white/5 transition-all">
                                    <div className="flex-1">
                                        <div className="text-[10px] font-black text-white mb-1">{item.intent}</div>
                                        <div className="text-[8px] font-mono text-white/30 uppercase tracking-widest">{item.limb}</div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className={`text-[8px] font-black px-2 py-0.5 rounded ${item.priority === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-neon-cyan/20 text-neon-cyan'}`}>{item.priority}</span>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'Active' ? 'bg-green-400 animate-pulse' : 'bg-white/10'}`} />
                                            <span className="text-[9px] font-bold text-white/40 uppercase">{item.status}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Orchestration Log Ticker */}
                        <div className="h-20 glass-dark rounded-xl border border-white/5 p-4 flex flex-col gap-2 overflow-hidden">
                            <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">Master Execution Log</div>
                            <div className="text-[9px] font-mono text-neon-cyan/60 animate-alert-scroll truncate italic">
                                [SYNC] Global State Anchor v9.2 verified... [OK]
                            </div>
                            <div className="text-[9px] font-mono text-white/30 truncate italic">
                                [NEGOTIATION] MeshLimb agreed to priority downshift...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
