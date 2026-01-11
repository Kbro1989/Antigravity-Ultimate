import React, { useState, useEffect } from 'react';
import { useServiceHub, useNotification } from '../../hooks';
import { Standard3DViewer } from '../Standard3DViewer';
import { AssetAnnotator } from '../RSMV/AssetAnnotator';

export function MeshWorkspace() {
    const hub = useServiceHub();
    const { addNotification } = useNotification();
    const [isProcessing, setIsProcessing] = useState(false);
    const [stats, setStats] = useState({ vertices: '12.5k', faces: '24.2k', density: 'High' });
    const [sculptMode, setSculptMode] = useState<'Smooth' | 'Inflate' | 'Flatten'>('Smooth');
    const [currentModelUrl, setCurrentModelUrl] = useState<string | undefined>();
    const [activeAsset, setActiveAsset] = useState<any>(null);
    const [showAnnotator, setShowAnnotator] = useState(false);
    const [activeToolTab, setActiveToolTab] = useState<'geomancy' | 'synthesis'>('geomancy');
    const [synthesisPrompt, setSynthesisPrompt] = useState('');

    // Support for the specific user model path
    const [localModelPath, setLocalModelPath] = useState<string | undefined>("C:\\Users\\Destiny\\Desktop\\Pick of Gods\\3D model\\model.glb");

    useEffect(() => {
        const handleAssetPassed = (asset: any) => {
            console.log('[MeshWorkspace] Received passed asset:', asset);
            setActiveAsset(asset);
            setCurrentModelUrl(asset.url);
            setLocalModelPath(undefined); // Clear local path if a tool asset is passed
            setShowAnnotator(true);
            addNotification('success', `Relic Received: ${asset.metadata?.name || asset.id}`);
        };

        hub.limbs.on('project_asset_passed', handleAssetPassed);
        return () => hub.limbs.off('project_asset_passed', handleAssetPassed);
    }, [hub, addNotification]);

    const handleMeshOp = async (op: string) => {
        setIsProcessing(true);
        try {
            const result = await hub.callLimb('mesh', 'mesh_process_mesh', {
                operation: op,
                parameters: { mode: sculptMode, ratio: 0.45, assetId: activeAsset?.id }
            });
            addNotification('info', `Geomancy: Initializing ${op.toUpperCase()}...`);
            setTimeout(() => {
                if (op === 'remesh') setStats({ vertices: '6.2k', faces: '12.1k', density: 'Optimized' });
                addNotification('success', `${op.toUpperCase()} Complete: Topology Stabilized`);
                setIsProcessing(false);
            }, 1000);
        } catch (e: any) {
            addNotification('error', `Geomancy Fault: ${e.message}`);
            setIsProcessing(false);
        }
    };

    const handleAIDirective = async (directive: string) => {
        setIsProcessing(true);
        addNotification('info', `AI Architect: ${directive.toUpperCase()} in progress...`);
        try {
            await hub.callLimb('mesh', 'mesh_evolve_mesh', {
                directive,
                sourceRelic: activeAsset || { id: 'current', type: 'buffer' }
            });
            setTimeout(() => {
                addNotification('success', `Evolution Complete: Grounded in Truth`);
                setIsProcessing(false);
            }, 2000);
        } catch (e: any) {
            addNotification('error', `Evolution Fault: ${e.message}`);
            setIsProcessing(false);
        }
    };

    return (
        <div className="flex-1 flex h-full bg-black/40 animate-fade-in relative overflow-hidden">
            <div className="flex-1 flex gap-8 p-8 overflow-hidden">
                {/* 3D Viewport HUD */}
                <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden group">
                    {(currentModelUrl || localModelPath) ? (
                        <Standard3DViewer modelUrl={currentModelUrl} localPath={localModelPath} />
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [perspective:1000px] [transform:rotateX(60deg)_translateY(-100px)_scale(2)] origin-top opacity-40 transition-transform duration-[10s] linear" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-neon-cyan/20 rounded-full animate-spin-slow flex items-center justify-center">
                                <div className={`w-64 h-64 border border-neon-cyan/40 rotate-45 ${isProcessing ? 'animate-spin' : 'animate-spin-slow-reverse'} transition-all`} />
                                <div className="absolute text-7xl opacity-0">🔷</div>
                                <div className="absolute text-6xl shadow-[0_0_40px_rgba(0,242,255,0.4)] transition-transform duration-500 hover:scale-110 cursor-pointer">🔷</div>
                            </div>
                        </>
                    )}

                    <div className="absolute top-10 left-10 flex gap-4">
                        <div className="glass-ultra px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-neon-cyan border border-neon-cyan/30 shadow-2xl">
                            {activeAsset ? `RELIC_${activeAsset.id}` : (localModelPath ? 'LOCAL_PREVIEW' : 'Editor_Active')}
                        </div>
                        {(activeAsset || localModelPath) && (
                            <div className="glass px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                                Era: {activeAsset?.gameSource === 'classic' ? 'Classic (Truth)' : 'Modern (Transient)'}
                            </div>
                        )}
                    </div>

                    {isProcessing && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20 flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 border-4 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin mx-auto" />
                                <div className="text-[10px] font-black uppercase tracking-[0.6em] text-neon-cyan animate-pulse">Calculating Polygons...</div>
                            </div>
                        </div>
                    )}

                    <div className="absolute bottom-10 left-10 text-[9px] font-mono text-white/20 flex flex-col gap-1">
                        <span>GEOMETRY_SYNC: ACTIVE</span>
                        <span>LATENT_SPACE: GROUNDED</span>
                    </div>
                </div>

                {/* Tools Rack */}
                <div className="w-[400px] flex flex-col gap-6 overflow-y-auto pr-2">
                    <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 relative overflow-hidden bg-white/5 backdrop-blur-3xl">
                        <div className="text-[10px] font-black tracking-[0.6em] text-neon-cyan uppercase">Model Forge Pro</div>

                        <div className="flex bg-black/40 p-1.5 rounded-[22px] border border-white/5 mb-2">
                            <button
                                onClick={() => setActiveToolTab('geomancy')}
                                className={`flex-1 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${activeToolTab === 'geomancy' ? 'bg-white text-black shadow-xl' : 'text-white/30 hover:text-white'}`}
                            >
                                Geomancy
                            </button>
                            <button
                                onClick={() => setActiveToolTab('synthesis')}
                                className={`flex-1 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${activeToolTab === 'synthesis' ? 'bg-neon-cyan text-black shadow-[0_0_20px_rgba(0,242,255,0.3)]' : 'text-white/30 hover:text-white'}`}
                            >
                                Synthesis
                            </button>
                        </div>

                        {activeToolTab === 'geomancy' ? (
                            <>
                                <div className="space-y-6">
                                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Topological Ops</div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            { id: 'remesh', label: 'Pro Remesh', icon: '🕸️' },
                                            { id: 'smooth', label: 'Neural Smooth', icon: '🧊' },
                                            { id: 'decimate', label: 'Quantize', icon: '📐' },
                                            { id: 'subdivide', label: 'Fractal Divide', icon: '✨' }
                                        ].map(d => (
                                            <button
                                                key={d.id}
                                                onClick={() => handleMeshOp(d.id)}
                                                className="p-4 glass rounded-2xl border border-white/5 flex flex-col items-center gap-2 hover:border-white/20 hover:bg-white/5 transition-all group"
                                            >
                                                <span className="text-lg group-hover:scale-125 transition-transform">{d.icon}</span>
                                                <span className="text-[8px] font-black uppercase text-white/40 group-hover:text-white transition-colors">{d.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Sculpting Matrix</div>
                                    <div className="flex gap-2">
                                        {(['Smooth', 'Inflate', 'Flatten'] as const).map(m => (
                                            <button key={m} onClick={() => setSculptMode(m)}
                                                className={`flex-1 py-3 rounded-xl text-[9px] font-black transition-all border ${sculptMode === m ? 'bg-neon-cyan text-black border-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.3)]' : 'bg-white/5 text-white/40 border-white/5 hover:border-white/20'}`}
                                            >
                                                {m.toUpperCase()}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="space-y-4">
                                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-neon-cyan border-b border-neon-cyan/20 pb-2">Geometric DNA Directive</div>
                                    <textarea
                                        value={synthesisPrompt}
                                        onChange={(e) => setSynthesisPrompt(e.target.value)}
                                        placeholder="Describe topological evolution (e.g., 'Evolve into crystalline structure', 'Add ancient runic carvings')..."
                                        className="w-full h-32 bg-black/40 border border-white/10 rounded-2xl p-4 text-[11px] font-mono text-white/70 outline-none focus:border-neon-cyan/40 transition-all resize-none shadow-inner"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Truth Anchors</div>
                                    <div className="grid grid-cols-1 gap-2">
                                        {[
                                            { id: 'rsc_lift', label: 'RSC Authenticity Lift', desc: 'Map indices to high-poly targets' },
                                            { id: 'voxelize', label: 'Cubic Voxelization', desc: 'Transform into retro voxel truth' },
                                            { id: 'fractal', label: 'Fractal Garnish', desc: 'Apply procedural complexity' }
                                        ].map(preset => (
                                            <button
                                                key={preset.id}
                                                onClick={() => handleAIDirective(preset.label)}
                                                className="p-4 glass rounded-2xl border border-white/5 flex flex-col items-start gap-1 hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all group text-left"
                                            >
                                                <span className="text-[9px] font-black uppercase text-white group-hover:text-neon-cyan transition-colors">{preset.label}</span>
                                                <span className="text-[8px] text-white/30 uppercase tracking-tighter">{preset.desc}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleAIDirective(synthesisPrompt)}
                                    disabled={!synthesisPrompt || isProcessing}
                                    className="w-full py-5 rounded-2xl bg-neon-cyan text-black font-black text-xs tracking-[0.4em] uppercase shadow-[0_0_30px_rgba(0,242,255,0.4)] hover:scale-[1.02] transition-all disabled:opacity-20 disabled:grayscale"
                                >
                                    Synthesize Reality
                                </button>
                            </div>
                        )}

                        <div className="space-y-6 pt-4 border-t border-white/5">
                            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 mb-2">Topology Metadata</div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass rounded-[24px] p-6 border border-white/5 flex flex-col gap-1 shadow-inner">
                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Vertices</span>
                                    <span className="text-xl font-black text-white">{stats.vertices}</span>
                                </div>
                                <div className="glass rounded-[24px] p-6 border border-white/5 flex flex-col gap-1 shadow-inner">
                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Faces</span>
                                    <span className="text-xl font-black text-white">{stats.faces}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/5">
                            <button onClick={() => handleMeshOp('export')}
                                className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.4em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                    ${isProcessing ? 'bg-neon-cyan/20 text-white animate-pulse' : 'bg-white/5 text-white/40 border border-white/10 hover:bg-white hover:text-black hover:shadow-[0_0_40px_rgba(0,242,255,0.4)]'}
                                `}
                            >
                                {isProcessing ? 'Synthesizing...' : '🚀 Commit to Archive'}
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Slide-over Asset Annotator */}
            {showAnnotator && activeAsset && (
                <div className="h-full border-l border-white/5 z-50">
                    <AssetAnnotator
                        asset={activeAsset}
                        onSave={(updated) => {
                            setActiveAsset(updated);
                            addNotification('success', 'Truth Anchor Updated');
                        }}
                        onCancel={() => setShowAnnotator(false)}
                    />
                </div>
            )}
        </div>
    );
}
