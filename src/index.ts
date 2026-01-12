import './buffer-shim';
import { Hono } from 'hono';
import { Env } from './types/env';

// Import Handlers
import apiApp from './handlers/ApiHandler';
import assetApp from './handlers/AssetHandler';

// Export Workflow for Cloudflare Runtime
export { SymphonyWorkflow } from './workflows/SymphonyWorkflow';

// Export DO classes so Cloudflare can find them (Aliased for SQLite Migration + Legacy Support)
// Export DO classes so Cloudflare can find them (Aliased for SQLite Migration + Legacy Support)
export { SessionAgent as SessionAgentSQL } from './agents/SessionAgent';
export { Collaboration as CollaborationSQL } from './services/network/CollaborationServer';
export { SessionAgent } from './agents/SessionAgent'; // Legacy export for v1/v2 history
export { Collaboration } from './services/network/CollaborationServer'; // Legacy export for v1/v2 history
export { SessionDO as SessionDOSQL } from './services/symphony/SessionDO';
export { SessionDO } from './services/symphony/SessionDO'; // Legacy export for v3
export { MetabolismDO as MetabolismDOSQL } from './services/durable_objects/MetabolismDO';
export { MetabolismDO } from './services/durable_objects/MetabolismDO';

const app = new Hono<{ Bindings: Env }>();

// --------------------------------------------------------------------------------
// POG-Ultimate: The Great Decoupling (Refactored Jan 12, 2026)
// --------------------------------------------------------------------------------

// 1. [Relay] Bridge Routing (CLI / Local connection) - REMOVED
// All local bridge and CLI websocket handlers have been stripped for Zero Local Dependency.

// 2. [Core] API & AI Logic (Signature Verified)

// 2. [Core] API & AI Logic (Signature Verified)
app.route('/api', apiApp);
app.route('/trinity', apiApp);
app.route('/session', apiApp); // For direct /session/ID proxies that might bypass /api prefix in some legacies

// 3. [Distribution] Static Assets & Limbs (The Catch-All)
app.route('/', assetApp);

app.onError((err, c) => {
    console.error("[GLOBAL_ERROR]", err);
    return c.text(`GLOBAL_ERROR: ${err.message}\nStack: ${err.stack}`, 500);
});

export default {
    fetch: app.fetch,
};
