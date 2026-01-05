/**
 * CircuitBreaker - Automatic Failover Pattern
 * Prevents cascading failures by tracking provider health
 * Inspired by recreation pass architecture v5.0
 */

export type CircuitState = 'closed' | 'open' | 'half-open';

export interface CircuitBreakerConfig {
    failureThreshold: number;      // Failures before opening
    recoveryTimeout: number;       // ms before testing again
    halfOpenRequests: number;      // Requests allowed in half-open
}

interface ProviderHealth {
    state: CircuitState;
    failures: number;
    successes: number;
    lastFailure: Date | null;
    openedAt: Date | null;
}

const DEFAULT_CONFIG: CircuitBreakerConfig = {
    failureThreshold: 5,
    recoveryTimeout: 60000,  // 1 minute
    halfOpenRequests: 3
};

export class CircuitBreaker {
    private config: CircuitBreakerConfig;
    private providers: Map<string, ProviderHealth> = new Map();

    constructor(config: Partial<CircuitBreakerConfig> = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
    }

    /**
     * Check if provider circuit is closed (healthy)
     */
    isClosed(provider: string): boolean {
        const health = this.getHealth(provider);

        if (health.state === 'closed') {
            return true;
        }

        if (health.state === 'open') {
            // Check if recovery timeout has passed
            if (health.openedAt) {
                const elapsed = Date.now() - health.openedAt.getTime();
                if (elapsed >= this.config.recoveryTimeout) {
                    // Transition to half-open
                    health.state = 'half-open';
                    health.successes = 0;
                    console.log(`[CircuitBreaker] ${provider}: OPEN → HALF-OPEN (testing recovery)`);
                    return true;
                }
            }
            return false;
        }

        // half-open: allow limited requests
        return health.successes < this.config.halfOpenRequests;
    }

    /**
     * Record a successful request
     */
    recordSuccess(provider: string): void {
        const health = this.getHealth(provider);

        if (health.state === 'half-open') {
            health.successes++;
            if (health.successes >= this.config.halfOpenRequests) {
                // Fully recovered
                health.state = 'closed';
                health.failures = 0;
                health.openedAt = null;
                console.log(`[CircuitBreaker] ${provider}: HALF-OPEN → CLOSED (recovered)`);
            }
        } else if (health.state === 'closed') {
            // Reset failure count on success
            health.failures = 0;
        }
    }

    /**
     * Record a failed request
     */
    recordFailure(provider: string, error?: Error): void {
        const health = this.getHealth(provider);
        health.failures++;
        health.lastFailure = new Date();

        if (health.state === 'half-open') {
            // Any failure in half-open goes back to open
            health.state = 'open';
            health.openedAt = new Date();
            console.log(`[CircuitBreaker] ${provider}: HALF-OPEN → OPEN (recovery failed)`);
        } else if (health.failures >= this.config.failureThreshold) {
            // Too many failures, open the circuit
            health.state = 'open';
            health.openedAt = new Date();
            console.log(`[CircuitBreaker] ${provider}: CLOSED → OPEN (threshold exceeded)`);
        }
    }

    /**
     * Get current state for a provider
     */
    getState(provider: string): CircuitState {
        return this.getHealth(provider).state;
    }

    /**
     * Get all provider states for monitoring
     */
    getAllStates(): Record<string, { state: CircuitState; failures: number }> {
        const states: Record<string, { state: CircuitState; failures: number }> = {};

        for (const [provider, health] of this.providers) {
            states[provider] = {
                state: health.state,
                failures: health.failures
            };
        }

        return states;
    }

    /**
     * Force reset a provider's circuit
     */
    reset(provider: string): void {
        this.providers.set(provider, this.createHealth());
        console.log(`[CircuitBreaker] ${provider}: RESET to CLOSED`);
    }

    /**
     * Get or create health record for provider
     */
    private getHealth(provider: string): ProviderHealth {
        if (!this.providers.has(provider)) {
            this.providers.set(provider, this.createHealth());
        }
        return this.providers.get(provider)!;
    }

    /**
     * Create initial health record
     */
    private createHealth(): ProviderHealth {
        return {
            state: 'closed',
            failures: 0,
            successes: 0,
            lastFailure: null,
            openedAt: null
        };
    }
}

// Singleton export
export const circuitBreaker = new CircuitBreaker();
