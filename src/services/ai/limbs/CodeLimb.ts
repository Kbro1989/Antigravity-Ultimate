import { NeuralLimb, LimbConfig } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';
import { BaseIntent } from '../AITypes';
import * as path from 'path';

interface CodeIntentPayload {
    code?: string;
    path?: string;
    content?: string;
    prompt?: string;
    context?: string;
    payload?: any;
    confirm?: boolean; // HITL Requirement
}

export class CodeLimb extends NeuralLimb {
    constructor(config: LimbConfig) {
        super(config);
    }

    async analyze_complexity(params: CodeIntentPayload, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        return await this.callAI({
            type: 'text',
            prompt: `Analyze the complexity of this code and return a JSON with {score: number, tier: "LOW"|"MEDIUM"|"HIGH", analysis: string}: ${params.code || params.payload?.code}`,
            systemPrompt: this.getConstitutionalPrompt(),
            ...params,
            ...intent
        });
    }

    async complete(params: CodeIntentPayload, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        return await this.callAI({
            type: 'code',
            systemPrompt: this.getConstitutionalPrompt(),
            ...params,
            ...intent
        });
    }

    async refactor(params: CodeIntentPayload, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.MODIFY_CODE);
        return await this.callAI({
            type: 'code',
            prompt: `Refactor this code: ${params.code}`,
            systemPrompt: this.getConstitutionalPrompt() + '\nFocus on performance while maintaining RSC logic purity.',
            ...params,
            ...intent
        });
    }

    async explain(params: CodeIntentPayload, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        return await this.callAI({
            type: 'text',
            prompt: `Explain this code: ${params.code}`,
            systemPrompt: this.getConstitutionalPrompt(),
            ...params,
            ...intent
        });
    }

    async generate_code(params: CodeIntentPayload, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        return await this.callAI({
            type: 'code',
            prompt: `Generate code for: ${params.prompt}`,
            systemPrompt: this.getConstitutionalPrompt(),
            context: params.context,
            ...params,
            ...intent
        });
    }

    async cascade(params: CodeIntentPayload, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.MODIFY_CODE);
        return await this.callAI({
            type: 'code',
            prompt: `Cascade edit for: ${params.prompt}`,
            modelId: 'claude-3-5-sonnet',
            ...intent
        });
    }

    async audit(params: CodeIntentPayload, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        return await this.callAI({
            type: 'text',
            prompt: `Security audit for: ${params.code}`,
            ...intent
        });
    }

    async read(params: CodeIntentPayload) {
        this.enforceCapability(AgentCapability.READ_FILES);
        if (this.isCloudMode()) {
            throw new Error("[Sovereignty Alert] Local file reading is disabled in Cloud Mode. Use R2 browser or external tools.");
        }
        if (!params.path) throw new Error("Missing path for read operation");
        const { CLIBridge } = await import('../../cli/CLIBridge');
        const bridge = CLIBridge.getInstance();
        if (!bridge) throw new Error("CLIBridge offline");
        return await bridge.readFile(params.path);
    }

    async write(params: CodeIntentPayload) {
        this.enforceCapability(AgentCapability.WRITE_FILES);
        if (this.isCloudMode()) {
            throw new Error("[Sovereignty Alert] Local file writing is disabled in Cloud Mode.");
        }
        if (!params.confirm) throw new Error('[HITL Shield] File writes require explicit user confirmation.');
        const { CLIBridge } = await import('../../cli/CLIBridge');
        const bridge = CLIBridge.getInstance();
        if (!bridge) throw new Error("CLIBridge offline");
        return await bridge.writeFile(params.path!, params.content!);
    }

    async test(params: CodeIntentPayload) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        if (this.isCloudMode()) {
            throw new Error("[Sovereignty Alert] Remote command execution (npm/test) is disabled in Cloud Mode.");
        }
        const { CLIBridge } = await import('../../cli/CLIBridge');
        const bridge = CLIBridge.getInstance();
        if (!bridge) throw new Error("CLIBridge offline");
        return await bridge.runCommand(`npm run test ${params.path || ''}`);
    }

    /**
     * RECONSTRUCT FORENSIC HANDLING: Authentic JS Logic
     * Retrieves the JS handling logic from the reference implementation.
     */
    async reconstruct_forensic_handling(params: { id: number; type: 'npc' | 'item' | 'object' | 'spell' | 'prayer' }) {
        this.enforceCapability(AgentCapability.READ_FILES);
        const { id, type } = params;
        let targetId = id;

        // Intelligent Lookup: If ID is non-numeric, search Catalog
        if (isNaN(Number(id))) {
            const catalogRes = await this.limbs.call('relic', 'get_relic_catalog', {
                category: type + 's', // npc -> npcs
                search: String(id),
                limit: 1
            });
            if (catalogRes.status === 'success' && catalogRes.items.length > 0) {
                targetId = catalogRes.items[0].id;
                console.log(`[CodeLimb] Forensic Logic resolved: ${id} -> ${targetId}`);
            }
        }

        if (this.isCloudMode()) {
            return {
                status: 'error',
                message: "[Sovereignty Alert] Forensic reconstruction requires a Local Bridge connection. Please use 'explore_museum' via RelicLimb for Cloud-Native research."
            };
        }

        try {
            const { CLIBridge } = await import('../../cli/CLIBridge');
            const bridge = CLIBridge.getInstance();
            if (!bridge) throw new Error("Bridge offline");

            const root = (typeof process !== 'undefined' && process.cwd) ? process.cwd() : '/';
            const refRoot = path.join(root, 'reference', 'rsc-cloudflare', 'rsc-server', 'src', 'plugins');

            const constantsPath = path.join(root, 'reference', 'rsc-cloudflare', 'rsc-server', 'src', 'constants', 'ids.js');
            const constants = await bridge.readFile(constantsPath);

            const typeKey = type === 'npc' ? 'Npcs' : type === 'item' ? 'Items' : type === 'object' ? 'Objects' : null;
            let constantName = '';

            if (typeKey) {
                const regex = new RegExp(`${typeKey} = \\{[^\\}]*?(\\w+): ${id},?`, 's');
                const match = constants.match(regex);
                if (match) constantName = match[1];
            }

            const searchTerm = constantName ? `${typeKey}.${constantName}` : id.toString();
            const searchResult = await bridge.runCommand(`grep -r "${searchTerm}" "${refRoot}"`);

            if (searchResult && searchResult.includes(':')) {
                const firstFile = searchResult.split(':')[0].trim();
                const logic = await bridge.readFile(firstFile);

                return {
                    status: 'success',
                    id,
                    type,
                    logic,
                    sourceFile: firstFile,
                    message: `Forensic logic successfully reconstructed: ${path.basename(firstFile)}`
                };
            }
        } catch (e: any) {
            console.warn('[CodeLimb] Forensic reconstruction failed:', e.message);
        }

        return {
            status: 'error',
            message: "No specific gameplay handling found in forensic archives."
        };
    }

    /**
     * DECOMPILE CLIENTSCRIPT: Archeological Logic Restoration
     * Leverages the existing RSMV ClientScript engine to view binary logic.
     */
    async decompile_clientscript(params: { scriptId: number; era?: 'classic' | 'modern' }) {
        this.enforceCapability(AgentCapability.READ_FILES); // Checks permissions, but "reading" is internal to engine
        const { scriptId, era = 'classic' } = params;

        return {
            status: 'success',
            scriptId,
            era,
            instruction: 'CALL_INTERNAL_SERVICE',
            service: 'rsmv.clientscript.render',
            args: [scriptId]
        };
    }

    /**
     * ANALYZE LOGIC FLOW: Archeological Insight
     * Uses AI to interpret decompiled logic without suggesting modifications.
     */
    async analyze_logic_flow(params: { code: string }) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        return await this.callAI({
            type: 'text',
            prompt: `Analyze the following decompiled ClientScript logic. Explain its purpose and flow within the original RSC game engine. DO NOT suggest modifications; focus on archeological understanding.\n\nCODE:\n${params.code}`,
            systemPrompt: 'You are an RSC Archeologist specialized in Jagex ClientScript logic.'
        });
    }

    private async callAI(request: any) {
        const response: any = await modelRouter.route(request, this.env);
        return {
            status: 'success',
            ...(typeof response === 'object' ? response : { content: response }),
            provider: response.provider || 'ai-router',
            model: response.model || 'neural-matrix',
            timestamp: Date.now()
        };
    }

    /**
     * Specialized optimization for Code.
     * Focuses on token efficiency, performance, and Worker bundle size.
     */
    async optimize(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.OPTIMIZE_SYSTEM);
        const { target, goal } = params;

        await this.logActivity('code_optimize', 'pending', { target, goal });

        const prompt = `Optimize Source Code: ${target}
        Goal: ${goal}
        
        Sovereign Rule: THE SOURCE IS IMMUTABLE. 
        If target is 'relic://', you MUST NOT suggest changes to the original archive. 
        Instead, provide an optimized derivative in the Innovation Layer.
        
        Strategy: Use Cloudflare Workers/ESBuild context to reduce bundle size and improve execution time.
        If goal is "Token Efficiency", refactor for concise but readable logic.
        If goal is "Logic Pruning", identifying dead code paths given the Zero Local Dependency protocol.`;

        const result: any = await modelRouter.route({
            type: 'code',
            prompt,
            ...intent
        }, this.env);

        await this.logActivity('code_optimize', 'success', { target, goal });

        return {
            status: 'success',
            target,
            goal,
            resultCode: result.content,
            metadata: {
                ...result.metadata,
                optimizationType: 'code_refactor'
            }
        };
    }

    private isCloudMode(): boolean {
        if (typeof window !== 'undefined') {
            const h = window.location.hostname;
            return h.includes('.pages.dev') || h.includes('.workers.dev') || h.includes('pog-ultimate');
        }
        return !this.env?.LOCAL_DEV;
    }
}
