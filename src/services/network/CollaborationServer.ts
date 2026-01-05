import { DurableObject } from 'cloudflare:workers';
import type { Env } from '../../types/env';

export class Collaboration extends DurableObject<Env> {
    constructor(state: DurableObjectState, env: Env) {
        super(state, env);
    }

    async fetch(request: Request) {
        const upgradeHeader = request.headers.get('Upgrade');
        if (!upgradeHeader || upgradeHeader !== 'websocket') {
            return new Response('Bridge Relay active.', { status: 426 });
        }

        const pair = new WebSocketPair();
        const [client, server] = Object.values(pair);

        const url = new URL(request.url);
        const role = url.searchParams.get('role') || 'client';

        this.ctx.acceptWebSocket(server, [role]);

        return new Response(null, { status: 101, webSocket: client });
    }

    async webSocketMessage(ws: WebSocket, message: string | ArrayBuffer) {
        const tags = this.ctx.getTags(ws);
        const senderRole = tags[0];
        const msgStr = typeof message === 'string' ? message : new TextDecoder().decode(message);

        try {
            const data = JSON.parse(msgStr);
            const connections = this.ctx.getWebSockets();

            for (const conn of connections) {
                if (conn === ws) continue;
                const targetRole = this.ctx.getTags(conn)[0];

                if (senderRole === 'host' && targetRole === 'client') {
                    conn.send(msgStr);
                } else if (senderRole === 'client' && targetRole === 'host') {
                    if (['terminal_command', 'fs_read', 'fs_write', 'fs_list', 'fs_delete', 'orchestration_request'].includes(data.type)) {
                        conn.send(msgStr);
                    }
                }
            }
        } catch (e) {
            console.error('[CollaborationServer] Message Error', e);
        }
    }
}
