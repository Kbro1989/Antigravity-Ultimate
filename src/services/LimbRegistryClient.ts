import { ServiceHub } from './ServiceHub';
import { WorkspaceMode } from './core/ModeManager';

/**
 * The LimbRegistryClient acts as the central dispatch for all Dashboard Tools.
 * It routes specific tool actions (e.g., "code.refactor", "mesh.sculpt") to the appropriate Neural Limb.
 * 
 * Philosophy: "Reality over Stubs" - This client delegates to REAL services.
 */
export class LimbRegistryClient {

    /**
     * Executes a specific tool within a workspace context.
     * @param workspace The active workspace (e.g., 'code', 'mesh', 'orchestrator')
     * @param toolId The ID of the tool being activated (e.g., 'refactor', 'sculpt')
     * @param params Additional parameters for the execution
     */
    static async executeTool(workspace: WorkspaceMode, toolId: string, params: any = {}) {
        /*
         * MAPPING STRATEGY:
         * Workspace -> Limb ID
         * Tool ID -> Limb Action / Capability
         */
        const hub = ServiceHub;

        // 1. Resolve Target Limb
        const limbMap: Record<string, string> = {
            'code': 'code',
            'orchestrator': 'orchestrator',
            'flow': 'orchestrator',
            'mesh': 'mesh',
            '3d': 'mesh',
            'rig': 'mesh',
            'spatial': 'mesh', // specialized
            'creative': 'image',
            'vfx': 'image', // specialized
            'audio': 'audio',
            'entity': 'entity',
            'game': 'live_game',
            'live': 'live_game',
            'world': 'world',
            'environment': 'world', // alias
            'landscape': 'landscape',
            'physics': 'physics',
            'relic': 'relic',
            'classic': 'relic',
            'security': 'security',
            'system': 'system',
            'file': 'file',
            'filesystem': 'file',
            'data': 'data',
            'network': 'network',
            'video': 'video',
            'image': 'image',
            'material': 'material',
            'animation': 'animation',
            'ghost': 'ghost',
            'reality': 'reality',
            'quantum': 'quantum',
            'divine': 'divine',
            'pipeline': 'orchestrator' // Pipeline tools routed to orchestrator
        };

        const targetLimbId = limbMap[workspace];

        if (!targetLimbId) {
            throw new Error(`No Limb registered for workspace: ${workspace}`);
        }

        // 2. Dispatch to Limb
        // Most tools map directly to a method on the limb with the same name,
        // or a generalized 'execute_tool' method.

        console.log(`[LimbRegistry] Dispatching ${workspace}.${toolId} -> ${targetLimbId}`);

        try {
            // Priority: Check if the limb has a specific method for this tool
            // e.g. code.refactor -> codeLimb.refactor()

            // We use the generic 'call' method on the ServiceHub's limb manager
            // This assumes the limb manager has a way to route dynamically.
            // If the method doesn't exist on the class, the NeuralLimb base should handle it via AI.

            const result = await hub.limbs.call(targetLimbId, toolId, params);
            return result;

        } catch (e: any) {
            console.error(`[LimbRegistry] Execution Failed:`, e);
            throw e;
        }
    }
}
