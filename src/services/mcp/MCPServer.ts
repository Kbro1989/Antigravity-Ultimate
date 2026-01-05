
import { ToolRegistry } from './ToolRegistry';
import { localBridgeClient } from '../bridge/LocalBridgeService';

export class MCPServer {
    private registry: ToolRegistry;

    constructor() {
        this.registry = new ToolRegistry();
        this.registerDefaultTools();
    }

    private registerDefaultTools() {
        // Tool: fs_read_file
        this.registry.registerTool(
            {
                name: 'fs_read_file',
                description: 'Read a file from the local filesystem via the bridge',
                inputSchema: {
                    type: 'object',
                    properties: {
                        path: { type: 'string', description: 'Absolute path to file' }
                    },
                    required: ['path']
                }
            },
            async (args: { path: string }) => {
                const res = await localBridgeClient.readLocalFile(args.path);
                if (!res.success) throw new Error(res.error || 'Unknown error reading file');
                return { content: res.content };
            }
        );

        // Tool: fs_list_dir
        this.registry.registerTool(
            {
                name: 'fs_list_dir',
                description: 'List contents of a directory',
                inputSchema: {
                    type: 'object',
                    properties: {
                        path: { type: 'string', description: 'Directory path' }
                    },
                    required: ['path']
                }
            },
            async (args: { path: string }) => {
                const res = await localBridgeClient.listDirectory(args.path);
                if (!res.success) throw new Error(res.error || 'Unknown error listing directory');
                return { files: res.files };
            }
        );

        // Tool: rsmv_link_cache (Placeholder until RSMVEngine is injected or imported)
        this.registry.registerTool(
            {
                name: 'rsmv_link_cache',
                description: 'Link the local RuneScape cache directory',
                inputSchema: {
                    type: 'object',
                    properties: {},
                }
            },
            async () => {
                // DYNAMIC IMPORT TO AVOID CIRCULAR DEPS IF NEEDED
                const { RSMVEngine } = await import('../rsmvService');
                return { status: 'cache_check_initiated_legacy' };
            }
        );

        console.log('[MCPServer] Initialized with default tools.');
    }

    // MCP Protocol Handler (JSON-RPC 2.0 style)
    async processRequest(request: any): Promise<any> {
        if (!request || !request.method) {
            throw new Error('Invalid JSON-RPC request');
        }

        switch (request.method) {
            case 'tools/list':
                return {
                    tools: this.registry.getTools()
                };

            case 'tools/call':
                if (!request.params || !request.params.name) {
                    throw new Error('Missing method params');
                }
                const result = await this.registry.executeTool(request.params.name, request.params.arguments || {});
                return {
                    content: [
                        { type: 'text', text: JSON.stringify(result) }
                    ]
                };

            case 'ping':
                return { result: 'pong' };

            default:
                throw new Error(`Method not supported: ${request.method}`);
        }
    }

    getRegistry() {
        return this.registry;
    }
}

export const mcpServer = new MCPServer();
