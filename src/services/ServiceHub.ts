// Isomorphic AI Services (Fetch-based)
import {
    runOrchestration,
    generateImage,
    synthesizeSpeech,
    generateVideo,
    getCodeCompletions,
    auditCode,
    refactorCode,
    searchSimilarAssets,
    cloudflareLimiter
} from './ai/CloudflareService';

import { costOptimizer } from './ai/CostOptimizer';
import { modelRegistry } from './ai/ModelRegistry';
import { mcpConfigManager } from './mcp/MCPConfigManager';

// Types only - directly from source to avoid barrel side-effects
import type { FlowEngine } from './ai/FlowEngine';
import type { IntelRegistry } from './ai/IntelRegistry';
import type { GoldContextService } from './ai/GoldContextService';
import type { RealityAnchorService } from './ai/RealityAnchorService';

// Core Services
import { circuitBreaker, securityService } from './core';
import { tokenLedger } from './core/TokenLedger';

// Bridge Services (Dynamically loaded for Sovereignty)

// FlowEngine handled via getter

/**
 * ServiceHub provides unified access to all POG services
 * Use this in React components via useServiceHub hook
 */
export class ServiceHubClass {
    private _intel?: IntelRegistry;
    private _snapshots?: GoldContextService;
    private _anchors?: RealityAnchorService;
    public env?: any; // injected via init

    public async getIntel() {
        const { IntelRegistry } = await import('./ai/IntelRegistry');
        if (!this._intel) this._intel = new IntelRegistry({} as any);
        return this._intel;
    }

    public async getSnapshots() {
        const { GoldContextService } = await import('./ai/GoldContextService');
        if (!this._snapshots) this._snapshots = new GoldContextService({} as any);
        return this._snapshots;
    }

    public async getAnchors() {
        const { RealityAnchorService } = await import('./ai/RealityAnchorService');
        if (!this._anchors) this._anchors = new RealityAnchorService();
        return this._anchors;
    }

    public get flow() {
        return {
            trigger: async (name: string, steps: any[]) => {
                const { FlowEngine } = await import('./ai/FlowEngine');
                return FlowEngine.getInstance().triggerWorkflow(name, steps);
            },
            runStep: async (stepId: string, action: () => Promise<any>) => {
                const { FlowEngine } = await import('./ai/FlowEngine');
                return FlowEngine.getInstance().runStep(stepId, action);
            }
        };
    }

