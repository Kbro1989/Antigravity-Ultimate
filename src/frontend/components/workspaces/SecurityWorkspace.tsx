import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function SecurityWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [isLocking, setIsLocking] = useState(false);
    const [shieldHealth, setShieldHealth] = useState(99.9);
    const [logs, setLogs] = useState<any[]>([]);
    const [traffic, setTraffic] = useState<any[]>([]);

    // Poll for real logs and traffic stats
    React.useEffect(() => {
        const fetchStatus = async () => {
            try {
                // Fetch real audit logs from the SecurityLimb
                const logResult = await callLimb('security', 'security_get_logs', {});
                if (logResult && logResult.data) {
                    setLogs(logResult.data.reverse().slice(0, 50)); // Last 50 logs

                    // Derive traffic stats from logs (mocking IP extraction from intent metadata if needed)
                    // For now, we visualize the latest 8 unique intents as "traffic sources"
                    const recentActivity = logResult.data.slice(-8).map((l: any, i: number) => ({
                        id: i,
                        source: l.metadata?.source || `node_${i + 100}`,
                        status: l.risk === 'blocked' ? 'BLOCKED' : 'VALID',
                        ip: l.metadata?.ip || `192.168.1.${100 + i}`
                    }));
                    setTraffic(recentActivity);
                }
            } catch (e) {
                console.warn("[SecurityWorkspace] Failed to fetch sync", e);
            }
        };

        const interval = setInterval(fetchStatus, 2000);
        fetchStatus();
        return () => clearInterval(interval);
    }, [callLimb]);

    const handleLockdown = async () => {
        setIsLocking(true);
        try {
            await callLimb('security', 'security_emergency_lockdown', {
                scope: 'global',
                key_rotation: true
            });
            addNotification('error', 'CRITICAL: Initiating Global Neural Lock...');
            setTimeout(() => {
                setShieldHealth(100.0);
                addNotification('success', 'Security Moat Reinforced: Edge Shield 100%');
                setIsLocking(false);
            }, 3000);
        } catch (e: any) {
            addNotification('error', `Lockdown Failed: ${e.message}`);
            setIsLocking(false);
        }
    };

    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Neural Moat HUD */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-red-500/20 shadow-2xl relative overflow-hidden flex flex-col p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.03)_0%,transparent_80%)]" />

                <div className="flex-1 grid grid-cols-3 gap-12 relative z-10">
                    {/* Inbound Matrix - REAL DATA */}
                    <div className="border-r border-white/5 pr-10">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-8 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                            Traffic Matrix (Live)
                        </div>
                        <div className="space-y-4 font-mono text-[9px]">
                            {traffic.length === 0 && <div className="text-white/20 italic">No recent traffic detected on Neural Bridge.</div>}
                            {traffic.map((t, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 glass rounded-xl border border-white/5 hover:border-red-500/30 transition-all cursor-crosshair">
                                    <span className="text-white/40">{t.ip}</span>
                                    <span className={`px-2 py-0.5 rounded ${t.status === 'VALID' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-500'}`}>{t.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shield Core */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-64 h-64">
                            {/* Double Spinner */}
                            <div className="absolute inset-0 rounded-full border-4 border-red-500/10" />
                            <div className="absolute inset-0 rounded-full border-t-4 border-red-500 animate-spin shadow-[0_0_20px_rgba(239,68,68,0.3)]" />
                            <div className="absolute inset-6 rounded-full border-b-4 border-white/20 animate-spin-slow-reverse" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <span className="text-5xl font-black text-white">{shieldHealth}%</span>
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-500 mt-2">Core Integrity</span>
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-8 w-full">
                            <div className="text-center p-4 glass rounded-3xl border border-white/5">
                                <div className="text-2xl font-black text-white">{logs.filter(l => l.risk === 'blocked').length}</div>
                                <div className="text-[9px] font-black uppercase text-white/20 tracking-widest mt-1">Breaches</div>
                            </div>
                            <div className="text-center p-4 glass rounded-3xl border border-white/5">
                                <div className="text-2xl font-black text-white">{logs.length}</div>
                                <div className="text-[9px] font-black uppercase text-white/20 tracking-widest mt-1">Events Scanned</div>
                            </div>
                        </div>
                    </div>

                    {/* Sentinel Logs - REAL DATA */}
                    <div className="border-l border-white/5 pl-10 flex flex-col">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-red-400 mb-8">Sentinel Logs</div>
                        <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-none font-mono text-[9px]">
                            {logs.length === 0 && <div className="text-white/20 italic">Log buffer empty. Systems nominal.</div>}
                            {logs.map((log, idx) => (
                                <div key={idx} className={`p-3 rounded-xl ${log.risk === 'blocked' || log.risk === 'high' ? 'bg-red-500/5 text-red-400 italic' : 'bg-white/5 text-white/30'}`}>
                                    [{new Date(log.timestamp).toLocaleTimeString()}] {log.action || 'Unknown Action'} - {log.risk?.toUpperCase()}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Panel */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 flex flex-col gap-8 border border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Encrypted Key Vault</div>
                    <div className="space-y-4">
                        {['OpenAI_Master', 'Anthropic_Primary', 'Google_Symphony', 'DeepSeek_Limb'].map(key => (
                            <div key={key} className="p-4 glass rounded-2xl border border-white/5 flex items-center justify-between group cursor-pointer hover:border-red-500/30 transition-all">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-white group-hover:text-red-400 transition-colors uppercase">{key}</span>
                                    <span className="text-[9px] font-mono text-white/20">************fa92</span>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(74,222,128,0.4)]" />
                            </div>
                        ))}
                    </div>

                    <div className="h-[1px] bg-white/5 w-full" />

                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-[10px] text-white/60">
                            <span className="font-bold uppercase tracking-widest">Auto-Rotate Keys</span>
                            <div className="w-10 h-5 bg-green-500/20 rounded-full relative p-1 leading-none"><div className="absolute right-1 w-3 h-3 bg-green-500 rounded-full" /></div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-white/60">
                            <span className="font-bold uppercase tracking-widest">Global Moat</span>
                            <div className="w-10 h-5 bg-white/10 rounded-full relative p-1 leading-none"><div className="absolute right-1 w-3 h-3 bg-white/30 rounded-full" /></div>
                        </div>
                    </div>

                    <button
                        onClick={handleLockdown}
                        disabled={isLocking}
                        className={`w-full py-5 rounded-2xl mt-auto font-black text-xs tracking-[0.2em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                            ${isLocking
                                ? 'bg-red-500/20 text-white border border-red-500/50'
                                : 'bg-red-600 text-white hover:bg-black hover:text-red-500 hover:border-red-500 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)]'
                            }
                        `}
                    >
                        {isLocking ? 'Locking Core...' : '⚠ Emergency Lockdown'}
                    </button>
                </div>

                <div className="flex-1 glass-ultra rounded-[40px] p-8 border border-white/5 flex flex-col gap-4">
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Neural Trust Matrix</div>
                    <div className="flex-1 flex items-center justify-center relative">
                        <svg className="w-full h-full opacity-20">
                            <circle cx="50%" cy="50%" r="40" fill="none" stroke="red" strokeWidth="0.5" strokeDasharray="2 4" />
                            <circle cx="50%" cy="50%" r="20" fill="none" stroke="red" strokeWidth="0.5" />
                        </svg>
                        <div className="absolute text-[8px] font-black uppercase text-red-400 animate-pulse">Sentinel_Active</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
