import { VectorMemory } from './VectorMemory';
import type { Env } from '../../index';

/**
 * IntelRegistry.ts
 * Implements NLWeb patterns for automated RAG over codebase and assets.
 */
export class IntelRegistry {
    private vectorMemory: VectorMemory;
    private env: Env;

    constructor(env: Env) {
        this.env = env;
        this.vectorMemory = new VectorMemory(env);
    }

    /**
     * Automated Codebase Indexing
     * In a real scenario, this would be a Cron trigger or a background task.
     */
    async indexCodebase(files: { path: string, content: string }[]) {
        // HYBRID MODE: If no bindings, proxy to Agent API
        if (!this.env.AI || !this.env.VECTOR_INDEX) {
            console.log('[IntelRegistry] Proxying codebase indexing to agent...');
            const response = await fetch('/api/session/default/intel/index-codebase', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ files })
            });
            return response.json();
        }

        console.log(`[IntelRegistry] Indexing ${files.length} files...`);

        for (const file of files) {
            await this.vectorMemory.upsertSnippet({
                id: `code_${btoa(file.path)}`,
                text: file.content,
                metadata: {
                    type: 'code',
                    path: file.path,
                    indexedAt: Date.now()
                }
            });
        }

        return { status: 'success', IndexedCount: files.length };
    }

    /**
     * Asset Metadata Indexing (R2)
     */
    async indexAsset(assetId: string, description: string, tags: string[]) {
        if (!this.env.AI || !this.env.VECTOR_INDEX) {
            // Fallback for asset indexing if needed, for now just log
            console.warn('[IntelRegistry] Asset indexing requires direct bindings or a specialized proxy endpoint.');
            return;
        }

        await this.vectorMemory.upsertSnippet({
            id: `asset_${assetId}`,
            text: description,
            metadata: {
                type: 'asset',
                assetId,
                tags,
                indexedAt: Date.now()
            }
        });
    }

    /**
     * Semantic Search (NLWeb Pattern)
     */
    async semanticSearch(query: string, filterType?: 'code' | 'asset') {
        // HYBRID MODE: If no bindings, proxy to Agent API
        if (!this.env.AI || !this.env.VECTOR_INDEX) {
            console.log('[IntelRegistry] Proxying semantic search to agent...');
            const response = await fetch(`/api/session/default/intel/search?q=${encodeURIComponent(query)}${filterType ? `&type=${filterType}` : ''}`);
            return response.json();
        }

        const results = await this.vectorMemory.queryKnowledge(query, 5);

        if (filterType) {
            return results.filter(r => r.metadata?.type === filterType);
        }

        return results;
    }
}
