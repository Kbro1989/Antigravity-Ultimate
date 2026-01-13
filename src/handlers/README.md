# API Handlers

The `src/handlers` directory contains the primary Hono Entrypoints for the Cloudflare Worker. These handlers route incoming HTTP requests to their appropriate destinations, acting as the edge gateway for the POG-Ultimate system.

## Handlers

*   **`ApiHandler.ts`**: The main API gateway.
    *   **Mount Point**: `/api/*`
    *   **Responsibility**:
        *   **Security**: Enforces ECDSA signature verification for authenticated routes.
        *   **Routing**: Routes requests to stateful Durable Objects (`SessionAgent`) or stateless AI services.
        *   **Stateless Bypass**: Optimizes performance by handling high-frequency, stateless queries (like image generation or simple chat) directly in the Worker, bypassing the Durable Object serialization bottleneck.
        *   **CORS**: Manages Cross-Origin Resource Sharing logic for frontend connectivity.
    *   **Key Services**: Defines endpoints for `chat`, `generate-image`, `code-complete`, `system/stats`, and `relic/*`.

*   **`AssetHandler.ts`**: The static asset and content manager.
    *   **Mount Point**: `/*` (Fallback)
    *   **Responsibility**:
        *   **Static Serving**: Serves frontend assets (HTML, JS, CSS, WASM) from Cloudflare KV (`__STATIC_CONTENT`).
        *   **Smart Caching**: Implements aggressive caching headers for immutable assets to minimize KV reads.
        *   **Fallback Strategy**: Routes unknown paths to `index.html` to support Client-Side Routing (SPA).
    *   **Logic**: It checks if a requested path exists in the KV manifest; if so, it serves it. If not, it assumes it's a frontend route and serves the app shell.

## Handler Architecture

The handlers are mounted in `src/index.ts`.

```typescript
// src/index.ts
import apiApp from './handlers/ApiHandler';
import assetApp from './handlers/AssetHandler';

const app = new Hono();
app.route('/api', apiApp); // Priority 1: API calls
app.route('/', assetApp);  // Priority 2: Static assets & SPA fallback
```
