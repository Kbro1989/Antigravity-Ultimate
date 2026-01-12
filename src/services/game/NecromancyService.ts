import { NecromancyState, SummonedNPC, UndeadType } from './necromancyTypes';

/**
 * Necromancy Service
 * Handles the logic for summoning undead minions using the 
 * Bloody Axe of Zamorak (754) and Life-Runes (37).
 */
export class NecromancyService {
    private static instance: NecromancyService;

    private readonly AXE_ID = 754;
    private readonly RUNE_ID = 37;

    // NPC ID mapping for conjured undead
    private readonly SUMMONS: Partial<Record<UndeadType, { MINOR: number; NORMAL: number; GREATER?: number }>> = {
        [UndeadType.ZOMBIE]: {
            MINOR: 10000,
            NORMAL: 10001,
            GREATER: 10002
        },
        [UndeadType.SKELETON]: {
            MINOR: 10010,
            NORMAL: 10011
        },
        [UndeadType.GHOST]: {
            MINOR: 10020,
            NORMAL: 10021
        }
    };

    private state: NecromancyState = {
        isUnlocked: false,
        hasAxe: false,
        runeCount: 0,
        activeSummons: [],
        maxSummons: 5
    };

    private constructor() { }

    static getInstance(): NecromancyService {
        if (!NecromancyService.instance) {
            NecromancyService.instance = new NecromancyService();
        }
        return NecromancyService.instance;
    }

    /**
     * Checks if the player meets all requirements to cast Necromancy spells.
     */
    async validateRequirements(equippedIds: number[], inventory: { id: number, amount: number }[]): Promise<boolean> {
        this.state.hasAxe = equippedIds.includes(this.AXE_ID);
        const runeEntry = inventory.find(i => i.id === this.RUNE_ID);
        this.state.runeCount = runeEntry ? runeEntry.amount : 0;

        // Unlocked only if axe is held
        this.state.isUnlocked = this.state.hasAxe;

        return this.state.isUnlocked;
    }

    /**
     * Summons a zombie minion.
     * Stats scale based on magic level.
     */
    summonUndead(type: UndeadType, tier: 'MINOR' | 'NORMAL' | 'GREATER', magicLevel: number): SummonedNPC | null {
        if (!this.state.isUnlocked) return null;
        if (this.state.activeSummons.length >= this.state.maxSummons) return null;

        // Check rune costs
        const cost = tier === 'MINOR' ? 1 : tier === 'NORMAL' ? 2 : 5;
        if (this.state.runeCount < cost) return null;

        this.state.runeCount -= cost;

        const summonMap = this.SUMMONS[type] as any;
        if (!summonMap) return null;

        const npcId = summonMap[tier];
        if (!npcId) return null;

        // Scaling logic
        const scale = 1 + (magicLevel / 99);
        const baseLevel = tier === 'MINOR' ? 12 : tier === 'NORMAL' ? 42 : 82;

        const minion: SummonedNPC = {
            id: npcId,
            name: `Conjured ${type.charAt(0).toUpperCase() + type.slice(1)} (Lvl ${baseLevel})`,
            type: type,
            level: baseLevel,
            maxHits: Math.floor(20 * scale),
            currentHits: Math.floor(20 * scale),
            attack: Math.floor(15 * scale),
            strength: Math.floor(15 * scale),
            defense: Math.floor(10 * scale),
            spawnTime: Date.now()
        };

        this.state.activeSummons.push(minion);
        return minion;
    }

    getState(): NecromancyState {
        return { ...this.state };
    }

    /**
     * Rehydrates the service state from external storage.
     * Used by Durable Objects for session recovery.
     */
    hydrate(newState: Partial<NecromancyState>) {
        Object.assign(this.state, newState);
        console.log(`[NecromancyService] Rehydrated: ${this.state.activeSummons.length} summons restored.`);
    }

    clearSummons() {
        this.state.activeSummons = [];
    }
}
