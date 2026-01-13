
import { EventEmitter } from 'events';
import { TSCError, AIResponse, CodeEdit } from './types';
import { modelRouter } from '../ModelRouter';
import { nexusBus } from '../../core/NexusCommandBus';

export class AIErrorResponder extends EventEmitter {
    private maxRetries = 2;
    private autoFixEnabled = true;

    constructor(autoFixEnabled = true) {
        super();
        this.autoFixEnabled = autoFixEnabled;
    }

    async respondToError(error: TSCError, context: {
        fileContent: string;
        projectRoot: string;
        userPatterns: Record<string, any>;
    }): Promise<{
        analysis: string;
        fix: string;
        codeEdit?: CodeEdit;
        confidence: number;
        applied: boolean;
    }> {
        this.emit('error:start', { error });

        try {
            // Get analyses from Cloudflare (primary) and Ollama (collaborator)
            const [cfAnalysis, ollamaAnalysis] = await Promise.all([
                this.analyzeError(error, context, 'cloudflare'),
                this.analyzeError(error, context, 'ollama')
            ]);

            this.emit('error:analysis', { error, cf: cfAnalysis, ollama: ollamaAnalysis });

            // Negotiate consensus fix via Mediator (High intelligence)
            const negotiatedFix = await this.negotiateFix(error, cfAnalysis, ollamaAnalysis, context);

            let applied = false;
            let codeEdit: CodeEdit | undefined;

            if (this.autoFixEnabled && negotiatedFix.confidence > 0.7) {
                // In cloud mode, we "propose" the edit to the CodeLimb / UI
                codeEdit = await this.createCodeEdit(error, negotiatedFix.fix, context);
                applied = true; // Mark as "propose-ready"
                this.emit('error:proposed', { error, fix: codeEdit });
            }

            const result = {
                analysis: negotiatedFix.analysis,
                fix: negotiatedFix.fix,
                codeEdit,
                confidence: negotiatedFix.confidence,
                applied
            };

            this.emit('error:end', { error, result });
            return result;

        } catch (err) {
            this.emit('error:failed', { error: err });
            throw err;
        }
    }

    private async analyzeError(error: TSCError, context: any, provider: 'cloudflare' | 'ollama'): Promise<any> {
        const prompt = this.buildErrorAnalysisPrompt(error, context);
        const res: any = await modelRouter.route({
            type: 'text',
            prompt,
            systemPrompt: 'You are an RSC Game Dev Expert fixing TypeScript errors.',
            provider
        }, (globalThis as any).POG_ENV);

        const content = typeof res === 'string' ? res : res.content || JSON.stringify(res);
        return this.parseErrorAnalysisResponse(content);
    }

    private buildErrorAnalysisPrompt(error: TSCError, context: any): string {
        const surroundingCode = context.fileContent.split('\n')
            .slice(Math.max(0, error.line - 5), error.line + 5)
            .join('\n');

        return `
<|im_start|>system
Analyze and fix this RSC Game Dev error.
File: ${error.file}:${error.line}
Error: ${error.message}

Context:
\`\`\`typescript
${surroundingCode}
\`\`\`

Response JSON: { "analysis": "string", "suggestedFix": "string", "confidence": number, "reasoning": "string" }
<|im_end|>
<|im_start|>assistant
{ "analysis": "`;
    }

    private async negotiateFix(error: TSCError, cf: any, ollama: any, context: any): Promise<any> {
        const prompt = `
<|im_start|>system
You are the POG Mediator. Decide on the best fix for this RSC error.
Cloudflare Proposal: ${cf.suggestedFix} (Conf: ${cf.confidence})
Ollama Proposal: ${ollama.suggestedFix} (Conf: ${ollama.confidence})

Response JSON: { "analysis": "string", "fix": "string", "confidence": number, "reasoning": "string" }
<|im_end|>
<|im_start|>assistant
{ "analysis": "`;

        const res: any = await modelRouter.route({
            type: 'text',
            prompt,
            provider: 'cloudflare',
            modelId: '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
        }, (globalThis as any).POG_ENV);

        const content = typeof res === 'string' ? res : res.content || JSON.stringify(res);
        return this.parseConsensusResponse(content);
    }

    private async createCodeEdit(error: TSCError, fix: string, context: any): Promise<CodeEdit> {
        return {
            file: error.file,
            range: {
                start: { line: error.line, character: 0 },
                end: { line: error.line, character: 100 } // Crude but indicator
            },
            newText: fix,
            reasoning: `Automated RSC fix for ${error.code}`
        };
    }

    private parseErrorAnalysisResponse(content: string): any {
        const jsonStr = content.match(/\{[\s\S]*\}/)?.[0] || '{}';
        return JSON.parse(jsonStr);
    }

    private parseConsensusResponse(content: string): any {
        const jsonStr = content.match(/\{[\s\S]*\}/)?.[0] || '{}';
        return JSON.parse(jsonStr);
    }
}
