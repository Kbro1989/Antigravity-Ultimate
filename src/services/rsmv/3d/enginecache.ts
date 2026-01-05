// using global Buffer
import * as THREE from "three";
import { CacheFileSource, CacheIndex, mappedFileIds, oldConfigMaps, SubFile } from "../cache";
import { CachedObject, CachingFileSource } from "../cache/memorycache";
import { cacheConfigPages, cacheMajors, lastClassicBuildnr, lastLegacyBuildnr } from "../constants";
import { parse } from "../opdecoder";
import { mapsquare_underlays } from "../generated/mapsquare_underlays";
import { mapsquare_overlays } from "../generated/mapsquare_overlays";
import { mapscenes } from "../generated/mapscenes";
import { maplabels } from "../generated/maplabels";
import { MaterialData, defaultMaterial, convertMaterial, MaterialData as JMatData } from "./jmat";
import { HSL2RGBfloat, packedHSL2HSL, HSL2RGB, HSL2packHSL, RGB2HSL } from "../utils";
import { cacheFileJsonModes } from "../scripts/filetypes";
import { DependencyGraph, getDependencies } from "../scripts/dependencies";
import { JSONSchema6Definition } from "json-schema";
import { makeImageData } from "../imgutils";
import { minimapLocMaterial } from "../rs3shaders";
import { createRuneScapeMaterial } from "../shaders/shaderfactory";
import { Bone, BufferAttribute, Mesh, Object3D, Skeleton, SkinnedMesh, InterleavedBufferAttribute } from "three";
import { ModelMeshData } from "./rt7model"; import { ModelModifications } from "../utils"; import { ParsedMaterial } from "./modelutils";

// Types for dynamic imports
import type { LegacyData } from "../cache/legacycache";
import type { ClassicConfig } from "../cache/classicloader";
import { legacyMajors } from "../cache/legacycache";

export const constModelOffset = 1000000;

export const constModelsIds = {
    materialCube: constModelOffset + 1,
    classicWall: constModelOffset + 2,
    classicWallDiag: constModelOffset + 3,
    classicRoof10: constModelOffset + 10,
    classicRoof12: constModelOffset + 12,
    classicRoof13: constModelOffset + 13,
    classicRoof14: constModelOffset + 14,
    classicRoof15: constModelOffset + 15,
    classicRoof16: constModelOffset + 16,
    classicRoof17: constModelOffset + 17,
}

// type ParsedMaterial moved to modelutils.ts

export type ModelModes = "nxt" | "old" | "classic";
export type TextureModes = "png" | "dds" | "bmp" | "ktx" | "oldpng" | "png2014" | "dds2014" | "none" | "oldproc" | "fullproc" | "legacy" | "legacytga";
export type TextureTypes = keyof MaterialData["textures"];

//basically stores all the config of the game engine
export class EngineCache extends CachingFileSource {
    hasOldModels = false;
    hasNewModels = false;

    materialArchive = new Map<number, Buffer>();
    materialCache = new Map<number, MaterialData>();
    mapUnderlays: (mapsquare_underlays | mapsquare_overlays)[] = [];
    mapOverlays: mapsquare_overlays[] = [];
    mapMapscenes: mapscenes[] = [];
    mapMaplabels: maplabels[] = [];

    legacyData: LegacyData | null = null;
    classicData: ClassicConfig | null = null;

    private jsonSearchCache = new Map<string, { files: Promise<any[]>, schema: JSONSchema6Definition }>();
    private dependencyGraph: Promise<DependencyGraph> | null = null;

    static create(source: CacheFileSource) {
        return new EngineCache(source).preload();
    }

    private constructor(source: CacheFileSource) {
        super(source);
    }

    // Explicitly implement common methods to ensure visibility in all contexts
    override async getArchiveById(major: number, minor: number): Promise<SubFile[]> {
        return super.getArchiveById(major, minor);
    }

    override async getFileById(major: number, fileid: number): Promise<Buffer> {
        return super.getFileById(major, fileid);
    }

