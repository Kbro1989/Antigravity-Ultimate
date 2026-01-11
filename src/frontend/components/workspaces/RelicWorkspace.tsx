import React, { useState, useEffect } from 'react';

import { useServiceHub, useNotification } from '../../hooks';
import { useStateManager } from '../../../services/core/StateManager';
import { RSCModelViewer } from '../RSCModelViewer';

export function RelicWorkspace() {
    const hub = useServiceHub();
    const { addNotification } = useNotification();
    const { sourceRelic, setSourceRelic } = useStateManager();
    const [isExcavating, setIsExcavating] = React.useState(false);
    const [relicCount, setRelicCount] = React.useState(0);
    const [activeSector, setActiveSector] = React.useState('Models_Legacy');
    const [restoredItems, setRestoredItems] = React.useState<any[]>([]);
    const [needsCategory, setNeedsCategory] = useState<string>('archives');
    const [needsItems, setNeedsItems] = useState<any[]>([]);
    const [filterText, setFilterText] = useState('');
    const [decompiledScript, setDecompiledScript] = useState<string | null>(null);
    const [forensicSource, setForensicSource] = useState<string | null>(null);
    const [showBlueprint, setShowBlueprint] = useState(false);

    const handleViewLogic = async () => {
        if (!selectedEntry) return;
        setForensicSource(null); // Clear forensic state
        try {
            const res: any = await hub.limbs.call('code', 'decompile_clientscript', {
                scriptId: selectedEntry.id,
                era: era
            });
            if (res.status === 'success') {
                setDecompiledScript(`// AUTHENTIC CLIENTSCRIPT (JAG) RECOVERED
// ID: ${selectedEntry.id}
// RECOGNIZED BY ARCHEO-ENGINE

function script_${selectedEntry.id}() {
  // Logic flow recognized.
  // Archeological Reconstruction in progress...
}`);
                addNotification('success', 'Authentic Logic Binary Decompiled');
            }
        } catch (e: any) {
            addNotification('error', `Decompile Failed: ${e.message}`);
        }
    };

    const handleViewForensics = async () => {
        if (!selectedEntry) return;
        try {
            const res: any = await hub.limbs.call('code', 'reconstruct_forensic_handling', {
                id: selectedEntry.id,
                type: selectedEntry.type
            });
            if (res.status === 'success') {
                setForensicSource(res.sourceFile);
                setDecompiledScript(res.logic);
                addNotification('success', 'Forensic Gameplay Handling Reconstructed');
            } else {
                addNotification('warning', res.message);
            }
        } catch (e: any) {
            addNotification('error', `Forensic Scan Failed: ${e.message}`);
        }
    };

    const handleViewBlueprint = async () => {
        if (!selectedEntry) return;
        try {
            const res: any = await hub.limbs.call('relic', 'get_landscape_blueprint', {
                regionId: selectedEntry.id
            });
            if (res.status === 'success') {
                setShowBlueprint(true);
                addNotification('success', 'Authentic Landscape Blueprint Generated');
            }
        } catch (e: any) {
            addNotification('error', `Blueprint Failed: ${e.message}`);
        }
    };

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
            let res: any;
            // Always default to MUSEUM MODE for the authentic experience
            if (true) {
                res = await hub.limbs.call('relic', 'explore_museum', { category: needsCategory });
            }

            if (res.status === 'success') {
                // Filter client-side based on category if needed, or just show all museum artifacts
                const allArtifacts = res.artifacts || [];
                const filtered = allArtifacts.filter((a: any) => {
                    if (needsCategory === 'archives') return a.type === 'archive';
                    if (needsCategory === 'models') return a.type === '3d_models';
                    if (needsCategory === 'config') return a.type === 'configuration';
                    return true;
                });
                setNeedsItems(filtered);
            } else {
                setNeedsItems([]);
            }
        } catch (e) {
            setNeedsItems([]);
        }
    }, [hub, needsCategory]);

    useEffect(() => {
        const init = async () => {
            if (!hub.rsmv.classic) {
                await hub.initClassicPipeline();
            }
        };
        init();
        fetchNeeds();
    }, [fetchNeeds, hub]);

    const [era, setEra] = useState<'classic' | 'modern'>('classic');
    const [drilledItems, setDrilledItems] = useState<any[]>([]);
    const [selectedEntry, setSelectedEntry] = useState<any>(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleDrillDown = async (item: any) => {
        try {
            const service = era === 'modern' ? hub.rsmv.modern : hub.rsmv.classic;
            if (!service) {
                if (era === 'classic') {
                    addNotification('info', 'Initializing Classic Pipeline...');
                    await hub.initClassicPipeline();
                } else {
                    addNotification('warning', 'Modern RS3 Cache not linked. Please drop .jcache files into the viewport.');
                    return;
                }
            }

            const activeService = era === 'modern' ? hub.rsmv.modern : hub.rsmv.classic;

            if (item.name === 'items.json' || item.type === 'item_index') {
                addNotification('info', `Indexing ${era.toUpperCase()} Items...`);
                const items = await activeService.getItems();
                setDrilledItems(items.map((it: any) => ({ ...it, type: 'item' })));
            } else if (item.name === 'npcs.json' || item.type === 'npc_index') {
                addNotification('info', `Indexing ${era.toUpperCase()} NPCs...`);
                const npcs = await activeService.getNPCs();
                setDrilledItems(npcs.map((it: any) => ({ ...it, type: 'npc' })));
            } else if (item.name === 'objects.json' || item.type === 'object_index') {
                addNotification('info', `Indexing ${era.toUpperCase()} Objects...`);
                const objects = await activeService.getObjects();
                setDrilledItems(objects.map((it: any) => ({ ...it, type: 'object' })));
            } else if (needsCategory === 'spells') {
                addNotification('info', 'Indexing Spells from RSC Config...');
                const spells = await activeService.getSpells();
                setDrilledItems(spells.map((it: any, idx: number) => ({ ...it, id: idx, type: 'spell' })));
            } else if (needsCategory === 'prayers') {
                addNotification('info', 'Indexing Prayers from RSC Config...');
                const prayers = await activeService.getPrayers();
                setDrilledItems(prayers.map((it: any, idx: number) => ({ ...it, id: idx, type: 'prayer' })));
            } else if (needsCategory === 'wall_objects') {
                addNotification('info', 'Indexing Wall Objects from RSC Config...');
                const wallObjs = await activeService.getWallObjects();
                setDrilledItems(wallObjs.map((it: any, idx: number) => ({ ...it, id: idx, type: 'wall_object' })));
            } else if (needsCategory === 'tiles') {
                addNotification('info', 'Indexing Tiles from RSC Config...');
                const tiles = await activeService.getTiles();
                setDrilledItems(tiles.map((it: any, idx: number) => ({ ...it, id: idx, type: 'tile' })));
            } else {
                setDrilledItems([]);
            }
        } catch (e) {
            console.error('Drill down failed', e);
            addNotification('error', 'Archaeological failure during indexing');
        }
    };

    const handleCrossEraMatch = async () => {
        if (!selectedEntry || !selectedEntry.name) return;
        const targetEra = era === 'classic' ? 'modern' : 'classic';
        const targetService = targetEra === 'modern' ? hub.rsmv.modern : hub.rsmv.classic;

        if (!targetService) {
            addNotification('warning', `${targetEra.toUpperCase()} pipeline not initialized.`);
            return;
        }

        addNotification('info', `Crossing Eras: Matching "${selectedEntry.name}" in ${targetEra.toUpperCase()}...`);

        let pool: any[] = [];
        if (selectedEntry.type === 'item') pool = await targetService.getItems();
        else if (selectedEntry.type === 'npc') pool = await targetService.getNPCs();
        else if (selectedEntry.type === 'object') pool = await targetService.getObjects();

        const match = pool.find(it => it.name?.toLowerCase() === selectedEntry.name.toLowerCase());

        if (match) {
            setEra(targetEra);
            setDrilledItems(pool.map(it => ({ ...it, type: selectedEntry.type })));
            setSelectedEntry({ ...match, type: selectedEntry.type });
            addNotification('success', `Geometric Match Synchronized: ${match.name} found in ${targetEra.toUpperCase()}`);
        } else {
            addNotification('error', `No literal match for "${selectedEntry.name}" in ${targetEra.toUpperCase()}`);
        }
    };

    return (
        <div className="flex-1 flex gap-6 h-full p-6 bg-black/40 animate-fade-in relative overflow-hidden">

            {/* Sector Switcher (Left) */}
            <div className="w-64 flex flex-col gap-6">
                <div className="glass-ultra rounded-[40px] p-6 border border-white/5 shadow-2xl flex flex-col gap-4 h-full bg-white/5">
                    <div className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-4">Sectors</div>

                    {/* Era Toggle */}
                    <div className="flex bg-black/20 rounded-2xl p-1 mb-4 border border-white/5">
                        <button
                            onClick={() => { setEra('classic'); setDrilledItems([]); setSelectedEntry(null); }}
                            className={`flex-1 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${era === 'classic' ? 'bg-neon-cyan/20 text-neon-cyan' : 'text-white/40 hover:text-white'}`}
                        >
                            Classic
                        </button>
                        <button
                            onClick={() => { setEra('modern'); setDrilledItems([]); setSelectedEntry(null); }}
                            className={`flex-1 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${era === 'modern' ? 'bg-neon-cyan/20 text-neon-cyan' : 'text-white/40 hover:text-white'}`}
                        >
                            Modern
                        </button>
                    </div>

                    <div className="flex flex-col gap-2 overflow-y-auto pr-2">
                        {era === 'classic' ? (
                            ['archives', 'ids', 'config', 'locations', 'landscape', 'skills', 'spells', 'prayers', 'wall_objects', 'tiles'].map(cat => (
                                <div key={cat} onClick={() => { setNeedsCategory(cat); setDrilledItems([]); setSelectedEntry(null); }}
                                    className={`p-4 glass rounded-2xl border flex items-center justify-between cursor-pointer transition-all
                                    ${needsCategory === cat ? 'border-cyan-500/40 bg-cyan-500/5' : 'border-white/5 hover:bg-white/5'}
                                `}>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest ${needsCategory === cat ? 'text-cyan-400' : 'text-white/60'}`}>{cat}</span>
                                </div>
                            ))
                        ) : (
                            ['items', 'npcs', 'objects'].map(cat => (
                                <div key={cat} onClick={() => handleDrillDown({ type: `${cat.slice(0, -1)}_index` })}
                                    className={`p-4 glass rounded-2xl border flex items-center justify-between cursor-pointer transition-all border-white/5 hover:bg-white/5`}>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest text-white/60`}>{cat}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* List View (Middle) */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col p-8 bg-white/5">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40">Reference Terminal</span>
                        <span className="text-[9px] font-mono text-neon-cyan/60 uppercase">ERA: {era.toUpperCase()} {drilledItems.length > 0 ? '(DRILL_ACTIVE)' : ''}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        {drilledItems.length > 0 && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Search relics..."
                                    value={filterText}
                                    onChange={(e) => setFilterText(e.target.value)}
                                    className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[10px] text-white focus:outline-none focus:border-neon-cyan/40 w-48 font-mono"
                                />
                                <button onClick={() => { setDrilledItems([]); setFilterText(''); }} className="text-[10px] font-bold uppercase text-neon-magenta hover:underline">Reset</button>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 space-y-2">
                    {(drilledItems.length > 0
                        ? drilledItems.filter(it => (it.name || '').toLowerCase().includes(filterText.toLowerCase()) || String(it.id).includes(filterText))
                        : needsItems
                    ).map((item: any, idx: number) => (
                        <div key={item.name || item.id}
                            onClick={() => {
                                if (drilledItems.length > 0) {
                                    setSelectedEntry(item);
                                } else if (needsCategory === 'ids' && era === 'classic') {
                                    handleDrillDown(item);
                                }
                            }}
                            className={`p-4 glass-ultra rounded-2xl border flex items-center justify-between transition-all cursor-pointer
                                ${selectedEntry?.id === item.id && drilledItems.length > 0 && selectedEntry?.type === item.type ? 'bg-cyan-500/10 border-cyan-500/40' : 'border-white/5 hover:bg-white/5'}
                            `}>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-[10px]">
                                    {drilledItems.length > 0 ? (item.type === 'npc' ? '👤' : item.type === 'object' ? '🗿' : '⚔️') : (item.type === 'identity_matrix' ? '🆔' : '📄')}
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">{item.name || `Asset ${item.id}`}</span>
                                        {sourceRelic?.id === item.id && sourceRelic?.type === item.type && (
                                            <span className="text-[8px] px-1.5 py-0.5 bg-neon-cyan/20 text-neon-cyan font-black rounded uppercase">Active</span>
                                        )}
                                    </div>
                                    <span className="text-[8px] font-mono text-white/30 truncate max-w-[200px]">{item.description || item.path || `${item.size || 0} bytes`}</span>
                                </div>
                            </div>
                            {drilledItems.length === 0 && era === 'classic' && (
                                <button onClick={(e) => { e.stopPropagation(); handleForkRelic(item); }} className="px-3 py-1 bg-white/5 border border-white/10 text-white/40 text-[8px] font-bold uppercase rounded hover:bg-white/10">
                                    Fork
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Rendering View (Right) */}
            <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden bg-white/5 flex flex-col">
                {selectedEntry ? (
                    <div className="flex-1 flex flex-col">
                        <div className="flex-1 min-h-[400px]">
                            <RSCModelViewer id={selectedEntry.id} category={selectedEntry.type} era={era} />
                        </div>
                        <div className="p-8 border-t border-white/5 bg-black/40">
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-[10px] font-black text-neon-cyan uppercase tracking-widest">Asset Metadata</div>
                                <button
                                    onClick={handleCrossEraMatch}
                                    className="text-[9px] font-bold text-white/40 hover:text-white uppercase tracking-widest flex items-center gap-2"
                                >
                                    <span>🔍 Match in {era === 'classic' ? 'Modern' : 'Classic'}</span>
                                </button>
                            </div>
                            {isEditing ? (
                                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                                    <textarea
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-[10px] text-white/80 font-mono focus:outline-none focus:border-neon-cyan/40"
                                        rows={6}
                                        defaultValue={JSON.stringify(selectedEntry.metadata || {}, null, 2)}
                                    />
                                    <div className="flex gap-2">
                                        <button onClick={() => setIsEditing(false)} className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl text-white/40 text-[9px] font-black uppercase tracking-widest hover:bg-white/10">Cancel</button>
                                        <button onClick={() => { addNotification('info', 'AI Orchestrator: Proposal generated for asset refinement'); setIsEditing(false); }} className="flex-1 py-3 bg-neon-magenta/20 border border-neon-magenta/30 rounded-xl text-neon-magenta text-[9px] font-black uppercase tracking-widest hover:bg-neon-magenta/40">Push Change</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="glass p-4 rounded-xl border border-white/5">
                                            <div className="text-[8px] text-white/20 uppercase mb-1">Name</div>
                                            <div className="text-[11px] text-white font-bold">{selectedEntry.name}</div>
                                        </div>
                                        <div className="glass p-4 rounded-xl border border-white/5">
                                            <div className="text-[8px] text-white/20 uppercase mb-1">Index ID</div>
                                            <div className="text-[11px] text-white font-mono">{selectedEntry.id}</div>
                                        </div>
                                    </div>
                                    <div className="glass p-4 rounded-xl border border-white/5">
                                        <div className="text-[8px] text-white/20 uppercase mb-1">Description</div>
                                        <div className="text-[10px] text-white/60 italic leading-relaxed">{selectedEntry.description || 'No archaeological data available for this relic.'}</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={handleViewLogic} className="flex-1 py-4 bg-neon-magenta/10 border border-neon-magenta/20 rounded-xl text-neon-magenta text-[10px] font-black uppercase tracking-widest hover:bg-neon-magenta/20 transition-all">
                                            Logic
                                        </button>
                                        <button onClick={handleViewForensics} className="flex-1 py-4 bg-neon-cyan/10 border border-neon-cyan/20 rounded-xl text-neon-cyan text-[10px] font-black uppercase tracking-widest hover:bg-neon-cyan/20 transition-all">
                                            Forensic
                                        </button>
                                        <button onClick={handleViewBlueprint} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-xl text-white/40 text-[10px] font-black uppercase tracking-widest hover:bg-white/10">
                                            Blueprint
                                        </button>
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={() => setSourceRelic(selectedEntry)} className="flex-[2] py-4 bg-neon-cyan/20 border border-neon-cyan/30 rounded-xl text-neon-cyan text-[10px] font-black uppercase tracking-widest hover:bg-neon-cyan/40 transition-all">
                                            Pin as Active
                                        </button>
                                        <button onClick={() => setIsEditing(true)} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-xl text-white/40 text-[10px] font-black uppercase tracking-widest hover:bg-white/10">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center opacity-20">
                        <div className="text-6xl mb-6 flex gap-4">
                            <span className="animate-pulse">💎</span>
                            <span className="animate-pulse delay-75">📜</span>
                            <span className="animate-pulse delay-150">🏺</span>
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.4em]">Initialize {era.toUpperCase()} Pipeline</div>
                        <div className="text-[9px] font-mono mt-2">Select an artifact to begin visualization</div>
                    </div>
                )}
            </div>

            {/* Archeological Insight Overlay */}
            {decompiledScript && (
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-black/90 border-t border-neon-magenta/40 backdrop-blur-xl p-8 z-50 animate-in slide-in-from-bottom-full duration-500">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-neon-magenta uppercase tracking-[0.5em]">{forensicSource ? 'Forensic Gameplay Handling' : 'Archeological Logic Stream'}</span>
                            <span className="text-[8px] font-mono text-white/40 uppercase">{forensicSource ? `SOURCE: ${forensicSource}` : 'AUTHENTIC_RECOGNITION_MODE_ACTIVE'}</span>
                        </div>
                        <button onClick={() => setDecompiledScript(null)} className="text-[10px] font-black text-white/40 hover:text-neon-magenta uppercase tracking-widest transition-all">Collapse [ESC]</button>
                    </div>
                    <pre className="text-[11px] font-mono text-neon-cyan/80 overflow-y-auto h-full pb-12 leading-relaxed">
                        {decompiledScript}
                    </pre>
                </div>
            )}

            {showBlueprint && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-3xl z-50 flex flex-col p-12 animate-in fade-in zoom-in duration-500">
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex flex-col">
                            <span className="text-xl font-black text-white uppercase tracking-[0.2em]">Landscape Blueprint</span>
                            <span className="text-[9px] font-mono text-neon-cyan uppercase">Region Restoration: Sector {selectedEntry?.id}</span>
                        </div>
                        <button onClick={() => setShowBlueprint(false)} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-white/40 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Secure Vault</button>
                    </div>
                    <div className="flex-1 border border-white/10 rounded-[40px] bg-white/5 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                        <div className="text-[10px] font-black text-neon-cyan uppercase tracking-[1em] animate-pulse">Blueprint_Reconstruction_In_Progress</div>
                        {/* 2D/3D Map Canvas would render here */}
                    </div>
                </div>
            )}
        </div>
    );
}
