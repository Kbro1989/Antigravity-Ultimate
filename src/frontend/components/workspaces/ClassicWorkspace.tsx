import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei';
import { useServiceHub, useNotification } from '../../hooks';
import * as THREE from 'three';

function ClassicScene({ modelId }: { modelId: string }) {
    const [model, setModel] = useState<THREE.Group | null>(null);
    const serviceHub = useServiceHub();

    useEffect(() => {
        let isCancelled = false;
        const load = async () => {
            try {
                const classic = await serviceHub.rsmv.classic || await serviceHub.initClassicPipeline();
                const loaded = await classic.loadModel(parseInt(modelId));
                if (!isCancelled && loaded.scene) {
                    setModel(loaded.scene);
                }
            } catch (err) {
                console.warn('[ClassicWorkspace] Model load failed:', err);
            }
        };
        load();
        return () => { isCancelled = true; };
    }, [modelId]);

    if (!model) return null;

    return <primitive object={model} castShadow receiveShadow />;
}

export function ClassicWorkspace() {
    const { addNotification } = useNotification();
    const serviceHub = useServiceHub();
    const [modelId, setModelId] = useState('0');
    const [isLinked, setIsLinked] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [assets, setAssets] = useState<any[]>([]);

    useEffect(() => {
        const loadAssets = async () => {
            try {
                const classic = await serviceHub.rsmv.classic || await serviceHub.initClassicPipeline();
                const items = await classic.getItems();
                if (items && items.length > 0) {
                    setAssets(items.map((item: any) => ({
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        type: 'item'
                    })));
                }
            } catch (err) {
                console.error("[ClassicWorkspace] Asset load failed", err);
            }
        };
        loadAssets();
    }, [isLinked]);

    const handleLink = async () => {
        try {
            const classic = await serviceHub.initClassicPipeline();
            const path = 'C:\\Users\\Destiny\\Desktop\\New folder\\POG-Ultimate\\local\\rsc_data';
            const success = await classic.linkClassicDir(path);
            if (success) {
                setIsLinked(true);
                addNotification('success', 'RSC Cache Linked Successfully');
            }
        } catch (e: any) {
            addNotification('error', `Link Failed: ${e.message}`);
        }
    };

    const filteredAssets = assets.filter(a =>
        a.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 50);

    return (
        <div className="flex-1 flex gap-6 h-full p-6 bg-[#2a2419] animate-fade-in relative overflow-hidden">
            {/* Retro Viewport */}
            <div className="flex-1 glass-ultra rounded-xl relative overflow-hidden border border-[#5d4037] shadow-2xl bg-[#3e2723]/30">
                <Canvas shadows className="w-full h-full">
                    <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={45} />
                    <Suspense fallback={null}>
                        <Stage environment="apartment" intensity={0.5}>
                            <ClassicScene modelId={modelId} />
                        </Stage>
                    </Suspense>
                    <OrbitControls makeDefault />
                </Canvas>

                {!isLinked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                        <button
                            onClick={handleLink}
                            className="px-8 py-4 bg-[#6d4c41] hover:bg-[#8d6e63] text-[#d7ccc8] font-bold rounded-lg border-2 border-[#3e2723] shadow-lg transition-all"
                        >
                            LINK RETRO ASSETS
                        </button>
                    </div>
                )}

                <div className="absolute top-4 left-4 flex flex-col gap-1">
                    <div className="text-[12px] font-bold text-[#d7ccc8] tracking-widest uppercase flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#4caf50]"></span>
                        CLASSIC_ENGINE_v1.0
                    </div>
                    <div className="text-[10px] text-[#8d6e63] font-mono uppercase">Render: SW-EMULATOR</div>
                </div>
            </div>

            {/* Asset Browser */}
            <div className="w-80 flex flex-col gap-4">
                <div className="bg-[#3e2723] rounded-xl p-6 flex-1 flex flex-col gap-4 border border-[#5d4037] shadow-2xl overflow-hidden">
                    <div className="text-[10px] font-black tracking-[0.4em] text-[#d7ccc8]/40 uppercase">Classic Browser</div>

                    <input
                        type="text"
                        placeholder="SEARCH ASSETS..."
                        className="w-full bg-black/40 border border-[#5d4037] rounded-lg px-4 py-3 text-[10px] font-bold text-[#d7ccc8] placeholder-[#d7ccc8]/20 outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <div className="flex-1 overflow-y-auto pr-2 space-y-1">
                        {filteredAssets.map(asset => (
                            <button
                                key={asset.id}
                                onClick={() => setModelId(asset.id.toString())}
                                className={`w-full text-left px-4 py-3 rounded-lg text-[10px] font-bold transition-all border ${modelId === asset.id.toString() ? 'bg-[#6d4c41] text-[#fff] border-[#8d6e63]' : 'text-[#d7ccc8]/60 border-transparent hover:bg-black/20 hover:text-[#d7ccc8]'}`}
                            >
                                <div className="flex justify-between items-center">
                                    <span>{asset.name || 'UNNAMED'}</span>
                                    <span className="text-[8px] opacity-40 font-mono">#{asset.id}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
