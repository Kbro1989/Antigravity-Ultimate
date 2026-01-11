import { Env } from '../../types/env';
import type { ModelRouter } from './ModelRouter';
import { BaseIntent } from './AITypes';
import { VectorMemory } from './VectorMemory';
import { LimbConfig } from './limbs/NeuralLimb';

// [REFACTORED] Removed static imports for heavy limbs to prevent worker bundling issues
import { NeuralLimb } from './limbs/NeuralLimb';
import { INeuralRegistry, LimbResponse } from './trinity/types/pog-adapters';

export class NeuralRegistry implements INeuralRegistry {
    public memory: VectorMemory;

    // Registry of Limbs
    public limbs: Map<string, any> = new Map();

    // List of known limbs that CAN be lazy-loaded 
    private static KNOWN_LIMBS = [
        'orchestrator', 'ghost', 'file', 'code', 'image', 'audio', 'video',
        'entity', 'security', 'data', 'network', 'mesh', 'material', 'world',
        'physics', 'animation', 'relic', 'id_auditor', 'landscape', 'version_control'
    ];

    constructor(private env: Env, private router: ModelRouter) {
        this.memory = new VectorMemory(env);
    }

    private async ensureLimb(limbId: string): Promise<any> {
        if (this.limbs.has(limbId)) return this.limbs.get(limbId);

        const config: LimbConfig = {
            id: `limb-${limbId}`,
            userId: 'system',
            capabilities: ['AI_INFERENCE']
        };

        let limb: any;
        try {
            switch (limbId) {
                case 'orchestrator':
                    const { OrchestratorLimb } = await import('./limbs/OrchestratorLimb');
                    limb = new OrchestratorLimb(config);
                    break;
                case 'ghost':
                    const { GhostLimb } = await import('./limbs/GhostLimb');
                    limb = new GhostLimb(config);
                    break;
                case 'file':
                    const { FileLimb } = await import('./limbs/FileLimb');
                    limb = new FileLimb(config);
                    break;
                case 'code':
                    const { CodeLimb } = await import('./limbs/CodeLimb');
                    limb = new CodeLimb(config);
                    break;
                case 'image':
                    const { ImageLimb } = await import('./limbs/ImageLimb');
                    limb = new ImageLimb(config);
                    break;
                case 'audio':
                    const { AudioLimb } = await import('./limbs/AudioLimb');
                    limb = new AudioLimb(config);
                    break;
                case 'video':
                    const { VideoLimb } = await import('./limbs/VideoLimb');
                    limb = new VideoLimb(config);
                    break;
                case 'relic':
                    const { RelicLimb } = await import('./limbs/RelicLimb');
                    limb = new RelicLimb(config);
                    break;
                case 'mesh':
                    const { MeshOpsLimb } = await import('./limbs/MeshOpsLimb');
                    limb = new MeshOpsLimb(config);
                    break;
                case 'material':
                    const { MaterialLimb } = await import('./limbs/MaterialLimb');
                    limb = new MaterialLimb(config);
                    break;
                case 'animation':
                    const { AnimationLimb } = await import('./limbs/AnimationLimb');
                    limb = new AnimationLimb(config);
                    break;
                case 'world':
                    const { WorldLimb } = await import('./limbs/WorldLimb');
                    limb = new WorldLimb(config);
                    break;
                case 'landscape':
                    const { LandscapeGenerationLimb } = await import('./limbs/LandscapeGenerationLimb');
                    limb = new LandscapeGenerationLimb(config);
                    break;
                case 'physics':
                    const { PhysicsLimb } = await import('./limbs/PhysicsLimb');
                    limb = new PhysicsLimb(config);
                    break;
                case 'spatial':
                    const { SpatialPipelineLimb } = await import('./limbs/SpatialPipelineLimb');
                    limb = new SpatialPipelineLimb(config);
                    break;
                case 'live_game':
                    const { LiveGameLimb } = await import('./limbs/LiveGameLimb');
                    limb = new LiveGameLimb(config);
                    break;
                case 'quantum':
                    const { QuantumLimb } = await import('./limbs/QuantumLimb');
                    limb = new QuantumLimb(config);
                    break;
                case 'security':
                    const { SecurityLimb } = await import('./limbs/SecurityLimb');
                    limb = new SecurityLimb(config);
                    break;
                case 'idauditor':
                    const { IDAuditorLimb } = await import('./limbs/IDAuditorLimb');
                    limb = new IDAuditorLimb(config);
                    break;
                case 'versioncontrol':
                    const { VersionControlLimb } = await import('./limbs/VersionControlLimb');
                    limb = new VersionControlLimb(config);
                    break;
                case 'network':
                    const { NetworkLimb } = await import('./limbs/NetworkLimb');
                    limb = new NetworkLimb(config);
                    break;
                case 'reality':
                    const { RealityLimb } = await import('./limbs/RealityLimb');
                    limb = new RealityLimb(config);
                    break;
                case 'divine':
                    const { DivineLimb } = await import('./limbs/DivineLimb');
                    limb = new DivineLimb(config);
                    break;
                case 'pipeline':
                    const { AssetPipelineLimb } = await import('./limbs/AssetPipelineLimb');
                    limb = new AssetPipelineLimb(config);
                    break;
                case 'entity':
                    const { EntityLimb } = await import('./limbs/EntityLimb');
                    limb = new EntityLimb(config);
                    break;
                case 'system':
                    const { SystemLimb } = await import('./limbs/SystemLimb');
                    limb = new SystemLimb(config);
                    break;
                case 'data':
                    const { DataLimb } = await import('./limbs/DataLimb');
                    limb = new DataLimb(config);
                    break;
                default:
                    throw new Error(`Unknown limb type: ${limbId}`);
            }

            if (limb.setEnv) limb.setEnv(this.env);
            this.limbs.set(limbId, limb);
            return limb;
        } catch (e: any) {
            console.error(`[NeuralRegistry] Failed to load limb ${limbId}:`, e.message);
            throw new Error(`Limb loading failed: ${limbId}`);
        }
    }

