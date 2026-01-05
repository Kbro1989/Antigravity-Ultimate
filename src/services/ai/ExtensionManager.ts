import { CLIBridge } from '../cli/CLIBridge';
import { LimbRegistry } from './LimbRegistry';
import { ProxyLimb } from './limbs/ProxyLimb';
import { AgentCapability } from './AgentConstitution';

/**
 * ExtensionManager.ts
 * Manages the discovery and hot-loading of local Antigravity-style extensions.
 * Ported to POG's hybrid architecture.
 */
export class ExtensionManager {
    private bridge: any; // Using any to match LimbRegistry's loose typing of bridge
    private registry: LimbRegistry;

    constructor(registry: LimbRegistry) {
        this.registry = registry;
        // @ts-ignore - Accessing private bridge from registry (or we expose it public getter)
        this.bridge = (registry as any).bridge;
    }

    /**
     * Scans the local /extensions directory and registers ProxyLimbs for each valid extension.
     */
    async scanAndLoad() {
        console.log('[ExtensionManager] Scanning for local extensions...');

        try {
            const extensionsDir = 'extensions'; // Relative to project root locally
            const items = await this.bridge.listDirectory(extensionsDir);
            if (!Array.isArray(items)) {
                console.warn('[ExtensionManager] listDirectory did not return an array. Bridge might be down.');
                return;
            }

            for (const item of items) {
                if (item.isDirectory) {
                    await this.loadExtension(item.name, item.path);
                }
            }
        } catch (e) {
            console.warn('[ExtensionManager] Failed to scan extensions or directory missing.', e);
        }
    }

    private async loadExtension(id: string, dirPath: string) {
        try {
            // 1. Read extension.json manifest
            const manifestPath = `${dirPath}/extension.json`.replace(/\\/g, '/');
            const manifestStr = await this.bridge.readFile(manifestPath);

            if (!manifestStr) {
                console.warn(`[ExtensionManager] Extension ${id} missing extension.json. Skipping.`);
                return;
            }

            const manifest = JSON.parse(manifestStr);
            console.log(`[ExtensionManager] Found extension: ${manifest.name || id} (${manifest.version})`);

            // 2. Map capabilities from manifest
            const capabilities: AgentCapability[] = (manifest.capabilities || []).map((cap: string) => {
                return cap.toUpperCase() as AgentCapability;
            });

            // 3. Register a ProxyLimb in the main LimbRegistry
            // This ProxyLimb will route 'process()' back through the bridge
            const proxy = new ProxyLimb({
                id,
                userId: 'pog_system', // Or pass from context
                capabilities
            });

            this.registry.registerLimb(id, proxy);
            console.log(`[ExtensionManager] Hot-loaded extension limb: ${id}`);

        } catch (e) {
            console.error(`[ExtensionManager] Failed to load extension ${id}:`, e);
        }
    }
}
