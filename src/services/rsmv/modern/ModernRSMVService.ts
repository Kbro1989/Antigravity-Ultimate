import * as THREE from "three";
import { EngineCache, ThreejsSceneCache, RSModel, SimpleModelDef, ModelConverter } from "../3d";
import { IRSMVService, RSMVAvatar, RSMVModel, RSMVServiceConfig } from "../types";
import { GLTFLoader } from "three-stdlib";
import { WasmGameCacheLoader } from "../cache/sqlitewasm";
import { localBridgeClient } from "../../bridge/LocalBridgeService";
import { parse } from "../opdecoder";
import { cacheMajors } from "../constants";

export class ModernRSMVService implements IRSMVService {
    private engineCache: EngineCache | null = null;
    private sceneCache: ThreejsSceneCache | null = null;
    private glbLoader = new GLTFLoader();
    private wasmLoader: WasmGameCacheLoader | null = null;
    private cachePath: string | null = null;

    constructor(private config: RSMVServiceConfig = {}) { }

    private async ensureInitialized() {
        if (this.wasmLoader) return;
        this.wasmLoader = new WasmGameCacheLoader();
        this.wasmLoader.getBuildNr = () => 920;
    }

    async linkLocalCache(path: string = 'C:\\ProgramData\\Jagex\\RuneScape'): Promise<boolean> {
        await this.ensureInitialized();

        const files = await localBridgeClient.listDirectory(path);
        if (!files?.success || !files.files) {
            console.error(`RSMV: Failed to read cache at ${path}`);
            return false;
        }

        const dbFiles: Record<string, Blob> = {};
        for (const file of files.files) {
            if (file.name.endsWith('.jcache')) {
                const data = await localBridgeClient.readLocalFile(file.path, true);
                if (data.success && data.content) {
                    const binaryString = atob(data.content);
                    const bytes = new Uint8Array(binaryString.length);
                    for (let i = 0; i < binaryString.length; i++) {
                        bytes[i] = binaryString.charCodeAt(i);
                    }
                    dbFiles[file.name] = new Blob([bytes]);
                }
            }
        }

        if (Object.keys(dbFiles).length === 0) {
            console.warn("RSMV: No .jcache files found in the specified directory");
            return false;
        }

        this.wasmLoader!.giveBlobs(dbFiles);
        this.cachePath = path;
        this.engineCache = await ModelConverter.create(this.wasmLoader!);
        this.sceneCache = await ThreejsSceneCache.create(this.engineCache);
        return true;
    }

    async loadModel(id: number, category?: string): Promise<RSMVModel> {
        if (this.config.useGlbFirst && this.config.glbBaseUrl) {
            try {
                const glbUrl = `${this.config.glbBaseUrl}/model_${id}.glb`;
                const gltf = await this.glbLoader.loadAsync(glbUrl);
                return {
                    id,
                    name: `model:${id}`,
                    scene: gltf.scene as THREE.Group,
                    metadata: gltf.userData
                };
            } catch (e) { }
        }

        if (!this.sceneCache || !this.engineCache) throw new Error("RSMV: Not initialized or cache not linked.");

        let modelData: SimpleModelDef = [];
        let name = `model:${id}`;
        let metadata: any = { id };

        if (category === 'npc' || category === 'npcs') {
            const file = await this.engineCache.getFile(cacheMajors.npcs, id);
            const def = parse.npc.read(file, this.engineCache);
            name = def.name ?? "Unknown NPC";
            metadata = { ...def, type: 'npc' };
            if (def.models) {
                modelData = def.models.map((mid: number) => ({ modelid: mid, mods: {} }));
            }
        } else if (category === 'item' || category === 'items') {
            const file = await this.engineCache.getFile(cacheMajors.items, id);
            const def = parse.item.read(file, this.engineCache);
            name = def.name ?? "Unknown Item";
            metadata = { ...def, type: 'item' };
            const modelId = (def as any).model; // Modern items use 'model' index
            if (modelId) {
                modelData = [{ modelid: modelId, mods: {} }];
            }
        } else if (category === 'object' || category === 'objects') {
            const file = await this.engineCache.getFile(cacheMajors.objects, id);
            const def = parse.object.read(file, this.engineCache);
            name = def.name ?? "Unknown Object";
            metadata = { ...def, type: 'object' };
            if (def.models) {
                // Modern objects can have multiple models or animation sets
                const mids = Array.isArray(def.models) ? def.models : [def.models];
                modelData = mids.map((m: any) => ({ modelid: typeof m === 'number' ? m : m.id, mods: {} }));
            }
        } else {
            modelData = [{ modelid: id, mods: {} }];
        }

        if (modelData.length === 0) {
            // Fallback to the ID as a model ID if no models found in def
            modelData = [{ modelid: id, mods: {} }];
        }

        const rsModel = new RSModel(this.sceneCache, modelData, name);

        // Lazy Loading: We return the rootnode immediately so the viewer can mount it.
        // The RSModel internal logic will populate the rootnode once the geometry is ready.
        return {
            id,
            name,
            scene: rsModel.rootnode,
            metadata: metadata // Return base definition metadata immediately
        };
    }

