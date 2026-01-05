import { VectorMemory } from '../ai/VectorMemory';
import { localBridgeClient } from '../bridge/LocalBridgeService';

export class KnowledgeIngestor {
    constructor(private memory: VectorMemory) { }

    /**
     * Ingests canonical RSC data from the external project path.
     * Uses LocalBridge to read the files.
     */
    async ingestCanonicalData(projectRoot: string) {
        if (!localBridgeClient.getStatus().isConnected) {
            console.log('[KnowledgeIngestor] Skipping ingestion: LocalBridge not connected');
            return;
        }

        console.log('[KnowledgeIngestor] Starting ingestion...');

        // Use forward slashes for cross-platform compatibility
        const itemsPath = `${projectRoot}/services/data/rsc/items.json`.replace(/\\/g, '/');
        const npcsPath = `${projectRoot}/services/data/rsc/npcs.json`.replace(/\\/g, '/');

        await this.ingestFile(itemsPath, 'rsc_item', 'name');
        await this.ingestFile(npcsPath, 'rsc_npc', 'name');

        console.log('[KnowledgeIngestor] Ingestion complete.');
    }

    private async ingestFile(path: string, type: string, labelKey: string) {
        try {
            console.log(`[KnowledgeIngestor] Reading ${path}...`);
            const result = await localBridgeClient.readLocalFile(path);
            if (!result.success || typeof result.content === 'undefined') {
                throw new Error(result.error || `Failed to read file: ${path}`);
            }
            const data = JSON.parse(result.content);

            if (!Array.isArray(data)) throw new Error('Format error: expected array');

            console.log(`[KnowledgeIngestor] Indexing ${data.length} ${type}s...`);

            // Batch process to avoid overwhelming Vectorize
            const BATCH_SIZE = 50;
            for (let i = 0; i < data.length; i += BATCH_SIZE) {
                const batch = data.slice(i, i + BATCH_SIZE);
                await Promise.all(batch.map(async (item: any) => {
                    const id = `${type}:${item.id}`;
                    const text = `${item[labelKey]} (${type}) - ${item.description || ''}`;
                    await this.memory.store({
                        id,
                        text,
                        metadata: { ...item, type }
                    });
                }));
                console.log(`[KnowledgeIngestor] Processed ${Math.min(i + BATCH_SIZE, data.length)}/${data.length}`);
            }

        } catch (e) {
            console.error(`[KnowledgeIngestor] Failed to ingest ${path}`, e);
        }
    }
}
