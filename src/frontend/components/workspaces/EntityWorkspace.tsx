import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function EntityWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [activeEntity, setActiveEntity] = useState('Guardian_01');
    const [thought, setThought] = useState('');
    const [isTransmitting, setIsTransmitting] = useState(false);

    const handleTransmission = async () => {
        if (!thought.trim()) return;
        setIsTransmitting(true);
        try {
            await callLimb('entity', 'entity_inject_thought', {
                target_id: activeEntity,
                content: thought,
                priority: 'urgent'
            });
            addNotification('success', `Cortical Uplink Verified: Thought streamed to ${activeEntity}`);
            setThought('');
        } catch (e: any) {
            addNotification('error', `Neural Rejection: ${e.message}`);
        } finally {
            setIsTransmitting(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 animate-fade-in relative overflow-hidden">
            <div className="flex-1 flex gap-8 p-8 overflow-hidden">
                {/* Subject List */}
                <div className="w-72 glass-ultra rounded-[40px] border border-white/5 shadow-2xl overflow-hidden flex flex-col">
                    <div className="bg-white/5 p-6 border-b border-white/5 flex items-center justify-between">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-neon-magenta">Subject Manifest</div>
                        <div className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse shadow-[0_0_8px_var(--neon-magenta)]" />
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                        {['Guardian_01', 'Shopkeep_Alpha', 'Protocol_Sentry', 'Stray_Automata', 'Merchant_9'].map((name) => (
                            <div key={name} onClick={() => setActiveEntity(name)}
                                className={`p-5 rounded-[24px] cursor-pointer flex items-center gap-4 transition-all duration-300 border ${activeEntity === name ? 'bg-neon-magenta/10 border-neon-magenta/30 shadow-lg' : 'hover:bg-white/5 border-transparent'}`}
                            >
                                <div className={`w-3 h-3 rounded-full ${activeEntity === name ? 'bg-green-400 animate-pulse' : 'bg-white/10'}`} />
                                <span className={`text-[11px] font-black tracking-widest ${activeEntity === name ? 'text-white' : 'text-white/30'}`}>{name.toUpperCase()}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Neural Visualizer */}
                <div className="flex-1 glass-ultra rounded-[40px] relative overflow-hidden border border-white/5 shadow-2xl flex flex-col">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.02)_0%,transparent_80%)]" />
                    <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5 backdrop-blur-3xl z-10">
                        <div className="flex flex-col gap-1">
                            <div className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40">Cortical Flow Visualizer</div>
                            <div className="text-xl font-black text-white">{activeEntity}</div>
                        </div>
                        <div className="flex gap-3">
                            <div className="glass px-4 py-2 rounded-2xl text-[9px] font-black text-green-400 border border-green-500/20 uppercase tracking-widest">State: Dynamic</div>
                            <div className="glass px-4 py-2 rounded-2xl text-[9px] font-black text-neon-cyan border border-neon-cyan/20 uppercase tracking-widest">Sync: 100%</div>
                        </div>
                    </div>

                    <div className="flex-1 relative flex items-center justify-center p-12">
                        <div className="w-full h-full glass rounded-[40px] border border-white/5 bg-black/40 flex flex-col items-center justify-center relative group">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                            {/* Mock Behavioral Node */}
                            <div className="relative flex flex-col items-center gap-12 scale-110">
                                <div className="p-8 glass-ultra border-neon-magenta rounded-[40px] text-neon-magenta font-black text-xs tracking-[0.4em] shadow-[0_0_40px_rgba(255,0,225,0.3)] uppercase">Root Core Decision</div>
                                <div className="flex gap-12">
                                    {['Scan_Region', 'Assess_Hostility', 'Idle_Logic'].map(node => (
                                        <div key={node} className="flex flex-col items-center gap-4 group/node">
                                            <div className="w-[1px] h-8 bg-gradient-to-b from-neon-magenta to-transparent" />
                                            <div className="p-4 glass rounded-2xl border border-white/5 text-[9px] font-black text-white/40 group-hover/node:text-white group-hover/node:border-neon-magenta/40 transition-all uppercase tracking-widest">{node}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Params Rack */}
                <div className="w-80 flex flex-col gap-8 h-full">
                    <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 flex-1">
                        <div className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Omni-Biologist Controls</div>

                        {/* Define Species */}
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col gap-3">
                            <div className="text-[9px] font-black uppercase text-neon-magenta flex items-center gap-2">
                                <span>🧬</span> Genetic Definition
                            </div>
                            <button onClick={async () => {
                                setIsTransmitting(true);
                                await callLimb('entity', 'define_species', { name: activeEntity + '_MKII', stats: { attack: 40, defense: 40, strength: 60, hits: 55 } });
                                addNotification('success', 'New Species Definition Composed');
                                setIsTransmitting(false);
                            }} className="w-full py-2 bg-neon-magenta/20 text-neon-magenta border border-neon-magenta/40 rounded-xl text-[9px] font-black uppercase hover:bg-neon-magenta hover:text-white transition-all">
                                Mutate Species
                            </button>
                        </div>

                        {/* Assign Patrol */}
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col gap-3">
                            <div className="text-[9px] font-black uppercase text-cyan-400 flex items-center gap-2">
                                <span>🗺️</span> Patrol Vector
                            </div>
                            <button onClick={async () => {
                                await callLimb('entity', 'assign_patrol', { id: activeEntity, waypoints: [[3222, 3222], [3222, 3230]] });
                                addNotification('success', 'Patrol Route Uploaded to Entity Cortex');
                            }} className="w-full py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 rounded-xl text-[9px] font-black uppercase hover:bg-cyan-500 hover:text-white transition-all">
                                Assign Sector Log
                            </button>
                        </div>

                        {/* Equip Entity */}
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col gap-3">
                            <div className="text-[9px] font-black uppercase text-yellow-400 flex items-center gap-2">
                                <span>⚔️</span> Equipment Loadout
                            </div>
                            <button onClick={async () => {
                                await callLimb('entity', 'equip_entity', { id: activeEntity, items: ['rune_scimitar', 'rune_platebody'] });
                                addNotification('success', 'Entity Gear Configured for Combat');
                            }} className="w-full py-2 bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 rounded-xl text-[9px] font-black uppercase hover:bg-yellow-500 hover:text-white transition-all">
                                Grant Wieldables
                            </button>
                        </div>

                        <div className="mt-auto flex flex-col gap-6">
                            <div className="p-6 bg-neon-magenta/5 rounded-3xl border border-neon-magenta/20 flex flex-col gap-4">
                                <div className="text-[9px] font-black text-neon-magenta uppercase tracking-widest flex items-center gap-3">
                                    <span className="animate-pulse">📡</span> Neural Uplink
                                </div>
                                <input value={thought} onChange={(e) => setThought(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleTransmission()}
                                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-4 py-3 text-[11px] text-white outline-none focus:border-neon-magenta/40 transition-all"
                                    placeholder="Beam thought string..."
                                />
                                <button onClick={handleTransmission} disabled={isTransmitting}
                                    className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all
                                        ${isTransmitting ? 'bg-neon-magenta text-white animate-pulse' : 'bg-white text-black hover:bg-neon-magenta hover:shadow-[0_0_30px_rgba(255,0,225,0.4)]'}
                                    `}
                                >
                                    {isTransmitting ? 'Transmitting...' : 'Inject Pulse'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