    private async preload() {
        if (this.getBuildNr() > lastLegacyBuildnr) {
            for (let subfile of await this.getArchiveById(cacheMajors.config, cacheConfigPages.mapunderlays)) {
                this.mapUnderlays[subfile.fileid] = parse.mapsquareUnderlays.read(subfile.buffer, this.rawsource);
            }
            for (let subfile of await this.getArchiveById(cacheMajors.config, cacheConfigPages.mapoverlays)) {
                this.mapOverlays[subfile.fileid] = parse.mapsquareOverlays.read(subfile.buffer, this.rawsource);
            }

            if (this.getBuildNr() >= 527) {
                for (let subfile of await this.getArchiveById(cacheMajors.config, cacheConfigPages.mapscenes)) {
                    this.mapMapscenes[subfile.fileid] = parse.mapscenes.read(subfile.buffer, this.rawsource);
                }
            }
            if (this.getBuildNr() >= 548) {
                for (let subfile of await this.getArchiveById(cacheMajors.config, cacheConfigPages.maplabels)) {
                    this.mapMaplabels[subfile.fileid] = parse.maplabels.read(subfile.buffer, this.rawsource);
                }
            }

            if (this.getBuildNr() <= 471) {
                for (let file of await this.getArchiveById(cacheMajors.texturesOldPng, 0)) {
                    this.materialArchive.set(file.fileid, file.buffer);
                }
            } else if (this.getBuildNr() <= 498) {
                //no material data
            } else if (this.getBuildNr() <= 753) {
                let file = await this.getFile(cacheMajors.materials, 0);
                this.materialArchive.set(0, file);
            } else {
                for (let file of await this.getArchiveById(cacheMajors.materials, 0)) {
                    this.materialArchive.set(file.fileid, file.buffer);
                }
            }

            let rootindex = await this.getCacheIndex(cacheMajors.index);
            this.hasNewModels = !!rootindex[cacheMajors.models];
            this.hasOldModels = !!rootindex[cacheMajors.oldmodels];
        } else if (this.getBuildNr() > lastClassicBuildnr) {
            const { legacyPreload } = await import("../cache/legacycache");
            this.legacyData = await legacyPreload(this);
            let floors = this.legacyData.overlays.map(q => parse.mapsquareOverlays.read(q, this));
            this.mapOverlays = floors;
            this.mapUnderlays = floors;

            this.hasNewModels = false;
            this.hasOldModels = true;
        } else {
            const { ClassicFileSource, classicConfig, classicGroups } = await import("../cache/classicloader");
            const { classicUnderlays, classicOverlays } = await import("./classicmap");
            if (!(this.rawsource instanceof ClassicFileSource)) {
                throw new Error("can only load classic caches from a classic source");
            }
            this.classicData = await classicConfig(this.rawsource, this.getBuildNr());
            this.mapUnderlays = classicUnderlays();
            this.mapOverlays = await classicOverlays(this);
            this.hasNewModels = false;
            this.hasOldModels = true;
        }

        return this;
    }

    async getDependencyGraph() {
        this.dependencyGraph ??= getDependencies(this, { lazyMapChunks: true });
        return this.dependencyGraph;
    }

    async getGameFile(type: keyof LegacyData & keyof typeof cacheMajors, id: number) {
        if (this.legacyData) {
            return this.legacyData[type][id];
        } else {
            return this.getFileById(cacheMajors[type], id);
        }
    }

    getMaterialData(id: number) {
        let cached = this.materialCache.get(id);
        if (!cached) {
            if (id == -1) {
                cached = defaultMaterial();
            } else {
                if (this.getBuildNr() <= lastLegacyBuildnr) {
                    cached = defaultMaterial();
                    cached.textures.diffuse = id;
                    cached.baseColorFraction = 1;
                    cached.texmodes = "mirror";
                    cached.texmodet = "mirror";
                } else if (this.getBuildNr() <= 471) {
                    let file = this.materialArchive.get(id);
                    if (!file) { throw new Error("material " + id + " not found"); }
                    let matprops = parse.oldproctexture.read(file, this);
                    cached = defaultMaterial();
                    cached.textures.diffuse = matprops.spriteid;
                    cached.baseColorFraction = 1;
                } else if (this.getBuildNr() <= 753) {
                    cached = defaultMaterial();
                    if (this.getBuildNr() >= 500) {
                        let matlist = parse.oldmaterials.read(this.materialArchive.get(0)!, this);
                        let matdata = matlist.mats[id];
                        if (matdata.basecolorfraction != null && matdata.basecolor != null) {
                            cached.baseColorFraction = matdata.basecolorfraction / 255;
                            cached.baseColor = HSL2RGBfloat(packedHSL2HSL(matdata.basecolor));
                        }
                        cached.textures.diffuse = matdata.id;
                    }
                } else {
                    let file = this.materialArchive.get(id);
                    if (!file) { throw new Error("material " + id + " not found"); }
                    cached = convertMaterial(file, id, this.rawsource);
                }
            }
            this.materialCache.set(id, cached);
        }
        return cached;
    }

