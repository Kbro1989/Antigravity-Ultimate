
import { ObservabilityLimiter } from './ObservabilityLimiter';
import { localBridgeClient } from '../bridge/LocalBridgeService';
// We keep the local limiter class merely for types if needed, or we replace it? 
// Actually, we are REPLACING the local Limiter with this Client which acts as the limiter.

export class ObservabilityLimiterClient {
    private static instance: ObservabilityLimiterClient;
    private ws: WebSocket | null = null;
    private tokenCache: number = 0;
    private leaseId: string | null = null;
    private isEmergencyMode: boolean = false;
    private bridgeUrl: string = 'ws://localhost:8788/ws/observability'; // Hardcoded for dev, should differ in prod
    private localBridge = localBridgeClient;

    private constructor() {
        if (typeof WebSocket !== 'undefined') {
            this.connect();
        }
    }

    public static getInstance(): ObservabilityLimiterClient {
        if (!ObservabilityLimiterClient.instance) {
            ObservabilityLimiterClient.instance = new ObservabilityLimiterClient();
        }
        return ObservabilityLimiterClient.instance;
    }

    private connect(): void {
        if (typeof WebSocket === 'undefined') return;
        if (this.ws?.readyState === WebSocket.OPEN) return;

        try {
            let bridgeUrl = this.localBridge?.getBridgeUrl() || this.bridgeUrl;

            // Logic to derive Observability Endpoint from Bridge URL:
            // 1. If Relay Mode (wss://host/bridge/sessId?role=...):
            //    Target: wss://host/ws/observability
            // 2. If Local Mode (ws://localhost:8788/ws):
            //    Target: ws://localhost:8788/ws/observability (or just /observability handled by router)

            // We need to strip the specific session/bridge path and roles
            const urlObj = new URL(bridgeUrl);

            // Just reset the path to /ws/observability on the same host
            // (Assumes Bridge Worker serves Observability at /metrics/observability or /ws/observability)
            // Router in index.ts handles /metrics/observability and /ws/observability
            urlObj.pathname = '/ws/observability';
            urlObj.search = '?source=frontend'; // Reset search params

            // Use derived URL
            const finalUrl = urlObj.toString();
            console.log(`[Observability] Connecting to Token Bank at ${finalUrl} (derived from ${bridgeUrl})`);

            this.ws = new WebSocket(finalUrl);

            this.ws.addEventListener('open', () => {
                // Request initial token lease
                this.requestTokens(50);
            });

            this.ws.addEventListener('message', (event) => {
                const data = JSON.parse(event.data);

                if (data.type === 'TOKEN_GRANT') {
                    this.tokenCache = data.lease.tokens;
                    this.leaseId = data.lease.leaseId;
                }

                if (data.type === 'EMERGENCY_MODE') {
                    this.isEmergencyMode = true;
                    this.showDegradationBanner();
                }

                if (data.type === 'EMERGENCY_CHECKPOINT') {
                    console.warn('[POG Observatory]', data.message);
                }
            });

            this.ws.addEventListener('close', () => {
                // Reconnect after 5 seconds
                if (typeof setTimeout !== 'undefined') {
                    setTimeout(() => this.connect(), 5000);
                }
            });
        } catch (e) {
            console.error("Observability connection failed", e);
        }
    }

    private requestTokens(count: number): void {
        if (this.ws?.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({
                type: 'REQUEST_TOKENS',
                count
            }));
        }
    }

    // Compatible with old canEmit() API but async-ish?
    // Old API was sync canEmit(): boolean.
    // We should try to support sync check from cache.
    public canEmit(priority: 'critical' | 'normal' | 'trace' = 'normal'): boolean {
        // Emergency mode: Only critical logs pass
        if (this.isEmergencyMode && priority !== 'critical') {
            return false;
        }

        // Use cached tokens if available
        if (this.tokenCache > 0) {
            this.tokenCache--;
            // Auto-refill when low
            if (this.tokenCache < 10) {
                this.requestTokens(20);
            }
            return true;
        }

        // No tokens? Try to request (async), but for THIS log, we might fail unless we wait?
        // LoggingService expects sync boolean usually.
        // We will fall back to Offline/Trickle mode if cache is empty.

        // Request more for NEXT time
        this.requestTokens(20);

        // Offline fallback: Allow 10 logs per minute local
        return this.offlineFallback();
    }

    private offlineFallback(): boolean {
        if (typeof localStorage === 'undefined') return true; // Default to allowing in backend

        const now = Date.now();
        const lastLogTime = parseInt(localStorage.getItem('pog_last_log_time') || '0');
        const logCount = parseInt(localStorage.getItem('pog_offline_log_count') || '0');

        if (now - lastLogTime > 60000) {
            // New minute
            localStorage.setItem('pog_last_log_time', now.toString());
            localStorage.setItem('pog_offline_log_count', '1');
            return true;
        } else if (logCount < 10) {
            // Within current minute, under limit
            localStorage.setItem('pog_offline_log_count', (logCount + 1).toString());
            return true;
        }

        return false;
    }

    private showDegradationBanner(): void {
        if (typeof document === 'undefined') return;
        if (document.getElementById('pog-observability-banner')) return;

        const banner = document.createElement('div');
        banner.id = 'pog-observability-banner';
        banner.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #f59e0b;
      color: #000;
      padding: 8px;
      text-align: center;
      font-weight: bold;
      z-index: 9999;
      cursor: pointer;
    `;
        banner.textContent = '⚠️ Observability throttled. Critical logs only. [Check Status]';

        banner.addEventListener('click', () => {
            if (typeof window !== 'undefined') {
                window.open('/admin/metrics', '_blank');
            }
        });

        document.body.appendChild(banner);
    }
}

export const limitObserverClient = ObservabilityLimiterClient.getInstance();
