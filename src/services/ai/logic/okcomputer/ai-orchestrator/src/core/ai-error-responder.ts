/**
 * AI Error Responder for automated TypeScript error fixing
 */

import { EventEmitter } from 'events';
import * as fs from 'fs/promises';
import * as path from 'path';
import { TSCError, AIResponse, CodeEdit } from '../types/index.js';
import { CloudflareAIService } from '../services/cloudflare-ai.js';
import { OllamaService } from '../services/ollama.js';

export class AIErrorResponder extends EventEmitter {
  private cloudflareAI: CloudflareAIService;
  private ollamaAI: OllamaService;
  private maxRetries = 2;
  private autoFixEnabled = true;

  constructor(
    cloudflareAI: CloudflareAIService,
    ollamaAI: OllamaService,
    autoFixEnabled = true
  ) {
    super();
    this.cloudflareAI = cloudflareAI;
    this.ollamaAI = ollamaAI;
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
      // Get analyses from both AIs
      const [cloudflareAnalysis, ollamaAnalysis] = await Promise.all([
        this.analyzeError(error, context, 'cloudflare'),
        this.analyzeError(error, context, 'ollama')
      ]);

      this.emit('error:analysis', {
        error,
        cloudflare: cloudflareAnalysis,
        ollama: ollamaAnalysis
      });

      // Negotiate consensus on fix
      const negotiatedFix = await this.negotiateFix(
        error,
        cloudflareAnalysis,
        ollamaAnalysis,
        context
      );

      // Apply fix if auto-fix is enabled and confidence is high
      let applied = false;
      let codeEdit: CodeEdit | undefined;

      if (this.autoFixEnabled && negotiatedFix.confidence > 0.7) {
        try {
          codeEdit = await this.createCodeEdit(error, negotiatedFix.fix, context);
          
          if (codeEdit) {
            await this.applyCodeEdit(codeEdit);
            applied = true;
            this.emit('error:fixed', { error, fix: codeEdit });
          }
        } catch (applyError) {
          this.emit('error:apply-failed', { error, fix: negotiatedFix.fix, error: applyError });
        }
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

    } catch (error) {
      this.emit('error:failed', { error });
      throw error;
    }
  }

  private async analyzeError(
    error: TSCError,
    context: {
      fileContent: string;
      projectRoot: string;
      userPatterns: Record<string, any>;
    },
    aiType: 'cloudflare' | 'ollama'
  ): Promise<{
    analysis: string;
    suggestedFix: string;
    confidence: number;
    reasoning: string;
  }> {
    const prompt = this.buildErrorAnalysisPrompt(error, context, aiType);
    
    let response: AIResponse;
    
    if (aiType === 'cloudflare') {
      response = await this.cloudflareAI.generateResponse(prompt, {
        model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
      });
    } else {
      response = await this.ollamaAI.generateResponse(prompt, {
        model: 'codellama:13b'
      });
    }

    return this.parseErrorAnalysisResponse(response.content, response);
  }

  private buildErrorAnalysisPrompt(
    error: TSCError,
    context: {
      fileContent: string;
      projectRoot: string;
      userPatterns: Record<string, any>;
    },
    aiType: string
  ): string {
    const userPatterns = Object.entries(context.userPatterns)
      .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
      .join('\n');

    const surroundingCode = this.getSurroundingCode(context.fileContent, error.line);

    return `
<|im_start|>system
You are an expert TypeScript developer analyzing and fixing compilation errors.

Error Details:
- File: ${error.file}
- Line: ${error.line}
- Column: ${error.column}
- Error Code: ${error.code}
- Severity: ${error.severity}
- Message: ${error.message}

User Patterns:
${userPatterns || 'None defined'}

Surrounding Code (lines ${Math.max(1, error.line - 3)}-${error.line + 3}):
\`\`\`typescript
${surroundingCode}
\`\`\`

Your task:
1. Analyze the error thoroughly
2. Understand the root cause
3. Provide a clear explanation
4. Suggest a specific fix
5. Consider user patterns and coding style
6. Ensure the fix maintains code quality

Response Format:
{
  "analysis": "Detailed analysis of the error",
  "suggestedFix": "Specific code changes to fix the error",
  "confidence": 0.85,
  "reasoning": "Why this fix is appropriate"
}
<|im_end|>

<|im_start|>assistant
{
  "analysis": "`;
  }

