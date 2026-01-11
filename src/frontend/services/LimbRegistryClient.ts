/**
 * LimbRegistryClient.ts
 * Client-side registry connecting WorkspaceSpine tools to ServiceHub capabilities.
 * "Attaches the limbs to the spine"
 */

import ServiceHub from '../../services/ServiceHub';

export interface ToolContext {
    activeFile?: string;
    selection?: string;
    content?: string;
    timestamp?: number;
    mode?: string;
}

export class LimbRegistryClient {

    /**
     * Executes a tool action based on workspace and tool ID
     */
    static async executeTool(workspace: string, toolId: string, context: ToolContext = {}) {
        console.log(`[LimbRegistry] Executing ${workspace}.${toolId}`, context);

        switch (workspace) {
            case 'code':
                return this.handleCodeTools(toolId, context);
            case 'creative':
            case 'image':
            case 'vfx':
                return this.handleCreativeTools(toolId, context);
            case 'audio':
                return this.handleAudioTools(toolId, context);
            case 'flow':
            case 'pipeline':
            case 'orchestrator':
                return this.handleFlowTools(toolId, context);
            case '3d':
            case 'mesh':
            case 'rig':
                return this.handle3DTools(toolId, context);
            case 'world':
            case 'environment':
            case 'landscape':
                return this.handleWorldTools(toolId, context);
            case 'relic':
            case 'classic':
                return this.handleRelicTools(toolId, context);
            case 'entity':
                return this.handleEntityTools(toolId, context);
            case 'system':
            case 'file':
            case 'filesystem':
            case 'security':
            case 'data':
            case 'live':
            case 'game':
            case 'idauditor':
            case 'versioncontrol':
            case 'spatial':
                return this.handleSystemTools(workspace, toolId, context);
            default:
                // Generic fallback for any other limb
                return ServiceHub.limbs.call(workspace, toolId, context);
        }
    }

    private static async handleCodeTools(toolId: string, context: ToolContext) {
        switch (toolId) {
            case 'ai-complete':
            case 'complete':
                return ServiceHub.ai.codeComplete(context.content || '', '', context.activeFile || 'untitled');
            case 'refactor':
                return ServiceHub.ai.refactor(context.selection || context.content || '', context.activeFile || 'untitled');
            case 'audit':
                return ServiceHub.ai.audit(context.content || '', context.activeFile || 'untitled');
            case 'cascade':
                return ServiceHub.limbs.call('code', 'cascade', context);
            case 'search':
                return ServiceHub.bridge.execute(`grep -r "${context.content}" .`);
            default:
                return ServiceHub.limbs.call('code', toolId, context);
        }
    }

    private static async handleCreativeTools(toolId: string, context: ToolContext) {
        switch (toolId) {
            case 'generate':
            case 'generate-image':
                return ServiceHub.ai.image(context.content || '', '1:1');
            case 'variation':
                return ServiceHub.limbs.call('image', 'variation', context);
            case 'remove-bg':
                return ServiceHub.ai.process({ action: 'image_remove_bg', path: context.activeFile });
            case 'compile-shader':
            case 'shader':
                return ServiceHub.ai.process({ action: 'material_compile', code: context.content });
            default:
                return ServiceHub.limbs.call('image', toolId, context);
        }
    }

    private static async handleAudioTools(toolId: string, context: ToolContext) {
        switch (toolId) {
            case 'tts':
            case 'generate':
                return ServiceHub.ai.speech(context.content || '');
            case 'analyze-audio':
                return ServiceHub.ai.process({ action: 'audio_analyze', path: context.activeFile });
            default:
                return ServiceHub.limbs.call('audio', toolId, context);
        }
    }

    private static async handleFlowTools(toolId: string, context: ToolContext) {
        switch (toolId) {
            case 'run-workflow':
            case 'plan':
                return ServiceHub.ai.chat(context.content || '', []);
            case 'execute-logic':
            case 'execute':
                return ServiceHub.ai.process({ action: 'system_execute_vibe', code: context.content });
            default:
                const limb = toolId === 'orchestrate' ? 'orchestrator' : 'pipeline';
                return ServiceHub.limbs.call(limb, toolId, context);
        }
    }

    private static async handle3DTools(toolId: string, context: ToolContext) {
        switch (toolId) {
            case 'view-mesh':
                return { status: 'loading_mesh', path: context.activeFile };
            case 'analyze-nif':
            case 'topo':
                return ServiceHub.ai.process({ action: 'mesh_analyze', path: context.activeFile });
            case 'remesh':
                return ServiceHub.limbs.call('mesh', 'remesh', context);
            default:
                return ServiceHub.limbs.call('mesh', toolId, context);
        }
    }

    private static async handleWorldTools(toolId: string, context: ToolContext) {
        const limb = toolId === 'regen' ? 'world' : 'landscape';
        return ServiceHub.limbs.call(limb, toolId, context);
    }

    private static async handleRelicTools(toolId: string, context: ToolContext) {
        return ServiceHub.limbs.call('relic', toolId, context);
    }

    private static async handleEntityTools(toolId: string, context: ToolContext) {
        return ServiceHub.limbs.call('entity', toolId, context);
    }

    private static async handleSystemTools(workspace: string, toolId: string, context: ToolContext) {
        const mapping: Record<string, string> = {
            'live': 'live_game',
            'game': 'live_game',
            'idauditor': 'id_auditor',
            'versioncontrol': 'version_control',
            'spatial': 'spatial_pipeline'
        };
        const limbId = mapping[workspace] || workspace;
        return ServiceHub.limbs.call(limbId, toolId, context);
    }
}

export default LimbRegistryClient;
