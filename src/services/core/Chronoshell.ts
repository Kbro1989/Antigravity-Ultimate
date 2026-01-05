/**
 * Chronoshell - Temporal Debugging for AI Reasoning and System Actions.
 * Provides a "Time-Traveling" view of how the system reached a state.
 */

import { AgentLaw } from '../ai/AgentConstitution';
import { limitObserverClient } from './ObservabilityLimiterClient';

export interface TraceRecord {
    id: string;
    timestamp: number;
    layer: 'ai' | 'system' | 'frontend' | 'bridge';
    action: string;
    metadata: any;
    reasoning?: string;
}

export class Chronoshell {
    private static instance: Chronoshell;
    private traces: TraceRecord[] = [];
    private persistHandler: ((record: TraceRecord) => Promise<void>) | null = null;
    private readonly MAX_TRACES = 1000;

    private constructor() { }

    public static getInstance(): Chronoshell {
        if (!Chronoshell.instance) {
            Chronoshell.instance = new Chronoshell();
        }
        return Chronoshell.instance;
    }

    public setPersistenceHandler(handler: (record: TraceRecord) => Promise<void>) {
        this.persistHandler = handler;
    }

    /**
     * Records a trace of an action
     */
    public logTrace(record: Omit<TraceRecord, 'id' | 'timestamp'>) {
        const fullRecord: TraceRecord = {
            id: `trace-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            timestamp: Date.now(),
            ...record
        };

        this.traces.push(fullRecord);

        // Capped LRU for in-memory traces
        if (this.traces.length > this.MAX_TRACES) {
            this.traces.shift();
        }

        // Enforce Law 4: Ensure transparency
        // Rate Limited to protect Quota
        if (limitObserverClient.canEmit('trace')) {
            console.log(`[Chronoshell] ${fullRecord.layer.toUpperCase()} | ${fullRecord.action}`);
        }

        if (this.persistHandler) {
            this.persistHandler(fullRecord).catch(err => {
                // Errors should probably be logged sparingly
                if (limitObserverClient.canEmit('trace')) console.error('[Chronoshell] Persistence Failed:', err);
            });
        }
    }

    public getTraces(limit: number = 50): TraceRecord[] {
        return this.traces.slice(-limit).reverse();
    }

    /**
     * Temporal Analysis: "Why did file X change?"
     */
    public findActionReason(actionName: string): TraceRecord | undefined {
        return this.traces.find(t => t.action === actionName);
    }
}

export const chronoshell = Chronoshell.getInstance();