    getJsonSearchData(modename: string) {
        let cached = this.jsonSearchCache.get(modename);
        if (!cached) {
            let mode = cacheFileJsonModes[modename as keyof typeof cacheFileJsonModes];
            if (!mode) { throw new Error("unknown decode mode " + modename); }
            let files = (async () => {
                await mode.prepareDump?.(this);
                let allfiles = await mode.lookup.logicalRangeToFiles(this, [0, 0], [Infinity, Infinity]);
                let lastarchive: null | { index: CacheIndex, subfiles: SubFile[] } = null;
                let files: any[] = [];
                for (let fileid of allfiles) {
                    let arch: SubFile[];
                    if (lastarchive && lastarchive.index == fileid.index) {
                        arch = lastarchive.subfiles;
                    } else {
                        arch = await this.getFileArchive(fileid.index);
                        lastarchive = { index: fileid.index, subfiles: arch };
                    }
                    let file = arch[fileid.subindex];
                    let logicalid = mode.lookup.fileToLogical(this, fileid.index.major, fileid.index.minor, file.fileid);
                    let res = mode.parser.read(file.buffer, this.rawsource);
                    res.$fileid = (logicalid.length == 1 ? logicalid[0] : logicalid);
                    files.push(res);
                }

                return files;
            })();
            cached = { files, schema: mode.parser.parser.getJsonSchema() }
            this.jsonSearchCache.set(modename, cached);
        }
        return cached;
    }
}

export class ThreejsSceneCache {
    private modelCache = new Map<number, CachedObject<any>>();
    private threejsTextureCache = new Map<number, CachedObject<any>>();
    private threejsMaterialCache = new Map<number, CachedObject<ParsedMaterial>>();
    engine: EngineCache;
    textureType: TextureModes = "dds";
    modelType: ModelModes = "nxt";

    static textureIndices: Record<TextureTypes, Record<Exclude<TextureModes, "none">, number>> = {
        diffuse: {
            png: cacheMajors.texturesPng,
            dds: cacheMajors.texturesDds,
            bmp: cacheMajors.texturesBmp,
            ktx: cacheMajors.texturesKtx,
            png2014: cacheMajors.textures2015Png,
            dds2014: cacheMajors.textures2015Dds,
            oldpng: cacheMajors.texturesOldPng,
            oldproc: cacheMajors.sprites,
            fullproc: cacheMajors.texturesOldPng,
            legacy: legacyMajors.data,
            legacytga: 0
        },
        normal: {
            png: cacheMajors.texturesPng,
            dds: cacheMajors.texturesDds,
            bmp: cacheMajors.texturesBmp,
            ktx: cacheMajors.texturesKtx,
            png2014: cacheMajors.textures2015CompoundPng,
            dds2014: cacheMajors.textures2015CompoundDds,
            oldpng: cacheMajors.texturesOldCompoundPng,
            oldproc: 0,
            fullproc: 0,
            legacy: 0,
            legacytga: 0
        },
        compound: {
            png: cacheMajors.texturesPng,
            dds: cacheMajors.texturesDds,
            bmp: cacheMajors.texturesBmp,
            ktx: cacheMajors.texturesKtx,
            png2014: cacheMajors.textures2015CompoundPng,
            dds2014: cacheMajors.textures2015CompoundDds,
            oldpng: cacheMajors.texturesOldCompoundPng,
            oldproc: 0,
            fullproc: 0,
            legacy: 0,
            legacytga: 0
        }
    }

    private constructor(scenecache: EngineCache, modeltype: ModelModes | "auto") {
        this.engine = scenecache;
        if (modeltype != "auto") {
            this.modelType = modeltype;
        } else if (scenecache.getBuildNr() <= lastClassicBuildnr) {
            this.modelType = "classic";
        } else if (scenecache.hasOldModels && !scenecache.hasNewModels) {
            this.modelType = "old";
        } else {
            this.modelType = "nxt";
        }
    }
    static async create(engine: EngineCache, texturemode: TextureModes | "auto" = "auto", modelmode: ModelModes | "auto" = "auto") {
        let scene = new ThreejsSceneCache(engine, modelmode);
        scene.textureType = (texturemode == "auto" ? await detectTextureMode(engine.rawsource) : texturemode);
        return scene;
    }

