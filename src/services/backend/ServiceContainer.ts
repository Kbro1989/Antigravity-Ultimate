import type { Env } from '../../types/env';
import { costOptimizer } from '../ai/CostOptimizer';
import { BackendModelRouter as ModelRouter } from './ModelRouter';
import { LimbRegistry } from '../ai/LimbRegistry';
import { IntelRegistry } from '../ai/IntelRegistry';
import { GoldContextService } from '../ai/GoldContextService';
import { RealityAnchorService } from '../ai/RealityAnchorService';
// import { CLIBridge } from '../cli/CLIBridge'; // Decoupled
import { SpatialPipelineService } from '../ai/SpatialPipelineService';
import { KnowledgeIngestor } from '../rsc/KnowledgeIngestor';
import { VectorMemory } from '../ai/VectorMemory';
import { chronoshell } from '../core/Chronoshell';
import { AgentCapability } from '../ai/AgentConstitution';
import { InstantService } from '../data/InstantService';

export class ServiceContainer {
    public env: Env;
    public router: ModelRouter;
    public limbs: LimbRegistry;
    public intel: IntelRegistry;
    public snapshots: GoldContextService;
    public anchors: RealityAnchorService;
    public spatial: SpatialPipelineService;
    public ingestor: KnowledgeIngestor;
    public costOptimizer = costOptimizer;

    constructor(env: Env, state: any) {
        this.env = env;
        const storage = state.storage;
        this.router = new ModelRouter(env);
        this.intel = new IntelRegistry(env);
        this.snapshots = new GoldContextService(env);
        this.anchors = new RealityAnchorService(env);
        this.spatial = new SpatialPipelineService(env);

        // Memory & Ingestion Layer
        const vectorMemory = new VectorMemory(env);
        this.ingestor = new KnowledgeIngestor(vectorMemory);

        // Sovereignty: Bridge is strictly an optional extension. Core is zero-dependency.
        this.limbs = new LimbRegistry('default_user', env, state);

        // Initialize Data Offloading
        InstantService.getInstance(env);
    }

