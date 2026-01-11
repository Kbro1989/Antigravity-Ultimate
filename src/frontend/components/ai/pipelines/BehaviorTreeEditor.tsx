
import React, { useState, useRef, useCallback } from 'react';

interface BehaviorNode {
    id: string;
    type: 'root' | 'selector' | 'sequence' | 'action' | 'condition' | 'decorator';
    label: string;
    position: { x: number; y: number };
    children: string[];
    status: 'idle' | 'running' | 'success' | 'failure';
    config?: Record<string, any>;
}

interface BehaviorTreeEditorProps {
    onSave?: (tree: BehaviorNode[]) => void;
    onDebug?: (nodeId: string) => void;
}

const NODE_COLORS: Record<string, string> = {
    root: 'bg-purple-600/10 border-purple-500/30',
    selector: 'bg-amber-600/10 border-amber-500/30',
    sequence: 'bg-cyan-600/10 border-cyan-500/30',
    action: 'bg-emerald-600/10 border-emerald-500/30',
    condition: 'bg-rose-600/10 border-rose-500/30',
    decorator: 'bg-indigo-600/10 border-indigo-500/30',
};

const STATUS_COLORS: Record<string, string> = {
    idle: 'bg-[#394443]',
    running: 'bg-amber-500 animate-pulse',
    success: 'bg-emerald-500',
    failure: 'bg-rose-500',
};

export const BehaviorTreeEditor: React.FC<BehaviorTreeEditorProps> = ({ onSave, onDebug }) => {
    const [nodes, setNodes] = useState<BehaviorNode[]>([
        { id: 'root', type: 'root', label: 'Root Execution', position: { x: 300, y: 50 }, children: ['sel1'], status: 'idle' },
        { id: 'sel1', type: 'selector', label: 'Combat Selector', position: { x: 300, y: 150 }, children: ['seq1', 'act1'], status: 'idle' },
        { id: 'seq1', type: 'sequence', label: 'Patrol Loop', position: { x: 150, y: 280 }, children: ['cond1', 'act2'], status: 'idle' },
    ]);
    const [selectedNode, setSelectedNode] = useState<string | null>(null);
    const [draggingNode, setDraggingNode] = useState<string | null>(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [isSimulating, setIsSimulating] = useState(false);
    const canvasRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (nodeId: string, e: React.MouseEvent) => {
        const node = nodes.find(n => n.id === nodeId);
        if (node) {
            setDraggingNode(nodeId);
            setDragOffset({ x: e.clientX - node.position.x, y: e.clientY - node.position.y });
            setSelectedNode(nodeId);
        }
    };

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (draggingNode) {
            setNodes(prev => prev.map(n =>
                n.id === draggingNode
                    ? { ...n, position: { x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y } }
                    : n
            ));
        }
    }, [draggingNode, dragOffset]);

    const handleMouseUp = () => {
        setDraggingNode(null);
    };

    const addNode = (type: BehaviorNode['type']) => {
        const newNode: BehaviorNode = {
            id: `node_${Date.now()}`,
            type,
            label: `New ${type}`,
            position: { x: 200, y: 200 },
            children: [],
            status: 'idle'
        };
        setNodes(prev => [...prev, newNode]);
    };

    const toggleSimulation = () => {
        setIsSimulating(!isSimulating);
        if (!isSimulating) {
            const interval = setInterval(() => {
                setNodes(prev => prev.map(n => ({
                    ...n,
                    status: ['idle', 'running', 'success', 'failure'][Math.floor(Math.random() * 4)] as any
                })));
            }, 1000);
            setTimeout(() => clearInterval(interval), 5000);
        }
    };

    return (
        <div className="h-full flex flex-col bg-[#232323] text-[#aaa] font-sans overflow-hidden">
            {/* Toolbar */}
            <div className="h-14 bg-[#282e2e] border-b border-[#394443] px-6 flex items-center justify-between shrink-0">
                <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#438ab5]">Behavior Logic Workspace</span>
                    <div className="w-px h-6 bg-[#394443]"></div>
                    <div className="flex space-x-2">
                        {(['selector', 'sequence', 'action', 'condition'] as const).map(type => (
                            <button
                                key={type}
                                onClick={() => addNode(type)}
                                className={`px-3 py-1.5 border rounded-lg text-[9px] font-black uppercase transition-all ${NODE_COLORS[type]} hover:opacity-80`}
                            >
                                + {type}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleSimulation}
                        className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${isSimulating ? 'bg-rose-600 text-white' : 'bg-emerald-600 text-white'}`}
                    >
                        {isSimulating ? 'Stop Monitor' : 'Live Debug'}
                    </button>
                    <button
                        onClick={() => onSave?.(nodes)}
                        className="px-6 py-2 bg-[#438ab5] hover:bg-[#3e5b6d] text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-all"
                    >
                        Commit Tree
                    </button>
                </div>
            </div>

            {/* Canvas */}
            <div
                ref={canvasRef}
                className="flex-1 relative overflow-hidden"
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                    backgroundImage: 'radial-gradient(circle, #2a3434 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            >
                {/* Nodes */}
                {nodes.map(node => (
                    <div
                        key={node.id}
                        onMouseDown={(e) => handleMouseDown(node.id, e)}
                        className={`absolute w-40 border rounded-2xl shadow-2xl backdrop-blur-xl cursor-move transition-all ${NODE_COLORS[node.type]} ${selectedNode === node.id ? 'ring-1 ring-[#438ab5] shadow-[0_0_30px_rgba(67,138,181,0.1)]' : ''}`}
                        style={{ left: node.position.x, top: node.position.y }}
                    >
                        <div className="px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${STATUS_COLORS[node.status]}`}></div>
                                <span className="text-[9px] font-black uppercase text-[#8397a5] tracking-wide">{node.label}</span>
                            </div>
                        </div>
                        <div className="px-4 py-2 border-t border-[#394443]">
                            <span className="text-[8px] text-slate-600 uppercase font-black">{node.type}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BehaviorTreeEditor;
