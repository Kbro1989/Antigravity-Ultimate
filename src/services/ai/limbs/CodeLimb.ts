import { NeuralLimb } from './NeuralLimb';
import { CLIBridge } from '../../cli/CLIBridge';
import { SecurityLimb } from './SecurityLimb';
import { AgentCapability, assertCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';

export class CodeLimb extends NeuralLimb {
    private bridge: CLIBridge;
    public capabilities = [
        'read', 'write', 'search', 'audit', 'lint', 'format',
        'generate_test', 'analyze_complexity', 'explain_code', 'refactor_code',
        'update_types', 'generate_doc', 'find_references', 'rename_symbol', 'fix_lint',
        'optimize_imports', 'check_circular_deps', 'dependency_audit', 'security_scan',
        'generate_boilerplate', 'convert_language', 'minify', 'obfuscate', 'ast_query',
        'lint_staged', 'git_blame_analysis', 'mock_generate', 'schema_inference',
        'performance_audit', 'modularize'
    ];

    constructor(config: any) {
        super(config);
        this.bridge = CLIBridge.getInstance();
    }

    async process(intent: any) {
        const { action, path, content, query, payload } = intent;

        // Constitutional Enforcement
        assertCapability('CodeLimb', AgentCapability.AI_INFERENCE);

        await this.logActivity(`code_${action}`, 'pending', { path });

        try {
            let result;
            switch (action) {
                case 'read':
                    assertCapability('CodeLimb', AgentCapability.READ_FILES);
                    result = await this.bridge.readFile(SecurityLimb.sanitizePath(path));
                    break;
                case 'write':
                    assertCapability('CodeLimb', AgentCapability.WRITE_FILES);
                    result = await this.bridge.writeFile(SecurityLimb.sanitizePath(path), content);
                    break;
                case 'search':
                    assertCapability('CodeLimb', AgentCapability.MEMORY_QUERY);
                    result = await this.bridge.runCommand(`grep -r "${query}" .`);
                    break;
                case 'lint':
                    assertCapability('CodeLimb', AgentCapability.EXECUTE_COMMAND);
                    result = await this.bridge.runCommand(`npm run lint ${path}`);
                    break;

                // Cursor Tier: Intelligent Code Generation
                case 'generate_code':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callAI({
                        type: 'code',
                        prompt: payload?.prompt || intent.prompt,
                        language: payload?.language || 'typescript',
                        context: payload?.context
                    });

                // Cursor Tier: Multi-File Edit (Composer)
                case 'generate_multifile':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callAI({
                        type: 'code',
                        prompt: `Generate multiple files for: ${payload?.prompt || intent.prompt}`,
                        systemPrompt: 'You are a multi-file code generator. Return a JSON structure with "files": [{ path, content }]'
                    });

                // Windsurf Tier: Context-Aware Refactoring
                case 'refactor':
                case 'refactor_code':
                    this.enforceCapability(AgentCapability.MODIFY_CODE);
                    return await this.callAI({
                        type: 'code',
                        prompt: `Refactor this code: ${payload?.code || intent.code}`,
                        systemPrompt: 'Refactor the code to improve quality/performance. Return the refactored code.'
                    });

                // Security Audit
                case 'audit_security':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callAI({
                        type: 'text',
                        prompt: `Audit this code for security vulnerabilities: ${payload?.code || intent.code}`,
                        systemPrompt: 'You are a security auditor. List vulnerabilities in JSON format.'
                    });

                // Explain Code
                case 'explain':
                case 'explain_code':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callAI({
                        type: 'text',
                        prompt: `Explain this code:\n${payload?.code || intent.code}`,
                        language: payload?.language
                    });

                // Fix Error
                case 'fix_error':
                case 'fix_lint':
                    this.enforceCapability(AgentCapability.MODIFY_CODE);
                    return await this.callAI({
                        type: 'code',
                        prompt: `Fix this error: ${payload?.error}\nIn code:\n${payload?.code}`,
                        systemPrompt: 'Return the fixed code block only.'
                    });

                case 'analyze_complexity':
                    // Maybe keep this local or use AI? Let's use AI for now as requested "No Mocks"
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    return await this.callAI({
                        type: 'text',
                        prompt: `Analyze complexity of:\n${payload?.code}`,
                        systemPrompt: 'Return cyclomatic complexity and maintainability score in JSON.'
                    });

                default:
                    if (this.capabilities.includes(action)) {
                        // Fallback to generic AI processing for any registered capability
                        return await this.callAI({
                            type: 'text',
                            prompt: `Perform action '${action}' on:\n${payload?.code || JSON.stringify(payload)}`
                        });
                    }
                    throw new Error(`Unknown code action: ${action}`);
            }

            await this.logActivity(`code_${action}`, 'success', { path });
            return { status: 'success', data: result };
        } catch (e: any) {
            await this.logActivity(`code_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
    }

    private async callAI(request: any) {
        const response: any = await modelRouter.route(request);

        // Flatten the response so properties like 'code', 'explanation', 'diff' 
        // are available at the top level, matching the original API contract.
        return {
            status: 'success',
            ...(typeof response === 'object' ? response : { content: response }),
            provider: response.provider || 'ai-router',
            model: response.model || 'neural-matrix',
            timestamp: Date.now()
        };
    }
}
