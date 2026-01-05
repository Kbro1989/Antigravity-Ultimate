import WebSocket from 'ws';
import * as fs from 'fs/promises';
import { exec } from 'child_process';
import { promisify } from 'util';
import * as path from 'path';
import { CollaborativeAIOrchestrator } from '../local/ai-orchestrator/src/core/orchestrator.ts';

const orchestrator = new CollaborativeAIOrchestrator();
let orchestratorInitialized = false;

const execAsync = promisify(exec);

// Configuration
const WORKER_HOST = process.env.WORKER_HOST || 'pog-engine.workers.dev'; // Replace with actual worker host if known
const BRIDGE_ID = process.env.BRIDGE_ID || 'local-dev';
const USE_SSL = !WORKER_HOST.includes('localhost');
const PROTOCOL = USE_SSL ? 'wss' : 'ws';

const URL = `${PROTOCOL}://${WORKER_HOST}/bridge/${BRIDGE_ID}?role=host`;

console.log(`[BridgeHost] Connecting to ${URL}...`);

function connect() {
    const ws = new WebSocket(URL);

    ws.on('open', () => {
        console.log('[BridgeHost] Connected to Cloud Relay');
        ws.send(JSON.stringify({ type: 'status', status: 'ready', platform: process.platform }));
    });

    ws.on('message', async (data: Buffer) => {
        try {
            const msg = JSON.parse(data.toString());
            console.log(`[BridgeHost] Received command: ${msg.type} [${msg.messageId}]`);

            let result: any = { success: true };

            switch (msg.type) {
                case 'terminal_command':
                    const { stdout, stderr } = await execAsync(msg.command, { cwd: process.cwd() });
                    result = { output: stdout || stderr };
                    break;

                case 'fs_read':
                    const content = await fs.readFile(msg.filePath, msg.base64 ? 'base64' : 'utf-8');
                    result = { content };
                    break;

                case 'fs_write':
                    await fs.mkdir(path.dirname(msg.filePath), { recursive: true });
                    await fs.writeFile(msg.filePath, msg.content, msg.base64 ? 'base64' : 'utf-8');
                    break;

                case 'fs_list':
                    const files = await fs.readdir(msg.dirPath, { withFileTypes: true });
                    result = {
                        files: files.map(f => ({
                            name: f.name,
                            isDirectory: f.isDirectory(),
                            path: path.join(msg.dirPath, f.name)
                        }))
                    };
                    break;

                case 'fs_mkdir':
                    await fs.mkdir(msg.dirPath, { recursive: true });
                    break;

                case 'orchestration_request':
                    if (!orchestratorInitialized) {
                        console.log('[BridgeHost] Initializing Collaborative Orchestrator...');
                        await orchestrator.initialize();
                        orchestratorInitialized = true;
                    }
                    console.log(`[BridgeHost] Processing orchestration request: ${msg.request.substring(0, 50)}...`);
                    const orchestrationResult = await orchestrator.processUserRequest(msg.request);
                    result = { ...orchestrationResult };
                    break;

                default:
                    throw new Error(`Unknown command type: ${msg.type}`);
            }

            // Send Response
            ws.send(JSON.stringify({
                type: `${msg.type}_response`,
                messageId: msg.messageId,
                success: true,
                ...result
            }));

        } catch (e: any) {
            console.error('[BridgeHost] Error:', e.message);
            // Send Error Response
            ws.send(JSON.stringify({
                type: `${JSON.parse(data.toString()).type}_response`,
                messageId: JSON.parse(data.toString()).messageId,
                success: false,
                error: e.message
            }));
        }
    });

    ws.on('error', (e) => {
        console.error('[BridgeHost] Connection error:', e.message);
        ws.close();
    });

    // --- SIGNALING HEARTBEAT ---
    const SIGNAL_URL = 'https://pog-cli-signal.workers.dev/ping';
    const pingSignalingWorker = async () => {
        try {
            await fetch(SIGNAL_URL, { method: 'POST' });
            // console.log('[Signaling] Heartbeat sent to CLI Signal Point.');
        } catch (e) {
            // console.warn('[Signaling] CLI Signal Point unreachable.');
        }
    };

    // Ping every 30 seconds
    const pingInterval = setInterval(pingSignalingWorker, 30000);
    pingSignalingWorker(); // Initial ping

    ws.on('close', () => {
        clearInterval(pingInterval);
        console.log('[BridgeHost] Disconnected. Reconnecting in 3s...');
        setTimeout(connect, 3000);
    });
}

connect();
