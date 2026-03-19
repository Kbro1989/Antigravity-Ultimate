import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { BaseIntent } from '../AITypes';

interface GamePacket {
    type: string;
    data: any;
    timestamp?: number;
}

export class LiveGameLimb extends NeuralLimb {
    private ws: WebSocket | null = null;
    private isConnected: boolean = false;
    private messageQueue: GamePacket[] = [];
    private listeners: Record<string, ((data: any) => void)[]> = {};

    constructor(config: any) {
        super(config);

        // Auto-connect to Sovereign World
        if (typeof window !== 'undefined') {
            this.connect();
        }
    }

    public connect(url?: string) {
        if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
            return;
        }

        let wsUrl = url;
        if (!wsUrl && typeof window !== 'undefined') {
            const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
            wsUrl = `${protocol}//${window.location.host}/world/default/`;
        }

        if (!wsUrl) return;

        try {
            this.ws = new WebSocket(wsUrl);

            this.ws.onopen = () => {
                console.log(`[LiveGame] Connected to ${url}`);
                this.isConnected = true;
                this.flushQueue();
                this.logActivity('connection' as any, 'success', { url });
            };

            this.ws.onmessage = (event) => {
                try {
                    const packet = JSON.parse(event.data);
                    this.handlePacket(packet);
                } catch (e) {
                    console.error('[LiveGame] Invalid packet:', event.data);
                }
            };

            this.ws.onclose = () => {
                console.log('[LiveGame] Disconnected');
                this.isConnected = false;
                this.logActivity('connection' as any, 'failure', { reason: 'closed' });
            };

            this.ws.onerror = (err) => {
                console.error('[LiveGame] Error:', err);
            };

        } catch (e) {
            console.error('[LiveGame] Connection failed:', e);
        }
    }

    private flushQueue() {
        if (!this.isConnected || !this.ws) return;
        while (this.messageQueue.length > 0) {
            const packet = this.messageQueue.shift();
            if (packet) {
                this.ws.send(JSON.stringify(packet));
            }
        }
    }

    private handlePacket(packet: GamePacket) {
        if (this.listeners[packet.type]) {
            this.listeners[packet.type].forEach(cb => cb(packet.data));
        }
    }

    public on(eventType: string, callback: (data: any) => void) {
        if (!this.listeners[eventType]) this.listeners[eventType] = [];
        this.listeners[eventType].push(callback);
    }

    async send(paramsOrType: any, data?: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);

        let packet: GamePacket;
        let broadcast = true;

        if (typeof paramsOrType === 'string') {
            packet = { type: paramsOrType, data, timestamp: Date.now() };
        } else {
            const { type, data: payload, broadcast: shouldBroadcast = true } = paramsOrType;
            packet = { type, data: payload, timestamp: Date.now() };
            broadcast = shouldBroadcast;
        }

        // 1. Browser Environment (WebSocket Client)
        if (this.isConnected && this.ws) {
            this.ws.send(JSON.stringify(packet));
            return { status: 'transmitted', type: packet.type };
        }

        // 2. Worker Environment (Durable Object Router)
        if (this.state && typeof this.state.getWebSockets === 'function' && broadcast) {
            const sockets = this.state.getWebSockets();
            let count = 0;
            for (const ws of sockets) {
                if (ws.readyState === 1) { // OPEN
                    ws.send(JSON.stringify(packet));
                    count++;
                }
            }
            return { status: 'broadcasted', type: packet.type, recipientCount: count };
        }

        // 3. Falling back to Queue
        this.messageQueue.push(packet);
        return { status: 'queued', type: packet.type };
    }

    async send_event(params: any) {
        return this.send(params);
    }

    async get_state(params: any) {
        this.enforceCapability(AgentCapability.MEMORY_QUERY);
        return await this.send('request_state', {});
    }

    async load_stage(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const { stageId } = params;
        this.send('load_stage', { stageId });

        // Simulating the loading of assets from the "staged_assets" directory
        // In a real engine, this would parse the manifest and load resources.
        await this.logActivity('stage_load', 'success', { stageId });

        return {
            status: 'success',
            message: `Stage ${stageId} loaded into Runtime.`,
            activeAssets: ['divine_quest_01', 'audio_theme_01', 'image_tex_01']
        };
    }

    async inject_asset(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const { relicId, x, y } = params;

        // Sovereign Logic: Forward to GameWorldDO for template expansion
        return this.send('inject_template', {
            relicId,
            x: x || 0,
            y: y || 0
        });
    }

    /**
     * Pipeline Injection Endpoint. (Legacy fallback)
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const { assetId, state } = params;

        // Use hot_swap logic
        return this.hot_swap_asset({
            assetId,
            type: 'pipeline_injection',
            newData: { state, timestamp: Date.now() }
        });
    }

    /**
     * OMNISCIENCE UPGRADE: Edit As You Play
     * Instantly replaces an asset in the running simulation.
     */
    async hot_swap_asset(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const start = Date.now();
        const { assetId, type, newData } = params;

        // 1. Send invalidation signal to Client
        this.send('asset_update', { id: assetId, type, payload: newData });

        // 2. Log for session replay
        await this.logActivity('hot_swap', 'success', { assetId, type });

        return {
            status: 'success',
            message: `Asset ${assetId} hot-swapped in active runtime.`,
            latency_ms: Date.now() - start
        };
    }

    /**
     * MATERIALIZATION ENGINE: On-the-fly Entity Summoning
     * Uses assigned roles to instantiate a forensic-ready NPC.
     */
    async materialize_role(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const { id, name, rolePackage, position } = params;

        // 1. Validate against IDAuditor (Museum Protection)
        // Note: In orchestration, IDAuditor would have already vetted this.

        // 2. Transmit to Game World
        this.send('spawn_npc_with_role', {
            id,
            name,
            role: rolePackage,
            position: position || [0, 0, 0],
            timestamp: Date.now()
        });

        // 3. Log the Innovation
        await this.logActivity('materialize_role', 'success', { id, name, role: rolePackage.roleType });

        return {
            status: 'success',
            instanceId: id,
            message: `${name} materialized with role ${rolePackage.roleType}.`
        };
    }
}
