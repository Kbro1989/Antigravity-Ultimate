/**
 * Cloudflare Worker Environment Bindings
 */
export interface Env {
    SESSION_AGENT: DurableObjectNamespace;
    COLLABORATION: DurableObjectNamespace;
    AI: any; // Workers AI
    ASSETS_BUCKET: R2Bucket;
    DB: D1Database;
    CACHE: KVNamespace;
    BRAIN: KVNamespace; // Agent Memory
    VECTOR_INDEX: VectorizeIndex; // RAG Memory
    __STATIC_CONTENT: KVNamespace; // Workers Sites
    [key: string]: unknown;
}
