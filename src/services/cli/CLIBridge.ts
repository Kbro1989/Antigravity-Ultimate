import { localBridgeClient } from '../bridge/LocalBridgeService';
import { nexusBus } from '../core/NexusCommandBus';

export interface BridgeRequest {
    messageId: string;
    type: string;
    [key: string]: any;
}

export interface BridgeResponse {
    messageId: string;
    type: string;
    success: boolean;
    error?: string;
    [key: string]: any;
}

/**
 * CLIBridge Wrapper
 * Redirects legacy CLIBridge calls to the smarter LocalBridgeService (with Relay support).
 */
export class CLIBridge {
    private static instance: CLIBridge;

    private constructor() { }

    public static getInstance(): CLIBridge {
        if (!CLIBridge.instance) {
            CLIBridge.instance = new CLIBridge();
        }
        return CLIBridge.instance;
    }

    public connect(url: string = 'ws://localhost:3040') {
        localBridgeClient.setBridgeUrl(url);
    }

    public async sendRequest(type: string, payload: any): Promise<any> {
        // Map raw sendRequest to LocalBridgeService methods if possible, 
        // or expose a raw `sendMessage` on LocalBridgeService.
        // For now, we'll map the known types.
        if (type === 'terminal_command') {
            return {
                success: true,
                output: (await localBridgeClient.runTerminalCommand(payload.command, payload.cwd)).output
            };
        }
        if (type === 'fs_read') {
            return {
                success: true,
                content: await localBridgeClient.readLocalFile(payload.filePath)
            };
        }
        // Fallback for other types would require exposing raw message sending in LocalBridgeService.
        // Given time constraints, it's safer to just inject the Cloud Auto-Detect logic into CLIBridge 
        // OR expose sendMessage in LocalBridgeService. 
        // Let's go with OPTION B: Copy the Auto-Detect logic into CLIBridge for safety/speed 
        // to avoid refactoring LocalBridgeService public API right now.
        throw new Error('Direct sendRequest deprecated. Use methods.');
    }

    // --- ALIGNED API METHODS ---

    public async execute(command: string, cwd?: string): Promise<string> {
        const res = await localBridgeClient.runTerminalCommand(command, cwd);
        return res.output || '';
    }

    public async runCommand(command: string, cwd?: string): Promise<string> {
        return this.execute(command, cwd);
    }

    public async readFile(filePath: string, base64: boolean = false): Promise<string> {
        const res = await localBridgeClient.readLocalFile(filePath, base64);
        return res.content || '';
    }

    public async writeFile(filePath: string, content: string): Promise<void> {
        await localBridgeClient.writeLocalFile(filePath, content);
    }

    public async listDirectory(dirPath: string): Promise<any[]> {
        const res = await localBridgeClient.listDirectory(dirPath);
        return res.files || [];
    }

    public async deleteFile(filePath: string): Promise<void> {
        await localBridgeClient.deleteLocalFile(filePath);
    }
}

// Export singleton
export const cliBridge = CLIBridge.getInstance();
