import React from 'react';
import { db } from '../InstantProvider';

export function InstantSyncPanel() {
    const { user, isLoading, error } = db.useAuth();

    return (
        <div className="fixed top-24 right-12 w-80 z-50 pointer-events-none animate-in slide-in-from-right duration-700">
            <div className="glass-ultra p-6 rounded-[32px] border-neon-cyan/20 pointer-events-auto">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-magenta animate-pulse"></div>
                    <div className="text-[10px] font-black text-white/60 tracking-[0.4em] uppercase">InstantDB Sync</div>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                        <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Status</span>
                        <span className={`text-[9px] font-mono ${user ? 'text-neon-cyan' : 'text-white/20'}`}>
                            {isLoading ? 'CONNECTING...' : user ? 'SYNCED' : 'OFFLINE'}
                        </span>
                    </div>

                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                        <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Protocol</span>
                        <span className="text-[9px] font-mono text-white/60">WSS-SECURE</span>
                    </div>

                    {user && (
                        <div className="pt-4 border-t border-white/5">
                            <div className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-2">Active Session</div>
                            <div className="text-[9px] font-mono text-neon-cyan truncate">{user.email}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
