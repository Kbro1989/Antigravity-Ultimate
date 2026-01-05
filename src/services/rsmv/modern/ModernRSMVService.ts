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

    async loadModel(id: number): Promise<RSMVModel> {
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

        if (!this.sceneCache) throw new Error("RSMV: Not initialized or cache not linked.");

        const modelDef: SimpleModelDef = [{ modelid: id, mods: {} }];
        const rsModel = new RSModel(this.sceneCache, modelDef, `model:${id}`);
        const loaded = await rsModel.model;

        return {
            id,
            name: rsModel.rootnode.name,
            scene: rsModel.rootnode,
            metadata: loaded.modeldata as any
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
        return [];
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
