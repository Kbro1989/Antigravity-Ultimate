import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function DataWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [isPruning, setIsPruning] = useState(false);

    const handlePrune = async () => {
        setIsPruning(true);
        try {
            await callLimb('data', 'prune_cache', {
                max_age_days: 7,
                min_access_count: 5
            });
            addNotification('info', 'Neural Cache: Initiating Vectorized Pruning...');
            setTimeout(() => {
                addNotification('success', 'Cache Pruning Complete: Optimized 14,202 nodes');
                setIsPruning(false);
            }, 2000);
        } catch (e: any) {
            addNotification('error', `Prune Fault: ${e.message}`);
            setIsPruning(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Data Metrics */}
            <div className="p-8 grid grid-cols-4 gap-6">
                {[
                    { label: 'Cache Hit Rate', value: '94.2%', color: 'neon-cyan', trend: '+2.1%' },
                    { label: 'DB Latency', value: '0.9ms', color: 'green-400', trend: '-0.1ms' },
                    { label: 'Vector Count', value: '1.2M', color: 'neon-magenta', trend: '+12k/h' },
                    { label: 'IOPS', value: '14.5k', color: 'neon-purple', trend: 'Stable' }
                ].map(m => (
                    <div key={m.label} className="glass-ultra rounded-2xl p-5 border border-white/5 flex flex-col gap-1 shadow-xl">
                        <div className="flex justify-between items-center text-[9px] font-black uppercase text-white/30 tracking-[0.2em]">
                            <span>{m.label}</span>
                            <span className={m.trend.startsWith('+') ? 'text-green-400' : m.trend === 'Stable' ? 'text-white/40' : 'text-neon-cyan'}>{m.trend}</span>
                        </div>
                        <span className={`text-2xl font-black text-${m.color}`}>{m.value}</span>
                    </div>
                ))}
            </div>

            <div className="flex-1 flex gap-8 p-8 pt-0 overflow-hidden">
                {/* Storage Explorer */}
                <div className="flex-1 glass-ultra rounded-3xl flex flex-col border border-white/5 shadow-2xl overflow-hidden">
                    <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                        <div className="text-[10px] font-black tracking-[0.4em] text-white uppercase flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
                            Neural Object Storage
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[9px] font-mono text-neon-cyan uppercase">D1_PROD: READY</span>
                            <span className="text-[9px] font-mono text-neon-magenta uppercase">KV_CACHE: ACTIVE</span>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="sticky top-0 bg-black/80 backdrop-blur-md z-10 text-[9px] font-black text-white/30 uppercase tracking-[0.2em] border-b border-white/5">
                                <tr>
                                    <th className="p-6">Entity Path</th>
                                    <th className="p-6">Type</th>
                                    <th className="p-6">TTL Status</th>
                                    <th className="p-6 text-right">Size</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-mono text-white/70">
                                {[
                                    { path: 'cache/mesh_delta_01', type: 'Vector', ttl: '23h 12m', size: '2.4MB' },
                                    { path: 'logs/system_v6_5', type: 'Log_Stream', ttl: 'Permanent', size: '142MB' },
                                    { path: 'user/session_active_01', type: 'Durable_Obj', ttl: '24m', size: '12KB' },
                                    { path: 'temp/build_cache_002', type: 'Buffer', ttl: '2m', size: '890KB' },
                                    { path: 'ai/intent_vector_hash', type: 'Vectorize', ttl: 'Permanent', size: '1.2GB' }
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                        <td className="p-6 text-neon-cyan font-bold">{row.path}</td>
                                        <td className="p-6 opacity-60 text-[10px] uppercase font-black">{row.type}</td>
                                        <td className="p-6 opacity-60">{row.ttl}</td>
                                        <td className="p-6 text-right font-bold text-white/40 group-hover:text-white transition-colors">{row.size}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Side Controls */}
                <div className="w-[400px] flex flex-col gap-8">
                    <div className="glass-ultra rounded-3xl p-8 flex flex-col gap-8 border border-white/5 shadow-2xl overflow-hidden relative">
                        <div className="text-[10px] font-black tracking-[0.4em] text-white/60 uppercase">Maintenance Suite</div>

                        <div className="space-y-6">
                            <div className="p-4 glass rounded-2xl border border-white/5 space-y-3">
                                <div className="text-[9px] font-black uppercase text-white/30 tracking-[0.2em]">Automated Retention</div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Aggressive Pruning</span>
                                    <div className="w-10 h-5 bg-neon-cyan/20 rounded-full relative p-1"><div className="absolute right-1 w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_8px_var(--neon-cyan)]" /></div>
                                </div>
                            </div>

                            <div className="p-4 glass rounded-2xl border border-white/5 space-y-3">
                                <div className="text-[9px] font-black uppercase text-white/30 tracking-[0.2em]">Data Redundancy</div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Shadow Replicas</span>
                                    <div className="w-10 h-5 bg-white/5 rounded-full relative p-1 leading-none"><div className="absolute left-1 w-3 h-3 bg-white/20 rounded-full" /></div>
                                </div>
                            </div>
                        </div>

                        <div className="h-[1px] bg-white/5 w-full" />

                        <button
                            onClick={handlePrune}
                            disabled={isPruning}
                            className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.2em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                ${isPruning
                                    ? 'bg-neon-magenta/20 text-white border border-neon-magenta/50'
                                    : 'bg-neon-magenta text-white hover:bg-neon-magenta hover:shadow-[0_0_30px_rgba(255,0,225,0.4)]'
                                }
                            `}
                        >
                            {isPruning ? 'Cleaning Cache...' : 'Flush Expired Nodes'}
                        </button>
                    </div>

                    <div className="flex-1 glass-ultra rounded-3xl p-6 border border-white/5 flex flex-col gap-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">Vector Index Integrity</div>
                        <div className="flex-1 flex flex-col gap-4">
                            {[
                                { name: 'Symphony_Memories', status: 'HEALTHY', nodes: '42,901' },
                                { name: 'User_Profiles', status: 'HEALTHY', nodes: '1,200' },
                                { name: 'Limb_Capabilities', status: 'SYNCING', nodes: '23' }
                            ].map(idx => (
                                <div key={idx.name} className="flex flex-col gap-1 p-3 bg-white/5 rounded-xl border border-white/5">
                                    <div className="flex justify-between text-[10px] font-bold text-white/80">
                                        <span>{idx.name}</span>
                                        <span className={idx.status === 'HEALTHY' ? 'text-green-400' : 'text-neon-cyan'}>{idx.status}</span>
                                    </div>
                                    <span className="text-[9px] font-mono text-white/30 uppercase font-black">{idx.nodes} Nodes</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
