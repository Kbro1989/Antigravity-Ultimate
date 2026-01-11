/**
 * N8N Workflow Execution Engine
 * Executes workflow graphs with dependency resolution
 * Ported and adapted for POG-Ultimate
 */

import { NodeType, getNodeDefinition } from './nodeDefinitions';
import { modelRouter } from '../ModelRouter';
import { ServiceHub } from '../../ServiceHub';

export interface WorkflowNode {
    id: string;
    type: NodeType;
    position: { x: number; y: number };
    parameters: Record<string, any>;
}

export interface WorkflowConnection {
    id: string;
    sourceNode: string;
    sourceOutput: string;
    targetNode: string;
    targetInput: string;
}

export interface Workflow {
    id: string;
    name: string;
    nodes: WorkflowNode[];
    connections: WorkflowConnection[];
}

export interface ExecutionContext {
    variables: Map<string, any>;
    nodeOutputs: Map<string, any>;
}

export class WorkflowEngine {
    private context: ExecutionContext;

    constructor() {
        this.context = {
            variables: new Map(),
            nodeOutputs: new Map()
        };
    }

    /**
     * Execute entire workflow
     */
    async execute(workflow: Workflow): Promise<{ success: boolean; outputs: Record<string, any>; error?: string }> {
        console.log(`[WORKFLOW] Executing: ${workflow.name}`);

        try {
            // Reset context
            this.context.variables.clear();
            this.context.nodeOutputs.clear();

            // Build execution order (topological sort)
            const executionOrder = this.topologicalSort(workflow);

            // Execute nodes in order
            for (const nodeId of executionOrder) {
                const node = workflow.nodes.find(n => n.id === nodeId);
                if (!node) continue;

                console.log(`[WORKFLOW] Executing node: ${node.id} (${node.type})`);

                // Get inputs for this node
                const inputs = this.getNodeInputs(node, workflow);

                // Execute node
                const output = await this.executeNode(node, inputs);

                // Store output
                this.context.nodeOutputs.set(node.id, output);
            }

            return {
                success: true,
                outputs: Object.fromEntries(this.context.nodeOutputs)
            };
        } catch (error) {
            console.error('[WORKFLOW] Execution failed:', error);
            return {
                success: false,
                outputs: {},
                error: String(error)
            };
        }
    }

    /**
     * Get inputs for a node from connected nodes
     */
    private getNodeInputs(node: WorkflowNode, workflow: Workflow): Record<string, any> {
        const inputs: Record<string, any> = {};

        // Find connections targeting this node
        const incomingConnections = workflow.connections.filter(c => c.targetNode === node.id);

        for (const conn of incomingConnections) {
            const sourceOutput = this.context.nodeOutputs.get(conn.sourceNode);
            if (sourceOutput !== undefined) {
                inputs[conn.targetInput] = sourceOutput[conn.sourceOutput] || sourceOutput;
            }
        }

        return inputs;
    }

