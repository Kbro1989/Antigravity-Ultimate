export enum UndeadType {
    ZOMBIE = 'zombie',
    SKELETON = 'skeleton',
    GHOST = 'ghost',
    SHADE = 'shade',
    WRAITH = 'wraith'
}

export interface SummonedNPC {
    id: number;
    name: string;
    type: UndeadType;
    level: number;
    maxHits: number;
    currentHits: number;
    attack: number;
    strength: number;
    defense: number;
    spawnTime: number;
}

export interface NecromancyState {
    isUnlocked: boolean;
    hasAxe: boolean;
    runeCount: number;
    activeSummons: SummonedNPC[];
    maxSummons: number;
}
