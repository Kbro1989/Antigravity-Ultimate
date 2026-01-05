import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { WorkspaceMode } from '../../types/workspace';

export type AppMode = 'online' | 'offline' | 'hybrid';

interface AppMetrics {
    tokensUsed: number;
    tokensLimit: number;
    cost: number;
    latency: number;
    requests: number;
}

interface AppState {
    mode: AppMode;
    activeWorkspace: WorkspaceMode | null;
    metrics: AppMetrics;
    lockdown: boolean;

    // Actions
    setMode: (mode: AppMode) => void;
    setActiveWorkspace: (workspace: WorkspaceMode | null) => void;
    updateMetrics: (update: Partial<AppMetrics>) => void;
    resetMetrics: () => void;
    setLockdown: (active: boolean) => void;
}

export const useStateManager = create<AppState>()(
    devtools(
        (set) => ({
            mode: 'hybrid',
            activeWorkspace: null,
            lockdown: false,
            metrics: {
                tokensUsed: 0,
                tokensLimit: 1000000,
                cost: 0,
                latency: 0,
                requests: 0
            },

            setMode: (mode) => set({ mode }),
            setActiveWorkspace: (workspace) => set({ activeWorkspace: workspace }),
            updateMetrics: (update) => set((state) => ({
                metrics: { ...state.metrics, ...update }
            })),
            resetMetrics: () => set({
                metrics: {
                    tokensUsed: 0,
                    tokensLimit: 1000000,
                    cost: 0,
                    latency: 0,
                    requests: 0
                }
            }),
            setLockdown: (lockdown) => set({ lockdown })
        }),
        { name: 'POGState' }
    )
);