    public get pipeline() {
        return {
            execute: async (workflow: any) => {
                const { workflowEngine } = await import('./ai/n8n/workflowEngine');
                return workflowEngine.execute(workflow);
            }
        };
    }
    public ai = {
        chat: runOrchestration,
        image: (prompt: string, size?: string) => {
            const definition = modelRegistry.getModel('imageGeneration');
            return generateImage(prompt, {
                aspectRatio: size as any,
                modelId: definition.id,
                provider: definition.provider
            });
        },
        speech: (text: string) => {
            const definition = modelRegistry.getModel('textToSpeech');
            return synthesizeSpeech(text, {
                modelId: definition.id,
                provider: definition.provider
            });
        },
        video: generateVideo,
        codeComplete: (prompt: string, suffix: string, filename: string) => {
            const definition = modelRegistry.getModel('codeGeneration');
            return getCodeCompletions(prompt, suffix, filename, {
                modelId: definition.id,
                provider: definition.provider
            });
        },
        audit: auditCode,
        refactor: refactorCode,
        search: searchSimilarAssets,
        process: async (intent: any) => {
            console.log('[ServiceHub] Routing intent to agent:', intent);

            // Auto-inject model overrides based on action/workspace
            const capability = this.mapActionToCapability(intent.action);
            const definition = modelRegistry.getModel(capability);

            const config = mcpConfigManager.getConfig();

            const response = await fetch('/api/session/default/ai/complete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Gemini-Key': config.providers.gemini?.apiKey || '',
                    'X-Fireworks-Key': config.providers.external?.fireworksKey || '',
                    'X-Allow-Paid': config.routing.allowPaidOverflow ? 'true' : 'false'
                },
                body: JSON.stringify({
                    ...intent,
                    modelId: definition.id,
                    provider: definition.provider
                })
            });
            return response.json();
        },
        route: async (request: any, env?: any) => (costOptimizer as any).route(request, env)
    };

    private mapActionToCapability(action: string): any {
        if (action.includes('image')) return 'imageGeneration';
        if (action.includes('code')) return 'codeGeneration';
        if (action.includes('speech') || action.includes('voice')) return 'textToSpeech';
        if (action.includes('audio')) return 'speechToText';
        if (action.includes('3d')) return 'model3D';
        if (action.includes('video')) return 'videoGeneration';
        return 'textGeneration';
    }

    // Infrastructure
    public infra = {
        circuitBreaker,
        security: securityService,
        bridge: {
            get instance() {
                // Warning: Accessing this statically in cloud mode will fail or return a stub
                const isLocal = typeof window !== 'undefined' && !window.location.hostname.includes('.pages.dev') && !window.location.hostname.includes('.workers.dev');
                if (!isLocal) {
                    console.warn('[Sovereignty Shield] CLI Bridge is unavailable in Cloud Mode. Using R2 Virtual Storage.');
                }
                return null;
            }
        },
        ledger: tokenLedger
    };

    // Bridge Operations (Sovereign & Dynamic)
    public bridge = {
        get client() {
            throw new Error("[Sovereignty Alert] Static access to bridge.client is prohibited. Use async methods.");
        },
        readFile: async (path: string) => {
            if (!(await this.isBridgeAvailable())) throw new Error("[Sovereignty Alert] Local file reading disabled. Use R2 browser.");
            const { cliBridge } = await import('./cli/CLIBridge');
            return cliBridge.readFile(path);
        },
        writeFile: async (path: string, content: string) => {
            if (!(await this.isBridgeAvailable())) throw new Error("[Sovereignty Alert] Local file writing disabled in Cloud Mode.");
            const { cliBridge } = await import('./cli/CLIBridge');
            return cliBridge.writeFile(path, content);
        },
        listDir: async (path: string) => {
            if (!(await this.isBridgeAvailable())) return [];
            const { cliBridge } = await import('./cli/CLIBridge');
            return cliBridge.listDirectory(path);
        },
        runCommand: async (cmd: string) => {
            if (!(await this.isBridgeAvailable())) throw new Error("[Sovereignty Alert] Shell commands prohibited in Cloud Mode.");
            const { cliBridge } = await import('./cli/CLIBridge');
            return cliBridge.runCommand(cmd);
        },
        execute: async (cmd: string) => {
            if (!(await this.isBridgeAvailable())) throw new Error("[Sovereignty Alert] Execution prohibited in Cloud Mode.");
            const { cliBridge } = await import('./cli/CLIBridge');
            return cliBridge.execute(cmd);
        },
        getStatus: async () => {
            const available = await this.isBridgeAvailable();
            if (!available) return { success: false, status: 'CLOUD_MODE', message: 'Local Bridge Unreachable' };
            const { localBridgeClient } = await import('./bridge/LocalBridgeService');
            return localBridgeClient.getStatus();
        },
        setSyncMode: async (mode: any) => {
            if (!(await this.isBridgeAvailable())) return { success: false };
            const { localBridgeClient } = await import('./bridge/LocalBridgeService');
            return localBridgeClient.setSyncMode(mode);
        }
    };

    private async isBridgeAvailable(): Promise<boolean> {
        // Core Logic: If we are on a worker/page domain, the bridge is NEVER accessible without a tunnel
        if (typeof window !== 'undefined') {
            const h = window.location.hostname;
            if (h.includes('.pages.dev') || h.includes('.workers.dev') || h.includes('pog-ultimate')) return false;
        }

        // Even on localhost, we check if the bridge is actually responding
        try {
            const { localBridgeClient } = await import('./bridge/LocalBridgeService');
            const status = await localBridgeClient.getStatus();
            return status.isConnected;
        } catch (e) {
            return false;
        }
    }

    // Neural Limbs
    private eventBus = new Map<string, ((data: any) => void)[]>();

    public limbs: LimbManager = {
        on: (event: string, handler: (data: any) => void) => {
            if (!this.eventBus.has(event)) this.eventBus.set(event, []);
            this.eventBus.get(event)!.push(handler);
        },
        off: (event: string, handler: (data: any) => void) => {
            const handlers = this.eventBus.get(event) || [];
            this.eventBus.set(event, handlers.filter(h => h !== handler));
        },
        emit: (event: string, data: any) => {
            const handlers = this.eventBus.get(event) || [];
            handlers.forEach(h => h(data));
        },
        call: async (limbId: string, verb: string, payload: any) => {
            const config = mcpConfigManager.getConfig();

            const response = await fetch('/api/session/default/api/limb/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Session-ID': 'default',
                    'X-Gemini-Key': config.providers.gemini?.apiKey || '',
                    'X-Fireworks-Key': config.providers.external?.fireworksKey || '',
                    'X-Allow-Paid': config.routing.allowPaidOverflow ? 'true' : 'false'
                },
                body: JSON.stringify({ limbId, action: verb, payload })
            });

            if (!response.ok) {
                const err = await response.json() as any;
                throw new Error(err.error || `Limb execution failed: ${response.statusText}`);
            }

            const result = await response.json();
            this.limbs.emit(`execution_success:${verb}`, result);
            return result;
        }
    };
    // Monitoring
    public stats = {
        get: async () => {
            const response = await fetch('/api/session/default/api/session/stats', {
                method: 'GET',
                headers: { 'X-Session-ID': 'default' }
            });
            if (!response.ok) throw new Error('Failed to fetch stats');
            return response.json();
        },
        getTraces: async () => {
            const response = await fetch('/api/session/default/api/traces', {
                method: 'GET',
                headers: { 'X-Session-ID': 'default' }
            });
            if (!response.ok) throw new Error('Failed to fetch traces');
            return response.json();
        },
        getAssets: async () => {
            const response = await fetch('/api/session/default/api/assets', {
                method: 'GET',
                headers: { 'X-Session-ID': 'default' }
            });
            if (!response.ok) throw new Error('Failed to fetch assets');
            return response.json();
        }
    };

    /**
     * Pipeline Split: RSC (Classic) vs Modern (2004+)
     */
    public rsmv = {
        modern: null as any, // To be initialized via LazyModernPipeline
        classic: null as any  // To be initialized via LazyClassicPipeline
    };

    /**
     * Proactive separation of pipeline logic
     */
    public async initClassicPipeline() {
        const { getClassicRSMV } = await import('./rsmv');
        this.rsmv.classic = await getClassicRSMV({
            env: (this as any).env, // Inject ServiceHub env if available
            stagedPath: 'staged_assets/classic' // Use relative path for cloud
        });
        return this.rsmv.classic;
    }

    public async initModernPipeline() {
        const { getModernRSMV } = await import('./rsmv');
        this.rsmv.modern = await getModernRSMV({
            env: (this as any).env,
            stagedPath: 'staged_assets/modern'
        });
        return this.rsmv.modern;
    }
}

export interface LimbManager {
    on: (event: string, handler: (data: any) => void) => void;
    off: (event: string, handler: (data: any) => void) => void;
    emit: (event: string, data: any) => void;
    call: (limbId: string, verb: string, payload: any) => Promise<any>;
}

export const ServiceHub = new ServiceHubClass();
export default ServiceHub;
