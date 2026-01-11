import { nexusBus } from '../../core/NexusCommandBus';
import { logTask } from '../../core/LoggingService';
import { AgentCapability, assertCapability, AgentLaw } from '../AgentConstitution';
import { chronoshell, Chronoshell } from '../../core/Chronoshell';
import { BaseIntent } from '../AITypes';
import { Env } from '../../../types/env';
import { localBridgeClient } from '../../bridge/LocalBridgeService';

export interface LimbConfig {
    id: string;
    userId: string;
    capabilities: string[];
    onAssetGenerated?: (asset: { type: string; url: string; metadata: any }) => void;
    env?: Env;
    limbs?: any;
}

export abstract class NeuralLimb {
    public id: string;
    protected userId: string;
    protected capabilities: string[];
    protected chronos: Chronoshell;
    protected env: Env;
    protected limbs: any;

    protected config: LimbConfig;


    constructor(config: LimbConfig) {
        this.config = config;
        this.id = config.id;
        this.userId = config.userId;
        this.capabilities = config.capabilities;
        this.chronos = chronoshell;
        this.env = config.env as Env;
        this.limbs = config.limbs;
    }

    /**
     * Updates the environment bindings for the limb.
     */
    public setEnv(env: Env) {
        this.env = env;
    }

    /**
     * Main entry point for the Limb to process an Intent.
     * Automatically dispatches to public methods based on action name.
     */
    async process(intent: BaseIntent & { modelId?: string; provider?: string }): Promise<any> {
        const { action, payload } = intent;

        // Remove limb prefix if present (e.g., 'audio_generate' -> 'generate')
        const methodSuffix = action.includes('_') ? action.split('_').slice(1).join('_') : action;

        // Strategy: Look for specific method first, then fallback to general action method
        const targetMethod = (this as any)[methodSuffix] || (this as any)[action];

        if (typeof targetMethod === 'function') {
            return await targetMethod.call(this, payload, intent);
        }

        // Fallback or explicit implementation requirement
        return await this.handleUnknownAction(intent);
    }

    protected async handleUnknownAction(intent: BaseIntent): Promise<any> {
        throw new Error(`Limb ${this.id} does not implement support for action: ${intent.action}`);
    }

    protected async logActivity(step: string, status: 'success' | 'failure' | 'pending', metadata?: any) {
        // Legacy system log
        await logTask({
            taskId: this.id,
            step,
            status,
            timestamp: Date.now(),
            metadata
        });

        // ULTIMATE temporal trace
        this.chronos.logTrace({
            layer: 'ai',
            action: `${this.id}_${step}`,
            metadata: { ...metadata, status }
        });
    }

