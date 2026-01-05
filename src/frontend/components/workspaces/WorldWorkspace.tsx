import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';
import { Standard3DViewer } from '../Standard3DViewer';

export function WorldWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [seed, setSeed] = useState(823749823);
    const [isGenerating, setIsGenerating] = useState(false);

    const [worldData, setWorldData] = useState<any>(null);

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            const result: any = await callLimb('world', 'world_generate_terrain', {
                seed: seed,
                algorithm: 'perlin',
                params: { octaves: 4, lacunarity: 2.0 }
            });
            setWorldData(result);
            addNotification('success', `Reality Weaver: Terrain Matrix Generated [SEED: ${seed}]`);
            // Don't change seed immediately so user can see what they generated
        } catch (e: any) {
            addNotification('error', `Genesis Fault: ${e.message}`);
        } finally {
            setIsGenerating(false);
        }
    };

    const biomes = worldData?.biomes || ['Oceanic', 'Viridian', 'Arid', 'Glacial', 'Volcanic'];
    const features = worldData?.features || ['Sea Level 62m', 'Fog 0.04', 'Erosion 1.2', 'Temp 24°C'];

    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Map Viewport HUD */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col group">
                <div className="absolute inset-0 bg-black">
                    {/* Real 3D Terrain Viewport */}
                    <div className="w-full h-full relative z-10">
                        <Standard3DViewer modelUrl={worldData?.terrainMap || "map://50,50"} />
                    </div>

                    {isGenerating && (
                        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/40 backdrop-blur-sm">
                            <div className="flex flex-col items-center gap-4">
                                <div className="text-neon-green text-sm font-black uppercase tracking-[0.8em] animate-pulse">Forging Continents...</div>
                                <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-neon-green animate-shimmer w-full" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="absolute top-10 left-10 flex gap-4 z-20">
                    <div className="glass-ultra px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-neon-green border border-neon-green/30 shadow-2xl">SEED: {seed}</div>
                    <div className="glass px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-white/20 border border-white/5 shadow-2xl">Cluster: [Z-4]</div>
                </div>

                <div className="mt-auto p-10 z-20 glass-ultra border-t border-white/5 bg-black/60 backdrop-blur-3xl">
                    <div className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40 mb-6">Biome Distribution Matrix</div>
                    <div className="h-4 w-full flex rounded-3xl overflow-hidden shadow-inner border border-white/10">
                        {biomes.map((biome: string, i: number) => (
                            <div
                                key={i}
                                className={`h-full transition-all duration-1000 hover:opacity-80 cursor-pointer`}
                                style={{ width: `${100 / biomes.length}%`, backgroundColor: `hsl(${(i * 360) / biomes.length}, 70%, 50%)` }}
                                title={biome}
                            />
                        ))}
                    </div>
                    <div className="mt-4 flex justify-between text-[8px] font-black text-white/20 uppercase tracking-widest">
                        {biomes.slice(0, 3).map((b: string) => <span key={b}>{b}</span>)}
                    </div>
                </div>
            </div>

            {/* Genesis Rack */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 flex flex-col gap-8 border border-white/5 shadow-2xl relative overflow-hidden flex-1">
                    <div className="text-[10px] font-black tracking-[0.6em] text-neon-green uppercase">Genesis Engine v6.5</div>

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Procedural Noise</div>
                        <div className="space-y-6">
                            {['Octaves', 'Lacunarity', 'Persistence'].map(p => (
                                <div key={p} className="space-y-3">
                                    <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-white/40">
                                        <span>{p}</span>
                                        <span className="text-neon-green">{(Math.random() * 4).toFixed(2)}</span>
                                    </div>
                                    <input type="range" className="w-full h-1 bg-black/40 rounded-full appearance-none cursor-pointer accent-neon-green" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Atmospheric Suite</div>
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((f: string, i: number) => (
                                <div key={i} className="p-4 glass rounded-[24px] border border-white/5 flex flex-col gap-1 hover:border-white/20 transition-all cursor-pointer">
                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Feature {i + 1}</span>
                                    <span className="text-xs font-bold text-white truncate" title={f}>{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto space-y-4">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Kernel Protocol</div>
                        <select className="w-full bg-black/60 border border-white/5 rounded-2xl p-4 text-[10px] font-black text-neon-green outline-none uppercase tracking-[0.2em] shadow-inner">
                            <option>Perlin_Noise_Standard</option>
                            <option>Simplex_Neural_Fast</option>
                            <option>Voronoi_Cellular_Deep</option>
                        </select>
                        <button onClick={handleGenerate} disabled={isGenerating}
                            className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.4em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                ${isGenerating ? 'bg-neon-green/20 text-white border border-neon-green/50' : 'bg-white text-black hover:bg-neon-green hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]'}
                            `}
                        >
                            {isGenerating ? 'Forging...' : '🌍 Rewrite World'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
