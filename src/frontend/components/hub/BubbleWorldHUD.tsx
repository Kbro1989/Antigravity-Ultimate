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
    const [corePulse, setCorePulse] = useState(1);

    // Helper to determine if a specific limb is online
    const isLimbOnline = (limbId: string): boolean => {
        const status = limbHealth[limbId];
        return status?.status === 'online';
    };

    const workspaces = useMemo(() => [
        { id: 'orchestrator', icon: '🎼', label: 'ORCH', color: '#00ffff', description: 'Sovereign Flow Conductor' },
        { id: 'ghost', icon: '👻', label: 'GHOST', color: '#ffffff', description: 'Neural Error Recovery' },
        { id: 'file', icon: '📁', label: 'JAG', color: '#00ffff', description: 'Archive Operations (.jag)' },
        { id: 'data', icon: '📊', label: 'RELC', color: '#00ffff', description: 'Relic Matrix & Innovation' },
        { id: 'entity', icon: '👾', label: 'ENTT', color: '#00ffff', description: 'RSC Entity Archetypes' },
        { id: 'behavior', icon: '🧠', label: 'BEHV', color: '#00ffff', description: 'Social & AI Intelligence' },
        { id: 'system', icon: '⚙️', label: 'SYS', color: '#00ffff', description: 'Cloud Worker Runtime' },
        { id: 'mesh', icon: '🔷', label: 'MESH', color: '#00ffff', description: 'RT2/RT5/RT7 Model Forge' },
        { id: 'material', icon: '🎨', label: 'SHDR', color: '#00ffff', description: 'RSC Shader Compiler' },
        { id: 'animation', icon: '🏃', label: 'ANIM', color: '#00ffff', description: 'Skeletal Sequence Logic' },
        { id: 'image', icon: '🖼️', label: 'SPRT', color: '#00ffff', description: 'Sprite & Texture Lab' },
        { id: 'video', icon: '🎥', label: 'CUTS', color: '#00ffff', description: 'Cinematic Sequence Suite' },
        { id: 'world', icon: '🌍', label: 'WRLD', color: '#00ffff', description: 'World Landscape Genesis' },
        { id: 'landscape', icon: '🏔️', label: 'MAPS', color: '#00ffff', description: 'Sector & Path Mapping' },
        { id: 'physics', icon: '🍎', label: 'PHYS', color: '#00ffff', description: 'Collision & Navmesh' },
        { id: 'spatial', icon: '🎭', label: 'SPAT', color: '#00ffff', description: 'Client Scene Graph' },
        { id: 'audio', icon: '🎵', label: 'SONG', color: '#00ffff', description: 'MIDI & SFX Synthesis' },
        { id: 'game', icon: '🎮', label: 'LIVE', color: '#00ffff', description: 'Sovereign Live Session' },
        { id: 'code', icon: '💻', label: 'LOGC', color: '#00ffff', description: 'RSC Script & Logic Engine' },
        { id: 'quantum', icon: '⚛️', label: 'POG', color: '#00ffff', description: 'Variant Innovation Matrix' },
        { id: 'relic', icon: '⛏️', label: 'ARCH', color: '#00ffff', description: 'Archival Relic Extraction' },
        { id: 'security', icon: '🛡️', label: 'SHLD', color: '#00ffff', description: 'Sovereign Audit Shield' },
        { id: 'idauditor', icon: '🔍', label: 'IDEX', color: '#00ffff', description: 'Item/NPC ID Indexer' },
        { id: 'versioncontrol', icon: '🔄', label: 'SYNC', color: '#00ffff', description: 'Cloud State Persistance' },
        { id: 'pipeline', icon: '🏗️', label: 'PIPE', color: '#00ffff', description: 'Global Reconstruction' },
        { id: 'network', icon: '🌐', label: 'EDGE', color: '#00ffff', description: 'Cloudflare Network Mesh' },
        { id: 'reality', icon: '🔮', label: 'REAL', color: '#00ffff', description: 'State Checkpointing' },
        { id: 'divine', icon: '🤍', label: 'CORE', color: '#00ffff', description: 'Sovereign Logic Center' },
        { id: 'vision', icon: '👁️', label: 'VISN', color: '#00ffff', description: 'Visual Recognition & OCR' },
        { id: 'proxy', icon: '🌉', label: 'PRXY', color: '#00ffff', description: 'External Service Bridge' },
        { id: 'signature', icon: '🖋️', label: 'SIGN', color: '#00ffff', description: 'Cryptographic Provenance' },
        { id: 'metabolism', icon: '🔋', label: 'COST', color: '#00ffff', description: 'Metabolism & Resource Guard' },
        { id: 'instant' as WorkspaceMode, icon: '⚡', label: 'BUFF', color: '#00ffff', description: 'InstantDB Fast-Path' },
    ], []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCorePulse(p => (p === 1 ? 1.05 : 1));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1000]">
            <div className="relative w-[1100px] h-[1100px] pointer-events-none z-[1001]">

                {/* SVG Neural Mesh Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 1100 1100">
                    <defs>
                        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#00ffff" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#00ffff" stopOpacity="0.8" />
                        </linearGradient>
                    </defs>
                    {workspaces.map((workspace, index) => {
                        const angle = (index / workspaces.length) * Math.PI * 2 - Math.PI / 2;
                        const radius = 420;
                        const x = 550 + Math.cos(angle) * radius;
                        const y = 550 + Math.sin(angle) * radius;
                        const isNodeActive = activeWorkspace === workspace.id;

                        return (
                            <path
                                key={`path-${workspace.id}`}
                                d={`M 550 550 L ${x} ${y}`}
                                className={`neural-connection ${isNodeActive ? 'stroke-neon-cyan opacity-100' : 'stroke-neon-cyan/20'}`}
                                style={{
                                    strokeWidth: isNodeActive ? 4 : 1,
                                    strokeDasharray: '20, 10',
                                    animation: 'neural-flow 10s linear infinite'
                                }}
                            />
                        );
                    })}
                </svg>

                {/* Center Core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1002]">
                    <div className="relative flex items-center justify-center group pointer-events-auto">
                        {/* POG Central Orb */}
                        <div
                            className="w-80 h-80 rounded-full glass-divine flex items-center justify-center relative shadow-[0_0_200px_rgba(0,255,255,0.2)] border-white/20 transition-all duration-1000 overflow-hidden"
                            style={{ transform: `scale(${corePulse})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-purple/20 animate-spin-slow"></div>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <span className="text-8xl font-black text-white tracking-widest glitch-text-enhanced" data-text="POG">POG</span>
                                <span className="text-[12px] font-black text-neon-cyan tracking-[0.6em] mt-2 opacity-60">v1.0 SOVEREIGN</span>
                            </div>

                            {/* Inner Scanning Rings */}
                            <div className="absolute inset-4 border border-white/5 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-8 border border-white/5 rounded-full animate-spin-slow-reverse"></div>
                        </div>

                        {/* Floating Status Brackets */}
                        <div className="absolute -inset-10 border-l border-t border-neon-cyan/20 w-20 h-20 rounded-tl-3xl"></div>
                        <div className="absolute -inset-10 border-r border-b border-neon-cyan/20 w-20 h-20 top-auto left-auto rounded-br-3xl"></div>
                    </div>
                </div>

                {/* Orbital Bubbles */}
                {workspaces.map((workspace, index) => {
                    const angle = (index / workspaces.length) * Math.PI * 2 - Math.PI / 2;
                    const radius = 420;
                    const x = 550 + Math.cos(angle) * radius;
                    const y = 550 + Math.sin(angle) * radius;

                    return (
                        <button
                            key={workspace.id}
                            className={`absolute top-[550px] left-[550px] -translate-x-1/2 -translate-y-1/2 group/bubble bubble-node cursor-pointer transition-all duration-700 pointer-events-auto
                            ${activeWorkspace === workspace.id ? 'scale-150 z-[2000]' : 'hover:scale-125 z-[1000] hover:z-[5000]'}`}
                            style={{
                                transform: `translate(calc(-50% + ${Math.cos(angle) * radius}px), calc(-50% + ${Math.sin(angle) * radius}px))`,
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelectWorkspace(workspace.id as WorkspaceMode);
                            }}
                            aria-label={`Open ${workspace.label} workspace`}
                        >
                            <div
                                className={`w-14 h-14 rounded-full glass-divine border border-white/10 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.6)]
                                group-hover/bubble:border-neon-cyan/60 pointer-events-auto`}
                            >
                                <div className="text-xl filter drop-shadow-[0_0_10px_#00ffff]">
                                    {workspace.icon}
                                </div>
                                <div className="text-[6px] font-black mt-1 uppercase tracking-widest text-white/40 group-hover/bubble:text-neon-cyan">{workspace.label}</div>

                                {/* Active Data Flow Indicator */}
                                {isLimbOnline(workspace.id) && (
                                    <div className="absolute -inset-1 border border-neon-cyan/30 rounded-full animate-ping"></div>
                                )}
                            </div>

                            {/* HUD Connector Line (Mini) */}
                            <div className="absolute top-1/2 left-1/2 w-4 h-[1px] bg-neon-cyan/20 -translate-x-1/2 -translate-y-1/2 group-hover/bubble:w-20 transition-all"></div>

                            {/* Tooltip */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-4 py-2 glass-ultra rounded-xl opacity-0 group-hover/bubble:opacity-100 transition-all duration-300 pointer-events-none border-white/10 shadow-2xl whitespace-nowrap z-[1000]">
                                <div className="text-[8px] font-black text-white tracking-[0.2em]">{workspace.description}</div>
                            </div>
                        </button>
                    );
                })}

                {/* Outer Orbit Decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] border border-white/5 rounded-full animate-spin-slow-reverse opacity-20 border-dashed"></div>
            </div>
        </div>
    );
}