    /**
     * Execute a single node
     */
    private async executeNode(node: WorkflowNode, inputs: Record<string, any>): Promise<any> {
        const def = getNodeDefinition(node.type);

        switch (node.type) {
            case 'input':
            case 'prompt':
                return { data: node.parameters.value || node.parameters.text };

            case 'ai_text':
                const textResponse: any = await modelRouter.route({
                    type: 'text',
                    prompt: inputs.prompt || node.parameters.prompt || '',
                    modelId: node.parameters.model
                }, (globalThis as any).env);
                return { text: textResponse.content };

            case 'ai_image':
                const imageResponse: any = await modelRouter.route({
                    type: 'image',
                    prompt: inputs.prompt || node.parameters.prompt || '',
                    modelId: node.parameters.model
                }, (globalThis as any).env);
                return { imageUrl: imageResponse.imageUrl };

            case 'ai_code':
                const codeResponse: any = await modelRouter.route({
                    type: 'code',
                    prompt: inputs.prompt || node.parameters.prompt || '',
                    modelId: node.parameters.model,
                    options: { language: node.parameters.language }
                }, (globalThis as any).env);
                return { code: codeResponse.code };

            case 'ai_reasoning':
                const reasoningResponse: any = await modelRouter.route({
                    type: 'text',
                    prompt: `Think step-by-step:\n\n${inputs.problem || ''}`,
                    modelId: node.parameters.model || 'REASONING'
                }, (globalThis as any).env);
                return { solution: reasoningResponse.content };

            case 'file_writer':
                // Using ServiceHub.bridge which is a LocalBridgeClient instance
                const bridge = (await ServiceHub.getAnchors()) as any; // Temporary cast until we verify bridge availability
                const writeResult = await bridge.writeLocalFile(
                    inputs.path || node.parameters.path || '',
                    inputs.content || node.parameters.content || ''
                );
                return { success: writeResult.success };

            case 'transform':
                try {
                    const transformFn = new Function('data', node.parameters.code || 'return data;');
                    return { result: transformFn(inputs.data) };
                } catch (e) {
                    return { result: inputs.data };
                }

            case 'filter':
                try {
                    const filterFn = new Function('data', node.parameters.condition || 'return true;');
                    const passes = filterFn(inputs.data);
                    return passes ? { true: inputs.data } : { false: inputs.data };
                } catch (e) {
                    return { false: inputs.data };
                }

            case 'variable':
                if (node.parameters.operation === 'set') {
                    this.context.variables.set(node.parameters.name, inputs.value);
                    return { value: inputs.value };
                } else {
                    return { value: this.context.variables.get(node.parameters.name) };
                }

            case 'merge':
                return {
                    merged: {
                        ...inputs.input1,
                        ...inputs.input2
                    }
                };

            case 'http':
                try {
                    const response = await fetch(node.parameters.url, {
                        method: node.parameters.method || 'GET',
                        headers: { 'Content-Type': 'application/json' },
                        body: node.parameters.method !== 'GET' ? JSON.stringify(inputs.body || {}) : undefined
                    });
                    const data = await response.json();
                    return { response: data };
                } catch (e) {
                    return { response: { error: String(e) } };
                }

            case 'discord':
                try {
                    await fetch(node.parameters.webhookUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ content: inputs.message })
                    });
                    return { success: true };
                } catch (e) {
                    return { success: false, error: String(e) };
                }

            case 'git_commit':
                const bridgeGit = (await ServiceHub.getAnchors()) as any;
                const commitMsg = node.parameters.message || 'Auto-commit from Neural Engine';
                // Stage all changes
                const stageRes = await bridgeGit.gitOperation('add .');
                if (!stageRes.success) throw new Error(`Git add failed: ${stageRes.error}`);

                // Commit
                const commitRes = await bridgeGit.gitOperation(`commit -m "${commitMsg}"`);
                if (!commitRes.success) {
                    if (commitRes.error?.includes('nothing to commit')) return { commitHash: 'no-changes' };
                    throw new Error(`Git commit failed: ${commitRes.error}`);
                }
                return { commitHash: 'latest' };

            case 'deploy':
                const bridgeDeploy = (await ServiceHub.getAnchors()) as any;
                const target = node.parameters.target || 'pages';
                const cmd = target === 'pages' ? 'npx wrangler pages deploy .' : 'npx wrangler deploy';
                const deployRes = await bridgeDeploy.runTerminalCommand(cmd);
                if (!deployRes.success) throw new Error(`Deploy failed: ${deployRes.error}`);
                return { url: 'https://pog-ultimate.pages.dev' };

            case 'cloudflare':
                const bridgeCF = (await ServiceHub.getAnchors()) as any;
                const actionCF = node.parameters.action || 'deploy_worker';
                let cfCmd = '';
                if (actionCF === 'deploy_worker') cfCmd = 'npx wrangler deploy';
                if (actionCF === 'deploy_pages') cfCmd = 'npx wrangler pages deploy .';

                const cfRes = await bridgeCF.runTerminalCommand(cfCmd);
                return { result: cfRes.success ? cfRes.output : cfRes.error };

            case 'loop':
                return { item: inputs.items ? inputs.items[0] : null };

            default:
                console.warn(`[WORKFLOW] Unhandled node type: ${node.type}`);
                return {};
        }
    }

    /**
     * Topological sort to determine execution order
     */
    private topologicalSort(workflow: Workflow): string[] {
        const visited = new Set<string>();
        const result: string[] = [];

        const visit = (nodeId: string) => {
            if (visited.has(nodeId)) return;
            visited.add(nodeId);

            const dependencies = workflow.connections
                .filter(c => c.targetNode === nodeId)
                .map(c => c.sourceNode);

            for (const depId of dependencies) {
                visit(depId);
            }

            result.push(nodeId);
        };

        const inputNodes = workflow.nodes.filter(node => {
            const hasIncoming = workflow.connections.some(c => c.targetNode === node.id);
            return !hasIncoming;
        });

        for (const node of inputNodes) {
            visit(node.id);
        }

        for (const node of workflow.nodes) {
            if (!visited.has(node.id)) {
                visit(node.id);
            }
        }

        return result;
    }
}

export const WORKFLOW_TEMPLATES: Record<string, Workflow> = {
    'asset-gen': {
        id: 'asset-gen',
        name: 'Asset Generation Pipeline',
        nodes: [
            {
                id: 'prompt-1',
                type: 'prompt',
                position: { x: 100, y: 100 },
                parameters: { text: 'Create a sci-fi robot character' }
            },
            {
                id: 'ai-image-1',
                type: 'ai_image',
                position: { x: 300, y: 100 },
                parameters: { model: 'sdxl', size: '1024x1024' }
            },
            {
                id: 'file-writer-1',
                type: 'file_writer',
                position: { x: 500, y: 100 },
                parameters: { path: 'assets/robot.png' }
            }
        ],
        connections: [
            {
                id: 'conn-1',
                sourceNode: 'prompt-1',
                sourceOutput: 'prompt',
                targetNode: 'ai-image-1',
                targetInput: 'prompt'
            },
            {
                id: 'conn-2',
                sourceNode: 'ai-image-1',
                sourceOutput: 'imageUrl',
                targetNode: 'file-writer-1',
                targetInput: 'content'
            }
        ]
    }
};

export const workflowEngine = new WorkflowEngine();
export default workflowEngine;
