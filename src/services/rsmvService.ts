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
  ],
  classic: [
    { id: 133, name: 'Dragon Longsword', category: 'items', gameSource: 'classic', vertexCount: 72, tags: ['weapon', 'rare', 'dragon'], examine: 'A legendary classic blade.' },
    { id: 0, name: 'Classic Male', category: 'models', gameSource: 'classic', vertexCount: 156, tags: ['base', 'player'], examine: 'The original 2D-inspired 3D model.' }
  ]
};

// Jagex Launcher paths removed as per Zero Local Dependency protocol.
export const verifyJagexLauncher = async (): Promise<boolean> => {
  // Sovereignty: Launcher check is disabled in Cloud Mode.
  return false;
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

  async loadModel(id: number, source: GameSource = 'runescape') {
    if (source === 'classic') return rscViewer.loadModel(id);
    return rsmv.loadModel(id);
  }


  getSceneCache() {
    return rsmv.getSceneCache();
  }
}

export const getRsmvModels = async (
  gameSource: GameSource,
  category: ModelCategory,
  options?: { limit?: number; offset?: number; search?: string }
): Promise<{ models: RSMVModelEntry[]; total?: number }> => {
  const { limit = 50, offset = 0, search = '' } = options || {};

  // filtered curated models
  let curated = FEATURED_MODELS[gameSource] || [];
  if (search) {
    const lower = search.toLowerCase();
    curated = curated.filter(m =>
      m.name.toLowerCase().includes(lower) ||
      m.tags?.some(t => t.toLowerCase().includes(lower))
    );
  }

  // Use curated only if not runescape (legacy/other sources might not have limb support yet)
  if (gameSource !== 'runescape') {
    return { models: curated, total: curated.length };
  }

  // Archaeological Expansion via Relic Limb
  try {
    const { ServiceHub } = await import('./ServiceHub');
    // We request the limb to handle the heavy lifting (pagination/search)
    const res = await ServiceHub.limbs.call('relic', 'explore_museum', {
      category,
      limit,
      offset,
      search
    });

    if (res.status === 'success' && res.artifacts) {
      const archaeologicalModels = res.artifacts.map((a: any) => ({
        id: a.id,
        name: a.name,
        category: category,
        gameSource: 'runescape',
        vertexCount: a.size / 100 // Estimate
      }));

      // If offset is 0, we prepend curated models
      let models = archaeologicalModels;
      if (offset === 0) {
        // Merge without duplicates favoring curated
        const archaeoIds = new Set(archaeologicalModels.map((m: any) => m.id));
        const uniqueCurated = curated.filter(c => !archaeoIds.has(c.id));
        models = [...uniqueCurated, ...archaeologicalModels];
      }

      return {
        models,
        total: res.total || (models.length + (offset > 0 ? limit : 0)) // Fallback total estimation if API doesn't return it
      };
    }
  } catch (e) {
    console.warn('[RSMV] Relic Limb unavailable, using curated baseline only');
  }

  return { models: curated, total: curated.length };
};

