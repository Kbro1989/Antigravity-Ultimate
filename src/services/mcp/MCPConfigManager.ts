
/**
 * MCPConfigManager - Manages external AI provider keys and MCP server connections.
 * Resolves the "Google Lock-in" and enables strategic resource rotation.
 */

export interface MCPConfig {
    providers: {
        cloudflare?: { accountId: string; apiToken: string; enabled: boolean };
        gemini?: { apiKey: string; enabled: boolean };
        ollama?: { endpoint: string; enabled: boolean };
        external?: { openRouterKey?: string; fireworksKey?: string; huggingFaceToken?: string };
    };
    routing: {
        strategy: 'cloudflare-first' | 'cost-optimized' | 'performance-first';
        allowPaidOverflow: boolean;
        dailyBudgetUsd: number;
    };
    mcpServers: Record<string, { url: string; enabled: boolean }>;
}

import mcpConfigJson from '../../config/mcp_config.json';

class MCPConfigManager {
    private config: MCPConfig;

    constructor() {
        this.config = this.loadConfig();
    }

    private loadConfig(): MCPConfig {
        // Ground truth from static config file (v6.1 Ship Protocol)
        let groundTruth = mcpConfigJson as any;

        // Validation: If it's a schema (has $schema or properties), use a safe default instead
        if (groundTruth.$schema || groundTruth.properties) {
            console.warn('[MCPConfig] Static config is a schema, using default values.');
            groundTruth = {
                providers: { ollama: { endpoint: 'http://localhost:11434', enabled: true } },
                routing: { strategy: 'cloudflare-first', allowPaidOverflow: false, dailyBudgetUsd: 1.0 },
                mcpServers: {}
            };
        }

        const saved = localStorage.getItem('POG_MCP_CONFIG');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                return {
                    ...groundTruth,
                    ...parsed,
                    providers: { ...groundTruth.providers, ...parsed.providers },
                    routing: { ...groundTruth.routing, ...parsed.routing }
                };
            } catch (e) {
                console.warn('[MCPConfig] Failed to parse saved config, using ground truth.');
            }
        }

        return groundTruth;
    }

    public saveConfig(config: MCPConfig) {
        this.config = config;
        localStorage.setItem('POG_MCP_CONFIG', JSON.stringify(config));
        window.dispatchEvent(new CustomEvent('mcp-config-updated', { detail: config }));
    }

    public getConfig(): MCPConfig {
        return { ...this.config };
    }

    public getApiKey(provider: string): string | undefined {
        switch (provider) {
            case 'gemini': return this.config.providers.gemini?.apiKey;
            case 'openrouter': return this.config.providers.external?.openRouterKey;
            case 'fireworks': return this.config.providers.external?.fireworksKey;
            case 'huggingface': return this.config.providers.external?.huggingFaceToken;
            default: return undefined;
        }
    }
}

export const mcpConfigManager = new MCPConfigManager();
