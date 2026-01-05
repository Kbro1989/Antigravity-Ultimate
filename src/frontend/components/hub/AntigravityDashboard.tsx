import React, { useState, useEffect } from 'react';
import { ParticleSystem } from './ParticleSystem';
import { BubbleWorldHUD } from './BubbleWorldHUD';
import { AIDashboardHead } from './AIDashboardHead';
import { WorkspaceSpine } from './WorkspaceSpine';
import { CodeWorkspace } from '../workspaces/CodeWorkspace';
import { CreativeWorkspace } from '../workspaces/CreativeWorkspace';
import { AudioWorkspace } from '../workspaces/AudioWorkspace';
import { FlowWorkspace } from '../workspaces/FlowWorkspace';
import { Workspace3D } from '../workspaces/Workspace3D';
import { useStateManager } from '../../../services/core/StateManager';
import { WorkspaceMode } from '../../../services/core/ModeManager';
import '../../styles/hub.css';

// Renamed from POGDashboard to avoid collision with the active dashboard
export function AntigravityDashboard() {
    const [view, setView] = useState<'hub' | 'workspace'>('hub');
    const { activeWorkspace, setActiveWorkspace } = useStateManager();
    const alerts = ["SYSTEM OPTIMAL", "NEURAL LINK ESTABLISHED", "CREATIVE MODE READY"];
    const [alertIndex, setAlertIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAlertIndex((prev) => (prev + 1) % alerts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleSelectWorkspace = (workspace: WorkspaceMode) => {
        setActiveWorkspace(workspace);
        setTimeout(() => setView('workspace'), 400);
    };

    const handleBackToHub = () => {
        setView('hub');
        setTimeout(() => setActiveWorkspace(null), 400);
    };

    const WorkspaceComponents: Partial<Record<WorkspaceMode, React.ComponentType>> = {
        code: CodeWorkspace,
        creative: CreativeWorkspace,
        audio: AudioWorkspace,
        flow: FlowWorkspace,
        '3d': Workspace3D
    };

    const WorkspaceComponent = activeWorkspace ? WorkspaceComponents[activeWorkspace as WorkspaceMode] : null;

    return (
        <div className="dashboard-root">
            {/* Background Layers */}
            <div className="cosmic-void" />
            <div className="grid-matrix" />
            <ParticleSystem />
            <div className="scanner-sweep" />

            {/* HUD Corners */}
            <div className="hud-bracket tl" />
            <div className="hud-bracket tr" />
            <div className="hud-bracket bl" />
            <div className="hud-bracket br" />

            {/* Top Status Bar with Alert Ticker */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
                <div className="glass-ultra px-8 py-3 rounded-full flex items-center gap-8 text-xs min-w-[600px]">
                    <div className="flex items-center gap-3 shrink-0">
                        <div className="status-pulse bg-green-400" style={{ backgroundColor: '#00ff80' }} />
                        <span className="font-bold">SYSTEM ONLINE</span>
                    </div>

                    {/* Rotating Alert Ticker */}
                    <div className="alert-ticker flex-1 overflow-hidden whitespace-nowrap relative">
                        <div className="alert-scroll flex gap-12">
                            <span className="text-cyan-400 font-bold">● {alerts[alertIndex]}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 border-l border-cyan-500/20 pl-6">
                        <span className="mono font-bold text-cyan-400">ULTIMATE v6.0</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-screen">
                {view === 'hub' ? (
                    <BubbleWorldHUD
                        onSelectWorkspace={handleSelectWorkspace}
                        activeWorkspace={activeWorkspace as WorkspaceMode}
                    />
                ) : (
                    <div className="h-full flex flex-col p-6 animate-fade-in">
                        <button
                            onClick={handleBackToHub}
                            className="fixed top-28 left-6 z-40 btn-neural flex items-center gap-2"
                        >
                            <span>←</span>
                            <span className="text-xs">NEURAL HUB</span>
                        </button>

                        <div className="flex flex-col h-full gap-4">
                            <AIDashboardHead workspace={activeWorkspace as WorkspaceMode} />

                            <div className="flex-1 flex overflow-hidden">
                                {activeWorkspace && <WorkspaceSpine workspace={activeWorkspace as WorkspaceMode} />}
                                <div className="flex-1 ml-28 glass-dark rounded-2xl border border-cyan-500/20 overflow-hidden relative">
                                    {WorkspaceComponent && <WorkspaceComponent />}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Info Bar */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-ultra px-8 py-3 rounded-full">
                <div className="flex items-center gap-10 text-xs mono">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                        <span>HYBRID MODE</span>
                    </div>
                    <div className="text-cyan-400">ACTIVE: {activeWorkspace ? activeWorkspace.toUpperCase() : 'NEURAL CORE'}</div>
                    <div>COST: $0.00</div>
                    <div className="flex items-center gap-2">
                        <span className="opacity-50">v6.0.4-ULTIMATE</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
