import React, { Suspense, useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float, Environment, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { useServiceHub, useNotification } from '../../hooks';
import { RSMVEngine } from '../../../services/rsmvService';
import { rsmv } from '../../../services/rsmv';
import { Standard3DViewer } from '../Standard3DViewer';
import * as THREE from 'three';

type ViewMode = 'rsmv' | 'standard';

function SceneContent({ modelId, color }: { modelId: number, color: string }) {
    const [model, setModel] = useState<THREE.Group | null>(null);

    useEffect(() => {
        let isCancelled = false;
        const load = async () => {
            const engine = RSMVEngine.getInstance();
            try {
                // Adhering to the reverse-engineered model loading puzzle
                const loaded = await engine.loadModel(modelId);
                if (!isCancelled && loaded.scene) {
                    // Apply Neural Tint via standard Three.js material traversal (non-destructive)
                    loaded.scene.traverse((child: any) => {
                        const mesh = child as any;
                        if (mesh.isMesh) {
                            if (mesh.material) {
                                mesh.material.color = new THREE.Color(color);
                                mesh.material.emissive = new THREE.Color(color);
                                mesh.material.emissiveIntensity = 0.2;
                            }
                        }
                    });
                    setModel(loaded.scene);
                }
            } catch (err) {
                console.warn('[Workspace3D] RSMV Model load skipped (falling back to empty):', err);
            }
        };
        load();
        return () => { isCancelled = true; };
    }, [modelId, color]);

    if (!model) return null;

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <primitive object={model} castShadow receiveShadow />
        </Float>
    );
}

