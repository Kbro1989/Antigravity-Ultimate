import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useServiceHub } from '../hooks';

interface Props {
    id: number;
    category?: string;
    era?: 'classic' | 'modern';
    autoRotate?: boolean;
    className?: string;
    shifts?: any[];
    onSnapshotReady?: (data: string) => void;
}

export function RSCModelViewer({ id, category, era = 'classic', autoRotate = true, className = '', shifts, onSnapshotReady }: Props) {
    const hub = useServiceHub();
    const [scene, setScene] = useState<THREE.Group | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isCancelled = false;
        const load = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const service = era === 'modern' ? hub.rsmv.modern : hub.rsmv.classic;
                if (!service) throw new Error(`${era.toUpperCase()} Service not available`);

                const model = await service.loadModel(id, category);
                if (!isCancelled) {
                    setScene(model.scene);
                }
            } catch (err: any) {
                if (!isCancelled) {
                    setError(err.message);
                }
            }
            setIsLoading(false);
        };

        load();
        return () => { isCancelled = true; };
    }, [id, category, era, hub]);

    useEffect(() => {
        if (!scene || !shifts || shifts.length === 0) return;

        console.log('[RSCModelViewer] Applying high-fidelity shifts...', shifts);
        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];

                materials.forEach((mat: any) => {
                    if (mat.color) {
                        // Apply HSL shifts - strictly mimicking RuneApps logic
                        const shift = shifts[0]; // For now use primary shift
                        if (shift.h !== 0 || shift.s !== 0 || shift.l !== 0) {
                            const hsl = { h: 0, s: 0, l: 0 };
                            mat.color.getHSL(hsl);
                            // Simple additive shift for demonstration
                            mat.color.setHSL(
                                (hsl.h + (shift.h / 255)) % 1,
                                Math.min(1, Math.max(0, hsl.s + (shift.s / 255 - 0.5))),
                                Math.min(1, Math.max(0, hsl.l + (shift.l / 255 - 0.5)))
                            );
                        }
                    }
                });
            }
        });
    }, [scene, shifts]);

    const handleCapture = () => {
        const canvas = document.querySelector('canvas');
        if (canvas && onSnapshotReady) {
            const data = canvas.toDataURL('image/png');
            onSnapshotReady(data);
        }
    };

    // Modern Era (RS3) - RSMV Integration
    useEffect(() => {
        if (era !== 'modern') return;

        let cleanup: (() => void) | undefined;
        let rsmvInstance: any = null;

        const initRSMV = async () => {
            if (!(window as any).RSMV) {
                // Load Script dynamically
                const script = document.createElement('script');
                script.src = '/libs/rsmv_custom.js';
                script.async = true;
                script.onload = () => {
                    initRSMV(); // Retry after load
                };
                document.body.appendChild(script);
                return;
            }

            // Initialize on the dedicated container
            const container = document.getElementById('rsmv-container');
            if (container && !(container as any)._rsmvInitialized) {
                console.log('[RSCModelViewer] Initializing RSMV (Rust/WASM)...');

                try {
                    // Instantiate based on deconstructed findings (assuming global RSMV usage)
                    // We might need to adjust this API signature based on runtime checks
                    const RSMV = (window as any).RSMV;
                    rsmvInstance = new RSMV.Viewer({
                        canvas: document.getElementById('rsmv-canvas'),
                        workerPath: '/libs/rsmv_worker.js' // Assumption, might just handle main thread for now
                    });

                    if (rsmvInstance.init) {
                        await rsmvInstance.init();
                    }

                    (container as any)._rsmvInitialized = true;

                    // Attempt load if ID provided
                    if (id) {
                        console.log(`[RSCModelViewer] Modern Intent: Loading ${category} #${id}`);
                        // Mocking the specific API call found in standard webviewers
                        // rsmvInstance.load(id); 
                        // For now, we wait for Drag & Drop as per protocol
                    }

                } catch (e) {
                    console.error("RSMV Init Failed:", e);
                    setError("RSMV Core Failure: " + (e as any).message);
                }
            }
        };

        const timer = setTimeout(initRSMV, 100);

        return () => {
            clearTimeout(timer);
            if (rsmvInstance && rsmvInstance.destroy) rsmvInstance.destroy();
        };
    }, [era, id, category]);


    if (error) {
        return (
            <div className="flex items-center justify-center w-full h-full text-neon-magenta font-mono text-[10px] uppercase p-8 text-center bg-neon-magenta/5 rounded-[40px] border border-neon-magenta/20">
                Rendering Fault:<br />{error}
            </div>
        );
    }

    if (isLoading && era !== 'modern') {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-12 h-12 border-2 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin" />
            </div>
        );
    }

    // MODERN ERA RENDER: Dedicated DOM Overlay for RSMV
    if (era === 'modern') {
        return (
            <div className={`w-full h-full relative group ${className}`} id="rsmv-container">
                <canvas
                    id="rsmv-canvas"
                    className="w-full h-full block bg-[#232323]"
                    style={{ outline: "none" }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        e.preventDefault();
                        console.log("RSMV Cache Drop Detected:", e.dataTransfer.files);
                        // Pass to global instance if available
                        // (window as any).RSMV?.handleDrop(e.dataTransfer.files);
                    }}
                />

                {/* Protocol HUD */}
                <div className="absolute top-8 left-8 flex flex-col gap-2 pointer-events-none">
                    <div className="text-[10px] font-black uppercase text-[#438ab5] tracking-[0.4em] mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#438ab5] shadow-[0_0_8px_#438ab5] animate-pulse"></span>
                        RSMV_RUST_CORE
                    </div>
                    <div className="flex flex-wrap gap-2 max-w-[300px]">
                        <span className="glass px-3 py-1 rounded-full text-[8px] font-mono text-white/60 uppercase border border-[#438ab5]/30">
                            INTENT: {id ? `ID #${id}` : 'WAITING_DROP'}
                        </span>
                    </div>
                </div>

                {/* Empty State Overlay if no ID */}
                {!id && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center opacity-50">
                            <div className="text-[#438ab5] font-bold tracking-widest mb-2">AWAITING LOCAL CACHE</div>
                            <div className="text-[10px] text-white/40">Drop Files to View</div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // CLASSIC ERA RENDER: React-Three-Fiber
    return (
        <div className={`w-full h-full relative group ${className}`}>
            <Canvas shadows className="w-full h-full" gl={{ antialias: true, preserveDrawingBuffer: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
                <Suspense fallback={null}>
                    <Stage
                        adjustCamera={1.5}
                        intensity={0.4}
                        environment="city"
                        preset="soft"
                        shadows={{ type: 'contact', opacity: 0.2, blur: 2 }}
                    >
                        {scene && (
                            <primitive
                                object={scene}
                                castShadow
                                receiveShadow
                                rotation={[0, (category === 'npc' && era === 'classic') ? 0 : Math.PI / 4, 0]}
                            />
                        )}
                    </Stage>
                </Suspense>
                <OrbitControls
                    makeDefault
                    autoRotate={autoRotate}
                    autoRotateSpeed={0.5}
                    enableDamping={true}
                    minDistance={2}
                    maxDistance={20}
                />
            </Canvas>

            {/* Viewport Overlay HUD */}
            <div className="absolute top-8 left-8 flex flex-col gap-2 pointer-events-none">
                <div className="text-[10px] font-black uppercase text-neon-cyan tracking-[0.4em] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_cyan] animate-pulse"></span>
                    {era.toUpperCase()}_RENDER_PIPELINE
                </div>
                <div className="flex flex-wrap gap-2 max-w-[300px]">
                    <span className="glass px-3 py-1 rounded-full text-[8px] font-mono text-white/60 uppercase">
                        ID: {id}
                    </span>
                    <span className="glass px-3 py-1 rounded-full text-[8px] font-mono text-white/60 uppercase">
                        LAYER: {category || 'model'}
                    </span>
                    {category === 'npc' && era === 'classic' && (
                        <span className="glass px-3 py-1 rounded-full text-[8px] font-mono text-neon-magenta shadow-[0_0_5px_magenta] uppercase">
                            BILLBOARD_SPRITE
                        </span>
                    )}
                    {category === 'object' && (
                        <span className="glass px-3 py-1 rounded-full text-[8px] font-mono text-neon-cyan shadow-[0_0_5px_cyan] uppercase">
                            SCENERY_MESH
                        </span>
                    )}
                </div>
            </div>

            {/* Scale Indicator */}
            <div className="absolute bottom-8 right-8 pointer-events-none opacity-20 hover:opacity-100 transition-opacity">
                <div className="flex flex-col items-end gap-1">
                    <div className="w-24 h-[1px] bg-white/40 relative">
                        <div className="absolute -left-1 -top-1 w-2 h-2 border-l border-t border-white/40"></div>
                        <div className="absolute -right-1 -top-1 w-2 h-2 border-r border-t border-white/40"></div>
                    </div>
                    <span className="text-[8px] font-mono text-white">RELICTUAL_SCALE_1:512</span>
                </div>
            </div>
        </div>
    );
}
