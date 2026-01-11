
import React, { useState, useCallback, useMemo } from 'react';
import ReactFlow, {
    Node, Edge, Controls, Background, Connection,
    addEdge, applyNodeChanges, applyEdgeChanges,
    NodeChange, EdgeChange, Handle, Position
} from 'reactflow';
import 'reactflow/dist/style.css';
import { NODE_DEFINITIONS, NodeType, NodeDefinition } from '../../../../services/ai/n8n/nodeDefinitions';
import { workflowEngine, Workflow } from '../../../../services/ai/n8n/workflowEngine';
import { Play, Save, Plus, Trash2, Settings, Terminal } from 'lucide-react';

interface CustomNodeProps {
    data: {
        label: string,
        type: NodeType,
        parameters: any,
        onParameterChange: (key: string, value: any) => void
    }
}

const CustomNodeComponent = ({ data }: CustomNodeProps) => {
    const def = NODE_DEFINITIONS[data.type];

    return (
        <div className="px-4 py-2 shadow-xl rounded-md bg-[#0a1222] border border-cyan-500/30 min-w-[150px]">
            <div className="flex items-center border-b border-cyan-500/20 pb-2 mb-2">
                <div className="text-xl mr-2">{def.icon}</div>
                <div>
                    <div className="text-sm font-bold text-cyan-400">{data?.label ?? 'Unknown'}</div>
                    <div className="text-[10px] text-slate-500 uppercase">{def?.type ?? 'UNKNOWN'}</div>
                </div>
            </div>

            {/* Dynamic Inputs */}
            {def.inputs.map((input, idx) => (
                <div key={`in-${idx}`} className="relative h-6 flex items-center text-[10px] text-slate-400">
                    <Handle
                        type="target"
                        position={Position.Left}
                        id={input.name}
                        style={{ background: '#06b6d4', width: '8px', height: '8px' }}
                    />
                    <span className="ml-3">{input.name}</span>
                </div>
            ))}

            {/* Dynamic Outputs */}
            {def.outputs.map((output, idx) => (
                <div key={`out-${idx}`} className="relative h-6 flex items-center justify-end text-[10px] text-slate-400">
                    <span className="mr-3">{output.name}</span>
                    <Handle
                        type="source"
                        position={Position.Right}
                        id={output.name}
                        style={{ background: '#10b981', width: '8px', height: '8px' }}
                    />
                </div>
            ))}
        </div>
    );
};

const nodeTypes = {
    custom: CustomNodeComponent
};

