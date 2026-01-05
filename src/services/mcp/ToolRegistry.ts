
export interface ToolDefinition {
    name: string;
    description: string;
    inputSchema: {
        type: 'object';
        properties: Record<string, any>;
        required?: string[];
    };
}

export type ToolHandler = (args: any) => Promise<any>;

export class ToolRegistry {
    private tools: Map<string, { definition: ToolDefinition, handler: ToolHandler }> = new Map();

    registerTool(definition: ToolDefinition, handler: ToolHandler) {
        this.tools.set(definition.name, { definition, handler });
        console.log(`[MCP] Registered tool: ${definition.name}`);
    }

    getTools(): ToolDefinition[] {
        return Array.from(this.tools.values()).map(t => t.definition);
    }

    hasTool(name: string): boolean {
        return this.tools.has(name);
    }

    async executeTool(name: string, args: any): Promise<any> {
        const tool = this.tools.get(name);
        if (!tool) {
            throw new Error(`Tool not found: ${name}`);
        }
        try {
            console.log(`[MCP] Executing ${name} with args:`, args);
            return await tool.handler(args);
        } catch (error: any) {
            console.error(`[MCP] Error executing ${name}:`, error);
            throw new Error(`Tool execution failed: ${error.message}`);
        }
    }
}
