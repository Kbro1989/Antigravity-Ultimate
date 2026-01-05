import React, { useState, useEffect } from 'react';
import { mcpConfigManager, MCPConfig } from '../../../services/mcp/MCPConfigManager';
import { useServiceHub } from '../../hooks';
import { MODEL_CATALOG } from '../../../services/ai/ModelRegistry';

export const SettingsPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { hub } = useServiceHub();
    const [config, setConfig] = useState<MCPConfig>(mcpConfigManager.getConfig());
    const [backendStats, setBackendStats] = useState<any>(null);
    const [activeTab, setActiveTab] = useState<'general' | 'models' | 'security'>('general');

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const stats = await hub.stats.get();
                setBackendStats(stats);
            } catch (e) {
                console.warn("Failed to fetch backend stats", e);
            }
        };
        fetchStats();
    }, [hub]);

    const handleSave = () => {
        mcpConfigManager.saveConfig(config);
        onClose();
    };

    return (
        <div className="glass-ultra p-10 rounded-[40px] border border-cyan-500/30 w-full max-w-4xl text-white shadow-[0_0_100px_rgba(0,242,255,0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

            <div className="flex justify-between items-start mb-10">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-black tracking-tighter text-cyan-400">NEURAL CORE SETTINGS</h2>
                    <span className="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase mt-2">v6.5_ULTIMATE_CONFIGURATION</span>
                </div>
                <button onClick={onClose} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-white/10 transition-all">✕</button>
            </div>

            <div className="flex gap-4 mb-8 border-b border-white/5 pb-4">
                <button onClick={() => setActiveTab('general')} className={`px-6 py-2 text-[10px] font-black tracking-widest uppercase transition-all ${activeTab === 'general' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-white/40 hover:text-white'}`}>General</button>
                <button onClick={() => setActiveTab('models')} className={`px-6 py-2 text-[10px] font-black tracking-widest uppercase transition-all ${activeTab === 'models' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-white/40 hover:text-white'}`}>Model Catalog</button>
                <button onClick={() => setActiveTab('security')} className={`px-6 py-2 text-[10px] font-black tracking-widest uppercase transition-all ${activeTab === 'security' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-white/40 hover:text-white'}`}>Hard-Block</button>
            </div>

            <div className="space-y-8 max-h-[55vh] overflow-y-auto pr-4 custom-scrollbar">
                {activeTab === 'general' && (
                    <>
                        {/* Provider Section */}
                        <section>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Cognitive Access Tokens</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-black/40 border border-white/5 group hover:border-cyan-500/30 transition-all">
                                    <label className="block text-[10px] font-black text-cyan-400/60 uppercase tracking-widest mb-3">GEMINI_API_KEY</label>
                                    <input
                                        type="password"
                                        value={config.providers.gemini?.apiKey || ''}
                                        onChange={(e) => setConfig({
                                            ...config,
                                            providers: { ...config.providers, gemini: { ...config.providers.gemini!, apiKey: e.target.value, enabled: true } }
                                        })}
                                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all font-mono"
                                        placeholder="sk-..."
                                    />
                                </div>
                                <div className="p-6 rounded-3xl bg-black/40 border border-white/5 group hover:border-magenta-500/30 transition-all">
                                    <label className="block text-[10px] font-black text-magenta-400/60 uppercase tracking-widest mb-3">FIREWORKS_AI_KEY</label>
                                    <input
                                        type="password"
                                        value={config.providers.external?.fireworksKey || ''}
                                        onChange={(e) => setConfig({
                                            ...config,
                                            providers: { ...config.providers, external: { ...config.providers.external!, fireworksKey: e.target.value } }
                                        })}
                                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all font-mono"
                                        placeholder="fw_..."
                                    />
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Routing Strategy</h3>
                            <div className="p-6 rounded-3xl bg-black/40 border border-white/5">
                                <select
                                    value={config.routing.strategy}
                                    onChange={(e) => setConfig({ ...config, routing: { ...config.routing, strategy: e.target.value as any } })}
                                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-4 text-sm font-bold tracking-wide outline-none focus:border-cyan-500 transition-all"
                                >
                                    <option value="cloudflare-first">Cloudflare First (Zero Cost Optimization)</option>
                                    <option value="cost-optimized">Cost Optimized (Hybrid Neural Routing)</option>
                                    <option value="performance-first">Performance First (Pro/Reasoning Mode)</option>
                                </select>
                            </div>
                        </section>
                    </>
                )}

                {activeTab === 'models' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(MODEL_CATALOG).map(([category, capability]) => (
                            <div key={category} className="p-5 glass-divine rounded-2xl border-white/5">
                                <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-3">{category}</h4>
                                <div className="space-y-2">
                                    {Object.entries(capability).map(([tier, model]) => (
                                        <div key={tier} className="flex justify-between items-center text-[10px] font-mono p-2 bg-white/5 rounded-lg border border-white/5">
                                            <span className="text-white/40 uppercase">{tier}:</span>
                                            <span className="text-white/80">{(model as any).id}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'security' && (
                    <div className="space-y-8">
                        <section className="p-8 rounded-3xl bg-cyan-950/20 border border-cyan-500/20 shadow-inner">
                            <h3 className="text-xs font-black text-cyan-400 uppercase tracking-[0.4em] mb-6 text-center">Neural Core Telemetry</h3>
                            <div className="grid grid-cols-3 gap-8">
                                <div className="flex flex-col items-center">
                                    <div className="text-4xl font-black tracking-tighter text-white mb-2">{backendStats?.tokensUsed || 0}</div>
                                    <div className="text-[9px] font-black text-white/30 uppercase tracking-widest">Global Requests</div>
                                </div>
                                <div className="flex flex-col items-center border-x border-white/5">
                                    <div className="text-4xl font-black tracking-tighter text-cyan-400 mb-2">{backendStats?.latency || 0}ms</div>
                                    <div className="text-[9px] font-black text-white/30 uppercase tracking-widest">Backend Latency</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-4xl font-black tracking-tighter text-green-400 mb-2">${(backendStats?.cost || 0).toFixed(4)}</div>
                                    <div className="text-[9px] font-black text-white/30 uppercase tracking-widest">Total Spend (USD)</div>
                                </div>
                            </div>
                        </section>

                        <div className="p-8 rounded-3xl bg-red-950/10 border border-white/5 flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-black text-red-400 uppercase tracking-widest mb-1">Emergency Kill Switch</h4>
                                <p className="text-[10px] text-white/40">Immediately disable all paid AI overflows</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={config.routing.allowPaidOverflow}
                                onChange={(e) => setConfig({ ...config, routing: { ...config.routing, allowPaidOverflow: e.target.checked } })}
                                className="w-6 h-6 accent-red-500"
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-12 flex gap-6">
                <button
                    onClick={handleSave}
                    className="flex-1 py-5 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] shadow-2xl shadow-cyan-900/40 transition-all transform active:scale-[0.98]"
                >
                    Commit Configuration
                </button>
                <button
                    onClick={onClose}
                    className="px-10 py-5 border border-white/10 hover:bg-white/5 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] transition-all"
                >
                    Abort
                </button>
            </div>
        </div>
    );
};
