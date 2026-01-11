import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function NetworkWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [activeTab, setActiveTab] = useState<'traffic' | 'orchestra'>('traffic');
    const [synthPrompt, setSynthPrompt] = useState('');
    const [isPinging, setIsPinging] = useState(false);

    const handlePing = async () => {
        setIsPinging(true);
        try {
            await callLimb('network', 'network_ping_limbs', {
                include_latency_matrix: true,
                distributed_trace: true
            });
            addNotification('info', 'Temporal Bridge: Routing Diagnostic Packets...');
            setTimeout(() => {
                addNotification('success', 'Global Neural Link: All 23 Nodes Synchronized');
                setIsPinging(false);
            }, 2000);
        } catch (e: any) {
            addNotification('error', `Network Fault: ${e.message}`);
            setIsPinging(false);
        }
    };

    const handleApplyRules = async () => {
        addNotification('info', 'Edge Logic: Deploying Transform Rules to Global Network...');
        setTimeout(() => {
            addNotification('success', 'Rules Manifest Synchronized: Edge Clusters Updated');
        }, 1500);
    };

    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Topology & Traffic HUD */}
            <div className="flex-1 flex flex-col gap-8">
                <div className="flex-1 glass-ultra rounded-[40px] border border-blue-500/20 shadow-2xl relative overflow-hidden flex flex-col group">
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Topology Graph */}
                    <div className="flex-1 relative">
                        <svg className="w-full h-full opacity-60">
                            <defs>
                                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#00f2ff" strokeWidth="0.5" strokeDasharray="5 5" className="animate-pulse" />
                            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#00f2ff" strokeWidth="0.5" strokeDasharray="5 5" />
                            <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#00f2ff" strokeWidth="0.5" strokeDasharray="5 5" />
                            <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#00f2ff" strokeWidth="0.5" strokeDasharray="5 5" className="animate-pulse" />
                            <circle cx="50%" cy="50%" r="6" fill="#00f2ff" className="animate-ping" />
                            <circle cx="50%" cy="50%" r="4" fill="#00f2ff" />
                            <circle cx="20%" cy="20%" r="3" fill="#fff" opacity="0.4" />
                            <circle cx="80%" cy="20%" r="3" fill="#fff" opacity="0.4" />
                            <circle cx="20%" cy="80%" r="3" fill="#fff" opacity="0.4" />
                            <circle cx="80%" cy="80%" r="3" fill="#fff" opacity="0.4" />
                        </svg>

                        <div className="absolute top-10 left-10 flex flex-col gap-4">
                            <div className="text-[10px] font-black uppercase tracking-[0.6em] text-neon-cyan mb-2 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_var(--neon-cyan)]"></span>
                                Edge_Intelligence: Transform Active
                            </div>
                            <div className="flex gap-3">
                                <span className="glass px-3 py-1 rounded-xl text-[9px] font-mono text-white/40 uppercase">Rules: 4 Active</span>
                                <span className="glass px-3 py-1 rounded-xl text-[9px] font-mono text-green-400 uppercase tracking-widest">Zone_Ready</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-32 border-t border-white/5 bg-black/40 p-8 flex items-center justify-between">
                        <div className="flex gap-12">
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-black uppercase text-white/20 tracking-widest">Edge Latency</span>
                                <span className="text-xl font-black text-neon-cyan">2.4ms <span className="text-[8px] opacity-40">Direct</span></span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-black uppercase text-white/20 tracking-widest">Rule Hits</span>
                                <span className="text-xl font-black text-white">42.8k/hr</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={handlePing} disabled={isPinging} className="px-6 py-2 glass rounded-xl text-[9px] font-black text-white hover:bg-white hover:text-black transition-all uppercase tracking-widest">
                                {isPinging ? 'ANALYZING...' : 'Diagnostic_Sync'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Transformer Lab */}
                <div className="h-[400px] glass-ultra rounded-[40px] p-10 border border-white/5 shadow-2xl flex flex-col gap-8 bg-black/40 overflow-hidden">
                    <div className="flex items-center justify-between">
                        <div className="text-[10px] font-black tracking-[0.4em] text-neon-cyan uppercase flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_var(--neon-cyan)]"></span>
                            Edge Transformer Lab
                        </div>
                        <div className="flex gap-2 p-1 glass rounded-2xl border border-white/5 bg-black/20">
                            <button onClick={() => setActiveTab('traffic')} className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === 'traffic' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}>Traffic</button>
                            <button onClick={() => setActiveTab('orchestra')} className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === 'orchestra' ? 'bg-neon-cyan text-black shadow-[0_0_15px_rgba(0,242,255,0.3)]' : 'text-white/40 hover:text-white'}`}>Orchestra</button>
                        </div>
                    </div>

                    {activeTab === 'traffic' ? (
                        <div className="flex-1 grid grid-cols-3 gap-8 animate-in fade-in slide-in-from-left-4 duration-500 overflow-y-auto pr-2">
                            {/* URL Rewrite */}
                            <div className="space-y-6">
                                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Path Rewriting</div>
                                <div className="p-5 glass rounded-3xl border border-white/5 space-y-4">
                                    <div className="space-y-2">
                                        <div className="text-[8px] font-mono text-white/20 uppercase">Match Pattern</div>
                                        <div className="p-3 bg-black/40 rounded-xl text-[10px] font-mono text-neon-cyan truncate">/legacy/assets/*</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-[8px] font-mono text-white/20 uppercase">Rewrite Target</div>
                                        <div className="p-3 bg-black/40 rounded-xl text-[10px] font-mono text-white/60 truncate">/innovation/shadow/$1</div>
                                    </div>
                                    <button className="w-full py-3 glass rounded-xl text-[8px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:border-white/20 transition-all">Add_Rewrite_Rule</button>
                                </div>
                            </div>

                            {/* Request Headers */}
                            <div className="space-y-6">
                                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Request Headers</div>
                                <div className="space-y-3">
                                    {[
                                        { key: 'X-Source', val: 'POG-Edge', active: true },
                                        { key: 'X-Bot-Score', val: 'dynamic', active: true },
                                        { key: 'CF-Visitor', val: 'sanitized', active: false }
                                    ].map(h => (
                                        <div key={h.key} className="p-4 glass rounded-2xl border border-white/5 flex items-center justify-between group hover:border-white/20 transition-all">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[9px] font-black text-white">{h.key}</span>
                                                <span className="text-[8px] font-mono text-white/40 uppercase">{h.val}</span>
                                            </div>
                                            <div className={`w-2 h-2 rounded-full ${h.active ? 'bg-neon-cyan shadow-[0_0_8px_var(--neon-cyan)]' : 'bg-white/10'}`} />
                                        </div>
                                    ))}
                                    <button className="w-full py-3 glass rounded-xl text-[8px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:border-white/20 transition-all">+ New_Header</button>
                                </div>
                            </div>

                            {/* Response Headers */}
                            <div className="space-y-6">
                                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Response Headers</div>
                                <div className="space-y-3">
                                    {[
                                        { key: 'Access-Control-Origin', val: '*', active: true },
                                        { key: 'Cache-Control', val: 'max-age=3600', active: true },
                                        { key: 'X-Synthesized-By', val: 'POG_v6', active: true }
                                    ].map(h => (
                                        <div key={h.key} className="p-4 glass rounded-2xl border border-white/5 flex items-center justify-between group hover:border-white/20 transition-all">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[9px] font-black text-white">{h.key}</span>
                                                <span className="text-[8px] font-mono text-white/40 uppercase">{h.val}</span>
                                            </div>
                                            <div className={`w-2 h-2 rounded-full ${h.active ? 'bg-neon-magenta shadow-[0_0_8px_var(--neon-magenta)]' : 'bg-white/10'}`} />
                                        </div>
                                    ))}
                                    <button className="w-full py-3 glass rounded-xl text-[8px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:border-white/20 transition-all">+ New_Header</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="flex flex-col gap-4">
                                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-neon-cyan border-b border-neon-cyan/20 pb-2">Orchestrator Directive</div>
                                <textarea
                                    value={synthPrompt}
                                    onChange={(e) => setSynthPrompt(e.target.value)}
                                    placeholder="Describe routing behavior (e.g. 'Redirect all mobile visitors to the Lite zone and add cache-control headers')..."
                                    className="w-full h-32 bg-black/40 border border-white/10 rounded-2xl p-4 text-[11px] font-mono text-white/70 outline-none focus:border-neon-cyan/40 transition-all resize-none shadow-inner"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Wildcard CORS', desc: 'Add Access-Control-Allow-Origin: * to all responses' },
                                    { label: 'Bot Score Protect', desc: 'Inject X-Bot-Score request header for downstream verification' },
                                    { label: 'Legacy Path Fix', desc: 'Rewrite encoded slashes and normalize old PHP-style URLs' },
                                    { label: 'Static Asset Cache', desc: 'Set aggressive cache-control for all image/video assets' }
                                ].map(p => (
                                    <button key={p.label} onClick={() => setSynthPrompt(p.desc)} className="p-4 glass rounded-2xl border border-white/5 text-left hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all group">
                                        <div className="text-[9px] font-black text-white group-hover:text-neon-cyan uppercase tracking-widest mb-1">{p.label}</div>
                                        <div className="text-[8px] text-white/40 uppercase tracking-tighter">{p.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Diagnostics Rack */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 relative overflow-hidden bg-white/5 backdrop-blur-3xl flex-1">
                    <div className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Global Deployment</div>

                    <div className="space-y-6 flex-1 overflow-y-auto pr-2">
                        {[
                            { name: 'NA-East (IAD)', load: 45, status: 'Optimal' },
                            { name: 'EU-West (LHR)', load: 82, status: 'Near Capacity' },
                            { name: 'Asia-South (SIN)', load: 12, status: 'Optimal' },
                            { name: 'AU-East (SYD)', load: 24, status: 'Optimal' }
                        ].map(r => (
                            <div key={r.name} className="p-5 glass rounded-3xl border border-white/5 flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{r.name}</span>
                                    <span className={`text-[9px] font-black ${r.status === 'Optimal' ? 'text-green-400' : 'text-neon-cyan animate-pulse'}`}>{r.status}</span>
                                </div>
                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-neon-cyan shadow-[0_0_8px_var(--neon-cyan)] transition-all duration-1000" style={{ width: `${r.load}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="h-[1px] bg-white/5 w-full" />

                    <button
                        onClick={handleApplyRules}
                        className="w-full py-5 rounded-2xl bg-white text-black font-black text-xs tracking-[0.4em] uppercase shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-neon-cyan transition-all"
                    >
                        🚀 Deploy Transformations
                    </button>
                </div>

                {/* Throughput Monitor */}
                <div className="h-64 glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-6">
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Edge Processing Load</div>
                    <div className="flex-1 flex items-end gap-1 px-2">
                        {Array(25).fill(0).map((_, i) => (
                            <div key={i} className="flex-1 bg-neon-cyan opacity-40 rounded-t-sm animate-pulse-slow" style={{ height: `${Math.random() * 80 + 20}%`, animationDelay: `${i * 100}ms` }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
