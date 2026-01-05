/**
 * ModelRegistry - Central service for AI model selection
 * Maps capabilities to Cloudflare Workers AI models and external providers
 */

export type ModelTier = 'fast' | 'quality' | 'reasoning' | 'default';
export type ModelProvider = 'cloudflare' | 'huggingface' | 'fireworks' | 'openrouter';

export interface ModelDefinition {
    id: string;
    provider: ModelProvider;
    description: string;
    inputCost?: number;  // per 1M tokens
    outputCost?: number; // per 1M tokens
}

export interface ModelCapability {
    default: ModelDefinition;
    fast?: ModelDefinition;
    quality?: ModelDefinition;
    reasoning?: ModelDefinition;
}

// Cloudflare Workers AI Models
const CF = (id: string, description: string): ModelDefinition => ({
    id: `@cf/${id}`,
    provider: 'cloudflare',
    description,
});

// Hugging Face Models
const HF = (id: string, description: string): ModelDefinition => ({
    id,
    provider: 'huggingface',
    description,
});

// Fireworks AI Models
const FW = (id: string, description: string): ModelDefinition => ({
    id,
    provider: 'fireworks',
    description,
});

/**
 * Complete Model Catalog
 */
export const MODEL_CATALOG = {
    textGeneration: {
        default: CF('meta/llama-3.1-8b-instruct', 'General purpose text generation'),
        fast: CF('meta/llama-3.1-8b-instruct-fast', 'Low-latency text generation'),
        quality: CF('meta/llama-3.3-70b-instruct-fp8-fast', 'High-quality text generation'),
        reasoning: CF('openai/gpt-oss-120b', 'Advanced reasoning tasks'),
    },

    codeGeneration: {
        default: CF('qwen/qwen2.5-coder-32b-instruct', 'Code generation and completion'),
        fast: CF('deepseek-ai/deepseek-coder-6.7b-instruct-awq', 'Fast code completion'),
    },

    imageGeneration: {
        default: CF('black-forest-labs/flux-1-schnell', 'Fast image generation'),
        fast: CF('black-forest-labs/flux-1-schnell', 'Fast image generation'),
        quality: CF('black-forest-labs/flux-2-dev', 'High-quality image generation'),
    },

    textToSpeech: {
        default: CF('deepgram/aura-2-en', 'English text-to-speech'),
        english: CF('deepgram/aura-2-en', 'English TTS with natural pacing'),
        spanish: CF('deepgram/aura-2-es', 'Spanish text-to-speech'),
    },

    speechToText: {
        default: CF('deepgram/nova-3', 'Fast speech recognition'),
        fast: CF('deepgram/nova-3', 'Conversational speech recognition'),
        quality: CF('openai/whisper-large-v3-turbo', 'Multilingual speech recognition'),
    },

    embeddings: {
        default: CF('baai/bge-base-en-v1.5', '768-dim embeddings'),
        fast: CF('baai/bge-small-en-v1.5', '384-dim fast embeddings'),
        quality: CF('baai/bge-large-en-v1.5', '1024-dim high-quality embeddings'),
    },

    objectDetection: {
        default: CF('facebook/detr-resnet-50', 'Object detection in images'),
    },

    imageClassification: {
        default: CF('microsoft/resnet-50', 'Image classification'),
    },

    translation: {
        default: CF('meta/m2m100-1.2b', 'Multilingual translation'),
    },

    summarization: {
        default: CF('facebook/bart-large-cnn', 'Text summarization'),
    },

    // External models for Cloudflare gaps
    model3D: {
        default: HF('stabilityai/TripoSR', '3D model generation from images'),
    },

    videoGeneration: {
        default: FW('runway/gen-3', 'Video generation from text/image'),
    },

    voiceCloning: {
        default: HF('coqui/XTTS-v2', 'Voice cloning and synthesis'),
    },
} as const;

/**
 * Workspace -> Capability Mapping
 * This defines which default capability is prioritized for each workspace (tab)
 */
export const WORKSPACE_MODELS: Record<string, ModelCapabilityKey> = {
    code: 'codeGeneration',
    creative: 'textGeneration',
    audio: 'textToSpeech', // Primary for audio tab
    flow: 'textGeneration',
    '3d': 'model3D',
    mesh: 'model3D',
    entity: 'textGeneration',
    physics: 'textGeneration',
    world: 'textGeneration',
    security: 'textGeneration',
    network: 'textGeneration',
    animation: 'textGeneration',
    data: 'embeddings',
    video: 'videoGeneration',
    image: 'imageGeneration',
    material: 'imageGeneration',
    orchestrator: 'textGeneration',
    system: 'textGeneration',
    filesystem: 'textGeneration',
    live: 'textGeneration',
    ghost: 'textGeneration',
    reality: 'textGeneration',
    quantum: 'textGeneration',
    divine: 'textGeneration', // Reasoning models are usually textGeneration category
    relic: 'textGeneration'
};

export type ModelCapabilityKey = keyof typeof MODEL_CATALOG;

/**
 * ModelRegistry Service
 */
export class ModelRegistry {
    private overrides: Map<string, ModelDefinition> = new Map();

    /**
     * Get the model for a specific capability and tier
     */
    getModel(capability: ModelCapabilityKey, tier: ModelTier = 'default'): ModelDefinition {
        // Check for user overrides first
        const overrideKey = `${capability}:${tier}`;
        if (this.overrides.has(overrideKey)) {
            return this.overrides.get(overrideKey)!;
        }

        const capabilityModels = MODEL_CATALOG[capability] as Record<string, ModelDefinition>;
        return capabilityModels[tier] ?? capabilityModels.default;
    }

    /**
     * Set a user override for a specific capability/tier
     */
    setOverride(capability: ModelCapabilityKey, tier: ModelTier, model: ModelDefinition): void {
        this.overrides.set(`${capability}:${tier}`, model);
    }

    /**
     * Clear all user overrides
     */
    clearOverrides(): void {
        this.overrides.clear();
    }

    /**
     * Get all models for a capability
     */
    getModelsForCapability(capability: ModelCapabilityKey): Record<string, ModelDefinition> {
        return MODEL_CATALOG[capability] as Record<string, ModelDefinition>;
    }

    /**
     * List all available capabilities
     */
    listCapabilities(): ModelCapabilityKey[] {
        return Object.keys(MODEL_CATALOG) as ModelCapabilityKey[];
    }

    /**
     * Check if a capability requires an external provider
     */
    requiresExternalProvider(capability: ModelCapabilityKey): boolean {
        const defaultModel = this.getModel(capability, 'default');
        return defaultModel.provider !== 'cloudflare';
    }
}

// Singleton instance
export const modelRegistry = new ModelRegistry();
