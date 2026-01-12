import React from 'react';
import { db } from '../InstantProvider';
import { AppSchema } from '../../../services/data/instant.schema';
import { InstaQLEntity } from '@instantdb/react';

export const InstantWorkspace: React.FC = () => {
    const { isLoading, error, data } = db.useQuery({
        metabolism: {},
        traces: { $: { limit: 10, order: { serverTime: 'desc' } } } // Adjust field name if needed
    });

    if (isLoading) return <div className="p-8 text-white">Loading InstantDB...</div>;
    if (error) return <div className="p-8 text-red-500">Error: {error.message}</div>;

    const metabolism = data.metabolism;
    const traces = data.traces;

    return (
        <div className="p-6 h-full overflow-auto bg-slate-900 text-slate-100 font-mono">
            <h1 className="text-2xl font-bold mb-6 text-blue-400 border-b border-blue-800 pb-2">
                InstantDB Offloading Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Metabolism Section */}
                <section className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <h2 className="text-xl font-semibold mb-4 text-emerald-400">Metabolic Status</h2>
                    <div className="space-y-2">
                        {metabolism.map((m: any) => (
                            <div key={m.id} className="p-3 bg-slate-900/80 rounded border border-slate-700">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">User:</span>
                                    <span>{m.userId}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Tokens:</span>
                                    <span className="text-emerald-300">{m.cfTokens}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Gemini:</span>
                                    <span className="text-blue-300">${m.geminiBudget?.toFixed(2)}</span>
                                </div>
                                <div className="mt-2 text-[10px] text-slate-500 text-right">
                                    Updated: {new Date(m.updatedAt).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Traces Section */}
                <section className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <h2 className="text-xl font-semibold mb-4 text-purple-400">Real-time Traces</h2>
                    <div className="space-y-2">
                        {traces.map((t: any) => (
                            <div key={t.id} className="p-2 text-xs bg-slate-950 rounded border-l-2 border-purple-500">
                                <div className="flex justify-between opacity-70">
                                    <span>{t.layer}</span>
                                    <span>{new Date(t.timestamp).toLocaleTimeString()}</span>
                                </div>
                                <div className="font-bold text-slate-200 mt-1">{t.action}</div>
                                {t.reasoning && (
                                    <div className="mt-1 text-slate-400 italic">"{t.reasoning.slice(0, 100)}..."</div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default InstantWorkspace;
