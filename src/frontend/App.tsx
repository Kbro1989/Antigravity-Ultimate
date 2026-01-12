import React from 'react';
import AppErrorBoundary from './components/AppErrorBoundary';
import { POGDashboard } from './components/hub/POGDashboard';
import { LoginButton } from './components/auth/LoginButton';
import { FloatingAgent } from './components/agents/FloatingAgent';
import { AgentProvider } from './contexts/AgentContext';
import { InstantProvider } from './components/InstantProvider';

export type WorkspaceType = 'code' | 'creative' | 'audio' | 'flow' | '3d';

function POGUltimate() {
    return (
        <AppErrorBoundary>
            <InstantProvider>
                <AgentProvider>
                    <div className="relative">
                        <div className="absolute top-4 right-4 z-50">
                            <LoginButton />
                        </div>
                        <POGDashboard />
                        <FloatingAgent />
                    </div>
                </AgentProvider>
            </InstantProvider>
        </AppErrorBoundary>
    );
}

export default POGUltimate;
