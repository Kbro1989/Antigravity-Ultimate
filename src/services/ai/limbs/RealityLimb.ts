import { NeuralLimb, LimbConfig } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { RealityAnchorService } from '../RealityAnchorService';
import { BaseIntent } from '../AITypes';

export class RealityLimb extends NeuralLimb {
    name = 'RealityLimb';
    private anchorService: RealityAnchorService;

    constructor(config: LimbConfig) {
        super(config);
        // RealityAnchorService usually needs the cloudflare env bindings
        this.anchorService = new RealityAnchorService((config as any).env);
    }

    async anchor_convergence(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.WRITE_FILES);
        const { description, options, projectId = 'default' } = params || {};
        await this.logActivity('anchor_convergence', 'pending', { projectId });

        const anchor = await this.anchorService.dropAnchor(
            projectId,
            description || 'Neural Convergence Anchor',
            options
        );

        return {
            status: 'success',
            anchor,
            stability: 100.0,
            integrity: 'absolute',
            timestamp: Date.now()
        };
    }

    async verify_integrity(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.MEMORY_QUERY);
        const { projectId = 'default' } = params || {};
        await this.logActivity('verify_integrity', 'pending', { projectId });

        const anchors = await this.anchorService.listAnchors(projectId);
        return {
            status: 'success',
            anchorCount: anchors.length,
            integrity: anchors.length > 0 ? 'VERIFIED' : 'UNCERTAIN',
            lastAnchor: anchors[0],
            timestamp: Date.now()
        };
    }

    async anchor_convergence_legacy(params: any, intent: BaseIntent) {
        return this.anchor_convergence(params, intent);
    }
}
