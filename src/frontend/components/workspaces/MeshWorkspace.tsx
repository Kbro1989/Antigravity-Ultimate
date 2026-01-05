import React, { useState, useEffect } from 'react';
import { useServiceHub, useNotification } from '../../hooks';
import { Standard3DViewer } from '../Standard3DViewer';

export function MeshWorkspace() {
    const hub = useServiceHub();
    const { addNotification } = useNotification();
    const [isProcessing, setIsProcessing] = useState(false);
    const [stats, setStats] = useState({ vertices: '12.5k', faces: '24.2k', density: 'High' });
    const [sculptMode, setSculptMode] = useState<'Smooth' | 'Inflate' | 'Flatten'>('Smooth');
    const [currentModelUrl, setCurrentModelUrl] = useState<string | undefined>();
    const [activeAsset, setActiveAsset] = useState<any>(null);

    // Support for the specific user model path
    const [localModelPath, setLocalModelPath] = useState<string | undefined>("C:\\Users\\Destiny\\Desktop\\Pick of Gods\\3D model\\model.glb");

    useEffect(() => {
        const handleAssetPassed = (asset: any) => {
            console.log('[MeshWorkspace] Received passed asset:', asset);
            setActiveAsset(asset);
            setCurrentModelUrl(asset.url);
            setLocalModelPath(undefined); // Clear local path if a tool asset is passed
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
            }, 1500);
        } catch (e: any) {
            addNotification('error', `Geomancy Fault: ${e.message}`);
            setIsProcessing(false);
        }
    };

    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* 3D Viewport HUD */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden group">
                {(currentModelUrl || localModelPath) ? (
                    <Standard3DViewer modelUrl={currentModelUrl} localPath={localModelPath} />
                ) : (
                    <>
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [perspective:1000px] [transform:rotateX(60deg)_translateY(-100px)_scale(2)] origin-top opacity-40 transition-transform duration-[10s] linear" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-neon-cyan/20 rounded-full animate-spin-slow flex items-center justify-center">
                            <div className={`w-64 h-64 border border-neon-cyan/40 rotate-45 ${isProcessing ? 'animate-spin' : 'animate-spin-slow-reverse'} transition-all`} />
                            <div className="absolute text-7xl opacity-20 filter blur-sm">🔷</div>
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
                            Origin: {activeAsset?.url?.startsWith('rsc') ? 'Classic' : 'Native'}
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
                    <span>INDEX_BOUNDS: [-1.2, 4.5, 0.8]</span>
                    <span>ACTIVE_LAYER: LOD_0</span>
                </div>
            </div>

            {/* Tools Rack */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 relative overflow-hidden bg-white/5 backdrop-blur-3xl">
                    <div className="text-[10px] font-black tracking-[0.6em] text-neon-cyan uppercase">3D Sculptor Studio</div>

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Topology Metadata</div>
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

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Sculpting Matrix</div>
                        <div className="flex gap-2">
                            {(['Smooth', 'Inflate', 'Flatten'] as const).map(m => (
                                <button key={m} onClick={() => setSculptMode(m)}
                                    className={`flex-1 py-3 rounded-xl text-[9px] font-black transition-all border ${sculptMode === m ? 'bg-neon-cyan text-black border-neon-cyan' : 'bg-white/5 text-white/40 border-white/5 hover:border-white/20'}`}
                                >
                                    {m.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Mesh Operations</div>
                        <div className="grid grid-cols-2 gap-4">
                            <button onClick={() => handleMeshOp('remesh')} className="p-4 glass rounded-2xl border border-white/5 text-[10px] font-black uppercase hover:border-neon-cyan/50 hover:text-neon-cyan transition-all">Remesh</button>
                            <button onClick={() => handleMeshOp('retopo')} className="p-4 glass rounded-2xl border border-white/5 text-[10px] font-black uppercase hover:border-neon-magenta/50 hover:text-neon-magenta transition-all">Auto-Retopo</button>
                        </div>
                        <button onClick={() => handleMeshOp('export')}
                            className={`w-full py-5 rounded-2xl mt-4 font-black text-xs tracking-[0.4em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                ${isProcessing ? 'bg-neon-cyan/20 text-white animate-pulse' : 'bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_40px_rgba(0,242,255,0.4)]'}
                            `}
                        >
                            {isProcessing ? 'Processing...' : '🚀 Push to Staging'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
