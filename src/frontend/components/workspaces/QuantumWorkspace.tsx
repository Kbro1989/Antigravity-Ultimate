import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function QuantumWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [variants, setVariants] = useState<string[]>([]);
    const [basePrompt, setBasePrompt] = useState('Abstract Cybernetic Relic');
    const [isEntangling, setIsEntangling] = useState(false);
    const [mutationMode, setMutationMode] = useState('Ethereal');
    const [similarity, setSimilarity] = useState(0.42);

    const handleGenerateVariants = async () => {
        setIsEntangling(true);
        try {
            const result = await callLimb('quantum', 'generate_variants', {
                basePrompt,
                count: 4,
                mode: mutationMode,
                similarity
            });
            if (result.status === 'success') {
                setVariants(result.variants || []);
                addNotification('success', 'Quantum Variations Collapsed');
            }
        } catch (e: any) {
            addNotification('error', `Quantum Fault: ${e.message}`);
        } finally {
            setIsEntangling(false);
        }
    };

    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Mutation Field HUD */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-neon-purple/20 shadow-2xl relative overflow-hidden flex flex-col group p-10 bg-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(188,0,255,0.03)_0%,transparent_80%)]" />

                <div className="flex-1 relative flex flex-col items-center justify-center">
                    <div className="relative w-80 h-80 flex items-center justify-center mb-10">
                        <div className={`absolute inset-0 border border-neon-purple/20 rounded-full ${isEntangling ? 'animate-spin' : 'animate-spin-slow'}`} />
                        <div className={`w-40 h-40 rounded-full bg-black flex items-center justify-center border border-neon-purple/40 shadow-[0_0_60px_rgba(188,0,255,0.2)] transition-all ${isEntangling ? 'scale-125' : 'scale-100'}`}>
                            <span className="text-4xl text-neon-purple animate-pulse">⚛</span>
                        </div>
                    </div>

                    {/* Variant Deck */}
                    <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                        {variants.length > 0 ? variants.map((v: string, i: number) => (
                            <div key={i} className="p-4 glass rounded-2xl border border-white/5 bg-black/20 animate-fade-in hover:border-neon-purple/50 transition-all cursor-pointer group">
                                <div className="text-[8px] font-black uppercase text-neon-purple mb-2 flex justify-between">
                                    <span>Variant σ-{i + 1}</span>
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">Select</span>
                                </div>
                                <div className="text-[10px] text-white/60 font-mono leading-tight">{v}</div>
                            </div>
                        )) : (
                            Array(4).fill(0).map((_: any, i: number) => (
                                <div key={i} className="p-6 glass rounded-2xl border border-white/5 bg-black/40 flex items-center justify-center opacity-20">
                                    <div className="text-[10px] font-black text-white/50 uppercase tracking-widest">Awaiting Collapse</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="absolute top-10 left-10 flex flex-col gap-2">
                    <div className="text-[10px] font-black uppercase tracking-[0.6em] text-neon-purple">Quantum Matrix v6.5</div>
                    <div className="text-[9px] font-mono text-white/20">COHERENCE: {isEntangling ? '98.2%' : 'STABLE'}</div>
                </div>
            </div>

            {/* Matrix Rack */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 h-full bg-white/5 backdrop-blur-3xl overflow-y-auto">
                    <div className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Mutation Engine</div>

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Mutation Modes</div>
                        <div className="grid grid-cols-2 gap-3">
                            {['Ethereal', 'Bio', 'Glitch', 'Relic'].map(m => (
                                <button key={m} onClick={() => setMutationMode(m)}
                                    className={`py-3 px-4 rounded-xl text-[9px] font-black transition-all border ${mutationMode === m ? 'bg-neon-purple text-white border-neon-purple' : 'bg-black/20 text-white/40 border-white/5 hover:border-white/20'}`}
                                >
                                    {m.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Variance Threshold</div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between text-[10px] font-mono text-white/40">
                                <span>SIMILARITY_COEFFICIENT</span>
                                <span className="text-neon-purple">{(similarity * 100).toFixed(0)}%</span>
                            </div>
                            <input type="range" min="0" max="1" step="0.01" value={similarity} onChange={(e) => setSimilarity(parseFloat(e.target.value))}
                                className="w-full accent-neon-purple"
                            />
                        </div>
                    </div>

                    <div className="mt-auto space-y-4 pt-8">
                        <input
                            value={basePrompt}
                            onChange={(e) => setBasePrompt(e.target.value)}
                            placeholder="Base Concept..."
                            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-[11px] text-white outline-none focus:border-neon-purple/50 transition-all font-mono"
                        />
                        <button onClick={handleGenerateVariants} disabled={isEntangling}
                            className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.4em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                ${isEntangling ? 'bg-neon-purple/20 text-white animate-pulse' : 'bg-white text-black hover:bg-neon-purple hover:shadow-[0_0_40px_rgba(188,0,255,0.4)]'}
                            `}
                        >
                            {isEntangling ? 'Entangling Matrix...' : '⚡ Collapse Variants'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
