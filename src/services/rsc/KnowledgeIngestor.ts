import { VectorMemory } from '../ai/VectorMemory';
// Sovereignty: Static bridge import removed to ensure zero cloud dependency.

export class KnowledgeIngestor {
    constructor(private memory: VectorMemory) { }

    /**
     * Ingests canonical RSC data from the external project path.
     * Uses LocalBridge to read the files.
     */
    async ingestCanonicalData(projectRoot: string) {
        // Sovereignty: Optional bridge lookup
        const bridge = await this.getBridge();
        if (!bridge || !bridge.getStatus().isConnected) {
            console.log('[KnowledgeIngestor] Skipping ingestion: Bridge not connected or unavailable');
            return;
        }

        console.log('[KnowledgeIngestor] Starting ingestion...');

        // 1. Core Configs (Incremental)
        const itemsPath = `${projectRoot}/rsc-data/config/items.json`.replace(/\\/g, '/');
        const npcsPath = `${projectRoot}/rsc-data/config/npcs.json`.replace(/\\/g, '/');

        await this.ingestFile(bridge, itemsPath, 'rsc_item', 'name');
        await this.ingestFile(bridge, npcsPath, 'rsc_npc', 'name');

        // 2. 30GB Binary Forensic Scaling (.jag headers)
        const dataPath = `${projectRoot}/public/data204`.replace(/\\/g, '/');
        await this.ingestArchives(bridge, dataPath);

        console.log('[KnowledgeIngestor] Ingestion complete.');
    }

    private async getBridge() {
        try {
            const { localBridgeClient } = await import('../bridge/LocalBridgeService');
            return localBridgeClient;
        } catch (e) {
            return null;
        }
    }

    private async ingestArchives(bridge: any, dirPath: string) {
        try {
            console.log(`[KnowledgeIngestor] Scanning for Archives in ${dirPath}...`);
            const list = await bridge.listDirectory(dirPath);
            if (!list.success || !list.files) return;

            const jagFiles = list.files.filter((f: any) => f.name.endsWith('.jag'));
            console.log(`[KnowledgeIngestor] Found ${jagFiles.length} archives to index.`);

            for (const file of jagFiles) {
                const filePath = `${dirPath}/${file.name}`;
                // Index the archive name itself as a relic
                await this.memory.store({
                    id: `rsc_relic:${file.name}`,
                    text: `Canonical RSC Relic Archive: ${file.name} (Source: 30GB Knowledge Cortex)`,
                    metadata: { type: 'relic_archive', filename: file.name, path: filePath }
                });
            }
        } catch (e) {
            console.error(`[KnowledgeIngestor] Binary Sweep Failed:`, e);
        }
    }

    private async ingestFile(bridge: any, path: string, type: string, labelKey: string) {
        try {
            console.log(`[KnowledgeIngestor] Reading ${path}...`);
            const result = await bridge.readLocalFile(path);
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
