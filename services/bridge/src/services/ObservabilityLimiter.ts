
import { DurableObject } from 'cloudflare:workers';

export enum LogPriority {
    CRITICAL = 'critical', // Security, Nexus, Emergency
    NORMAL = 'normal',     // Standard AI inference logs
    TRACE = 'trace'        // Chronoshell, verbose debugging
}

interface LogRequest {
    priority: LogPriority;
    timestamp: number;
    id: string;
    source: 'frontend' | 'cli' | 'bridge';
    action: string; // For forensics
}

interface TokenLease {
    tokens: number;
    leaseId: string;
    expiresAt: number;
    source: 'frontend' | 'cli';
}

interface ObservabilityState {
    tokensRemaining: number;
    totalTokens: number;
    refillRate: number; // tokens per second
    dailyQuota: number;
    logsProcessed: number;
    logsDropped: number;
    emergencyMode: boolean;
    lastCheckpointId: string | null;
    priorityStats: {
        critical: { processed: number; dropped: number };
        normal: { processed: number; dropped: number };
        trace: { processed: number; dropped: number };
    };
    leases: Map<string, TokenLease>;
}

export class ObservabilityLimiter extends DurableObject {
    private state: ObservabilityState = {
        tokensRemaining: 100, // Initial burst capacity
        totalTokens: 100,
        refillRate: 2.314, // ~200,000 / 86400 seconds
        dailyQuota: 200000,
        logsProcessed: 0,
        logsDropped: 0,
        emergencyMode: false,
        lastCheckpointId: null,
        priorityStats: {
            critical: { processed: 0, dropped: 0 },
            normal: { processed: 0, dropped: 0 },
            trace: { processed: 0, dropped: 0 }
        },
        leases: new Map()
    };

    async alarm(): Promise<void> {
        // Refill tokens every second
        if (!this.state.emergencyMode) {
            this.state.tokensRemaining = Math.min(
                this.state.totalTokens,
                this.state.tokensRemaining + this.state.refillRate
            );
        }

        // Clean expired leases
        this.cleanupExpiredLeases();

        // Check emergency threshold
        await this.checkEmergencyThreshold();

        // Set next alarm
        this.ctx.storage.setAlarm(Date.now() + 1000);
    }

    private cleanupExpiredLeases(): void {
        const now = Date.now();
        for (const [leaseId, lease] of this.state.leases.entries()) {
            if (lease.expiresAt < now) {
                this.state.leases.delete(leaseId);
            }
        }
    }

    private async checkEmergencyThreshold(): Promise<void> {
        const estimatedDailyUsage = this.state.logsProcessed * (86400 / this.getUptimeSeconds());

        if (estimatedDailyUsage > this.state.dailyQuota * 0.9 || this.state.logsProcessed > this.state.dailyQuota * 0.9) {
            if (!this.state.emergencyMode) {
                this.state.emergencyMode = true;
                await this.createCryptoCheckpoint();
                await this.broadcastEmergencyMode();
            }
        }
    }

    private getUptimeSeconds(): number {
        // Simulated start time tracking
        return (Date.now() - (this.state as any)._startTime || Date.now()) / 1000 || 1;
    }

    private async createCryptoCheckpoint(): Promise<void> {
        const checkpointState = {
            ...this.state,
            timestamp: Date.now(),
            trigger: 'EMERGENCY_THRESHOLD_90%'
        };

        const checkpointId = crypto.randomUUID();
        await this.ctx.storage.put(`checkpoint:${checkpointId}`, JSON.stringify(checkpointState));
        this.state.lastCheckpointId = checkpointId;

        // Broadcast to all connected clients
        await this.broadcast({
            type: 'EMERGENCY_CHECKPOINT',
            checkpointId,
            message: 'Observability quota at 90%. Non-critical logging suspended.',
            timestamp: Date.now()
        });
    }

    private async broadcastEmergencyMode(): Promise<void> {
        await this.broadcast({
            type: 'EMERGENCY_MODE',
            status: 'active',
            tokensRemaining: this.state.tokensRemaining,
            reason: 'Daily quota threshold exceeded'
        });
    }

    private async broadcast(message: Record<string, unknown>): Promise<void> {
        // Get all WebSocket connections from storage and broadcast
        const connections = await this.ctx.getWebSockets(); // Cloudflare DO method
        for (const ws of connections) {
            ws.send(JSON.stringify(message));
        }
    }


    async forceEnable(user: string, reason: string): Promise<boolean> {
        // In a real system, we'd verify the cryptographic signature here
        // For this prototype, we accept the command and log it as a critical security event

        this.ctx.storage.put('emergencyOverride', {
            user,
            reason,
            timestamp: Date.now()
        });

        this.state.emergencyMode = false;

        // Broadcast the 'ALL CLEAR' signal
        await this.broadcast({
            type: 'EMERGENCY_OVERRIDE',
            user,
            message: 'Observability restrictions lifted by manual override.'
        });

        return true;
    }