export const N8NWorkflow: React.FC = () => {
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [showProperties, setShowProperties] = useState(false);

    const onNodesChange = useCallback((changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
    const onEdgesChange = useCallback((changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
    const onConnect = useCallback((connection: Connection) => setEdges((eds) => addEdge(connection, eds)), []);

    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();
            const type = event.dataTransfer.getData('application/reactflow');
            if (!type) return;

            const position = { x: event.clientX - 400, y: event.clientY - 150 }; // Rough offset
            const def = NODE_DEFINITIONS[type as NodeType];

            const newNode: Node = {
                id: `node_${Date.now()}`,
                type: 'custom',
                position,
                data: {
                    label: def.label,
                    type,
                    parameters: {},
                    onParameterChange: (key: string, value: any) => {
                        // This will be handled by the properties panel
                    }
                },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        []
    );

    const handleExecute = async () => {
        setIsRunning(true);
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] Starting workflow execution...`]);

        // Transform ReactFlow graph to Workflow engine format
        const workflow: Workflow = {
            id: 'temp-run',
            name: 'Interactive Run',
            nodes: nodes.map(n => ({
                id: n.id,
                type: n.data.type,
                position: n.position,
                parameters: n.data.parameters
            })),
            connections: edges.map(e => ({
                id: e.id,
                sourceNode: e.source,
                sourceOutput: e.sourceHandle || 'default',
                targetNode: e.target,
                targetInput: e.targetHandle || 'default'
            }))
        };

        try {
            const result = await workflowEngine.execute(workflow);
            if (result.success) {
                setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] Execution successful!`, JSON.stringify(result.outputs, null, 2)]);
            } else {
                setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] Execution failed: ${result.error}`]);
            }
        } catch (e) {
            setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] Critical Failure: ${e}`]);
        } finally {
            setIsRunning(false);
        }
    };

    const updateNodeParam = (nodeId: string, key: string, value: any) => {
        setNodes(nds => nds.map(n => {
            if (n.id === nodeId) {
                return {
                    ...n,
                    data: {
                        ...n.data,
                        parameters: { ...n.data.parameters, [key]: value }
                    }
                };
            }
            return n;
        }));
    };

    const selectedNode = useMemo(() => nodes.find(n => n.id === selectedNodeId), [nodes, selectedNodeId]);

    return (
        <div className="flex h-full w-full bg-[#050a15] text-slate-300 font-sans overflow-hidden">
            {/* Sidebar / Palette */}
            <div className="w-64 border-r border-cyan-900/30 p-6 flex flex-col gap-6 bg-[#0a1222]/50 backdrop-blur-xl shrink-0 overflow-y-auto no-scrollbar">
                <div className="flex items-center justify-between">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500">Node Palette</h2>
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_#00f2ff]"></div>
                </div>

                <div className="space-y-3">
                    {Object.keys(NODE_DEFINITIONS).map(key => {
                        const def = NODE_DEFINITIONS[key as NodeType];
                        return (
                            <div
                                key={key}
                                onDragStart={(event) => event.dataTransfer.setData('application/reactflow', key)}
                                draggable
                                className="p-4 bg-[#050a15] border border-cyan-900/20 rounded-2xl cursor-grab hover:border-cyan-500/50 flex items-center gap-4 transition-all group hover:scale-[1.02] shadow-lg active:scale-[0.98]"
                            >
                                <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{def.icon}</span>
                                <div>
                                    <div className="text-[11px] font-bold text-cyan-50">{def.label}</div>
                                    <div className="text-[8px] text-slate-600 uppercase font-black tracking-tighter">{def.type}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-auto pt-6 border-t border-cyan-900/20">
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Neural Link Status</div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        <span className="text-[10px] text-slate-400">Engine Ready</span>
                    </div>
                </div>
            </div>

            {/* Main Canvas */}
            <div className="flex-1 relative h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0a1222] via-[#050a15] to-[#050a15]" onDrop={onDrop} onDragOver={onDragOver}>
                <div className="absolute top-6 left-6 z-10 flex flex-col">
                    <h1 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                        <span className="text-cyan-500">Pipeline</span> Architect
                    </h1>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-900/60 mt-1 ml-1">v4.0 Finalizer</span>
                </div>

                <div className="absolute top-6 right-6 z-10 flex gap-3">
                    <button
                        onClick={handleExecute}
                        className={`flex items-center gap-3 px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-2xl ${isRunning ? 'bg-amber-600/20 text-amber-500 border border-amber-500/50 animate-pulse' : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-500/20'}`}
                    >
                        {isRunning ? <Terminal size={14} className="animate-spin" /> : <Play size={14} />} {isRunning ? 'Processing...' : 'Execute Sequence'}
                    </button>
                    <button
                        onClick={() => setShowProperties(!showProperties)}
                        className={`p-3 rounded-2xl border transition-all ${showProperties ? 'bg-cyan-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/20' : 'bg-[#0a1222]/80 text-cyan-400 border-cyan-900/30 hover:bg-cyan-900/20'}`}
                    >
                        <Settings size={20} />
                    </button>
                </div>

                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodeClick={(_, node) => setSelectedNodeId(node.id)}
                    nodeTypes={nodeTypes}
                    fitView
                    className="no-scrollbar"
                >
                    <Background color="#00f2ff" gap={20} size={1} />
                    <Controls className="bg-[#0a1222] border border-cyan-900/40 rounded-xl overflow-hidden [&>button]:border-cyan-900/20 [&>button]:text-cyan-400 [&>button:hover]:bg-cyan-900/20" />
                </ReactFlow>

                {/* Logs Overlay */}
                <div className="absolute bottom-6 left-6 right-6 h-32 bg-[#050a15]/80 backdrop-blur-xl border border-cyan-900/30 rounded-3xl p-6 overflow-hidden flex flex-col gap-2 shadow-2xl">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black uppercase tracking-widest text-cyan-500/50">Execution Logs</span>
                        <button onClick={() => setLogs([])} className="text-[8px] text-slate-500 hover:text-white uppercase font-black transition-colors underline underline-offset-4">Purge Buffer</button>
                    </div>
                    <div className="flex-1 overflow-y-auto font-mono text-[10px] space-y-1 no-scrollbar opacity-80">
                        {logs.length === 0 && <div className="text-slate-800 uppercase italic">Awaiting input signal...</div>}
                        {logs.map((log, i) => (
                            <div key={i} className={log.includes('failed') || log.includes('Failure') ? 'text-rose-500' : 'text-cyan-400/80'}>{log}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Properties Panel */}
            {showProperties && selectedNode && (
                <div className="w-80 border-l border-cyan-900/30 bg-[#0a1222]/95 backdrop-blur-2xl p-8 flex flex-col gap-8 shrink-0 animate-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-[11px] font-black uppercase tracking-widest text-cyan-400">Node Properties</h2>
                            <p className="text-[9px] text-slate-500 uppercase font-black mt-1">Configuring: {selectedNode.data.label}</p>
                        </div>
                        <button onClick={() => setSelectedNodeId(null)} className="text-slate-600 hover:text-white">&times;</button>
                    </div>

                    <div className="flex-1 overflow-y-auto no-scrollbar space-y-8">
                        {NODE_DEFINITIONS[selectedNode.data.type as NodeType].parameters.map(param => (
                            <div key={param.name} className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">{param.label || param.name}</label>
                                {param.type === 'string' ? (
                                    <input
                                        type="text"
                                        value={String(selectedNode.data?.parameters?.[param.name] ?? '')}
                                        onChange={(e) => updateNodeParam(selectedNode.id, param.name, e.target.value)}
                                        className="w-full bg-black/40 border border-cyan-900/40 rounded-xl px-4 py-3 text-xs text-cyan-50 outline-none focus:border-cyan-500 transition-colors"
                                    />
                                ) : param.type === 'number' ? (
                                    <input
                                        type="number"
                                        value={Number(selectedNode.data?.parameters?.[param.name] ?? 0)}
                                        onChange={(e) => updateNodeParam(selectedNode.id, param.name, parseFloat(e.target.value))}
                                        className="w-full bg-black/40 border border-cyan-900/40 rounded-xl px-4 py-3 text-xs text-cyan-50 outline-none focus:border-cyan-500"
                                    />
                                ) : param.type === 'select' ? (
                                    <select
                                        value={String(selectedNode.data?.parameters?.[param.name] ?? '')}
                                        onChange={(e) => updateNodeParam(selectedNode.id, param.name, e.target.value)}
                                        className="w-full bg-black/40 border border-cyan-900/40 rounded-xl px-4 py-3 text-xs text-cyan-50 outline-none focus:border-cyan-500 appearance-none"
                                    >
                                        <option value="">Select Option</option>
                                        {param.options?.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                ) : null}
                            </div>
                        ))}
                    </div>

                    <div className="pt-6 border-t border-cyan-900/20">
                        <button
                            onClick={() => {
                                setNodes(nds => nds.filter(n => n.id !== selectedNode.id));
                                setSelectedNodeId(null);
                            }}
                            className="w-full py-4 bg-rose-600/10 hover:bg-rose-600 text-rose-500 hover:text-white border border-rose-500/20 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all transition-all flex items-center justify-center gap-2"
                        >
                            <Trash2 size={14} /> Delete Node
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default N8NWorkflow;
