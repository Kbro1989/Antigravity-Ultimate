import { Env } from '../../types/env';

export class RelicDO extends DurableObject<Env> {
    private sql: any;

    constructor(state: DurableObjectState, env: Env) {
        super(state, env);
        this.sql = state.storage.sql;
        this.initializeSchema();
    }

    private initializeSchema() {
        // Create the primary relics table
        this.sql.exec(`
            CREATE TABLE IF NOT EXISTS relics (
                id TEXT PRIMARY KEY,
                category TEXT NOT NULL,
                name TEXT,
                type TEXT,
                metadata TEXT,
                source TEXT,
                created_at INTEGER
            )
        `);

        // Create indexes for performance
        this.sql.exec("CREATE INDEX IF NOT EXISTS idx_relics_category ON relics(category)");
        this.sql.exec("CREATE INDEX IF NOT EXISTS idx_relics_name ON relics(name)");
    }

    async fetch(request: Request): Promise<Response> {
        const url = new URL(request.url);
        const action = url.searchParams.get('action');

        // Enforce STRICT WORKER BLOCKING (Internal Sovereignty)
        const authHeader = request.headers.get('X-Sovereign-Internal');
        const isAgent = authHeader === 'museum-agent-auth';
        const isUserSearch = action === 'search' && url.searchParams.has('query') && url.searchParams.has('category');

        if (!isAgent && !isUserSearch) {
            console.warn(`[RelicDO_Sovereign_Block] Unauthorized external call blocked: ${action}`);
            return new Response(JSON.stringify({
                status: 'error',
                message: 'Neural Sovereignty Law: This asset matrix is strictly Worker-Blocked. Use authorized Limbs only.'
            }), { status: 403, headers: { 'Content-Type': 'application/json' } });
        }

        try {
            switch (action) {
                case 'index_bulk':
                    if (!isAgent) throw new Error("Mutation requires Agent Authorization");
                    const items = await request.json() as any[];
                    return await this.indexBulk(items);

                case 'search':
                    const category = url.searchParams.get('category');
                    const query = url.searchParams.get('query') || '';
                    const limit = parseInt(url.searchParams.get('limit') || '50');
                    const offset = parseInt(url.searchParams.get('offset') || '0');
                    return await this.search(category, query, limit, offset);

                case 'get_by_id':
                    const id = url.searchParams.get('id');
                    return await this.getById(id);

                case 'get_artifact':
                    return await this.getArtifact(url.searchParams.get('id'));

                case 'resolve_hash':
                    return await this.resolveHash(url.searchParams.get('hash'));
                default:
                    return new Response('Invalid Action', { status: 400 });
            }
        } catch (e: any) {
            return new Response(JSON.stringify({ status: 'error', message: e.message }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }

    private async resolveHash(hash: string | null): Promise<Response> {
        if (!hash) return new Response('Missing Hash', { status: 400 });
        const result = this.sql.prepare("SELECT * FROM relics WHERE category = 'binary_archive' AND id LIKE ?").first(`%_${hash}`);

        if (!result) return new Response(JSON.stringify({ status: 'not_found' }), { headers: { 'Content-Type': 'application/json' } });

        return new Response(JSON.stringify({
            status: 'success',
            item: { ...result, metadata: JSON.parse(result.metadata as string) }
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    private async getArtifact(id: string | null): Promise<Response> {
        if (!id) return new Response('Missing ID', { status: 400 });

        // 1. Check Metadata for Path
        const record = this.sql.prepare("SELECT * FROM relics WHERE id = ?").first(id);
        let path = id;
        if (record) {
            const meta = JSON.parse(record.metadata as string);
            path = meta.path || meta.filePath || id;
        }

        // 2. Try R2 (ASSETS_BUCKET)
        if (this.env.ASSETS_BUCKET) {
            const r2Obj = await this.env.ASSETS_BUCKET.get(path);
            if (r2Obj) {
                const headers = new Headers();
                r2Obj.writeHttpMetadata(headers);
                return new Response(r2Obj.body, { headers });
            }
        }

        // 3. Try KV (Fallthrough)
        if (this.env.KV) {
            const kvAsset = await this.env.KV.get(path, { type: 'stream' });
            if (kvAsset) {
                return new Response(kvAsset, {
                    headers: { 'Content-Type': 'application/octet-stream' }
                });
            }
        }

        // 4. Try Remote Source of Truth (Sovereign Fetch)
        if (this.env.RSC_AUTHENTIC_WORKER_URL) {
            const remoteUrl = `${this.env.RSC_AUTHENTIC_WORKER_URL}/asset/${path}`;
            console.log(`[RelicDO] Attempting remote fetch from: ${remoteUrl}`);
            try {
                const response = await fetch(remoteUrl);
                if (response.ok) {
                    const headers = new Headers(response.headers);
                    headers.set('X-Relic-Source', 'remote-worker');
                    return new Response(response.body, { headers });
                }
            } catch (e) {
                console.warn(`[RelicDO] Remote fetch failed for ${path}:`, e);
            }
        }

        return new Response('Artifact Not Found', { status: 404 });
    }

    private async indexBulk(items: any[]): Promise<Response> {
        const insert = this.sql.prepare(`
            INSERT OR REPLACE INTO relics (id, category, name, type, metadata, source, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `);

        // Use a transaction for performance
        this.sql.exec("BEGIN TRANSACTION");
        try {
            for (const item of items) {
                insert.run(
                    item.id,
                    item.category,
                    item.name || '',
                    item.type || '',
                    JSON.stringify(item.metadata || {}),
                    item.source || 'preservation',
                    Date.now()
                );
            }
            this.sql.exec("COMMIT");
        } catch (e) {
            this.sql.exec("ROLLBACK");
            throw e;
        }

        return new Response(JSON.stringify({ status: 'success', count: items.length }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    private async search(category: string | null, query: string, limit: number, offset: number): Promise<Response> {
        let sql = "SELECT * FROM relics WHERE (name LIKE ? OR id LIKE ?)";
        const params: any[] = [`%${query}%`, `%${query}%`];

        if (category) {
            sql += " AND category = ?";
            params.push(category);
        }

        sql += " ORDER BY id ASC LIMIT ? OFFSET ?";
        params.push(limit, offset);

        const results = this.sql.prepare(sql).all(...params);

        // Count for pagination
        let countSql = "SELECT COUNT(*) as total FROM relics WHERE (name LIKE ? OR id LIKE ?)";
        const countParams: any[] = [`%${query}%`, `%${query}%`];
        if (category) {
            countSql += " AND category = ?";
            countParams.push(category);
        }
        const total: any = this.sql.prepare(countSql).first(...countParams);

        return new Response(JSON.stringify({
            status: 'success',
            items: results.map(r => ({ ...r, metadata: JSON.parse(r.metadata as string) })),
            total: total.total
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    private async getById(id: string | null): Promise<Response> {
        if (!id) return new Response('Missing ID', { status: 400 });

        const result = this.sql.prepare("SELECT * FROM relics WHERE id = ?").first(id);
        if (!result) return new Response('Not Found', { status: 404 });

        return new Response(JSON.stringify({
            status: 'success',
            item: { ...result, metadata: JSON.parse(result.metadata as string) }
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
