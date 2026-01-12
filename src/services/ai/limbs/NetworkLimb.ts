import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { BaseIntent } from '../AITypes';

export class NetworkLimb extends NeuralLimb {
    /**
     * Ping all registered limbs and return real latency data.
     * Uses Phase XIII health probe infrastructure via LimbRegistry.
     */
    async ping_limbs(params: any) {
        this.enforceCapability(AgentCapability.METRIC_ACCESS);
        const { include_latency_matrix, target_limbs } = params || {};

        // Get real health data from the registry
        const registry = (this as any).limbs || (this as any).registry;
        const startTime = performance.now();

        // Track individual limb latencies
        const latencyMatrix: Record<string, number> = {};
        const limbStatuses: Record<string, any> = {};
        let totalLatency = 0;
        let probeCount = 0;

        // If we have access to the limb registry, use real probes
        if (registry && typeof registry.getHealthReport === 'function') {
            const healthReport = await registry.getHealthReport();

            for (const [limbId, status] of Object.entries(healthReport)) {
                const probeLatency = (status as any)?.latency ?? (performance.now() - startTime);
                latencyMatrix[limbId] = Math.round(probeLatency * 100) / 100;
                limbStatuses[limbId] = (status as any)?.status || 'unknown';
                totalLatency += probeLatency;
                probeCount++;
            }
        } else {
            // Fallback: probe via parent class's limbs reference
            const limbsRef = (this as any).limbs;
            if (limbsRef && typeof limbsRef.call === 'function') {
                const defaultLimbs = target_limbs || ['orchestrator', 'ghost', 'file', 'code', 'relic'];

                for (const limbId of defaultLimbs) {
                    const probeStart = performance.now();
                    try {
                        // Try to get status from limb
                        const limb = limbsRef.getLimb?.(limbId);
                        if (limb && typeof limb.status === 'function') {
                            const status = await limb.status();
                            limbStatuses[limbId] = status?.status || 'online';
                        } else {
                            limbStatuses[limbId] = 'no-probe';
                        }
                    } catch (e) {
                        limbStatuses[limbId] = 'offline';
                    }
                    const probeLatency = performance.now() - probeStart;
                    latencyMatrix[limbId] = Math.round(probeLatency * 100) / 100;
                    totalLatency += probeLatency;
                    probeCount++;
                }
            }
        }

        const avgLatency = probeCount > 0 ? Math.round((totalLatency / probeCount) * 100) / 100 : 0;
        const nodesOnline = Object.values(limbStatuses).filter(s => s === 'online' || s === 'healthy').length;

        return {
            status: 'success',
            timestamp: Date.now(),
            nodes_active: probeCount,
            nodes_online: nodesOnline,
            latency_avg: avgLatency,
            latency_total: Math.round(totalLatency * 100) / 100,
            matrix: include_latency_matrix ? latencyMatrix : undefined,
            health: limbStatuses
        };
    }

    async fetch(params: any) {
        this.enforceCapability(AgentCapability.METRIC_ACCESS);
        const { url, method, body } = params;
        const response = await fetch(url, { method, body: JSON.stringify(body) });
        return { status: 'success', data: await response.json() };
    }

    async check_health(params: any) {
        return { status: 'success', online: true };
    }
}
