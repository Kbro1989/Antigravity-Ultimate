import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function RelicWorkspace() {
    const hub = useServiceHub();
    const { addNotification } = useNotification();
    const [isExcavating, setIsExcavating] = React.useState(false);
    const [relicCount, setRelicCount] = React.useState(0);
    const [activeSector, setActiveSector] = React.useState('Models_Legacy');
    const [restoredItems, setRestoredItems] = React.useState<any[]>([]);

    const refreshAssets = React.useCallback(async () => {
        try {
            const assets = (await hub.stats.getAssets()) as any[];
            setRestoredItems(assets.sort((a: any, b: any) => b.timestamp - a.timestamp));
            setRelicCount(assets.length);
        } catch (e) {
            console.error('[RelicWorkspace] Asset refresh failed', e);
        }
    }, [hub]);

    React.useEffect(() => {
        refreshAssets();
        const interval = setInterval(refreshAssets, 5000);
        return () => clearInterval(interval);
    }, [refreshAssets]);

    const handleLinkCache = async () => {
        setIsExcavating(true);
        try {
            const rsc = (hub.rsmv as any).classic;
            const blueprint = rsc?.getBlueprint();
            const targetPath = blueprint ? blueprint.path : 'C:/ProgramData/Jagex/RuneScape';

            const result = await hub.limbs.call('relic', 'link_cache', { path: targetPath });
            addNotification('success', `Relic Source Linked: ${result.message}`);
            await refreshAssets();
        } catch (e: any) {
            addNotification('error', `Link Fault: ${e.message}`);
        }
        setIsExcavating(false);
    };

    const handlePassToEditor = (asset: any) => {
        // Emit a session-level event or update a shared state
        hub.limbs.emit('project_asset_passed', asset);
        addNotification('info', `Relic Synchronized: Passing ${asset.type} to Mesh Workspace`);
    };

    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Archive Viewer HUD */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col group p-10 bg-white/5">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-10" />

                <div className="flex-1 relative flex flex-col">
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40">Asset Archive v6.5</span>
                            <span className="text-[9px] font-mono text-cyan-500/60 uppercase">SECTOR_ACTIVE: {activeSector}</span>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={handleLinkCache} className="glass px-6 py-2 rounded-2xl text-[10px] font-black text-cyan-400 border border-cyan-500/20 uppercase hover:bg-cyan-500/10 transition-all">Link Jagex Cache</button>
                            <div className="glass px-6 py-2 rounded-2xl text-[10px] font-black text-white/40 border border-white/5 uppercase">Fidelity: 84%</div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-6">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500/40">Recent Restorations</div>
                        <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-[500px] pr-2">
                            {restoredItems.length > 0 ? restoredItems.map((item: any) => (
                                <div key={item.id} className="p-6 glass rounded-3xl border border-white/5 bg-black/40 flex items-center justify-between animate-fade-in">
                                    <div className="flex gap-6 items-center">
                                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-xl">
                                            {item.type === 'mesh' ? '🧊' : item.type === 'pbr_set' ? '🎨' : item.type === 'audio' ? '🔊' : '📦'}
                                        </div>
                                        <div>
                                            <div className="text-xs font-black text-white">{item.metadata?.prompt || item.metadata?.name || item.id}</div>
                                            <div className="text-[9px] font-mono text-cyan-400/60 uppercase">
                                                {item.type === 'mesh' ? 'Modern Mesh' : item.type === 'legacy_archive' ? 'Legacy Archive' : item.type} CLASS ASSET • {new Date(item.timestamp).toLocaleTimeString()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={() => handlePassToEditor(item)} className="px-4 py-2 glass-ultra rounded-xl text-[9px] font-bold text-cyan-400 hover:bg-cyan-500/10 transition-all uppercase">Pass to Editor</button>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 glass rounded-xl text-[9px] font-bold text-white/40 hover:text-white transition-all uppercase no-underline">Inspect</a>
                                    </div>
                                </div>
                            )) : (
                                <div className="flex-1 flex items-center justify-center border-2 border-dashed border-white/5 rounded-[32px] opacity-20">
                                    <div className="text-center space-y-4">
                                        <div className="text-4xl">⛏</div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em]">Initialize Excavation</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="h-32 border-t border-white/5 bg-black/20 p-8 flex items-center justify-between mt-10 rounded-b-[40px]">
                    <div className="flex gap-12">
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-black uppercase text-white/20 tracking-widest">Global Restorations</span>
                            <span className="text-xl font-black text-white">{relicCount}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-black uppercase text-white/20 tracking-widest">Storage Status</span>
                            <span className="text-xl font-black text-cyan-400">OPTIMAL</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest">LEGACY_PARSER_ACTIVE</div>
                    </div>
                </div>
            </div>

            {/* Archive Rack */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 h-full bg-white/5 backdrop-blur-3xl overflow-y-auto">
                    <div className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Archive Controls</div>

                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2">Cache Sectors</div>
                        <div className="flex flex-col gap-3">
                            {['Models_Legacy', 'Audio_Legacy', 'Maps_Legacy', 'Text_Strings', 'Neural_Echoes', 'Config_Old'].map(c => (
                                <button key={c} onClick={() => setActiveSector(c)}
                                    className={`p-5 glass rounded-2xl border transition-all flex items-center justify-between group ${activeSector === c ? 'border-cyan-500/50 bg-cyan-500/5' : 'border-white/5 bg-black/20 hover:border-white/20'}`}
                                >
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${activeSector === c ? 'text-cyan-400' : 'text-white/40'}`}>{c}</span>
                                    <div className={`w-2 h-2 rounded-full ${activeSector === c ? 'bg-cyan-500' : 'bg-white/10'}`} />
                                </button>
                            ))}
                        </div>

                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-cyan-500/30 border-b border-white/5 pb-2 pt-4">RSC Blueprints</div>
                        <div className="flex flex-col gap-2">
                            {[
                                { name: "RSC Cloudflare", path: "C:\\Users\\Destiny\\Desktop\\ai-architect-mmorpg\\copy-of-rsc-evolution-ai\\rsc-cloudflare\\public\\data204" },
                                { name: "OpenRSC Vanilla", path: "C:\\Users\\Destiny\\Desktop\\ai-architect-mmorpg\\copy-of-rsc-evolution-ai\\openrsc-vanilla\\rsc-data" },
                                { name: "RSC Dashboard", path: "C:\\Users\\Destiny\\Desktop\\ai-architect-mmorpg\\copy-of-rsc-evolution-ai\\rsc-dashboard" },
                                { name: "OpenRSC Repo", path: "C:\\Users\\Destiny\\Desktop\\ai-architect-mmorpg\\copy-of-rsc-evolution-ai\\openrsc-repo" }
                            ].map(b => (
                                <button
                                    key={b.name}
                                    onClick={() => {
                                        const rsc = (hub.rsmv as any).classic;
                                        if (rsc) rsc.setBlueprint(b.name, b.path);
                                        setActiveSector(`SOURCE:${b.name}`);
                                        addNotification('info', `Active blueprint swapped: ${b.name}`);
                                    }}
                                    className={`p-4 glass rounded-xl border flex flex-col gap-1 text-left transition-all ${activeSector === `SOURCE:${b.name}` ? 'border-cyan-500/50 bg-cyan-500/10' : 'border-white/5 bg-black/10 hover:border-white/20'}`}
                                >
                                    <span className="text-[10px] font-black text-white/60">{b.name}</span>
                                    <span className="text-[8px] font-mono text-cyan-500/40 truncate">{b.path}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto space-y-4 pt-8">
                        <div className="p-6 bg-cyan-500/5 rounded-3xl border border-cyan-500/20 flex flex-col gap-2">
                            <div className="text-[9px] font-black text-cyan-500 uppercase tracking-widest">Archival Protocol</div>
                            <div className="text-[11px] text-white/60 leading-relaxed font-medium">Salvage ancient asset signatures from the legacy client storage.</div>
                        </div>
                        <button onClick={handleLinkCache} disabled={isExcavating}
                            className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.4em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                ${isExcavating ? 'bg-cyan-500/20 text-white animate-pulse' : 'bg-white text-black hover:bg-cyan-500 hover:shadow-[0_0_40px_rgba(0,183,255,0.4)]'}
                            `}
                        >
                            {isExcavating ? 'Restoring...' : '⛏ Restore Relic'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
