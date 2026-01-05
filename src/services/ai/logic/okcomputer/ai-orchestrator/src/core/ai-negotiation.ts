/**
 * AI Negotiation Protocol for multi-agent planning
 */

import { EventEmitter } from 'events';
import {
  AIParticipant,
  NegotiationRound,
  TaskProposal,
  WorkDistribution,
  CollaborationContext,
  AIResponse
} from '../types/index.js';
import { CloudflareAIService } from '../services/cloudflare-ai.js';
import { OllamaService } from '../services/ollama.js';

export class AINegotiationProtocol extends EventEmitter {
  private participants: AIParticipant[];
  private cloudflareAI: CloudflareAIService;
  private ollamaAI: OllamaService;
  private maxRounds = 3;
  private consensusThreshold = 0.8;

  constructor(
    cloudflareAI: CloudflareAIService,
    ollamaAI: OllamaService
  ) {
    super();
    this.cloudflareAI = cloudflareAI;
    this.ollamaAI = ollamaAI;
    
    this.participants = [
      {
        id: 'cloudflare',
        capabilities: ['reasoning', 'speed'],
        endpoint: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
        priority: 1,
        name: 'Cloudflare AI',
        model: 'llama-3.3-70b-instruct'
      },
      {
        id: 'ollama',
        capabilities: ['code', 'local-knowledge'],
        endpoint: 'ollama/codellama:13b',
        priority: 2,
        name: 'Ollama AI',
        model: 'codellama:13b'
      }
    ];
  }

  async negotiateTask(
    request: string,
    projectRoot: string,
    userPatterns: Record<string, any>,
    recentHistory: any[] = []
  ): Promise<{
    finalPlan: string;
    workDistribution: WorkDistribution;
    consensusConfidence: number;
    rounds: NegotiationRound[];
  }> {
    this.emit('negotiation:start', { request, projectRoot });

    const context: CollaborationContext = {
      request,
      projectRoot,
      userPatterns,
      recentHistory,
      activeFiles: new Set(),
      errors: []
    };

    const rounds: NegotiationRound[] = [];
    let roundNumber = 1;
    let consensusReached = false;
    let finalPlan = '';
    let workDistribution: WorkDistribution = { tasks: [], totalComplexity: 0, estimatedDuration: 0 };

    // Initial proposal generation
    const initialProposals = await this.generateInitialProposals(request, context);
    
    rounds.push({
      round: roundNumber,
      proposals: initialProposals,
      timestamp: Date.now()
    });

    // Check for immediate consensus
    if (this.checkConsensus(initialProposals)) {
      const result = this.mergeProposals(initialProposals);
      finalPlan = result.plan;
      workDistribution = result.workDistribution;
      consensusReached = true;
      rounds[0].consensus = finalPlan;
    }

    // Iterative refinement rounds
    while (!consensusReached && roundNumber < this.maxRounds) {
      roundNumber++;
      
      const refinedProposals = await this.refineProposals(
        rounds[rounds.length - 1].proposals,
        context
      );

      const currentRound: NegotiationRound = {
        round: roundNumber,
        proposals: refinedProposals,
        timestamp: Date.now()
      };

      if (this.checkConsensus(refinedProposals)) {
        const result = this.mergeProposals(refinedProposals);
        finalPlan = result.plan;
        workDistribution = result.workDistribution;
        consensusReached = true;
        currentRound.consensus = finalPlan;
      }

      rounds.push(currentRound);
      this.emit('negotiation:round', { round: roundNumber, proposals: refinedProposals });
    }

    if (!consensusReached) {
      // Fallback: use the highest confidence proposal
      const allProposals = rounds.flatMap(r => r.proposals);
      const bestProposal = allProposals.reduce((best, current) => 
        current.confidence > best.confidence ? current : best
      );
      
      finalPlan = bestProposal.plan;
      workDistribution = this.createWorkDistribution(bestProposal, context);
    }

    const consensusConfidence = consensusReached 
      ? rounds[rounds.length - 1].proposals.reduce((sum, p) => sum + p.confidence, 0) / rounds[rounds.length - 1].proposals.length
      : 0.6;

    this.emit('negotiation:end', { 
      finalPlan, 
      workDistribution, 
      consensusConfidence, 
      rounds 
    });

    return {
      finalPlan,
      workDistribution,
      consensusConfidence,
      rounds
    };
  }

  private async generateInitialProposals(
    request: string,
    context: CollaborationContext
  ): Promise<TaskProposal[]> {
    const proposals: TaskProposal[] = [];

    for (const participant of this.participants) {
      const proposal = await this.generateProposal(participant, request, context);
      proposals.push(proposal);
    }

    return proposals;
  }

  private async generateProposal(
    participant: AIParticipant,
    request: string,
    context: CollaborationContext
  ): Promise<TaskProposal> {
    const prompt = this.buildProposalPrompt(participant, request, context);
    
    let response: AIResponse;
    
    if (participant.id === 'cloudflare') {
      response = await this.cloudflareAI.generateResponse(prompt, {
        model: participant.model || '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
      });
    } else {
      response = await this.ollamaAI.generateResponse(prompt, {
        model: participant.model || 'codellama:13b'
      });
    }

    return this.parseProposalResponse(participant.id, response.content, response);
  }

