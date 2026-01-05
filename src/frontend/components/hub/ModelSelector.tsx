import React, { useState, useEffect } from 'react';
import { modelRegistry, MODEL_CATALOG, ModelCapabilityKey, ModelTier, ModelDefinition, WORKSPACE_MODELS } from '../../../services/ai/ModelRegistry';
import { useStateManager } from '../../../services/core/StateManager';

export function ModelSelector({ onClose }: { onClose: () => void }) {
    const { activeWorkspace } = useStateManager();
    const [selectedCapability, setSelectedCapability] = useState<ModelCapabilityKey>(
        activeWorkspace && WORKSPACE_MODELS[activeWorkspace]
            ? WORKSPACE_MODELS[activeWorkspace]
            : 'textGeneration'
    );
    const [overrides, setOverrides] = useState<Record<string, ModelDefinition>>({});

    // Simplification for the example: loading initial state mostly relies on the registry
    useEffect(() => {
        // In a real implementation, we might fetch persistent config here
    }, []);

    const capabilities = modelRegistry.listCapabilities();

    const handleModelChange = (capability: ModelCapabilityKey, tier: ModelTier, modelId: string) => {
        let foundModel: ModelDefinition | undefined;

        const capabilityModels = modelRegistry.getModelsForCapability(capability);
        Object.values(capabilityModels).forEach(m => {
            if (m.id === modelId) foundModel = m;
        });

        if (foundModel) {
            modelRegistry.setOverride(capability, tier, foundModel);
            setOverrides(prev => ({ ...prev, [`${capability}:${tier}`]: foundModel! }));
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="w-[900px] h-[700px] glass-ultra rounded-2xl flex flex-col overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)]">

                {/* Header */}
                <div className="p-6 border-b border-cyan-500/20 flex justify-between items-center bg-gradient-to-r from-cyan-900/20 to-transparent">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                            <span className="material-icons text-xl">psychology</span>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white tracking-wide">Neural Foundation Models</h2>
                            <div className="text-xs text-cyan-400/60 font-mono">CONFIGURE MODEL ASSIGNMENTS</div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                    >
                        ✕
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-64 border-r border-cyan-500/20 bg-black/20 p-4 flex flex-col gap-2 overflow-y-auto">
                        <div className="text-[10px] font-black text-cyan-400/40 uppercase mb-2 tracking-widest px-4">Workspace Context</div>
                        {activeWorkspace && (
                            <div className="px-4 py-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 mb-4">
                                <div className="text-[10px] font-black text-neon-cyan uppercase tracking-tighter">Active Tab</div>
                                <div className="text-sm font-bold text-white capitalize">{activeWorkspace}</div>
                            </div>
                        )}

                        <div className="text-[10px] font-black text-cyan-400/40 uppercase mb-2 tracking-widest px-4">Capabilities</div>
                        {capabilities.map(cap => (
                            <button
                                key={cap}
                                onClick={() => setSelectedCapability(cap)}
                                className={`text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 border ${selectedCapability === cap
                                    ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                                    : 'border-transparent hover:bg-white/5 text-slate-400 hover:text-white'
                                    }`}
                            >
                                <div className="font-bold mb-0.5 capitalize">{cap.replace(/([A-Z])/g, ' $1').trim()}</div>
                                <div className="text-[10px] opacity-60 font-mono">
                                    {(modelRegistry.getModelsForCapability(cap) as any).default?.provider.toUpperCase() || 'UNKNOWN'}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Config Area */}
                    <div className="flex-1 p-8 overflow-y-auto bg-gradient-to-br from-transparent to-cyan-900/5">
                        <div className="mb-8">
                            <h3 className="text-2xl font-light text-white mb-2 capitalize">
                                {selectedCapability.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            <p className="text-slate-400 text-sm">
                                Configure the underlying AI models for this capability. Changes apply immediately.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {['default', 'fast', 'quality', 'reasoning'].map((tier) => {
                                const currentModel = modelRegistry.getModel(selectedCapability, tier as ModelTier);
                                const availableModels = modelRegistry.getModelsForCapability(selectedCapability);

                                // Only show if this tier exists in the catalog or if it's default
                                if (!availableModels[tier] && tier !== 'default') return null;

                                return (
                                    <div key={tier} className="glass-dark p-5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">{tier} Tier</div>
                                                <div className="text-sm font-medium text-white/90">{currentModel.description}</div>
                                            </div>
                                            <div className="px-2 py-1 rounded text-[10px] font-bold bg-white/5 border border-white/10 text-slate-400">
                                                {currentModel.provider.toUpperCase()}
                                            </div>
                                        </div>

                                        <select
                                            value={currentModel.id}
                                            onChange={(e) => handleModelChange(selectedCapability, tier as ModelTier, e.target.value)}
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-cyan-100 focus:border-cyan-500/50 outline-none transition-colors font-mono"
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

                {/* Footer */}
                <div className="p-4 border-t border-cyan-500/20 bg-black/40 flex justify-between items-center text-xs text-slate-500">
                    <div>
                        Current Environment: <span className="text-cyan-400 font-bold">PRODUCTION</span>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={onClose} className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-lg border border-cyan-500/30 transition-all font-bold">
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
