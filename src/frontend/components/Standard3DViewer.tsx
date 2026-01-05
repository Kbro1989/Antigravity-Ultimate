import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float, Environment, PerspectiveCamera, ContactShadows } from '@react-three/drei';
// import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { standard3D, LoadedModel } from '../../services/Standard3DService';
import * as THREE from 'three';

interface Props {
    modelUrl?: string;
    localPath?: string;
    autoRotate?: boolean;
    className?: string;
    onLoad?: (model: LoadedModel) => void;
    onError?: (error: Error) => void;
}

export function Standard3DViewer({ modelUrl, localPath, autoRotate = false, className = '', onLoad, onError }: Props) {
    const [loadedModel, setLoadedModel] = useState<LoadedModel | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;
        const load = async () => {
            try {
                let model: LoadedModel;
                if (localPath) {
                    model = await standard3D.loadLocalModel(localPath);
                } else if (modelUrl) {
                    model = await standard3D.loadModelByUrl(modelUrl);
                } else {
                    return;
                }

                if (!isCancelled) {
                    setLoadedModel(model);
                    onLoad?.(model);
                }
            } catch (err: any) {
                if (!isCancelled) {
                    setError(err.message);
                    onError?.(err);
                }
            }
        };

        load();
        return () => { isCancelled = true; };
    }, [modelUrl, localPath, onLoad, onError]);

    if (error) {
        return (
            <div className="flex items-center justify-center w-full h-full text-red-400 font-mono text-xs uppercase p-8 text-center bg-red-500/10 rounded-3xl border border-red-500/20">
                Error Loading Standard Model:<br />{error}
            </div>
        );
    }

    return (
        <div className={`w-full h-full relative group ${className}`}>
            <Canvas shadows className="w-full h-full">
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
                <Suspense fallback={null}>
                    <Stage environment="night" intensity={0.6} shadows={{ type: 'contact', opacity: 0.4 }}>
                        {loadedModel && (
                            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                                <primitive object={loadedModel.scene} castShadow receiveShadow />
                            </Float>
                        )}
                    </Stage>
                    {/* <EffectComposer>
                        <Bloom luminanceThreshold={1} mipmapBlur intensity={1.2} radius={0.4} />
                        <ChromaticAberration offset={[0.001, 0.001]} />
                        <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    </EffectComposer> */}
                </Suspense>
                <OrbitControls makeDefault autoRotate={autoRotate} autoRotateSpeed={0.3} />
            </Canvas>

            {/* Viewport Overlay HUD */}
            <div className="absolute top-6 left-6 flex flex-col gap-2 pointer-events-none">
                <div className="text-[10px] font-black uppercase text-neon-cyan tracking-[0.4em] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_var(--neon-cyan)] animate-pulse"></span>
                    RENDER_MODE: STANDARD_GLTF
                </div>
                <div className="flex gap-2">
                    <span className="glass px-2 py-1 rounded text-[8px] font-mono text-white/40 uppercase">
                        Source: {localPath ? 'Local_Storage' : 'Remote_Asset'}
                    </span>
                </div>
            </div>
        </div>
    );
}
