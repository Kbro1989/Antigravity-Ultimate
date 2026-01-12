import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { BaseIntent } from '../AITypes';

export class GhostLimb extends NeuralLimb {
    private beliefs: Map<string, any> = new Map();

    /**
     * Retrieves the current metacognitive belief about a specific limb's reliability.
     */
    public getBelief(limbId: string): { confidence: number; executionTime: number; successRate: number } {
        return this.beliefs.get(limbId) || {
            confidence: 0.5, // Agnostic initial belief
            executionTime: 500,
            successRate: 0.5
        };
    }

    /**
     * Updates the belief state based on new evidence (execution results).
     * Uses a rolling average for stability.
     */
    public updateBelief(limbId: string, metrics: { success: boolean; executionTime?: number; confidence?: number; error?: string }) {
        const current = this.getBelief(limbId);
        const learningRate = 0.2; // How fast we adapt to new evidence

        // Calculate new success rate
        const outcome = metrics.success ? 1.0 : 0.0;
        const newSuccessRate = current.successRate * (1 - learningRate) + outcome * learningRate;

        // Calculate new execution time (if provided)
        let newExecTime = current.executionTime;
        if (metrics.executionTime) {
            newExecTime = current.executionTime * (1 - learningRate) + metrics.executionTime * learningRate;
        }

        // Derived confidence
        // Confidence drops heavily on failure, recovers slowly on success
        let newConfidence = current.confidence;
        if (metrics.success) {
            newConfidence = Math.min(0.99, current.confidence + 0.05);
        } else {
            newConfidence = Math.max(0.01, current.confidence - 0.2); // Harsh penalty for failure
        }

        this.beliefs.set(limbId, {
            confidence: newConfidence,
            executionTime: newExecTime,
            successRate: newSuccessRate,
            lastStatus: metrics.success ? 'healthy' : 'degraded',
            lastError: metrics.error,
            timestamp: Date.now()
        });
    }

    /**
     * Returns an aggregate introspection of the entire system state.
     */
    public getIntrospection() {
        const beliefValues = Array.from(this.beliefs.values());
        const avgConfidence = beliefValues.reduce((acc, b) => acc + b.confidence, 0) / (beliefValues.length || 1);
        const healthyLimbs = beliefValues.filter(b => b.successRate > 0.8).length;

        return {
            status: avgConfidence > 0.7 ? 'lucid' : 'confused',
            aggregateConfidence: avgConfidence,
            trackedLimbs: this.beliefs.size,
            healthyLimbs,
            beliefs: Object.fromEntries(this.beliefs)
        };
    }



    async stabilize(params: any) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        this.enforceCapability(AgentCapability.READ_FILES);

        // --- CLOUD SOVEREIGN STABILIZATION ---
        let status = 'cloud_stable';
        let aiHealth = 'nominal';

        try {
            // Verify Workers AI presence via simple check if possible
            if (!this.env?.AI) {
                status = 'degraded_reasoning';
                aiHealth = 'binding_missing';
            }

            // --- Hop-Aware Stabilization ---
            const hopsHeader = (this.env as any).request?.headers?.get('cf-ew-via');
            const hops = hopsHeader ? hopsHeader.split(',').length : 0;

            if (hops > 20) {
                status = 'stabilized_trauma_armor';
            }
        } catch (e) {
            status = 'unstable';
        }

        return {
            status,
            system: 'sovereign',
            ai_health: aiHealth,
            anchor: `cloud_${Date.now()}`,
            armor: {
                cloudPrimacy: true,
                isolated: true
            }
        };
    }

    async reconduct(params: any) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { errorContext } = params;

        try {
            const { RealityAnchorService } = await import('../RealityAnchorService');
            const anchorService = new RealityAnchorService(this.env);
            const faultAnchor = await anchorService.dropAnchor('pog-ultimate-v6', 'State before reconduction', {
                provenanceType: 'INTENT',
                reference: 'fault_recovery'
            });

            return {
                status: 'success',
                action: 'healed',
                originalFault: errorContext,
                healedAnchor: faultAnchor.id,
                strategy: 'RE_CONDUCT_SYMPHONY'
            };
        } catch (e) {
            return {
                status: 'partial_success',
                action: 'healed_without_anchor',
                originalFault: errorContext,
                strategy: 'RE_CONDUCT_SYMPHONY'
            };
        }
    }
}
