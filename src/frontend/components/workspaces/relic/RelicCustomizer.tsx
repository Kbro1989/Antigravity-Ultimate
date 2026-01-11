import React, { useState } from 'react';
import { Sliders, Camera, Save, RefreshCcw } from 'lucide-react';

interface RelicCustomizerProps {
    relicId: string;
    onUpdate: (params: any) => void;
    onSnapshot: () => void;
}

export const RelicCustomizer: React.FC<RelicCustomizerProps> = ({ relicId, onUpdate, onSnapshot }) => {
    const [shifts, setShifts] = useState<{ id: number, h: number, s: number, l: number }[]>([
        { id: 0, h: 0, s: 0, l: 0 }
    ]);

    const handleHslChange = (index: number, channel: 'h' | 's' | 'l', value: number) => {
        const newShifts = [...shifts];
        newShifts[index][channel] = value;
        setShifts(newShifts);
        onUpdate({ shifts: newShifts });
    };

    return (
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 font-mono text-xs">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                    <Sliders size={14} className="text-cyan-400" />
                    <span className="uppercase tracking-widest text-white/80 font-bold">Relic Customizer</span>
                </div>
                <div className="flex gap-2">
                    <button onClick={onSnapshot} title="Capture Snapshot" className="p-1 hover:bg-white/10 rounded transition-colors text-white/60">
                        <Camera size={14} />
                    </button>
                    <button title="Reset Shifts" className="p-1 hover:bg-white/10 rounded transition-colors text-white/60">
                        <RefreshCcw size={14} />
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                {/* HSL Shift Controls */}
                <div>
                    <div className="text-white/40 uppercase mb-3 flex items-center justify-between">
                        <span>HSL Color Shifts</span>
                        <span className="text-[10px] text-cyan-500/50">Active</span>
                    </div>
                    {shifts.map((shift, i) => (
                        <div key={i} className="space-y-3 bg-white/5 p-3 rounded border border-white/5">
                            <div className="flex items-center justify-between text-white/60 mb-2">
                                <span>Layer #{shift.id}</span>
                                <span className="text-white/30 italic">PBR Material Alpha</span>
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between text-[10px] text-white/40">
                                    <span>HUE</span>
                                    <span>{shift.h}</span>
                                </div>
                                <input
                                    type="range" min="0" max="255" value={shift.h}
                                    onChange={(e) => handleHslChange(i, 'h', parseInt(e.target.value))}
                                    className="w-full accent-cyan-500 appearance-none bg-white/10 h-1 rounded"
                                />
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between text-[10px] text-white/40">
                                    <span>SATURATION</span>
                                    <span>{shift.s}</span>
                                </div>
                                <input
                                    type="range" min="0" max="255" value={shift.s}
                                    onChange={(e) => handleHslChange(i, 's', parseInt(e.target.value))}
                                    className="w-full accent-pink-500 appearance-none bg-white/10 h-1 rounded"
                                />
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between text-[10px] text-white/40">
                                    <span>LUMINANCE</span>
                                    <span>{shift.l}</span>
                                </div>
                                <input
                                    type="range" min="0" max="255" value={shift.l}
                                    onChange={(e) => handleHslChange(i, 'l', parseInt(e.target.value))}
                                    className="w-full accent-yellow-500 appearance-none bg-white/10 h-1 rounded"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Material Replacements Mimic */}
                <div>
                    <div className="text-white/40 uppercase mb-3 flex items-center justify-between">
                        <span>Material Swapper</span>
                        <span className="text-[10px] text-green-500/50">PRO</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/5 p-2 rounded cursor-pointer hover:bg-white/10 border border-white/5 flex flex-col gap-1 items-center">
                            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-800" />
                            <span className="text-[10px] text-white/60">Obsidian</span>
                        </div>
                        <div className="bg-white/5 p-2 rounded cursor-pointer hover:bg-white/10 border border-white/5 flex flex-col gap-1 items-center">
                            <div className="w-8 h-8 rounded bg-gradient-to-br from-yellow-300 to-orange-600" />
                            <span className="text-[10px] text-white/60">Gilded</span>
                        </div>
                    </div>
                </div>

                <button className="w-full bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-400 py-2 rounded border border-cyan-500/30 flex items-center justify-center gap-2 transition-all group">
                    <Save size={14} className="group-hover:scale-110 transition-transform" />
                    <span className="uppercase tracking-widest font-bold">Commit to Innovation Vault</span>
                </button>
            </div>
        </div>
    );
};
