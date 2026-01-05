import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Bindings = {
    CACHE: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use('/*', cors());

// Simple health check
app.get('/', (c) => c.text('POG CLI Signal Point: ACTIVE'));

// Persistence check
app.get('/health', async (c) => {
    const lastSeen = await c.env.CACHE.get('signal:cli:last_seen');
    const isOnline = lastSeen && (Date.now() - parseInt(lastSeen)) < 60000;

    return c.json({
        status: isOnline ? 'ok' : 'offline',
        component: 'cli',
        lastSeen: lastSeen ? new Date(parseInt(lastSeen)).toISOString() : null
    });
});

// Update status (called by local CLI/orchestrator periodicly)
app.post('/ping', async (c) => {
    await c.env.CACHE.put('signal:cli:last_seen', Date.now().toString());
    return c.json({ success: true });
});

export default app;
