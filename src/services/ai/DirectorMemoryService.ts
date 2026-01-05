/**
 * DirectorMemoryService
 * Manages narrative and lore memory for the AI Director.
 */

export interface LoreEntry {
    entityName: string;
    lore: string;
    source: string;
    timestamp: number;
}

class DirectorMemoryService {
    private loreDatabase: LoreEntry[] = [];

    async addLore(entityName: string, lore: string, source: string) {
        const entry: LoreEntry = {
            entityName,
            lore,
            source,
            timestamp: Date.now()
        };
        this.loreDatabase.push(entry);
        console.log(`[DirectorMemory] Added lore for ${entityName}`);

        // In a real implementation, this would persist to Vector Db or D1
    }

    getLore(entityName: string): LoreEntry | undefined {
        return this.loreDatabase.find(e => e.entityName === entityName);
    }
}

export const directorMemory = new DirectorMemoryService();
