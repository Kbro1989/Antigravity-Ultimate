
export interface AIParticipant {
    id: string;
    name: string;
    capabilities: string[];
    priority: number;
    model: string;
    provider: 'cloudflare' | 'ollama' | 'gemini';
}

export interface TaskProposal {
    ai: string;
    plan: string;
    confidence: number;
    estimatedComplexity: number;
    prerequisiteFiles: string[];
    reasoning: string;
    timestamp: number;
}

export interface NegotiationRound {
    round: number;
    proposals: TaskProposal[];
    consensus?: string;
    timestamp: number;
}

export interface WorkDistribution {
    tasks: any[];
    totalComplexity: number;
    estimatedDuration: number;
}

export interface CollaborationContext {
    request: string;
    activeFiles: Set<string>;
    errors: any[];
    recentHistory: any[];
    userPatterns: any;
}