  private async negotiateFix(
    error: TSCError,
    cloudflareAnalysis: any,
    ollamaAnalysis: any,
    context: {
      fileContent: string;
      projectRoot: string;
      userPatterns: Record<string, any>;
    }
  ): Promise<{
    analysis: string;
    fix: string;
    confidence: number;
  }> {
    // Use a mediator approach with Cloudflare AI
    const mediatorPrompt = `
<|im_start|>system
You are a mediator AI negotiating consensus on TypeScript error fixes.

Error: ${error.code} - ${error.message}
Location: ${error.file}:${error.line}:${error.column}

Cloudflare AI Analysis:
${cloudflareAnalysis.analysis}

Suggested Fix:
${cloudflareAnalysis.suggestedFix}

Confidence: ${cloudflareAnalysis.confidence}

Ollama AI Analysis:
${ollamaAnalysis.analysis}

Suggested Fix:
${ollamaAnalysis.suggestedFix}

Confidence: ${ollamaAnalysis.confidence}

Your task:
1. Synthesize both analyses
2. Identify the best approach
3. Create a consensus fix
4. Provide unified reasoning
5. Calculate combined confidence

Response Format:
{
  "analysis": "Unified analysis combining both perspectives",
  "fix": "The consensus fix to apply",
  "confidence": 0.9,
  "reasoning": "Why this consensus approach is optimal"
}
<|im_end|>

<|im_start|>assistant
{
  "analysis": "`;

    const response = await this.cloudflareAI.generateResponse(mediatorPrompt, {
      model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    });

    return this.parseConsensusResponse(response.content);
  }

  private async createCodeEdit(
    error: TSCError,
    fix: string,
    context: {
      fileContent: string;
      projectRoot: string;
      userPatterns: Record<string, any>;
    }
  ): Promise<CodeEdit | undefined> {
    // Simple implementation - in production, this would use AST manipulation
    const lines = context.fileContent.split('\n');
    const lineIndex = error.line - 1;

    if (lineIndex < 0 || lineIndex >= lines.length) {
      return undefined;
    }

    // For now, replace the entire line with the fix
    // TODO: Implement more sophisticated code patching using AST
    return {
      file: error.file,
      range: {
        start: { line: error.line, character: 0 },
        end: { line: error.line + 1, character: 0 }
      },
      newText: fix + '\n',
      reasoning: `Fix for ${error.code}: ${error.message}`
    };
  }

  private async applyCodeEdit(edit: CodeEdit): Promise<void> {
    const content = await fs.readFile(edit.file, 'utf-8');
    const lines = content.split('\n');
    
    // Apply the edit
    const startLine = edit.range.start.line - 1;
    const endLine = edit.range.end.line - 1;
    
    lines.splice(startLine, endLine - startLine, edit.newText.trimEnd());
    
    await fs.writeFile(edit.file, lines.join('\n'));
  }

  private getSurroundingCode(content: string, lineNumber: number, contextLines = 3): string {
    const lines = content.split('\n');
    const startLine = Math.max(0, lineNumber - contextLines - 1);
    const endLine = Math.min(lines.length, lineNumber + contextLines);
    
    return lines.slice(startLine, endLine)
      .map((line, index) => `${startLine + index + 1}: ${line}`)
      .join('\n');
  }

  private parseErrorAnalysisResponse(content: string, response: AIResponse): {
    analysis: string;
    suggestedFix: string;
    confidence: number;
    reasoning: string;
  } {
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No JSON found in response');
      }

      const parsed = JSON.parse(jsonMatch[0]);
      
      return {
        analysis: parsed.analysis || 'Analysis not provided',
        suggestedFix: parsed.suggestedFix || '',
        confidence: parsed.confidence || 0.7,
        reasoning: parsed.reasoning || 'No reasoning provided'
      };
    } catch (error) {
      return {
        analysis: content,
        suggestedFix: '',
        confidence: 0.5,
        reasoning: 'Parsed as fallback due to error: ' + (error as Error).message
      };
    }
  }

  private parseConsensusResponse(content: string): {
    analysis: string;
    fix: string;
    confidence: number;
    reasoning: string;
  } {
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No JSON found in response');
      }

      const parsed = JSON.parse(jsonMatch[0]);
      
      return {
        analysis: parsed.analysis || 'Consensus analysis not provided',
        fix: parsed.fix || '',
        confidence: parsed.confidence || 0.8,
        reasoning: parsed.reasoning || 'No reasoning provided'
      };
    } catch (error) {
      return {
        analysis: content,
        fix: '',
        confidence: 0.6,
        reasoning: 'Parsed as fallback due to error: ' + (error as Error).message
      };
    }
  }
}