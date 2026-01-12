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

        { id: 'orchestrator', icon: '🎼', label: 'ORCH', color: '#9d00ff', description: 'Symphony Conductor' },
        { id: 'ghost', icon: '👻', label: 'GHOST', color: '#ffffff', description: 'Error Recovery & Local Fallback' },
        { id: 'file', icon: '📁', label: 'FILE', color: '#ffff00', description: 'Filesystem Operations' },
        { id: 'data', icon: '📊', label: 'DATA', color: '#00ffff', description: 'Knowledge & Vector Memory' },
        { id: 'entity', icon: '👾', label: 'ENTITY', color: '#ff8000', description: 'ECS Archetype Management' },
        { id: 'system', icon: '⚙️', label: 'SYS', color: '#888888', description: 'Ops & Token Economics' },
        { id: 'mesh', icon: '🔷', label: 'MESH', color: '#0080ff', description: 'Model Forge Pro' },
        { id: 'material', icon: '🎨', label: 'MAT', color: '#ff8000', description: 'PBR Shader Compiler' },
        { id: 'animation', icon: '🏃', label: 'ANIM', color: '#00ff80', description: 'Skeletal & Procedural Animation' },
        { id: 'image', icon: '🖼️', label: 'IMG', color: '#ff00ff', description: 'Texture & Sprite Generation' },
        { id: 'video', icon: '🎥', label: 'VIDEO', color: '#ff0080', description: 'Cinematic Video Suite' },
        { id: 'world', icon: '🌍', label: 'WORLD', color: '#00ff80', description: 'Procedural World Generation' },
        { id: 'landscape', icon: '🏔️', label: 'LAND', color: '#9d00ff', description: 'Terrain & Collision' },
        { id: 'physics', icon: '🍎', label: 'PHYS', color: '#ffff00', description: 'Rigid Body & Simulation' },
        { id: 'spatial', icon: '🎭', label: 'SPAT', color: '#ff0080', description: 'Scene Graph Optimization' },
        { id: 'audio', icon: '🎵', label: 'AUDIO', color: '#9d00ff', description: 'Audio Studio & Voiceover' },
        { id: 'game', icon: '🎮', label: 'LIVE', color: '#00ff00', description: 'Real-Time Entity Simulation' },
        { id: 'code', icon: '💻', label: 'CODE', color: '#00ffff', description: 'Code Generation & Refactoring' },
        { id: 'quantum', icon: '⚛️', label: 'QUANT', color: '#9d00ff', description: 'Variant Generation' },
        { id: 'relic', icon: '⛏️', label: 'RELIC', color: '#00ffff', description: 'Relic Matrix (Truth)' },
        { id: 'security', icon: '🛡️', label: 'SEC', color: '#ff0000', description: 'Audit & Shielding' },
        { id: 'idauditor', icon: '🔍', label: 'AUDIT', color: '#ff8000', description: 'Asset Governance' },
        { id: 'versioncontrol', icon: '🔄', label: 'GIT', color: '#0080ff', description: 'Git & Commit Synthesis' },
        { id: 'pipeline', icon: '🏗️', label: 'PIPE', color: '#00ffff', description: 'Build Automation' },
        { id: 'network', icon: '🌐', label: 'NET', color: '#0080ff', description: 'Edge Logic & Network Orchestration' },
        { id: 'reality', icon: '🔮', label: 'REAL', color: '#ffd700', description: 'State Checkpointing' },
        { id: 'divine', icon: '🤍', label: 'DIVINE', color: '#ffffff', description: 'World Logic & Narrative' },
    ], []);

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            {/* Background is now globally handled by ParticleSystem */}

            <div className="relative w-[900px] h-[900px] pointer-events-none z-50">
                {/* Center Core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onSelectWorkspace('divine');
                        }}
                        className="relative flex items-center justify-center group cursor-pointer focus:outline-none"
                        aria-label="Access Divine Core"
                    >
                        {/* Rotating POG Bubble */}
                        <div className="w-64 h-64 rounded-full glass-divine flex items-center justify-center relative shadow-[0_0_150px_rgba(255,215,0,0.15)] border-white/20 group-hover:border-neon-gold/50 animate-logo-flip-continuous transition-all duration-500 pointer-events-auto">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-gold/25 to-neon-purple/25 animate-pulse group-hover:scale-110 transition-transform duration-1000"></div>
                            <div className="text-[10rem] font-black glitch-text-enhanced neon-glow-ultra transform -rotate-12" data-text="POG" style={{ color: 'var(--neon-gold)', textShadow: 'rgba(255, 215, 0, 0.4) 0px 0px 60px' }}>POG</div>
                        </div>

                        {/* AI Suffix (Suspended next to it) */}
                        <div className="absolute left-full ml-8 flex flex-col whitespace-nowrap group-hover:translate-x-4 transition-transform duration-500 pointer-events-none">
                            <div className="text-8xl font-black italic tracking-tighter text-white/90 filter drop-shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                                <span className="text-neon-cyan">AI</span>
                            </div>
                            <div className="text-[12px] font-black uppercase tracking-[1em] text-white/20 mt-2 ml-1 group-hover:text-neon-gold transition-colors">v6.5 CORE</div>
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
