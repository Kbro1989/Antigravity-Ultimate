import * as THREE from "three";
import { SpritePacker } from "../../rsc/SpritePacker";
import { JagBuffer } from "../../rsc/JagBuffer";
import { EngineCache, ThreejsSceneCache, ModelConverter, RSModel } from "../3d";
import { hashFilename } from "../../rsc/JagArchive";
import { ClassicFileSource } from "../cache/classicloader";
import { classicConfig, ClassicConfig } from "../cache/classicloader";
import { IRSMVService, RSMVAvatar, RSMVModel, RSMVServiceConfig } from "../types";
import { localBridgeClient } from "../../bridge/LocalBridgeService";
import { CloudScriptFS } from "../CloudScriptFS";

export class ClassicRSMVService implements IRSMVService {
    private engineCache: EngineCache | null = null;
    private sceneCache: ThreejsSceneCache | null = null;
    private classicSource: ClassicFileSource | null = null;
    private configData: ClassicConfig | null = null;
    private activeBlueprint: { name: string, path: string } | null = null;
    private spritePacker: SpritePacker | null = null;

    constructor(private serviceConfig: RSMVServiceConfig = {}) { }

    setBlueprint(name: string, path: string) {
        this.activeBlueprint = { name, path };
        console.log(`[ClassicRSMV] Blueprint active: ${name} (${path})`);
    }

    getBlueprint() {
        return this.activeBlueprint;
    }

    /**
     * Links a directory containing .jag and .mem files
     */
    async linkClassicDir(path: string): Promise<boolean> {
        let bridgeFS: any;

        if (this.serviceConfig.env) {
            // --- CLOUD-NATIVE FILE SYSTEM ---
            bridgeFS = new CloudScriptFS(this.serviceConfig.env, path);
            console.log(`[ClassicRSMV] Using CloudScriptFS for ${path}`);
        } else {
            // --- OPTIONAL LOCAL BRIDGE FALLBACK ---
            bridgeFS = {
                readFileBuffer: async (name: string) => {
                    const res = await localBridgeClient.readLocalFile(`${path}\\${name}`, true);
                    if (!res.success || !res.content) throw new Error(`Failed to read ${name}`);
                    const binaryString = atob(res.content);
                    const bytes = new Uint8Array(binaryString.length);
                    for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
                    return Buffer.from(bytes);
                },
                readFileText: async (name: string) => {
                    const res = await localBridgeClient.readLocalFile(`${path}\\${name}`, false);
                    if (!res.success || !res.content) throw new Error(`Failed to read ${name}`);
                    return res.content;
                },
                readDir: async (dir: string) => {
                    const res = await localBridgeClient.listDirectory(`${path}\\${dir}`);
                    if (!res.success || !res.files) return [];
                    return res.files.map(f => ({ name: f.name, kind: (f.isDirectory ? "directory" : "file") as "file" | "directory", isDir: f.isDirectory, size: 0 }));
                },
                copyFile: async (from: string, to: string) => {
                    const data = await localBridgeClient.readLocalFile(`${path}\\from`, true);
                    if (!data.success || !data.content) throw new Error(`Failed to copy from ${from}`);
                    return;
                },
                writeFile: async () => { throw new Error("Write not supported"); },
                mkDir: async () => { throw new Error("Mkdir not supported"); },
                unlink: async () => { throw new Error("Unlink not supported"); }
            };
            console.log(`[ClassicRSMV] Using LocalBridge for ${path}`);
        }

        this.classicSource = await ClassicFileSource.create(bridgeFS);
        this.engineCache = await ModelConverter.create(this.classicSource);
        this.configData = await classicConfig(this.classicSource, this.classicSource.getBuildNr());
        this.sceneCache = await ThreejsSceneCache.create(this.engineCache);

        // Load media.jag for sprites
        try {
            const mediaBuffer = await bridgeFS.readFileBuffer('media.jag');
            this.spritePacker = new SpritePacker();
            this.spritePacker.loadArchive(mediaBuffer);
        } catch (e) {
            console.warn("[ClassicRSMV] Failed to load media.jag (some UI sprites might be missing)", e);
        }

        return true;
    }

    async loadModel(id: number, category?: string): Promise<RSMVModel> {
        if (!this.sceneCache || !this.engineCache || !this.configData) {
            throw new Error("Classic RSMV: Not initialized.");
        }

        // RSC uses paper NPCs (flat sprites)
        if (category === "npc" || category === "npcs") {
            const npcDef = this.configData.npcs[id];
            if (!npcDef) throw new Error(`NPC ${id} definition not found`);

            console.log(`[ClassicRSMV] Attempting to load paper NPC: ${id} (${npcDef.name})`);

            // RSC NPC sprites are in entity.jag (index 102)
            const entityArchive = await this.engineCache.getArchiveById(0, 102);

            const spriteIndex = npcDef.walkmodel;
            const spriteName = `npc${spriteIndex}`;
            const indexFile = entityArchive.find(q => q.namehash === hashFilename("INDEX.DAT"));
            const spriteFile = entityArchive.find(q => q.namehash === hashFilename(`${spriteName}.DAT`))
                || entityArchive.find(q => q.namehash === hashFilename(`npc${id}.DAT`));

            if (!indexFile || !spriteFile) {
                throw new Error(`Sprite ${spriteName} not found in entity archive for NPC ${id}`);
            }

            const { parseLegacySprite } = await import("../3d/sprite");
            const spriteData = parseLegacySprite(indexFile.buffer, spriteFile.buffer);

            const texture = new THREE.DataTexture(
                spriteData.img.data,
                spriteData.img.width,
                spriteData.img.height,
                THREE.RGBAFormat
            );
            texture.needsUpdate = true;
            texture.minFilter = THREE.NearestFilter;
            texture.magFilter = THREE.NearestFilter;

            const geometry = new THREE.PlaneGeometry(
                spriteData.img.width / 100,
                spriteData.img.height / 100
            );
            const material = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                side: THREE.DoubleSide,
                alphaTest: 0.1
            });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.name = `npc_sprite_${id}`;

