/**
 * LocalBridgeService - WebSocket File System Client
 * Ported from POG-engine for POG Ultimate
 * Provides file system access via local WebSocket bridge with cloud fallback
 */

export enum SyncMode {
    LOCAL = 'local',
    CLOUD = 'cloud',
    DUAL = 'dual',
    OFFLINE = 'offline'
}

export interface BridgeStatus {
    isConnected: boolean;
    isCloudMode: boolean;
    syncMode: SyncMode;
}

export interface FileEntry {
    name: string;
    isDirectory: boolean;
    path: string;
}

export interface FileStats {
    isFile: boolean;
    isDirectory: boolean;
    size: number;
    modified: number;
    created: number;
}

class LocalBridgeClient {
    private ws: WebSocket | null = null;
    private messageHandlers: Map<string, (response: any) => void> = new Map();
    private commandCounter = 0;
    private signalingUrls = {
        bridge: 'https://pog-bridge-signal.kristain33rs.workers.dev/health',
        cli: 'https://pog-cli-signal.kristain33rs.workers.dev/health'
    };
    private isCloudMode: boolean = true;
    private isRelayMode: boolean = false;
    private syncMode: SyncMode = SyncMode.CLOUD;
    private statusListeners: Array<(status: BridgeStatus) => void> = [];
    private bridgeUrl: string = 'ws://localhost:8788/ws';
    private fileCache: Map<string, { content: string, timestamp: number }> = new Map();
    private readonly CACHE_TTL = 30000; // 30 seconds
    private connectionPromise: Promise<void> | null = null;
    private connectionResolver: (() => void) | null = null;

    constructor() {
        // --- CLOUD-FIRST STARTUP ---
        console.log("[LocalBridge] Initializing in Cloud-First Mode.");

        // --- SIGNALING CHAIN INITIALIZATION ---
        this.checkSignalingChain();

        // Auto-detect Cloud/HTTPS environment to prevent Mixed Content errors
        if (typeof window !== 'undefined') {
            const isSecure = window.location.protocol === 'https:';
            const isLocalhost = window.location.hostname.includes('localhost') || window.location.hostname === '127.0.0.1';

            if (isSecure && !isLocalhost) {
                console.log("[LocalBridge] Secure Cloud Environment. defaulting to Relay Mode.");
                this.setRelayMode();
            } else if (isLocalhost) {
                // If local, we can still auto-connect, but we start in Cloud sync mode
                // so we don't accidentally write to local FS without user toggle
                setTimeout(() => this.connect(), 100);
            }
        }
    }

    private async checkSignalingChain() {
        console.log("[Signaling] Validating Architectural Chain (Terminal -> Bridge -> Cloud)...");

        try {
            const results = await Promise.all([
                fetch(this.signalingUrls.bridge).then(r => r.json() as any).catch(() => ({ status: 'offline' })),
                fetch(this.signalingUrls.cli).then(r => r.json() as any).catch(() => ({ status: 'offline' }))
            ]);

            const bridgeOk = results[0].status === 'ok';
            const cliOk = results[1].status === 'ok';

            console.log(`[Signaling] Chain Status: Bridge(${bridgeOk ? 'ONLINE' : 'OFFLINE'}) | CLI(${cliOk ? 'ONLINE' : 'OFFLINE'})`);

            if (bridgeOk && cliOk) {
                console.log("[Signaling] Full Neural Chain established.");
            }
        } catch (e) {
            console.warn("[Signaling] Signaling check failed; proceeding with default cloud mode.");
        }
    }

