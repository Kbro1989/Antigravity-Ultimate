import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function RelicWorkspace() {
    const hub = useServiceHub();
    const { addNotification } = useNotification();
    const [isExcavating, setIsExcavating] = React.useState(false);
    const [relicCount, setRelicCount] = React.useState(0);
    const [activeSector, setActiveSector] = React.useState('Models_Legacy');
    const [restoredItems, setRestoredItems] = React.useState<any[]>([]);
    const [needsCategory, setNeedsCategory] = useState<string>('locations');
    const [needsItems, setNeedsItems] = useState<any[]>([]);

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

    const handleForkRelic = async (item: any) => {
        try {
            addNotification('info', `Excavating Relic Content: ${item.name}...`);

            // 1. Fetch content first
            const fetchRes: any = await hub.limbs.call('relic', 'fetch_relic_content', {
                path: item.name,
                category: needsCategory
            });

            if (fetchRes.status !== 'success') {
                throw new Error(fetchRes.message || 'Content excavation failed');
            }

            // 2. Fork to Staging
            const result = await hub.limbs.call('relic', 'fork_relic', {
                id: item.name,
                type: 'ref_' + needsCategory,
                content: fetchRes.content
            });

            if (result.status === 'success') {
                addNotification('success', result.message);
            } else {
                throw new Error(result.message);
            }
        } catch (e: any) {
            addNotification('error', `Forking Failed: ${e.message}`);
        }
    };

    const handlePassToEditor = (asset: any) => {
        // Emit a session-level event or update a shared state
        hub.limbs.emit('project_asset_passed', asset);
        addNotification('info', `Relic Synchronized: Passing ${asset.type} to Mesh Workspace`);
    };

    const fetchNeeds = React.useCallback(async () => {
        try {
            const res: any = await hub.limbs.call('relic', 'scan_game_needs', { category: needsCategory });
            if (res.status === 'success') {
                setNeedsItems(res.items || []);
            } else {
                setNeedsItems([]);
            }
        } catch (e) {
            setNeedsItems([]);
        }
    }, [hub, needsCategory]);

    React.useEffect(() => {
        fetchNeeds();
    }, [fetchNeeds]);


    return (
        <div className="flex-1 flex gap-8 h-full p-8 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Archive Viewer HUD */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col group p-10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-10"></div>

                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40">RSC-Cloudflare Reference</span>
                        <span className="text-[9px] font-mono text-cyan-500/60 uppercase">SOURCE: {needsCategory.toUpperCase()}</span>
                    </div>
                </div>

                {/* File List / Data View */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-2">
                    {needsItems.length === 0 && (
                        <div className="text-white/20 text-xs font-mono p-4">No artifacts found in this sector.</div>
                    )}
                    {needsItems.map((item: any) => (
                        <div key={item.name} className="p-4 glass-ultra rounded-2xl border border-white/5 flex items-center justify-between hover:bg-white/5 transition-all group/item">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xs">
                                    {item.isDirectory ? '📁' : '📄'}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{item.name}</span>
                                    <span className="text-[8px] font-mono text-white/30">{item.size || 0} bytes</span>
                                </div>
                            </div>
                            <button onClick={() => handleForkRelic(item)} className="opacity-0 group-hover/item:opacity-100 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-[8px] font-bold uppercase rounded hover:bg-cyan-500/40 transition-all">
                                Fork to Staging
                            </button>
                        </div>
                    ))}
                </div>

                <div className="h-16 border-t border-white/5 mt-4 flex items-center justify-between">
                    <div className="text-[9px] font-mono text-white/20">Archive Integrity: 100%</div>
                </div>
            </div>

            {/* Excavation Controls / Category Switcher */}
            <div className="w-[400px] flex flex-col gap-8">
                <div className="glass-ultra rounded-[40px] p-8 border border-white/5 shadow-2xl flex flex-col gap-8 h-full bg-white/5 backdrop-blur-3xl">
                    <div className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Archive Sectors</div>

                    <div className="flex flex-col gap-3">
                        {['locations', 'config', 'ids', 'sprites', 'models'].map(cat => (
                            <div key={cat} onClick={() => setNeedsCategory(cat)}
                                className={`p-4 glass rounded-2xl border flex items-center justify-between cursor-pointer transition-all
                                ${needsCategory === cat ? 'border-cyan-500/40 bg-cyan-500/5' : 'border-white/5 hover:bg-white/5'}
                            `}>
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${needsCategory === cat ? 'text-cyan-400' : 'text-white/60'}`}>{cat}</span>
                                {needsCategory === cat && <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_cyan]"></div>}
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto p-6 bg-cyan-500/5 rounded-3xl border border-cyan-500/20">
                        <div className="text-[9px] font-black text-cyan-500 uppercase tracking-widest mb-2">Needs Analysis</div>
                        <div className="text-[10px] text-white/60 leading-relaxed">
                            Scanning reference implementation for missing assets. <br />
                            Target: {needsCategory}<br />
                            Status: {needsItems.length > 0 ? 'ONLINE' : 'OFFLINE'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
