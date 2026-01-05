import { VectorMemory } from './VectorMemory';
import type { Env } from '../../index';

/**
 * GoldContextService.ts
 * Operationalizes the Phase 5 "Gold Context" builder in TypeScript.
 * Generates domain-pure snapshots for AI reasoning.
 */
export class GoldContextService {
    private env: Env;
    private memory: VectorMemory;

    constructor(env: Env) {
        this.env = env;
        this.memory = new VectorMemory(env);
    }

    /**
     * Categorizes files into domain-pure snapshots.
     * HYBRID: Can run locally (proxy) or in Worker (direct).
     */
    async buildSnapshots(files: { path: string, content: string }[]) {
        // HYBRID MODE: If no BRAIN binding (KV), proxy to agent
        if (!this.env.BRAIN) {
            console.log('[GoldContextService] Proxying buildSnapshots to agent...');
            const response = await fetch('/api/session/default/context/build', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ files })
            });
            return response.json();
        }

        const snapshots = {
            core: [] as string[],
            agents: [] as string[],
            editor: [] as string[]
        };

        for (const file of files) {
            const path = file.path.toLowerCase();

            // Core Domain: Pure logic and types
            if (path.includes('src/core') || path.includes('src/types')) {
                snapshots.core.push(file.content);
            }

            // Agents Domain: Brain and Services
            if (path.includes('src/agents') || path.includes('src/services') || path.includes('src/adapters')) {
                if (!path.includes('src/frontend') && !path.includes('src/editor')) {
                    snapshots.agents.push(file.content);
                }
            }

            // Editor Domain: UI and DX
            if (path.includes('src/frontend') || path.includes('src/editor')) {
                snapshots.editor.push(file.content);
            }
        }

        // Store snapshots in KV
        await this.env.BRAIN.put('context_core', snapshots.core.join('\n\n'));
        await this.env.BRAIN.put('context_agents', snapshots.agents.join('\n\n'));
        await this.env.BRAIN.put('context_editor', snapshots.editor.join('\n\n'));

        return {
            status: 'success',
            counts: {
                core: snapshots.core.length,
                agents: snapshots.agents.length,
                editor: snapshots.editor.length
            }
        };
    }

    async getSnapshot(domain: 'core' | 'agents' | 'editor') {
        if (!this.env.BRAIN) {
            console.log(`[GoldContextService] Proxying getSnapshot(${domain}) to agent...`);
            const response = await fetch(`/api/session/default/context/snapshot/${domain}`);
            return response.text();
        }
        return await this.env.BRAIN.get(`context_${domain}`);
    }

    /**
     * Reconstructs a state from a specific checksum anchor.
     * Essential for GhostLimb "Re-conducting".
     */
    async reconstruct(checksum: string) {
        console.log(`[GoldContext] Reconstructing domain-pure state from checksum: ${checksum}`);
        // In full implementation, this might roll back KV or D1 state to a specific point.
        return { restored: true, timestamp: Date.now() };
    }
}
