
import { mcpServer } from './MCPServer';
import { ToolRegistry } from './ToolRegistry';

// Quick sanity check script (not a full Vitest suite for simplicity in this env)
async function testMCP() {
    console.log('--- MCP Verification Test ---');

    // 1. Check Registry
    const registry = mcpServer.getRegistry();
    const tools = registry.getTools();
    console.log(`Tools registered: ${tools.length}`);
    tools.forEach(t => console.log(`- ${t.name}: ${t.description}`));

    if (tools.length < 2) {
        console.error('FAIL: Expected at least 2 default tools');
        return;
    }

    // 2. Mock Call (List Tools)
    console.log('\nTesting tools/list...');
    const listRes = await mcpServer.processRequest({ method: 'tools/list' });
    if (listRes.tools.length === tools.length) {
        console.log('PASS: tools/list returned correct count');
    } else {
        console.error('FAIL: tools/list mismatch');
    }

    // 3. Mock Call (Ping)
    console.log('\nTesting ping...');
    const pingRes = await mcpServer.processRequest({ method: 'ping' });
    if (pingRes.result === 'pong') {
        console.log('PASS: ping/pong');
    } else {
        console.error('FAIL: ping failed');
    }

    console.log('--- Test Complete ---');
}

// Allow running if this file is imported/executed
if (import.meta.url === `file://${process.argv[1]}`) {
    testMCP();
}

export { testMCP };
