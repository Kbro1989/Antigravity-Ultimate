import { BufferAttribute, InterleavedBufferAttribute, Vector3, Bone, Skeleton, Object3D, Mesh, BufferGeometry, SkinnedMesh } from "three";
import * as THREE from "three";
import { ModelData, ModelMeshData } from "./rt7model";
import { ModelModifications, HSL2RGB, packedHSL2HSL } from "../utils";
import { MaterialData } from "./jmat";

export type ParsedMaterial = {
    mat: THREE.Material,
    matmeta: MaterialData
}

export function augmentThreeJsMinimapLocMaterial(mat: THREE.Material) {
    mat.customProgramCacheKey = () => "minimaploc";
    mat.onBeforeCompile = (shader) => {
        shader.fragmentShader = shader.fragmentShader
            .replace("#include <map_fragment>",
                `#ifdef USE_MAP\n`
                + `vec4 sampledDiffuseColor = texture2D( map, vUv );\n`
                + `#ifdef DECODE_VIDEO_TEXTURE\n`
                + `sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n`
                + `#endif\n`
                + `sampledDiffuseColor.a = pow(sampledDiffuseColor.a,1.0/2.4);\n`//i don't know i'm lost, this seems to match
                + `if(sampledDiffuseColor.a < 0.5){discard;}\n`
                // + `sampledDiffuseColor.a = step( 0.05, sampledDiffuseColor.a);\n`
                // + `sampledDiffuseColor.rgb *= 0.1;\n`
                // + `sampledDiffuseColor.rgb = pow(sampledDiffuseColor.rgb,vec3(2.2));\n`
                + `diffuseColor *= sampledDiffuseColor;\n`
                + `#endif\n`
            )
            .replace("#include <color_fragment>",
                `#if defined( USE_COLOR_ALPHA ) || defined( USE_COLOR )\n`
                + `vec3 srgbVColor = pow(vColor.rgb,vec3(1.0/2.4));\n`//convert vertex color from linear to srgb
                + `#if defined( USE_COLOR_ALPHA )\n`
                + `diffuseColor *= vec4(srgbVColor,vColor.a);\n`
                + `#elif defined( USE_COLOR )\n`
                + `diffuseColor.rgb *= srgbVColor;\n`
                + `#endif\n`
                + `#endif\n`
            )
            .replace("#include <colorspace_fragment>",
                "\n"
            );
    }
}

