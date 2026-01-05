/**
 * Ollama Service Integration for Local AI Models
 */

import { EventEmitter } from 'events';
import fetch from 'node-fetch';
import { AIResponse } from '../types/index.js';

export interface OllamaConfig {
  baseUrl: string;
  timeout: number;
}

export interface OllamaModel {
  name: string;
  modified_at: string;
  size: number;
  digest: string;
  details?: {
    parent_model?: string;
    format?: string;
    family?: string;
    families?: string[];
    parameter_size?: string;
    quantization_level?: string;
  };
}

export class OllamaService extends EventEmitter {
  private config: OllamaConfig;
  private models: Map<string, OllamaModel> = new Map();

  constructor(config: OllamaConfig) {
    super();
    this.config = config;
  }

  async generateResponse(
    prompt: string,
    options: {
      model?: string;
      system?: string;
      template?: string;
      context?: number[];
      stream?: boolean;
      raw?: boolean;
      format?: string;
      images?: string[];
      keep_alive?: string;
    } = {}
  ): Promise<AIResponse> {
    const model = options.model || 'codellama:13b';
    
    this.emit('ollama:request:start', { model, promptLength: prompt.length });

    try {
      // Check if model is available
      const isAvailable = await this.isModelAvailable(model);
      if (!isAvailable) {
        // Try to pull the model
        await this.pullModel(model);
      }

      const response = await this.makeGenerateRequest(prompt, model, options);
      
      this.emit('ollama:request:success', { 
        model, 
        tokensUsed: response.tokensUsed,
        timestamp: response.timestamp 
      });

      return response;
    } catch (error) {
      this.emit('ollama:request:error', { model, error });
      throw error;
    }
  }

  async chat(
    messages: Array<{
      role: 'user' | 'assistant' | 'system';
      content: string;
      images?: string[];
    }>,
    options: {
      model?: string;
      stream?: boolean;
      keep_alive?: string;
    } = {}
  ): Promise<AIResponse> {
    const model = options.model || 'codellama:13b';
    
    this.emit('ollama:chat:start', { model, messageCount: messages.length });

    try {
      const response = await fetch(`${this.config.baseUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model,
          messages,
          stream: options.stream || false,
          keep_alive: options.keep_alive
        })
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.message || !result.message.content) {
        throw new Error('Invalid response format from Ollama');
      }

      // Estimate tokens (rough approximation)
      const tokensUsed = messages.reduce((sum, msg) => sum + Math.ceil(msg.content.length / 4), 0) +
                        Math.ceil(result.message.content.length / 4);

      const aiResponse: AIResponse = {
        content: result.message.content,
        confidence: 0.8,
        tokensUsed,
        model,
        timestamp: Date.now()
      };

      this.emit('ollama:chat:success', { model, tokensUsed });
      return aiResponse;

    } catch (error) {
      this.emit('ollama:chat:error', { model, error });
      throw error;
    }
  }

  async listModels(): Promise<OllamaModel[]> {
    try {
      const response = await fetch(`${this.config.baseUrl}/api/tags`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.models || !Array.isArray(result.models)) {
        throw new Error('Invalid models response format');
      }

      // Update local models cache
      this.models.clear();
      result.models.forEach((model: OllamaModel) => {
        this.models.set(model.name, model);
      });

      this.emit('models:list:success', { count: result.models.length });
      return result.models;

    } catch (error) {
      this.emit('models:list:error', { error });
      throw error;
    }
  }

  async showModel(name: string): Promise<OllamaModel> {
    try {
      const response = await fetch(`${this.config.baseUrl}/api/show`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name
        })
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.model) {
        throw new Error('Invalid model show response format');
      }

      this.emit('model:show:success', { name });
      return result.model;

    } catch (error) {
      this.emit('model:show:error', { name, error });
      throw error;
    }
  }

  async pullModel(name: string): Promise<void> {
    this.emit('model:pull:start', { name });

    try {
      const response = await fetch(`${this.config.baseUrl}/api/pull`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          stream: false
        })
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
      }

      // Update models list after pulling
      await this.listModels();
      
      this.emit('model:pull:success', { name });

    } catch (error) {
      this.emit('model:pull:error', { name, error });
      throw error;
    }
  }

  async deleteModel(name: string): Promise<void> {
    this.emit('model:delete:start', { name });

    try {
      const response = await fetch(`${this.config.baseUrl}/api/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name
        })
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
      }

      // Remove from local cache
      this.models.delete(name);
      
      this.emit('model:delete:success', { name });

    } catch (error) {
      this.emit('model:delete:error', { name, error });
      throw error;
    }
  }

  async copyModel(source: string, destination: string): Promise<void> {
    this.emit('model:copy:start', { source, destination });

    try {
      const response = await fetch(`${this.config.baseUrl}/api/copy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          source,
          destination
        })
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
      }

      // Update models list after copying
      await this.listModels();
      
      this.emit('model:copy:success', { source, destination });

    } catch (error) {
      this.emit('model:copy:error', { source, destination, error });
      throw error;
    }
  }

  async generateEmbedding(
    model: string,
    prompt: string,
    options: {
      keep_alive?: string;
      truncate?: boolean;
      options?: Record<string, any>;
    } = {}
  ): Promise<number[]> {
    try {
      const response = await fetch(`${this.config.baseUrl}/api/embeddings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model,
          prompt,
          keep_alive: options.keep_alive,
          truncate: options.truncate,
          options: options.options
        })
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.embedding) {
        throw new Error('Invalid embedding response format');
      }

      return result.embedding;

    } catch (error) {
      this.emit('embedding:error', { model, error });
      throw error;
    }
  }

  async testConnection(): Promise<boolean> {
    try {
      const models = await this.listModels();
      return models.length >= 0; // Even empty connection is successful
    } catch {
      return false;
    }
  }

  getCachedModels(): OllamaModel[] {
    return Array.from(this.models.values());
  }

  private async isModelAvailable(name: string): Promise<boolean> {
    if (this.models.size === 0) {
      await this.listModels();
    }
    return this.models.has(name);
  }

  private async makeGenerateRequest(
    prompt: string,
    model: string,
    options: any
  ): Promise<AIResponse> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

    try {
      const response = await fetch(`${this.config.baseUrl}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model,
          prompt,
          system: options.system,
          template: options.template,
          context: options.context,
          stream: false, // We don't handle streaming in this implementation
          raw: options.raw,
          format: options.format,
          images: options.images,
          keep_alive: options.keep_alive,
          options: {
            temperature: options.temperature || 0.7,
            top_p: 0.9,
            top_k: 40,
            repeat_penalty: 1.1,
            seed: options.seed,
            num_predict: options.maxTokens || 2048,
            ...options.options
          }
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.response) {
        throw new Error('Invalid response format from Ollama');
      }

      // Estimate tokens (rough approximation)
      const tokensUsed = Math.ceil(prompt.length / 4) + Math.ceil(result.response.length / 4);

      return {
        content: result.response,
        confidence: 0.8,
        tokensUsed,
        model,
        timestamp: Date.now()
      };

    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }
}