    async executeCapability(limbId: string, intent: BaseIntent): Promise<LimbResponse> {
        console.log(`[NeuralRegistry] Routing: ${limbId}.${intent.action}`);

        const limb = await this.ensureLimb(limbId);
        if (!limb) {
            throw new Error(`Limb not installed: ${limbId}`);
        }

        // 1. Direct Method Call (if exists on class)
        // Checks if the limb has a function matching the intent action (e.g. 'generate_cube')
        if (typeof limb[intent.action] === 'function') {
            console.log(`[NeuralRegistry] Direct Method Hit: ${limbId}.${intent.action}`);
            return await limb[intent.action](intent.payload, intent);
        }

        // 2. Fallback to Neural Intent Processing (AI delegation)
        // If no direct method, ask the limb to process the intent via LLM
        if (typeof limb.processIntent === 'function') {
            console.log(`[NeuralRegistry] Neural Fallback: ${limbId}.${intent.action}`);
            return await limb.processIntent(intent);
        }

        throw new Error(`Capability ${intent.action} not found on limb ${limbId}`);
    }

    // --- INeuralRegistry Implementation ---

    public getCapabilities(): Map<string, string[]> {
        const caps = new Map<string, string[]>();
        for (const [id, limb] of this.limbs.entries()) {
            caps.set(id, (limb as any).capabilities || []);
        }
        return caps;
    }

    public isHealthy(limbId: string): boolean {
        return this.limbs.has(limbId);
    }

    public getMetrics(limbId: string): any {
        return { invocations: 0, successRate: 1.0 };
    }

    public getLimb(limbId: string): any {
        return this.limbs.get(limbId);
    }

    public hasLimb(limbId: string): boolean {
        return this.limbs.has(limbId);
    }

    public getAllLimbs(): Map<string, any> {
        // [IMPORTANT] Ensure all KNOWN_LIMBS are at least represented
        const fullMap = new Map<string, any>();

        // 1. Add currently loaded limbs
        for (const [id, limb] of this.limbs.entries()) {
            fullMap.set(id, limb);
        }

        // 2. Add placeholders for limbs that CAN be loaded
        // This allows TrinityWorker to discover capabilities before they are "ensured"
        for (const id of (NeuralRegistry as any).KNOWN_LIMBS) {
            if (!fullMap.has(id)) {
                fullMap.set(id, {
                    id,
                    capabilities: ['AI_INFERENCE'],
                    isPlaceholder: true,
                    process: async (intent: any) => {
                        const actual = await this.ensureLimb(id);
                        return actual.process(intent);
                    }
                });
            }
        }

        return fullMap;
    }

    public registerLimb(id: string, limb: any): void {
        this.limbs.set(id, limb);
        if (limb.setEnv) limb.setEnv(this.env);
    }
}
