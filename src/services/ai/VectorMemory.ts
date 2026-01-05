import type { Env } from '../../types/env';

export interface MemorySnippet {
    id: string;
    text: string;
    metadata: Record<string, any>;
}

export class VectorMemory {
    private env: Env;

    constructor(env: Env) {
        this.env = env;
    }

    /**
     * Stores a snippet in the vector database
     */
    async upsertSnippet(snippet: MemorySnippet) {
        if (!this.env.AI || !this.env.VECTOR_INDEX) {
            console.warn('[VectorMemory] AI or Vectorize bindings missing. Skipping upsert.');
            return;
        }

        // 1. Generate Embedding
        const { data } = await this.env.AI.run('@cf/baai/bge-base-en-v1.5', {
            text: [snippet.text]
        });

        const embedding = data[0];

        // 2. Insert into Vectorize with Retry Logic
        let retries = 3;
        while (retries > 0) {
            try {
                await this.env.VECTOR_INDEX.upsert([
                    {
                        id: snippet.id,
                        values: embedding,
                        metadata: {
                            ...snippet.metadata,
                            text: snippet.text.substring(0, 1000)
                        }
                    }
                ]);
                console.log(`[VectorMemory] Upserted snippet: ${snippet.id}`);
                break;
            } catch (e) {
                retries--;
                if (retries === 0) throw e;
                console.warn(`[VectorMemory] Upsert failed, retrying... (${retries} left)`);
                await new Promise(r => setTimeout(r, 1000));
            }
        }
    }

    /**
     * Stores knowledge in the vector database (Reference Aligned)
     */
    async store(id: string | MemorySnippet, text?: string, metadata?: Record<string, any>) {
        if (typeof id === 'object') {
            return this.upsertSnippet(id);
        }
        return this.upsertSnippet({ id, text: text || '', metadata: metadata || {} });
    }

    /**
     * Search for similar snippets
     */
    async queryKnowledge(query: string, limit: number = 3): Promise<any[]> {
        if (!this.env.AI || !this.env.VECTOR_INDEX) return [];

        // 1. Generate Query Embedding
        const { data } = await this.env.AI.run('@cf/baai/bge-base-en-v1.5', {
            text: [query]
        });

        const queryVector = data[0];

        // 2. Search Vectorize
        const results = await this.env.VECTOR_INDEX.query(queryVector, {
            topK: limit,
            returnMetadata: true
        });

        return results.matches.map(m => ({
            id: m.id,
            score: m.score,
            text: m.metadata?.text as string,
            metadata: m.metadata
        }));
    }

    /**
     * Search for similar snippets (NeuralRegistry alias)
     */
    async search(query: string, limit: number = 3) {
        return this.queryKnowledge(query, limit);
    }
}
