import React from 'react';

export function RelicMatrixPanel() {
    const sectors = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        active: Math.random() > 0.8,
        data: Math.random() > 0.5 ? 'RELIC' : 'SYS'
    }));

    return (
        <div className="fixed bottom-32 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="glass-ultra p-4 rounded-[24px] border-white/10 pointer-events-auto flex items-center gap-8">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-4">
                        <div className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">Relic Matrix Grid</div>
                        <div className="px-2 py-0.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-[6px] font-black text-neon-cyan uppercase tracking-widest animate-pulse">Read Only</div>
                    </div>
                    {sectors.map(s => (
                        <div
                            key={s.id}
                            className={`w-2 h-2 rounded-sm transition-all duration-500 ${s.active ? 'bg-neon-cyan shadow-[0_0_8px_#00ffff]' : 'bg-white/5'}`}
                        ></div>
                    ))}
                </div>

                <div className="h-10 w-[1px] bg-white/5 mx-2"></div>

                <div className="flex flex-col gap-2">
                    <div className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">Neural Load</div>
                    <div className="flex items-end gap-1 h-6">
                        {[40, 70, 30, 90, 50, 80, 20].map((h, i) => (
                            <div
                                key={i}
                                className="w-1.5 bg-neon-cyan/40 rounded-t-sm animate-pulse"
                                style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
