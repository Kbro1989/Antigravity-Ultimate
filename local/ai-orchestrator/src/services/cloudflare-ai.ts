/**
 * Cloudflare AI Service Integration
 */

import { EventEmitter } from 'events';
import { AIResponse } from '../types/index.js';

export interface CloudflareAIConfig {
  accountId: string;
  apiToken: string;
  gateway?: {
    enabled: boolean;
    cacheTtl: number;
  };
}

export class CloudflareAIService extends EventEmitter {
  private config: CloudflareAIConfig;
  private baseUrl: string;
  private cache: Map<string, { response: AIResponse; expires: number }> = new Map();

  constructor(config: CloudflareAIConfig) {
    super();
    this.config = config;
    this.baseUrl = `https://api.cloudflare.com/client/v4/accounts/${config.accountId}/ai`;
  }

  async generateResponse(
    prompt: string,
    options: {
      model?: string;
      maxTokens?: number;
      temperature?: number;
      stream?: boolean;
    } = {}
  ): Promise<AIResponse> {
    const model = options.model || '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
    const cacheKey = this.generateCacheKey(prompt, model);

    // Check cache first
    if (this.config.gateway?.enabled) {
      const cached = this.cache.get(cacheKey);
      if (cached && cached.expires > Date.now()) {
        this.emit('ai:cache-hit', { cacheKey, model });
        return cached.response;
      }
    }

    this.emit('ai:request:start', { model, promptLength: prompt.length });

    try {
      const response = await this.makeRequest(prompt, model, options);
      
      // Cache the response if gateway is enabled
      if (this.config.gateway?.enabled) {
        const expires = Date.now() + (this.config.gateway.cacheTtl * 1000);
        this.cache.set(cacheKey, { response, expires });
      }

      this.emit('ai:request:success', { 
        model, 
        tokensUsed: response.tokensUsed,
        timestamp: response.timestamp 
      });

      return response;
    } catch (error) {
      this.emit('ai:request:error', { model, error });
      throw error;
    }
  }

  async generateEmbedding(
    text: string,
    options: {
      model?: string;
    } = {}
  ): Promise<number[]> {
    const model = options.model || '@cf/baai/bge-base-en-v1.5';

    this.emit('embedding:request:start', { model, textLength: text.length });

    try {
      const response = await fetch(`${this.baseUrl}/run/${model}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: [text]
        })
      });

      if (!response.ok) {
        throw new Error(`Cloudflare AI API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.result || !result.result.data || !result.result.data[0]) {
        throw new Error('Invalid embedding response format');
      }

      this.emit('embedding:request:success', { model, dimensions: result.result.data[0].length });

      return result.result.data[0];
    } catch (error) {
      this.emit('embedding:request:error', { model, error });
      throw error;
    }
  }

  async listModels(): Promise<string[]> {
    try {
      const response = await fetch(`${this.baseUrl}/models`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.config.apiToken}`
        }
      });

      if (!response.ok) {
        throw new Error(`Cloudflare AI API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.result || !Array.isArray(result.result)) {
        throw new Error('Invalid models response format');
      }

      return result.result.map((model: any) => model.name);
    } catch (error) {
      this.emit('models:list:error', { error });
      throw error;
    }
  }

  clearCache(): void {
    this.cache.clear();
    this.emit('cache:cleared');
  }

  getCacheStats(): {
    size: number;
    hitRate: number;
    entries: Array<{ key: string; expires: number }>;
  } {
    const now = Date.now();
    const validEntries = Array.from(this.cache.entries())
      .filter(([, value]) => value.expires > now);

    return {
      size: validEntries.length,
      hitRate: 0, // Would need to track hits/misses
      entries: validEntries.map(([key, value]) => ({ key, expires: value.expires }))
    };
  }

  private async makeRequest(
    prompt: string,
    model: string,
    options: {
      maxTokens?: number;
      temperature?: number;
      stream?: boolean;
    }
  ): Promise<AIResponse> {
    const response = await fetch(`${this.baseUrl}/run/${model}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        stream: options.stream || false,
        max_tokens: options.maxTokens || 2048,
        temperature: options.temperature || 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`Cloudflare AI API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    
    if (!result.result || !result.result.response) {
      throw new Error('Invalid response format from Cloudflare AI');
    }

    // Estimate tokens (rough approximation)
    const tokensUsed = Math.ceil(prompt.length / 4) + Math.ceil(result.result.response.length / 4);

    return {
      content: result.result.response,
      confidence: 0.8, // Would need to extract from response
      tokensUsed,
      model,
      timestamp: Date.now()
    };
  }

  private generateCacheKey(prompt: string, model: string): string {
    // Simple hash function for cache key
    let hash = 0;
    const str = prompt + model;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
  }

  async testConnection(): Promise<boolean> {
    try {
      const models = await this.listModels();
      return models.length > 0;
    } catch {
      return false;
    }
  }
}