import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function RealityWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [isAnchoring, setIsAnchoring] = useState(false);
    const [stability, setStability] = useState(88.4);
    const [anchorTarget, setAnchorTarget] = useState<'D1' | 'KV' | 'CORE'>('D1');
    const [history, setHistory] = useState<{ id: string; time: string; type: string }[]>([]);

    const handleAnchor = async () => {
        setIsAnchoring(true);
        try {
            const result = await callLimb('reality', 'reality_anchor_convergence', {
                target: anchorTarget,
                payload: { description: `Convergence via ${anchorTarget} Portal` }
            });
            if (result.status === 'success') {
                setStability(result.stability);
                setHistory((prev: any[]) => [{ id: result.anchor.id.slice(0, 8), time: new Date().toLocaleTimeString(), type: anchorTarget }, ...prev].slice(0, 5));
                addNotification('success', `Reality Anchored: ${anchorTarget} Convergence Confirmed`);
            }
        } catch (e: any) {
            addNotification('error', `Convergence Fault: ${e.message}`);
        } finally {
            setIsAnchoring(false);
        }
    };

    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Persistence Visualization */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col group p-10 bg-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.03)_0%,transparent_80%)]" />

                <div className="flex-1 relative flex flex-col items-center justify-center">
                    <div className="relative w-80 h-80 flex items-center justify-center">
                        <div className={`absolute inset-0 border-2 border-dashed border-yellow-500/20 rounded-full ${isAnchoring ? 'animate-spin' : 'animate-spin-slow'}`} />
                        <div className={`w-40 h-40 rounded-full bg-black flex items-center justify-center border border-yellow-500/40 shadow-[0_0_80px_rgba(255,215,0,0.2)] transition-all ${isAnchoring ? 'scale-125 blur-sm' : 'scale-100'}`}>
                            <span className="text-5xl animate-pulse">🔮</span>
                        </div>
                    </div>

                    {/* Convergence History */}
                    <div className="w-full max-w-2xl mt-12 space-y-4">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500/40 px-4">Historical Anchors</div>
                        <div className="space-y-2">
                            {history.length > 0 ? history.map((h: any, i: number) => (
                                <div key={i} className="flex items-center justify-between p-4 glass rounded-2xl border border-white/5 bg-black/40 animate-slide-in">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_var(--yellow-500)]" />
                                        <span className="text-[10px] font-mono text-white/80 font-bold uppercase">Node_{h.id}</span>
                                        <span className="text-[8px] font-mono text-white/20">TARGET: {h.type}</span>
                                    </div>
                                    <span className="text-[9px] font-mono text-white/20">{h.time}</span>
                                </div>
                            )) : (
                                <div className="text-center p-8 glass rounded-2xl border border-white/5 opacity-20 italic text-[10px] uppercase tracking-widest text-white/50">No active anchors in this session</div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="absolute top-10 left-10 flex flex-col gap-2">
                    <div className="text-[10px] font-black uppercase tracking-[0.6em] text-yellow-500">Reality Anchor v6.5</div>
                    <div className="text-[9px] font-mono text-white/20">STABILITY_ENFORCED: {stability}%</div>
                </div>
            </div>

            {/* Persistence Controls */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 h-full bg-white/5 backdrop-blur-3xl overflow-y-auto">
                    <div className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Persistence Matrix</div>

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Anchor Targets</div>
                        <div className="flex flex-col gap-3">
                            {(['D1', 'KV', 'CORE'] as const).map(t => (
                                <button key={t} onClick={() => setAnchorTarget(t)}
                                    className={`p-5 glass rounded-2xl border transition-all flex items-center justify-between group ${anchorTarget === t ? 'border-yellow-500/50 bg-yellow-500/5' : 'border-white/5 bg-black/20 hover:border-white/20'}`}
                                >
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${anchorTarget === t ? 'text-yellow-500' : 'text-white/40'}`}>{t} PERSISTENCE</span>
                                    <div className={`w-2 h-2 rounded-full ${anchorTarget === t ? 'bg-yellow-500' : 'bg-white/10'}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto space-y-4 pt-8">
                        <div className="p-6 bg-yellow-500/5 rounded-3xl border border-yellow-500/20 flex flex-col gap-2">
                            <div className="text-[9px] font-black text-yellow-500 uppercase tracking-widest">Convergence Protocol</div>
                            <div className="text-[11px] text-white/60 leading-relaxed font-medium">Commit all session state to the selected persistence layer. This action is immutable.</div>
                        </div>
                        <button onClick={handleAnchor} disabled={isAnchoring}
                            className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.4em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                ${isAnchoring ? 'bg-yellow-500/20 text-white animate-pulse' : 'bg-white text-black hover:bg-yellow-500 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)]'}
                            `}
                        >
                            {isAnchoring ? 'Anchoring Reality...' : '🔮 Execute Convergence'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
