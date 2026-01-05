/**
 * Core types for the AI-to-AI Collaborative Orchestrator
 */

export interface AIParticipant {
  id: 'cloudflare' | 'ollama';
  capabilities: ('code' | 'reasoning' | 'speed' | 'local-knowledge')[];
  endpoint: string;
  priority: number;
  name: string;
  model?: string;
}

export interface NegotiationRound {
  round: number;
  proposals: Array<{
    ai: string;
    plan: string;
    confidence: number;
    estimatedComplexity: number;
    prerequisiteFiles: string[];
    reasoning: string;
  }>;
  consensus?: string;
  timestamp: number;
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

export interface WorkDistribution {
  tasks: Array<{
    id: string;
    description: string;
    assignedTo: 'cloudflare' | 'ollama';
    estimatedEffort: number;
    dependencies: string[];
    files: string[];
  }>;
  totalComplexity: number;
  estimatedDuration: number;
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
  vector: number[];
  timestamp: number;
}

export interface UserPattern {
  type: string;
  value: string;
  description: string;
  priority: number;
}

export interface UserPatterns {
  [key: string]: UserPattern;
}

export interface AIResponse {
  content: string;
  confidence: number;
  tokensUsed: number;
  model: string;
  timestamp: number;
}

export interface CollaborationContext {
  request: string;
  projectRoot: string;
  userPatterns: UserPatterns;
  recentHistory: MemoryEntry[];
  activeFiles: Set<string>;
  errors: TSCError[];
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

export interface CompletionContext {
  file: string;
  line: number;
  character: number;
  prefix: string;
  suffix: string;
  language: string;
}

export interface CompletionSuggestion {
  text: string;
  confidence: number;
  kind: 'snippet' | 'function' | 'variable' | 'class' | 'import';
  documentation?: string;
}

export interface BuildNotes {
  summary: string;
  filesCreated: string[];
  filesModified: string[];
  errorsFixed: number;
  warningsFixed: number;
  estimatedImprovement: number;
  recommendations: string[];
}

export interface OrchestratorConfig {
  cloudflare: {
    accountId: string;
    apiToken: string;
    models: {
      primary: string;
      secondary: string;
      fast: string;
    };
    gateway?: {
      enabled: boolean;
      cacheTtl: number;
    };
  };
  ollama: {
    baseUrl: string;
    models: {
      code: string;
      reasoning: string;
    };
    timeout: number;
  };
  project: {
    root: string;
    watchPatterns: string[];
    ignorePatterns: string[];
    maxErrorIterations: number;
    autoFix: boolean;
  };
  memory: {
    maxEntries: number;
    vectorDimensions: number;
    compactionThreshold: number;
  };
}