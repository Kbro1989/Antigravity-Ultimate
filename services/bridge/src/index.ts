
import { ObservabilityLimiter } from './services/ObservabilityLimiter';
export { ObservabilityLimiter }; // Export for Worker to find class class

export interface Env {
    OBSERVABILITY_LIMITER: DurableObjectNamespace;
    OBSERVABILITY_AUTH_TOKEN: string;
}

// In-memory request pairing (Works for single-isolate local dev)
const sessions = new Map<string, { client?: WebSocket, target?: WebSocket }>();

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        const url = new URL(request.url);

        if (url.pathname === '/health') {
            return new Response(JSON.stringify({ status: 'ok', role: 'spine' }), {
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
            });
        }

        if (url.pathname === '/metrics/observability' || url.pathname === '/metrics/observability/override') {
            const limiterId = env.OBSERVABILITY_LIMITER.idFromName('global');
            const limiter = env.OBSERVABILITY_LIMITER.get(limiterId);
            const authToken = request.headers.get('X-Observability-Token') || undefined;

            // Forward the request to DO (it handles both GET metrics and POST override)
            return limiter.fetch(request);
        }

        // WebSocket connection for token leasing
        if (url.pathname === '/ws/observability') {
            const clientSource = url.searchParams.get('source'); // 'frontend' or 'cli'
            if (!clientSource || !['frontend', 'cli'].includes(clientSource)) {
                return new Response('Missing or invalid source parameter', { status: 400 });
            }

            const upgrade = request.headers.get('Upgrade');
            if (upgrade !== 'websocket') {
                return new Response('Expected websocket', { status: 426 });
            }

            const limiterId = env.OBSERVABILITY_LIMITER.idFromName('global');
            const limiter = env.OBSERVABILITY_LIMITER.get(limiterId);

            // DO expects us to pass the fetch request so it can accept the websocket?
            // Actually standard pattern is to pass upgrade header or let DO handle upgrade.
            // But since handleWebSocket is a custom method we wrote:
            // "await limiter.handleWebSocket(server, clientSource)" won't work over RPC easily if passing WebSocket instance directly.
            // Better to fetch() the DO with Upgrade header.

            return limiter.fetch(request);
        }

        if (url.pathname === '/ws') {
            const upgradeHeader = request.headers.get('Upgrade');
            if (!upgradeHeader || upgradeHeader !== 'websocket') {
                return new Response('Expected Upgrade: websocket', { status: 426 });
            }

            const webSocketPair = new WebSocketPair();
            const [client, server] = Object.values(webSocketPair);

            server.accept();

            const sessionId = url.searchParams.get('id') || 'default';
            const role = url.searchParams.get('role') || 'client'; // 'client' (UI) or 'target' (CLI)

            // ... (Existing Bridge Logic) ...
            console.log(`[Bridge] Connection: ${role} @ ${sessionId}`);

            // Session Management
            let session = sessions.get(sessionId);
            if (!session) {
                session = {};
                sessions.set(sessionId, session);
            }

            if (role === 'target') {
                // The Hands
                if (session.target) (session.target as any).close(1001, 'Replaced');
                session.target = server as any;
            } else {
                // The Mind
                if (session.client) (session.client as any).close(1001, 'Replaced');
                session.client = server as any;
            }

            server.addEventListener('message', (event: any) => {
                const targetSocket = role === 'target' ? session?.client : session?.target;

                // Cloudflare WebSocket readyState is 1 for OPEN
                if (targetSocket && targetSocket.readyState === 1) {
                    targetSocket.send(event.data);
                } else {
                    // console.log(`[Bridge] Dropped message from ${role} (Peer not connected)`);
                }
            });

            server.addEventListener('close', () => {
                // console.log(`[Bridge] Disconnect: ${role} @ ${sessionId}`);
                if (role === 'target' && session?.target === server) session.target = undefined;
                if (role === 'client' && session?.client === server) session.client = undefined;
            });

            return new Response(null, {
                status: 101,
                webSocket: client,
            } as any);
        }

        return new Response('POG Trinity Bridge Online', { status: 200 });
    },
};