    /**
     * Persists an asset to Cloudflare R2 if available, otherwise falls back to Local Bridge.
     * Automatically hoists data: URIs and remote URLs to the ASSETS_BUCKET or local disk.
     */
    protected async persistAsset(type: string, url: string, metadata: any, contentBody?: string | Uint8Array | ArrayBuffer): Promise<string> {
        await this.logActivity(`asset_persistence_start`, 'pending', { type, url });
        let finalUrl = url;
        let body: any = contentBody;
        let contentType = 'application/octet-stream';

        // 1. Resolve Content (if not provided explicitly)
        if (!body) {
            if (url.startsWith('data:')) {
                const parts = url.split(',');
                const decoded = atob(parts[1]);
                const array = new Uint8Array(decoded.length);
                for (let i = 0; i < decoded.length; i++) array[i] = decoded.charCodeAt(i);
                body = array;
                contentType = url.split(':')[1].split(';')[0];
            } else if (url.startsWith('http')) {
                try {
                    const response = await fetch(url);
                    body = await response.arrayBuffer();
                    contentType = response.headers.get('Content-Type') || 'application/octet-stream';
                } catch (e) {
                    console.warn(`[NeuralLimb] Failed to fetch remote asset for persistence: ${url}`);
                }
            }
        }

        // 2. Generate Key / Path
        const timestamp = Date.now();
        const randomId = Math.random().toString(36).substring(2, 7);
        const fileExt = this.getExtensionForType(type);
        const key = `innovations/${type}/${timestamp}_${randomId}.${fileExt}`;

        // 3. Persist
        try {
            if (body) {
                if (this.env?.ASSETS_BUCKET) {
                    // --- R2 STORAGE ---
                    await this.env.ASSETS_BUCKET.put(key, body, {
                        httpMetadata: { contentType }
                    });
                    finalUrl = `/ai/assets/${key}`;
                    console.log(`[NeuralLimb] Hoisted asset to R2: ${key}`);
                } else {
                    // --- LOCAL DISK FALLBACK (Verify "No Mocks" rule) ---
                    const root = 'C:/Users/Destiny/Desktop/New folder/POG-Ultimate/public/assets/generated';
                    // Map type to folder (matches RelicLimb logic)
                    const folderMap: Record<string, string> = {
                        'npc': 'npcs', 'item': 'items',
                        'model': 'models', 'audio': 'audios',
                        'texture': 'textures', 'video': 'videos',
                        'script': 'scripts'
                    };
                    const folder = folderMap[type] || `${type}s`;

                    // Use Suggested Path name if available (e.g. video/sprites/XYZ.png), otherwise generate random
                    let localPath = '';
                    if (metadata && metadata.suggestedPath) {
                        // suggestedPath might be relative like 'video/sprites/anim_123.png'
                        // Ensure it is rooted correctly or just append to root if it is just a filename
                        if (metadata.suggestedPath.includes('/')) {
                            localPath = `${root}/${metadata.suggestedPath}`;
                        } else {
                            localPath = `${root}/${folder}/${metadata.suggestedPath}`;
                        }
                    } else {
                        localPath = `${root}/${folder}/${timestamp}_${randomId}.${fileExt}`;
                    }

                    // Convert body to string if needed for LocalBridge (it handles strings well, or base64)
                    let writeContent = body;
                    let isBase64 = false;

                    if (body instanceof Uint8Array || body instanceof ArrayBuffer) {
                        // Convert buffer to binary string -> base64 for bridge transport
                        // @ts-ignore
                        const bytes = new Uint8Array(body);
                        let binary = '';

                        // Chunked processing to avoid stack overflow with spread operator on large files
                        const chunkSize = 8192;
                        for (let i = 0; i < bytes.byteLength; i += chunkSize) {
                            const chunk = bytes.subarray(i, i + chunkSize);
                            binary += String.fromCharCode(...chunk);
                        }

                        writeContent = btoa(binary);
                        isBase64 = true;
                    }

                    await localBridgeClient.writeLocalFile(localPath, writeContent as string, isBase64);
                    finalUrl = `/assets/generated/${folder}/${timestamp}_${randomId}.${fileExt}`;
                    console.log(`[NeuralLimb] Persisted asset to Local Disk: ${localPath}`);
                }
            } else if (url.startsWith('staged://')) {
                // If no body was resolved and it was 'staged', we assume the caller FAILED to provide content.
                // This is the "Mock" catch.
                console.warn("[NeuralLimb] 'staged://' URL provided without content body. Persistence skipped (Potential Mock Logic).");
            }
        } catch (e) {
            console.error(`[NeuralLimb] Persistence Failed for ${type}:`, e);
            await this.logActivity(`asset_persistence_error`, 'failure', { error: String(e) });
        }

        if ((this as any).config?.onAssetGenerated) {
            (this as any).config.onAssetGenerated({ type, url: finalUrl, metadata });
        }

        await this.logActivity(`asset_persistence_complete`, 'success', { type, originalUrl: url, finalUrl });
        return finalUrl;
    }

    private getExtensionForType(type: string): string {
        const map: Record<string, string> = {
            'image': 'png',
            'audio': 'mp3',
            'video': 'mp4',
            'mesh': 'glb',
            'material': 'json',
            'code': 'ts'
        };
        return map[type] || 'bin';
    }

    public hasCapability(cap: string): boolean {
        return this.capabilities.includes(cap);
    }

    /**
     * Enforces the agent constitution for a specific capability
     */
    protected enforceCapability(capability: AgentCapability, law?: AgentLaw) {
        assertCapability(this.constructor.name, capability, law);
    }
}
