import { localBridgeClient } from '../bridge/LocalBridgeService';

export class SnapshotTool {
    /**
     * Generates a high-performance project snapshot using the Python bridge
     */
    public static async generate(rootPath: string): Promise<{ success: boolean, outputPath?: string, error?: string }> {
        console.log(`[SnapshotTool] Generating snapshot for: ${rootPath}`);

        // Execute the python script via CLI bridge
        const cmd = `python cli/tools/snapshot_project.py --dir "${this.sanitizePath(rootPath)}" --out "temp_snapshot.json"`;
        const result = await localBridgeClient.runTerminalCommand(cmd);

        if (result.success) {
            return { success: true, outputPath: 'temp_snapshot.json' };
        } else {
            return { success: false, error: result.error };
        }
    }

    private static sanitizePath(path: string): string {
        return path.replace(/[&|<>;]/g, ''); // Basic shell injection protection
    }
}
