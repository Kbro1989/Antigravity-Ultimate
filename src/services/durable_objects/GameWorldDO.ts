import { Server, type Connection, type WSMessage } from "partyserver";
import type { Env } from "../../types/env";

/**
 * GameWorldDO - Sovereign World State for POG-Ultimate
 * Manages live NPCs, player interactions, and real-time state synchronization.
 * Aligned with rsc-cloudflare architecture for cross-era compatibility.
 */
export class GameWorldDO extends Server<Env> {
    private entities: Map<string, any> = new Map();
    private tickRate: number = 600; // standard RSC tick
    private lastTick: number = Date.now();

    constructor(state: DurableObjectState, env: Env) {
        super(state, env);

        // Auto-save logic if needed
        this.ctx.blockConcurrencyWhile(async () => {
            // Initialize state from storage if any
            const savedEntities = await this.ctx.storage.get<any[]>("entities") || [];
            savedEntities.forEach(e => this.entities.set(e.id, e));
        });
    }

    async onConnect(conn: Connection, ctx: any) {
        console.log(`[GameWorldDO] Entity connected: ${conn.id}`);

        // Send initial state to the new connection
        conn.send(JSON.stringify({
            type: "sync_state",
            data: {
                entities: Array.from(this.entities.values()),
                stats: {
                    fps: 60,
                    latency: "2.1ms",
                    tick: this.tickRate
                }
            }
        }));
    }

    async onMessage(conn: Connection, message: WSMessage) {
        try {
            const packet = JSON.parse(message as string);

            switch (packet.type) {
                case "spawn_npc":
                    await this.handleSpawnNpc(conn, packet.data);
                    break;
                case "inject_template":
                    await this.handleInjectTemplate(conn, packet.data);
                    break;
                case "live_action":
                    await this.handleLiveAction(conn, packet.data);
                    break;
                case "request_state":
                    conn.send(JSON.stringify({ type: "state_report", data: Array.from(this.entities.values()) }));
                    break;
                default:
                    // Broadcast all other events to maintain "Sovereign Mesh"
                    this.broadcast(message);
            }
        } catch (e) {
            console.error("[GameWorldDO] Message Error", e);
        }
    }

    private async handleSpawnNpc(conn: Connection, data: any) {
        const id = data.id || `npc_${Date.now()}`;
        const npc = {
            id,
            name: data.name || "Unknown NPC",
            x: data.x || 0,
            y: data.y || 0,
            type: "npc",
            metadata: data.metadata || {}
        };

        this.entities.set(id, npc);
        this.broadcast(JSON.stringify({ type: "npc_spawned", data: npc }));

        // Persist to SQLite (inherited via partyserver / DO state)
        await this.ctx.storage.put("entities", Array.from(this.entities.values()));
    }

    private async handleInjectTemplate(conn: Connection, data: any) {
        // Sovereign Logic: Pull full template from RelicDO if only ID is provided
        let template = data.template;

        if (data.relicId && this.env.RELIC_DO) {
            const relicDOId = this.env.RELIC_DO.idFromName("global_relic_matrix");
            const stub = this.env.RELIC_DO.get(relicDOId);
            const res = await stub.fetch(`http://relic-do/get_by_id?action=get_by_id&id=${data.relicId}`);
            if (res.ok) {
                const { item } = await res.json() as any;
                template = item.metadata;
            }
        }

        const injectionId = `injected_${Date.now()}`;
        const entity = {
            id: injectionId,
            name: template?.name || "Injected Relic",
            metadata: template,
            type: "injected",
            x: data.x || 10,
            y: data.y || 10
        };

        this.entities.set(injectionId, entity);
        this.broadcast(JSON.stringify({ type: "asset_injected", data: entity }));

        // Audit for CodeTraces
        this.broadcast(JSON.stringify({
            type: "telemetry_trace",
            data: `[SOVEREIGN] Injected artifact ${data.relicId || 'raw'} into live runtime.`
        }));
    }

    private async handleLiveAction(conn: Connection, data: any) {
        const { actionType, payload } = data;

        // Broadcast for all clients (SFX, Cutscenes, etc.)
        this.broadcast(JSON.stringify({
            type: "sim_action",
            data: {
                type: actionType,
                payload,
                timestamp: Date.now()
            }
        }));

        // Log the synchronization event
        this.broadcast(JSON.stringify({
            type: "telemetry_trace",
            data: `[PIPELINE] Synced ${actionType} event from Sovereign Limb.`
        }));
    }

    async onClose(conn: Connection, code: number, reason: string, wasClean: boolean) {
        console.log(`[GameWorldDO] Connection closed: ${conn.id}`);
    }
}