    async getTextureFile(type: TextureTypes, texid: number, stripAlpha: boolean) {
        const { ParsedTexture } = await import("./textures");
        let cacheindex = (ThreejsSceneCache.textureIndices as any)[type][this.textureType];
        let cachekey = ((cacheindex | 0xff) << 23) | texid;
        let texmode = this.textureType;

        return this.engine.fetchCachedObject(this.threejsTextureCache, cachekey, async () => {
            if (texmode == "fullproc") {
                const { loadProcTexture } = await import("./proceduraltexture");
                let tex = await loadProcTexture(this.engine, texid);
                let parsed = new ParsedTexture(tex.img, false, false);
                parsed.filesize = tex.filesize;
                return parsed;
            } else if (texmode == "legacytga" || texmode == "legacy") {
                const { combineLegacyTexture } = await import("../cache/legacycache");
                let img: any;
                if (this.engine.classicData) {
                    let texmeta = this.engine.classicData.textures[texid - 1];
                    img = await combineLegacyTexture(this.engine, texmeta.name, texmeta.subname, texmode == "legacytga");
                } else {
                    const { legacyGroups, parseLegacyImageFile } = await import("../cache/legacycache");
                    let imgfile = await this.engine.getArchiveById(legacyMajors.data, legacyGroups.textures);
                    img = await parseLegacyImageFile(this.engine, imgfile[texid].buffer)
                }
                return new ParsedTexture(img.img, stripAlpha, false);
            } else {
                let file = await this.engine.getFileById(cacheindex, texid);
                if (texmode == "oldproc") {
                    const { parseSprite } = await import("./sprite");
                    let sprite = parseSprite(file);
                    return new ParsedTexture(sprite[0].img, stripAlpha, false);
                } else {
                    return new ParsedTexture(file, stripAlpha, true);
                }
            }
        }, obj => (obj.filesize ? obj.filesize * 2 : 1000));
    }

    async getModelData(id: number): Promise<any> {
        if (id >= constModelOffset) {
            const { materialPreviewCube, classicWall, classicWallDiag, classicRoof10, classicRoof12, classicRoof13, classicRoof14, classicRoof15, classicRoof16, classicRoof17 } = await import("./modelutils");
            const constModels = new Map([
                [constModelsIds.materialCube, Promise.resolve(materialPreviewCube)],
                [constModelsIds.classicWall, Promise.resolve(classicWall)],
                [constModelsIds.classicWallDiag, Promise.resolve(classicWallDiag)],
                [constModelsIds.classicRoof10, Promise.resolve(classicRoof10)],
                [constModelsIds.classicRoof12, Promise.resolve(classicRoof12)],
                [constModelsIds.classicRoof13, Promise.resolve(classicRoof13)],
                [constModelsIds.classicRoof14, Promise.resolve(classicRoof14)],
                [constModelsIds.classicRoof15, Promise.resolve(classicRoof15)],
                [constModelsIds.classicRoof16, Promise.resolve(classicRoof16)],
                [constModelsIds.classicRoof17, Promise.resolve(classicRoof17)]
            ]);
            let res = constModels.get(id);
            if (!res) { throw new Error(`constmodel ${id} does not exist`); }
            return res;
        }

        return this.engine.fetchCachedObject(this.modelCache, id, async () => {
            if (this.modelType == "nxt") {
                let file = await this.engine.getFileById(cacheMajors.models, id);
                const { parseOb3Model } = await import("./rt7model");
                return parseOb3Model(file, this.engine);
            } else if (this.modelType == "old") {
                let major = (this.engine.legacyData ? legacyMajors.oldmodels : cacheMajors.oldmodels);
                let file = await this.engine.getFileById(major, id);
                const { parseRT5Model } = await import("./rt5model");
                return parseRT5Model(file, this.engine.rawsource);
            } else if (this.modelType == "classic") {
                const { classicGroups } = await import("../cache/classicloader");
                let arch = await this.engine.getArchiveById(0, classicGroups.models);
                const { parseRT2Model } = await import("./rt2model");
                return parseRT2Model(arch[id].buffer, this.engine);
            } else {
                throw new Error("unexpected");
            }
        }, obj => (obj.meshes ? obj.meshes.reduce((a: any, m: any) => a + m.indices.count, 0) * 30 : 1000));
    }