    private async initializeLimbs() {
        const l = this.limbs;
        // Core Limbs
        await l.safeRegisterAsync('entity', () => import('../ai/limbs/EntityLimb'), [AgentCapability.MEMORY_QUERY, AgentCapability.WRITE_FILES]);
        await l.safeRegisterAsync('security', () => import('../ai/limbs/SecurityLimb'), [AgentCapability.READ_FILES, AgentCapability.WRITE_FILES]);
        await l.safeRegisterAsync('file', () => import('../ai/limbs/FileLimb'), [AgentCapability.READ_FILES, AgentCapability.WRITE_FILES, AgentCapability.DELETE_FILES]);
        await l.safeRegisterAsync('data', () => import('../ai/limbs/DataLimb'), [AgentCapability.MEMORY_QUERY]);
        await l.safeRegisterAsync('code', () => import('../ai/limbs/CodeLimb'), [AgentCapability.AI_INFERENCE, AgentCapability.EXECUTE_COMMAND, AgentCapability.READ_FILES, AgentCapability.WRITE_FILES, AgentCapability.MODIFY_CODE]);
        await l.safeRegisterAsync('system', () => import('../ai/limbs/SystemLimb'), [AgentCapability.READ_FILES, AgentCapability.EXECUTE_COMMAND, AgentCapability.METRIC_ACCESS]);
        await l.safeRegisterAsync('network', () => import('../ai/limbs/NetworkLimb'), [AgentCapability.NETWORK_ACCESS]);

        // Domain: 3D & World
        await l.safeRegisterAsync('mesh', () => import('../ai/limbs/MeshOpsLimb'), [AgentCapability.MESH_OPERATIONS, AgentCapability.AI_INFERENCE]);
        await l.safeRegisterAsync('material', () => import('../ai/limbs/MaterialLimb'), [AgentCapability.IMAGE_OPERATIONS, AgentCapability.WRITE_FILES]);
        await l.safeRegisterAsync('world', () => import('../ai/limbs/WorldLimb'), [AgentCapability.WORLD_STATE_WRITE, AgentCapability.READ_FILES]);
        await l.safeRegisterAsync('physics', () => import('../ai/limbs/PhysicsLimb'), [AgentCapability.AI_INFERENCE, AgentCapability.METRIC_ACCESS]);
        await l.safeRegisterAsync('animation', () => import('../ai/limbs/AnimationLimb'), [AgentCapability.AI_INFERENCE]);

        // Domain: Media & Art
        await l.safeRegisterAsync('image', () => import('../ai/limbs/ImageLimb'), [AgentCapability.IMAGE_OPERATIONS, AgentCapability.AI_INFERENCE]);
        await l.safeRegisterAsync('audio', () => import('../ai/limbs/AudioLimb'), [AgentCapability.AI_INFERENCE]);
        await l.safeRegisterAsync('video', () => import('../ai/limbs/VideoLimb'), [AgentCapability.AI_INFERENCE]);

        // Domain: Orchestration & Game
        await l.safeRegisterAsync('live_game', () => import('../ai/limbs/LiveGameLimb'), [AgentCapability.WORLD_STATE_WRITE, AgentCapability.AI_INFERENCE]);
        await l.safeRegisterAsync('pipeline', () => import('../ai/limbs/AssetPipelineLimb'), [AgentCapability.AI_INFERENCE, AgentCapability.MESH_OPERATIONS, AgentCapability.IMAGE_OPERATIONS, AgentCapability.READ_FILES, AgentCapability.WRITE_FILES]);
        await l.safeRegisterAsync('spatial', () => import('../ai/limbs/SpatialPipelineLimb'), [AgentCapability.AI_INFERENCE, AgentCapability.MESH_OPERATIONS, AgentCapability.IMAGE_OPERATIONS]);
        await l.safeRegisterAsync('orchestrator', () => import('../ai/limbs/OrchestratorLimb'), [AgentCapability.AI_INFERENCE, AgentCapability.CALL_AI_MODEL]);
        await l.safeRegisterAsync('ghost', () => import('../ai/limbs/GhostLimb'), [AgentCapability.AI_INFERENCE, AgentCapability.MODIFY_CODE]);

        // New Powerhouse Limbs (AGI Expansion)
        await l.safeRegisterAsync('rig', () => import('../ai/limbs/AnimationLimb'), [AgentCapability.AI_INFERENCE]);
        await l.safeRegisterAsync('vfx', () => import('../ai/limbs/ImageLimb'), [AgentCapability.IMAGE_OPERATIONS, AgentCapability.AI_INFERENCE]);
        await l.safeRegisterAsync('environment', () => import('../ai/limbs/WorldLimb'), [AgentCapability.WORLD_STATE_WRITE, AgentCapability.READ_FILES]);
        await l.safeRegisterAsync('quantum', () => import('../ai/limbs/QuantumLimb'), [AgentCapability.AI_INFERENCE]);
        await l.safeRegisterAsync('divine', () => import('../ai/limbs/DivineLimb'), [AgentCapability.AI_INFERENCE, AgentCapability.WORLD_STATE_WRITE]);
        await l.safeRegisterAsync('reality', () => import('../ai/limbs/RealityLimb'), [AgentCapability.AI_INFERENCE, AgentCapability.WORLD_STATE_WRITE]);
        await l.safeRegisterAsync('relic', () => import('../ai/limbs/RelicLimb'), [AgentCapability.AI_INFERENCE, AgentCapability.MEMORY_QUERY]);
        await l.safeRegisterAsync('id_auditor', () => import('../ai/limbs/IDAuditorLimb'), [AgentCapability.MEMORY_QUERY]);
        await l.safeRegisterAsync('landscape', () => import('../ai/limbs/LandscapeGenerationLimb'), [AgentCapability.AI_INFERENCE, AgentCapability.WORLD_STATE_WRITE]);
        await l.safeRegisterAsync('version_control', () => import('../ai/limbs/VersionControlLimb'), [AgentCapability.COMMIT_CHANGES]);
        await l.safeRegisterAsync('behavior', () => import('../ai/limbs/BehaviorLimb'), [AgentCapability.AI_INFERENCE, AgentCapability.WRITE_FILES]);
        await l.safeRegisterAsync('signature', () => import('../ai/limbs/SignatureLimb'), [AgentCapability.SECURITY_AUDIT]);
        await l.safeRegisterAsync('vision', () => import('../ai/limbs/VisionLimb'), [AgentCapability.AI_INFERENCE]);
    }