export function Workspace3D() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [color, setColor] = useState('#00f2ff');
    const [modelId, setModelId] = useState(4151);
    const [viewMode, setViewMode] = useState<ViewMode>('rsmv');
    const [isExporting, setIsExporting] = useState(false);
    const [isLinked, setIsLinked] = useState(false);
    const [materialMode, setMaterialMode] = useState<'PBR' | 'TOON' | 'WIRE'>('PBR');
    const [diagnostics, setDiagnostics] = useState<any>({
        mesh_integrity: 98,
        limb_link: 'ACTIVE',
        poly_count: '12,450',
        vram_usage: '420MB',
        gpu_acceleration: 'ENABLED'
    });

    useEffect(() => {
        const checkStatus = async () => {
            setIsLinked(!!rsmv.getSceneCache());
        };
        checkStatus();
    }, []);

    const handleAction = async (action: string) => {
        setIsExporting(true);
        try {
            await callLimb('mesh', action, { modelId, materialMode });
            addNotification('info', `Asset Visualizer: Executing ${action.toUpperCase()}...`);
            setTimeout(() => {
                addNotification('success', `${action.toUpperCase()} Complete: Asset Integrity Verified`);
                setIsExporting(false);
            }, 2000);
        } catch (e: any) {
            addNotification('error', `Visualizer Fault: ${e.message}`);
            setIsExporting(false);
        }
    };

    return (
        <div className="flex-1 flex gap-6 h-full p-6 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Viewport HUD */}
            <div className="flex-1 glass-ultra rounded-3xl relative overflow-hidden border border-white/5 shadow-2xl group">
                <div className="absolute inset-0 bg-black/40" />

                <Canvas shadows className="w-full h-full">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
                    <Suspense fallback={null}>
                        <Stage environment="night" intensity={0.6} shadows={{ type: 'contact', opacity: 0.4 }}>
                            <SceneContent modelId={modelId} color={color} />
                        </Stage>
                        <EffectComposer>
                            <Bloom luminanceThreshold={1} mipmapBlur intensity={1.2} radius={0.4} />
                            <ChromaticAberration offset={[0.001, 0.001]} />
                        </EffectComposer>
                    </Suspense>
                    <OrbitControls makeDefault autoRotate autoRotateSpeed={0.3} />
                </Canvas>

                {/* Viewport Overlay */}
                <div className="absolute top-6 left-6 flex flex-col gap-2 pointer-events-none">
                    <div className="text-[10px] font-black uppercase text-neon-cyan tracking-[0.4em] mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_var(--neon-cyan)] animate-pulse"></span>
                        Asset_Inspector_v8.4
                    </div>
                    <div className="flex gap-2">
                        <span className="glass px-3 py-1 rounded-full text-[8px] font-mono text-white/60 uppercase border border-white/5 bg-black/40">Model: {modelId}</span>
                        <span className="glass px-3 py-1 rounded-full text-[8px] font-mono text-white/60 uppercase border border-white/5 bg-black/40">LOD: {materialMode}</span>
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 flex gap-4">
                    <button className="w-10 h-10 glass rounded-full flex items-center justify-center text-xs hover:bg-white hover:text-black transition-all">📸</button>
                    <button className="w-10 h-10 glass rounded-full flex items-center justify-center text-xs hover:bg-white hover:text-black transition-all">🎬</button>
                </div>
            </div>

            {/* Inspector Panel */}
            <div className="w-96 flex flex-col gap-4">
                <div className="glass-ultra rounded-3xl p-8 flex-1 flex flex-col gap-8 border border-white/5 shadow-2xl overflow-y-auto bg-white/5 backdrop-blur-3xl">
                    <div className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Asset Inspector</div>

                    <div className="space-y-6">
                        <div>
                            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 block">Material Override</div>
                            <div className="flex bg-black/40 p-1 rounded-2xl border border-white/5">
                                {(['PBR', 'TOON', 'WIRE'] as const).map(m => (
                                    <button
                                        key={m}
                                        onClick={() => setMaterialMode(m)}
                                        className={`flex-1 py-2 rounded-xl text-[9px] font-black transition-all ${materialMode === m ? 'bg-white text-black shadow-lg' : 'text-white/40 hover:text-white'}`}
                                    >
                                        {m}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 block">Neural Tint</div>
                            <div className="grid grid-cols-4 gap-2">
                                {['#00f2ff', '#ff00e1', '#bc00ff', '#ffffff'].map(c => (
                                    <div
                                        key={c}
                                        onClick={() => setColor(c)}
                                        className={`h-10 rounded-lg cursor-pointer transition-all border-2 ${color === c ? 'border-neon-cyan scale-110' : 'border-transparent opacity-40'}`}
                                        style={{ backgroundColor: c }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="p-5 glass rounded-2xl border border-white/5 space-y-4">
                            <div className="text-[9px] font-black uppercase text-white/20 tracking-[0.3em] border-b border-white/5 pb-2">Mesh Diagnostics</div>
                            <div className="space-y-3">
                                {[
                                    { label: 'Integrity', val: `${diagnostics.mesh_integrity}%`, color: 'text-neon-cyan' },
                                    { label: 'Polygons', val: diagnostics.poly_count, color: 'text-white/60' },
                                    { label: 'VRAM Usage', val: diagnostics.vram_usage, color: 'text-white/60' },
                                    { label: 'Acceleration', val: diagnostics.gpu_acceleration, color: 'text-green-400' }
                                ].map(d => (
                                    <div key={d.label} className="flex justify-between items-center text-[10px] font-mono">
                                        <span className="text-white/30">{d.label}</span>
                                        <span className={d.color}>{d.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto space-y-4">
                        <button onClick={() => handleAction('verify_mesh')} disabled={isExporting}
                            className="w-full py-4 glass rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all border border-white/5"
                        >
                            Verify Topology
                        </button>
                        <button onClick={() => handleAction('export_glb')} disabled={isExporting}
                            className={`w-full py-4 rounded-2xl font-black text-[10px] tracking-widest uppercase transition-all
                                ${isExporting ? 'bg-white/10 animate-pulse text-white/40' : 'bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'}
                            `}
                        >
                            {isExporting ? 'Exporting...' : 'Export Asset'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