    async loadMap(id: number): Promise<any> {
        throw new Error("Modern map loading not implemented.");
    }

    async loadAudio(id: number): Promise<any> {
        throw new Error("Modern audio loading not implemented.");
    }

    async loadUI(name: string): Promise<any> {
        throw new Error("Modern UI loading not implemented.");
    }

    async getItems(): Promise<any[]> {
        if (!this.engineCache) return [];
        const items: any[] = [];
        const { iterateConfigFiles } = await import("../3d/enginecache");
        for await (const { id, file } of iterateConfigFiles(this.engineCache, cacheMajors.items)) {
            try {
                const def = parse.item.read(file, this.engineCache);
                items.push({ id, name: def.name, description: def.buff_effect || '', metadata: def });
            } catch (e) { }
        }
        return items;
    }

    async getNPCs(): Promise<any[]> {
        if (!this.engineCache) return [];
        const npcs: any[] = [];
        const { iterateConfigFiles } = await import("../3d/enginecache");
        for await (const { id, file } of iterateConfigFiles(this.engineCache, cacheMajors.npcs)) {
            try {
                const def = parse.npc.read(file, this.engineCache);
                npcs.push({ id, name: def.name, description: '', metadata: def });
            } catch (e) { }
        }
        return npcs;
    }

    async getObjects(): Promise<any[]> {
        if (!this.engineCache) return [];
        const objects: any[] = [];
        const { iterateConfigFiles } = await import("../3d/enginecache");
        for await (const { id, file } of iterateConfigFiles(this.engineCache, cacheMajors.objects)) {
            try {
                const def = parse.object.read(file, this.engineCache);
                objects.push({ id, name: def.name, description: '', metadata: def });
            } catch (e) { }
        }
        return objects;
    }

    async loadAvatar(name: string): Promise<RSMVAvatar> {
        throw new Error("Method not implemented.");
    }

    dispose(): void {
        this.engineCache?.close();
        this.sceneCache = null;
        this.engineCache = null;
        this.wasmLoader = null;
    }

    async linkDroppedCache(blobs: Record<string, Blob>): Promise<boolean> {
        await this.ensureInitialized();
        this.wasmLoader!.giveBlobs(blobs);
        this.engineCache = await ModelConverter.create(this.wasmLoader!);
        this.sceneCache = await ThreejsSceneCache.create(this.engineCache);
        return true;
    }

    async saveModel(id: number, rawData: any): Promise<boolean> {
        // --- READ ONLY PROTECTION ---
        // We never overwrite the original cache if a stagedPath is provided
        const targetPath = this.config.stagedPath || this.cachePath;

        if (!this.engineCache || !this.wasmLoader || !targetPath) return false;
        try {
            const encoded = parse.models.write(rawData);
            await this.wasmLoader.putFile(cacheMajors.models, id, new Uint8Array(encoded));
            const dbData = await this.wasmLoader.saveCache(cacheMajors.models);

            const filename = `js5-${cacheMajors.models}.jcache`;
            const fullPath = `${targetPath}\\${filename}`;

            const base64Content = btoa(String.fromCharCode(...new Uint8Array(dbData)));
            const result = await localBridgeClient.writeLocalFile(fullPath, base64Content, true);

            console.log(`[RSMV] Model ${id} saved to ${this.config.stagedPath ? 'STAGING' : 'CACHE'}: ${fullPath}`);
            return result.success;
        } catch (e) {
            console.error(`RSMV: Save model ${id} failed:`, e);
            return false;
        }
    }

    getEngineCache() { return this.engineCache; }
    getSceneCache() { return this.sceneCache; }
}
