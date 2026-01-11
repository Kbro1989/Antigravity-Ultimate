
import React, { useState } from 'react';
import { RSMVModelEntry } from '../../../types/rsmv';

interface AssetAnnotatorProps {
    asset: RSMVModelEntry;
    onSave: (updatedAsset: RSMVModelEntry) => void;
    onCancel: () => void;
}

export const AssetAnnotator: React.FC<AssetAnnotatorProps> = ({ asset, onSave, onCancel }) => {
    const [name, setName] = useState(asset.name || '');
    const [category, setCategory] = useState(asset.category || 'items');
    const [tags, setTags] = useState(asset.tags?.join(', ') || '');
    const [examine, setExamine] = useState(asset.examine || '');
    const [color, setColor] = useState('#438ab5'); // Default POG Blue
    const [intensity, setIntensity] = useState(100);

    const handleSave = () => {
        onSave({
            ...asset,
            name,
            category: category as any,
            tags: tags.split(',').map(t => t.trim()).filter(Boolean),
            examine
        });
    };

    return (
        <div className="flex flex-col h-full glass-ultra border-l border-white/5 animate-in slide-in-from-right duration-500 w-80">
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="text-[10px] font-black text-neon-cyan tracking-[0.4em] uppercase">Asset Annotator</div>
                        <span className={`text-[7px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest ${asset.gameSource === 'classic'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)] animate-pulse'
                            : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            }`}>
                            {asset.gameSource === 'classic' ? 'TRUTH_ANCHOR' : 'Modern Era'}
                        </span>
                    </div>
                    <div className="text-[8px] text-white/30 uppercase mt-1">ID: {asset.id} • SOURCE: {asset.gameSource.toUpperCase()}</div>
                </div>
                <button onClick={onCancel} className="p-2 hover:bg-white/5 rounded-full transition-all text-white/40 hover:text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Visual Settings (Modify colors) */}
                <div className="space-y-4">
                    <div className="text-[9px] font-black text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">Visual Modification</div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[8px] font-black text-white/60 uppercase">Chroma Filter</span>
                            <div className="w-12 h-6 rounded-lg pointer-events-none border border-white/10" style={{ backgroundColor: color }}></div>
                        </div>
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="w-full h-10 rounded-xl bg-transparent border-none cursor-pointer p-0"
                        />
                        <div className="space-y-2 text-[8px] font-black text-white/40 uppercase">
                            <div className="flex justify-between">
                                <span>Luminance Intensity</span>
                                <span className="text-neon-cyan">{intensity}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="200"
                                value={intensity}
                                onChange={(e) => setIntensity(parseInt(e.target.value))}
                                className="w-full h-1 bg-white/5 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
                            />
                        </div>
                    </div>
                </div>

                {/* Metadata Settings */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between pb-2">
                        <div className="text-[9px] font-black text-white/40 uppercase tracking-widest">Identification</div>
                        {asset.gameSource === 'classic' && (
                            <div className="text-[7px] font-black text-amber-500 uppercase tracking-tighter bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/20">Reality Source</div>
                        )}
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[8px] font-black text-white/60 uppercase">Asset Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[10px] text-white focus:outline-none focus:border-neon-cyan/50 transition-all font-bold"
                                placeholder="New Entity Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[8px] font-black text-white/60 uppercase">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[10px] text-white focus:outline-none focus:border-neon-cyan/50 transition-all font-bold appearance-none cursor-pointer"
                            >
                                <option value="items">Items</option>
                                <option value="npcs">NPCs</option>
                                <option value="objects">Objects</option>
                                <option value="models">Models</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[8px] font-black text-white/60 uppercase">Semantic Tags</label>
                            <input
                                type="text"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[10px] text-white focus:outline-none focus:border-neon-cyan/50 transition-all font-bold"
                                placeholder="e.g. boss, rare, legacy"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[8px] font-black text-white/60 uppercase">Examine Record</label>
                            <textarea
                                value={examine}
                                onChange={(e) => setExamine(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-[10px] text-white focus:outline-none focus:border-neon-cyan/50 transition-all font-bold h-24 resize-none"
                                placeholder="Ancient text describing this artifact..."
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/5 space-y-3">
                <button
                    onClick={handleSave}
                    className="w-full py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-neon-cyan transition-all flex items-center justify-center gap-2 group shadow-xl hover:shadow-neon-cyan/20"
                >
                    <svg className="w-3 h-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Commit Metadata
                </button>
                <div className="text-[7px] text-white/20 text-center uppercase tracking-widest">
                    SYNCING WITH GLOBAL_MEMORY_VAULT
                </div>
            </div>
        </div>
    );
};
