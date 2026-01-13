import React, { useState, useEffect } from 'react';
import { mcpConfigManager, MCPConfig } from '../../../services/mcp/MCPConfigManager';
import { useServiceHub } from '../../hooks';
import { modelRegistry, MODEL_CATALOG, ModelCapabilityKey, ModelTier, ModelDefinition } from '../../../services/ai/ModelRegistry';

export const SettingsPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { hub } = useServiceHub();
    const [config, setConfig] = useState<MCPConfig>(mcpConfigManager.getConfig());
    const [backendStats, setBackendStats] = useState<any>(null);
    const [activeTab, setActiveTab] = useState<'general' | 'models' | 'security'>('general');

    // Model Tab State
    const [selectedCapability, setSelectedCapability] = useState<ModelCapabilityKey>('textGeneration');
    const capabilities = modelRegistry.listCapabilities();

    const handleModelChange = (capability: ModelCapabilityKey, tier: ModelTier, modelId: string) => {
        let foundModel: ModelDefinition | undefined;
        const capabilityModels = modelRegistry.getModelsForCapability(capability);
        Object.values(capabilityModels).forEach(m => {
            // @ts-ignore
            if (m.id === modelId) foundModel = m;
        });

        if (foundModel) {
            modelRegistry.setOverride(capability, tier, foundModel);
            // Force re-render if needed, though registry might be outside react state
            // setOverrides(prev => ({ ...prev, [`${capability}:${tier}`]: foundModel! }));
        }
    };

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
                    <div className="flex gap-6 h-[400px]">
                        {/* Capability Sidebar */}
                        <div className="w-1/3 flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar border-r border-white/5">
                            <h4 className="text-[10px] font-black text-cyan-400/40 uppercase mb-2 tracking-widest px-2">Capabilities</h4>
                            {capabilities.map(cap => (
                                <button
                                    key={cap}
                                    onClick={() => setSelectedCapability(cap)}
                                    className={`text-left px-4 py-3 rounded-xl text-xs transition-all duration-200 border ${selectedCapability === cap
                                        ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                                        : 'border-transparent hover:bg-white/5 text-slate-400 hover:text-white'
                                        }`}
                                >
                                    <div className="font-bold mb-0.5 capitalize">{cap.replace(/([A-Z])/g, ' $1').trim()}</div>
                                </button>
                            ))}
                        </div>

                        {/* Config Area */}
                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            <div className="mb-6 border-b border-white/5 pb-4">
                                <h3 className="text-xl font-light text-white mb-1 capitalize">
                                    {selectedCapability.replace(/([A-Z])/g, ' $1').trim()}
                                </h3>
                                <p className="text-slate-400 text-[10px]">
                                    Configure the neural backend for this capability.
                                </p>
                            </div>

                            <div className="grid gap-4">
                                {['default', 'fast', 'quality', 'reasoning'].map((tier) => {
                                    const currentModel = modelRegistry.getModel(selectedCapability, tier as ModelTier);
                                    const availableModels = modelRegistry.getModelsForCapability(selectedCapability);

                                    // Only show if this tier exists in the catalog or if it's default
                                    // @ts-ignore
                                    if (!availableModels[tier] && tier !== 'default') return null;

                                    return (
                                        <div key={tier} className="glass-dark p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <div className="text-[10px] font-black text-cyan-400 uppercase tracking-wider mb-1">{tier} Tier</div>
                                                    <div className="text-xs font-medium text-white/70">{currentModel.description}</div>
                                                </div>
                                                <div className="px-2 py-0.5 rounded text-[9px] font-bold bg-white/5 border border-white/10 text-slate-400">
                                                    {currentModel.provider.toUpperCase()}
                                                </div>
                                            </div>

                                            <select
                                                value={currentModel.id}
                                                onChange={(e) => handleModelChange(selectedCapability, tier as ModelTier, e.target.value)}
                                                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-cyan-100 focus:border-cyan-500/50 outline-none transition-colors font-mono"
                                            >
                                                {Object.values(availableModels).map((m: any) => (
                                                    <option key={m.id} value={m.id}>
                                                        {m.id.replace('@cf/', '')} ({m.provider})
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
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
