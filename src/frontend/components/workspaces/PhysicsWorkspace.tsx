import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid, Text } from '@react-three/drei';
import { useServiceHub, useNotification } from '../../hooks';
import { CannonPhysicsService } from '../../services/CannonPhysicsService';
import * as THREE from 'three';

function PhysicsScene({ isSimulating, gravity, timeScale }: any) {
    const physics = CannonPhysicsService.getInstance();
    const [bodies, setBodies] = useState<any[]>([]);

    // Step simulation
    useFrame((state, delta) => {
        if (!isSimulating) return;
        physics.step(delta * timeScale);
        const newState = physics.getState();
        setBodies(Object.entries(newState).map(([id, s]: any) => ({ id, ...s })));
    });

    return (
        <>
            <OrbitControls makeDefault />
            <Grid infiniteGrid fadeDistance={50} sectionSize={1} sectionColor="#444" cellColor="#222" />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="#050505" />
            </mesh>

            {bodies.map(body => (
                <mesh key={body.id} position={body.position} quaternion={body.quaternion} castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.2} transparent opacity={0.8} />
                </mesh>
            ))}
        </>
    );
}

export function PhysicsWorkspace() {
    const { callLimb, limbs } = useServiceHub();
    const { addNotification } = useNotification();
    const [gravity, setGravity] = useState(-9.81);
    const [timeScale, setTimeScale] = useState(1.0);
    const [isSimulating, setIsSimulating] = useState(true);
    const physics = CannonPhysicsService.getInstance();

    useEffect(() => {
        // Listen for physics steps from worker
        const handlePhysicsStep = (data: any) => {
            console.log('[PhysicsWorkspace] Received Step from Worker:', data);
            if (data.bodies) {
                physics.syncBodies(data.bodies);
            }
        };

        limbs.on('physics_step', handlePhysicsStep);
        return () => limbs.off('physics_step', handlePhysicsStep);
    }, [limbs]);

    const handleStep = async () => {
        try {
            const result = await callLimb('physics', 'physics_step_simulation', {
                gravity,
                time_scale: timeScale,
                dt: 1 / 60,
                delegate_to_browser: true
            });

            if (result.status === 'delegated') {
                addNotification('success', 'Simulation Delegated to Browser');
            }
        } catch (e: any) {
            addNotification('error', `Physics Fault: ${e.message}`);
        }
    };

    const handleReset = () => {
        physics.reset();
        addNotification('info', 'Space-Time Reset');
    };

    const handleSync = async () => {
        try {
            const state = physics.getState();
            // Convert to format PhysicsLimb expects
            const bodiesToSync = Object.entries(state).map(([id, s]: any) => ({
                id,
                aabb: {
                    minX: s.position[0] - 0.5,
                    minY: s.position[1] - 0.5,
                    minZ: s.position[2] - 0.5,
                    maxX: s.position[0] + 0.5,
                    maxY: s.position[1] + 0.5,
                    maxZ: s.position[2] + 0.5
                },
                velocity: s.velocity,
                mass: 1
            }));

            const result = await callLimb('physics', 'update_bodies', { bodies: bodiesToSync });
            if (result.status === 'success') {
                addNotification('success', `Reality Anchored: ${result.bodiesUpdated} bodies synced to server`);
            }
        } catch (e: any) {
            addNotification('error', `Sync Failed: ${e.message}`);
        }
    };

    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Simulation HUD */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col group">
                <div className="absolute top-10 left-10 flex gap-4 z-20 pointer-events-none">
                    <div className="glass-ultra px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-neon-yellow border border-neon-yellow/30 shadow-2xl">FPS: 60.0</div>
                    <div className="glass px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-white/20 border border-white/5 shadow-2xl">Solver: CANNON_ES</div>
                    <div className="glass px-6 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-green-400 bg-green-500/10 border border-green-500/20">Sim_Live</div>
                </div>

                <div className="flex-1 relative bg-[#020202]">
                    <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
                        <PhysicsScene isSimulating={isSimulating} gravity={gravity} timeScale={timeScale} />
                    </Canvas>
                </div>

                {/* Transport Bar */}
                <div className="h-24 glass-ultra border-t border-white/5 flex items-center px-10 gap-8 bg-black/40 backdrop-blur-3xl z-20">
                    <div className="flex gap-4">
                        <button onClick={handleReset} className="w-12 h-12 rounded-2xl glass border border-white/10 hover:border-white/40 flex items-center justify-center text-xl hover:bg-white/5 transition-all text-white/60">⏮</button>
                        <button onClick={() => setIsSimulating(!isSimulating)} className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-2xl transition-all shadow-2xl ${isSimulating ? 'bg-neon-yellow/10 border-neon-yellow text-neon-yellow shadow-[0_0_20px_rgba(255,255,0,0.2)]' : 'bg-white text-black hover:bg-neon-yellow'}`}>
                            {isSimulating ? '⏸' : '▶'}
                        </button>
                        <button onClick={handleStep} className="w-12 h-12 rounded-2xl glass border border-white/10 hover:border-white/40 flex items-center justify-center text-xl hover:bg-white/5 transition-all text-white/60">⏭</button>
                    </div>
                    <div className="flex-1 h-2 bg-black/60 rounded-full relative overflow-hidden group border border-white/5 shadow-inner">
                        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-neon-yellow to-neon-orange shadow-[0_0_15px_var(--neon-yellow)]" />
                    </div>
                    <button onClick={handleSync} className="h-12 px-8 rounded-2xl bg-white text-black font-black text-[10px] tracking-[0.2em] uppercase hover:bg-neon-yellow shadow-2xl transition-all">Sync to Server</button>
                </div>
            </div>

            {/* Newton Rack */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 flex flex-col gap-10 border border-white/5 shadow-2xl relative overflow-hidden flex-1">
                    <div className="text-[10px] font-black tracking-[0.6em] text-neon-yellow uppercase">Continuum Engine v6.5</div>
                    <div className="space-y-8">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Fundamental Constants</div>
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/60">
                                    <span>Gravity Scale</span>
                                    <span className="text-neon-yellow">{gravity.toFixed(2)} m/s²</span>
                                </div>
                                <input type="range" min="-20" max="0" step="0.01" value={gravity} onChange={(e) => setGravity(parseFloat(e.target.value))}
                                    className="w-full h-1 bg-black/40 rounded-full appearance-none cursor-pointer accent-neon-yellow"
                                />
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/60">
                                    <span>Temporal Scale</span>
                                    <span className="text-neon-yellow">{timeScale.toFixed(2)}x</span>
                                </div>
                                <input type="range" min="0" max="2" step="0.1" value={timeScale} onChange={(e) => setTimeScale(parseFloat(e.target.value))}
                                    className="w-full h-1 bg-black/40 rounded-full appearance-none cursor-pointer accent-neon-yellow"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Material Matrix</div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Bounciness', val: '0.35' },
                                { label: 'Friction', val: '0.82' },
                                { label: 'Air Drag', val: '0.04' },
                                { label: 'Buoyancy', val: '1.00' }
                            ].map(m => (
                                <div key={m.label} className="p-4 glass rounded-[24px] border border-white/5 flex flex-col gap-1 hover:border-white/20 transition-all cursor-pointer">
                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{m.label}</span>
                                    <span className="text-sm font-bold text-white">{m.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={handleReset} className="w-full py-5 rounded-2xl mt-auto bg-white text-black font-black text-xs tracking-[0.4em] hover:bg-neon-yellow hover:shadow-[0_0_40px_rgba(255,255,0,0.4)] transition-all uppercase shadow-2xl">
                        Reset Space-Time
                    </button>
                </div>
            </div>
        </div>
    );
}
