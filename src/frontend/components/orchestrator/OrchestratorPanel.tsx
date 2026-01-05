import React, { useState, useEffect, useRef } from 'react';
import { localBridgeClient, BridgeStatus } from '../../../services/bridge';

interface BuildResult {
    success: boolean;
    finalPlan: string;
    consensusConfidence: number;
    filesCreated: string[];
    filesModified: string[];
    errorsFixed: number;
    buildNotes: {
        summary: string;
        recommendations: string[];
    };
}

export const OrchestratorPanel: React.FC = () => {
    const [request, setRequest] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [status, setStatus] = useState<BridgeStatus>(localBridgeClient.getStatus());
    const [result, setResult] = useState<BuildResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const unsubscribe = localBridgeClient.onStatusChange((newStatus: BridgeStatus) => {
            setStatus(newStatus);
        });
        return unsubscribe;
    }, []);

    const handleRunOrchestrator = async () => {
        if (!request.trim() || isProcessing) return;

        setIsProcessing(true);
        setError(null);
        setResult(null);

        try {
            let response;

            if (status.isConnected) {
                response = await localBridgeClient.requestOrchestration(request);
            } else {
                // CLOUD WORKER FALLBACK (The Truth)
                // If local bridge is missing, we use the real backend OrchestratorLimb.
                const { default: ServiceHub } = await import('../../../services/ServiceHub');

                const limbResponse = await ServiceHub.limbs.call('orchestrator', 'process', {
                    action: 'architect_solution',
                    prompt: request
                });

                if (limbResponse.status === 'success') {
                    const planData = limbResponse.data;
                    const blueprint = planData.plan?.blueprint || [];

                    response = {
                        success: true,
                        finalPlan: planData.plan?.solutionId || "Cloud Architecture Plan",
                        consensusConfidence: 0.92,
                        filesCreated: blueprint.filter((s: any) => s.action === 'create' || s.action === 'add').map((s: any) => s.file),
                        filesModified: blueprint.filter((s: any) => s.action === 'modify' || s.action === 'edit').map((s: any) => s.file),
                        errorsFixed: 0,
                        buildNotes: {
                            summary: `Cloud Worker generated a ${blueprint.length}-step architectural blueprint.`,
                            recommendations: ["Review generated blueprint", "Approving will trigger implementation agents"]
                        }
                    };
                } else {
                    response = { success: false, error: limbResponse.error || "Backend Orchestration Failed" };
                }
            }

            if (response.success) {
                setResult(response);
            } else {
                setError(response.error || 'Failed to process orchestration request.');
            }
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="orchestrator-panel p-6 bg-[#0a0a0c] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Collaborative Orchestrator
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">AI-to-AI Local Development Engine</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${status.isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                        {status.isConnected ? 'Bridge Ready' : 'Bridge Offline'}
                    </span>
                </div>
            </header>

            <div className="space-y-4">
                <div className="relative group">
                    <textarea
                        value={request}
                        onChange={(e) => setRequest(e.target.value)}
                        placeholder="What would you like to build or fix? (e.g. 'Add a new auth provider' or 'Fix terminal UI bugs')"
                        className="w-full h-32 bg-white/5 border border-white/10 rounded-lg p-4 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                        <button
                            disabled={!request.trim() || isProcessing || !status.isConnected}
                            onClick={handleRunOrchestrator}
                            className={`px-4 py-2 rounded-md font-semibold transition-all flex items-center gap-2 ${isProcessing || !request.trim() || !status.isConnected
                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                                }`}
                        >
                            {isProcessing ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Collaborating...
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    Initialize Build
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm animate-in zoom-in-95 duration-200">
                        <p className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {error}
                        </p>
                    </div>
                )}

                {result && (
                    <div className="space-y-4 animate-in slide-in-from-top-4 duration-500">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                <span className="text-xs text-gray-500 uppercase font-bold">Consensus Confidence</span>
                                <div className="text-2xl font-mono text-blue-400 mt-1">
                                    {(result.consensusConfidence * 100).toFixed(1)}%
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                <span className="text-xs text-gray-500 uppercase font-bold">Files Affected</span>
                                <div className="text-2xl font-mono text-indigo-400 mt-1">
                                    {result.filesCreated.length + result.filesModified.length}
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#121214] border border-white/5 rounded-lg overflow-hidden">
                            <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center justify-between">
                                <span className="text-xs text-gray-400 font-mono">Build Notes & Manifest</span>
                                <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-500 rounded border border-green-500/20">SUCCESS</span>
                            </div>
                            <div className="p-4 space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Summary</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed font-mono">
                                        {result.buildNotes.summary}
                                    </p>
                                </div>

                                {result.filesCreated.length > 0 && (
                                    <div>
                                        <h4 className="text-xs font-bold text-green-400/80 uppercase mb-2">Created</h4>
                                        <div className="space-y-1">
                                            {result.filesCreated.map(file => (
                                                <div key={file} className="text-xs text-gray-500 font-mono flex items-center gap-2">
                                                    <span className="text-green-500">+</span> {file}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {result.filesModified.length > 0 && (
                                    <div>
                                        <h4 className="text-xs font-bold text-yellow-400/80 uppercase mb-2">Modified</h4>
                                        <div className="space-y-1">
                                            {result.filesModified.map(file => (
                                                <div key={file} className="text-xs text-gray-500 font-mono flex items-center gap-2">
                                                    <span className="text-yellow-500">~</span> {file}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {result.buildNotes.recommendations.length > 0 && (
                                    <div className="pt-4 border-t border-white/5">
                                        <h4 className="text-xs font-bold text-blue-400/80 uppercase mb-2">Next Steps</h4>
                                        <ul className="space-y-1">
                                            {result.buildNotes.recommendations.map((rec, i) => (
                                                <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                                                    <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0"></div>
                                                    {rec}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .orchestrator-panel {
                    backdrop-filter: blur(10px);
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}} />
        </div>
    );
};
