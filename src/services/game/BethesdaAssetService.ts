
import { RSMVModelEntry, GameSource } from './types';
import * as THREE from 'three';
// using global Buffer
import { NifParser } from './rsmv/3d/nifParser';

export interface BethesdaGamePaths {
    id: GameSource;
    root: string;
    data: string;
    archives: string[];
}

export const GOG_GALAXY_PATHS: Record<string, BethesdaGamePaths> = {
    morrowind: {
        id: 'morrowind',
        root: 'C:\\Program Files (x86)\\GOG Galaxy\\Games\\Morrowind',
        data: 'C:\\Program Files (x86)\\GOG Galaxy\\Games\\Morrowind\\Data Files',
        archives: ['Morrowind.bsa', 'Tribunal.bsa', 'Bloodmoon.bsa']
    },
    fallout: {
        id: 'fallout',
        root: 'C:\\Program Files (x86)\\GOG Galaxy\\Games\\Fallout New Vegas',
        data: 'C:\\Program Files (x86)\\GOG Galaxy\\Games\\Fallout New Vegas\\Data',
        archives: ['Fallout - Meshes.bsa', 'DeadMoney - Main.bsa', 'HonestHearts - Main.bsa', 'OldWorldBlues - Main.bsa', 'LonesomeRoad - Main.bsa', 'GunRunnersArsenal - Main.bsa']
    }
};

export class BethesdaAssetService {
    private static instance: BethesdaAssetService;
    private indexedModels: Record<GameSource, RSMVModelEntry[]> = {
        runescape: [],
        morrowind: [],
        fallout: [],
        skyrim: []
    };

    private constructor() { }

    static getInstance() {
        if (!this.instance) {
            this.instance = new BethesdaAssetService();
        }
        return this.instance;
    }

    async detectInstallations(): Promise<GameSource[]> {
        const api = (window as any).agentAPI;
        if (!api) return [];

        const found: GameSource[] = [];
        for (const [key, paths] of Object.entries(GOG_GALAXY_PATHS)) {
            const res = await api.fs.stat(paths.root);
            if (res.success) {
                found.push(key as GameSource);
            }
        }
        return found;
    }

    async getModels(game: GameSource): Promise<RSMVModelEntry[]> {
        return this.indexedModels[game] || [];
    }

    async loadNif(game: GameSource, relativePath: string): Promise<THREE.Group> {
        const paths = GOG_GALAXY_PATHS[game];
        if (!paths) throw new Error("Game path not found");

        const fullPath = `${paths.data}\\${relativePath}`;
        const api = (window as any).agentAPI;
        if (!api) throw new Error("Agent API not available");

        const res = await api.fs.readFile(fullPath, 'binary');
        if (!res.success) throw new Error(`Failed to read file: ${res.error}`);

        let buffer: Buffer;
        if (typeof res.content === 'string') {
            buffer = Buffer.from(res.content, 'base64');
        } else {
            buffer = Buffer.from(res.content); // Assume array-like or buffer
        }

        return NifParser.parse(buffer);
    }

    async linkLocalAssets(game: GameSource): Promise<boolean> {
        const paths = GOG_GALAXY_PATHS[game];
        if (!paths) return false;

        console.log(`[BETHESDA_SERVICE] Indexing ${game} assets...`);

        try {
            const api = (window as any).agentAPI;
            if (!api) return false;

            if (game === 'morrowind') {
                const meshesDir = `${paths.data}\\Meshes`;
                const res = await api.fs.stat(meshesDir);
                if (res.success) {
                    const files = await this.scanDirectoryRecursive(meshesDir, 'Meshes');
                    this.indexedModels.morrowind = files.map((f, i) => ({
                        id: 1000 + i,
                        name: f.split('/').pop()?.replace('.nif', '') || f,
                        category: 'models',
                        gameSource: 'morrowind',
                        filePath: f
                    }));
                }
            }
            return true;
        } catch (err) {
            console.error(`[BETHESDA_SERVICE] Failed to link assets for ${game}:`, err);
            return false;
        }
    }

    private async scanDirectoryRecursive(path: string, relativeRoot: string): Promise<string[]> {
        const api = (window as any).agentAPI;
        const result: string[] = [];

        const scan = async (currentPath: string, currentRel: string) => {
            const res = await api.fs.readDirectory(currentPath);
            if (res.success) {
                for (const file of res.files) {
                    const fullPath = `${currentPath}\\${file.name}`;
                    const relPath = `${currentRel}/${file.name}`;
                    if (file.isDir) {
                        await scan(fullPath, relPath);
                    } else if (file.name.toLowerCase().endsWith('.nif')) {
                        result.push(relPath);
                    }
                }
            }
        };

        await scan(path, relativeRoot);
        return result;
    }
}

