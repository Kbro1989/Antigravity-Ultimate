import React, { useState, useEffect } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function SystemWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [isOptimizing, setIsOptimizing] = useState(false);
    const [stats, setStats] = useState({ tokensUsed: 0, requests: 0, latency: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { default: ServiceHub } = await import('../../../services/ServiceHub');
                const start = Date.now();
                const data: any = await ServiceHub.stats.get();
                setStats({
                    tokensUsed: data.tokensUsed || 0,
                    requests: data.requests || 0,
                    latency: Date.now() - start
                });
            } catch (e) {
                console.warn('Stats fetch failed', e);
            }
        };
        fetchStats();
        const interval = setInterval(fetchStats, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleOptimize = async () => {
        setIsOptimizing(true);
        try {
            const response = (await callLimb('system', 'system_optimize_resources', {
                target_utilization: 0.85,
                purge_temp: true
            })) as any;

            if (response.status === 'success') {
                // TRUTH: Use the actual reported memory freed from the backend
                const freed = response.data?.memory_freed || 'Optimization Complete';
                addNotification('success' as any, `System Result: ${freed}`);
            } else {
                addNotification('warning' as any, 'Optimization completed with notices.');
            }
            setIsOptimizing(false);
        } catch (e: any) {
            addNotification('error' as any, `Optimization Fault: ${e.message}`);
            setIsOptimizing(false);
        }
    };

    const handleAction = async (cmd: string) => {
        try {
            const action = cmd.toLowerCase();
            addNotification('info' as any, `System: Dispatching ${cmd}...`);
            const response = (await callLimb('system', action, {})) as any;
            if (response.status === 'success') {
                addNotification('success' as any, response.data.message || `${cmd} executed successfully`);
            } else {
                addNotification('error' as any, `Action Failed: ${response.error}`);
            }
        } catch (e: any) {
            addNotification('error' as any, `Internal Fault: ${e.message}`);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Top Stat Matrix */}
            <div className="h-40 border-b border-white/5 bg-white/5 backdrop-blur-3xl px-10 py-8 flex items-center justify-between shadow-2xl z-10">
                <div className="flex gap-16">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase text-neon-cyan tracking-[0.4em]">Engine_Core_Status</span>
                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-black text-white">OPTIMAL</span>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_#22c55e]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase text-white/20 tracking-[0.4em]">Memory_Pool</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-black text-white">12.4</span>
                            <span className="text-xs font-bold text-white/30">GB / 128GB</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase text-white/20 tracking-[0.4em]">Edge_Propagation</span>
                        <span className="text-3xl font-black text-neon-magenta">GLOBAL</span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="text-right flex flex-col">
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.1em]">Cloudflare_Workers_Runtime</span>
                        <span className="text-[8px] font-mono text-neon-cyan/60 uppercase">Version: 2026.01.05_V6</span>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">⚛️</div>
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Main Hub Activity View */}
                <div className="flex-1 flex flex-col p-10 gap-10 overflow-y-auto custom-scrollbar">
                    <div className="flex justify-between items-center px-4">
                        <div className="text-[11px] font-black uppercase tracking-[0.6em] text-white/20">System_Event_Stream</div>
                        <div className="flex items-center gap-4">
                            <span className="text-[9px] font-mono text-neon-cyan/40">MASTER_SYNC_ENABLED</span>
                            <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-neon-cyan animate-pulse" style={{ width: '85%' }} />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[
                            { time: '11:04:12', level: 'INFO', module: 'CORE', msg: 'Neural bridge handshake successful. Distributed context established.' },
                            { time: '11:04:45', level: 'WARN', module: 'LIMB', msg: 'ImageLimb requested high-precision upscale. Offloading to edge node SF-12.' },
                            { time: '11:05:01', level: 'EXEC', module: 'AUTH', msg: 'Reality anchor locked. Provenance chain verified for /staged_assets.' },
                            { time: '11:05:30', level: 'SYS', module: 'SECURITY', msg: 'Emergency moat scan complete. 0 vulnerabilities detected.' }
                        ].map((log, i) => (
                            <div key={i} className="flex gap-8 p-5 glass rounded-[24px] border border-white/5 hover:bg-white/5 transition-all group">
                                <div className="text-[10px] font-mono text-white/20 pt-1">{log.time}</div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <div className="flex items-center gap-3">
                                        <span className={`text-[9px] font-black px-2 py-0.5 rounded ${log.level === 'WARN' ? 'bg-neon-magenta/20 text-neon-magenta' : 'bg-neon-cyan/20 text-neon-cyan'}`}>{log.level}</span>
                                        <span className="text-[10px] font-black text-white/60 tracking-widest">{log.module}</span>
                                    </div>
                                    <div className="text-[12px] font-bold text-white/80 group-hover:text-white transition-colors">{log.msg}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Action Hub */}
                    <div className="grid grid-cols-3 gap-6 mt-6">
                        {[
                            { label: 'Flush Edge Cache', action: 'PURGE_KV', color: 'neon-cyan' },
                            { label: 'Sync D1 Database', action: 'FLUSH_D1', color: 'neon-magenta' },
                            { label: 'Rotate Session Keys', action: 'ROTATE_KEYS', color: 'white' }
                        ].map(btn => (
                            <button
                                key={btn.action}
                                onClick={() => handleAction(btn.action)}
                                className="p-8 glass rounded-[32px] border border-white/5 hover:border-white/20 transition-all flex flex-col items-center gap-4 group"
                            >
                                <div className="text-xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">⚡</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white">{btn.label}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* System Specs Sidebar */}
                <div className="w-[450px] border-l border-white/5 p-10 flex flex-col gap-10 bg-white/5 backdrop-blur-2xl">
                    <div className="text-[11px] font-black uppercase tracking-[0.4em] text-white/30 mb-2">Refinery_Intelligence</div>

                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Edge_Core_Utilization</span>
                                <span className="text-[10px] font-mono text-neon-cyan">84.2%</span>
                            </div>
                            <div className="h-2 bg-black/40 rounded-full border border-white/5 overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta shadow-[0_0_10px_var(--neon-cyan)]" style={{ width: '84%' }} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Requests', val: stats.requests.toLocaleString() },
                                { label: 'Tokens', val: stats.tokensUsed.toLocaleString() },
                                { label: 'Latency', val: `${stats.latency}ms` },
                                { label: 'Nodes', val: '23' }
                            ].map(s => (
                                <div key={s.label} className="p-6 glass rounded-[24px] border border-white/5 flex flex-col gap-1">
                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{s.label}</span>
                                    <span className="text-lg font-black text-white">{s.val}</span>
                                </div>
                            ))}
                        </div>

                        <div className="h-[1px] bg-white/5 w-full my-4" />

                        <div className="space-y-4">
                            <div className="text-[10px] font-black uppercase text-white/20 tracking-[0.2em]">Maintenance_Routines</div>
                            <button
                                onClick={handleOptimize}
                                disabled={isOptimizing}
                                className={`w-full py-6 rounded-3xl font-black text-xs tracking-[0.4em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                    ${isOptimizing
                                        ? 'bg-neon-cyan/20 text-white border border-neon-cyan/50'
                                        : 'bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_40px_rgba(0,242,255,0.4)]'
                                    }
                                `}
                            >
                                {isOptimizing ? 'Optimizing...' : 'Ignite System Refresh'}
                            </button>
                        </div>

                        <div className="mt-auto p-8 glass rounded-[32px] border border-red-500/10 flex flex-col gap-4 bg-red-500/5">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_red]" />
                                <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">Emergency_Buffer</span>
                            </div>
                            <button onClick={() => handleAction('SHUTDOWN')} className="w-full py-3 glass border border-red-500/20 rounded-xl text-[10px] font-black text-red-400 hover:bg-red-500 hover:text-white transition-all uppercase">Forced Kernel Halt</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
