import { CLIBridge } from '../cli/CLIBridge';

export class AppDataManager {
    private static instance: AppDataManager;
    private bridge: CLIBridge;
    private baseDir: string = 'C:\\Users\\Destiny\\AppData\\Roaming\\POGNexus';

    private constructor() {
        this.bridge = CLIBridge.getInstance();
        this.ensureDir();
    }

    public static getInstance(): AppDataManager {
        if (!AppDataManager.instance) {
            AppDataManager.instance = new AppDataManager();
        }
        return AppDataManager.instance;
    }

    private async ensureDir(category?: string) {
        // --- CLOUD SANITY CHECK ---
        const isProd = typeof window !== 'undefined' &&
            (window.location.hostname.includes('.workers.dev') || window.location.hostname.includes('.pages.dev'));
        if (isProd) return;

        const targetDir = category ? `${this.baseDir}\\${category}` : this.baseDir;
        try {
            await this.bridge.execute(`if not exist "${targetDir}" mkdir "${targetDir}"`);
        } catch (e) {
            console.error(`[AppData] Failed to ensure directory: ${targetDir}`, e);
        }
    }

    public async save(key: string, data: any, category: 'cache' | 'logs' | 'sessions' = 'sessions') {
        const isProd = typeof window !== 'undefined' &&
            (window.location.hostname.includes('.workers.dev') || window.location.hostname.includes('.pages.dev'));
        if (isProd) return;

        await this.ensureDir(category);
        const path = `${this.baseDir}\\${category}\\${key}.json`;
        await this.bridge.writeFile(path, JSON.stringify(data, null, 2));
    }

    public async load(key: string, category: 'cache' | 'logs' | 'sessions' = 'sessions'): Promise<any> {
        const isProd = typeof window !== 'undefined' &&
            (window.location.hostname.includes('.workers.dev') || window.location.hostname.includes('.pages.dev'));
        if (isProd) return null;

        const path = `${this.baseDir}\\${category}\\${key}.json`;
        try {
            const content = await this.bridge.readFile(path);
            return JSON.parse(content);
        } catch (e) {
            return null;
        }
    }

    public async clearCategory(category: string) {
        const isProd = typeof window !== 'undefined' &&
            (window.location.hostname.includes('.workers.dev') || window.location.hostname.includes('.pages.dev'));
        if (isProd) return;

        const targetDir = `${this.baseDir}\\${category}`;
        await this.bridge.execute(`rmdir /s /q "${targetDir}" && mkdir "${targetDir}"`);
    }
}
