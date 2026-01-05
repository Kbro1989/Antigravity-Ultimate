import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AgentState {
    status: 'idle' | 'thinking' | 'executing' | 'error';
    message: string;
    context: string; // The active "thought" or focus

    // Actions to control the agent globally
    setAgentStatus: (status: 'idle' | 'thinking' | 'executing' | 'error', message: string) => void;
    setAgentContext: (context: string) => void;
}

const AgentContext = createContext<AgentState | undefined>(undefined);

export function AgentProvider({ children }: { children: ReactNode }) {
    const [status, setStatus] = useState<'idle' | 'thinking' | 'executing' | 'error'>('idle');
    const [message, setMessage] = useState('Neural Matrix Online');
    const [context, setContext] = useState('Global Monitoring');

    const setAgentStatus = (s: typeof status, m: string) => {
        setStatus(s);
        setMessage(m);
    };

    return (
        <AgentContext.Provider value={{ status, message, context, setAgentStatus, setAgentContext: setContext }}>
            {children}
        </AgentContext.Provider>
    );
}

export function useAgent() {
    const context = useContext(AgentContext);
    if (!context) {
        throw new Error('useAgent must be used within an AgentProvider');
    }
    return context;
}
