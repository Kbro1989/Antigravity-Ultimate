
import React, { useState, useEffect, Suspense } from 'react';
import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
import { usePresence } from '../../hooks';

// Arsenal Components (Lazy loaded for better performance)
const N8NWorkflow = React.lazy(() => import('../ai/pipelines/N8NWorkflow'));
const ShaderGraph = React.lazy(() => import('../ai/pipelines/ShaderGraph'));
const BehaviorTreeEditor = React.lazy(() => import('../ai/pipelines/BehaviorTreeEditor'));

const LoadingScreen = () => (
    <div className="flex flex-col items-center justify-center h-full gap-4 bg-void">
        <div className="text-4xl animate-pulse">💠</div>
        <div className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20">Syncing Workspace Matrix...</div>
    </div>
);

export function FlowWorkspace() {
    const [activeTab, setActiveTab] = useState('pipelines');
    const { users, updateTab } = usePresence('flow-workspace');

    useEffect(() => {
        updateTab(activeTab);
    }, [activeTab, updateTab]);

    const renderContent = () => {
        switch (activeTab) {
            case 'pipelines':
                return (
                    <ReactFlowProvider>
                        <N8NWorkflow />
                    </ReactFlowProvider>
                );
            case 'behavior':
                return <BehaviorTreeEditor onSave={(tree) => console.log('[POG] Tree Saved:', tree)} />;
            case 'shaders':
                return <ShaderGraph onCompile={(glsl) => console.log('[POG] GLSL Compiled:', glsl)} />;
            default:
                return (
                    <div className="flex items-center justify-center h-full text-white/20 uppercase font-black text-xs tracking-widest">
                        Workspace Under Construction
                    </div>
                );
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-black/40 relative overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between backdrop-blur-3xl bg-white/5 h-20 shrink-0">
                <div className="flex items-center gap-6">
                    <div className="text-xl font-black italic tracking-tighter text-white/20 px-4 border-r border-white/5">ARSENAL.SYSTEM</div>
                    <div className="flex gap-2">
                        {[
                            { id: 'pipelines', label: 'Pipelines', icon: '⚡' },
                            { id: 'behavior', label: 'Behaviors', icon: '🧠' },
                            { id: 'shaders', label: 'Shaders', icon: '🎨' }
                        ].map(t => (
                            <button
                                key={t.id}
                                onClick={() => setActiveTab(t.id)}
                                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border flex items-center gap-2 ${activeTab === t.id
                                        ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.2)]'
                                        : 'bg-white/5 border-transparent text-white/30 hover:text-white/60 hover:border-white/10'
                                    }`}
                            >
                                <span>{t.icon}</span>
                                <span>{t.label}</span>
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
                    <div className="px-3 py-1 glass rounded-full text-[8px] font-black text-neon-magenta animate-pulse border border-neon-magenta/20">NEURAL LINK SYNCED</div>
                </div>
            </div>

            <div className="flex-1 relative overflow-hidden">
                <Suspense fallback={<LoadingScreen />}>
                    {renderContent()}
                </Suspense>
                <div className="absolute bottom-6 right-6 pointer-events-none text-[9px] font-black tracking-[0.6em] text-white/5 uppercase z-0">
                    Ultimate v6.5.ARSENAL_CORE
                </div>
            </div>
        </div>
    );
}

export default FlowWorkspace;
