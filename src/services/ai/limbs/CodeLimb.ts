import { NeuralLimb, LimbConfig } from './NeuralLimb';
// CLIBridge import removed for Sovereignty (Dynamically loaded)
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
        // Sovereignty: Bridge initialization is deferred to dynamic usage
    }

    private async getSafeBridge() {
        const { CLIBridge } = await import('../../cli/CLIBridge');
        const bridge = CLIBridge.getInstance();
        if (!bridge) throw new Error('[Sovereignty Shield] CLIBridge is offline. Local code operations are restricted to cloud-native sandboxes.');
        return bridge;
    }

    async analyze_complexity(params: CodeIntentPayload, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        return await this.callAI({
            type: 'text',
            prompt: `Analyze the complexity of this code and return a JSON with {score: number, tier: "LOW"|"MEDIUM"|"HIGH", analysis: string}: ${params.code || params.payload?.code}`,
            ...params,
            ...intent
        });
    }

    async read(params: CodeIntentPayload) {
        this.enforceCapability(AgentCapability.READ_FILES);
        if (!params.path) throw new Error("Missing path for read operation");
        const bridge = await this.getSafeBridge();
        return await bridge.readFile(params.path);
    }

    async write(params: CodeIntentPayload) {
        this.enforceCapability(AgentCapability.WRITE_FILES);
        if (!params.confirm) {
            throw new Error('[HITL Shield] File writes require explicit user confirmation. Add { confirm: true } to payload.');
        }
        const bridge = await this.getSafeBridge();
        return await bridge.writeFile(params.path!, params.content!);
    }

    async complete(params: CodeIntentPayload, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        return await this.callAI({
            type: 'code',
            ...params,
            ...intent
        });
    }

    async refactor(params: CodeIntentPayload, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.MODIFY_CODE);
        return await this.callAI({
            type: 'code',
            prompt: `Refactor this code: ${params.code}`,
            systemPrompt: 'Refactor for quality and performance.',
            ...params,
            ...intent
        });
    }

    async explain(params: CodeIntentPayload, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        return await this.callAI({
            type: 'text',
            prompt: `Explain this code: ${params.code}`,
            ...params,
            ...intent
        });
    }

    async test(params: CodeIntentPayload) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const bridge = await this.getSafeBridge();
        return await bridge.runCommand(`npm run test ${params.path || ''}`);
    }

    async generate_code(params: CodeIntentPayload, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        return await this.callAI({
            type: 'code',
            prompt: `Generate code for: ${params.prompt}`,
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

    /**
     * DECOMPILE CLIENTSCRIPT: Archeological Logic Restoration
     * Leverages the existing RSMV ClientScript engine to view binary logic.
     */
    async decompile_clientscript(params: { scriptId: number; era?: 'classic' | 'modern' }) {
        this.enforceCapability(AgentCapability.READ_FILES);
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

    /**
     * RECONSTRUCT FORENSIC HANDLING: Authentic JS Logic
     * Retrieves the JS handling logic from the reference implementation.
     * Sovereignty: This operation is restricted to environments with local bridge access.
     */
    async reconstruct_forensic_handling(params: { id: number; type: 'npc' | 'item' | 'object' | 'spell' | 'prayer' }) {
        this.enforceCapability(AgentCapability.READ_FILES);
        const { id, type } = params;

        // Sovereignty Shield: Local FS operations are restricted
        let bridge;
        try {
            bridge = await this.getSafeBridge();
        } catch (e) {
            return {
                status: 'error',
                message: "[Sovereignty Alert] Forensic reconstruction requires a Local Bridge connection to access historical reference archives."
            };
        }

        const root = (typeof process !== 'undefined' && process.cwd) ? process.cwd() : '/';
        const refRoot = path.join(root, 'reference', 'rsc-cloudflare', 'rsc-server', 'src', 'plugins');

        try {
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
}
