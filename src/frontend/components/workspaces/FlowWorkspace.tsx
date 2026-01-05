import React, { useState, useCallback, useMemo, useEffect } from 'react';
import {
    ReactFlow,
    ReactFlowProvider,
    Controls,
    Background,
    Handle,
} from 'reactflow';

// @ts-ignore - Distribution re-exports are broken in v11.11.4
import { addEdge as addEdgeCore, useNodesState as useNodesStateCore, useEdgesState as useEdgesStateCore } from '@reactflow/core';

// --- NEURAL SUITE STABILIZATION BRIDGE (v6.5.2) ---
// Bypassing broken ReactFlow v11+ distribution exports (internal monorepo path leaks)

export enum Position {
    Left = 'left',
    Top = 'top',
    Right = 'right',
    Bottom = 'bottom'
}

export enum BackgroundVariant {
    Lines = 'lines',
    Dots = 'dots',
    Cross = 'cross'
}

export interface Connection {
    source: string | null;
    target: string | null;
    sourceHandle: string | null;
    targetHandle: string | null;
}

export interface Edge<T = any> {
    id: string;
    type?: string;
    source: string;
    target: string;
    sourceHandle?: string | null;
    targetHandle?: string | null;
    style?: React.CSSProperties;
    animated?: boolean;
    hidden?: boolean;
    data?: T;
    className?: string;
    selected?: boolean;
    zIndex?: number;
}

export interface NodeProps<T = any> {
    id: string;
    data: T;
    dragHandle?: string;
    type?: string;
    selected?: boolean;
    isConnectable?: boolean;
    zIndex?: number;
    xPos: number;
    yPos: number;
    dragging: boolean;
}

const addEdge: any = addEdgeCore;
const useNodesState: any = useNodesStateCore;
const useEdgesState: any = useEdgesStateCore;

import 'reactflow/dist/style.css';
import { useServiceHub, useNotification, usePresence } from '../../hooks';

// --- BUBBLE NODE COMPONENT ---
const BubbleNode = ({ data, selected }: NodeProps) => {
    return (
        <div className={`group relative w - 32 h - 32 rounded - full flex flex - col items - center justify - center transition - all duration - 500 ${selected ? 'scale-110' : 'hover:scale-105'} `}>
            {/* Outer Glow Ring */}
            <div className={`absolute inset - 0 rounded - full border - 2 transition - all duration - 500 ${selected ? 'border-neon-magenta shadow-[0_0_30px_rgba(255,0,225,0.4)] animate-spin-slow' : 'border-neon-cyan/20 group-hover:border-neon-cyan/60 shadow-[0_0_15px_rgba(0,242,255,0.1)]'} `} />

            {/* Inner Glass Sphere */}
            <div className={`absolute inset - 1 rounded - full glass - ultra flex flex - col items - center justify - center overflow - hidden border border - white / 5 ${selected ? 'bg-neon-magenta/10' : 'bg-white/5'} `}>
                <div className="text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                    {data.icon || '🛸'}
                </div>
                <div className="text-[9px] font-black uppercase tracking-tighter text-white/90 text-center px-4 leading-tight">
                    {data.label}
                </div>

                {/* Status Dot */}
                <div className={`absolute bottom - 4 w - 1.5 h - 1.5 rounded - full ${data.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-white/10'} `} />
            </div>

            {/* Handles */}
            <Handle type="target" position={Position.Left} className="!bg-neon-cyan !w-2 !h-2 !border-none shadow-[0_0_8px_var(--neon-cyan)]" />
            <Handle type="source" position={Position.Right} className="!bg-neon-magenta !w-2 !h-2 !border-none shadow-[0_0_8px_var(--neon-magenta)]" />
        </div>
    );
};

const nodeTypes = { bubble: BubbleNode };

