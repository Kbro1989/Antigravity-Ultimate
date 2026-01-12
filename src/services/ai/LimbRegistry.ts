import { AgentCapability } from './AgentConstitution';
import { ExtensionManager } from './ExtensionManager';
import { RealityAnchorService } from './RealityAnchorService';
import { BaseIntent } from './AITypes';

export class LimbRegistry {
    private userId: string;
    private limbs: Map<string, any> = new Map();
    private events: Map<string, Array<(data: any) => void>> = new Map();
    private env: any;
    private state: any;

    constructor(userId: string, env?: any, state?: any) {
        this.userId = userId;
        this.env = env;
        this.state = state;
        // Limbs must be registered externally (e.g. by ServiceContainer on backend)
        // to avoid circular dependencies and heavy bundling on frontend.
        // --- HERMIT CRAB: Cloud-Native Extension Guard ---
        const isCloud = env?.ASSETS_BUCKET || env?.DB;
        if (isCloud) {
            console.log('[LimbRegistry] Cloud Env Detected. Skipping local extension scan for instant boot.');
        } else {
            this.loadExtensions().catch(e => {
                console.warn('[LimbRegistry] Extension loading deferred or failed:', e);
            });
        }
    }

    private async loadExtensions() {
        const extensionManager = new ExtensionManager(this);
        await extensionManager.scanAndLoad();
    }

    // --- SIGNAL HUB (Ported from NeuralRegistry) ---
    public emit(event: string, data: any) {
        console.log(`[LimbRegistry] Signal Emitted: ${event}`, data);
        const handlers = this.events.get(event) || [];
        handlers.forEach(h => h(data));
    }

    public on(event: string, handler: (data: any) => void) {
        if (!this.events.has(event)) this.events.set(event, []);
        this.events.get(event)!.push(handler);
        return () => {
            const handlers = this.events.get(event) || [];
            this.events.set(event, handlers.filter(h => h !== handler));
        };
    }

    // --- DYNAMIC REGISTRATION (Hermit Crab Upgrade) ---
    public registerLimb(id: string, limb: any) {
        if (!limb) {
            console.error(`[LimbRegistry] Attempted to register null limb: ${id}`);
            return;
        }
        console.log(`[LimbRegistry] Dynamically connecting limb: ${id}`);
        this.limbs.set(id, limb);
        this.emit('limb_registered', { id, name: limb.name || id });
    }

    // --- HELPER FOR REGISTRATION (Called by Backend) ---
    public safeRegister(id: string, limbClass: any, caps: AgentCapability[]) {
        try {
            const config = {
                id,
                userId: this.userId,
                capabilities: caps,
                onAssetGenerated: (asset: any) => this.emit('asset_generated', { ...asset, limbId: id }),
                env: this.env,
                state: this.state,
                limbs: this
            };
            this.registerLimb(id, new limbClass(config));
            return true;
        } catch (e) {
            console.error(`[LimbRegistry] Critical failure in limb ${id}:`, e);
            return false;
        }
    }

    /**
     * Registers a limb via a factory function (e.g. for dynamic imports)
     */
    public async safeRegisterAsync(id: string, factory: () => Promise<any>, caps: AgentCapability[]) {
        try {
            const module = await factory();

            // Find the exported class (e.g. EntityLimb)
            let actualClass = Object.values(module).find(v =>
                typeof v === 'function' &&
                v.prototype &&
                (v.name?.toLowerCase().includes('limb') || v.prototype.process)
            );

            if (!actualClass) {
                actualClass = (module as any).default || module[Object.keys(module)[0]];
            }

            const config = {
                id,
                userId: this.userId,
                capabilities: caps,
                onAssetGenerated: (asset: any) => this.emit('asset_generated', { ...asset, limbId: id }),
                env: this.env,
                state: this.state,
                limbs: this
            };
            this.registerLimb(id, new (actualClass as any)(config));
            return true;
        } catch (e) {
            console.error(`[LimbRegistry] Critical failure in async limb ${id}:`, e);
            return false;
        }
    }

    public getLimb(id: string) {
        return this.limbs.get(id);
    }

    public getLimbs() {
        return this.limbs;
    }