    public setBridgeUrl(url: string) {
        this.bridgeUrl = url;
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('POG_bridge_url', url);
        }
        if (this.ws) {
            this.ws.close();
        }
        this.connect();
    }

    public getBridgeUrl(): string {
        return this.bridgeUrl;
    }

    public setSyncMode(mode: SyncMode) {
        this.syncMode = mode;
        console.log(`[LocalBridge] Sync Mode set to: ${mode}`);
    }

    public onStatusChange(listener: (status: BridgeStatus) => void): () => void {
        this.statusListeners.push(listener);
        listener(this.getStatus());
        return () => {
            this.statusListeners = this.statusListeners.filter(l => l !== listener);
        };
    }

    private notifyStatus() {
        const status = this.getStatus();
        this.statusListeners.forEach(l => l(status));
    }

    private connect() {
        if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
            return;
        }

        // --- PRODUCTION SILENCE MASK ---
        if (typeof window !== 'undefined') {
            const isProd = window.location.hostname.includes('.workers.dev') ||
                window.location.hostname.includes('.pages.dev') ||
                window.location.hostname.includes('pog-ultimate');

            if (isProd && !this.isRelayMode) {
                if (!this.isCloudMode) {
                    console.log("[LocalBridge] Production Environment Detected. Silencing Local Bridge Spam.");
                    this.isCloudMode = true;
                    this.notifyStatus();
                }
                // Do not attempt to connect to localhost in production unless explicitly using Relay
                return;
            }
        }

        // Reset/Create connection promise with 5s timeout
        if (!this.connectionPromise) {
            this.connectionPromise = new Promise((resolve, reject) => {
                const timeout = setTimeout(() => {
                    console.warn("[LocalBridge] Connection Timeout. Reverting to Cloud.");
                    this.isCloudMode = true;
                    resolve(); // Resolve to allow callers to proceed with cloud fallback
                }, 5000);

                this.connectionResolver = () => {
                    clearTimeout(timeout);
                    resolve();
                };
            });
        }

        const storedUrl = typeof localStorage !== 'undefined'
            ? localStorage.getItem('POG_bridge_url')
            : null;
        const bridgeUrl = storedUrl || this.bridgeUrl;

        try {
            console.log(`[LocalBridge] Attempting connection to ${bridgeUrl}...`);
            this.ws = new WebSocket(bridgeUrl);
        } catch (e) {
            if (!this.isCloudMode) {
                console.error("[LocalBridge] Invalid URL provided, reverting to Cloud Mode.", e);
                this.isCloudMode = true;
                this.notifyStatus();
            }
            if (this.connectionResolver) this.connectionResolver();
            return;
        }

        this.ws.onopen = () => {
            console.log(`[LocalBridge] Connected to ${bridgeUrl}`);
            this.isCloudMode = false;
            this.notifyStatus();
            if (this.connectionResolver) {
                this.connectionResolver();
                this.connectionResolver = null;
            }
        };

        this.ws.onmessage = (event) => {
            try {
                const response = JSON.parse(event.data as string);
                if (response.type && this.messageHandlers.has(response.type)) {
                    this.messageHandlers.get(response.type)?.(response);
                } else if (response.type === 'output' || response.type === 'system') {
                    console.log(`[Terminal] ${response.data}`);
                }
            } catch (e) {
                console.error("[LocalBridge] Error parsing message:", e, event.data);
            }
        };

        this.ws.onclose = () => {
            if (!this.isCloudMode) {
                console.log("[LocalBridge] Disconnected. Switching to Cloud Fallback.");
                this.isCloudMode = true;
                this.notifyStatus();
            }
            // Only retry if not in production or relay is enabled
            const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
            if (isLocal || this.isRelayMode) {
                setTimeout(() => this.connect(), 2000);
            }
        };

        this.ws.onerror = () => {
            if (!this.isCloudMode) {
                console.warn("[LocalBridge] WebSocket Error. Fallback active.");
                this.isCloudMode = true;
                this.notifyStatus();
            }
        };
    }

    public getStatus(): BridgeStatus {
        return {
            isConnected: this.ws?.readyState === WebSocket.OPEN && !this.isCloudMode,
            isCloudMode: this.isCloudMode,
            syncMode: this.syncMode
        };
    }

    private async sendMessage(type: string, payload: any): Promise<any> {
        // Wait for connection if we are in relay mode or local mode but connecting
        if (this.connectionPromise) {
            await this.connectionPromise;
        }

        return new Promise((resolve, reject) => {
            if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
                return reject(new Error(`WebSocket is not open (State: ${this.ws?.readyState ?? 'NULL'})`));
            }

            const messageId = `cmd-${this.commandCounter++}`;
            const handler = (response: any) => {
                if (response.messageId === messageId) {
                    this.messageHandlers.delete(response.type);
                    if (response.success) {
                        resolve(response);
                    } else {
                        reject(new Error(response.error || "Unknown error during local bridge operation."));
                    }
                }
            };

            this.messageHandlers.set(`${type}_response`, handler);
            this.ws.send(JSON.stringify({ type, messageId, ...payload }));
        });
    }

    async runTerminalCommand(command: string, cwd?: string): Promise<{ success: boolean, output?: string, error?: string }> {
        if (this.isCloudMode && !this.isRelayMode) {
            console.warn("[LocalBridge] Terminal commands not available in cloud mode.");
            return { success: false, error: "Cloud mode - terminal unavailable" };
        }
        try {
            const response = await this.sendMessage('terminal_command', { command, cwd });
            return { success: true, output: response.output };
        } catch (e: any) {
            console.warn("[LocalBridge] Terminal command failed.", e);
            return { success: false, error: e.message };
        }
    }

    async requestOrchestration(request: string): Promise<any> {
        if (this.isCloudMode && !this.isRelayMode) {
            return { success: false, error: "Cloud mode - orchestration unavailable" };
        }
        try {
            return await this.sendMessage('orchestration_request', { request });
        } catch (e: any) {
            console.warn("[LocalBridge] Orchestration request failed.", e);
            return { success: false, error: e.message };
        }
    }

    async gitOperation(command: string): Promise<{ success: boolean, output?: string, error?: string }> {
        if (this.isCloudMode && !this.isRelayMode) return { success: false, error: "Cloud mode - git unavailable" };
        try {
            const response = await this.sendMessage('git_op', { command });
            return { success: true, output: response.output };
        } catch (e: any) {
            console.warn("[LocalBridge] Git operation failed.", e);
            return { success: false, error: e.message };
        }
    }

    async readLocalFile(filePath: string, base64: boolean = false): Promise<{ success: boolean, content?: string, error?: string }> {
        if (this.isCloudMode && !this.isRelayMode) {
            return { success: false, error: "Cloud mode - use R2/KV for file storage" };
        }

        // Spacetime Cache Hit Check
        const cached = this.fileCache.get(filePath);
        if (cached && (Date.now() - cached.timestamp < this.CACHE_TTL)) {
            console.log(`[SpacetimeCache] Hit: ${filePath}`);
            return { success: true, content: cached.content };
        }

        try {
            const response = await this.sendMessage('fs_read', { filePath, base64 });

            // Update Cache
            this.fileCache.set(filePath, { content: response.content, timestamp: Date.now() });

            return { success: true, content: response.content };
        } catch (e: any) {
            console.warn("[LocalBridge] Read file failed.", e);
            this.isCloudMode = true;
            return { success: false, error: e.message };
        }
    }

    async writeLocalFile(filePath: string, content: string, base64: boolean = false): Promise<{ success: boolean, error?: string }> {
        // Invalidate Cache
        this.fileCache.delete(filePath);

        if (this.syncMode === SyncMode.OFFLINE) {
            console.log(`[LocalBridge] OFFLINE Mode: Suppressing write to ${filePath}`);
            return { success: true };
        }

        if (this.isCloudMode && !this.isRelayMode) {
            return { success: false, error: "Cloud mode - use R2/KV for file storage" };
        }

        try {
            const pathParts = filePath.split(/[/\\]/);
            if (pathParts.length > 1) {
                const parentDir = pathParts.slice(0, -1).join('/');
                await this.makeDirectory(parentDir).catch(() => { });
            }
            await this.sendMessage('fs_write', { filePath, content, base64 });
            return { success: true };
        } catch (e: any) {
            console.warn("[LocalBridge] Write file failed.", e);
            return { success: false, error: e.message };
        }
    }

    async deleteLocalFile(filePath: string): Promise<{ success: boolean, error?: string }> {
        if (this.isCloudMode && !this.isRelayMode) {
            return { success: false, error: "Cloud mode - use R2/KV" };
        }
        try {
            await this.sendMessage('fs_delete', { filePath });
            return { success: true };
        } catch (e: any) {
            console.warn("[LocalBridge] Delete file failed.", e);
            this.isCloudMode = true;
            return { success: false, error: e.message };
        }
    }

    async listDirectory(dirPath: string): Promise<{ success: boolean, files?: FileEntry[], error?: string }> {
        if (this.isCloudMode && !this.isRelayMode) {
            return { success: false, error: "Cloud mode - use R2/KV" };
        }
        try {
            const response = await this.sendMessage('fs_list', { dirPath });
            return { success: true, files: response.files };
        } catch (e: any) {
            console.warn("[LocalBridge] List directory failed.", e);
            this.isCloudMode = true;
            return { success: false, error: e.message };
        }
    }

    async statFile(filePath: string): Promise<{ success: boolean, stats?: FileStats, error?: string }> {
        if (this.isCloudMode && !this.isRelayMode) {
            return {
                success: true,
                stats: { isFile: true, isDirectory: false, size: 0, modified: Date.now(), created: Date.now() }
            };
        }
        try {
            const response = await this.sendMessage('fs_stat', { filePath });
            return { success: true, stats: response };
        } catch (e: any) {
            console.warn("[LocalBridge] Stat file failed.", e);
            this.isCloudMode = true;
            return this.statFile(filePath);
        }
    }

    async makeDirectory(dirPath: string): Promise<{ success: boolean, error?: string }> {
        if (this.isCloudMode && !this.isRelayMode) {
            return { success: true };
        }
        try {
            await this.sendMessage('fs_mkdir', { dirPath });
            return { success: true };
        } catch (e: any) {
            console.warn("[LocalBridge] mkdir failed.", e);
            return { success: false, error: e.message };
        }
    }

    async renameFile(oldPath: string, newPath: string): Promise<{ success: boolean, error?: string }> {
        if (this.isCloudMode && !this.isRelayMode) {
            return { success: false, error: "Cloud mode - use R2/KV" };
        }
        try {
            await this.sendMessage('fs_rename', { oldPath, newPath });
            return { success: true };
        } catch (e: any) {
            console.warn("[LocalBridge] rename failed.", e);
            return { success: false, error: e.message };
        }
    }

    public setRelayMode(appId: string = "local-dev", relayHost: string = "pog-ultimate.kristain33rs.workers.dev") {
        const protocol = relayHost.includes('localhost') ? 'ws' : 'wss';
        const relayUrl = `${protocol}://${relayHost}/bridge/${appId}?role=client`;
        this.isRelayMode = true;
        this.setBridgeUrl(relayUrl);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('POG_bridge_id', appId);
        }
    }

    public disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }

    /**
     * Warm Cache - Predictively load files in a directory
     */
    public async warmCache(dirPath: string) {
        console.log(`[SpacetimeCache] Warming: ${dirPath}`);
        const result = await this.listDirectory(dirPath);
        if (result.success && result.files) {
            // Predictively load first 5 small files
            for (const file of result.files.slice(0, 5)) {
                if (!file.isDirectory && (file.name.endsWith('.ts') || file.name.endsWith('.tsx'))) {
                    this.readLocalFile(file.path).catch(() => { });
                }
            }
        }
    }
}

// Singleton instance
export const localBridgeClient = new LocalBridgeClient();

// Convenience export
export const setBridgeUrl = (url: string) => {
    localBridgeClient.setBridgeUrl(url);
};
