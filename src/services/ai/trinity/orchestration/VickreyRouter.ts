/**
 * VickreyRouter - POG Capability-Aware Version
 */

import { Env, Task, Model, ProductionMetrics } from '../types';

// [ADD] Capability scoring
interface CapabilityMatch {
    limbId: string;
    capability: string;
    required: boolean;
    score: number;  // 0-1 match score
}

interface Bid {
    modelId: string;
    rawPrice: number;
    confidence: number;
    latencyMs: number;
    compositeScore: number;
    capabilityScore: number;
}

export interface AuctionResult {
    winner: Model;
    secondPrice: number;
    allBids: Bid[];
}

export class VickreyRouter {
    constructor(private env: Env, private config: any) { }

    // [ADD] Score model based on capability match
    private calculateCapabilityScore(
        model: Model,
        task: Task
    ): number {
        if (!task.allowedLimbs || task.allowedLimbs.length === 0) {
            return 1.0; // No restrictions
        }

        // Check if model can access required limbs
        const accessibleLimbs = model.accessibleLimbs || [];
        const requiredLimbs = task.allowedLimbs;

        // Score = fraction of required limbs that are accessible
        const accessibleCount = requiredLimbs.filter(
            limb => accessibleLimbs.includes(limb) || model.limbPermissions === 'all'
        ).length;

        return requiredLimbs.length > 0
            ? accessibleCount / requiredLimbs.length
            : 1.0;
    }

    // [MODIFIED] selectModel with capability filtering
    async selectModel(task: Task, candidates: Model[]): Promise<AuctionResult> {
        const auctionStart = performance.now();

        // Pre-filter models that can access required limbs
        const capableCandidates = candidates.filter(model => {
            const capabilityScore = this.calculateCapabilityScore(model, task);
            return capabilityScore > 0.5; // Must meet 50% of requirements
        });

        if (capableCandidates.length === 0) {
            // Log capability mismatch
            ProductionMetrics.log('vcg_capability_mismatch', {
                taskId: task.id,
                requiredLimbs: task.allowedLimbs,
                candidateCount: candidates.length
            });

            // Emergency fallback: allow all models
            capableCandidates.push(...candidates);
        }

        // Collect bids from capable models
        const bids = await Promise.all(
            capableCandidates.map(model => this.collectBid(model, task))
        );

        const validBids = this.filterValidBids(bids, task) as (Bid & { capabilityScore: number })[];

        // [ADD] Include capability score in bid mapping (done in collectBid for now)

        // Sort by compositeScore (which now includes capability penalty)
        // Lower score is better (cost/latency minimization)
        validBids.sort((a, b) => a.compositeScore - b.compositeScore);

        if (validBids.length === 0) {
            throw new Error('No valid bids received');
        }

        const winnerBid = validBids[0];
        const winner = candidates.find(m => m.id === winnerBid.modelId)!;

        return {
            winner,
            secondPrice: validBids.length > 1 ? validBids[1].rawPrice : winnerBid.rawPrice,
            allBids: validBids
        };
    }

    private async collectBid(model: Model, task: Task): Promise<Bid> {
        const confidence = await model.getConfidence(task);
        const capScore = this.calculateCapabilityScore(model, task);

        const score = this.computeCompositeScore(
            (model.capabilities?.estimatedLatencyMs || 1000) / 10000,
            model.costPerToken,
            confidence,
            0.8, // history
            capScore
        );

        return {
            modelId: model.id,
            rawPrice: model.costPerToken,
            confidence,
            latencyMs: model.capabilities?.estimatedLatencyMs || 1000,
            compositeScore: score,
            capabilityScore: capScore
        };
    }

    private filterValidBids(bids: Bid[], task: Task): Bid[] {
        return bids.filter(b => b.confidence > (this.config.minConfidence || 0.1));
    }

    // [MODIFIED] Composite score includes capability penalty
    private computeCompositeScore(
        normalizedLatency: number,
        normalizedCost: number,
        normalizedConfidence: number,
        historicalAccuracy: number,
        capabilityScore: number  // [ADD]
    ): number {
        const weights = this.config?.weights || { latency: 0.3, cost: 0.3, confidence: 0.4 };
        const reputationWeight = this.config?.reputationWeight || 0.1;

        const confidencePenalty = 1 - normalizedConfidence;

        const baseScore =
            weights.latency * normalizedLatency +
            weights.cost * normalizedCost +
            weights.confidence * confidencePenalty;

        // [ADD] Capability penalty
        const capabilityPenalty = (1 - capabilityScore) * 0.5; // 50% weight on capability

        const reputationBonus = reputationWeight * (1 - historicalAccuracy);

        return baseScore + reputationBonus + capabilityPenalty;
    }
}
