
import * as THREE from "three";
import { IRSMVService, RSMVAvatar, RSMVModel, RSMVServiceConfig } from "../types";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RSMV_SCHEMAS } from "./rsmv_schemas";
import { ServiceHub } from "../../ServiceHub";

class RSMVBufferReader {
    private offset = 0;
    constructor(private data: Uint8Array) { }

    readUByte(): number { return this.data[this.offset++]; }
    readByte(): number {
        const b = this.readUByte();
        return b > 127 ? b - 256 : b;
    }
    readShortSmartBias(): number {
        const b = this.readUByte();
        return b >= 128 ? ((b & 127) << 8 | this.readUByte()) - 16384 : b - 64;
    }
    eof(): boolean { return this.offset >= this.data.length; }
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    let r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        const hue2rgb = (t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        r = hue2rgb(h + 1 / 3);
        g = hue2rgb(h);
        b = hue2rgb(h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function decodeRSColor(color: number): [number, number, number] {
    let h = (color >> 10 & 63) / 63;
    if (h > 0.5) h -= 1.0;
    const s = (color >> 7 & 7) / 7;
    const l = (color & 127) / 127;
    return hslToRgb(h, s, l);
}

export class RSMVFacade implements IRSMVService {
    private glbLoader = new GLTFLoader();
    private wasmInstance: any = null;
    private cacheRoot: string | null = null;
    private isInitialized: boolean = false;

    constructor(private config: RSMVServiceConfig = {}) {
        this.initWasm();
    }

    private async initWasm() {
        try {
            // --- PRODUCTION ASSET PIPELINE ---
            // Load the standalone engine binary from the public assets folder
            const response = await fetch('/assets/wasm/rsmv_engine.wasm');

            if (response.ok) {
                const buffer = await response.arrayBuffer();
                const result = await WebAssembly.instantiate(buffer) as any;
                const instance = result.instance;
                this.wasmInstance = instance.exports;
                console.log("RSMV: WASM Engine Link Established.");
            } else {
                console.warn("RSMV: WASM binary not found at /assets/wasm/rsmv_engine.wasm. (Check public folder)");
            }
        } catch (e) {
            console.error("RSMV: Failed to init WASM", e);
        }
    }

    async linkLocalCache(path: string = 'C:\\Program Files (x86)\\Jagex Launcher'): Promise<boolean> {
        console.log(`RSMV: Attempting to link cache at ${path}`);
        try {
            const result = await ServiceHub.limbs.call('relic', 'excavate_cache', { path });
            if (result.status === 'success' && result.root) {
                this.cacheRoot = result.root;
                console.log(`RSMV: Cache root identified at ${this.cacheRoot}`);
                return true;
            }
        } catch (e) {
            console.error("RSMV: Failed to link local cache", e);
        }
        return false;
    }

    async loadModel(id: number, options?: { cacheId?: number }): Promise<RSMVModel> {
        console.log(`RSMV: Loading Model ${id}`);

        let scene: THREE.Group = new THREE.Group();
        let name = `Model ${id}`;
        let metadata = { description: "Extracted RSMV Model" };

        if (this.wasmInstance && this.wasmInstance.parse_with_schema) {
            try {
                let cacheData: Uint8Array | null = null;

                if (this.cacheRoot) {
                    // Try major/minor first (standard cache layout)
                    const possiblePaths = [
                        `${this.cacheRoot}/7/${id}`, // Major 7 is models
                        `${this.cacheRoot}/models/${id}.dat`
                    ];

                    for (const p of possiblePaths) {
                        try {
                            const result = await ServiceHub.limbs.call('relic', 'read_record', { path: p, base64: true });
                            if (result.status === 'success' && result.content) {
                                // Base64 decode
                                const binaryString = window.atob(result.content);
                                cacheData = new Uint8Array(binaryString.length);
                                for (let i = 0; i < binaryString.length; i++) {
                                    cacheData[i] = binaryString.charCodeAt(i);
                                }
                                console.log(`RSMV: Fetched real record from ${p}`);
                                break;
                            }
                        } catch (e) { }
                    }
                }

                if (cacheData) {
                    const schemaStr = JSON.stringify(RSMV_SCHEMAS.MODEL);
                    const parsedData = this.wasmInstance.parse_with_schema(schemaStr, cacheData);

                    if (parsedData) {
                        const geometry = this.convertToGeometry(parsedData);
                        const material = new THREE.MeshStandardMaterial({
                            vertexColors: !!parsedData.colors,
                            side: THREE.DoubleSide
                        });
                        const mesh = new THREE.Mesh(geometry, material);
                        scene.add(mesh);
                        metadata = { ...metadata, ...(parsedData as any) };
                    }
                } else {
                    console.warn(`RSMV: Model ${id} not found in local cache. Using placeholder.`);
                    scene.add(new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0x0000ff, wireframe: true })));
                }
            } catch (e) {
                console.error("RSMV: Extraction error", e);
                scene.add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial({ color: 0xff0000 })));
            }
        } else {
            console.warn("RSMV: WASM Instance not ready. Showing placeholder.");
            scene.add(new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0x333333 })));
        }

        return { id, name, scene, metadata };
    }

    private convertToGeometry(data: any): THREE.BufferGeometry {
        const geometry = new THREE.BufferGeometry();

        const { posx, posy, posz, indexbuffer, colors, vertcount, facecount, tritype, alpha } = data;

        if (!posx || !posy || !posz || !indexbuffer || !tritype) return geometry;

        const vertices = new Float32Array(vertcount * 3);
        const colorArray = new Float32Array(facecount * 3 * 3); // 3 vertices per face

        // Vertices
        let h = 0, d = 0, p = 0;
        const fx = new RSMVBufferReader(posx);
        const fy = new RSMVBufferReader(posy);
        const fz = new RSMVBufferReader(posz);

        for (let i = 0; i < vertcount; i++) {
            h += fx.readShortSmartBias();
            d += -fy.readShortSmartBias();
            p += fz.readShortSmartBias();

            vertices[i * 3 + 0] = h / 128.0;
            vertices[i * 3 + 1] = d / 128.0;
            vertices[i * 3 + 2] = p / 128.0;
        }

        // Indices (Triangle Strip/Fan Reconstruction)
        const indices = new Uint16Array(facecount * 3);
        const reader = new RSMVBufferReader(indexbuffer);
        let T = 0, A = 0, C = 0, M = 0;

        for (let i = 0; i < facecount; i++) {
            const type = tritype[i] & 7;
            if (type === 1) {
                T = M + reader.readShortSmartBias();
                A = T + reader.readShortSmartBias();
                C = A + reader.readShortSmartBias();
                M = C;
            } else if (type === 2) {
                A = C;
                C = M + reader.readShortSmartBias();
                M = C;
            } else if (type === 3) {
                T = C;
                C = M + reader.readShortSmartBias();
                M = C;
            } else if (type === 4) {
                const tmp = T;
                T = A;
                A = tmp;
                C = M + reader.readShortSmartBias();
                M = C;
            }

            indices[i * 3 + 0] = T;
            indices[i * 3 + 1] = A;
            indices[i * 3 + 2] = C;

            // Colors
            if (colors) {
                const [r, g, b] = decodeRSColor(colors[i]);
                // const a = alpha ? (255 - alpha[i]) / 255 : 1.0;

                for (let v = 0; v < 3; v++) {
                    const idx = (i * 3 + v) * 3;
                    colorArray[idx + 0] = r / 255;
                    colorArray[idx + 1] = g / 255;
                    colorArray[idx + 2] = b / 255;
                }
            }
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geometry.setIndex(new THREE.BufferAttribute(indices, 1));

        if (colors) {
            geometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
        }

        geometry.computeVertexNormals();
        return geometry;
    }

    async loadAvatar(name: string): Promise<RSMVAvatar> {
        const group = new THREE.Group();
        group.add(new THREE.Mesh(new THREE.CapsuleGeometry(0.5, 1, 4, 8), new THREE.MeshStandardMaterial({ color: 0xff0000 })));
        return { name, scene: group };
    }

    async loadMap(id: number): Promise<any> {
        throw new Error("RSMVFacade: Method not implemented.");
    }

    async loadAudio(id: number): Promise<any> {
        throw new Error("RSMVFacade: Method not implemented.");
    }

    async loadUI(name: string): Promise<any> {
        throw new Error("RSMVFacade: Method not implemented.");
    }

    async getItems(): Promise<any[]> {
        return [];
    }

    dispose(): void {
        this.cacheRoot = null;
        this.isInitialized = false;
    }

    getSceneCache() { return null; }
    async linkDroppedCache(blobs: Record<string, Blob>) { return true; }
}

export const rsmv = new RSMVFacade({
    useGlbFirst: true,
    glbBaseUrl: "/assets/models"
});
