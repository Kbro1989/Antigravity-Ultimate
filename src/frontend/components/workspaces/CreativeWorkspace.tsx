import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

interface CompositionLayer {
    id: string;
    type: 'subject' | 'apparel' | 'environment' | 'fx';
    label: string;
    prompt: string;
    weight: number;
    active: boolean;
}

interface GeneratedArtifact {
    id: number;
    url: string;
    layers: CompositionLayer[];
    timestamp: number;
}

function InputWell({ label, type, value, onChange, active, onToggle }: { label: string; type: string; value: string; onChange: (val: string) => void; active: boolean; onToggle: () => void; }) {
    const colors: Record<string, string> = { subject: 'neon-cyan', apparel: 'neon-magenta', environment: 'green-400', fx: 'neon-purple' };
    const activeColor = colors[type];

    return (
        <div className={`relative group transition-all duration-300 ${active ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}>
            <div className={`glass-ultra p-5 rounded-3xl border transition-all duration-300 h-full flex flex-col gap-3 ${active ? `border-${activeColor}/30 bg-black/40` : 'border-white/5 bg-black/20'}`}>
                <div className="flex justify-between items-center">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">{label}</div>
                    <button onClick={onToggle} className={`w-8 h-4 rounded-full transition-colors relative ${active ? `bg-${activeColor}` : 'bg-white/10'}`}>
                        <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-black rounded-full transition-transform ${active ? 'translate-x-4' : 'translate-x-0'}`} />
                    </button>
                </div>
                <textarea
                    value={value} onChange={(e) => onChange(e.target.value)} disabled={!active}
                    placeholder={`Define ${label.toLowerCase()} parameters...`}
                    className={`bg-transparent outline-none text-[11px] text-${activeColor} placeholder:text-white/10 resize-none h-20 font-mono`}
                />
            </div>
        </div>
    );
}

export function CreativeWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [layers, setLayers] = useState({
        subject: { active: true, prompt: "Cyberpunk Netrunner", weight: 1.0 },
        apparel: { active: true, prompt: "Holographic Trenchcoat", weight: 0.8 },
        environment: { active: true, prompt: "Neon Rain City", weight: 0.6 },
        fx: { active: false, prompt: "Prismatic Lens Flare", weight: 0.4 }
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [artifacts, setArtifacts] = useState<GeneratedArtifact[]>([]);

    const handleSynthesize = async () => {
        setIsProcessing(true);
        try {
            addNotification('info', 'Neural Compositor: Weaving Reality Matrix...');

            const result = await callLimb('image', 'image_generate', {
                action: 'synthesize_image',
                prompt: Object.entries(layers)
                    .filter(([_, l]) => l.active)
                    .map(([key, l]) => `${key}: ${l.prompt}`)
                    .join(', '),
                payload: { layers }
            });

            if (result.imageUrl) {
                const newArt = {
                    id: Date.now(),
                    url: result.imageUrl,
                    layers: Object.entries(layers)
                        .filter(([_, l]) => l.active)
                        .map(([key, l]) => ({ ...l, id: key, type: key as any, label: key })),
                    timestamp: Date.now()
                };
                setArtifacts(prev => [newArt, ...prev]);
                addNotification('success', 'Reality Shattered Successfully');
            } else {
                addNotification('warning', 'Image generated but no URL returned');
            }
        } catch (e: any) {
            addNotification('error', `Synthesis Fault: ${e.message}`);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="flex h-full gap-8 p-8 bg-black/40 animate-fade-in overflow-hidden">
            {/* Input Matrix */}
            <div className="w-[450px] flex flex-col gap-8 h-full">
                <div className="glass-ultra p-8 rounded-[40px] border border-white/5 relative overflow-hidden flex flex-col gap-6 shadow-2xl">
                    <div className="text-[10px] font-black tracking-[0.6em] text-neon-cyan uppercase">Neural Compositor</div>
                    <div className="grid grid-cols-2 gap-4">
                        <InputWell label="Subject" type="subject" value={layers.subject.prompt} active={layers.subject.active} onChange={(v) => setLayers(p => ({ ...p, subject: { ...p.subject, prompt: v } }))} onToggle={() => setLayers(p => ({ ...p, subject: { ...p.subject, active: !p.subject.active } }))} />
                        <InputWell label="Apparel" type="apparel" value={layers.apparel.prompt} active={layers.apparel.active} onChange={(v) => setLayers(p => ({ ...p, apparel: { ...p.apparel, prompt: v } }))} onToggle={() => setLayers(p => ({ ...p, apparel: { ...p.apparel, active: !p.apparel.active } }))} />
                        <InputWell label="World" type="environment" value={layers.environment.prompt} active={layers.environment.active} onChange={(v) => setLayers(p => ({ ...p, environment: { ...p.environment, prompt: v } }))} onToggle={() => setLayers(p => ({ ...p, environment: { ...p.environment, active: !p.environment.active } }))} />
                        <InputWell label="FX" type="fx" value={layers.fx.prompt} active={layers.fx.active} onChange={(v) => setLayers(p => ({ ...p, fx: { ...p.fx, prompt: v } }))} onToggle={() => setLayers(p => ({ ...p, fx: { ...p.fx, active: !p.fx.active } }))} />
                    </div>
                    <button onClick={handleSynthesize} disabled={isProcessing} className="w-full py-5 rounded-2xl bg-white text-black font-black text-xs tracking-[0.4em] hover:bg-neon-cyan hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] transition-all uppercase flex items-center justify-center gap-3">
                        {isProcessing ? 'Weaving...' : 'Shatter Reality'}
                    </button>
                </div>

                <div className="flex-1 glass-ultra rounded-[40px] p-8 border border-white/5 opacity-80 overflow-y-auto shadow-2xl">
                    <div className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-6 border-b border-white/5 pb-2">Active Spec Stack</div>
                    <div className="space-y-4">
                        {Object.entries(layers).filter(([_, l]) => l.active).map(([key, layer], idx) => (
                            <div key={key} className="flex items-center gap-4 group">
                                <span className="text-[10px] font-mono text-white/20">0{idx + 1}</span>
                                <div className="flex-1 text-[11px] font-bold text-white/80">{key.toUpperCase()} <span className="text-white/20 font-mono ml-2">[{layer.weight.toFixed(1)}]</span></div>
                                <div className={`w-2 h-2 rounded-full ${key === 'subject' ? 'bg-neon-cyan' : 'bg-neon-magenta'}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Output */}
            <div className="flex-1 flex flex-col gap-8 h-full">
                <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 relative overflow-hidden shadow-2xl group flex items-center justify-center">
                    {artifacts.length > 0 ? (
                        <>
                            <img src={artifacts[0].url} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s] linear" />
                            <div className="absolute top-8 left-8 glass px-6 py-2 rounded-full border border-white/10 text-[9px] font-black text-neon-cyan uppercase tracking-[0.4em] animate-pulse">DNA_VERIFIED</div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center opacity-10">
                            <div className="text-6xl mb-4">💠</div>
                            <div className="text-[10px] font-black uppercase tracking-[0.6em]">Neural Voids Awaiting Synthesis</div>
                        </div>
                    )}
                </div>

                <div className="h-40 flex gap-6 overflow-x-auto pb-4">
                    {artifacts.slice(1).map(art => (
                        <div key={art.id} className="h-full aspect-square rounded-3xl glass-ultra overflow-hidden border border-white/5 opacity-60 hover:opacity-100 transition-all cursor-pointer flex-shrink-0">
                            <img src={art.url} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
