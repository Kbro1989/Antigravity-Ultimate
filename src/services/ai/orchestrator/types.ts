
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
    tasks: Array<{
        id: string;
        description: string;
        assignedTo: 'cloudflare' | 'ollama' | 'gemini';
        estimatedEffort: number;
        dependencies: string[];
        files: string[];
    }>;
    totalComplexity: number;
    estimatedDuration: number;
}

export interface CollaborationContext {
    request: string;
    projectRoot: string;
    activeFiles: Set<string>;
    errors: TSCError[];
    recentHistory: MemoryEntry[];
    userPatterns: Record<string, any>;
}

export interface TSCError {
    file: string;
    line: number;
    column: number;
    message: string;
    code: string;
    severity: 'error' | 'warning';
    timestamp: number;
}

export interface MemoryEntry {
    id: string;
    type: 'collaboration' | 'error' | 'pattern' | 'code' | 'plan';
    content: string;
    metadata: Record<string, any>;
    timestamp: number;
}

export interface CodeEdit {
    file: string;
    range: {
        start: { line: number; character: number };
        end: { line: number; character: number };
    };
    newText: string;
    reasoning: string;
}

export interface AIResponse {
    content: string;
    confidence: number;
    tokensUsed: number;
    model: string;
    timestamp: number;
}