  private buildProposalPrompt(
    participant: AIParticipant,
    request: string,
    context: CollaborationContext
  ): string {
    const capabilities = participant.capabilities.join(', ');
    const userPatterns = Object.entries(context.userPatterns)
      .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
      .join('\n');

    return `
<|im_start|>system
You are ${participant.name}, an AI assistant with expertise in: ${capabilities}.
Your role is to analyze user requests and create comprehensive implementation plans.

Project Context:
- Root: ${context.projectRoot}
- User Patterns: ${userPatterns || 'None defined'}
- Recent History: ${context.recentHistory.length} entries

Your capabilities:
- ${participant.capabilities.map(c => `${c}: ${this.getCapabilityDescription(c)}`).join('\n- ')}

Guidelines:
1. Analyze the request thoroughly
2. Consider user patterns and project context
3. Create a detailed, actionable plan
4. Estimate complexity and prerequisites
5. Provide confidence score (0-1)
6. Be specific about files and implementation steps

Response Format:
{
  "plan": "Detailed implementation plan",
  "confidence": 0.85,
  "estimatedComplexity": 5,
  "prerequisiteFiles": ["file1.ts", "file2.ts"],
  "reasoning": "Why this approach is optimal"
}
<|im_end|>

<|im_start|>user
${request}
<|im_end|>

<|im_start|>assistant
{
  "plan": "`;
  }

  private async refineProposals(
    previousProposals: TaskProposal[],
    context: CollaborationContext
  ): Promise<TaskProposal[]> {
    const refinedProposals: TaskProposal[] = [];

    for (const proposal of previousProposals) {
      const otherProposals = previousProposals.filter(p => p.ai !== proposal.ai);
      const refined = await this.refineProposal(proposal, otherProposals, context);
      refinedProposals.push(refined);
    }

    return refinedProposals;
  }

  private async refineProposal(
    ownProposal: TaskProposal,
    otherProposals: TaskProposal[],
    context: CollaborationContext
  ): Promise<TaskProposal> {
    const participant = this.participants.find(p => p.id === ownProposal.ai)!;
    
    const prompt = `
<|im_start|>system
You are ${participant.name} refining your implementation plan based on feedback from other AI agents.

Your Original Plan:
${ownProposal.plan}

Other Proposals:
${otherProposals.map(p => `${p.ai}: ${p.plan} (confidence: ${p.confidence})`).join('\n\n')}

Critique and refine your plan:
1. Consider other perspectives and suggestions
2. Address any gaps or concerns
3. Improve accuracy and completeness
4. Adjust confidence based on consensus
5. Maintain your unique perspective and capabilities

Response Format:
{
  "plan": "Refined implementation plan",
  "confidence": 0.9,
  "estimatedComplexity": 5,
  "prerequisiteFiles": ["file1.ts", "file2.ts"],
  "reasoning": "How the refinement improved the plan"
}
<|im_end|>

<|im_start|>assistant
{
  "plan": "`;

    let response: AIResponse;
    
    if (participant.id === 'cloudflare') {
      response = await this.cloudflareAI.generateResponse(prompt, {
        model: participant.model || '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
      });
    } else {
      response = await this.ollamaAI.generateResponse(prompt, {
        model: participant.model || 'codellama:13b'
      });
    }

    return this.parseProposalResponse(participant.id, response.content, response);
  }

  private checkConsensus(proposals: TaskProposal[]): boolean {
    if (proposals.length < 2) return false;

    const avgConfidence = proposals.reduce((sum, p) => sum + p.confidence, 0) / proposals.length;
    return avgConfidence >= this.consensusThreshold;
  }

  private mergeProposals(proposals: TaskProposal[]): {
    plan: string;
    workDistribution: WorkDistribution;
  } {
    const bestProposal = proposals.reduce((best, current) => 
      current.confidence > best.confidence ? current : best
    );

    const workDistribution = this.createWorkDistribution(bestProposal, {} as CollaborationContext);

    return {
      plan: bestProposal.plan,
      workDistribution
    };
  }

  private createWorkDistribution(
    proposal: TaskProposal,
    context: CollaborationContext
  ): WorkDistribution {
    // Simple work distribution based on AI capabilities
    const tasks = [
      {
        id: '1',
        description: 'Implement core functionality',
        assignedTo: proposal.ai === 'cloudflare' ? 'cloudflare' : 'ollama',
        estimatedEffort: proposal.estimatedComplexity,
        dependencies: [],
        files: proposal.prerequisiteFiles
      }
    ];

    return {
      tasks,
      totalComplexity: proposal.estimatedComplexity,
      estimatedDuration: proposal.estimatedComplexity * 2 // hours
    };
  }

  private parseProposalResponse(
    aiId: string,
    content: string,
    response: AIResponse
  ): TaskProposal {
    try {
      // Extract JSON from response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No JSON found in response');
      }

      const parsed = JSON.parse(jsonMatch[0]);
      
      return {
        ai: aiId,
        plan: parsed.plan || content,
        confidence: parsed.confidence || 0.7,
        estimatedComplexity: parsed.estimatedComplexity || 3,
        prerequisiteFiles: parsed.prerequisiteFiles || [],
        reasoning: parsed.reasoning || 'No reasoning provided',
        timestamp: response.timestamp
      };
    } catch (error) {
      // Fallback parsing
      return {
        ai: aiId,
        plan: content,
        confidence: 0.6,
        estimatedComplexity: 3,
        prerequisiteFiles: [],
        reasoning: 'Parsed as fallback due to error: ' + (error as Error).message,
        timestamp: response.timestamp
      };
    }
  }

  private getCapabilityDescription(capability: string): string {
    const descriptions: Record<string, string> = {
      'code': 'Expert in code generation, analysis, and refactoring',
      'reasoning': 'Advanced logical reasoning and planning capabilities',
      'speed': 'Fast response times and efficient processing',
      'local-knowledge': 'Deep understanding of local codebase and user patterns'
    };
    return descriptions[capability] || capability;
  }
}