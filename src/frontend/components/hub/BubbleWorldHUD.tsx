import React, { useMemo, useEffect, useState } from 'react';
import { WorkspaceMode } from '../../../services/core/ModeManager';
import { useServiceHub } from '../../hooks';

interface Workspace {
    id: WorkspaceMode;
    icon: string;
    label: string;
    color: string;
    description: string;
}

interface BubbleWorldHUDProps {
    onSelectWorkspace: (id: WorkspaceMode) => void;
    activeWorkspace: WorkspaceMode | null;
}

export function BubbleWorldHUD({ onSelectWorkspace, activeWorkspace }: BubbleWorldHUDProps) {
    // Live health data from the Service Mesh via useServiceHub
    const { limbHealth } = useServiceHub();

    // Helper to determine if a specific limb is online
    const isLimbOnline = (limbId: string): boolean => {
        const status = limbHealth[limbId];
        return status?.status === 'online';
    };

    const workspaces = useMemo(() => [

        { id: 'orchestrator', icon: '🎼', label: 'ORCH', color: '#9d00ff', description: 'Sovereign Flow Conductor' },
        { id: 'ghost', icon: '👻', label: 'GHOST', color: '#ffffff', description: 'Neural Error Recovery' },
        { id: 'file', icon: '📁', label: 'JAG', color: '#ffff00', description: 'Archive Operations (.jag)' },
        { id: 'data', icon: '📊', label: 'RELC', color: '#00ffff', description: 'Relic Matrix & Innovation' },
        { id: 'entity', icon: '👾', label: 'ENTT', color: '#ff8000', description: 'RSC Entity Archetypes' },
        { id: 'system', icon: '⚙️', label: 'SYS', color: '#888888', description: 'Cloud Worker Runtime' },
        { id: 'mesh', icon: '🔷', label: 'MESH', color: '#0080ff', description: 'RT2/RT5/RT7 Model Forge' },
        { id: 'material', icon: '🎨', label: 'SHDR', color: '#ff8000', description: 'RSC Shader Compiler' },
        { id: 'animation', icon: '🏃', label: 'ANIM', color: '#00ff80', description: 'Skeletal Sequence Logic' },
        { id: 'image', icon: '🖼️', label: 'SPRT', color: '#ff00ff', description: 'Sprite & Texture Lab' },
        { id: 'video', icon: '🎥', label: 'CUTS', color: '#ff0080', description: 'Cinematic Sequence Suite' },
        { id: 'world', icon: '🌍', label: 'WRLD', color: '#00ff80', description: 'World Landscape Genesis' },
        { id: 'landscape', icon: '🏔️', label: 'MAPS', color: '#9d00ff', description: 'Sector & Path Mapping' },
        { id: 'physics', icon: '🍎', label: 'PHYS', color: '#ffff00', description: 'Collision & Navmesh' },
        { id: 'spatial', icon: '🎭', label: 'SPAT', color: '#ff0080', description: 'Client Scene Graph' },
        { id: 'audio', icon: '🎵', label: 'SONG', color: '#9d00ff', description: 'MIDI & SFX Synthesis' },
        { id: 'game', icon: '🎮', label: 'LIVE', color: '#00ff00', description: 'Sovereign Live Session' },
        { id: 'code', icon: '💻', label: 'LOGC', color: '#00ffff', description: 'RSC Script & Logic Engine' },
        { id: 'quantum', icon: '⚛️', label: 'OPAL', color: '#9d00ff', description: 'Variant Innovation Matrix' },
        { id: 'relic', icon: '⛏️', label: 'ARCH', color: '#00ffff', description: 'Archival Relic Extraction' },
        { id: 'security', icon: '🛡️', label: 'SHLD', color: '#ff0000', description: 'Sovereign Audit Shield' },
        { id: 'idauditor', icon: '🔍', label: 'IDEX', color: '#ff8000', description: 'Item/NPC ID Indexer' },
        { id: 'versioncontrol', icon: '🔄', label: 'SYNC', color: '#0080ff', description: 'Cloud State Persistance' },
        { id: 'pipeline', icon: '🏗️', label: 'PIPE', color: '#00ffff', description: 'Global Reconstruction' },
        { id: 'network', icon: '🌐', label: 'EDGE', color: '#0080ff', description: 'Cloudflare Network Mesh' },
        { id: 'reality', icon: '🔮', label: 'REAL', color: '#ffd700', description: 'State Checkpointing' },
        { id: 'divine', icon: '🤍', label: 'CORE', color: '#ffffff', description: 'Sovereign Logic Center' },
        { id: 'instant' as WorkspaceMode, icon: '⚡', label: 'BUFF', color: '#ff00ff', description: 'InstantDB Fast-Path' },
    ], []);

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1000]">
            {/* Background is now globally handled by ParticleSystem */}

            <div className="relative w-[900px] h-[900px] pointer-events-none z-[1001]">
                {/* Center Core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1002]">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            // Spinner click no longer navigates to divine
                        }}
                        className="relative flex items-center justify-center group cursor-pointer focus:outline-none"
                        aria-label="Access Divine Core"
                    >
                        {/* Rotating POG Bubble */}
                        <div className="w-64 h-64 rounded-full glass-divine flex items-center justify-center relative shadow-[0_0_150px_rgba(255,215,0,0.15)] border-white/20 group-hover:border-neon-gold/50 animate-logo-flip-continuous transition-all duration-500 pointer-events-auto">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-gold/25 to-neon-purple/25 animate-pulse group-hover:scale-110 transition-transform duration-1000"></div>
                            <div className="text-[10rem] font-black glitch-text-enhanced neon-glow-ultra transform -rotate-12" data-text="RSC" style={{ color: 'var(--neon-gold)', textShadow: 'rgba(255, 215, 0, 0.4) 0px 0px 60px' }}>RSC</div>
                        </div>

                        {/* Sovereign Suffix */}
                        <div className="absolute left-full ml-8 flex flex-col whitespace-nowrap group-hover:translate-x-4 transition-transform duration-500 pointer-events-none">
                            <div className="text-8xl font-black italic tracking-tighter text-white/90 filter drop-shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                                <span className="text-neon-cyan">AI</span>
                            </div>
                            <div className="text-[12px] font-black uppercase tracking-[1em] text-white/20 mt-2 ml-1 group-hover:text-neon-gold transition-colors">v1.0 SOVEREIGN</div>
                        </div>
                    </button>
                </div>

                {/* Orbital Bubbles (27 Limbs) */}
                {workspaces.map((workspace, index) => {
                    const angle = (index / workspaces.length) * Math.PI * 2 - Math.PI / 2;
                    const radius = 380;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <button
                            key={workspace.id}
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group/bubble bubble-node cursor-pointer transition-all duration-700 pointer-events-auto
                            ${activeWorkspace === workspace.id ? 'scale-150 z-[2000]' : 'hover:scale-125 z-[1000] hover:z-[5000]'}`}
                            style={{
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                animationDelay: `${index * 0.05}s`
                            }}
                            onClick={(e) => {
                                console.log('[BubbleWorldHUD] Clicked workspace:', workspace.id);
                                e.stopPropagation();
                                onSelectWorkspace(workspace.id as WorkspaceMode);
                            }}
                            aria-label={`Open ${workspace.label} workspace`}
                        >
                            <div
                                className={`w-20 h-20 rounded-full glass-divine border border-white/5 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.4)]
group-hover/bubble:border-white/40 animate-shimmer pointer-events-auto`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="text-3xl filter drop-shadow-[0_0_15px_var(--bubble-color)]" style={{ '--bubble-color': workspace.color } as any}>
                                    {workspace.icon}
                                </div>
                                <div className="text-[8px] font-black mt-2 uppercase tracking-[0.2em] opacity-60 group-hover/bubble:opacity-100 transition-opacity" style={{ color: workspace.color }}>{workspace.label}</div>

                                {/* Shine Effect */}
                                <div className="absolute -inset-full bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 group-hover/bubble:translate-x-full transition-transform duration-1000"></div>

                                {/* Live Indicator Hook */}
                                {isLimbOnline(workspace.id) && (
                                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_cyan] animate-ping"></div>
                                )}
                            </div>

                            {/* Enhanced Tooltip */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 px-6 py-3 glass-divine rounded-2xl opacity-0 group-hover/bubble:opacity-100 transition-all duration-500 transform translate-y-4 group-hover/bubble:translate-y-0 pointer-events-none border-white/10 shadow-2xl whitespace-nowrap z-[1000]">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: workspace.color }}></div>
                                    <div className="text-[10px] font-black text-white uppercase tracking-[0.4em]">{workspace.label} JOB</div>
                                </div>
                                <div className="text-[8px] font-mono text-white/30 mt-2 uppercase tracking-[0.2em] border-t border-white/5 pt-2 space-y-1">
                                    <div className="flex justify-between items-center gap-8">
                                        <span className="text-neon-cyan/60">NODE:</span>
                                        <span className="text-white/80">/limbs/{workspace.id}</span>
                                    </div>
                                    <div className="text-white/40 italic">
                                        {workspace.description}
                                    </div>
                                </div>
                            </div>
                        </button>
                    );
                })}


                {/* Orbit Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-5">
                    <div className="absolute border border-white/10 rounded-full animate-spin-slow w-[750px] h-[750px] -ml-[375px] -mt-[375px]"></div>
                    <div className="absolute border border-white/20 rounded-full animate-spin-slow-reverse w-[850px] h-[850px] -ml-[425px] -mt-[425px] border-dashed"></div>
                </div>

                {/* Outer Orbit Line connection point */}
                <div className="absolute top-1/2 right-full w-20 h-[1px] bg-gradient-to-r from-transparent to-neon-gold/20 -translate-y-1/2 pointer-events-none"></div>
            </div>
        </div>
    );
}
