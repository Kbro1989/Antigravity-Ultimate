/**
 * POG-NeuralRegistry ↔ Trinity Bridge Types
 */

// Import existing POG types
// [ADJUSTED] Correct relative path from src/services/ai/trinity/types/ to src/services/ai/
// ../.. -> src/services/ai/
import {
    BaseIntent
} from '../../AITypes';

export interface LimbResponse {
    success: boolean;
    output: any;
    confidence: number;
    tokenCount?: number;
    executionTime?: number;
    error?: string;
}

// We need POGTaskContext and POGTask defined here
export interface POGTaskContext {
    rscData?: any;           // For RelicLimb
    gameViewerState?: any;   // For GameViewerLimb
    codeWorkspace?: any;     // For CodeLimb
    [key: string]: any;
}

export interface POGTask {
    // Allow specific limbs (e.g., "Only use CodeLimb and RelicLimb")
    allowedLimbs?: string[];

    // POG-specific context
    context?: POGTaskContext;

    // Original POG intent (if coming from existing system)
    originalIntent?: BaseIntent;

    // Common Task fields to satisfy 'extends Task' locally without circularity
    id?: string;
    prompt?: string;
}

// Limb Tool Call Interface
export interface LimbToolCall {
    limbId: string;           // e.g., 'relic', 'code', 'gameviewer'
    capability: string;       // e.g., 'scan_rsc', 'generate_code', 'render_model'
    params: Record<string, any>;
    timestamp: number;
    provenance: {
        modelId: string;        // Which model requested this tool
        reasoning: string;      // Why this tool was called
    };
}

// Limb Execution Result
export interface LimbExecutionResult {
    success: boolean;
    output: any;
    metrics: {
        executionTime: number;
        memoryUsed?: number;
        confidence: number;
    };
    artifact?: any;
}

// VCG Bid with Capability Scoring
export interface CapabilityAwareBid {
    capabilitiesScore: number;    // 0-1, based on task capability match
    availableLimbs: string[];     // Which limbs this model can access
    modelId: string;
    rawPrice: number;
    confidence: number;
    latencyMs: number;
    compositeScore: number;
}

// Neural Registry Interface (for DI)
export interface INeuralRegistry {
    getLimb(limbId: string): any;
    executeCapability(limbId: string, intent: BaseIntent): Promise<LimbResponse>;
    getCapabilities(): Map<string, string[]>;  // limbId -> capabilities[]
    isHealthy(limbId: string): boolean;
    getMetrics(limbId: string): any;
    hasLimb(limbId: string): boolean;
    getAllLimbs(): Map<string, any>;
    registerLimb(id: string, limb: any): void;
    dispose?(): Promise<void>;
    registerCapability?(limbId: string, capability: string, handler: any): void;
}
