import React, { useState, useEffect, useRef } from 'react';
import { useServiceHub, useNotification } from '../../hooks';
import { WorkspaceMode } from '../../../services/core/ModeManager';

interface Message {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: number;
    metadata?: any;
}

interface NeuralTerminalProps {
    workspace: WorkspaceMode;
    isVisible: boolean;
    onClose: () => void;
}

export function NeuralTerminal({ workspace, isVisible, onClose }: NeuralTerminalProps) {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Initial Greeting based on workspace
    useEffect(() => {
        if (messages.length === 0) {
            const greeting: Message = {
                id: 'init',
                role: 'assistant',
                content: `Neural Link Established. ${workspace.toUpperCase()} limb online. How shall we orchestrate this session?`,
                timestamp: Date.now()
            };
            setMessages([greeting]);
        }
    }, [workspace]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async () => {
        if (!input.trim() || isTyping) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            timestamp: Date.now()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            // Route to the specific limb for this workspace
            const response = await callLimb(workspace, `${workspace}_chat`, {
                prompt: input,
                history: messages.map(m => ({ role: m.role, content: m.content }))
            });

            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: response.text || response.message || "Command executed within neural parameters.",
                timestamp: Date.now(),
                metadata: response.metadata
            };

            setMessages(prev => [...prev, aiMsg]);
        } catch (e: any) {
            addNotification('error', `Neural Fault: ${e.message}`);
        } finally {
            setIsTyping(false);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed right-6 top-28 bottom-28 w-96 glass-ultra rounded-[32px] border border-white/5 shadow-2xl z-50 flex flex-col overflow-hidden animate-slide-in-right">
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_var(--neon-cyan)]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Neural Terminal: {workspace}</span>
                </div>
                <button onClick={onClose} className="text-white/20 hover:text-white transition-colors">✕</button>
            </div>

            {/* Message Feed */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                        <div className={`max-w-[85%] p-4 rounded-2xl text-[11px] leading-relaxed shadow-xl
                            ${msg.role === 'user'
                                ? 'bg-neon-cyan/10 text-white border border-neon-cyan/20 rounded-tr-none'
                                : 'bg-white/5 text-white/80 border border-white/5 rounded-tl-none'}
                        `}>
                            {msg.content}
                        </div>
                        <div className="mt-2 text-[7px] font-mono text-white/20 uppercase tracking-widest">
                            {msg.role} • {new Date(msg.timestamp).toLocaleTimeString()}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex gap-1 items-center p-4">
                        <div className="w-1 h-1 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                        <div className="w-1 h-1 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <div className="w-1 h-1 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                )}
            </div>

            {/* Reality Anchor Tracing (Sub-panel) */}
            <div className="px-6 py-3 bg-black/40 border-t border-white/5">
                <div className="flex items-center justify-between text-[8px] font-black text-white/20 uppercase tracking-widest">
                    <span>Reality_Anchor_Status</span>
                    <span className="text-green-500/60">SYNCHRONIZED_STABLE</span>
                </div>
            </div>

            {/* Input Surface */}
            <div className="p-6 bg-white/5 border-t border-white/10">
                <div className="relative">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSendMessage();
                            }
                        }}
                        className="w-full bg-black/60 border border-white/10 rounded-2xl p-4 pr-14 text-[11px] text-white/80 font-mono resize-none focus:border-neon-cyan/50 outline-none h-20 shadow-inner"
                        placeholder="Dispatch intent..."
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={isTyping}
                        className="absolute right-4 bottom-4 w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center border border-neon-cyan/20 hover:bg-neon-cyan/20 transition-all group"
                    >
                        <span className="text-neon-cyan group-hover:scale-110 transition-transform">↗</span>
                    </button>
                </div>
                <div className="mt-3 flex justify-between">
                    <div className="flex gap-2">
                        <div className="glass px-2 py-1 rounded text-[7px] font-mono text-white/20 uppercase">Model: {workspace === 'code' ? 'QWEN_2.5' : 'DEEPSEEK_R1'}</div>
                    </div>
                    <div className="text-[7px] font-black text-neon-magenta/40 uppercase tracking-widest">Prov_v6.1_Active</div>
                </div>
            </div>
        </div>
    );
}
