import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';

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

        // Auto-connect if configured and on localhost
        if (typeof window !== 'undefined') {
            const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            if (isLocal) {
                this.connect();
            } else {
                console.log('[LiveGame] Skipping auto-connect in Cloud Environment.');
            }
        }
    }

    public connect(url: string = 'ws://localhost:8080') {
        if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
            return;
        }

        try {
            this.ws = new WebSocket(url);

            this.ws.onopen = () => {
                console.log(`[LiveGame] Connected to ${url}`);
                this.isConnected = true;
                this.flushQueue();
                this.logActivity('connection', 'success', { url });
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
                this.logActivity('connection', 'failure', { reason: 'closed' });
            };

            this.ws.onerror = (err) => {
                console.error('[LiveGame] Error:', err);
            };

        } catch (e) {
            console.error('[LiveGame] Connection failed:', e);
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

    public send(type: string, data: any) {
        const packet: GamePacket = { type, data, timestamp: Date.now() };

        if (this.isConnected && this.ws) {
            this.ws.send(JSON.stringify(packet));
        } else {
            this.messageQueue.push(packet);
        }
    }

    private flushQueue() {
        while (this.messageQueue.length > 0 && this.isConnected && this.ws) {
            const packet = this.messageQueue.shift();
            if (packet) this.ws.send(JSON.stringify(packet));
        }
    }

    async process(intent: any) {
        const { action, type, data } = intent;
        await this.logActivity(`game_${action}`, 'pending');

        try {
            switch (action) {
                case 'send_event':
                    this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
                    this.send(type, data);
                    await this.logActivity('game_send_event', 'success', { type });
                    return { status: 'Sent', type };

                case 'get_state':
                    this.enforceCapability(AgentCapability.MEMORY_QUERY);
                    this.send('request_state', {});
                    await this.logActivity('game_get_state', 'success');
                    return { status: 'Request Sent' };

                default:
                    throw new Error(`Unknown live game action: ${action}`);
            }
        } catch (e: any) {
            await this.logActivity(`game_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
    }
}
