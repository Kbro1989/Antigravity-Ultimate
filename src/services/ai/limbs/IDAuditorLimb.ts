import { NeuralLimb, LimbConfig } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { BaseIntent } from '../AITypes';

export interface AuditResult {
    approved: boolean;
    conflicts: Array<{
        type: string;
        message: string;
        suggestedId?: number;
        suggestedName?: string;
    }>;
    metadata?: any;
}

export class IDAuditorLimb extends NeuralLimb {
    name = 'IDAuditorLimb';

    private readonly ITEM_RANGE = { min: 0, max: 1330, customStart: 1331, customEnd: 2000 };
    private readonly NPC_RANGE = { min: 0, max: 797, customStart: 798, customEnd: 1500 };
    private readonly OBJECT_RANGE = { min: 0, max: 800, customStart: 801, customEnd: 1500 };

    constructor(config: LimbConfig) {
        super(config);
    }

    async landscape_id(params: any) {
        this.enforceCapability(AgentCapability.MEMORY_QUERY);
        const name = params.name || `land${params.suggestedId || 64}`;
        await this.logActivity('audit_landscape_id', 'pending', { name });

        const nextId = await this.findNextLandscapeID();

        return {
            approved: true,
            conflicts: [],
            metadata: { assignedId: nextId }
        };
    }

    async item_id(params: any) {
        this.enforceCapability(AgentCapability.MEMORY_QUERY);
        const { itemId } = params;
        await this.logActivity('audit_item_id', 'pending', { itemId });

        if (itemId < this.ITEM_RANGE.customStart) {
            return {
                approved: false,
                conflicts: [{
                    type: 'item',
                    message: `Item ID ${itemId} is in reserved vanilla range`,
                    suggestedId: this.ITEM_RANGE.customStart
                }]
            };
        }

        return { approved: true, conflicts: [] };
    }

    async npc_id(params: any) {
        this.enforceCapability(AgentCapability.MEMORY_QUERY);
        const { npcId } = params;
        await this.logActivity('audit_npc_id', 'pending', { npcId });

        if (npcId < this.NPC_RANGE.customStart) {
            return {
                approved: false,
                conflicts: [{
                    type: 'npc',
                    message: `NPC ID ${npcId} is in reserved vanilla range`,
                    suggestedId: this.NPC_RANGE.customStart
                }]
            };
        }
        return { approved: true, conflicts: [] };
    }

    private async findNextLandscapeID(): Promise<number> {
        try {
            const fs = await import('fs');
            const path = await import('path');
            const dataDir = path.join(process.cwd(), 'public', 'data204');

            if (fs.existsSync(dataDir)) {
                const files = fs.readdirSync(dataDir);
                const landFiles = files.filter(f => f.startsWith('land') && f.endsWith('.jag'));
                const ids = landFiles.map(f => parseInt(f.replace('land', '').replace('.jag', '')));
                if (ids.length > 0) {
                    return Math.max(...ids) + 1;
                }
            }
        } catch (e) {
            console.warn('[IDAuditorLimb] Failed to scan data directory, falling back to 64', e);
        }

        return 64;
    }
}