    async initialize() {
        console.log('[ServiceContainer] Initializing Limbs...');
        await this.initializeLimbs();
        await this.anchors.initialize();

        // 1. Ensure D1 Tables exist for core services
        if (this.env.DB) {
            console.log('[ServiceContainer] Initializing Core D1 Tables (if not exists)...');
            try {
                await this.env.DB.prepare(`
                    CREATE TABLE IF NOT EXISTS chronoshell_traces (
                        id TEXT PRIMARY KEY,
                        timestamp INTEGER NOT NULL,
                        layer TEXT NOT NULL,
                        action TEXT NOT NULL,
                        metadata TEXT,
                        reasoning TEXT
                    )
                `).run();
            } catch (e) {
                console.error('[ServiceContainer] D1 Core Tables Init Failed', e);
            }
        }

        // 2. Wire up Chronoshell to D1 Persistence & InstantDB Offloading
        chronoshell.setPersistenceHandler(async (record) => {
            // Offload to InstantDB (Primary Offloading Path)
            try {
                const instant = InstantService.getInstance(this.env);
                await instant.recordTrace('global', record);
            } catch (e) {
                console.warn('[ServiceContainer] InstantDB Trace Offload Failed', e);
            }

            // Fallback to D1 for cold storage
            if (this.env.DB) {
                try {
                    await this.env.DB.prepare(
                        'INSERT INTO chronoshell_traces (id, timestamp, layer, action, metadata, reasoning) VALUES (?, ?, ?, ?, ?, ?)'
                    ).bind(
                        record.id,
                        record.timestamp,
                        record.layer,
                        record.action,
                        JSON.stringify(record.metadata),
                        record.reasoning || null
                    ).run();
                } catch (e) {
                    console.error('[ServiceContainer] Failed to persist trace to D1', e);
                }
            }
        });

        // Background ingestion of canonical data (Reference Triggered)
        // Note: Use a relative path or environment variable instead of hardcoded absolute Windows paths.
        const projectRoot = (this.env as any).PROJECT_ROOT || './';
        const ingestionPromise = this.ingestor.ingestCanonicalData(projectRoot);
        if (ingestionPromise && typeof ingestionPromise.catch === 'function') {
            ingestionPromise.catch(e => {
                console.log('[ServiceContainer] Knowledge ingestion skipped or failed (expected in cloud/non-bridge env)');
            });
        }
    }

    async processAIIntent(intent: any) {
        // 1. Audit via metabolism
        const provider = intent.provider || 'cloudflare';
        const userId = intent.userId || 'default_user';

        const quota = await costOptimizer.getQuota(userId, this.env);
        // Check if provider has capacity
        const hasCapacity = provider === 'cloudflare' ? quota.cloudflare.tokens > 0 : quota.gemini.budget > 0;

        if (!hasCapacity) throw new Error(`Security Block: Quota exceeded for provider '${provider}'.`);

        // 2. Delegate to limbs
        const result = await this.limbs.processIntent(intent);

        // 3. Track usage is now handled INSIDE ModelRouter if it calls an AI, 
        // but if the limb did it directly, we might need a manual deduction.
        // For consistent metabolic rate, we assume Limbs use ModelRouter.

        return result;
    }
}
