import React, { useMemo } from 'react';
import { WorkspaceMode } from '../../../services/core/ModeManager';

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
    const workspaces: Workspace[] = useMemo(() => [
        { id: 'code', icon: '💻', label: 'CODE', color: '#00ffff', description: 'Logic Matrix' },
        { id: 'vfx', icon: '🎨', label: 'FX', color: '#ff00ff', description: 'Particle Lab' },
        { id: 'audio', icon: '🎵', label: 'AUDIO', color: '#9d00ff', description: 'Sonic Lab' },
        { id: 'pipeline', icon: '🔄', label: 'FLOW', color: '#0080ff', description: 'Pipeline' },
        { id: 'spatial', icon: '🎭', label: 'VIEWER', color: '#ff0080', description: 'Asset Visualizer' },
        { id: 'world', icon: '🌍', label: 'WORLD', color: '#00ff80', description: 'Genesis' },
        { id: 'entity', icon: '👾', label: 'ENTITY', color: '#ff8000', description: 'NPC/Actor' },
        { id: 'physics', icon: '🍎', label: 'PHYSICS', color: '#ffff00', description: 'Continuum' },
        { id: 'animation', icon: '🏃', label: 'RIG', color: '#00ff80', description: 'Kinetics Engine' },
        { id: 'network', icon: '🌐', label: 'NET', color: '#0080ff', description: 'Bridge' },
        { id: 'security', icon: '🛡️', label: 'SEC', color: '#ff0000', description: 'Neural Moat' },
        { id: 'data', icon: '📊', label: 'DATA', color: '#00ffff', description: 'Cache' },
        { id: 'video', icon: '🎥', label: 'CINEMA', color: '#ff0080', description: 'Cutscene Director' },
        { id: 'image', icon: '🖼️', label: 'TEXTURE', color: '#ff00ff', description: 'Sprite Studio' },
        { id: 'mesh', icon: '🔷', label: 'EDITOR', color: '#0080ff', description: '3D Sculptor' },
        { id: 'material', icon: '🎨', label: 'MAT', color: '#ff8000', description: 'Shaders' },
        { id: 'orchestrator', icon: '🎼', label: 'ORCH', color: '#9d00ff', description: 'Symphony' },
        { id: 'system', icon: '⚙️', label: 'SYS', color: '#888888', description: 'Neural Core' },
        { id: 'file', icon: '📁', label: 'FILE', color: '#ffff00', description: 'Data Lake' },
        { id: 'game', icon: '🎮', label: 'PLAY', color: '#00ff00', description: 'Live Testing' },
        { id: 'ghost', icon: '👻', label: 'GHOST', color: '#ffffff', description: 'Wraith' },
        { id: 'reality', icon: '🔮', label: 'REALITY', color: '#ffd700', description: 'Anchor' },
        { id: 'quantum', icon: '⚛️', label: 'QUANTUM', color: '#9d00ff', description: 'Entangle' },
        { id: 'divine', icon: '🤍', label: 'DIVINE', color: '#ffffff', description: 'Cerebro' },
        { id: 'relic', icon: '⛏️', label: 'RELIC', color: '#00ffff', description: 'Ancient' },
    ], []);

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            {/* Background Layers */}
            <div className="stars-background" />
            <div className="fractured-overlay" />
            <div className="constellations-layer" />

            <div className="relative w-[900px] h-[900px] pointer-events-auto z-50">
                {/* Center Core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative flex items-center justify-center">
                        {/* Rotating POG Bubble */}
                        <div className="w-64 h-64 rounded-full glass-divine flex items-center justify-center relative shadow-[0_0_150px_rgba(255,215,0,0.15)] border-white/20 group animate-logo-flip-continuous">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-gold/25 to-neon-purple/25 animate-pulse group-hover:scale-110 transition-transform duration-1000"></div>
                            <div className="text-[10rem] font-black glitch-text-enhanced neon-glow-ultra" data-text="POG" style={{ color: 'var(--neon-gold)', textShadow: '0 0 60px rgba(255,215,0,0.4)' }}>POG</div>
                        </div>

                        {/* AI Suffix (Suspended next to it) */}
                        <div className="absolute left-full ml-8 flex flex-col whitespace-nowrap">
                            <div className="text-8xl font-black italic tracking-tighter text-white/90 filter drop-shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                                <span className="text-neon-cyan">AI</span>
                            </div>
                            <div className="text-[12px] font-black uppercase tracking-[1em] text-white/20 mt-2 ml-1">v6.5 CORE</div>
                        </div>
                    </div>
                </div>

                {/* Orbital Bubbles (25 Limbs) */}
                {workspaces.map((workspace, index) => {
                    const angle = (index / workspaces.length) * Math.PI * 2 - Math.PI / 2;
                    const radius = 380;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <div
                            key={workspace.id}
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group/bubble cursor-pointer z-[100] transition-all duration-700
                                ${activeWorkspace === workspace.id ? 'scale-150' : 'hover:scale-125'}`}
                            style={{
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                animationDelay: `${index * 0.05}s`,
                                zIndex: activeWorkspace === workspace.id ? 200 : 100
                            }}
                            onClick={() => onSelectWorkspace(workspace.id)}
                        >
                            <div className={`w-20 h-20 rounded-[28px] glass-divine border border-white/10 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.8)]
                                ${activeWorkspace === workspace.id ? 'border-neon-cyan shadow-[0_0_40px_var(--neon-cyan)]' : 'group-hover/bubble:border-white/40'}`}
                            >
                                <div className="text-3xl filter drop-shadow-[0_0_15px_var(--bubble-color)]" style={{ '--bubble-color': workspace.color } as any}>
                                    {workspace.icon}
                                </div>
                                <div className="text-[8px] font-black mt-2 uppercase tracking-[0.2em] opacity-60 group-hover/bubble:opacity-100 transition-opacity" style={{ color: workspace.color }}>{workspace.label}</div>

                                {/* Shine Effect */}
                                <div className="absolute -inset-full bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 group-hover/bubble:translate-x-full transition-transform duration-1000" />
                            </div>

                            {/* Enhanced Tooltip */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 px-6 py-3 glass-divine rounded-2xl opacity-0 group-hover/bubble:opacity-100 transition-all duration-500 transform translate-y-4 group-hover/bubble:translate-y-0 pointer-events-none border-white/10 shadow-2xl whitespace-nowrap z-[1000]">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: workspace.color }} />
                                    <div className="text-[10px] font-black text-white uppercase tracking-[0.4em]">{workspace.description}</div>
                                </div>
                                <div className="text-[8px] font-mono text-white/30 mt-2 uppercase tracking-[0.2em] border-t border-white/5 pt-2 space-y-1">
                                    <div className="flex justify-between items-center">
                                        <span className="text-neon-cyan/60">SERVICE:</span>
                                        <span className="text-white/80">/limbs/{workspace.id}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/20">PAYLOAD:</span>
                                        <span className="text-white/40">/dist/{workspace.id}.bin</span>
                                    </div>
                                </div>
                            </div>

                            {activeWorkspace === workspace.id && (
                                <div className="absolute -inset-4 rounded-[32px] border-2 border-neon-cyan/40 animate-ping pointer-events-none" />
                            )}
                        </div>
                    );
                })}

                {/* Neural Mesh Surface (Divine Edition) - Constellations Layer */}
                <svg className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-1000 z-10" viewBox="0 0 900 900">
                    <defs>
                        <radialGradient id="divineGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="var(--neon-gold)" stopOpacity="0.4" />
                            <stop offset="70%" stopColor="var(--neon-gold)" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="var(--neon-gold)" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="450" cy="450" r="380" fill="none" stroke="url(#divineGlow)" strokeWidth="2" strokeDasharray="10 10" className="animate-spin-slow" />

                    {workspaces.map((workspace, index) => {
                        const angle = (index / workspaces.length) * Math.PI * 2 - Math.PI / 2;
                        const radius = 380;
                        const x = Math.cos(angle) * radius + 450;
                        const y = Math.sin(angle) * radius + 450;

                        // Find a neighbor for constellation line
                        const nextIndex = (index + 7) % workspaces.length;
                        const nextAngle = (nextIndex / workspaces.length) * Math.PI * 2 - Math.PI / 2;
                        const nextX = Math.cos(nextAngle) * radius + 450;
                        const nextY = Math.sin(nextAngle) * radius + 450;

                        // Density line
                        const sideIndex = (index + 3) % workspaces.length;
                        const sideAngle = (sideIndex / workspaces.length) * Math.PI * 2 - Math.PI / 2;
                        const sideX = Math.cos(sideAngle) * radius + 450;
                        const sideY = Math.sin(sideAngle) * radius + 450;

                        return (
                            <g key={index}>
                                <line x1="450" y1="450" x2={x} y2={y} stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                                <line x1={x} y1={y} x2={nextX} y2={nextY} stroke={workspace.color} strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="8 4" />
                                <line x1={x} y1={y} x2={sideX} y2={sideY} stroke={workspace.color} strokeWidth="0.8" strokeOpacity="0.2" />
                                <circle cx={x} cy={y} r="3.5" fill={workspace.color} fillOpacity="0.6" className="animate-pulse" />
                            </g>
                        );
                    })}
                </svg>

                {/* Orbit Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-5">
                    <div className="absolute border border-white/10 rounded-full animate-spin-slow w-[750px] h-[750px] -ml-[375px] -mt-[375px]" />
                    <div className="absolute border border-white/20 rounded-full animate-spin-slow-reverse w-[850px] h-[850px] -ml-[425px] -mt-[425px] border-dashed" />
                </div>

                {/* Standalone Try-Out Bubble (Positioned to the side) */}
                <div
                    className="absolute top-1/2 -right-40 -translate-y-1/2 group cursor-pointer z-[100] transition-all duration-700 hover:scale-125 hover:-translate-x-2"
                    onClick={() => onSelectWorkspace('relic' as WorkspaceMode)}
                >
                    <div className="w-24 h-24 rounded-[32px] glass-ultra border border-neon-gold/30 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 shadow-[0_0_50px_rgba(255,215,0,0.2)] bg-black/40"
                        title="Experimental Portal: Temporary access for feature try-outs and validation">
                        <div className="text-4xl filter drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]">
                            🧪
                        </div>
                        <div className="text-[9px] font-black mt-3 uppercase tracking-[0.3em] text-neon-gold animate-pulse">TRY-OUT</div>

                        {/* Scan Line Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-gold/5 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-scan" />

                        {/* Shine Effect */}
                        <div className="absolute -inset-full bg-gradient-to-br from-white/5 via-transparent to-transparent rotate-45 group-hover/bubble:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Enhanced Tooltip for Try-Out */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-8 px-8 py-4 glass-ultra rounded-3xl opacity-0 group-hover/bubble:opacity-100 transition-all duration-500 transform translate-y-6 group-hover/bubble:translate-y-0 pointer-events-none border border-white/10 shadow-[0_0_60px_rgba(0,0,0,1)] whitespace-nowrap z-[2000] backdrop-blur-3xl">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full animate-ping bg-neon-gold" />
                            <div className="text-[12px] font-black text-white uppercase tracking-[0.5em]">TEMP_EXPERIMENT_CORE</div>
                        </div>
                        <div className="text-[9px] font-mono text-white/30 mt-3 uppercase tracking-[0.2em] border-t border-white/5 pt-3 space-y-2">
                            <div className="flex justify-between items-center gap-8">
                                <span className="text-neon-gold/60">STATUS:</span>
                                <span className="text-white/80">UNSTABLE_SANDBOX</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white/20">TARGET:</span>
                                <span className="text-white/40">/workspace/relic_v2_beta</span>
                            </div>
                        </div>
                    </div>

                    {/* Outer Orbit Line connection point */}
                    <div className="absolute top-1/2 right-full w-20 h-[1px] bg-gradient-to-r from-transparent to-neon-gold/20 -translate-y-1/2 pointer-events-none" />
                </div>
            </div>
        </div>

    );
}
