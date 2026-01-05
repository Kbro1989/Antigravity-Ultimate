import React, { useState, useEffect } from 'react';
import { useServiceHub, useNotification } from '../../hooks';
import { Standard3DViewer } from '../Standard3DViewer';

export function MaterialWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [params, setParams] = useState({ metallic: 0.8, roughness: 0.2, emissive: 0.5, fresnel: 0.3 });
    const [isCompiling, setIsCompiling] = useState(false);
    const [materialUrl, setMaterialUrl] = useState<string>('rsmv://1000001'); // materialCube constant

    const handleCompile = async () => {
        setIsCompiling(true);
        try {
            await callLimb('material', 'generate_shader', {
                properties: params,
                base_color: '#00f2ff',
                transparency: false
            });
            addNotification('info', 'Shader Lab: Compiling Neural Material... [PBR_v8]');
            setTimeout(() => {
                addNotification('success', 'Material Manifest Baked Successfully');
                setIsCompiling(false);
            }, 1800);
        } catch (e: any) {
            addNotification('error', `Compiler Fault: ${e.message}`);
            setIsCompiling(false);
        }
    };

    return (
        <div className="flex-1 flex gap-6 h-full p-6 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Material Preview */}
            <div className="flex-1 glass-ultra rounded-3xl relative overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05)_0%,transparent_70%)]" />

                {/* Real 3D Viewer */}
                <div className="w-full h-full relative z-10">
                    <Standard3DViewer
                        modelUrl={materialUrl}
                    />
                </div>

                {/* Info Overlays */}
                <div className="absolute bottom-6 left-6 flex gap-4 z-20">
                    <div className="glass px-3 py-1 rounded text-[9px] font-mono text-white/40 uppercase">RENDER: PBR_REALTIME</div>
                    <div className="glass px-3 py-1 rounded text-[9px] font-mono text-neon-cyan uppercase">SAMPLING: 128spp</div>
                </div>
            </div>

            {/* Properties Panel */}
            <div className="w-96 flex flex-col gap-4">
                <div className="glass-ultra rounded-3xl p-6 flex-1 flex flex-col gap-8 border border-white/5 shadow-2xl overflow-y-auto">
                    <div className="text-[10px] font-black tracking-[0.4em] text-neon-purple uppercase flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse shadow-[0_0_8px_var(--neon-purple)]"></span>
                        Shader Lab
                    </div>

                    <div className="space-y-8">
                        {/* Metallic Slider */}
                        <div>
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3 block">
                                <span>Metallic</span>
                                <span className="text-neon-cyan">{Math.round(params.metallic * 100)}%</span>
                            </div>
                            <input
                                type="range" min="0" max="1" step="0.01"
                                value={params.metallic}
                                onChange={(e) => setParams({ ...params, metallic: parseFloat(e.target.value) })}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
                            />
                        </div>

                        {/* Roughness Slider */}
                        <div>
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3 block">
                                <span>Roughness</span>
                                <span className="text-neon-cyan">{Math.round(params.roughness * 100)}%</span>
                            </div>
                            <input
                                type="range" min="0" max="1" step="0.01"
                                value={params.roughness}
                                onChange={(e) => setParams({ ...params, roughness: parseFloat(e.target.value) })}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon-magenta"
                            />
                        </div>

                        {/* Emissive Slider */}
                        <div>
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3 block">
                                <span>Emissive Intensity</span>
                                <span className="text-neon-cyan">{Math.round(params.emissive * 10).toFixed(1)}x</span>
                            </div>
                            <input
                                type="range" min="0" max="10" step="0.1"
                                value={params.emissive}
                                onChange={(e) => setParams({ ...params, emissive: parseFloat(e.target.value) })}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon-purple"
                            />
                        </div>

                        {/* Presets */}
                        <div className="grid grid-cols-2 gap-2">
                            <button className="py-2 px-4 glass rounded-xl text-[9px] font-black uppercase border border-white/5 hover:border-neon-cyan transition-all text-white/50 hover:text-white">Polished Steel</button>
                            <button className="py-2 px-4 glass rounded-xl text-[9px] font-black uppercase border border-white/5 hover:border-neon-magenta transition-all text-white/50 hover:text-white">Frosted Glass</button>
                            <button className="py-2 px-4 glass rounded-xl text-[9px] font-black uppercase border border-white/5 hover:border-neon-purple transition-all text-white/50 hover:text-white">Biolume Plastic</button>
                            <button className="py-2 px-4 glass rounded-xl text-[9px] font-black uppercase border border-white/5 hover:border-white transition-all text-white/50 hover:text-white">Matte Carbon</button>
                        </div>
                    </div>

                    {/* Shader Code Preview Mockup */}
                    <div className="mt-8 p-4 bg-black/40 rounded-2xl border border-white/5 font-mono text-[9px] text-white/30 space-y-1">
                        <div>uniform float metallic = {params.metallic.toFixed(2)};</div>
                        <div>uniform float roughness = {params.roughness.toFixed(2)};</div>
                        <div>void fragment() {'{'}</div>
                        <div className="pl-4">vec3 color = pbr_shading(params);</div>
                        <div className="pl-4">gl_FragColor = vec4(color, 1.0);</div>
                        <div>{'}'}</div>
                    </div>

                    {/* Compile Button */}
                    <button
                        onClick={handleCompile}
                        disabled={isCompiling}
                        className={`w-full py-5 rounded-2xl mt-auto font-black text-xs tracking-[0.2em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                            ${isCompiling
                                ? 'bg-neon-purple/20 text-white border border-neon-purple/50 cursor-wait'
                                : 'bg-neon-cyan/80 text-black hover:bg-neon-cyan hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'
                            }
                        `}
                    >
                        {isCompiling ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Baking...</span>
                            </>
                        ) : 'Bake Material Manifest'}
                    </button>
                </div>
            </div>
        </div>
    );
}
