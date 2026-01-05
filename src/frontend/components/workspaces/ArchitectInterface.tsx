import React, { useState, useEffect } from 'react';
import { useAgent } from '../../contexts/AgentContext';

// A "Material" interface that feels like you are touching the code matrix
export function ArchitectInterface({ onClose, onArchitect }: { onClose: () => void, onArchitect: (prompt: string) => void }) {
    const [prompt, setPrompt] = useState('');
    const [phase, setPhase] = useState<'idle' | 'focus' | 'materializing'>('idle');
    const { status } = useAgent();

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-xl animate-fade-in">
            {/* Holographic Projector Container */}
            <div className={`
                relative w-[800px] h-[600px] glass-ultra rounded-[40px] border border-white/10 
                shadow-[0_0_100px_rgba(0,242,255,0.1)] overflow-hidden transition-all duration-700
                ${phase === 'materializing' ? 'scale-105 border-neon-cyan/50' : 'scale-100'}
            `}>

                {/* Background Grid - The "Material" of the Matrix */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] perspective-[1000px] transform-gpu rotate-x-12" />

                {/* Content Core */}
                <div className="relative z-10 flex flex-col h-full p-12 gap-8">

                    {/* Header */}
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 flex items-center justify-center border border-neon-cyan/30 shadow-[0_0_20px_var(--neon-cyan)] animate-pulse-slow">
                            <span className="text-3xl">🏗️</span>
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-white tracking-tight uppercase">Architectural Forge</h1>
                            <p className="text-neon-cyan font-mono text-sm tracking-[0.2em] uppercase opacity-80">Materialize Concepts into Code</p>
                        </div>
                        <button onClick={onClose} className="ml-auto w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all text-white/50 hover:text-white">✕</button>
                    </div>

                    {/* The Input "Material" */}
                    <div className="flex-1 flex flex-col justify-center gap-6">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            onFocus={() => setPhase('focus')}
                            onBlur={() => setPhase('idle')}
                            placeholder="Describe the reality you wish to forge..."
                            className="w-full h-48 bg-transparent text-2xl font-light text-white placeholder:text-white/20 outline-none resize-none leading-relaxed selection:bg-neon-cyan/30"
                            autoFocus
                        />

                        {/* Interactive Elements */}
                        <div className="flex gap-4">
                            {['React Component', 'API Service', 'Shader Graph', 'Physics Engine'].map(tag => (
                                <button key={tag} onClick={() => setPrompt(p => p + (p ? ' ' : '') + tag)}
                                    className="px-4 py-2 rounded-full glass border border-white/5 hover:border-neon-cyan/50 text-white/40 hover:text-neon-cyan text-xs font-black uppercase tracking-widest transition-all">
                                    + {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex justify-end items-center gap-8">
                        <div className="text-right">
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">System Status</div>
                            <div className="text-neon-cyan font-mono text-xs">{status.toUpperCase()}</div>
                        </div>
                        <button
                            onClick={() => {
                                setPhase('materializing');
                                onArchitect(prompt);
                            }}
                            className="h-20 px-12 bg-white text-black rounded-[24px] font-black text-lg tracking-[0.2em] uppercase hover:bg-neon-cyan hover:shadow-[0_0_50px_rgba(0,242,255,0.6)] transition-all flex items-center gap-4 group"
                        >
                            <span>Materialize</span>
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </button>
                    </div>

                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
            </div>
        </div>
    );
}
