import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';
import { Standard3DViewer } from '../Standard3DViewer';

export function AnimationWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [activeTab, setActiveTab] = useState<'kinetics' | 'synth'>('kinetics');
    const [synthPrompt, setSynthPrompt] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeLayer, setActiveLayer] = useState('Base_Walk');
    const [animationUrl, setAnimationUrl] = useState<string | null>(null);
    const [modelUrl, setModelUrl] = useState<string | null>("models://humanoid_generic");

    const handleRetarget = async () => {
        setIsProcessing(true);
        try {
            const result = (await callLimb('animation', 'animation_retarget_motion', {
                source_rig: 'humanoid_generic',
                target_rig: 'custom_mesh_v1',
                use_ik: true,
                preserve_volume: true,
                prompt: activeTab === 'synth' ? synthPrompt : `Retarget motion for layer ${activeLayer}`
            })) as any;

            if (result.status === 'success') {
                setAnimationUrl(result.clipUrl);
                addNotification('info' as any, 'Kinetics Engine: Calibrating Neural IK Solver...');
                setTimeout(() => {
                    addNotification('success' as any, 'Motion Retargeting Complete');
                    setIsProcessing(false);
                }, 1500);
            }
        } catch (e: any) {
            addNotification('error' as any, `IK Fault: ${e.message}`);
            setIsProcessing(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 animate-fade-in relative overflow-hidden">
            <div className="flex-1 flex gap-6 p-6 overflow-hidden">
                {/* Rig Viewport */}
                <div className="flex-1 glass-ultra rounded-[40px] relative overflow-hidden border border-white/5 shadow-2xl flex flex-col">
                    <div className="flex-1 relative">
                        <Standard3DViewer
                            modelUrl={modelUrl}
                            autoRotate={!isPlaying}
                            className="w-full h-full"
                        />

                        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(0,242,255,0.05)_0%,transparent_70%)]" />

                        {isProcessing && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10 transition-all">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin shadow-[0_0_20px_var(--neon-cyan)]" />
                                    <div className="text-[10px] font-black text-neon-cyan tracking-[0.5em] animate-pulse">SOLVING_IK</div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="absolute top-6 left-6 flex flex-col gap-2 pointer-events-none">
                        <div className="text-[10px] font-black uppercase text-neon-cyan tracking-[0.4em] mb-2 flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-neon-cyan'}`}></span>
                            Kinetics: {isPlaying ? 'ACTIVE_CLIP' : 'IK_READY'}
                        </div>
                        <div className="flex gap-2">
                            <span className="glass px-2 py-1 rounded text-[8px] font-mono text-white/40">BONES: 68</span>
                            <span className="glass px-2 py-1 rounded text-[8px] font-mono text-white/40">SKELETON: RSMV_V7</span>
                        </div>
                    </div>
                </div>

                {/* Animation Config */}
                <div className="w-[400px] flex flex-col gap-6">
                    <div className="glass-ultra rounded-[40px] p-8 flex-1 flex flex-col border border-white/5 shadow-2xl overflow-hidden relative bg-white/5 backdrop-blur-3xl">
                        {/* Tab Switcher */}
                        <div className="flex gap-2 mb-8 p-1 glass rounded-2xl border border-white/5 bg-black/20">
                            <button
                                onClick={() => setActiveTab('kinetics')}
                                className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'kinetics' ? 'bg-neon-cyan/20 text-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.2)]' : 'text-white/20 hover:text-white/40'}`}
                            >
                                Kinetics
                            </button>
                            <button
                                onClick={() => setActiveTab('synth')}
                                className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'synth' ? 'bg-neon-magenta/20 text-neon-magenta shadow-[0_0_15px_rgba(255,0,225,0.2)]' : 'text-white/20 hover:text-white/40'}`}
                            >
                                Synth
                            </button>
                        </div>

                        {activeTab === 'kinetics' ? (
                            <div className="flex-1 flex flex-col gap-8 animate-in fade-in slide-in-from-left-4 duration-500">
                                <div className="text-[10px] font-black tracking-[0.4em] text-neon-cyan uppercase flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_var(--neon-cyan)]"></span>
                                    Manual Control
                                </div>

                                <div className="space-y-6">
                                    {/* Layer Stack */}
                                    <div className="space-y-3">
                                        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Motion Layers</div>
                                        {['Base_Walk', 'UpperBody_Action', 'Hand_Secondary', 'Face_Expressions'].map(l => (
                                            <div
                                                key={l}
                                                onClick={() => setActiveLayer(l)}
                                                className={`p-3 rounded-xl border transition-all flex items-center justify-between group cursor-pointer ${activeLayer === l ? 'bg-neon-cyan/10 border-neon-cyan/30' : 'bg-white/5 border-transparent'}`}
                                            >
                                                <span className={`text-[10px] font-bold ${activeLayer === l ? 'text-white' : 'text-white/30'}`}>{l}</span>
                                                <div className={`w-2 h-2 rounded-full ${activeLayer === l ? 'bg-neon-cyan shadow-[0_0_8px_var(--neon-cyan)]' : 'bg-white/10'}`} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Interpolation */}
                                    <div>
                                        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-3">Curve Preset</div>
                                        <div className="flex gap-2">
                                            {['Linear', 'Ease-In', 'Ease-Out', 'Bouncy'].map(c => (
                                                <button key={c} className="flex-1 py-2 glass rounded-lg text-[8px] font-bold border border-white/5 hover:border-neon-cyan/40 text-white/40 hover:text-white transition-all">{c}</button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Options */}
                                    <div className="space-y-3 pt-4">
                                        <div className="flex items-center justify-between p-3 glass rounded-xl border border-white/5 cursor-pointer hover:bg-white/5 transition-all">
                                            <span className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Root Motion</span>
                                            <div className="w-10 h-5 bg-neon-magenta/20 rounded-full relative p-1"><div className="absolute right-1 w-3 h-3 bg-neon-magenta rounded-full shadow-[0_0_8px_var(--neon-magenta)]" /></div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 glass rounded-xl border border-white/5 cursor-pointer hover:bg-white/5 transition-all">
                                            <span className="text-[10px] text-white/70 font-bold uppercase tracking-widest">IK Correction</span>
                                            <div className="w-10 h-5 bg-neon-cyan/20 rounded-full relative p-1"><div className="absolute right-1 w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_8px_var(--neon-cyan)]" /></div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleRetarget}
                                    disabled={isProcessing}
                                    className={`w-full py-5 rounded-2xl mt-auto font-black text-xs tracking-[0.2em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3 ${isProcessing ? 'bg-white/10 text-white/20' : 'bg-white text-black hover:bg-neon-cyan hover:text-white hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'}`}
                                >
                                    {isProcessing ? 'Processing Kinetics...' : 'Solve & Retarget Motion'}
                                </button>
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="text-[10px] font-black tracking-[0.4em] text-neon-magenta uppercase flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse shadow-[0_0_8px_var(--neon-magenta)]"></span>
                                    Kinetic DNA Directive
                                </div>

                                <div className="space-y-4">
                                    <textarea
                                        value={synthPrompt}
                                        onChange={(e) => setSynthPrompt(e.target.value)}
                                        placeholder="Describe motion evolution (e.g., 'Natural locomotion with slight limp', 'Aggressive combat stance ready for strike')..."
                                        className="w-full h-40 bg-black/40 border border-white/10 rounded-2xl p-4 text-[11px] font-mono text-white/70 outline-none focus:border-neon-magenta/40 transition-all resize-none shadow-inner"
                                    />

                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { label: 'Ethereal Float', prompt: 'Low gravity ethereal floating motion with slow rotations' },
                                            { label: 'RSC Classic', prompt: 'Legacy frame-stepped 600ms tick-aligned rhythmic motion' },
                                            { label: 'Feral Strike', prompt: 'Explosive animalistic lunging animation' },
                                            { label: 'Staggered', prompt: 'Heavy burdened movement with significant physical weight' }
                                        ].map(preset => (
                                            <button
                                                key={preset.label}
                                                onClick={() => setSynthPrompt(preset.prompt)}
                                                className="p-3 glass rounded-xl border border-white/5 hover:border-neon-magenta/30 text-[9px] font-bold text-white/40 hover:text-white transition-all text-left"
                                            >
                                                {preset.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={handleRetarget}
                                    disabled={!synthPrompt || isProcessing}
                                    className={`w-full py-5 rounded-2xl mt-auto font-black text-xs tracking-[0.2em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3 ${isProcessing ? 'bg-white/10 text-white/20' : 'bg-neon-magenta text-white hover:shadow-[0_0_30px_rgba(255,0,225,0.4)]'}`}
                                >
                                    {isProcessing ? 'Synthesizing Kinetics...' : 'Synthesize Motion'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Keyframe Timeline Footer */}
            <div className="h-40 glass-ultra border-t border-white/5 p-6 flex flex-col gap-4 overflow-hidden">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className={`w-10 h-10 rounded-full glass border flex items-center justify-center transition-all ${isPlaying ? 'bg-neon-magenta/20 border-neon-magenta/40 text-neon-magenta' : 'border-white/10 text-white/40 hover:bg-white/10'}`}
                        >
                            {isPlaying ? '⏸' : '▶'}
                        </button>
                        <div className="text-[10px] font-mono text-neon-cyan">FPS: 60.0</div>
                        <div className="text-[10px] font-mono text-white/40">SAMPLES: 4096</div>
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Full Kinetics Timeline</div>
                </div>

                {/* Timeline Grid */}
                <div className="flex-1 rounded-xl bg-black/40 border border-white/5 overflow-hidden flex flex-col">
                    <div className="h-6 border-b border-white/5 flex gap-[1px]">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="flex-1 border-r border-white/5 text-[7px] text-white/20 pl-1 font-mono">{i * 10}</div>
                        ))}
                    </div>
                    <div className="flex-1 relative">
                        {/* Fake Keyframes */}
                        <div className="absolute top-4 left-[10%] w-2 h-2 rotate-45 bg-neon-cyan shadow-[0_0_8px_var(--neon-cyan)]" title="Key: Start" />
                        <div className="absolute top-4 left-[35%] w-2 h-2 rotate-45 bg-neon-magenta" title="Key: Apex" />
                        <div className="absolute top-4 left-[60%] w-2 h-2 rotate-45 bg-neon-purple shadow-[0_0_8px_var(--neon-purple)]" title="Key: Landing" />
                        <div className="absolute top-4 left-[85%] w-2 h-2 rotate-45 bg-neon-cyan shadow-[0_0_8px_var(--neon-cyan)]" title="Key: End" />

                        <div className={`absolute top-0 bottom-0 w-[1px] bg-red-500 shadow-[0_0_10px_red] transition-all duration-100 ${isPlaying ? 'left-full' : 'left-[28%]'}`}
                            style={{ transitionTimingFunction: 'linear', transitionDuration: isPlaying ? '10s' : '0.1s' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
