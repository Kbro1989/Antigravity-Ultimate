import React, { useState, useEffect, Suspense } from 'react';
// using global Buffer

if (typeof window !== 'undefined') {
    (window as any).Buffer = Buffer;
}

import { ParticleSystem } from './ParticleSystem';
import { BubbleWorldHUD } from './BubbleWorldHUD';
import { AIDashboardHead } from './AIDashboardHead';
import { WorkspaceSpine } from './WorkspaceSpine';
import { LimbRegistryClient } from '../../../services/LimbRegistryClient';
import { useServiceHub } from '../../hooks';
import { db } from '../InstantProvider';

// Specialized Workspaces (Lazy Loaded to optimize bundle and break circular dependencies)
const CodeWorkspace = React.lazy(() => import('../workspaces/CodeWorkspace').then(m => ({ default: m.CodeWorkspace })));
const CreativeWorkspace = React.lazy(() => import('../workspaces/CreativeWorkspace').then(m => ({ default: m.CreativeWorkspace })));
const AudioWorkspace = React.lazy(() => import('../workspaces/AudioWorkspace').then(m => ({ default: m.AudioWorkspace })));
const FlowWorkspace = React.lazy(() => import('../workspaces/FlowWorkspace').then(m => ({ default: m.FlowWorkspace })));
const Workspace3D = React.lazy(() => import('../workspaces/Workspace3D').then(m => ({ default: m.Workspace3D })));
const MeshWorkspace = React.lazy(() => import('../workspaces/MeshWorkspace').then(m => ({ default: m.MeshWorkspace })));
const EntityWorkspace = React.lazy(() => import('../workspaces/EntityWorkspace').then(m => ({ default: m.EntityWorkspace })));
const PhysicsWorkspace = React.lazy(() => import('../workspaces/PhysicsWorkspace').then(m => ({ default: m.PhysicsWorkspace })));
const WorldWorkspace = React.lazy(() => import('../workspaces/WorldWorkspace').then(m => ({ default: m.WorldWorkspace })));
const SecurityWorkspace = React.lazy(() => import('../workspaces/SecurityWorkspace').then(m => ({ default: m.SecurityWorkspace })));
const NetworkWorkspace = React.lazy(() => import('../workspaces/NetworkWorkspace').then(m => ({ default: m.NetworkWorkspace })));
const AnimationWorkspace = React.lazy(() => import('../workspaces/AnimationWorkspace').then(m => ({ default: m.AnimationWorkspace })));
const DataWorkspace = React.lazy(() => import('../workspaces/DataWorkspace').then(m => ({ default: m.DataWorkspace })));
const VideoWorkspace = React.lazy(() => import('../workspaces/VideoWorkspace').then(m => ({ default: m.VideoWorkspace })));
const ImageWorkspace = React.lazy(() => import('../workspaces/ImageWorkspace').then(m => ({ default: m.ImageWorkspace })));
const MaterialWorkspace = React.lazy(() => import('../workspaces/MaterialWorkspace').then(m => ({ default: m.MaterialWorkspace })));
const OrchestratorWorkspace = React.lazy(() => import('../workspaces/OrchestratorWorkspace').then(m => ({ default: m.OrchestratorWorkspace })));
const GhostWorkspace = React.lazy(() => import('../workspaces/GhostWorkspace').then(m => ({ default: m.GhostWorkspace })));
const RealityWorkspace = React.lazy(() => import('../workspaces/RealityWorkspace').then(m => ({ default: m.RealityWorkspace })));
const QuantumWorkspace = React.lazy(() => import('../workspaces/QuantumWorkspace').then(m => ({ default: m.QuantumWorkspace })));
const SystemWorkspace = React.lazy(() => import('../workspaces/SystemWorkspace').then(m => ({ default: m.SystemWorkspace })));
const FileWorkspace = React.lazy(() => import('../workspaces/FileWorkspace').then(m => ({ default: m.FileWorkspace })));
const LiveWorkspace = React.lazy(() => import('../workspaces/LiveWorkspace').then(m => ({ default: m.LiveWorkspace })));
const RelicWorkspace = React.lazy(() => import('../workspaces/RelicWorkspace').then(m => ({ default: m.RelicWorkspace })));
const DivineWorkspace = React.lazy(() => import('../workspaces/DivineWorkspace').then(m => ({ default: m.DivineWorkspace })));
const ClassicWorkspace = React.lazy(() => import('../workspaces/ClassicWorkspace').then(m => ({ default: m.ClassicWorkspace })));
const ArchitectInterface = React.lazy(() => import('../workspaces/ArchitectInterface').then(m => ({ default: m.ArchitectInterface })));
const InstantWorkspace = React.lazy(() => import('../workspaces/InstantWorkspace').then(m => ({ default: m.InstantWorkspace })));