    // Standard Fetch Handler for Durable Object
    async fetch(request: Request): Promise<Response> {
        const url = new URL(request.url);

        if (url.pathname.endsWith('/override') && request.method === 'POST') {
            const body = await request.json() as any;
            const success = await this.forceEnable(body.user || 'unknown', body.reason || 'manual');
            return new Response(JSON.stringify({ success }), { status: 200 });
        }

        if (url.pathname === '/metrics/observability') {
            const authToken = request.headers.get('X-Observability-Token');
            return this.getMetrics(authToken || undefined);
        }

        if (url.pathname.endsWith('/ws/observability')) {
            if (request.headers.get('Upgrade') !== 'websocket') {
                return new Response('Expected Upgrade: websocket', { status: 426 });
            }

            const source = url.searchParams.get('source') as 'frontend' | 'cli' || 'frontend';

            // Accept WebSocket
            const pair = new WebSocketPair();
            const [client, server] = Object.values(pair);

            this.ctx.acceptWebSocket(server);
            // We can tag the socket or store metadata?
            // this.ctx.setWebSocketTags(server, [source]); 

            return new Response(null, { status: 101, webSocket: client });
        }

        return new Response('DO: Not Found', { status: 404 });
    }

    // WebSocket handler for token leasing

    async handleWebSocket(ws: WebSocket, source: 'frontend' | 'cli'): Promise<void> {
        this.ctx.acceptWebSocket(ws);

        // Initial grant? No, wait for request.
    }

    async webSocketMessage(ws: WebSocket, message: string | ArrayBuffer) {
        try {
            const data = JSON.parse(message as string);

            if (data.type === 'REQUEST_TOKENS') {
                // Source tracking would require attaching data to ws, currently simplified
                const lease = await this.grantTokenLease(data.count || 10, 'frontend');
                ws.send(JSON.stringify({
                    type: 'TOKEN_GRANT',
                    lease
                }));
            }

            if (data.type === 'RETURN_TOKENS') {
                await this.returnTokenLease(data.leaseId);
            }
        } catch (error: any) {
            ws.send(JSON.stringify({
                type: 'ERROR',
                message: error.message
            }));
        }
    }

    private async grantTokenLease(count: number, source: 'frontend' | 'cli'): Promise<TokenLease> {
        // Ensure we don't exceed burst capacity
        const grantCount = Math.min(count, Math.floor(this.state.tokensRemaining));

        this.state.tokensRemaining -= grantCount;

        const lease: TokenLease = {
            tokens: grantCount,
            leaseId: crypto.randomUUID(),
            expiresAt: Date.now() + 60000, // 1 minute lease
            source
        };

        this.state.leases.set(lease.leaseId, lease);
        return lease;
    }

    private async returnTokenLease(leaseId: string): Promise<void> {
        const lease = this.state.leases.get(leaseId);
        if (lease) {
            // Return unused tokens (if any)
            this.state.tokensRemaining = Math.min(
                this.state.totalTokens,
                this.state.tokensRemaining + lease.tokens
            );
            this.state.leases.delete(leaseId);
        }
    }

    // HTTP handler for metrics endpoint
    async getMetrics(authToken?: string): Promise<Response> {
        const isAuthenticated = await this.verifyAuthToken(authToken);

        if (!isAuthenticated) {
            // Public response - minimal info
            return new Response(JSON.stringify({
                status: this.state.emergencyMode ? 'throttled' : 'healthy',
                throttling_active: this.state.emergencyMode,
                timestamp: Date.now()
            }), {
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store'
                }
            });
        }

        // Private response - full forensic data
        return new Response(JSON.stringify({
            status: this.state.emergencyMode ? 'emergency' : 'normal',
            tokens_remaining: Math.floor(this.state.tokensRemaining),
            refill_rate: this.state.refillRate,
            daily_quota: this.state.dailyQuota,
            logs_processed: this.state.logsProcessed,
            logs_dropped: this.state.logsDropped,
            estimated_daily_usage: this.calculateEstimatedDailyUsage(),
            quota_exhaustion_time: this.calculateExhaustionTime(),
            emergency_mode: this.state.emergencyMode,
            last_checkpoint_id: this.state.lastCheckpointId,
            priority_stats: this.state.priorityStats,
            active_leases: this.state.leases.size,
            timestamp: Date.now()
        }), {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store'
            }
        });
    }

    private calculateEstimatedDailyUsage(): number {
        const uptime = this.getUptimeSeconds();
        if (uptime < 60) return 0; // Not enough data
        return Math.floor(this.state.logsProcessed * (86400 / uptime));
    }

    private calculateExhaustionTime(): string | null {
        if (this.state.emergencyMode) {
            const remainingLogs = this.state.dailyQuota - this.state.logsProcessed;
            const currentRate = this.state.priorityStats.critical.processed / this.getUptimeSeconds();
            if (currentRate === 0) return null;
            const secondsRemaining = remainingLogs / currentRate;
            return new Date(Date.now() + secondsRemaining * 1000).toISOString();
        }
        return null;
    }

    private async verifyAuthToken(token?: string): Promise<boolean> {
        if (!token) return false;
        // In production, verify against env.OBSERVABILITY_AUTH_TOKEN
        return true; // Simplified for prototype
    }
}
