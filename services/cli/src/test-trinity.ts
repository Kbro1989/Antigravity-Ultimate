
import WebSocket from 'ws';

const BRIDGE_URL = 'ws://localhost:8788/ws';
const SESSION_ID = 'default';

console.log('[Simulated Mind] Connecting to Spine...');
const ws = new WebSocket(`${BRIDGE_URL}?role=client&id=${SESSION_ID}`);

ws.on('open', () => {
    console.log('[Simulated Mind] Connected. Sending neural signal to Hands...');

    // Simulate ServiceHub request
    ws.send(JSON.stringify({
        type: 'terminal_command',
        command: 'echo "TRINITY ARCHITECTURE ONLINE"',
        cwd: process.cwd(),
        messageId: 'test-1'
    }));
});

ws.on('message', (data: string) => {
    const msg = JSON.parse(data.toString());
    if (msg.messageId === 'test-1') {
        console.log('[Simulated Mind] Received Feedback from Hands:');
        console.log('------------------------------------------------');
        console.log(msg.output.trim());
        console.log('------------------------------------------------');
        console.log('TRINITY TEST: PASSED ✅');
        ws.close();
        process.exit(0);
    }
});

ws.on('error', (err) => {
    console.error('[Simulated Mind] Connection Error:', err.message);
    process.exit(1);
});
