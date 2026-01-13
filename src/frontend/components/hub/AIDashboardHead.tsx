import React, { useState, useEffect } from 'react';
import { useStateManager } from '../../../services/core/StateManager';
import { WorkspaceMode } from '../../../services/core/ModeManager';
import { usePresence } from '../../hooks/usePresence';
import { ModelSelector } from './ModelSelector';

import { db } from '../InstantProvider';

interface AIDashboardHeadProps {
    workspace: WorkspaceMode | null;
}

export function AIDashboardHead({ workspace }: AIDashboardHeadProps) {
    const state = useStateManager();
    const { users } = usePresence('global');
    const collaboratorsCount = Object.keys(users).length;
    const [showModels, setShowModels] = useState(false);
    const [localStats, setLocalStats] = useState({
        tokensUsed: 0,
        tokensLimit: 10000,
        cost: 0.00,
        requests: 0,
        latency: 45
    });

    // Real Service Health (Mocked for now, but wired for future logic)
    const [serviceHealth, setServiceHealth] = useState<Record<string, boolean>>({
        'KV': true, 'R2': true, 'D1': true, 'DO': true, 'AI': true
    });

    // InstantDB User Hook
    const { user: instantUser } = db.useAuth();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        if (instantUser) {
            setUser({
                name: instantUser.email?.split('@')[0] || 'Unknown Operator',
                picture: (instantUser as any).picture || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y', // Fallback
                email: instantUser.email
            });
        }
    }, [instantUser]);

    // Stats Fetching Logic
    useEffect(() => {


        const fetchStats = async () => {
            try {
                // Fetch real stats from SessionAgent via ServiceHub
                const { default: ServiceHub } = await import('../../../services/ServiceHub');

                const stats = await ServiceHub.stats.get() as any;
                setLocalStats((prev: any) => ({
                    ...prev,
                    tokensUsed: stats.tokensUsed || 0,
                    tokensLimit: stats.tokensLimit || 100000,
                    cost: stats.cost || 0.00,
                    requests: stats.requests || 0,
                    latency: Date.now() - startFetchTime
                }));

                // Here we would confirm service health via ping if endpoints existed
                // const health = await ServiceHub.checkHealth();
                // setServiceHealth(health);
            } catch (e) {
                console.warn('[Dashboard] Stats fetch failed', e);
                // setServiceHealth(prev => ({ ...prev, 'AI': false })); // Example
            }
        };

        let startFetchTime = 0;
        const interval = setInterval(() => {
            startFetchTime = Date.now();
            fetchStats();
        }, 5000); // refresh every 5s

        // Initial fetch
        startFetchTime = Date.now();
        fetchStats();

        return () => {
            clearInterval(interval);
        };
    }, []);

    const progress = (localStats.tokensUsed / localStats.tokensLimit) * 100;

    return (
        <div className="fixed top-8 left-8 right-8 z-[200] pointer-events-none">
            <div className="glass-ultra px-10 py-6 rounded-[32px] flex items-center justify-between border-white/5 shadow-2xl fade-in relative mb-6 pointer-events-auto">
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.3)] shrink-0">
                        <span className="text-white text-xl font-black">AI</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.4em]">Sovereign Node</div>
                        <div className="text-xl font-black text-white tracking-widest flex items-center gap-3">
                            {workspace ? workspace.toUpperCase() : 'OPAL_CORE'}
                            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00ffff]" />
                        </div>
                    </div>

                    <div className="h-10 w-px bg-white/10 mx-4" />

                    <div className="waveform-enhanced">
                        {[...Array(16)].map((_, i) => (
                            <div
                                key={i}
                                className="wave-bar"
                                style={{
                                    animationDelay: `${i * 0.08}s`,
                                    animationDuration: `${1 + Math.random() * 0.5}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    {/* User Profile / Login */}
                    {user ? (
                        <div className="flex items-center gap-3 glass-dark px-4 py-2 rounded-2xl border border-white/10">
                            <img src={user.picture} alt="User" className="w-8 h-8 rounded-full border border-white/20" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-white">{user.name}</span>
                                <span className="text-[8px] text-neon-cyan uppercase tracking-wider">OPERATOR</span>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                // InstantDB Auth Redirect Flow
                                import('../InstantProvider').then(({ db }) => {
                                    const url = db.auth.createAuthorizationURL({
                                        clientName: "pog-auth-client",
                                        redirectURL: window.location.href,
                                    });
                                    window.location.href = url;
                                });
                            }}
                            className="px-6 py-3 glass-ultra hover:bg-white/10 rounded-2xl border border-white/10 text-[10px] font-black text-white uppercase tracking-[0.2em] transition-all hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba( cyan ,0.2)]"
                        >
                            Connect Identity
                        </button>
                    )}

                    {/* Cloudflare Service Matrix */}
                    <div className="flex items-center gap-2 px-6 py-3 glass-dark rounded-2xl border border-cyan-500/20">
                        {['KV', 'R2', 'D1', 'DO', 'AI'].map(service => (
                            <div key={service} className="group relative">
                                <div className={`text-[10px] font-black px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400/80 group-hover:text-cyan-400 transition-colors ${!serviceHealth[service] ? 'opacity-50 grayscale' : ''}`}>
                                    {service}
                                </div>
                                <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${serviceHealth[service] ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-red-500 shadow-[0_0_10px_red]'}`} />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-end gap-1">
                        <div className="text-[9px] text-white/20 font-black uppercase tracking-[0.2em]">Opal-Sync Latency</div>
                        <div className="mono text-green-400 text-sm font-bold">{localStats.latency}ms</div>
                    </div>

                    <button
                        onClick={() => setShowModels(true)}
                        className="w-12 h-12 rounded-2xl glass-ultra hover:bg-white/5 border border-white/10 flex items-center justify-center transition-all group shadow-xl"
                        title="Configure AI Models"
                    >
                        <span className="material-icons text-white/40 group-hover:text-cyan-400 group-hover:rotate-90 transition-all duration-500">settings</span>
                    </button>
                </div>
            </div>

            {showModels && <ModelSelector onClose={() => setShowModels(false)} />}
        </div>
    );
}
