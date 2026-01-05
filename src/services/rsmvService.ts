import { RSMVModelEntry, GameSource, ModelCategory } from '../types/rsmv';
import { rsmv, rscViewer } from './rsmv';
import { cacheMajors } from './rsmv/constants';
// using global Buffer

export const FEATURED_MODELS: Record<GameSource, RSMVModelEntry[]> = {
  runescape: [
    { id: 4151, name: 'Abyssal whip', category: 'items', gameSource: 'runescape', vertexCount: 342, materialCount: 2, tags: ['weapon', 'melee', 'slayer'], examine: 'A weapon from the abyss.' },
    { id: 11694, name: 'Armadyl godsword', category: 'items', gameSource: 'runescape', vertexCount: 1024, materialCount: 3, tags: ['weapon', 'melee', 'godsword'], examine: 'A very powerful godsword.' },
    { id: 1050, name: 'Santa hat', category: 'items', gameSource: 'runescape', vertexCount: 128, materialCount: 1, tags: ['holiday', 'rare'], examine: 'Ho ho ho!' },
    { id: 50, name: 'King Black Dragon', category: 'npcs', gameSource: 'runescape', vertexCount: 4096, materialCount: 6, boneCount: 48, tags: ['boss', 'dragon'], description: 'A fearsome three-headed dragon.' },
    { id: 9999, name: 'Pick Of Gods (Character)', category: 'models', gameSource: 'runescape', vertexCount: 0, tags: ['player', 'character', 'reference'], examine: "The user's primary RuneScape character.", filePath: 'models/pick_of_gods.glb' },
    { id: 9998, name: 'Pick Of Gods (Simple)', category: 'models', gameSource: 'runescape', vertexCount: 0, tags: ['player', 'character', 'simple'], examine: 'Simple STL reference of the user\'s character.', filePath: 'models/pick_of_gods.stl' }
  ],
  morrowind: [
    { id: 1, name: 'Frost Atronach', category: 'npcs', gameSource: 'morrowind', vertexCount: 3200, materialCount: 4, boneCount: 24, tags: ['daedra', 'summon'], filePath: 'Meshes/Atronach_Frost.nif' }
  ],
  fallout: [
    { id: 1, name: 'Securitron', category: 'npcs', gameSource: 'fallout', vertexCount: 4500, materialCount: 6, boneCount: 28, tags: ['robot', 'vegas'], description: "Mr. House's robotic army." }
  ]
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
    const res = await (window as any).agentAPI.fs.stat(JAGEX_LAUNCHER_PATHS.launcher);
    return !!res.success;
  } catch (err) {
    return false;
  }
};

export const verifyLocalCache = async (): Promise<boolean> => {
  try {
    const { localBridgeClient } = await import('./bridge/LocalBridgeService');
    const cachePath = 'C:\\Program Files (x86)\\Jagex Launcher';
    const stat = await localBridgeClient.statFile(cachePath);
    return !!stat.success;
  } catch (err) {
    return false;
  }
};

/**
 * RSMVEngine (Unified Delegator)
 */
export class RSMVEngine {
  private static instance: RSMVEngine;
  private constructor() { }

  static getInstance() {
    if (!this.instance) this.instance = new RSMVEngine();
    return this.instance;
  }

  get modern() { return rsmv; }
  get classic() { return rscViewer; }

  async loadModel(id: number) {
    return rsmv.loadModel(id);
  }

  async linkLocalCache(path?: string) {
    return rsmv.linkLocalCache(path);
  }

  getSceneCache() {
    return rsmv.getSceneCache();
  }
}

export const getRsmvModels = async (gameSource: GameSource, category: ModelCategory): Promise<RSMVModelEntry[]> => {
  if (gameSource !== 'runescape') return FEATURED_MODELS[gameSource] || [];
  return FEATURED_MODELS.runescape;
};

