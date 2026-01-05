import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';



export function DivineWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [isAscending, setIsAscending] = useState(false);
    const [worldData, setWorldData] = useState<any>(null);
    const [biome, setBiome] = useState('Tropical');
    const [designScale, setDesignScale] = useState('Large');
    const [lighting, setLighting] = useState('Cinematic');

    const handleSynthesizeWorld = async () => {
        setIsAscending(true);
        try {
            const result = await callLimb('divine', 'synthesize_world', {
                biome,
                scale: designScale,
                lighting,
                seed: Math.random().toString(36).substring(7)
            });
            if (result.status === 'success') {
                setWorldData(result.world);
                addNotification('success', 'World Manifestation Synthesized');
            }
        } catch (e: any) {
            addNotification('error', `Divine Fault: ${e.message}`);
        } finally {
            setIsAscending(false);
        }
    };

    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* World Core Viewport */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col group p-10 bg-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent:90%)]" />

                <div className="flex-1 relative flex flex-col items-center justify-center">
                    <div className="relative w-80 h-80 flex items-center justify-center">
                        <div className={`absolute inset-0 border-2 border-dashed border-white/10 rounded-full ${isAscending ? 'animate-spin-slow' : ''}`} />
                        <div className={`w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-[0_0_100px_rgba(255,255,255,0.2)] transition-all duration-1000 ${isAscending ? 'scale-110 blur-sm' : 'scale-100'}`}>
                            <span className="text-5xl">🌍</span>
                        </div>
                    </div>

                    {worldData ? (
                        <div className="w-full max-w-2xl glass rounded-[32px] p-8 border border-white/10 bg-black/40 animate-scale-in mt-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Blueprint: {biome}</span>
                                <span className="text-[8px] font-mono text-white/20">STABILITY: OPTIMAL</span>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-xs text-white/80 leading-relaxed font-medium capitalize">
                                    {worldData.description || `A vast ${biome} landscape scaled to ${designScale} proportions, bathed in ${lighting} atmosphere.`}
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {['Structure', 'Hazard', 'Resource'].map((label: string) => (
                                        <div key={label} className="text-center p-3 glass rounded-xl">
                                            <div className="text-[8px] font-black text-white/20 uppercase mb-1">{label}</div>
                                            <div className="text-[10px] font-bold text-white capitalize">{worldData[label.toLowerCase()] || 'Auto-Gen'}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center space-y-4 mt-6">
                            <div className="text-[10px] font-black uppercase tracking-[0.8em] text-white/20">Waiting for Manifestation</div>
                            <div className="text-[8px] font-mono text-white/10">SELECT PARAMETERS & SYNTHESIZE</div>
                        </div>
                    )}
                </div>

                <div className="absolute bottom-10 left-10 flex gap-4">
                    <div className="glass px-4 py-2 rounded-2xl text-[9px] font-black uppercase tracking-widest text-white/40 border border-white/5">Grid_Snap: ON</div>
                    <div className="glass px-4 py-2 rounded-2xl text-[9px] font-black uppercase tracking-widest text-white/40 border border-white/5">Auto_LOD: ACTIVE</div>
                </div>
            </div>

            {/* Directives Rack */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 h-full bg-white/5 backdrop-blur-3xl overflow-y-auto">
                    <div className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">World Directives</div>

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Environmental Presets</div>
                        <div className="grid grid-cols-2 gap-3">
                            {['Tropical', 'Desolate', 'Cyberpunk', 'Gothic'].map(b => (
                                <button key={b} onClick={() => setBiome(b)}
                                    className={`py-3 px-4 rounded-xl text-[9px] font-black transition-all border ${biome === b ? 'bg-white text-black border-white' : 'bg-black/20 text-white/40 border-white/5 hover:border-white/20'}`}
                                >
                                    {b.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Atmospheric Lighting</div>
                        <div className="flex gap-2">
                            {['Cinematic', 'Eerie', 'Neon', 'Natural'].map(l => (
                                <button key={l} onClick={() => setLighting(l)}
                                    className={`flex-1 py-3 rounded-xl text-[8px] font-black transition-all border ${lighting === l ? 'bg-white text-black border-white' : 'bg-black/20 text-white/40 border-white/5 hover:border-white/20'}`}
                                >
                                    {l.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">World Scale</div>
                        <div className="grid grid-cols-2 gap-3">
                            {['Small', 'Massive'].map(s => (
                                <button key={s} onClick={() => setDesignScale(s)}
                                    className={`py-3 px-4 rounded-xl text-[9px] font-black transition-all border ${designScale === s ? 'bg-white text-black border-white' : 'bg-black/20 text-white/40 border-white/5 hover:border-white/20'}`}
                                >
                                    {s.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto space-y-4 pt-8">
                        <button onClick={handleSynthesizeWorld} disabled={isAscending}
                            className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.4em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                ${isAscending ? 'bg-white/10 text-white animate-pulse' : 'bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_40px_rgba(0,242,255,0.4)]'}
                            `}
                        >
                            {isAscending ? 'Forging World...' : '✨ Manifest World'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
