/**
 * Shared Memory System (Inspired by OKComputer)
 * Persistent, semantic context storage for AI collaboration
 */

export interface MemoryEntry {
    id: string;
    type: 'collaboration' | 'pattern' | 'decision' | 'error' | 'success';
    content: string;
    metadata: Record<string, any>;
    timestamp: number;
    embedding?: number[]; // For semantic search
}

export interface SearchResult {
    entry: MemoryEntry;
    similarity: number;
}

export class SharedMemorySystem {
    private memory: MemoryEntry[] = [];
    private maxEntries: number = 1000;

    constructor(private storage: DurableObjectStorage) { }

    /**
     * Store a new memory entry
     */
    async store(entry: Omit<MemoryEntry, 'id' | 'timestamp'>): Promise<MemoryEntry> {
        const fullEntry: MemoryEntry = {
            id: `mem_${Date.now()}_${Math.random().toString(36).substring(7)}`,
            timestamp: Date.now(),
            ...entry
        };

        // Add to in-memory cache
        this.memory.unshift(fullEntry);

        // Persist to DO storage
        await this.storage.put(`memory:${fullEntry.id}`, fullEntry);

        // Compact if needed
        if (this.memory.length > this.maxEntries) {
            await this.compact();
        }

        console.log(`[MEMORY] Stored: ${fullEntry.type} - ${fullEntry.content.slice(0, 50)}...`);
        return fullEntry;
    }

    /**
     * Semantic search through memories
     * TODO: Integrate with Cloudflare Vectorize for real embeddings
     */
    async search(query: string, type?: MemoryEntry['type'], limit: number = 5): Promise<SearchResult[]> {
        console.log(`[MEMORY] Searching for: "${query}"`);

        // For now, simple text matching (replace with vector similarity in production)
        let results = this.memory.filter(entry => {
            const matchesType = !type || entry.type === type;
            const matchesContent = entry.content.toLowerCase().includes(query.toLowerCase());
            return matchesType && matchesContent;
        });

        return results
            .slice(0, limit)
            .map(entry => ({ entry, similarity: 0.85 })); // Mock similarity score
    }

    /**
     * Load memories from durable storage on initialization
     */
    async initialize() {
        const keys = await this.storage.list({ prefix: 'memory:' });
        for (const [key, value] of Object.entries(keys)) {
            this.memory.push(value as MemoryEntry);
        }
        console.log(`[MEMORY] Loaded ${this.memory.length} entries from storage`);
    }

    /**
     * Compact old memories when limit exceeded
     */
    private async compact() {
        const toRemove = this.memory.slice(this.maxEntries);
        for (const entry of toRemove) {
            await this.storage.delete(`memory:${entry.id}`);
        }
        this.memory = this.memory.slice(0, this.maxEntries);
        console.log(`[MEMORY] Compacted: removed ${toRemove.length} old entries`);
    }

    /**
     * Get recent memories by type
     */
    async getRecent(type?: MemoryEntry['type'], limit: number = 10): Promise<MemoryEntry[]> {
        const filtered = type
            ? this.memory.filter(e => e.type === type)
            : this.memory;

        return filtered.slice(0, limit);
    }
}
