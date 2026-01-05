export function ImageWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [isProcessing, setIsProcessing] = useState(false);
    const [mode, setMode] = useState<'TEXTURE' | 'SPRITE' | 'RETRO'>('TEXTURE');
    const [prompt, setPrompt] = useState('Seamless cobblestone texture, mossy, dark gray');

    const handleGenerate = async (action: string) => {
        setIsProcessing(true);
        try {
            const result = await callLimb('image', action, { prompt, mode });
            addNotification('success', `${action.toUpperCase()} Initialized: Generating Game Asset...`);
            setTimeout(() => {
                addNotification('success', 'Asset Synthesis Complete: Pushed to Staging');
                setIsProcessing(false);
            }, 3000);
        } catch (e: any) {
            addNotification('error', `Synthesis Fault: ${e.message}`);
            setIsProcessing(false);
        }
    };

    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Viewport HUD */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col group p-10">
                <div className="flex-1 flex gap-6 relative">
                    <div className="flex-1 glass rounded-3xl border border-white/5 overflow-hidden relative group/pane bg-black/40 flex items-center justify-center">
                        <div className="absolute top-4 left-4 glass px-4 py-1.5 rounded-xl text-[9px] font-black text-white/40 uppercase tracking-widest z-10 border border-white/5">Asset_Preview</div>
                        <img src={`https://picsum.photos/seed/${mode}/800/800`} className={`w-full h-full object-cover transition-opacity duration-1000 ${isProcessing ? 'opacity-20' : 'opacity-80'}`} />
                        {isProcessing && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 border-4 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin" />
                            </div>
                        )}
                    </div>
                </div>

                <div className="h-32 border-t border-white/5 bg-black/40 p-8 flex items-center justify-between mt-8">
                    <div className="flex gap-12">
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-black uppercase text-white/20 tracking-widest">Asset Type</span>
                            <span className="text-xl font-black text-neon-cyan">{mode} STUDIO</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-black uppercase text-white/20 tracking-widest">Target Engine</span>
                            <span className="text-xl font-black text-white">UNIVERSAL_PBR</span>
                        </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1">
                        <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest italic">NEURAL_TEXTURE_SYNTH_v2<br />MIPMAP_GENERATION: AUTO</div>
                    </div>
                </div>
            </div>

            {/* Production Rack */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 flex-1 bg-white/5 backdrop-blur-3xl">
                    <div className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Texture Orchestrator</div>

                    <div className="flex gap-2">
                        {(['TEXTURE', 'SPRITE', 'RETRO'] as const).map(m => (
                            <button key={m} onClick={() => setMode(m)}
                                className={`flex-1 py-3 rounded-xl text-[9px] font-black transition-all border ${mode === m ? 'bg-neon-cyan text-black border-neon-cyan' : 'bg-white/5 text-white/40 border-white/5 hover:border-white/20'}`}
                            >
                                {m}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Production Prompt</div>
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-[11px] text-white/80 font-mono resize-none focus:border-neon-cyan/50 outline-none h-24"
                            placeholder="Describe the asset..."
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Synthesis Pass</div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Seamless', action: 'toggle_seamless', val: 'ON' },
                                { label: 'PBR Maps', action: 'toggle_pbr', val: 'ON' },
                                { label: 'Sheet Ext', action: 'toggle_sheet', val: 'OFF' },
                                { label: 'Palette', action: 'choose_palette', val: 'RETRO' }
                            ].map(m => (
                                <div key={m.label} className="p-4 glass rounded-[24px] border border-white/5 flex flex-col gap-1 hover:border-white/20 transition-all cursor-pointer group">
                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest group-hover:text-neon-cyan/50">{m.label}</span>
                                    <span className={`text-[10px] font-black uppercase ${m.val === 'ON' ? 'text-neon-cyan' : 'text-white/60'}`}>{m.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto space-y-4">
                        <button onClick={() => handleGenerate('synthesize_texture')} disabled={isProcessing}
                            className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.4em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                ${isProcessing ? 'bg-neon-cyan/20 text-white animate-pulse border border-neon-cyan/50' : 'bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_40px_rgba(0,242,255,0.4)]'}
                            `}
                        >
                            {isProcessing ? 'Synthesizing...' : '⚡ Generate Asset'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
