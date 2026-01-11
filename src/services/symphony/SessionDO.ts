import { DurableObject } from 'cloudflare:workers';

export interface Env {
    ASSETS_BUCKET: R2Bucket;
    DB: D1Database;
    GENERATOR_QUEUE: Queue;
}

export interface SessionState {
    id: string;
    status: 'draft' | 'generating' | 'approved' | 'rejected';
    type: 'npc' | 'item' | 'quest';
    draft: Record<string, any>;
    logs: string[];
    createdAt: number;
    updatedAt: number;
}

export class SessionDO extends DurableObject {
    state: DurableObjectState;
    env: Env;
    sessions: Map<WebSocket, any> = new Map();
    data: SessionState;

    constructor(state: DurableObjectState, env: Env) {
        super(state, env);
        this.state = state;
        this.env = env;
        this.data = {
            id: '',
            status: 'draft',
            type: 'npc',
            draft: {},
            logs: [],
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
    }

    async fetch(request: Request): Promise<Response> {
        // 1. Initialize from storage if needed
        const stored = await this.state.storage.get<SessionState>('data');
        if (stored) {
            this.data = stored;
        } else {
            // First time setup if new
            const url = new URL(request.url);
            const type = url.searchParams.get('type') as any || 'npc';
            this.data.id = this.state.id.toString();
            this.data.type = type;
            await this.save();
        }

        // 2. Handle WebSocket Upgrade (Live Preview)
        if (request.headers.get('Upgrade') === 'websocket') {
            const pair = new WebSocketPair();
            const [client, server] = Object.values(pair);

            this.state.acceptWebSocket(server);
            this.sessions.set(server, { connectedAt: Date.now() });

            // Send current state immediately
            server.send(JSON.stringify({ type: 'init', data: this.data }));

            return new Response(null, { status: 101, webSocket: client });
        }

        // 3. Handle API Requests
        const url = new URL(request.url);

        // POST /update - Receive result from GeneratorQueue
        if (request.method === 'POST' && url.pathname === '/update') {
            const body = await request.json() as { task: string, result: any };
            await this.updateDraft(body.task, body.result);
            return new Response('Updated', { status: 200 });
        }

        // POST /command - User manual tweak
        if (request.method === 'POST' && url.pathname === '/command') {
            const body = await request.json() as { action: string, params: any };
            await this.handleCommand(body.action, body.params);
            return new Response('Command Processed', { status: 200 });
        }

        // POST /approve - Finalize to R2/D1
        if (request.method === 'POST' && url.pathname === '/approve') {
            await this.finalize();
            return new Response('Approved and Published', { status: 200 });
        }

        return new Response('SessionDO Active', { status: 200 });
    }

    async updateDraft(task: string, result: any) {
        this.data.draft[task] = result;
        this.data.updatedAt = Date.now();
        this.data.logs.push(`[${new Date().toISOString()}] Task '${task}' completed.`);

        await this.save();
        this.broadcast({ type: 'update', task, result, logs: this.data.logs });
    }

    async handleCommand(action: string, params: any) {
        // Enqueue generation task
        if (action === 'generate') {
            this.data.status = 'generating';
            this.broadcast({ type: 'status', status: 'generating' });

            await this.env.GENERATOR_QUEUE.send({
                sessionId: this.state.id.toString(),
                task: params.task, // e.g., 'stats', 'texture', 'lore'
                params: params
            });

            this.data.logs.push(`[${new Date().toISOString()}] Queued task '${params.task}'`);
        }

        // Manual tweak (immediate procedural override)
        if (action === 'tweak') {
            this.data.draft[params.key] = params.value;
            this.data.logs.push(`[${new Date().toISOString()}] Manual tweak: ${params.key}`);
        }

        await this.save();
        this.broadcast({ type: 'sync', data: this.data });
    }

    async finalize() {
        // 1. Save to R2 (The Museum)
        const key = `generated/${this.data.type}s/${this.data.id}.json`;
        await this.env.ASSETS_BUCKET.put(key, JSON.stringify(this.data.draft));

        // 2. Index in D1 (The Library)
        await this.env.DB.prepare(`
            INSERT INTO innovations (id, type, parent_id, created_at, status)
            VALUES (?, ?, ?, ?, ?)
        `).bind(this.data.id, this.data.type, this.data.draft.parentId || null, Date.now(), 'approved').run();

        this.data.status = 'approved';
        await this.save();
        this.broadcast({ type: 'status', status: 'approved', url: key });
    }

    async save() {
        await this.state.storage.put('data', this.data);
    }

    broadcast(message: any) {
        const str = JSON.stringify(message);
        for (const [ws] of this.sessions) {
            try {
                ws.send(str);
            } catch (e) {
                this.sessions.delete(ws);
            }
        }
    }

    async webSocketMessage(ws: WebSocket, message: string | ArrayBuffer) {
        // Client-side heartbeat or direct commands
        // For now, we trust HTTP /command for logic, WS is mostly read-only/status
    }

    async webSocketClose(ws: WebSocket, code: number, reason: string, wasClean: boolean) {
        this.sessions.delete(ws);
    }
}