    getMaterial(matid: number, hasVertexAlpha: boolean, minimapVariant: boolean) {
        let matcacheid = matid + (hasVertexAlpha ? 1 << 24 : 0) + (minimapVariant ? 1 << 25 : 0);
        return this.engine.fetchCachedObject(this.threejsMaterialCache, matcacheid, async () => {
            let material = this.engine.getMaterialData(matid);
            return convertMaterialToThree(this, material, hasVertexAlpha, minimapVariant);
        }, mat => 256 * 256 * 4 * 2);
    }
}

// augmentThreeJsMinimapLocMaterial moved to modelutils.ts

export async function convertMaterialToThree(source: { textureType: TextureModes, getTextureFile: (type: TextureTypes, texid: number, stripAlpha: boolean) => Promise<any>, engine: EngineCache }, material: JMatData, hasVertexAlpha: boolean, minimapVariant: boolean) {
    let mat = new THREE.MeshStandardMaterial();
    mat.alphaTest = (material.alphamode == "cutoff" ? 0.5 : 0.1);
    mat.transparent = hasVertexAlpha || material.alphamode == "blend";
    const wraptypes = material.texmodes == "clamp" ? THREE.ClampToEdgeWrapping : material.texmodes == "repeat" ? THREE.RepeatWrapping : THREE.MirroredRepeatWrapping;
    const wraptypet = material.texmodet == "clamp" ? THREE.ClampToEdgeWrapping : material.texmodet == "repeat" ? THREE.RepeatWrapping : THREE.MirroredRepeatWrapping;

    if (typeof material.textures.diffuse != "undefined" && source.textureType != "none") {
        let diffuse = await (await source.getTextureFile("diffuse", material.textures.diffuse, material.stripDiffuseAlpha)).toImageData();
        let difftex = new THREE.DataTexture(diffuse.data, diffuse.width, diffuse.height, THREE.RGBAFormat);
        difftex.needsUpdate = true;
        difftex.wrapS = wraptypes;
        difftex.wrapT = wraptypet;
        difftex.colorSpace = THREE.SRGBColorSpace;
        difftex.magFilter = THREE.LinearFilter;
        difftex.minFilter = THREE.NearestMipMapNearestFilter;
        difftex.generateMipmaps = true;

        mat.map = difftex;

        if (material.textures.normal) {
            let parsed = await source.getTextureFile("normal", material.textures.normal, false);
            let raw = await parsed.toImageData();
            let normals = makeImageData(null, raw.width, raw.height);
            let emisive = makeImageData(null, raw.width, raw.height);
            const data = raw.data;
            for (let i = 0; i < data.length; i += 4) {
                let dx = data[i + 1] / 127.5 - 1;
                let dy = data[i + 3] / 127.5 - 1;
                normals.data[i + 0] = data[i + 1];
                normals.data[i + 1] = data[i + 3];
                normals.data[i + 2] = (Math.sqrt(Math.max(1 - dx * dx - dy * dy, 0)) + 1) * 127.5;
                normals.data[i + 3] = 255;
                const emissive = data[i + 0] / 255;
                emisive.data[i + 0] = diffuse.data[i + 0] * emissive;
                emisive.data[i + 1] = diffuse.data[i + 1] * emissive;
                emisive.data[i + 2] = diffuse.data[i + 2] * emissive;
                emisive.data[i + 3] = 255;
            }
            mat.normalMap = new THREE.DataTexture(normals.data, normals.width, normals.height, THREE.RGBAFormat);
            mat.normalMap.needsUpdate = true;
            mat.normalMap.wrapS = wraptypes;
            mat.normalMap.wrapT = wraptypet;
            mat.normalMap.magFilter = THREE.LinearFilter;

            mat.emissiveMap = new THREE.DataTexture(emisive.data, emisive.width, emisive.height, THREE.RGBAFormat);
            mat.emissiveMap.needsUpdate = true;
            mat.emissiveMap.wrapS = wraptypes;
            mat.emissiveMap.wrapT = wraptypet;
            mat.emissiveMap.magFilter = THREE.LinearFilter;
            mat.emissive.setRGB(1, 1, 1);
        }
        if (material.textures.compound) {
            let compound = await (await source.getTextureFile("compound", material.textures.compound, false)).toImageData();
            let compoundmapped = makeImageData(null, compound.width, compound.height);
            for (let i = 0; i < compound.data.length; i += 4) {
                compoundmapped.data[i + 1] = compound.data[i + 1];
                compoundmapped.data[i + 2] = compound.data[i + 0];
                compoundmapped.data[i + 3] = 255;
            }
            let tex = new THREE.DataTexture(compoundmapped.data, compoundmapped.width, compoundmapped.height, THREE.RGBAFormat);
            tex.needsUpdate = true;
            tex.wrapS = wraptypes;
            tex.wrapT = wraptypet;
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.magFilter = THREE.LinearFilter;
            mat.metalnessMap = tex;
            mat.roughnessMap = tex;
            mat.metalness = 1;
        }
    }
    mat.vertexColors = material.baseColorFraction != 1 || !material.textures.diffuse || hasVertexAlpha;

    mat.userData = material;
    if (material.uvAnim) {
        (mat.userData.gltfExtensions ??= {}).RA_materials_uvanim = {
            uvAnim: [material.uvAnim.u, material.uvAnim.v]
        };
    }
    if (minimapVariant) {
        mat = minimapLocMaterial(mat.map!, material.alphamode, material.alphacutoff) as any;
    } else if (!source.engine.hasNewModels) {
    } else {
        mat = createRuneScapeMaterial(mat.map, material) as any;
    }

    return { mat, matmeta: material };
}

