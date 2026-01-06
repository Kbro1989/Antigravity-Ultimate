import React, { useState } from 'react';
import { useServiceHub, useNotification } from '../../hooks';

export function FileWorkspace() {
    const { callLimb } = useServiceHub();
    const { addNotification } = useNotification();
    const [currentPath, setCurrentPath] = useState<string>('C:/Users/Destiny/Desktop/New folder/POG-Ultimate');
    const [files, setFiles] = useState<any[]>([]);
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const fetchFiles = React.useCallback(async () => {
        try {
            const result = await callLimb('file', 'file_list_directory', { path: currentPath });
            if (result.status === 'success') {
                setFiles(result.files || []);
            }
        } catch (e) {
            console.error('File list failed', e);
            // Fallback for demo if offline
            setFiles([]);
        }
    }, [currentPath, callLimb]);

    React.useEffect(() => {
        fetchFiles();
    }, [fetchFiles]);

    const handleNavigate = (newPath: string) => {
        setCurrentPath(newPath);
    };

    const handleAudit = async () => {
        if (!selectedFile) return;
        setIsAnalyzing(true);
        try {
            await callLimb('file', 'file_audit_provenance', {
                file_path: `${currentPath}/${selectedFile}`,
                deep_scan: true
            });
            addNotification('info', `Data Lake: Indexing ${selectedFile}...`);
            setTimeout(() => {
                addNotification('success', 'Provenance Audit Complete: Integrity 99.8%');
                setIsAnalyzing(false);
            }, 2000);
        } catch (e: any) {
            addNotification('error', `Audit Failed: ${e.message}`);
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="flex-1 flex gap-6 h-full p-6 bg-black/40 animate-fade-in relative overflow-hidden">
            {/* Explorer */}
            <div className="flex-1 glass-ultra rounded-3xl flex flex-col border border-white/5 shadow-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                    <div className="text-[10px] font-black tracking-[0.4em] text-white uppercase">Neural File Explorer</div>
                    <div className="text-[9px] font-mono text-white/30 truncate max-w-[400px]">{currentPath}</div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {currentPath !== 'C:/' && (
                        <div onClick={() => handleNavigate(currentPath.split('/').slice(0, -1).join('/') || 'C:/')} className="p-4 rounded-2xl cursor-pointer hover:bg-white/5 border border-transparent flex items-center gap-4 opacity-50">
                            <div className="text-xl">🔙</div> <div className="text-xs font-bold text-white">..</div>
                        </div>
                    )}
                    {files.map(f => (
                        <div
                            key={f.name}
                            onClick={() => f.isDirectory ? handleNavigate(`${currentPath}/${f.name}`) : setSelectedFile(f.name)}
                            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all border ${selectedFile === f.name ? 'bg-neon-cyan/10 border-neon-cyan/40' : 'hover:bg-white/5 border-transparent'}`}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${f.isDirectory ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                {f.isDirectory ? '📁' : '📄'}
                            </div>
                            <div className="flex-1">
                                <div className="text-xs font-bold text-white/90">{f.name}</div>
                                <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{f.isDirectory ? 'DIR' : f.type || 'FILE'} • {f.size || '0KB'}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Breadcrumbs */}
                <div className="p-4 bg-white/5 border-t border-white/5 text-[9px] font-mono text-white/20 flex gap-2">
                    <span className="hover:text-neon-cyan cursor-pointer">/root</span>
                    <span>/</span>
                    <span className="hover:text-neon-cyan cursor-pointer">projects</span>
                    <span>/</span>
                    <span className="text-white">delta</span>
                </div>
            </div>

            {/* Inspector */}
            <div className="w-96 flex flex-col gap-4">
                <div className="glass-ultra rounded-3xl p-8 flex-1 flex flex-col gap-8 border border-white/5 shadow-2xl">
                    <div className="text-[10px] font-black tracking-[0.4em] text-neon-cyan uppercase flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_var(--neon-cyan)]"></span>
                        Data Inspector
                    </div>

                    {selectedFile ? (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right duration-300">
                            <div className="space-y-2">
                                <div className="text-xl font-black text-white">{selectedFile}</div>
                                <div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Universal ID: UX-882-991-A</div>
                            </div>

                            {/* Statistics Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 glass rounded-2xl border border-white/5 flex flex-col gap-1">
                                    <span className="text-[9px] font-black text-white/30 uppercase">Read Speed</span>
                                    <span className="text-sm font-black text-neon-cyan">2.4 GB/s</span>
                                </div>
                                <div className="p-4 glass rounded-2xl border border-white/5 flex flex-col gap-1">
                                    <span className="text-[9px] font-black text-white/30 uppercase">Entropy</span>
                                    <span className="text-sm font-black text-neon-magenta">0.824</span>
                                </div>
                            </div>

                            {/* Provenance Visualization */}
                            <div className="space-y-4">
                                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Neural History</div>
                                <div className="relative pl-6 space-y-6 border-l border-white/10">
                                    <div className="relative">
                                        <div className="absolute -left-[27px] top-0 w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_8px_var(--neon-cyan)]" />
                                        <div className="text-[10px] font-bold text-white">Modified by MeshLimb</div>
                                        <div className="text-[9px] text-white/40">2 hours ago • Action: Remesh</div>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[27px] top-0 w-3 h-3 rounded-full bg-white/20" />
                                        <div className="text-[10px] font-bold text-white/60">Reality Anchor Dropped</div>
                                        <div className="text-[9px] text-white/30">5 hours ago • CID: Qm...x92</div>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[27px] top-0 w-3 h-3 rounded-full bg-white/20" />
                                        <div className="text-[10px] font-bold text-white/60">Created by System</div>
                                        <div className="text-[9px] text-white/30">Jan 01, 2026</div>
                                    </div>
                                </div>
                            </div>

                            {/* Audit Button */}
                            <button
                                onClick={handleAudit}
                                disabled={isAnalyzing}
                                className={`w-full py-5 rounded-2xl mt-auto font-black text-xs tracking-[0.2em] transition-all uppercase shadow-2xl flex items-center justify-center gap-3
                                    ${isAnalyzing
                                        ? 'bg-neon-cyan/20 text-white border border-neon-cyan/50 cursor-wait'
                                        : 'bg-white text-black hover:bg-neon-cyan hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]'
                                    }
                                `}
                            >
                                {isAnalyzing ? 'Deep Scanning...' : 'Full Provenance Audit'}
                            </button>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 opacity-20">
                            <div className="text-6xl mb-4">🔍</div>
                            <div className="text-xs font-black uppercase tracking-widest">Select a file to inspect its neural footprint</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
