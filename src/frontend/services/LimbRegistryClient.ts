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
                return this.handleCreativeTools(toolId, context);
            case 'audio':
                return this.handleAudioTools(toolId, context);
            case 'flow':
                return this.handleFlowTools(toolId, context);
            case '3d':
                return this.handle3DTools(toolId, context);
            default:
                console.warn(`Unknown workspace: ${workspace}`);
                return null;
        }
    }

    private static async handleCodeTools(toolId: string, context: ToolContext) {
        switch (toolId) {
            case 'ai-complete':
                return ServiceHub.ai.codeComplete(context.content || '', '', context.activeFile || 'untitled');
            case 'refactor':
                return ServiceHub.ai.refactor(context.selection || context.content || '', context.activeFile || 'untitled');
            case 'audit':
                return ServiceHub.ai.audit(context.content || '', context.activeFile || 'untitled');
            case 'search':
                return ServiceHub.bridge.execute(`grep -r "${context.content}" .`);
            default:
                return { error: `Tool ${toolId} not implemented` };
        }
    }

    private static async handleCreativeTools(toolId: string, context: ToolContext) {
        switch (toolId) {
            case 'generate-image':
                return ServiceHub.ai.image(context.content || '', '1:1');
            case 'remove-bg':
                return ServiceHub.ai.process({ action: 'image_remove_bg', path: context.activeFile });
            case 'compile-shader':
                return ServiceHub.ai.process({ action: 'material_compile', code: context.content });
            default:
                return { error: `Creative tool ${toolId} not implemented` };
        }
    }

    private static async handleAudioTools(toolId: string, context: ToolContext) {
        switch (toolId) {
            case 'tts':
                return ServiceHub.ai.speech(context.content || '');
            case 'analyze-audio':
                return ServiceHub.ai.process({ action: 'audio_analyze', path: context.activeFile });
            default:
                return { error: `Audio tool ${toolId} not implemented` };
        }
    }

    private static async handleFlowTools(toolId: string, context: ToolContext) {
        switch (toolId) {
            case 'run-workflow':
                return ServiceHub.ai.chat(context.content || '', []);
            case 'execute-logic':
                return ServiceHub.ai.process({ action: 'system_execute_vibe', code: context.content });
            default:
                return { error: `Flow tool ${toolId} not implemented` };
        }
    }

    private static async handle3DTools(toolId: string, context: ToolContext) {
        switch (toolId) {
            case 'view-mesh':
                return { status: 'loading_mesh', path: context.activeFile };
            case 'analyze-nif':
                return ServiceHub.ai.process({ action: 'mesh_analyze', path: context.activeFile });
            default:
                return { status: '3d_action_queued', tool: toolId };
        }
    }
}

export default LimbRegistryClient;