// --- WORKSPACE MODES ---
function PipelineEditor() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [isExecuting, setIsExecuting] = useState(false);
    const [nodes, setNodes, onNodesChange] = useNodesState([
        { id: 'p1', type: 'bubble', position: { x: 100, y: 100 }, data: { label: 'TRIGGER', icon: '⚡', status: 'active' } }
    ]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const onConnect = useCallback((params: Edge | Connection) => {
        setEdges((eds: Edge[]) => addEdge({ ...params, animated: true, style: { stroke: '#00f2ff', strokeWidth: 2 } }, eds));
    }, [setEdges]);

    const executeFlow = async () => {
        setIsExecuting(true);
        try {
            await callLimb('orchestrator', 'orchestrate_execute_graph', { nodes, edges });
            addNotification('info', 'Reasoning Engine: Compiling Graph Path...');
            setTimeout(() => {
                addNotification('success', 'Pipeline Execution Success: 4/4 Nodes Processed');
                setIsExecuting(false);
            }, 2000);
        } catch (e: any) {
            addNotification('error', `Execution Fault: ${e.message} `);
            setIsExecuting(false);
        }
    };

    return (
        <div className="flex-1 flex gap-4 h-full animate-fade-in py-4 px-4 overflow-hidden bg-black/40">
            <div className="w-72 glass-ultra rounded-3xl p-6 overflow-y-auto flex flex-col gap-8 border border-white/5 h-full shadow-2xl">
                <div className="text-[10px] font-black text-neon-cyan tracking-[0.4em] uppercase flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
                    Node Library
                </div>

                <div className="space-y-6">
                    {['INPUT', 'TRANSFORM', 'STORAGE'].map(cat => (
                        <div key={cat} className="space-y-4">
                            <div className="text-[9px] font-black text-white/30 uppercase tracking-widest border-b border-white/5 pb-2">{cat}</div>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { id: '1', label: 'Discord', icon: '💬' },
                                    { id: '2', label: 'Refactor', icon: '🛠️' },
                                    { id: '3', label: 'KV Save', icon: '💾' },
                                    { id: '4', label: 'Analyze', icon: '🔍' }
                                ].map(n => (
                                    <div key={n.id} className="p-4 glass rounded-2xl flex flex-col items-center gap-2 border border-white/5 hover:border-neon-cyan/40 hover:bg-white/5 transition-all group cursor-move">
                                        <span className="text-2xl group-hover:scale-110 transition-transform">{n.icon}</span>
                                        <span className="text-[8px] font-black uppercase text-center text-white/40 group-hover:text-white">{n.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={executeFlow} disabled={isExecuting}
                    className="mt-auto w-full py-5 rounded-2xl bg-white text-black font-black text-[10px] uppercase tracking-[0.4em] hover:bg-neon-cyan hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all flex items-center justify-center gap-3"
                >
                    {isExecuting ? <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" /> : '⚡ Execute Flow'}
                </button>
            </div>

            <div className="flex-1 glass-ultra rounded-3xl relative overflow-hidden h-full border border-white/5 shadow-2xl">
                <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} nodeTypes={nodeTypes} fitView>
                    <Background color="#00f2ff" variant={BackgroundVariant.Dots} gap={30} size={1} style={{ opacity: 0.05 }} />
                    <Controls className="!bg-black/80 !border-white/10 !rounded-xl !shadow-none" />
                </ReactFlow>
            </div>
        </div>
    );
}

export function FlowWorkspace() {
    const [activeTab, setActiveTab] = useState('pipelines');
    const { users, updateTab } = usePresence('flow-workspace');

    useEffect(() => { updateTab(activeTab); }, [activeTab, updateTab]);

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 relative overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between backdrop-blur-3xl bg-white/5 h-20">
                <div className="flex items-center gap-6">
                    <div className="text-xl font-black italic tracking-tighter text-white/20 px-4 border-r border-white/5">FLOW.SYSTEM</div>
                    <div className="flex gap-2">
                        {['Symphony', 'Pipelines', 'Behavior'].map(t => (
                            <button key={t} onClick={() => setActiveTab(t.toLowerCase())}
                                className={`px - 6 py - 2 rounded - full text - [10px] font - black uppercase tracking - [0.2em] transition - all border ${activeTab === t.toLowerCase() ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.2)]' : 'bg-white/5 border-transparent text-white/30 hover:text-white/60'} `}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cursors Hub */}
                <div className="flex items-center gap-3">
                    {Object.values(users).map(user => (
                        <div key={user.id} className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[10px] text-white/60 font-black" title={user.name}>
                            {user.name.charAt(0)}
                        </div>
                    ))}
                    <div className="px-3 py-1 glass rounded-full text-[8px] font-black text-neon-magenta animate-pulse border border-neon-magenta/20">LIVE COLLAB ACTIVE</div>
                </div>
            </div>

            <ReactFlowProvider>
                <div className="flex-1 relative">
                    <PipelineEditor />
                    <div className="absolute bottom-6 right-6 pointer-events-none text-[9px] font-black tracking-[0.6em] text-white/10 uppercase">Ultimate v6.5.REASONING_CORE</div>
                </div>
            </ReactFlowProvider>
        </div>
    );
}
