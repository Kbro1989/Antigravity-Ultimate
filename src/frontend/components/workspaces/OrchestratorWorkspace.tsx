import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function OrchestratorWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [pipeline, setPipeline] = useState<any>(null);
    const [currentStageIndex, setCurrentStageIndex] = useState(-1);
    const [isThinking, setIsThinking] = useState(false);
    const [strategy, setStrategy] = useState('Nexus-Auto');

    const executePipeline = async () => {
        setIsThinking(true);
        try {
            // 1. Plan the Sync
            addNotification('info', 'Initializing Global Reconstruction Pipeline...');
            const plan: any = await callLimb('pipeline', 'reconstruct_relic_sync', { relicId: 'sector_varrock_01' });

            setPipeline(plan);
            setCurrentStageIndex(0);

            // 2. Execute Stages Sequentially
            for (let i = 0; i < plan.stages.length; i++) {
                const stage = plan.stages[i];
                setCurrentStageIndex(i);
                addNotification('info', `Pipeline Stage [${i + 1}/${plan.stages.length}]: ${stage.label}`);

                // Actual Limb Call
                await callLimb(stage.limb, stage.method, stage.params);

                addNotification('success', `Stage Complete: ${stage.label}`);
                await new Promise(r => setTimeout(r, 1000)); // Pacing for effect
            }

            addNotification('success', 'Full Sector Reconstruction Complete. Ready for Live Session.');
            setPipeline(null);
            setCurrentStageIndex(-1);

        } catch (e: any) {
            addNotification('error', `Orchestration Fault: ${e.message}`);
        } finally {
            setIsThinking(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Strategy HUD */}
            <div className="p-8 pb-0">
                <div className="glass-ultra rounded-3xl p-6 border border-white/5 flex items-center justify-between shadow-2xl">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(0,242,255,0.2)] border border-neon-cyan/20">
                            🎼
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Active Orchestration Mode</div>
                            <div className="text-2xl font-black text-white">{strategy} Engine <span className="text-neon-cyan font-mono text-sm ml-2">v6.5.PRO</span></div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={executePipeline}
                            disabled={isThinking}
                            className={`px-8 py-3 rounded-2xl font-black text-[10px] uppercase transition-all shadow-xl ${isThinking ? 'bg-white/10 text-white animate-pulse' : 'bg-neon-cyan text-black hover:bg-white'}`}
                        >
                            {isThinking ? 'Executing Pipeline...' : 'Initialize Sector Sync'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex gap-8 p-8 overflow-hidden">
                {/* Visualizer */}
                <div className="flex-1 glass-ultra rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex flex-col relative group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,242,255,0.05)_0%,transparent_70%)] opacity-40" />

                    <div className="p-12 flex flex-col items-center justify-center h-full gap-8">
                        {pipeline ? (
                            <div className="flex flex-col gap-4 w-full max-w-2xl">
                                {pipeline.stages.map((stage: any, i: number) => (
                                    <div key={i} className={`p-6 rounded-2xl border transition-all flex items-center justify-between
                                        ${i === currentStageIndex ? 'glass border-neon-cyan bg-neon-cyan/10 scale-105 shadow-[0_0_30px_rgba(0,242,255,0.2)]' :
                                            i < currentStageIndex ? 'bg-green-500/10 border-green-500/30 opacity-50' : 'bg-white/5 border-white/5 opacity-30'}
                                    `}>
                                        <div className="flex items-center gap-4">
                                            <div className="text-[10px] font-black w-8 h-8 rounded-full flex items-center justify-center bg-white/10">{i + 1}</div>
                                            <div>
                                                <div className="text-xs font-bold text-white uppercase tracking-widest">{stage.label}</div>
                                                <div className="text-[9px] font-mono text-white/40">{stage.limb}::{stage.method}</div>
                                            </div>
                                        </div>
                                        {i === currentStageIndex && <div className="text-[9px] text-neon-cyan animate-pulse font-black uppercase">Processing</div>}
                                        {i < currentStageIndex && <div className="text-green-400">✓</div>}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center opacity-30">
                                <div className="text-6xl mb-4">🧠</div>
                                <div className="text-xs font-black uppercase tracking-[0.4em]">System Ready</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Intent Queue / Log */}
                <div className="w-[450px] flex flex-col gap-8">
                    <div className="glass-ultra rounded-3xl p-8 flex-1 flex flex-col gap-8 border border-white/5 shadow-2xl relative overflow-hidden bg-black/20">
                        <div className="text-[10px] font-black tracking-[0.4em] text-white/60 uppercase">System Events</div>
                        {/* Placeholder for logs */}
                    </div>
                </div>
            </div>
        </div>
    );
}
