import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function ImageWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [isProcessing, setIsProcessing] = useState(false);
    const [workspaceMode, setWorkspaceMode] = useState<'TEXTURE' | 'SPRITE' | 'RETRO'>('TEXTURE');
    const [generationMode, setGenerationMode] = useState<'DIRECT' | 'INSPIRE'>('DIRECT');
    const [prompt, setPrompt] = useState('Seamless cobblestone texture, mossy, dark gray');

    const handleGenerate = async (action: string) => {
        setIsProcessing(true);
        try {
            const result = (await callLimb('image', action, { prompt, mode: workspaceMode })) as any;
            addNotification('success', `${action.toUpperCase()} Initialized: Generating Game Asset...`);
            setTimeout(() => {
                addNotification('success', 'Asset Synthesis Complete: Pushed to Staging');
                setIsProcessing(false);
            }, 3000);
        } catch (e: any) {
            addNotification('error', `Synthesis Fault: ${e.message}`);
            setIsProcessing(false);
        }
    };

    const handleInspire = async () => {
        setIsProcessing(true);
        try {
            // Mock source relic
            const sourceRelic = { id: 'loc_lumbridge_castle', type: 'location_config', visual_tags: ['stone', 'castle', 'bright'] };

            addNotification('info', 'Visualizing asset from Ancient Relic...');
            const result = await callLimb('image', 'image_inspire_visual', {
                sourceRelic,
                style: workspaceMode === 'RETRO' ? 'RuneScape Classic Pixel' : 'Modern PBR'
            });

            if (result.status === 'success') {
                addNotification('success', `Relic Visual Inspired: ${result.imageUrl}`);
            }
        } catch (e: any) {
            addNotification('error', `Inspiration Fault: ${e.message}`);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Viewport HUD */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col group p-10">
                <div className="flex-1 flex gap-6 relative">
                    <div className="flex-1 glass rounded-3xl border border-white/5 overflow-hidden relative group/pane bg-black/40 flex items-center justify-center">
                        <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                            <div className="glass px-4 py-1.5 rounded-xl text-[9px] font-black text-white uppercase tracking-widest border border-white/10 bg-black/20">PREVIEW_ENGINE_v4</div>
                            <div className="flex gap-2">
                                <span className="glass px-2 py-1 rounded text-[7px] font-mono text-neon-cyan/60 uppercase">2048x2048</span>
                                <span className="glass px-2 py-1 rounded text-[7px] font-mono text-white/20 uppercase">PBR_STAGES</span>
                            </div>
                        </div>

                        {/* Functional Preview Layer */}
                        <div className="w-full h-full p-12 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05)_0%,transparent_70%)]" />
                            <div className="w-full h-full rounded-2xl border-2 border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-700">
                                <img
                                    src={isProcessing ? "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800" : "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800"}
                                    className={`w-full h-full object-cover transition-all duration-1000 ${isProcessing ? 'blur-xl opacity-40 scale-125' : 'opacity-90'}`}
                                />
                                {/* Overlay Canvas Mock */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-neon-cyan/5 flex items-center justify-center">
                                    <div className="px-6 py-3 glass rounded-full border border-neon-cyan/30 text-[10px] font-black text-neon-cyan uppercase tracking-widest cursor-pointer hover:bg-neon-cyan/20">Enter_Precision_Edit</div>
                                </div>
                            </div>
                        </div>

                        {isProcessing && (
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-24 h-24 border-2 border-neon-cyan/10 border-t-neon-cyan rounded-full animate-spin shadow-[0_0_30px_rgba(0,242,255,0.2)]" />
                                <div className="absolute text-[8px] font-black text-neon-cyan uppercase tracking-[0.4em] animate-pulse">SYNTHESIZING</div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="h-32 border-t border-white/5 bg-black/40 p-8 flex items-center justify-between mt-8">
                    <div className="flex gap-12">
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-black uppercase text-white/20 tracking-widest">Asset Category</span>
                            <span className="text-xl font-black text-neon-cyan flex items-center gap-3">
                                {mode} STUDIO
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-black uppercase text-white/20 tracking-widest">Target Protocol</span>
                            <span className="text-xl font-black text-white italic">UNIVERSAL_PBR_v6</span>
                        </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1">
                        <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                            STAGED_PATH: <span className="text-neon-magenta">/staged_assets/textures/{mode.toLowerCase()}_01.png</span>
                        </div>
                        <div className="text-[8px] font-mono text-white/10 uppercase tracking-widest">SEAMLESS_GEN: ACTIVE | MIPMAPS: OPTIMIZED</div>
                    </div>
                </div>
            </div>

            {/* Production Rack */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 flex-1 bg-white/5 backdrop-blur-3xl">
                    <div className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Texture Orchestrator</div>

                    <div className="flex gap-2">
                        {(['TEXTURE', 'SPRITE', 'RETRO'] as const).map(m => (
                            <button key={m} onClick={() => setWorkspaceMode(m)}
                                className={`flex-1 py-3 rounded-xl text-[9px] font-black transition-all border ${workspaceMode === m ? 'bg-neon-cyan text-black border-neon-cyan' : 'bg-white/5 text-white/40 border-white/5 hover:border-white/20'}`}
                            >
                                {m}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-2 mb-4">
                        <button onClick={() => setGenerationMode('DIRECT')} className={`flex-1 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${generationMode === 'DIRECT' ? 'bg-white text-black' : 'bg-white/5 text-white/40'}`}>Direct</button>
                        <button onClick={() => setGenerationMode('INSPIRE')} className={`flex-1 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${generationMode === 'INSPIRE' ? 'bg-white text-black' : 'bg-white/5 text-white/40'}`}>Relic Inspire</button>
                    </div>

                    {generationMode === 'DIRECT' ? (
                        <div className="space-y-4">
                            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Production Prompt</div>
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-[11px] text-white/80 font-mono resize-none focus:border-neon-cyan/50 outline-none h-24"
                                placeholder="Describe the asset..."
                            />
                        </div>
                    ) : (
                        <div className="p-4 bg-cyan-900/20 border border-cyan-500/20 rounded-2xl">
                            <div className="text-[8px] font-black text-cyan-400 uppercase mb-2">Source of Truth</div>
                            <div className="text-[9px] text-cyan-200/60 leading-relaxed mb-4">
                                Linked to Relic Archive (Sector 7G).
                                Latent Style: "RuneScape Classic - Low Poly/Pixel"
                            </div>
                            <div className="flex gap-2">
                                <span className="px-2 py-1 bg-cyan-500/20 rounded text-[8px] text-cyan-300 border border-cyan-500/30">ID: loc_lumbridge_castle</span>
                                <span className="px-2 py-1 bg-cyan-500/20 rounded text-[8px] text-cyan-300 border border-cyan-500/30">TYPE: SPRITE</span>
                            </div>
                        </div>
                    )}

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Synthesis Pass</div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Seamless', action: 'toggle_seamless', val: 'ON' },
                                { label: 'PBR Maps', action: 'toggle_pbr', val: 'ON' },
                                { label: 'Sheet Ext', action: 'toggle_sheet', val: 'OFF' },
                                { label: 'Palette', action: 'choose_palette', val: 'RETRO' }
                            ].map(m => (
                                <div key={m.label} className="p-4 glass rounded-[24px] border border-white/5 flex flex-col gap-1 hover:border-white/20 transition-all cursor-pointer group">
                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest group-hover:text-neon-cyan/50">{m.label}</span>
                                    <span className={`text-[10px] font-black uppercase ${m.val === 'ON' ? 'text-neon-cyan' : 'text-white/60'}`}>{m.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto space-y-4">
                        <button onClick={generationMode === 'DIRECT' ? () => handleGenerate('image_synthesize_texture') : handleInspire} disabled={isProcessing}
                            className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.4em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                ${isProcessing ? 'bg-neon-cyan/20 text-white animate-pulse border border-neon-cyan/50' : 'bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_40px_rgba(0,242,255,0.4)]'}
                            `}
                        >
                            {isProcessing ? 'Synthesizing...' : (generationMode === 'DIRECT' ? '⚡ Generate Asset' : '🎨 Inspire Asset')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
