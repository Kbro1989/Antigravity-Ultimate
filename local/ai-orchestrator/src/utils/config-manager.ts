/**
 * Configuration Manager for the orchestrator
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import * as os from 'os';
import { OrchestratorConfig } from '../types/index.js';

export class ConfigurationManager {
  private configPath: string;
  private config: OrchestratorConfig | null = null;

  constructor(configPath?: string) {
    this.configPath = configPath || this.getDefaultConfigPath();
  }

  async loadConfig(): Promise<OrchestratorConfig> {
    // Try to load from file first
    try {
      const configFile = await this.loadConfigFile();
      this.config = this.mergeWithDefaults(configFile);
      return this.config;
    } catch (error) {
      // If file doesn't exist, create default config
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        this.config = this.getDefaultConfig();
        await this.saveConfig();
        return this.config;
      }
      throw error;
    }
  }

  async saveConfig(): Promise<void> {
    if (!this.config) {
      throw new Error('No configuration to save');
    }

    const configDir = path.dirname(this.configPath);
    await fs.mkdir(configDir, { recursive: true });
    await fs.writeFile(this.configPath, JSON.stringify(this.config, null, 2));
  }

  getConfig(): OrchestratorConfig {
    if (!this.config) {
      throw new Error('Configuration not loaded. Call loadConfig() first.');
    }
    return this.config;
  }

  updateConfig(updates: Partial<OrchestratorConfig>): void {
    if (!this.config) {
      throw new Error('Configuration not loaded. Call loadConfig() first.');
    }

    this.config = { ...this.config, ...updates };
  }

  private async loadConfigFile(): Promise<any> {
    const content = await fs.readFile(this.configPath, 'utf-8');
    return JSON.parse(content);
  }

  private getDefaultConfigPath(): string {
    const homeDir = os.homedir();
    return path.join(homeDir, '.ai-orchestrator', 'config.json');
  }

  private getDefaultConfig(): OrchestratorConfig {
    return {
      cloudflare: {
        accountId: '',
        apiToken: '',
        models: {
          primary: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
          secondary: '@cf/meta/llama-3.1-8b-instruct',
          fast: '@cf/meta/llama-3.1-8b-instruct'
        },
        gateway: {
          enabled: true,
          cacheTtl: 300 // 5 minutes
        }
      },
      ollama: {
        baseUrl: 'http://localhost:11434',
        models: {
          code: 'codellama:13b',
          reasoning: 'llama2:13b'
        },
        timeout: 30000 // 30 seconds
      },
      project: {
        root: process.cwd(),
        watchPatterns: ['**/*.ts', '**/*.tsx'],
        ignorePatterns: ['node_modules/**', 'dist/**', 'build/**'],
        maxErrorIterations: 5,
        autoFix: true
      },
      memory: {
        maxEntries: 1000,
        vectorDimensions: 384,
        compactionThreshold: 0.8
      }
    };
  }

  private mergeWithDefaults(config: any): OrchestratorConfig {
    const defaults = this.getDefaultConfig();
    
    return {
      cloudflare: {
        ...defaults.cloudflare,
        ...config.cloudflare,
        models: {
          ...defaults.cloudflare.models,
          ...config.cloudflare?.models
        },
        gateway: {
          ...defaults.cloudflare.gateway,
          ...config.cloudflare?.gateway
        }
      },
      ollama: {
        ...defaults.ollama,
        ...config.ollama,
        models: {
          ...defaults.ollama.models,
          ...config.ollama?.models
        }
      },
      project: {
        ...defaults.project,
        ...config.project
      },
      memory: {
        ...defaults.memory,
        ...config.memory
      }
    };
  }

  async createExampleConfig(): Promise<void> {
    const exampleConfig = {
      "$schema": "./schema.json",
      "cloudflare": {
        "accountId": "your-account-id",
        "apiToken": "your-api-token",
        "models": {
          "primary": "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
          "secondary": "@cf/meta/llama-3.1-8b-instruct",
          "fast": "@cf/meta/llama-3.1-8b-instruct"
        },
        "gateway": {
          "enabled": true,
          "cacheTtl": 300
        }
      },
      "ollama": {
        "baseUrl": "http://localhost:11434",
        "models": {
          "code": "codellama:13b",
          "reasoning": "llama2:13b"
        },
        "timeout": 30000
      },
      "project": {
        "root": "/path/to/your/project",
        "watchPatterns": ["**/*.ts", "**/*.tsx"],
        "ignorePatterns": ["node_modules/**", "dist/**", "build/**"],
        "maxErrorIterations": 5,
        "autoFix": true
      },
      "memory": {
        "maxEntries": 1000,
        "vectorDimensions": 384,
        "compactionThreshold": 0.8
      }
    };

    const examplePath = this.configPath.replace('.json', '.example.json');
    await fs.writeFile(examplePath, JSON.stringify(exampleConfig, null, 2));
  }

  validateConfig(config: OrchestratorConfig): string[] {
    const errors: string[] = [];

    // Validate Cloudflare config
    if (!config.cloudflare.accountId) {
      errors.push('Cloudflare accountId is required');
    }
    if (!config.cloudflare.apiToken) {
      errors.push('Cloudflare apiToken is required');
    }

    // Validate Ollama config
    if (!config.ollama.baseUrl) {
      errors.push('Ollama baseUrl is required');
    }

    // Validate project config
    if (!config.project.root) {
      errors.push('Project root is required');
    }

    return errors;
  }
}