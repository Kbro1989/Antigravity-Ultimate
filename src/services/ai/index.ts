/**
 * AI Services Barrel Export
 * Central export for all AI-related services
 */

// Isomorphic Services (Safe for Frontend)
export * from './ModelRegistry';
export * from './ExternalModelProvider';
export * from './AICacheService';
export * from './CostOptimizer';
export * from './CloudflareService';

export {
    setWorkerUrl,
    cloudflareLimiter,
    generateImage,
    synthesizeSpeech,
    generateVideo,
    getCodeCompletions,
    searchSimilarAssets,
    checkWorkerHealth,
    type Message,
    type CodeCompletion,
    type CodeIssue,
    type TokenMetrics
} from './CloudflareService';

export { modelRegistry } from './ModelRegistry';
export { externalModelProvider } from './ExternalModelProvider';

// Backend/Worker Only Services (Do not export here to avoid frontend bundling issues)
// These should be imported directly from their files (e.g., import { NeuralRegistry } from './services/ai/NeuralRegistry')
// FlowEngine, ModelRouter, Orchestrator, VectorMemory, LimbRegistry, IntelRegistry, GoldContextService, RealityAnchorService, NeuralRegistry
