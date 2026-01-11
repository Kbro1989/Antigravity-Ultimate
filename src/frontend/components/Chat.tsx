/**
 * Chat Component - AI-Powered Conversation Interface
 * Ported from legacy with CostOptimizer and CircuitBreaker integration
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useServiceHub } from '../hooks/useServiceHub';
import { Brain, Send, Zap, Shield, Loader2 } from 'lucide-react';

interface Message {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: number;
    model?: string;
    isError?: boolean;
    imageUrl?: string;
    audioUrl?: string;
}

export function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const {
        chat,
        callLimb,
        bridgeStatus,
        quotaMetrics,
        circuitStates,
        isLoading
    } = useServiceHub();

    // Auto-scroll on new messages
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const addMessage = useCallback((msg: Omit<Message, 'id' | 'timestamp'>) => {
        const newMsg: Message = {
            ...msg,
            id: Math.random().toString(36).substring(7),
            timestamp: Date.now()
        };
        setMessages(prev => [...prev, newMsg]);
        return newMsg;
    }, []);

    const handleCommand = async (input: string) => {
        const [cmd, ...args] = input.slice(1).split(' ');
        const payload = args.join(' ');

        addMessage({ role: 'user', content: input });
        setIsTyping(true);

        try {
            let result;
            switch (cmd.toLowerCase()) {
                case 'mesh':
                case '3d':
                    result = await callLimb('mesh', 'analyze_mesh', { path: payload });
                    break;
                case 'relic':
                case 'museum':
                    result = await callLimb('relic', args[0] || 'explore_museum', { path: args.slice(1).join(' ') });
                    break;
                case 'anchor':
                case 'reality':
                    result = await callLimb('reality', 'anchor_convergence', { note: payload });
                    break;
                case 'security':
                case 'audit':
                    result = await callLimb('security', 'get_logs', {});
                    break;
                case 'id':
                case 'item':
                    result = await callLimb('id_auditor', 'validate_id', { type: 'item', id: parseInt(args[0]) });
                    break;
                default:
                    throw new Error(`Unknown command: /${cmd}`);
            }

            addMessage({
                role: 'assistant',
                content: `[COMMAND_SUCCESS: /${cmd}]\n${JSON.stringify(result, null, 2)}`,
                model: 'Neural Limb Bridge v6.5'
            });
        } catch (error: any) {
            addMessage({
                role: 'assistant',
                content: `Command Failed: ${error.message}`,
                isError: true
            });
        } finally {
            setIsTyping(false);
        }
    };

    const handleSend = useCallback(async () => {
        if (!input.trim()) return;

        if (input.startsWith('/')) {
            const commandInput = input;
            setInput('');
            return handleCommand(commandInput);
        }

        const userMessage = input;
        setInput('');
        addMessage({ role: 'user', content: userMessage });
        setIsTyping(true);

        try {
            const response = await chat(userMessage, messages.map(m => ({
                role: m.role,
                content: m.content
            })));

            addMessage({
                role: 'assistant',
                content: response.text || 'No response received',
                model: response.model
            });
        } catch (error: any) {
            addMessage({
                role: 'assistant',
                content: `Error: ${error.message}`,
                isError: true
            });
        } finally {
            setIsTyping(false);
        }
    }, [input, messages, chat, addMessage, callLimb]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex flex-col h-full bg-slate-950 border-l border-cyan-900/30">
            {/* Status Bar */}
            <div className="px-4 py-2 bg-slate-900/80 border-b border-cyan-900/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${bridgeStatus.isConnected ? 'bg-green-500' : bridgeStatus.isCloudMode ? 'bg-yellow-500' : 'bg-red-500'}`} />
                    <span className="text-xs font-mono text-cyan-400">
                        {bridgeStatus.isConnected ? 'BRIDGE' : bridgeStatus.isCloudMode ? 'CLOUD' : 'OFFLINE'}
                    </span>
                </div>

                {quotaMetrics && (
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                        <span>CF: {quotaMetrics.cloudflareUsed}/{quotaMetrics.cloudflareLimit}</span>
                        <span>SAVED: ${quotaMetrics.savingsEstimate.toFixed(2)}</span>
                    </div>
                )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-slate-600">
                        <Brain className="w-12 h-12 mb-4 opacity-50" />
                        <p className="text-sm">Start a conversation with POG AI</p>
                    </div>
                )}

                {messages.map(msg => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === 'user'
                            ? 'bg-cyan-600 text-white'
                            : msg.isError
                                ? 'bg-red-900/30 text-red-300 border border-red-500/30'
                                : 'bg-slate-800 text-slate-200'
                            }`}>
                            <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                            {msg.model && (
                                <p className="text-xs mt-2 opacity-50 font-mono">{msg.model}</p>
                            )}
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex items-center gap-2 text-cyan-400">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm">Thinking...</span>
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="p-4 bg-slate-900/50 border-t border-cyan-900/30">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask POG AI..."
                        className="flex-1 px-4 py-3 bg-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isTyping}
                        className="p-3 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors"
                    >
                        <Send className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