    public getLimbIds() {
        return Array.from(this.limbs.keys());
    }

    public async call(limbId: string, action: string, params: any) {
        const limb = this.getLimb(limbId);
        if (!limb) throw new Error(`Limb ${limbId} not found in registry.`);

        // Internal call bypasses some intent parsing but respects capabilities
        return await limb.process({
            action,
            payload: params,
            limbId
        });
    }

    public async processIntent(intent: BaseIntent & { modelId?: string; provider?: string }) {
        const limbId = intent.limbId || this.mapActionToLimb(intent.action);
        const limb = this.getLimb(limbId);

        if (!limb) {
            this.emit('execution_failed', { action: intent.action, error: 'Limb not found' });
            throw new Error(`No limb found for action: ${intent.action} (Limb: ${limbId})`);
        }

        this.emit('execution_started', { action: intent.action, limbId });
        try {
            console.log(`[LimbRegistry] Routing ${intent.action} -> ${limbId} | Override: ${intent.provider}/${intent.modelId}`);
            const result = await limb.process(intent);
            this.emit('execution_success', { action: intent.action, result });

            // --- v6.1: Drop Reality Anchor for every execution success ---
            try {
                const anchorService = new RealityAnchorService(this.env);
                await anchorService.dropAnchor('pog-ultimate-v6', `Provenance for ${intent.action}`, {
                    provenanceType: this.mapActionToProvenance(intent.action),
                    reference: intent.action
                });
            } catch (anchorErr) {
                console.warn('[LimbRegistry] Failed to drop reality anchor (continuing):', anchorErr);
            }

            return result;
        } catch (error: any) {
            this.emit('execution_failed', { action: intent.action, error: error.message });
            throw error;
        }
    }

    private mapActionToLimb(action: string): string {
        const mapping: Record<string, string> = {
            'file_': 'file',
            'code_': 'code',
            'data_': 'data',
            'entity_': 'entity',
            'security_': 'security',
            'system_': 'system',
            'network_': 'network',
            'mesh_': 'mesh',
            'material_': 'material',
            'world_': 'world',
            'physics_': 'physics',
            'animation_': 'animation',
            'image_': 'image',
            'audio_': 'audio',
            'video_': 'video',
            'game_': 'game',
            'pipeline_': 'pipeline',
            'ghost_': 'ghost',
            'rig_': 'rig',
            'vfx_': 'vfx',
            'env_': 'environment',
            'relic_': 'relic',
            'landscape_': 'landscape',
            'audit_': 'id_auditor',
            'version_': 'version_control',
            'quantum_': 'quantum',
            'spatial_': 'spatial',
            'reality_': 'reality',
            'divine_': 'divine',
            'proxy_': 'proxy',
            'live_game_': 'live_game'
        };

        for (const [prefix, limb] of Object.entries(mapping)) {
            if (action.startsWith(prefix)) return limb;
        }

        // Default to orchestrator (Cloud sovereign default)
        return 'orchestrator';
    }
    private mapActionToProvenance(action: string): 'FILE' | 'CODE' | 'MESH' | 'INTENT' | 'NEGOTIATION' {
        if (action.startsWith('file_')) return 'FILE';
        if (action.startsWith('code_') || action.startsWith('modify_')) return 'CODE';
        if (action.startsWith('mesh_') || action.startsWith('rig_') || action.startsWith('vfx_')) return 'MESH';
        if (action.startsWith('negotiate_')) return 'NEGOTIATION';
        return 'INTENT';
    }

    /**
     * Aggregates the health status of all registered limbs.
     */
    public async getHealthReport() {
        const report: Record<string, any> = {};
        const probePromises = [];

        for (const [id, limb] of this.limbs.entries()) {
            probePromises.push((async () => {
                try {
                    // Check if status method exists (it should now via NeuralLimb)
                    if (typeof limb.status === 'function') {
                        report[id] = await limb.status();
                    } else {
                        report[id] = { id, status: 'unknown', error: 'No status probe implementation' };
                    }
                } catch (e: any) {
                    report[id] = { id, status: 'offline', error: e.message };
                }
            })());
        }

        await Promise.all(probePromises);
        return report;
    }
}
