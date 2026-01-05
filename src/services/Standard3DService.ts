import * as THREE from 'three';
// Loaders will be dynamically imported to break circular dependencies and reduce bundle weight
import { localBridgeClient } from './bridge';

export interface LoadedModel {
    scene: THREE.Group | THREE.Object3D;
    metadata: any;
    animations?: THREE.AnimationClip[];
}

export class Standard3DService {
    private static instance: Standard3DService;
    private gltfLoader: any = null;
    private objLoader: any = null;
    private stlLoader: any = null;

    private constructor() { }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Standard3DService();
        }
        return this.instance;
    }

    private async ensureLoaders() {
        if (!this.gltfLoader) {
            const { GLTFLoader, OBJLoader, STLLoader } = await import('three-stdlib');
            this.gltfLoader = new GLTFLoader();
            this.objLoader = new OBJLoader();
            this.stlLoader = new STLLoader();
        }
    }

    /**
     * Loads a model from a remote URL or custom protocol.
     */
    async loadModelByUrl(url: string): Promise<LoadedModel> {
        await this.ensureLoaders();
        // Handle custom protocols
        if (url.startsWith('rsmv://') || url.startsWith('rsc://')) {
            const { rsmv } = await import('./rsmv');
            const id = parseInt(url.split('://')[1]);
            const model = await rsmv.loadModel(id);
            return {
                scene: model.scene,
                metadata: model.metadata
            };
        }

        if (url.startsWith('map://')) {
            const { rsmv } = await import('./rsmv');
            const [x, z] = url.split('://')[1].split(',').map(n => parseInt(n));
            const { RSMapChunk } = await import('./rsmv/3d/modelnodes');
            const sceneCache = rsmv.getSceneCache();
            if (!sceneCache) throw new Error("RSMV Cache not linked. Cannot load map chunk.");

            const chunk = RSMapChunk.create(sceneCache, x, z);
            const loaded = await chunk.chunkdata;
            return {
                scene: chunk.rootnode,
                metadata: { x, z, terrain: true }
            };
        }

        const extension = url.split('.').pop()?.toLowerCase();

        switch (extension) {
            case 'glb':
            case 'gltf':
                const gltf = await this.gltfLoader.loadAsync(url);
                return {
                    scene: gltf.scene,
                    metadata: gltf.userData,
                    animations: gltf.animations
                };
            case 'obj':
                const obj = await this.objLoader.loadAsync(url);
                return {
                    scene: obj,
                    metadata: {}
                };
            case 'stl':
                const geometry = await this.stlLoader.loadAsync(url);
                const material = new THREE.MeshStandardMaterial({ color: 0x888888 });
                const mesh = new THREE.Mesh(geometry, material);
                const group = new THREE.Group();
                group.add(mesh);
                return {
                    scene: group,
                    metadata: {}
                };
            default:
                throw new Error(`Unsupported model extension: ${extension}`);
        }
    }

    /**
     * Loads a model from the local file system (via Bridge).
     */
    async loadLocalModel(path: string): Promise<LoadedModel> {
        await this.ensureLoaders();
        const res = await localBridgeClient.readLocalFile(path, true);
        if (!res.success || !res.content) {
            throw new Error(`Failed to read local model: ${res.error || 'Unknown error'}`);
        }

        // Convert base64 to ArrayBuffer
        const binaryString = atob(res.content);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        const buffer = bytes.buffer;

        const extension = path.split('.').pop()?.toLowerCase();

        return new Promise((resolve, reject) => {
            if (extension === 'glb' || extension === 'gltf') {
                this.gltfLoader.parse(buffer as any, '', (gltf) => {
                    resolve({
                        scene: gltf.scene,
                        metadata: gltf.userData,
                        animations: gltf.animations
                    });
                }, reject);
            } else if (extension === 'obj') {
                const text = new TextDecoder().decode(buffer);
                const obj = this.objLoader.parse(text);
                resolve({ scene: obj, metadata: {} });
            } else if (extension === 'stl') {
                const geometry = this.stlLoader.parse(buffer);
                const material = new THREE.MeshStandardMaterial({ color: 0x888888 });
                const mesh = new THREE.Mesh(geometry, material);
                const group = new THREE.Group();
                group.add(mesh);
                resolve({ scene: group, metadata: {} });
            } else {
                reject(new Error(`Unsupported local model extension: ${extension}`));
            }
        });
    }

    /**
     * Renders a scene to a base64 image snapshot.
     */
    async takeSnapshot(model: THREE.Object3D, width: number = 512, height: number = 512): Promise<string> {
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);

        const scene = new THREE.Scene();
        scene.add(new THREE.AmbientLight(0xffffff, 0.8));
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
        dirLight.position.set(5, 10, 7.5);
        scene.add(dirLight);

        scene.add(model);

        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

        // Auto-fit camera to model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
        cameraZ *= 1.5; // Offset for breathing room

        camera.position.set(center.x, center.y + (size.y * 0.2), center.z + cameraZ);
        camera.lookAt(center);

        renderer.render(scene, camera);
        const dataUrl = renderer.domElement.toDataURL('image/png');

        renderer.dispose();
        return dataUrl;
    }
}

export const standard3D = Standard3DService.getInstance();
