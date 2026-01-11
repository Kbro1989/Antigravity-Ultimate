import React, { useState, useRef, useEffect } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import { useServiceHub, useNotification } from '../../hooks';
import { useAgent } from '../../contexts/AgentContext';
import debounce from 'lodash.debounce';
import { ArchitectInterface } from './ArchitectInterface';

export function CodeWorkspace() {
    const { callLimb, hub } = useServiceHub();
    const { addNotification } = useNotification();
    const { setAgentStatus, status } = useAgent();
    const editorRef = useRef<any>(null);
    const [code, setCode] = useState(`// Welcome to POG Neural Logic Matrix v6.5
// Real-time AI execution enabled.

async function synthesizeReality() {
  const kernel = await callLimb('system', 'system_query_health');
  
  if (kernel.status === 'optimal') {
    return "Neural state synchronized.";
  }
}

synthesizeReality();`);

    const [complexity, setComplexity] = useState({ score: 0, tier: 'CALCULATING', analysis: 'Pending neural sync...' });
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [refactorResult, setRefactorResult] = useState<any>(null);
    const [explainResult, setExplainResult] = useState<any>(null);
    const [showArchitect, setShowArchitect] = useState(false);
    const [neuralAgents, setNeuralAgents] = useState<any[]>([]);
    const [traces, setTraces] = useState<any[]>([]);
    const [activeCodeTab, setActiveCodeTab] = useState<'matrix' | 'forensic'>('matrix');
    const [comparisonCode, setComparisonCode] = useState('// Archaeological Reference Logic\n// [SELECT ARROW TO COMPARE]');

    const isProcessing = isAnalyzing || status === 'thinking' || status === 'executing';

    // Poll for Neural Agent Status & Traces
    useEffect(() => {
        const fetchSystemState = async () => {
            try {
                // Fetch Agents
                const agentResult = await callLimb('orchestrator', 'orchestrate_get_symphony_status', {}) as any;
                if (agentResult?.status === 'success') {
                    setNeuralAgents(agentResult.agents);
                }

                // Fetch Traces
                const traceList = await hub.stats.getTraces() as any;
                setTraces(traceList);
            } catch (e) {
                // Fallback
                setNeuralAgents([
                    { name: 'Architect', status: 'ACTIVE' },
                    { name: 'Strategist', status: 'ACTIVE' },
                    { name: 'Critic', status: 'IDLE' },
                    { name: 'Symphony', status: 'OFFLINE' }
                ]);
            }
        };
        fetchSystemState();
        const interval = setInterval(fetchSystemState, 3000);
        return () => clearInterval(interval);
    }, [callLimb]);

    const calculateComplexity = async (content: string) => {
        setIsAnalyzing(true);
        try {
            // Use Real Backup Logic (Hybrid approach for speed, but ultimately Truthful to the Limb)
            const result = await callLimb('code', 'code_analyze_complexity', {
                action: 'analyze_complexity',
                payload: { code: content }
            }) as any;

            if (result && result.data) {
                let score = 0;
                let tier = 'LOW';

                // Fallback parsing if the Limb interaction varies
                if (result.data.complexity) score = result.data.complexity;
                else if (result.data.score) score = result.data.score;

                if (score > 10) tier = 'HIGH';
                else if (score > 5) tier = 'MEDIUM';

                setComplexity({ score, tier, analysis: result.data.analysis || 'Neural Analysis Complete' });
            } else {
                // Fallback if limb is busy (local heuristic)
                const lines = content.split('\n').length;
                const score = parseFloat((lines * 0.1).toFixed(1));
                setComplexity({ score, tier: score > 10 ? 'HIGH' : 'LOW', analysis: 'Local Heuristic (Neural Busy)' });
            }

        } catch (e) {
            console.warn("Complexity check failed", e);
            setComplexity(prev => ({ ...prev, tier: 'OFFLINE' }));
        } finally {
            setIsAnalyzing(false);
        }
    };

    // Debounce the heavy neural analysis (1 second delay)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedComplexity = React.useCallback(
        debounce((nextValue: string) => calculateComplexity(nextValue), 1000),
        []
    );

    const handleEditorChange = (v: string | undefined) => {
        const val = v || '';
        setCode(val);
        debouncedComplexity(val);
    };

    const handleEditorDidMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
        monaco.editor.defineTheme('pog-divine', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'comment', foreground: '6272a4', fontStyle: 'italic' },
                { token: 'keyword', foreground: '00f2ff', fontStyle: 'bold' },
                { token: 'string', foreground: 'ff79c6' },
                { token: 'number', foreground: 'bd93f9' },
                { token: 'type', foreground: '8be9fd' },
                { token: 'function', foreground: '50fa7b' }
            ],
            colors: {
                'editor.background': '#00000000',
                'editor.selectionBackground': '#00f2ff30',
                'editorLineNumber.foreground': '#ffffff15',
                'editorCursor.foreground': '#00f2ff',
                'editor.lineHighlightBackground': '#ffffff08'
            }
        });
        monaco.editor.setTheme('pog-divine');
    };

    const handleRefactor = async () => {
        setAgentStatus('thinking', 'Neural Refactoring: Analyzing code structure...');
        setRefactorResult(null);
        try {
            addNotification('info', 'Neural Refactoring: Analyzing code structure...');
            const result = await callLimb('code', 'code_refactor', {
                action: 'refactor',
                payload: { code, filename: 'workspace.ts' }
            }) as any;
            setRefactorResult(result);
            addNotification('success', `Refactoring Complete: ${result.explanation || 'Code optimized'}`);
        } catch (e: any) {
            addNotification('error', `Refactor Failed: ${e.message}`);
        } finally {
            setAgentStatus('idle', 'Neural Matrix Online');
        }
    };

    const handleExplain = async () => {
        if (!editorRef.current) return;
        const selection = editorRef.current.getSelection();
        const selectedCode = selection ? editorRef.current.getModel()?.getValueInRange(selection) : code;

        if (!selectedCode) {
            addNotification('warning', 'No code selected to explain');
            return;
        }

        setAgentStatus('thinking', 'Neural Analysis: Explaining code logic...');
        setExplainResult(null);
        try {
            // Updated message handled by setAgentStatus above
            const result = await callLimb('code', 'code_explain', {
                action: 'explain',
                payload: { code: selectedCode, language: 'typescript' }
            }) as any;
            setExplainResult(result);
            addNotification('success', 'Explanation generated');
        } catch (e: any) {
            addNotification('error', `Explain Failed: ${e.message}`);
        } finally {
            setAgentStatus('idle', 'Neural Matrix Online');
        }
    };

    const handleGenerate = async () => {
        const prompt = window.prompt('Enter code generation prompt:');
        if (!prompt) return;

        setAgentStatus('executing', 'Neural Synthesis: Generating code for prompt...');
        try {
            // Message handled by setAgentStatus
            const result = await callLimb('code', 'code_generate_code', {
                action: 'generate_code',
                prompt,
                payload: { prompt, context: code }
            }) as any;

            if (result.code) {
                setCode(code + '\n\n' + result.code);
                addNotification('success', 'Code generated and inserted');
            }
        } catch (e: any) {
            addNotification('error', `Generation Failed: ${e.message}`);
        } finally {
            setAgentStatus('idle', 'Neural Matrix Online');
        }
    };

    const handleArchitect = async (prompt: string) => {
        setAgentStatus('thinking', 'Neural Architecture: Forging blueprint...');
        try {
            const result = await callLimb('orchestrator', 'orchestrate_architect_solution', {
                action: 'architect_solution',
                prompt,
                payload: { request: prompt }
            }) as any;

            if (result.plan) {
                const blueprintText = result.plan.blueprint?.map((s: any) => `// Step ${s.step}: ${s.description}`).join('\n') || '';
                if (blueprintText) {
                    setCode(code + '\n\n// --- ARCHITECTURAL BLUEPRINT ---\n' + blueprintText);
                    addNotification('success', 'Architectural blueprint materialized');
                } else {
                    addNotification('info', 'Architecture designed, but no specific blueprint returned');
                }
            }
        } catch (e: any) {
            addNotification('error', `Architect Mode Failed: ${e.message}`);
        } finally {
            setAgentStatus('idle', 'Neural Matrix Online');
            setShowArchitect(false);
        }
    };

    return (
        <div className="flex-1 flex gap-10 h-full p-10 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Main Editor Surface */}
            <div className="flex-1 flex flex-col gap-10">
                <div className="flex-1 glass-divine rounded-[50px] border-white/10 shadow-2xl relative overflow-hidden flex flex-col p-10">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-3xl bg-neon-cyan/10 border border-neon-cyan/40 flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(0,242,255,0.15)]">💎</div>
                            <div className="flex flex-col">
                                <span className="text-[12px] font-black uppercase tracking-[0.5em] text-neon-cyan">Logic Matrix v6.5_ULTRA</span>
                                <span className="text-[10px] font-mono text-white/30 uppercase mt-1">Status: Neural_Alignment_Active</span>
                            </div>
                        </div>
                        <div className="flex bg-black/40 p-1.5 rounded-[22px] border border-white/5 mb-2">
                            <button
                                onClick={() => setActiveCodeTab('matrix')}
                                className={`flex-1 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${activeCodeTab === 'matrix' ? 'bg-white text-black shadow-xl' : 'text-white/30 hover:text-white'}`}
                            >
                                Logic Matrix
                            </button>
                            <button
                                onClick={() => setActiveCodeTab('forensic')}
                                className={`flex-1 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${activeCodeTab === 'forensic' ? 'bg-neon-gold/20 text-neon-gold border-neon-gold/50 shadow-[0_0_20px_rgba(255,184,0,0.2)]' : 'text-white/30 hover:text-white'}`}
                            >
                                Forensic
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            {activeCodeTab === 'matrix' ? (
                                <>
                                    <button onClick={handleRefactor} disabled={isProcessing}
                                        className="px-6 py-3 rounded-2xl glass-divine border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all shadow-xl disabled:opacity-50"
                                    >
                                        {isProcessing ? '⏳ Processing' : '⚡ Refactor'}
                                    </button>
                                    <button onClick={handleExplain} disabled={isProcessing}
                                        className="px-6 py-3 rounded-2xl glass-divine border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-neon-magenta hover:border-neon-magenta/40 transition-all shadow-xl disabled:opacity-50"
                                    >
                                        💡 Explain
                                    </button>
                                    <button onClick={handleGenerate} disabled={isProcessing}
                                        className="px-6 py-3 bg-neon-gold/10 hover:bg-neon-gold/20 text-neon-gold border border-neon-gold/30 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl disabled:opacity-50"
                                    >
                                        ✨ Generate
                                    </button>
                                </>
                            ) : (
                                <div className="flex items-center gap-3 text-neon-gold text-[10px] font-black uppercase tracking-widest animate-pulse">
                                    <span>Archeological Comparison Mode Active</span>
                                </div>
                            )}
                            <button onClick={() => setShowArchitect(true)} disabled={isProcessing}
                                className="px-6 py-3 bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan border border-neon-cyan/50 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl disabled:opacity-50 flex items-center gap-2"
                            >
                                <span className="text-lg">🏗️</span>
                                <span>Architect Mode</span>
                            </button>
                        </div>

                    </div>

                    <div className="flex-1 rounded-[40px] overflow-hidden border border-white/10 bg-black/30 p-6 shadow-inner relative flex gap-4">
                        <div className="flex-1 relative">
                            <div className="absolute top-0 right-0 p-4 z-10 text-[8px] font-black text-white/10 uppercase tracking-[0.4em]">Neural Working Space</div>
                            <Editor
                                height="100%"
                                defaultLanguage="typescript"
                                value={code}
                                onMount={handleEditorDidMount}
                                onChange={handleEditorChange}
                                options={{
                                    minimap: { enabled: false },
                                    fontSize: 14,
                                    fontFamily: 'JetBrains Mono, monospace',
                                    scrollBeyondLastLine: false,
                                    automaticLayout: true,
                                    padding: { top: 20, bottom: 20 },
                                    smoothScrolling: true,
                                    cursorBlinking: 'smooth',
                                    cursorSmoothCaretAnimation: 'on',
                                    lineNumbersMinChars: 3,
                                }}
                            />
                        </div>

                        {activeCodeTab === 'forensic' && (
                            <div className="w-[45%] border-l border-white/10 pl-4 relative animate-in slide-in-from-right-10 duration-700">
                                <div className="absolute top-0 right-0 p-4 z-10 text-[8px] font-black text-neon-gold/40 uppercase tracking-[0.4em]">Archeological Truth</div>
                                <Editor
                                    height="100%"
                                    defaultLanguage="typescript"
                                    value={comparisonCode}
                                    options={{
                                        readOnly: true,
                                        minimap: { enabled: false },
                                        fontSize: 12,
                                        fontFamily: 'JetBrains Mono, monospace',
                                        lineNumbersMinChars: 2,
                                        theme: 'vs-dark',
                                        renderSideBySide: false
                                    }}
                                />
                            </div>
                        )}
                    </div>

                </div>

                {/* Terminal Console */}
                <div className="h-48 glass-divine rounded-[50px] p-10 border-white/10 shadow-2xl relative overflow-hidden flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <div className="text-[11px] font-black uppercase tracking-[0.5em] text-white/40">Nexus Output Terminal</div>
                        <div className="text-[10px] font-mono text-neon-cyan animate-pulse">ATOMIC_CLOCK_SYNC: OK</div>
                    </div>
                    <div className="flex-1 font-mono text-[11px] text-white/50 overflow-y-auto space-y-2 custom-scrollbar">
                        {traces.length > 0 ? (
                            traces.map((trace, i) => (
                                <div key={trace.id || i} className="flex gap-4 animate-fade-in">
                                    <span className="text-neon-gold">[{new Date(trace.timestamp).toLocaleTimeString()}]</span>
                                    <span className="text-white/20">{'>>>'}</span>
                                    <span className={trace.layer === 'ai' ? 'text-neon-cyan' : 'text-white/40'}>
                                        {trace.action.toUpperCase()}
                                    </span>
                                    <span className="text-white/30 truncate">
                                        {trace.metadata?.status ? `(${trace.metadata.status})` : ''}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <>
                                <div className="flex gap-4"><span className="text-neon-gold">[00:00:00]</span> <span className="text-white/20">{'>>>'}</span> Initializing Logic Matrix...</div>
                                <div className="flex gap-4"><span className="text-neon-cyan">[00:00:01]</span> <span className="text-white/20">{'>>>'}</span> Connecting to Neural Hub...</div>
                            </>
                        )}
                        <div className="flex items-center gap-2 pt-2">
                            <span className="text-neon-cyan">pog@divine:~$</span>
                            <span className="w-2 h-4 bg-neon-cyan animate-pulse shadow-[0_0_10px_var(--neon-cyan)]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Panel */}
            <div className="w-[340px] flex flex-col gap-10">
                <div className="glass-divine rounded-[50px] p-10 border-white/10 shadow-2xl flex flex-col gap-10 h-full">
                    <div className="text-[11px] font-black tracking-[0.5em] text-white/40 uppercase border-b border-white/5 pb-6">Neural Graph</div>
                    <div className="flex-1 flex flex-col gap-5 overflow-y-auto custom-scrollbar">
                        {neuralAgents.map(agent => (
                            <div key={agent.name} className="p-5 glass-divine rounded-3xl border-white/5 flex items-center justify-between group hover:bg-white/5 transition-all cursor-pointer">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[11px] font-black text-white/70 group-hover:text-neon-cyan uppercase tracking-widest">{agent.name}</span>
                                    <span className="text-[8px] text-white/20 font-mono italic">Subroutine: {agent.status}</span>
                                </div>
                                <div className={`w-2 h-2 rounded-full shadow-[0_0_12px_rgba(74,222,128,0.5)] ${agent.status === 'ACTIVE' || agent.status === 'SYNCING' ? 'bg-green-500' : 'bg-red-500 opacity-20'}`} />
                            </div>
                        ))}
                    </div>
                    <div className="mt-auto p-8 bg-black/40 rounded-[40px] border border-white/10 shadow-xl">
                        <div className="text-[10px] font-black text-white/20 uppercase mb-4 tracking-[0.3em]">Complexity Index</div>
                        <div className="flex items-end gap-3">
                            <div className="text-5xl font-black text-white tracking-tighter">{complexity.score}</div>
                            <div className={`text-[11px] font-black mb-1 p-2 rounded-lg bg-white/5 ${complexity.tier === 'LOW' ? 'text-green-400' : complexity.tier === 'MEDIUM' ? 'text-yellow-400' : 'text-red-400'}`}>{complexity.tier}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Architect Modal Overlay */}
            {showArchitect && (
                <ArchitectInterface
                    onClose={() => setShowArchitect(false)}
                    onArchitect={handleArchitect}
                />
            )}
        </div>
    );
}