            // Billboard effect
            mesh.onBeforeRender = (renderer, scene, camera) => {
                mesh.quaternion.copy(camera.quaternion);
            };

            const group = new THREE.Group();
            group.add(mesh);
            group.scale.set(512, 512, 512);

            return {
                id,
                name: npcDef.name,
                scene: group,
                metadata: {
                    id,
                    examine: npcDef.examine,
                    type: "paper-npc",
                    sprite: spriteName,
                    classic: true,
                    paper: true
                }
            };
        }

        if (category === "item" || category === "items") {
            const itemDef = this.configData.items[id];
            if (!itemDef) throw new Error(`Item ${id} definition not found`);

            const modelId = itemDef.baseSymbol || itemDef.sprite || id;
            console.log(`[ClassicRSMV] Loading item model ${modelId} for ${itemDef.name}`);

            const modelDef: any = [{ modelid: modelId, mods: {} }];
            const rsModel = new RSModel(this.sceneCache, modelDef, `item_model:${modelId}`);
            const loaded = await rsModel.model;

            return {
                id,
                name: itemDef.name,
                scene: rsModel.rootnode,
                metadata: {
                    ...itemDef,
                    type: "item",
                    modelId
                }
            };
        }

        if (category === "object" || category === "objects") {
            const objDef = this.configData.objects[id];
            if (!objDef) throw new Error(`Object ${id} definition not found`);

            const modelId = objDef.model.id;
            if (modelId === undefined) throw new Error(`Object ${id} has no valid model ID`);

            console.log(`[ClassicRSMV] Loading object model ${modelId} (${objDef.model.name}) for ${objDef.name}`);

            const modelDef: any = [{ modelid: modelId, mods: {} }];
            const rsModel = new RSModel(this.sceneCache, modelDef, `object_model:${modelId}`);
            const loaded = await rsModel.model;

            return {
                id,
                name: objDef.name,
                scene: rsModel.rootnode,
                metadata: {
                    ...objDef,
                    type: "object",
                    modelId,
                    modelName: objDef.model.name
                }
            };
        }

        // Default or other categories load normally
        const modelDef = [{ modelid: id, mods: {} }];
        const rsModel = new RSModel(this.sceneCache, modelDef as any, `classic_model:${id}`);
        const loaded = await rsModel.model;

        return {
            id,
            name: rsModel.rootnode.name || `Model ${id}`,
            scene: rsModel.rootnode,
            metadata: {
                id,
                classic: true,
                paper: false,
                ...(loaded?.modeldata || {})
            }
        };
    }

    async loadAvatar(name: string): Promise<RSMVAvatar> {
        throw new Error("Classic Avatar loading not implemented.");
    }

    dispose(): void {
        this.engineCache?.close();
        this.sceneCache = null;
        this.engineCache = null;
        this.classicSource = null;
        this.spritePacker = null;
    }

    async getItems() {
        return this.configData?.items || [];
    }

    async getNPCs() {
        return this.configData?.npcs || [];
    }

    async getObjects() {
        return this.configData?.objects || [];
    }

    async getSpells() {
        return this.configData?.spells || [];
    }

    async getPrayers() {
        return this.configData?.prayers || [];
    }

    async getWallObjects() {
        return this.configData?.wallobjects || [];
    }

    async getTiles() {
        return this.configData?.tiles || [];
    }

    async loadMap(id: number): Promise<any> {
        if (!this.engineCache) throw new Error("Classic RSMV: Not initialized.");
        // RSC maps are spread across maps.jag (103) and land.jag (104)
        const mapsArchive = await this.engineCache.getArchiveById(0, 103);
        const landArchive = await this.engineCache.getArchiveById(0, 104);

        const mapName = `m${id}`;
        const landName = `l${id}`;

        const mapFile = mapsArchive.find(q => q.namehash === hashFilename(`${mapName}.jag`)) || mapsArchive.find(q => q.fileid === id);
        const landFile = landArchive.find(q => q.namehash === hashFilename(`${landName}.jag`)) || landArchive.find(q => q.fileid === id);

        return {
            id,
            map: mapFile?.buffer,
            land: landFile?.buffer,
            type: 'rsc_map'
        };
    }

    async loadAudio(id: number): Promise<any> {
        if (!this.engineCache) throw new Error("Classic RSMV: Not initialized.");
        // RSC sounds are in sounds.mem (108)
        const soundsArchive = await this.engineCache.getArchiveById(0, 108);
        const soundFile = soundsArchive.find(q => q.fileid === id);

        if (!soundFile) throw new Error(`Audio ${id} not found in sounds archive`);

        return {
            id,
            buffer: soundFile.buffer,
            type: 'rsc_audio'
        };
    }

    async loadUI(name: string): Promise<any> {
        if (!this.spritePacker) throw new Error("Classic RSMV: UI media not loaded.");
        const sprite = this.spritePacker.getSprite(name);
        if (!sprite) throw new Error(`UI Sprite ${name} not found`);

        return {
            name,
            img: sprite.img,
            type: 'rsc_ui'
        };
    }

    getConfig() {
        return this.configData;
    }
}
