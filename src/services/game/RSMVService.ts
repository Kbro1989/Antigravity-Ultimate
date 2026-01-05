
/**
 * RSMV Model Service
 * Interacts with local/remote RSMV logic via the RSVM Facade.
 */

import { RSMVModelEntry, GameSource, ModelCategory } from './types';
import { rsmv } from './rsmv/index';
import { cacheMajors } from './rsmv/constants';
// using global Buffer

export const FEATURED_MODELS: Record<GameSource, RSMVModelEntry[]> = {
    runescape: [
        { id: 4151, name: 'Abyssal whip', category: 'items', gameSource: 'runescape', vertexCount: 342, materialCount: 2, tags: ['weapon', 'melee', 'slayer'], examine: 'A weapon from the abyss.' },
        { id: 11694, name: 'Armadyl godsword', category: 'items', gameSource: 'runescape', vertexCount: 1024, materialCount: 3, tags: ['weapon', 'melee', 'godsword'], examine: 'A very powerful godsword.' },
        { id: 1050, name: 'Santa hat', category: 'items', gameSource: 'runescape', vertexCount: 128, materialCount: 1, tags: ['holiday', 'rare'], examine: 'Ho ho ho!' },
        { id: 50, name: 'King Black Dragon', category: 'npcs', gameSource: 'runescape', vertexCount: 4096, materialCount: 6, boneCount: 48, tags: ['boss', 'dragon'], description: 'A fearsome three-headed dragon.' },
        {
            id: 9999,
            name: 'Pick Of Gods (Character)',
            category: 'models',
            gameSource: 'runescape',
            vertexCount: 0,
            tags: ['player', 'character', 'reference'],
            examine: 'The user\'s primary RuneScape character.',
            filePath: 'models/pick_of_gods.glb'
        },
    ],
    morrowind: [
        { id: 1, name: 'Frost Atronach', category: 'npcs', gameSource: 'morrowind', vertexCount: 3200, materialCount: 4, boneCount: 24, tags: ['daedra', 'summon'], filePath: 'Meshes/Atronach_Frost.nif' },
    ],
    fallout: [
        { id: 1, name: 'Securitron', category: 'npcs', gameSource: 'fallout', vertexCount: 4500, materialCount: 6, boneCount: 28, tags: ['robot', 'vegas'], description: 'Mr. House\'s robotic army.' },
    ],
    skyrim: []
};

export const JAGEX_LAUNCHER_PATHS = {
    root: 'C:\\Program Files (x86)\\Jagex Launcher',
    games: 'C:\\Program Files (x86)\\Jagex Launcher\\Games',
    launcher: 'C:\\Program Files (x86)\\Jagex Launcher\\JagexLauncher.exe',
    libcef: 'C:\\Program Files (x86)\\Jagex Launcher\\libcef.dll',
    vulkan: 'C:\\Program Files (x86)\\Jagex Launcher\\vulkan-1.dll'
};

export const verifyJagexLauncher = async (): Promise<boolean> => {
    try {
        if (!(window as any).agentAPI) return false;
        const [launcher, games] = await Promise.all([
            (window as any).agentAPI.fs.stat(JAGEX_LAUNCHER_PATHS.launcher),
            (window as any).agentAPI.fs.stat(JAGEX_LAUNCHER_PATHS.games)
        ]);
        return !!(launcher.success && games.success);
    } catch (err) {
        console.error('[RSMV_SERVICE] Verification failed:', err);
        return false;
    }
};

export class RSMVEngine {
    private static instance: RSMVEngine;

    private constructor() { }

    static getInstance() {
        if (!this.instance) {
            this.instance = new RSMVEngine();
        }
        return this.instance;
    }

    async linkLocalCache(path: string = 'C:\\ProgramData\\Jagex\\RuneScape') {
        return rsmv.linkLocalCache(path);
    }

    async linkDroppedCache(blobs: Record<string, Blob>) {
        return rsmv.linkDroppedCache(blobs);
    }

    async getModelMetadata(category: ModelCategory, id: number): Promise<RSMVModelEntry | null> {
        return {
            id,
            name: `${category.slice(0, -1).toUpperCase()} ${id}`,
            category,
            gameSource: 'runescape',
            vertexCount: 0
        };
    }

    async loadModel(id: number) {
        return rsmv.loadModel(id);
    }

    async getSceneCache() {
        return rsmv.getSceneCache();
    }
}

export const getRsmvModels = async (gameSource: GameSource, category: ModelCategory): Promise<RSMVModelEntry[]> => {
    if (gameSource !== 'runescape') return FEATURED_MODELS[gameSource] || [];

    const facade = rsmv;
    const sceneCache = facade.getSceneCache();
    if (!sceneCache) return FEATURED_MODELS.runescape;

    // Real implementation would iterate cache here
    // Stubbed for now as WASM loader is stubbed
    return FEATURED_MODELS.runescape;
};

