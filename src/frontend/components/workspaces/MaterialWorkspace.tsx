import React, { useState, useEffect } from 'react';
import { useServiceHub, useNotification } from '../../hooks';
import { Standard3DViewer } from '../Standard3DViewer';

export function MaterialWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [params, setParams] = useState({ metallic: 0.8, roughness: 0.2, emissive: 0.5, fresnel: 0.3 });
    const [isCompiling, setIsCompiling] = useState(false);
    const [materialUrl, setMaterialUrl] = useState<string>('rsmv://1000001'); // materialCube constant
    const [activeTab, setActiveTab] = useState<'lab' | 'synth'>('lab');
    const [synthPrompt, setSynthPrompt] = useState('');

    const handleCompile = async () => {
        setIsCompiling(true);
        try {
            await callLimb('material', 'material_generate_shader', {
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
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Material Preview */}
            <div className="flex-1 glass-ultra rounded-[40px] relative overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center group">
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
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 flex-1 flex flex-col gap-8 border border-white/5 shadow-2xl overflow-y-auto bg-white/5 backdrop-blur-3xl">
                    <div className="text-[10px] font-black tracking-[0.4em] text-neon-purple uppercase flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse shadow-[0_0_8px_var(--neon-purple)]"></span>
                        Shader Lab
                    </div>

                    <div className="flex bg-black/40 p-1.5 rounded-[22px] border border-white/5 mb-2">
                        <button
                            onClick={() => setActiveTab('lab')}
                            className={`flex-1 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === 'lab' ? 'bg-white text-black shadow-xl' : 'text-white/30 hover:text-white'}`}
                        >
                            Shader Lab
                        </button>
                        <button
                            onClick={() => setActiveTab('synth')}
                            className={`flex-1 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === 'synth' ? 'bg-neon-purple text-white shadow-[0_0_20px_rgba(188,0,255,0.3)]' : 'text-white/30 hover:text-white'}`}
                        >
                            Neural Synth
                        </button>
                    </div>

                    {activeTab === 'lab' ? (
                        <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
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
                    ) : (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="space-y-4">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-neon-purple border-b border-neon-purple/20 pb-2">Material Persona Prompt</div>
                                <textarea
                                    value={synthPrompt}
                                    onChange={(e) => setSynthPrompt(e.target.value)}
                                    placeholder="Describe material properties (e.g., 'Iridescent dragon scales with emerald highlights')..."
                                    className="w-full h-32 bg-black/40 border border-white/10 rounded-2xl p-4 text-[11px] font-mono text-white/70 outline-none focus:border-neon-purple/40 transition-all resize-none shadow-inner"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Neural Presets</div>
                                <div className="grid grid-cols-1 gap-2">
                                    {[
                                        { id: 'ancient', label: 'Ancient Relic Chrome', desc: 'Weathered metal with oxidized copper' },
                                        { id: 'abyssal', label: 'Abyssal Void Plastic', desc: 'Light-absorbing matte with tiny sparkles' },
                                        { id: 'divine', label: 'Divine Soulstone', desc: 'Subsurface scattering with internal glow' }
                                    ].map(preset => (
                                        <button
                                            key={preset.id}
                                            onClick={() => setSynthPrompt(preset.label)}
                                            className="p-4 glass rounded-2xl border border-white/5 flex flex-col items-start gap-1 hover:border-neon-purple/30 hover:bg-neon-purple/5 transition-all group text-left"
                                        >
                                            <span className="text-[9px] font-black uppercase text-white group-hover:text-neon-purple transition-colors">{preset.label}</span>
                                            <span className="text-[8px] text-white/30 uppercase tracking-tighter">{preset.desc}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={handleCompile}
                                disabled={!synthPrompt || isCompiling}
                                className="w-full py-5 rounded-2xl bg-neon-purple text-white font-black text-xs tracking-[0.4em] uppercase shadow-[0_0_30px_rgba(188,0,255,0.4)] hover:scale-[1.02] transition-all disabled:opacity-20"
                            >
                                Synthesize Material
                            </button>
                        </div>
                    )}


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
