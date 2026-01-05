
import { limitObserverClient } from './ObservabilityLimiterClient';

export interface NexusLog {
    taskId: string;
    step: string;
    status: 'success' | 'failure' | 'pending';
    timestamp: number;
    metadata?: any;
}

export const logTask = async (log: NexusLog) => {
    if (limitObserverClient.canEmit('normal')) {
        console.log(`[Nexus] Task ${log.taskId}: ${log.step} (${log.status})`);
    }
};

export const logSecurityEvent = (event: string, data: any) => {
    // Security events bypass rate limiter? Or use reserved tokens?
    // For now, treat them equally to prevent DoS via log spam.
    if (limitObserverClient.canEmit('critical')) {
        console.warn(`[Security] ${event}`, data);
    }
};

export const logAIAccess = (model: string, prompt: string, success: boolean) => {
    if (limitObserverClient.canEmit('normal')) {
        console.log(`[AI Access] ${model} - Success: ${success}`);
    }
};

export default { logTask, logSecurityEvent, logAIAccess };
