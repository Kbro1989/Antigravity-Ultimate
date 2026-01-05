export type GameSource = 'runescape' | 'morrowind' | 'fallout';
export type ModelCategory = 'items' | 'npcs' | 'objects' | 'models' | 'animations';

export interface RSMVModelEntry {
    id: number;
    name: string;
    category: ModelCategory;
    gameSource: GameSource;
    thumbnailUrl?: string;
    vertexCount?: number;
    materialCount?: number;
    boneCount?: number;
    description?: string;
    tags?: string[];
    examine?: string;
    filePath?: string;
    modelUrl?: string;
}
