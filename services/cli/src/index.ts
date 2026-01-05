
import WebSocket from 'ws';
import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Trinity Configuration
const BRIDGE_URL = process.env.BRIDGE_URL || 'ws://localhost:8788/ws';
const SESSION_ID = process.env.SESSION_ID || 'default';
const CWD = process.cwd();

console.log("██████╗  ██████╗  ██████╗ ");
console.log("██╔══██╗██╔═══██╗██╔════╝ ");
console.log("██████╔╝██║   ██║██║  ███╗");
console.log("██╔═══╝ ██║   ██║██║   ██║");
console.log("██║     ╚██████╔╝╚██████╔╝");
console.log("╚═╝      ╚═════╝  ╚═════╝ ");
console.log("   TRINITY CLI v1.0.0     ");
console.log("==========================");
// CLI Command Mode
const args = process.argv.slice(2);
let ws: WebSocket; // Global declaration


async function handleCommand() {
    if (args[0] === 'observability' && args.includes('--force-enable')) {
        console.log('\x1b[33m[Security] Initiating Observability Override Sequence...\x1b[0m');

        // In a real CLI, we would use 'prompts' or 'inquirer' for 2FA
        const secret = process.env.POG_2FA_SECRET || 'simulated_secret';

        console.log(`[Security] Authenticating user: ${process.env.USERNAME || 'admin'}`);

        try {
            // POST to Bridge
            // Note: In Node.js, fetch might need 'node-fetch' if < v18, but modern Node has global fetch.
            // We assume modern Node environment.
            const _fetch = (global as any).fetch;
            const baseUrl = BRIDGE_URL.replace('ws://', 'http://').replace('/ws', '');
            const response = await _fetch(`${baseUrl}/metrics/observability/override`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user: process.env.USERNAME || 'admin',
                    reason: 'CLI Manual Override',
                    token: secret // Simulated 2FA validation
                })
            });

            const result = await response.json();
            if (response.ok) {
                console.log('\x1b[32m[SUCCESS] Observability Restrictions Lifted.\x1b[0m');
                console.log('Use quota responsibly.');
            } else {
                console.error('\x1b[31m[FAILED] Override Rejected by Spine.\x1b[0m');
            }
        } catch (e: any) {
            console.error('\x1b[31m[ERROR] Connection Failed:\x1b[0m', e.message);
        }
        process.exit(0);
    }
}

// Check if running as command or daemon
if (args.length > 0 && args[0] !== 'listen') {
    (async () => {
        try {
            await handleCommand();
        } catch (e) {
            console.error('Fatal CLI Error:', e);
            process.exit(1);
        }
    })();
} else {
    // Daemon / Listener Mode
    console.log(`[Hands] Connecting to Spine at ${BRIDGE_URL}...`);

    ws = new WebSocket(`${BRIDGE_URL}?role=target&id=${SESSION_ID}`);
    const wsObs = new WebSocket(`${BRIDGE_URL}/observability?source=cli`); // Obs connection

    // Token Cache
    let tokenCache = 0;

    wsObs.on('open', () => {
        wsObs.send(JSON.stringify({ type: 'REQUEST_TOKENS', count: 100 }));
    });
    wsObs.on('message', (data: string) => {
        const msg = JSON.parse(data.toString());
        if (msg.type === 'TOKEN_GRANT') tokenCache = msg.lease.tokens;
    });
    wsObs.on('error', (err) => {
        console.error('[Hands] Observability Link Error:', err.message);
    });

    ws.on('open', () => {
        console.log('[Hands] Connected to Spine. Awaiting neural signals.');
    });

    ws.on('message', async (data: string) => {
        try {
            const msg = JSON.parse(data.toString());
            console.log(`[Hands] Received Signal: ${msg.type}`);

            if (msg.type === 'terminal_command') {
                handleTerminalCommand(msg);
            } else if (msg.type === 'fs_read') {
                handleFsRead(msg);
            } else if (msg.type === 'fs_write') {
                handleFsWrite(msg);
            } else if (msg.type === 'fs_list') {
                handleFsList(msg);
            } else {
                console.log(`[Hands] Unknown signal type: ${msg.type}`);
            }

        } catch (e) {
            console.error('[Hands] Signal processing error:', e);
        }
    });

    ws.on('close', () => {
        console.log('[Hands] Severed from Spine. Retrying in 3s...');
        setTimeout(() => {
            // Simple reconnect logic would go here
        }, 3000);
    });

    ws.on('error', (err: any) => {
        console.error('[Hands] Connection Error:', err.message);
    });
}

function send(type: string, payload: any, messageId?: string) {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type, ...payload, messageId }));
    }
}

function handleTerminalCommand(msg: any) {
    const { command, cwd, messageId } = msg;
    const execCwd = cwd || CWD;

    console.log(`[Exec] ${command} in ${execCwd}`);

    exec(command, { cwd: execCwd }, (error, stdout, stderr) => {
        send('terminal_command_response', {
            success: !error,
            output: stdout + (stderr ? '\nERR: ' + stderr : ''),
            error: error?.message
        }, messageId);
    });
}

function handleFsRead(msg: any) {
    const { filePath, messageId } = msg;
    try {
        const content = fs.readFileSync(filePath, 'utf-8'); // TODO: Support binary/base64
        send('fs_read_response', { success: true, content }, messageId);
    } catch (e: any) {
        send('fs_read_response', { success: false, error: e.message }, messageId);
    }
}

function handleFsWrite(msg: any) {
    const { filePath, content, messageId } = msg;
    try {
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        fs.writeFileSync(filePath, content, 'utf-8');
        send('fs_write_response', { success: true }, messageId);
    } catch (e: any) {
        send('fs_write_response', { success: false, error: e.message }, messageId);
    }
}

function handleFsList(msg: any) {
    const { dirPath, messageId } = msg;
    try {
        const files = fs.readdirSync(dirPath, { withFileTypes: true }).map(dirent => ({
            name: dirent.name,
            isDirectory: dirent.isDirectory(),
            path: path.join(dirPath, dirent.name)
        }));
        send('fs_list_response', { success: true, files }, messageId);
    } catch (e: any) {
        send('fs_list_response', { success: false, error: e.message }, messageId);
    }
}
