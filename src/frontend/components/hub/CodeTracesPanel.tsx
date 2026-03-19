import React, { useEffect, useState, useRef } from 'react';
import { useServiceHub } from '../../hooks';

export function CodeTracesPanel() {
    const { callLimb } = useServiceHub();
    const [logs, setLogs] = useState<{ id: string; msg: string; type: string }[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const res = await callLimb('security', 'get_logs', {});
                if (res?.data?.logs) {
                    const newLogs = res.data.logs.slice(0, 5).map((l: any, i: number) => ({
                        id: `${Date.now()}-${i}`,
                        msg: l.action,
                        type: l.level
                    }));
                    setLogs(prev => [...newLogs, ...prev].slice(0, 50));
                }
            } catch (e) {
                // Silent fail for logs
            }
        };

        const interval = setInterval(fetchLogs, 5000);
        fetchLogs();
        return () => clearInterval(interval);
    }, [callLimb]);

    return (
        <div className="fixed top-24 left-12 w-80 z-50 pointer-events-none animate-in slide-in-from-left duration-700">
            <div className="glass-ultra p-6 rounded-[32px] border-neon-cyan/20 pointer-events-auto">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse"></div>
                    <div className="text-[10px] font-black text-white/60 tracking-[0.4em] uppercase">Chronoshell Traces</div>
                </div>

                <div ref={scrollRef} className="h-48 overflow-y-auto custom-scrollbar flex flex-col gap-2">
                    {logs.map((log) => (
                        <div key={log.id} className="text-[9px] font-mono leading-relaxed border-l border-white/5 pl-3 py-1">
                            <span className={`uppercase font-black mr-2 ${log.type === 'error' ? 'text-neon-magenta' : 'text-neon-cyan/40'}`}>
                                [{log.type || 'INFO'}]
                            </span>
                            <span className="text-white/40">{log.msg}</span>
                        </div>
                    ))}
                    {logs.length === 0 && (
                        <div className="text-[9px] font-mono text-white/10 animate-pulse">LISTENING TO SOVEREIGN MESH...</div>
                    )}
                </div>
            </div>
        </div>
    );
}
