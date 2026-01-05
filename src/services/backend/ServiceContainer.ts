import type { Env } from '../../types/env';
import { HardBlockEnforcer } from './HardBlockEnforcer';
import { BackendModelRouter } from './ModelRouter';
import { LimbRegistry } from '../ai/LimbRegistry';
import { IntelRegistry } from '../ai/IntelRegistry';
import { GoldContextService } from '../ai/GoldContextService';
import { RealityAnchorService } from '../ai/RealityAnchorService';
import { CLIBridge } from '../cli/CLIBridge';
import { SpatialPipelineService } from '../ai/SpatialPipelineService';
import { KnowledgeIngestor } from '../rsc/KnowledgeIngestor';
import { VectorMemory } from '../ai/VectorMemory';
import { chronoshell } from '../core/Chronoshell';
import { AgentCapability } from '../ai/AgentConstitution';
import {
    EntityLimb,
    SecurityLimb,
    FileLimb,
    DataLimb,
    CodeLimb,
    SystemLimb,
    NetworkLimb,
    MeshOpsLimb,
    MaterialLimb,
    WorldLimb,
    PhysicsLimb,
    AnimationLimb,
    ImageLimb,
    AudioLimb,
    VideoLimb,
    LiveGameLimb,
    AssetPipelineLimb,
    SpatialPipelineLimb,
    OrchestratorLimb,
    GhostLimb,
    DivineLimb,
    QuantumLimb,
    RealityLimb,
    RelicLimb
} from '../ai/limbs';

export class ServiceContainer {
    public env: Env;
    public router: BackendModelRouter;
    public enforcer: HardBlockEnforcer;
    public limbs: LimbRegistry;
    public intel: IntelRegistry;
    public snapshots: GoldContextService;
    public anchors: RealityAnchorService;
    public spatial: SpatialPipelineService;
    public ingestor: KnowledgeIngestor;

    constructor(env: Env, storage: DurableObjectStorage) {
        this.env = env;
        this.router = new BackendModelRouter(env);
        this.enforcer = new HardBlockEnforcer(storage);
        this.intel = new IntelRegistry(env);
        this.snapshots = new GoldContextService(env);
        this.anchors = new RealityAnchorService(env);
        this.spatial = new SpatialPipelineService(env);

        // Memory & Ingestion Layer
        const vectorMemory = new VectorMemory(env);
        this.ingestor = new KnowledgeIngestor(vectorMemory);

        // In worker env, bridge is remote. In local DO it might be direct.
        const bridge = CLIBridge.getInstance();
        this.limbs = new LimbRegistry('default_user', bridge, env);
        this.initializeLimbs();
    }

