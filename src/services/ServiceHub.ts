// AI Services
import {
    runOrchestration,
    generateImage,
    synthesizeSpeech,
    generateVideo,
    getCodeCompletions,
    auditCode,
    refactorCode,
    searchSimilarAssets,
    costOptimizer,
    cloudflareLimiter,
    limbRegistry,
    FlowEngine,
    IntelRegistry,
    GoldContextService,
    RealityAnchorService
} from './ai';

// Core Services
import { circuitBreaker, securityService } from './core';
import { tokenLedger } from './core/TokenLedger';

// RSMV Services
// Handled lazily via initClassicPipeline / initModernPipeline

// Bridge Services
import { localBridgeClient } from './bridge';
import { cliBridge } from './cli/CLIBridge';

const flowEngine = FlowEngine.getInstance();

/**
 * ServiceHub provides unified access to all POG services
 * Use this in React components via useServiceHub hook
 */
export class ServiceHubClass {
    public flow = {
        trigger: (name: string, steps: any[]) => flowEngine.triggerWorkflow(name, steps),
        runStep: (stepId: string, action: () => Promise<any>) => flowEngine.runStep(stepId, action)
    };

    public intel = new IntelRegistry({} as any);
    public snapshots = new GoldContextService({} as any);
    public anchors = new RealityAnchorService();

    // AI Generation
    public ai = {
        chat: runOrchestration,
        image: generateImage,
        speech: synthesizeSpeech,
        video: generateVideo,
        codeComplete: getCodeCompletions,
        audit: auditCode,
        refactor: refactorCode,
        search: searchSimilarAssets,
        process: async (intent: any) => {
            console.log('[ServiceHub] Routing intent to agent:', intent);
            const response = await fetch('/api/session/default/ai/complete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(intent)
            });
            return response.json();
        },
        route: async (request: any) => costOptimizer.route(request)
    };

    // Infrastructure
    public infra = {
        circuitBreaker,
        security: securityService,
        bridge: cliBridge,
        ledger: tokenLedger
    };

    // Bridge Operations
    public bridge = {
        client: localBridgeClient,
        readFile: (path: string) => cliBridge.readFile(path),
        writeFile: (path: string, content: string) => cliBridge.writeFile(path, content),
        listDir: (path: string) => cliBridge.listDirectory(path),
        runCommand: (cmd: string) => cliBridge.runCommand(cmd),
        execute: (cmd: string) => cliBridge.execute(cmd),
        getStatus: () => localBridgeClient.getStatus(),
        setSyncMode: (mode: any) => localBridgeClient.setSyncMode(mode)
    };

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
            const response = await fetch('/api/session/default/api/limb/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Session-ID': 'default'
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
        this.rsmv.classic = getClassicRSMV();
        return this.rsmv.classic;
    }

    public async initModernPipeline() {
        const { getModernRSMV } = await import('./rsmv');
        this.rsmv.modern = getModernRSMV();
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
