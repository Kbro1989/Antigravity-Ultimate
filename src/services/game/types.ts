
import * as THREE from 'three';

export type GameSource = 'runescape' | 'morrowind' | 'fallout' | 'skyrim';
export type ModelCategory = 'items' | 'npcs' | 'objects' | 'models';

export interface RSMVModelEntry {
    id: number;
    name: string;
    category: ModelCategory;
    gameSource: GameSource;
    vertexCount?: number;
    materialCount?: number;
    boneCount?: number;
    tags?: string[];
    examine?: string;
    description?: string;
    filePath?: string;
}

export interface RSMVModel {
    id: number;
    name: string;
    scene: THREE.Group;
    metadata: any;
}

export interface RSMVAvatar {
    name: string;
    scene: THREE.Group;
}

export interface RSMVServiceConfig {
    useGlbFirst?: boolean;
    glbBaseUrl?: string;
}

export interface IRSMVService {
    linkLocalCache(path?: string): Promise<boolean>;
    loadModel(id: number, options?: { cacheId?: number }): Promise<RSMVModel>;
    loadAvatar(name: string): Promise<RSMVAvatar>;
}
