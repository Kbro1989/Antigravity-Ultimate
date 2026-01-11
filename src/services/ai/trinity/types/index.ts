/**
 * Core type definitions for Trinity Pipeline
 * POG-ADAPTER ENHANCED VERSION
 */

import { Env as MainEnv } from '../../../../types/env';
import { BaseIntent } from '../../AITypes';
import { POGTask, LimbToolCall, INeuralRegistry, LimbExecutionResult } from './pog-adapters';

export type { POGTask, LimbToolCall, INeuralRegistry, LimbExecutionResult };

// Environment interface for Cloudflare Workers
export interface Env extends MainEnv {
    KV: KVNamespace;
    CACHE: KVNamespace;
    R2_ARTIFACTS: R2Bucket;
    R2_BATCHES: R2Bucket;
    R2_HALTS: R2Bucket;
    ASSETS_BUCKET: R2Bucket;
    AI: any;
    POG_NEURAL_REGISTRY?: INeuralRegistry;
    [key: string]: any;
}

// Task definition
export interface Task extends POGTask {
    id: string;
    prompt: string;
    context?: Record<string, any>;
    requirements?: TaskRequirements;
    metadata?: Record<string, any>;
}

// Task requirements for routing
export interface TaskRequirements {
    maxLatencyMs?: number;
    maxCost?: number;
    minConfidence?: number;
    requiresReasoning?: boolean;
    requiresCreativity?: boolean;
    longContext?: boolean;
    [key: string]: any;
}

// Model definition
export interface Model {
    id: string;
    name?: string;
    costPerToken: number;
    capabilities?: ModelCapabilities;

    // [ADD] Limb access control
    accessibleLimbs?: string[];  // Limbs this model can invoke
    limbPermissions?: 'all' | 'whitelist' | 'none';

    getConfidence: (task: Task) => Promise<number>;
    generate: (task: Task) => Promise<GenerationResult>;
}

// Model capabilities
export interface ModelCapabilities {
    estimatedLatencyMs?: number;
    maxTokens?: number;
    specializations?: string[];
    canAccessRSC?: boolean;
    canAccessGameViewer?: boolean;
    canGenerateCode?: boolean;
    [key: string]: any;
}

// Generation result
export interface GenerationResult {
    output: string;
    confidence: number;
    tokens: number;
    metadata?: Record<string, any>;
}

// Artifact for provenance
export interface LimbArtifact {
    id: string;
    content: {
        task: string;
        output: string;
        metadata?: Record<string, any>;
    };
    provenance: {
        limbId: string;
        timestamp: number;
        version: string;
        inputHash: string;
        outputHash: string;
        confidence: number;
        [key: string]: any;
    };
}

// [ADD] Tool Use Loop Types
export interface ToolUseRequest {
    type: 'tool_call';
    tool: LimbToolCall;
}

export interface ToolUseResponse {
    type: 'tool_result';
    result: LimbExecutionResult;
}

export interface ModelResponse {
    output: string;
    confidence: number;
    tokens: number;
    toolRequests?: ToolUseRequest[];  // Model can request tools
}

// Metrics logger (singleton pattern)
export class ProductionMetrics {
    private static instance: ProductionMetrics;
    private metrics: Map<string, any[]> = new Map();

    static log(category: string, data: any): void {
        if (!this.instance) {
            this.instance = new ProductionMetrics();
        }

        const categoryMetrics = this.instance.metrics.get(category) || [];
        categoryMetrics.push(data);

        // Keep only last 1000 metrics per category
        if (categoryMetrics.length > 1000) {
            categoryMetrics.shift();
        }

        this.instance.metrics.set(category, categoryMetrics);

        // Also emit to console for observation
        console.log(`[Trinity:${category}]`, JSON.stringify(data));
    }

    static logIsolationEvent(limbId: string, event: string, data: any): void {
        this.log('isolation', { limbId, event, data, timestamp: Date.now() });
    }

    static logVCGOutcome(data: any): void {
        this.log('vcg', { ...data, timestamp: Date.now() });
    }

    static logBid(data: any): void {
        this.log('bid', { ...data, timestamp: Date.now() });
    }

    static logBidFailure(data: any): void {
        this.log('bid_failure', { ...data, timestamp: Date.now() });
    }

    static logQuotaCharge(data: any): void {
        this.log('quota', { ...data, timestamp: Date.now() });
    }

    static logReputationUpdate(data: any): void {
        this.log('reputation', { ...data, timestamp: Date.now() });
    }

    static logProvenance(event: string, data: any): void {
        this.log('provenance', { event, data, timestamp: Date.now() });
    }

    static logIntrospection(data: any): void {
        this.log('introspection', { ...data, timestamp: Date.now() });
    }

    static logEmergencyHalt(data: any): void {
        this.log('emergency_halt', { ...data, timestamp: Date.now() });
    }

    static getMetrics(category?: string): any[] {
        if (!this.instance) return [];
        if (category) {
            return this.instance.metrics.get(category) || [];
        }
        return Array.from(this.instance.metrics.values()).flat();
    }

    static clear(): void {
        if (this.instance) {
            this.instance.metrics.clear();
        }
    }
}
