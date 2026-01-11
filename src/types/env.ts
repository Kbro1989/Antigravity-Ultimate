/// <reference types="@cloudflare/workers-types" />
/**
 * Cloudflare Worker Environment Bindings
 */
export interface Env {
    SESSION_AGENT: DurableObjectNamespace;
    COLLABORATION_SERVER: DurableObjectNamespace;
    SESSION_DO: DurableObjectNamespace;
    METABOLISM_DO: DurableObjectNamespace;
    AI: any; // Workers AI
    ASSETS_BUCKET: R2Bucket;
    PLATFORM_BACKUP_KEY: string;
    R2_ARTIFACTS: R2Bucket;
    R2_BATCHES: R2Bucket;
    R2_HALTS: R2Bucket;
    DB: D1Database;
    CACHE: KVNamespace;
    KV: KVNamespace; // POG System State / Cache Alias
    BRAIN: KVNamespace; // Agent Memory
    VECTOR_INDEX: VectorizeIndex; // RAG Memory
    GENERATOR_QUEUE: Queue; // Production Pipeline Queue
    __STATIC_CONTENT: KVNamespace; // Workers Sites
    [key: string]: unknown;
}
