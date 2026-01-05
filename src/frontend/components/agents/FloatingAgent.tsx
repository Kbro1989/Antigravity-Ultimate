import React, { useState, useEffect } from 'react';
import { useAgent } from '../../contexts/AgentContext';

export function FloatingAgent() {
    const { status: agentState, message, setAgentStatus } = useAgent();
    // const [agentState, setAgentState] = useState<'idle' | 'thinking' | 'executing' | 'error'>('idle'); // Replaced by global state
    // const [message, setMessage] = useState('Neural Matrix Online'); // Replaced by global state
    const [expanded, setExpanded] = useState(false);

    // Simulation removed - now driven by CodeWorkspace events
    /*
    useEffect(() => { ... }, []);
    */

    return (
        <div className={`fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 transition-all duration-500 ${expanded ? 'translate-y-0' : 'translate-y-0'}`}>

            {/* Expanded Interface */}
            <div className={`glass-ultra rounded-[30px] p-6 border border-neon-cyan/30 shadow-[0_0_50px_rgba(0,242,255,0.2)] w-80 transition-all duration-300 origin-bottom-right overflow-hidden flex flex-col gap-4
                ${expanded ? 'opacity-100 scale-100 mb-4' : 'opacity-0 scale-90 pointer-events-none h-0 mb-0 p-0'}
            `}>
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <div className="w-10 h-10 rounded-full border border-neon-cyan/50 bg-neon-cyan/10 flex items-center justify-center animate-pulse shadow-[0_0_15px_var(--neon-cyan)]">
                        💎
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan">Logic Matrix</span>
                        <span className="text-[8px] font-mono text-white/40">OMNIPRESENT_LINK_ACTIVE</span>
                    </div>
                </div>

                <div className="h-32 bg-black/40 rounded-xl p-4 font-mono text-[9px] text-neon-cyan/80 overflow-y-auto custom-scrollbar border border-white/5">
                    <div className="mb-2 text-white/30">{'>'} Initializes Global Context... OK</div>
                    <div className="mb-2 text-white/30">{'>'} Monitoring User Intent...</div>
                    <div className="animate-pulse">{'>'} {message}</div>
                </div>

                <div className="flex gap-2">
                    <button className="flex-1 py-3 glass rounded-xl text-[9px] font-black uppercase text-white/60 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all">Context Dump</button>
                    <button className="flex-1 py-3 glass rounded-xl text-[9px] font-black uppercase text-white/60 hover:text-neon-magenta hover:border-neon-magenta/50 transition-all">Interrupt</button>
                </div>
            </div>

            {/* Floating Orb / Toggle */}
            <button
                onClick={() => setExpanded(!expanded)}
                className={`w-16 h-16 rounded-full glass-ultra flex items-center justify-center relative group transition-all duration-300 hover:scale-110
                    ${expanded ? 'border-neon-cyan shadow-[0_0_30px_var(--neon-cyan)]' : 'border-white/20 hover:border-neon-cyan/50'}
                `}
            >
                {/* Agent Avatar */}
                <div className={`absolute inset-1 rounded-full border-2 border-dashed border-neon-cyan/30 animate-spin-slow`} />
                <div className="text-2xl relative z-10 group-hover:scale-110 transition-transform">💎</div>

                {/* Notification Dot */}
                <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-neon-magenta border-2 border-black flex items-center justify-center text-[8px] font-bold text-white shadow-lg animate-bounce">
                    1
                </div>

                {/* Status Ring */}
                {agentState === 'thinking' && (
                    <div className="absolute inset-0 rounded-full border-2 border-neon-cyan animate-ping opacity-50" />
                )}
            </button>
        </div>
    );
}
