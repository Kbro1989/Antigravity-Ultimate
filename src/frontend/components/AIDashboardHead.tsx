import React from 'react';
import { useStateManager } from '../../services/core/StateManager';

// Restored and renamed to avoid collision with hub/AIDashboardHead.tsx
export function LegacyAIDashboardHead() {
    const { metrics, mode } = useStateManager();
    const progress = (metrics.tokensUsed / metrics.tokensLimit) * 100;

    return (
        <div className="glass p-4 rounded-lg w-full mb-4 border border-glass-border">
            <div className="flex items-center justify-between">
                {/* Left: AI Status */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${mode === 'offline' ? 'bg-orange-400' : 'bg-green-400'} animate-pulse`} />
                        <span className="text-sm font-black tracking-widest text-neon-cyan uppercase">
                            AI {mode}
                        </span>
                    </div>

                    <div className="flex items-center gap-[2px] h-10 px-4 border-l border-glass-border">
                        {[...Array(16)].map((_, i) => (
                            <div
                                key={i}
                                className="w-[2px] bg-gradient-to-t from-neon-cyan to-neon-magenta rounded-full animate-wave-bounce"
                                style={{
                                    animationDelay: `${i * 0.05}s`,
                                    height: `${20 + Math.random() * 20}px`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Center: Token Usage */}
                <div className="flex items-center gap-8 flex-1 justify-center px-12">
                    <div className="text-center min-w-[120px]">
                        <div className="text-[10px] font-black tracking-widest opacity-50 text-neon-cyan mb-1">NEURONS</div>
                        <div className="text-xl font-bold font-jetbrains text-white tabular-nums">
                            {(metrics.tokensUsed / 1000).toFixed(1)}K<span className="opacity-30">/</span>{(metrics.tokensLimit / 1000).toFixed(1)}K
                        </div>
                    </div>

                    <div className="flex-1 h-1.5 bg-black/40 rounded-full overflow-hidden max-w-md relative group">
                        <div
                            className="absolute inset-0 bg-neon-cyan/5 animate-pulse"
                            style={{ width: `${progress}%` }}
                        />
                        <div
                            className="h-full bg-gradient-to-r from-neon-cyan via-white to-neon-magenta transition-all duration-700 ease-out shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="text-center min-w-[100px]">
                        <div className="text-[10px] font-black tracking-widest opacity-50 text-neon-cyan mb-1">EST. COST</div>
                        <div className="text-xl font-bold text-green-400 font-jetbrains tabular-nums">
                            ${metrics.cost.toFixed(3)}
                        </div>
                    </div>
                </div>

                {/* Right: Performance */}
                <div className="flex items-center gap-6 pr-4">
                    <div className="text-right">
                        <div className="text-[10px] font-black tracking-widest opacity-50 text-neon-cyan">LATENCY</div>
                        <div className="text-xs font-bold font-jetbrains text-white">{metrics.latency}ms</div>
                    </div>
                    <div className="w-px h-8 bg-glass-border" />
                    <button className="p-2 hover:bg-neon-cyan/10 rounded transition-colors group">
                        <div className="text-lg group-hover:rotate-180 transition-transform duration-500">⚙️</div>
                    </button>
                </div>
            </div>
        </div>
    );
}