export function augmentZOffsetMaterial(mat: THREE.Material, zoffset: number) {
    mat.customProgramCacheKey = () => "zoffset" + zoffset;
    mat.onBeforeCompile = (shader) => {
        shader.vertexShader = shader.vertexShader.replace(/#include <(\w+)>/g, (m, n) => `// == ${n} ==\n${m}`);
        shader.vertexShader = shader.vertexShader.replace("#include <project_vertex>", `
			#include <project_vertex>
			mvPosition.xyz -= normalize(mvPosition.xyz) * ${zoffset.toExponential()};
			gl_Position = projectionMatrix * mvPosition;
		`);
    };
}

export function augmentThreeJsFloorMaterial(mat: THREE.Material, isminimap: boolean) {
    mat.customProgramCacheKey = () => (isminimap ? "minimaptex" : "floortex");
    mat.onBeforeCompile = (shader) => {
        shader.vertexShader =
            `#ifdef USE_MAP\n`
            + `attribute vec2 texcoord_0;\n`
            + `attribute vec2 texcoord_1;\n`
            + `attribute vec2 texcoord_2;\n`
            + `attribute vec3 color_1;\n`
            + `attribute vec3 color_2;\n`
            + `varying vec2 v_ra_floortex_0;\n`
            + `varying vec2 v_ra_floortex_1;\n`
            + `varying vec2 v_ra_floortex_2;\n`
            + `varying vec3 v_ra_floortex_weights;\n`
            + `varying vec3 v_ra_floortex_usescolor;\n`
            + `#endif\n`
            + shader.vertexShader.replace("#include <uv_vertex>",
                `#ifdef USE_MAP\n`
                + `v_ra_floortex_0 = texcoord_0;\n`
                + `v_ra_floortex_1 = texcoord_1;\n`
                + `v_ra_floortex_2 = texcoord_2;\n`
                + `v_ra_floortex_weights = color_1;\n`
                + `v_ra_floortex_usescolor = color_2;\n`
                + `#endif\n`
                + "#include <uv_vertex>"
            );
        shader.fragmentShader =
            `#ifdef USE_MAP\n`
            + `varying vec2 v_ra_floortex_0;\n`
            + `varying vec2 v_ra_floortex_1;\n`
            + `varying vec2 v_ra_floortex_2;\n`
            + `varying vec3 v_ra_floortex_weights;\n`
            + `varying vec3 v_ra_floortex_usescolor;\n`
            + `#endif\n`
            + `\n`
            + `highp vec3 runeapps_srgb_to_linear(highp vec3 color,float gamma){\n`
            + `	return pow(color.rgb,vec3(1.0/gamma));\n`
            + `}\n`
            + `highp vec3 runeapps_linear_to_srgb(highp vec3 color,float gamma){\n`
            + `	return pow(color.rgb,vec3(gamma));\n`
            + `}\n`
            + shader.fragmentShader
                .replace("#include <color_fragment>", "")
                .replace("#include <map_fragment>",
                    `#include <color_fragment>\n`
                    + `#ifdef USE_MAP\n`
                    + `vec4 texelColor = \n`
                    + (isminimap ?
                        `   v_ra_floortex_weights.r * mix(texture2D( map, v_ra_floortex_0 ), diffuseColor * 0.5, v_ra_floortex_usescolor.r)\n`
                        + ` + v_ra_floortex_weights.g * mix(texture2D( map, v_ra_floortex_1 ), diffuseColor * 0.5, v_ra_floortex_usescolor.g)\n`
                        + ` + v_ra_floortex_weights.b * mix(texture2D( map, v_ra_floortex_2 ), diffuseColor * 0.5, v_ra_floortex_usescolor.b);\n`
                        // + "texelColor.rgb = sqrt( texelColor.rgb );\n"
                        :
                        `   texture2D( map, v_ra_floortex_0 ) * v_ra_floortex_weights.r * mix(vec4(1.0), diffuseColor, v_ra_floortex_usescolor.r)\n`
                        + ` + texture2D( map, v_ra_floortex_1 ) * v_ra_floortex_weights.g * mix(vec4(1.0), diffuseColor, v_ra_floortex_usescolor.g)\n`
                        + ` + texture2D( map, v_ra_floortex_2 ) * v_ra_floortex_weights.b * mix(vec4(1.0), diffuseColor, v_ra_floortex_usescolor.b);\n`
                    )
                    //TODO is this needed?
                    + `texelColor = mix( diffuseColor,texelColor,dot(vec3(1.0),v_ra_floortex_weights));\n`
                    + `#endif\n`
                    + `diffuseColor = texelColor;\n`
                );
        if (isminimap) {
            shader.fragmentShader = shader.fragmentShader
                .replace("#include <colorspace_fragment>",
                    "const float outgamma=2.3;\n"
                    + "gl_FragColor.rgb = runeapps_srgb_to_linear(gl_FragColor.rgb,outgamma);\n"//don't blame me for this, this is literally how the minimap is rendered
                )
                .replace("#include <lights_fragment_begin>",
                    `#include <lights_fragment_begin>\n`
                    + `irradiance =  runeapps_linear_to_srgb(0.5*getAmbientLightIrradiance( ambientLightColor ),2.4);\n`
                    + `irradiance += runeapps_linear_to_srgb(0.5*getLightProbeIrradiance( lightProbe, geometry.normal ),2.4);\n`
                    // + `irradiance *= 0.5;\n`
                )
        }
    }
}


type rgb = [r: number, g: number, b: number];
type xyz = [x: number, y: number, z: number];

const white: rgb = [255, 255, 255];
const red: rgb = [255, 0, 0];
const tile = 512;
const halftile = 256;
const wall = tile * 192 / 128;//based on wall height
const rooftop = wall + tile / 2;
const roofoverhang = halftile + tile / 5;
const roofhang = wall;// wall - (rooftop - wall) / tile * (roofoverhang - halftile);
const roofcorner = rooftop - (rooftop - roofhang) / (halftile + roofoverhang) * tile;

function getnormal(v0: xyz, v1: xyz, v2: xyz): xyz {
    let normx = (v2[1] - v0[1]) * (v1[2] - v0[2]) - (v1[1] - v0[1]) * (v2[2] - v0[2]);
    let normy = (v2[2] - v0[2]) * (v1[0] - v0[0]) - (v1[2] - v0[2]) * (v2[0] - v0[0]);
    let normz = (v2[0] - v0[0]) * (v1[1] - v0[1]) - (v1[0] - v0[0]) * (v2[1] - v0[1]);
    let invlen = 1 / Math.hypot(normx, normy, normz);
    return [normx * invlen, normy * invlen, normz * invlen];
}

export class MeshBuilder {
    pos: number[] = [];
    color: number[] = [];
    uvs: number[] = [];
    index: number[] = [];
    normals: number[] = [];
    vertindex = 0;
    parent: ModelBuilder | null;
    constructor(parent: ModelBuilder | null) {
        this.parent = parent;
    }
    addParallelogram(col: rgb, v0: xyz, v1: xyz, v2: xyz) {
        let v3 = [
            v0[0] + v2[0] - v1[0],
            v0[1] + v2[1] - v1[1],
            v0[2] + v2[2] - v1[2]
        ];
        let norm = getnormal(v0, v1, v2);
        this.pos.push(...v0, ...v1, ...v2, ...v3);
        this.color.push(...col, ...col, ...col, ...col);
        this.normals.push(...norm, ...norm, ...norm, ...norm)
        this.uvs.push(0, 0, 1, 0, 1, 1, 0, 1);
        this.index.push(
            this.vertindex + 0, this.vertindex + 2, this.vertindex + 1,
            this.vertindex + 0, this.vertindex + 3, this.vertindex + 2,
        );
        this.vertindex += 4;
        return this;
    }
    addTriangle(col: rgb, v0: xyz, v1: xyz, v2: xyz) {
        let norm = getnormal(v0, v2, v1);
        this.color.push(...col, ...col, ...col);
        this.pos.push(...v0, ...v1, ...v2);
        this.uvs.push(0, 0, 0, 1, 1, 1);
        this.normals.push(...norm, ...norm, ...norm);
        this.index.push(this.vertindex + 0, this.vertindex + 1, this.vertindex + 2);
        this.vertindex += 3;
        return this;
    }
    addCube(col: rgb, [centerx, centery, centerz]: xyz, [sizex, sizey, sizez]: xyz) {
        let x0 = centerx - sizex / 2;
        let y0 = centery - sizey / 2;
        let z0 = centerz - sizez / 2;
        let x1 = x0 + sizex;
        let y1 = y0 + sizey;
        let z1 = z0 + sizez;
        this.addParallelogram(col, [x0, y0, z0], [x1, y0, z0], [x1, y1, z0]);
        this.addParallelogram(col, [x1, y0, z0], [x1, y0, z1], [x1, y1, z1]);
        this.addParallelogram(col, [x1, y0, z1], [x0, y0, z1], [x0, y1, z1]);
        this.addParallelogram(col, [x0, y0, z1], [x0, y0, z0], [x0, y1, z0]);
        this.addParallelogram(col, [x0, y0, z1], [x1, y0, z1], [x1, y0, z0]);
        this.addParallelogram(col, [x0, y1, z0], [x1, y1, z0], [x1, y1, z1]);
        return this;
    }
    addExtrusion(color: rgb, vector: xyz, points: xyz[]) {
        //side faces
        let prevpoint = points[points.length - 1];
        if (Math.hypot(...vector) != 0) {
            for (let a = 0; a < points.length; a++) {
                let point = points[a];
                this.addParallelogram(color, prevpoint, point, [point[0] + vector[0], point[1] + vector[1], point[2] + vector[2]]);
                prevpoint = point;
            }
        }

        if (points.length > 2) {
            let dx1 = points[2][0] - points[1][0], dy1 = points[2][1] - points[1][1], dz1 = points[2][2] - points[1][2];
            let dx2 = points[0][0] - points[1][0], dy2 = points[0][1] - points[1][1], dz2 = points[0][2] - points[1][2];
            let normx = dy2 * dz1 - dy1 * dz2;
            let normy = dz2 * dx1 - dz1 * dx2;
            let normz = dx2 * dy1 - dx1 * dy2;
            let len = Math.hypot(normx, normy, normz);
            normx /= len;
            normy /= len;
            normz /= len;

            //top polygon
            let startindex = this.index.length;
            let zeroindex = -1;
            let previndex = -1;
            for (let a = 0; a < points.length; a++) {
                let point = points[a];
                this.pos.push(...point);
                this.color.push(...color);
                this.uvs.push(0, 0);
                this.normals.push(normx, normy, normz);
                let index = this.vertindex++;
                if (zeroindex == -1) {
                    zeroindex = index;
                } else if (previndex == -1) {
                    previndex = index
                } else {
                    this.index.push(zeroindex, previndex, index);
                    previndex = index;
                }
            }
            //bottom polygon
            zeroindex = -1;
            previndex = -1;
            for (let a = points.length; a > 0; a--) {
                //start at vertex 0 in order to allow this vertex to be non-convex (use in corner walls, type=2)
                let point = points[a % points.length];
                this.pos.push(...point);
                this.color.push(...color);
                this.uvs.push(0, 0);
                this.normals.push(-normx, -normy, -normz);
                let index = this.vertindex++;
                if (zeroindex == -1) {
                    zeroindex = index;
                } else if (previndex == -1) {
                    previndex = index
                } else {
                    this.index.push(zeroindex, previndex, index);
                    previndex = index;
                }
            }
        }
        return this;
    }
    convertSubmesh(matid: number): ModelData["meshes"][number] {
        let indices = new BufferAttribute(new Uint16Array(this.index), 1);
        return {
            indices,
            vertexstart: 0,
            vertexend: this.pos.length / 3 | 0,
            attributes: {
                pos: new BufferAttribute(new Float32Array(this.pos), 3),
                color: new BufferAttribute(new Uint8Array(this.color), 3, true),
                texuvs: new BufferAttribute(new Float32Array(this.uvs), 2),
                normals: new BufferAttribute(new Float32Array(this.normals), 3)
            },
            indexLODs: [indices],
            hasVertexAlpha: false,
            materialId: matid,
            needsNormalBlending: false,
        }
    }
    mat(mat: number) {
        return this.parent!.mat(mat);
    }
    convert() {
        return this.parent!.convert();
    }
}

export function getAttributeBackingStore(attr: BufferAttribute | InterleavedBufferAttribute): [data: ArrayBufferView, offset: number, stride: number] {
    if (attr instanceof InterleavedBufferAttribute) {
        let data = attr.data.array;
        if (!ArrayBuffer.isView(data)) { throw new Error("typed array backing store expected"); }
        return [data, attr.offset, attr.data.stride];
    } else {
        let data = attr.array;
        if (!ArrayBuffer.isView(data)) { throw new Error("typed array backing store expected"); }
        return [data, 0, attr.itemSize];
    }
}

//same as THREE.BufferGeometry.computeVertexNormals, but only does a certain index range
export function computePartialNormals(index: THREE.BufferAttribute, positionAttribute: THREE.BufferAttribute, normalAttribute: THREE.BufferAttribute, indexstart: number, indexend: number) {
    const a = new Vector3();
    const b = new Vector3();
    const c = new Vector3();
    const d = new Vector3();

    for (let i = indexstart; i < indexend; i += 3) {
        const vA = index.getX(i + 0);
        const vB = index.getX(i + 1);
        const vC = index.getX(i + 2);

        a.fromBufferAttribute(positionAttribute, vA);
        b.fromBufferAttribute(positionAttribute, vB);
        c.fromBufferAttribute(positionAttribute, vC);

        c.sub(b);
        a.sub(b);
        d.crossVectors(c, a);

        a.fromBufferAttribute(normalAttribute, vA);
        b.fromBufferAttribute(normalAttribute, vB);
        c.fromBufferAttribute(normalAttribute, vC);

        a.add(d);
        b.add(d);
        c.add(d);

        normalAttribute.setXYZ(vA, a.x, a.y, a.z);
        normalAttribute.setXYZ(vB, b.x, b.y, b.z);
        normalAttribute.setXYZ(vC, c.x, c.y, c.z);
    }

    for (let i = indexstart; i < indexend; i++) {
        d.fromBufferAttribute(normalAttribute, i);
        d.normalize();
        normalAttribute.setXYZ(i, d.x, d.y, d.z);
    }
}

function meshBuildersToModel(builders: Map<number, MeshBuilder>): ModelData {
    let miny = 0;
    let maxy = 0;

    let meshes: ModelMeshData[] = []
    builders.forEach((builder, mat) => {
        let mesh = builder.convertSubmesh(mat);
        meshes.push(mesh);
        let posattr = mesh.attributes.pos;
        for (let i = 0; i < posattr.count; i++) {
            let y = posattr.getY(i);
            miny = Math.min(miny, y);
            maxy = Math.max(maxy, y);
        }
    });

    return {
        miny, maxy,
        bonecount: 0,
        skincount: 0,
        meshes
    }
}

export class ModelBuilder {
    meshes = new Map<number, MeshBuilder>();

    mat(mat: number) {
        let mesh = this.meshes.get(mat);
        if (!mesh) {
            mesh = new MeshBuilder(this);
            this.meshes.set(mat, mesh);
        }
        return mesh;
    }
    convert() {
        return meshBuildersToModel(this.meshes);
    }
}

export const materialPreviewCube = new ModelBuilder()
    .mat(0).addCube(white, [0, 300, 0], [600, 600, 600])
    .convert();

export const classicWall = new ModelBuilder()
    .mat(0).addParallelogram(white, [-halftile, 0, halftile], [-halftile, tile, halftile], [-halftile, tile, -halftile])
    .mat(1).addParallelogram(red, [-halftile, 0, -halftile], [-halftile, tile, -halftile], [-halftile, tile, halftile])
    .convert();

export const classicWallDiag = new ModelBuilder()
    .mat(0).addParallelogram(white, [halftile, 0, halftile], [halftile, tile, halftile], [-halftile, tile, -halftile])
    .mat(1).addParallelogram(white, [-halftile, 0, -halftile], [-halftile, tile, -halftile], [halftile, tile, halftile])
    .convert();

//low flat
export const classicRoof10 = new ModelBuilder()
    .mat(0).addParallelogram(white, [-roofoverhang, roofcorner, -roofoverhang], [roofoverhang, roofcorner, -roofoverhang], [roofoverhang, roofcorner, roofoverhang])
    .convert();

//edge
export const classicRoof12 = new ModelBuilder()
    .mat(0).addParallelogram(white, [-halftile, rooftop, halftile], [-halftile, rooftop, -halftile], [roofoverhang, roofhang, -halftile])
    .convert();

//diagcorner
export const classicRoof13 = new ModelBuilder()
    .mat(0).addTriangle(white, [roofoverhang, roofhang, halftile], [-halftile, roofhang, -roofoverhang], [-halftile, rooftop, halftile])
    .convert();

//upper convex part
export const classicRoof14 = new ModelBuilder()
    .mat(0).addTriangle(white, [-halftile, rooftop, -halftile], [-halftile, rooftop, halftile], [halftile, rooftop, halftile])
    .mat(0).addTriangle(white, [-halftile, rooftop, -halftile], [halftile, rooftop, halftile], [halftile, roofcorner, -halftile])
    .convert();

//diagonal center roof
export const classicRoof15 = new ModelBuilder()
    .mat(0).addTriangle(white, [halftile, rooftop, halftile], [-halftile, rooftop, -halftile], [-halftile, roofcorner, halftile])
    .mat(0).addTriangle(white, [-halftile, rooftop, -halftile], [halftile, rooftop, halftile], [halftile, roofcorner, -halftile])
    .convert();

//corner
export const classicRoof16 = new ModelBuilder()
    .mat(0).addTriangle(white, [roofoverhang, roofhang, -roofoverhang], [-halftile, roofhang, -roofoverhang], [-halftile, rooftop, halftile])
    .mat(0).addTriangle(white, [roofoverhang, roofhang, halftile], [roofoverhang, roofhang, -roofoverhang], [-halftile, rooftop, halftile])
    .convert();

//flat rooftop
export const classicRoof17 = new ModelBuilder()
    .mat(0).addParallelogram(white, [-halftile, rooftop, -halftile], [halftile, rooftop, -halftile], [halftile, rooftop, halftile])
    .convert();


export const topdown2dWallModels = generateTopdown2dWallModels();


function generateTopdown2dWallModels() {
    const edge = halftile;
    const offset = halftile - tile / 8;
    const height = 0;
    const wallvec: xyz = [0, height, 0];
    return {
        wall: new ModelBuilder().mat(-1).addExtrusion(white, wallvec, [
            [-edge, 0, -edge],
            [-edge, 0, edge],
            [-offset, 0, edge],
            [-offset, 0, -edge]
        ]).convert(),
        shortcorner: new ModelBuilder().mat(-1).addExtrusion(white, wallvec, [
            [-edge, 0, edge],
            [-offset, 0, edge],
            [-offset, 0, offset],
            [-edge, 0, offset]
        ]).convert(),
        longcorner: new ModelBuilder().mat(-1).addExtrusion(white, wallvec, [
            [-offset, 0, offset],
            [-offset, 0, -edge],
            [-edge, 0, -edge],
            [-edge, 0, edge],
            [edge, 0, edge],
            [edge, 0, offset],
        ]).convert(),
        pillar: new ModelBuilder().mat(-1).addExtrusion(white, wallvec, [
            //same as shortcorner
            [-edge, 0, edge],
            [-offset, 0, edge],
            [-offset, 0, offset],
            [-edge, 0, offset]
        ]).convert(),
        diagonal: new ModelBuilder().mat(-1).addExtrusion(white, wallvec, [
            [-edge, 0, -edge],
            [-edge, 0, -offset],
            [offset, 0, edge],
            [edge, 0, edge],
            [edge, 0, offset],
            [-offset, 0, -edge]
        ]).convert(),
    }
}

export function mergeBoneids(model: any) {
    let totalverts = model.meshes.reduce((a: any, v: any) => a + v.vertexend - v.vertexstart, 0);
    let order = new Uint32Array(totalverts);
    let orderindex = 0;
    for (let meshindex = 0; meshindex < model.meshes.length; meshindex++) {
        let mesh = model.meshes[meshindex];
        for (let i = mesh.vertexstart; i < mesh.vertexend; i++) {
            order[orderindex++] = (meshindex << 23) | i;
        }
    }

    function compareVertkeys(model: any, a: number, b: number) {
        const mesha = model.meshes[a >> 23];
        const meshb = model.meshes[b >> 23];
        const ia = a & 0x7fffff;
        const ib = b & 0x7fffff;
        const posa = mesha.attributes.pos;
        const posb = meshb.attributes.pos;
        return posa.getX(ia) - posb.getX(ib)
            || posa.getY(ia) - posb.getY(ib)
            || posa.getZ(ia) - posb.getZ(ib);
    }

    let tmp1 = new Vector3();
    let normsum = new Vector3();
    order.sort((a, b) => compareVertkeys(model, a, b));
    for (let i = 0; i < order.length;) {
        let start = i;
        i++;
        while (i < order.length && compareVertkeys(model, order[start], order[i]) == 0) { i++; }
        if (i > start + 1) {
            const mesh1 = model.meshes[order[start] >> 23];
            const i1 = order[start] & 0x7fffff;

            normsum.set(0, 0, 0);
            for (let j = start; j < i; j++) {
                const mesh2 = model.meshes[order[j] >> 23];
                const i2 = order[j] & 0x7fffff;
                if (mesh2.needsNormalBlending && mesh2.attributes.normals) {
                    tmp1.fromBufferAttribute(mesh2.attributes.normals, i2);
                    normsum.add(tmp1);
                }
            }
            normsum.normalize();

            for (let j = start; j < i; j++) {
                const mesh2 = model.meshes[order[j] >> 23];
                const i2 = order[j] & 0x7fffff;
                if (j != start && mesh1.attributes.boneids && mesh2.attributes.boneids) {
                    for (let c = 0; c < mesh1.attributes.boneids.itemSize; c++) {
                        mesh2.attributes.boneids.setComponent(i2, c, mesh1.attributes.boneids.getComponent(i1, c));
                        mesh2.attributes.boneweights.setComponent(i2, c, mesh1.attributes.boneweights.getComponent(i1, c));
                    }
                }
                if (mesh2.needsNormalBlending && mesh2.attributes.normals) {
                    if (normsum.lengthSq() > 0.001) {
                        mesh2.attributes.normals.setXYZ(i2, normsum.x, normsum.y, normsum.z);
                    }
                }
            }
        }
    }
}

export function mergeModelDatas(models: any[]) {
    return {
        bonecount: Math.max(...models.map((q: any) => q.bonecount)),
        skincount: Math.max(...models.map((q: any) => q.skincount)),
        maxy: Math.max(...models.map((q: any) => q.maxy)),
        miny: Math.max(...models.map((q: any) => q.miny)),
        meshes: models.flatMap((q: any) => q.meshes),
        debugmeshes: models.flatMap((q: any) => q.debugmeshes ?? [])
    };
}

export function modifyMesh(mesh: ModelMeshData, mods: ModelModifications) {
    let newmat = mods.replaceMaterials?.find(q => q[0] == mesh.materialId)?.[1];
    let newmesh = { ...mesh };
    if (newmat != undefined) {
        newmesh.materialId = (newmat == (1 << 16) - 1 ? -1 : newmat);
    }
    if (typeof mods.lodLevel == "number" && mods.lodLevel != -1) {
        newmesh.indices = mesh.indexLODs[Math.min(mods.lodLevel, mesh.indexLODs.length - 1)];
    }

    let clonedcolors: BufferAttribute | undefined = undefined;
    if (mods.replaceColors && mods.replaceColors.length != 0 && mesh.attributes.color) {
        let colors = mesh.attributes.color;

        let map: [number, [number, number, number]][] = [];
        for (let repl of mods.replaceColors) {
            let oldcol = HSL2RGB(packedHSL2HSL(repl[0]));
            let newcol = HSL2RGB(packedHSL2HSL(repl[1]));
            map.push([(oldcol[0] << 16) | (oldcol[1] << 8) | oldcol[2], newcol]);
        }

        for (let i = 0; i < colors.count; i++) {
            let key = (colors.getX(i) * 255 << 16) | (colors.getY(i) * 255 << 8) | colors.getZ(i) * 255;
            for (let repl of map) {
                if (key == repl[0]) {
                    if (!clonedcolors) {
                        clonedcolors = colors.clone();
                    }
                    clonedcolors.setXYZ(i, repl[1][0] / 255, repl[1][1] / 255, repl[1][2] / 255);
                    break;
                }
            }
        }
    }
    if (clonedcolors) {
        newmesh.attributes = {
            ...mesh.attributes,
            color: clonedcolors
        }
    }

    return newmesh;
}

export function applyMaterial(mesh: Mesh, parsedmat: ParsedMaterial, minimapVariant: boolean, inplace = false) {
    let oldcol = mesh.geometry.getAttribute("color");
    let hasVertexAlpha = !!oldcol && oldcol.itemSize == 4;
    mesh.material = parsedmat.mat;
    let basecolor = (minimapVariant && parsedmat.matmeta.baseColorFraction == 1 ? [0.5, 0.5, 0.5] : parsedmat.matmeta.baseColor);
    let nonwhiteverts = parsedmat.matmeta.baseColorFraction != 1 || basecolor.some(q => q != 1) || minimapVariant
    let needsvertexcolors = nonwhiteverts || !parsedmat.matmeta.textures.diffuse || hasVertexAlpha;
    if (needsvertexcolors) {
        if (parsedmat.matmeta.baseColorFraction != 0) {
            let vertcount = mesh.geometry.getAttribute("position").count;
            let oldcol = mesh.geometry.getAttribute("color");
            let oldfrac = 1 - parsedmat.matmeta.baseColorFraction;
            let newrcomp = parsedmat.matmeta.baseColorFraction * basecolor[0] * 255;
            let newgcomp = parsedmat.matmeta.baseColorFraction * basecolor[1] * 255;
            let newbcomp = parsedmat.matmeta.baseColorFraction * basecolor[2] * 255;
            let itemsize = hasVertexAlpha ? 4 : 3;
            let newcol = (inplace && oldcol ? oldcol : new BufferAttribute(new Uint8Array(itemsize * vertcount), itemsize, true));
            let [newbuf, newoffset, newstride] = getAttributeBackingStore(newcol as any);
            let [oldbuf, oldoffset, oldstride] = (oldcol ? getAttributeBackingStore(oldcol as any) : [null, 0, 0]);

            for (let i = 0; i < vertcount; i++) {
                let ii = newoffset + newstride * i;
                let jj = oldoffset + oldstride * i;
                let oldr = (oldbuf ? (oldbuf as any)[jj + 0] : 255);
                let oldg = (oldbuf ? (oldbuf as any)[jj + 1] : 255);
                let oldb = (oldbuf ? (oldbuf as any)[jj + 2] : 255);
                (newbuf as any)[ii + 0] = Math.min(255, oldr * oldfrac + newrcomp);
                (newbuf as any)[ii + 1] = Math.min(255, oldg * oldfrac + newgcomp);
                (newbuf as any)[ii + 2] = Math.min(255, oldb * oldfrac + newbcomp);
                if (hasVertexAlpha) {
                    (newbuf as any)[ii + 3] = (oldbuf ? (oldbuf as any)[jj + 3] : 255);
                }
            }
            mesh.geometry.setAttribute("color", newcol);
        }
    } else if (mesh.geometry.getAttribute("color")) {
        mesh.geometry.deleteAttribute("color");
    }
}

export async function ob3ModelToThree(scene: { getMaterial: (id: number, hasVertexAlpha: boolean, minimapVariant: boolean) => Promise<ParsedMaterial> }, model: any) {
    let rootnode = new THREE.Object3D();
    let nullskeleton: THREE.Skeleton = null!;
    if (model.bonecount != 0 || model.skincount != 0) {
        let nullbones: THREE.Object3D[] = [];
        let maxbones = Math.max(model.bonecount, model.skincount);
        let rootbone = new THREE.Bone();
        rootnode.add(rootbone as any);
        for (let i = 0; i < maxbones; i++) { nullbones.push(rootbone as any); }
        nullskeleton = new THREE.Skeleton(nullbones as any);
    }

    for (let meshdata of model.meshes) {
        let attrs = meshdata.attributes;
        let geo = new THREE.BufferGeometry();
        geo.setAttribute("position", attrs.pos);
        if (attrs.color) { geo.setAttribute("color", attrs.color); }
        if (attrs.normals) { geo.setAttribute("normal", attrs.normals); }
        if (attrs.texuvs) { geo.setAttribute("uv", attrs.texuvs); }
        if (attrs.skinids) { geo.setAttribute("RA_skinIndex_skin", attrs.skinids); }
        if (attrs.skinweights) { geo.setAttribute("RA_skinWeight_skin", attrs.skinweights); }
        if (attrs.boneids) { geo.setAttribute("RA_skinIndex_bone", attrs.boneids); }
        if (attrs.boneweights) { geo.setAttribute("RA_skinWeight_bone", attrs.boneweights); }
        geo.index = meshdata.indices;
        let mesh: THREE.Mesh | THREE.SkinnedMesh;
        if (attrs.skinids || attrs.boneids) {
            mesh = new THREE.SkinnedMesh(geo);
            let oldbones = !!geo.attributes.RA_skinIndex_bone;
            if (!geo.attributes.skinIndex) {
                geo.setAttribute("skinIndex", (oldbones ? geo.attributes.RA_skinIndex_bone : geo.attributes.RA_skinIndex_skin));
                geo.setAttribute("skinWeight", (oldbones ? geo.attributes.RA_skinWeight_bone : geo.attributes.RA_skinWeight_skin));
            }
            (mesh as THREE.SkinnedMesh).bind(nullskeleton);
        } else {
            mesh = new THREE.Mesh(geo);
        }

        let mat = await scene.getMaterial(meshdata.materialId, meshdata.hasVertexAlpha, false);
        applyMaterial(mesh, mat, false);
        rootnode.add(mesh);
    }
    if (model.debugmeshes && model.debugmeshes.length != 0) {
        rootnode.add(...model.debugmeshes);
    }
    return rootnode;
}

export type SimpleModelDef = {
    modelid: number,
    mods: ModelModifications
}[];

export type SimpleModelInfo<T = object, ID = string> = {
    models: SimpleModelDef,
    anims: Record<string, number>,
    info: T,
    id: ID,
    name: string
}

//typescript helper to force type inference
export function castModelInfo<T, ID>(info: SimpleModelInfo<T, ID>) {
    return info;
}

export interface ThreeJsSceneElementSource {
    getSceneElements(): any;
    addToScene(scene: any): void;
    cleanup(): void;
}

export function serializeAnimset(group: any) {
    let anims: Record<string, number> = {};
    let addanim = (name: string, id: number) => {
        if (id != -1 && Object.values(anims).indexOf(id) == -1) {
            anims[name] = id;
        }
    }
    anims.none = -1;
    if (group.baseAnims) {
        addanim("default", group.baseAnims.idle);
        addanim("walk", group.baseAnims.walk);
    }
    if (group.run) {
        addanim("run", group.run);
    }
    if (group.idleVariations) {
        let totalchance = group.idleVariations.reduce((a: any, v: any) => a + (v as any).probably_chance, 0);
        for (let [i, variation] of group.idleVariations.entries()) {
            addanim(i == 0 ? "default" : `idle${i}_${variation.probably_chance}/${totalchance}`, variation.animid);
        }
    }
    for (let [key, val] of Object.entries(group)) {
        if (typeof val == "number") {
            addanim(key, (group as any)[key]);
        }
    }
    return anims;
}