import { OrchestratorPanel } from '../orchestrator/OrchestratorPanel';
import { SettingsPanel } from './SettingsPanel';
import { useStateManager } from '../../../services/core/StateManager';
import { WorkspaceMode } from '../../../types/workspace';
import '../../styles/hub.css';


interface SystemAlert {
    id: string;
    type: 'info' | 'success' | 'warn' | 'error';
    message: string;
    timestamp: number;
}

// Map Workspace Modes to registered Limb IDs
const LimbMap: Record<string, string> = {
    'creative': 'image',
    '3d': 'mesh',
    'flow': 'orchestrator',
    'filesystem': 'file',
    'live': 'game',
    'classic': 'relic',
    'environment': 'world'
};

export function POGDashboard() {
    const [view, setView] = React.useState<'hub' | 'workspace'>('hub');
    const { activeWorkspace, setActiveWorkspace } = useStateManager();

    // ...
    const { callLimb } = useServiceHub();
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

    const [alerts, setAlerts] = React.useState<SystemAlert[]>([
        { id: 'init', type: 'info', message: 'INITIALIZING SOVEREIGN CORE...', timestamp: Date.now() }
    ]);
    const [alertIndex, setAlertIndex] = React.useState(0);
    const [showOrchestrator, setShowOrchestrator] = React.useState(false);
    const [showSettings, setShowSettings] = React.useState(false);

    // InstantDB Auth Hook
    const { user: instantUser } = db.useAuth();

    // Mouse Tracking Logic
    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };
        const handleDebugClick = (e: MouseEvent) => {
            console.log('[POGDashboard] Global Click Detected at:', e.clientX, e.clientY, 'Target:', e.target);
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleDebugClick);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleDebugClick);
        };
    }, []);

    // Poll for Security Alerts
    React.useEffect(() => {
        const fetchSystemAlerts = async () => {
            try {
                const result = await callLimb('security', 'get_logs', {});
                if (result?.data?.logs) {
                    const newAlerts: SystemAlert[] = result.data.logs
                        .slice(0, 5)
                        .map((l: any, i: number) => ({
                            id: `log-${i}-${Date.now()}`,
                            type: (l.level === 'error' ? 'error' : l.level === 'warn' ? 'warn' : 'info') as any,
                            message: `[${l.level?.toUpperCase() || 'INFO'}] ${l.action}`,
                            timestamp: Date.now()
                        }));

                    if (newAlerts.length > 0) {
                        setAlerts(prev => {
                            const combined = [...newAlerts, ...prev].slice(0, 10);
                            // Simple deduplication by message
                            const unique = combined.filter((v, i, a) => a.findIndex(t => t.message === v.message) === i);
                            return unique;
                        });
                    }
                }
            } catch (e) {
                console.warn('[POGDashboard] Failed to fetch background logs');
            }
        };

        const interval = setInterval(fetchSystemAlerts, 10000);
        fetchSystemAlerts();
        return () => clearInterval(interval);
    }, [callLimb]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setAlertIndex((prev) => (prev + 1) % (alerts.length || 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [alerts]);

    // Sync URL to State (Hash Routing)
    React.useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash; // #/limbs/code or #/code
            if (hash.startsWith('#/limbs/') || hash.startsWith('#/')) {
                const rawId = hash.replace('#/limbs/', '').replace('#/', '');
                // Basic validation or fallback
                if (rawId) {
                    setActiveWorkspace(rawId as WorkspaceMode);
                    setView('workspace');
                }
            } else if (hash === '' || hash === '#') {
                setView('hub');
                setActiveWorkspace(null);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Initial check on mount
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [setActiveWorkspace]);

    const handleSelectWorkspace = (id: WorkspaceMode) => {
        console.log('[POGDashboard] Setting hash for:', id);
        // Update URL, triggering the effect above
        window.location.hash = `/limbs/${id}`;
    };

    const WorkspaceComponents: Record<WorkspaceMode, React.ComponentType<any> | null> = {
        code: CodeWorkspace,
        creative: CreativeWorkspace,
        audio: AudioWorkspace,
        flow: FlowWorkspace,
        pipeline: FlowWorkspace,
        '3d': Workspace3D,
        spatial: Workspace3D,
        mesh: MeshWorkspace,
        entity: EntityWorkspace,
        physics: PhysicsWorkspace,
        animation: AnimationWorkspace,
        world: WorldWorkspace,
        network: NetworkWorkspace,
        security: SecurityWorkspace,
        data: DataWorkspace,
        video: VideoWorkspace,
        image: ImageWorkspace,
        material: MaterialWorkspace,
        orchestrator: OrchestratorWorkspace,
        system: SystemWorkspace,
        filesystem: FileWorkspace,
        live: LiveWorkspace,
        ghost: GhostWorkspace,
        reality: RealityWorkspace,
        quantum: QuantumWorkspace,
        divine: DivineWorkspace,
        relic: RelicWorkspace,
        classic: ClassicWorkspace,
        game: LiveWorkspace,
        rig: MeshWorkspace,
        vfx: CreativeWorkspace,
        environment: WorldWorkspace,
        file: FileWorkspace,
        landscape: WorldWorkspace,
        idauditor: ArchitectInterface,
        versioncontrol: CodeWorkspace,
        instant: InstantWorkspace
    };

    const WorkspaceComponent = activeWorkspace ? WorkspaceComponents[activeWorkspace as WorkspaceMode] : null;

    if (view === 'hub') {
        return (
            <div className="dashboard-root h-screen w-screen overflow-hidden bg-void relative z-0">
                <div className="scanner-sweep" />
                <ParticleSystem layer="background" />
                <BubbleWorldHUD onSelectWorkspace={handleSelectWorkspace} activeWorkspace={activeWorkspace as WorkspaceMode} />

                {/* Status Bar */}
                <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-[600px] z-[100]">
                    <div className="glass-ultra px-8 py-4 rounded-3xl border border-white/5 flex items-center justify-between shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_10px_#00ffff]" />
                            <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] w-80 truncate">
                                {alerts[alertIndex]?.message || 'SOVEREIGN_IDLE'}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => setShowOrchestrator(true)} className="text-[10px] font-black text-neon-cyan/40 hover:text-neon-cyan tracking-widest transition-colors uppercase">Orchestrator</button>
                            <button onClick={() => setShowSettings(true)} className="text-[10px] font-black text-white/20 hover:text-white tracking-widest transition-colors uppercase">Settings</button>
                        </div>
                    </div>
                </div>

                {/* Floating Meta Info */}
                <div className="fixed top-12 left-12 z-[100] pointer-events-none">
                    <div className="text-[10px] font-black text-neon-cyan transform -rotate-90 origin-left opacity-20 tracking-[1em] uppercase">NEURAL_INTERFACE_ACTIVE</div>
                </div>

                {/* Hub View Login/Profile - Top Right */}
                <div className="fixed top-8 right-8 z-[100] flex gap-4">
                    {/* User Profile / Login */}
                    {instantUser ? (
                        <div className="flex items-center gap-3 glass-ultra px-6 py-3 rounded-2xl border border-white/10 shadow-xl animate-in slide-in-from-top-4 duration-700">
                            <img src={(instantUser as any).picture || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} alt="User" className="w-8 h-8 rounded-full border border-white/20" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-white">{instantUser.email?.split('@')[0]}</span>
                                <span className="text-[8px] text-neon-cyan uppercase tracking-wider">OPERATOR</span>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                import('../InstantProvider').then(({ db }) => {
                                    const url = db.auth.createAuthorizationURL({
                                        clientName: "pog-auth-client",
                                        redirectURL: window.location.href,
                                    });
                                    window.location.href = url;
                                });
                            }}
                            className="px-6 py-3 glass-ultra hover:bg-white/10 rounded-2xl border border-white/10 text-[10px] font-black text-white uppercase tracking-[0.2em] transition-all hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba( cyan ,0.2)] animate-in slide-in-from-top-4 duration-700"
                        >
                            Connect Identity
                        </button>
                    )}
                </div>

                {/* Orchestrator Modal */}
                {showOrchestrator && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-12 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
                        <div className="relative w-full max-w-6xl h-[80vh] glass-ultra rounded-[40px] border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]">
                            <button onClick={() => setShowOrchestrator(false)} className="absolute top-8 right-8 w-12 h-12 rounded-full glass hover:bg-white/10 flex items-center justify-center text-white z-50 transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <OrchestratorPanel />
                        </div>
                    </div>
                )}

                {/* Settings Modal */}
                {showSettings && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-12 bg-black/90 backdrop-blur-2xl animate-in zoom-in duration-500">
                        <div className="relative w-full max-w-2xl">
                            <SettingsPanel onClose={() => setShowSettings(false)} />
                        </div>
                    </div>
                )}
            </div>
        );
    }


    return (
        <div className="h-screen w-screen overflow-hidden bg-void relative flex flex-col p-8">
            <ParticleSystem layer="background" />
            <div className="flex-1 flex flex-col gap-6 relative z-10">
                {/* Header with Back Button */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => {
                            window.location.hash = '';
                        }}
                        className="w-16 h-16 rounded-[24px] glass-ultra border border-white/5 flex items-center justify-center text-white/40 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all group shadow-xl"
                    >
                        <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>

                    <div className="flex-1 flex items-center gap-6">
                        <AIDashboardHead workspace={activeWorkspace as WorkspaceMode} />
                        <div className="flex gap-4 glass-ultra px-6 py-3 rounded-2xl border border-white/5 shadow-xl">
                            <button onClick={() => setShowOrchestrator(true)} className="text-[10px] font-black text-neon-cyan/40 hover:text-neon-cyan tracking-widest transition-colors uppercase">Orchestrator</button>
                            <button onClick={() => setShowSettings(true)} className="text-[10px] font-black text-white/20 hover:text-white tracking-widest transition-colors uppercase">Settings</button>
                        </div>
                    </div>
                </div>

                {/* Workspace Area */}
                <div className="flex-1 flex gap-6 overflow-hidden">
                    <div className="w-24 shrink-0 flex flex-col items-center">
                        {activeWorkspace && (
                            <WorkspaceSpine
                                workspace={activeWorkspace as WorkspaceMode}
                                onToolSelect={async (toolId, capability, params) => {
                                    try {
                                        const newAlert: SystemAlert = {
                                            id: `tool-${Date.now()}`,
                                            type: 'info',
                                            message: `EXECUTING ${toolId.toUpperCase()}...`,
                                            timestamp: Date.now()
                                        };
                                        setAlerts(prev => [newAlert, ...prev].slice(0, 10));
                                        // Execute via Unified Limb Registry Client
                                        const result = await LimbRegistryClient.executeTool(activeWorkspace, toolId, {
                                            ...params,
                                            activeFile: (window as any).activeFile, // Hook into global file tracker if available
                                            selection: window.getSelection()?.toString()
                                        });

                                        if (result) {
                                            const successAlert: SystemAlert = {
                                                id: `success-${Date.now()}`,
                                                type: 'success',
                                                message: `${toolId.toUpperCase()} SUCCESS`,
                                                timestamp: Date.now()
                                            };
                                            setAlerts(prev => [successAlert, ...prev].slice(0, 10));
                                        }
                                    } catch (e: any) {
                                        const errorAlert: SystemAlert = {
                                            id: `error-${Date.now()}`,
                                            type: 'error',
                                            message: `ERROR: ${e.message.toUpperCase()}`,
                                            timestamp: Date.now()
                                        };
                                        setAlerts(prev => [errorAlert, ...prev].slice(0, 10));
                                    }
                                }}
                            />
                        )}
                    </div>

                    <div className="flex-1 glass-ultra rounded-[40px] border border-white/5 overflow-hidden relative shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                        <Suspense fallback={
                            <div className="flex flex-col items-center justify-center h-full gap-4">
                                <div className="text-4xl animate-pulse">💠</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20">Syncing Workspace Matrix...</div>
                            </div>
                        }>
                            {WorkspaceComponent ? <WorkspaceComponent /> : (
                                <div className="flex flex-col items-center justify-center h-full gap-4">
                                    <div className="text-4xl animate-pulse">💠</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20">Initializing Interface...</div>
                                </div>
                            )}
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}


