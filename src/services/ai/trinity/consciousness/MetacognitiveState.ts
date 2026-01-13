import { Env, ProductionMetrics } from '../types';

export class EmergencyHaltError extends Error {
    constructor(public snapshot: any) {
        super('Emergency halt triggered by metacognitive safety protocol');
        this.name = 'EmergencyHaltError';
    }
}

export interface MetacognitiveMetric {
    limbPath: string[];
    routingPenalty: number;
    validationErrors: string[];
    latency: number;
    timestamp: number;
    confidence: number;
    tokensGenerated: number;
}

export class MetacognitiveState {
    private history: MetacognitiveMetric[] = [];
    private startTime: number;
    private totalHaltCount: number = 0;

    constructor(
        private env: Env,
        private config: {
            haltThreshold?: number;
            haltSustainMs?: number;
            hysteresisGap?: number;
            maxHistorySize?: number;
        } = {}
    ) {
        this.startTime = Date.now();
    }

    /**
     * Reflects on an execution result and updates the system's "mental model".
     */
    reflect(metrics: MetacognitiveMetric): void {
        const maxHistory = this.config.maxHistorySize || 1000;

        this.history.push(metrics);
        if (this.history.length > maxHistory) {
            this.history.shift();
        }

        ProductionMetrics.logIntrospection({
            metrics,
            historySize: this.history.length,
            aggregateConfidence: this.calculateAggregateConfidence()
        });

        // Check for systemic degradation
        if (this.shouldTriggerEmergencyHalt(metrics)) {
            this.totalHaltCount++;
            ProductionMetrics.logEmergencyHalt({
                reason: 'Low confidence or persistent validation errors',
                metrics,
                timestamp: Date.now()
            });

            throw new EmergencyHaltError({
                lastMetrics: metrics,
                systemUptime: Date.now() - this.startTime,
                haltCount: this.totalHaltCount
            });
        }
    }

    private calculateAggregateConfidence(): number {
        if (this.history.length === 0) return 1.0;
        const sum = this.history.reduce((acc, m) => acc + m.confidence, 0);
        return sum / this.history.length;
    }

    private shouldTriggerEmergencyHalt(latest: MetacognitiveMetric): boolean {
        const threshold = this.config.haltThreshold || 0.3;

        // Immediate halt if confidence is critically low
        if (latest.confidence < (threshold * 0.5)) return true;

        // Halt if aggregate confidence over last 10 entries is too low
        if (this.history.length >= 10) {
            const recentHistory = this.history.slice(-10);
            const avg = recentHistory.reduce((acc, m) => acc + m.confidence, 0) / 10;
            if (avg < threshold) return true;
        }

        return false;
    }

    /**
     * Returns a health summary for introspection
     */
    getHealth() {
        return {
            healthy: this.calculateAggregateConfidence() > (this.config.haltThreshold || 0.3),
            metacognitive: {
                uptime: Date.now() - this.startTime,
                totalGenerations: this.history.length,
                haltCount: this.totalHaltCount,
                averageConfidence: this.calculateAggregateConfidence()
            }
        };
    }

    /**
     * Returns the current state for persistence.
     */
    getState() {
        return {
            history: this.history,
            totalHaltCount: this.totalHaltCount,
            startTime: this.startTime
        };
    }

    /**
     * Hydrates the state from a saved snapshot.
     */
    hydrate(state: any) {
        if (!state) return;
        this.history = state.history || [];
        this.totalHaltCount = state.totalHaltCount || 0;
        this.startTime = state.startTime || Date.now();
    }
}