    private initializeLimbs() {
        const l = this.limbs;
        // Core Limbs
        l.safeRegister('entity', EntityLimb, [AgentCapability.MEMORY_QUERY, AgentCapability.WRITE_FILES]);
        l.safeRegister('security', SecurityLimb, [AgentCapability.READ_FILES, AgentCapability.WRITE_FILES]);
        l.safeRegister('file', FileLimb, [AgentCapability.READ_FILES, AgentCapability.WRITE_FILES, AgentCapability.DELETE_FILES]);
        l.safeRegister('data', DataLimb, [AgentCapability.MEMORY_QUERY]);
        l.safeRegister('code', CodeLimb, [AgentCapability.AI_INFERENCE, AgentCapability.EXECUTE_COMMAND, AgentCapability.READ_FILES, AgentCapability.WRITE_FILES, AgentCapability.MODIFY_CODE]);
        l.safeRegister('system', SystemLimb, [AgentCapability.READ_FILES, AgentCapability.EXECUTE_COMMAND, AgentCapability.METRIC_ACCESS]);
        l.safeRegister('network', NetworkLimb, [AgentCapability.NETWORK_ACCESS]);

        // Domain: 3D & World
        l.safeRegister('mesh', MeshOpsLimb, [AgentCapability.MESH_OPERATIONS, AgentCapability.AI_INFERENCE]);
        l.safeRegister('material', MaterialLimb, [AgentCapability.IMAGE_OPERATIONS, AgentCapability.WRITE_FILES]);
        l.safeRegister('world', WorldLimb, [AgentCapability.WORLD_STATE_WRITE, AgentCapability.READ_FILES]);
        l.safeRegister('physics', PhysicsLimb, [AgentCapability.AI_INFERENCE, AgentCapability.METRIC_ACCESS]);
        l.safeRegister('animation', AnimationLimb, [AgentCapability.AI_INFERENCE]);

        // Domain: Media & Art
        l.safeRegister('image', ImageLimb, [AgentCapability.IMAGE_OPERATIONS, AgentCapability.AI_INFERENCE]);
        l.safeRegister('audio', AudioLimb, [AgentCapability.AI_INFERENCE]);
        l.safeRegister('video', VideoLimb, [AgentCapability.AI_INFERENCE]);

        // Domain: Orchestration & Game
        l.safeRegister('game', LiveGameLimb, [AgentCapability.WORLD_STATE_WRITE, AgentCapability.AI_INFERENCE]);
        l.safeRegister('pipeline', AssetPipelineLimb, [AgentCapability.AI_INFERENCE, AgentCapability.MESH_OPERATIONS, AgentCapability.IMAGE_OPERATIONS]);
        l.safeRegister('spatial', SpatialPipelineLimb, [AgentCapability.AI_INFERENCE, AgentCapability.MESH_OPERATIONS, AgentCapability.IMAGE_OPERATIONS]);
        l.safeRegister('orchestrator', OrchestratorLimb, [AgentCapability.AI_INFERENCE, AgentCapability.CALL_AI_MODEL]);
        l.safeRegister('ghost', GhostLimb, [AgentCapability.AI_INFERENCE, AgentCapability.MODIFY_CODE]);

        // New Powerhouse Limbs (AGI Expansion)
        l.safeRegister('rig', AnimationLimb, [AgentCapability.AI_INFERENCE]);
        l.safeRegister('vfx', ImageLimb, [AgentCapability.IMAGE_OPERATIONS, AgentCapability.AI_INFERENCE]);
        l.safeRegister('environment', WorldLimb, [AgentCapability.WORLD_STATE_WRITE, AgentCapability.READ_FILES]);
        l.safeRegister('quantum', QuantumLimb, [AgentCapability.AI_INFERENCE]);
        l.safeRegister('divine', DivineLimb, [AgentCapability.AI_INFERENCE, AgentCapability.WORLD_STATE_WRITE]);
        l.safeRegister('reality', RealityLimb, [AgentCapability.AI_INFERENCE, AgentCapability.WORLD_STATE_WRITE]);
        l.safeRegister('relic', RelicLimb, [AgentCapability.AI_INFERENCE, AgentCapability.MEMORY_QUERY]);
    }

    async initialize() {
        await this.enforcer.initialize();
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

        // 2. Wire up Chronoshell to D1 Persistence
        chronoshell.setPersistenceHandler(async (record) => {
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
                    console.error('[ServiceContainer] Failed to persist trace', e);
                }
            }
        });

        // Background ingestion of canonical data (Reference Triggered)
        // Note: Use a relative path or environment variable instead of hardcoded absolute Windows paths.
        const projectRoot = (this.env as any).PROJECT_ROOT || './';
        this.ingestor.ingestCanonicalData(projectRoot).catch(e => {
            console.log('[ServiceContainer] Knowledge ingestion skipped or failed (expected in cloud/non-bridge env)');
        });
    }

    async processAIIntent(intent: any) {
        // 1. Audit via security using the hardened layer
        const provider = intent.provider || 'cloudflare';
        // Assume default user ID for internal processAIIntent calls or pass it in intent
        const userId = intent.userId || 'default_user';

        const allowed = await this.enforcer.checkQuota(provider, userId);
        if (!allowed) throw new Error(`Security Block: Quota exceeded or provider '${provider}' not allowed.`);

        // 2. Delegate to limbs
        const result = await this.limbs.processIntent(intent);

        // 3. Track usage
        await this.enforcer.trackUsage(provider, 1, intent.estimatedCost || 0);

        return result;
    }
}