export async function detectTextureMode(source: CacheFileSource) {
    let detectmajor = async (major: number) => {
        let lastfile = -1;
        try {
            let indexfile = await source.getCacheIndex(major);
            let last = indexfile[indexfile.length - 1];
            await source.getFile(last.major, last.minor, last.crc);
            lastfile = last.minor;
        } catch (e) { }
        return lastfile;
    }

    let textureMode: TextureModes = "none";
    if (source.getBuildNr() <= lastClassicBuildnr) {
        const { classicGroups } = await import("../cache/classicloader");
        let texindex = await source.findSubfileByName(0, classicGroups.textures, "INDEX.DAT");
        textureMode = (texindex ? "legacy" : "legacytga");
    } else if (source.getBuildNr() <= lastLegacyBuildnr) {
        textureMode = "legacy";
    } else if (source.getBuildNr() <= 471) {
        textureMode = "oldproc";
    } else if (source.getBuildNr() <= 736) {
        textureMode = "fullproc";
    } else {
        let numbmp = await detectmajor(cacheMajors.texturesBmp);
        let numdds = await detectmajor(cacheMajors.texturesDds);
        if (numbmp > 0 || numdds > 0) {
            textureMode = (numbmp > numdds ? "bmp" : "dds");
        } else {
            let numpng2014 = await detectmajor(cacheMajors.textures2015Png);
            let numdds2014 = await detectmajor(cacheMajors.textures2015Dds);
            if (numpng2014 > 0 || numdds2014 >= 0) {
                textureMode = (numdds2014 > numpng2014 ? "dds2014" : "png2014");
            } else if (await detectmajor(cacheMajors.texturesOldPng) > 0) {
                textureMode = "oldpng";
            } else {
                textureMode = "none";
            }
        }
    }
    return textureMode;
}

export async function* iterateConfigFiles(cache: EngineCache, major: number) {
    if (cache.legacyData) {
        let files: Buffer[] | null = null;
        if (major == cacheMajors.items) { files = cache.legacyData.items; }
        else if (major == cacheMajors.npcs) { files = cache.legacyData.npcs; }
        else if (major == cacheMajors.objects) { files = cache.legacyData.objects; }
        else if (major == cacheMajors.spotanims) { files = cache.legacyData.spotanims; }
        if (!files) { throw new Error(`cache major ${major} can not be iterated`); }
        yield* files.map((file, id) => ({ id, file }));
    } else if (cache.getBuildNr() <= 488) {
        let arch = await cache.getArchiveById(cacheMajors.config, (oldConfigMaps as any)[major]);
        yield* arch.map(q => ({ id: q.fileid, file: q.buffer }));
    } else {
        let locindices = await cache.getCacheIndex(major);
        let stride = (mappedFileIds as any)[major];
        for (let index of locindices) {
            if (!index) { continue; }
            let arch = await cache.getFileArchive(index);
            yield* arch.map(q => ({ id: index.minor * stride + q.fileid, file: q.buffer }));
        }
    }
}



// getAttributeBackingStore moved to modelutils.ts

// applyMaterial moved to modelutils.ts


export { EngineCache as ModelConverter };

