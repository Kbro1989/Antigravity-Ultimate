/**
 * Bidirectional Shared Memory & User Pattern Preservation
 */

import { EventEmitter } from 'events';
import * as fs from 'fs/promises';
import * as path from 'path';
import { MemoryEntry, UserPatterns, UserPattern } from '../types/index.js';

export class SharedMemory extends EventEmitter {
  private static instance: SharedMemory;
  private entries: MemoryEntry[] = [];
  private userPatterns: UserPatterns = {};
  private maxEntries: number;
  private vectorDimensions: number;
  private compactionThreshold: number;
  private projectRoot: string;

  constructor(
    projectRoot: string,
    maxEntries = 1000,
    vectorDimensions = 384,
    compactionThreshold = 0.8
  ) {
    super();
    this.projectRoot = projectRoot;
    this.maxEntries = maxEntries;
    this.vectorDimensions = vectorDimensions;
    this.compactionThreshold = compactionThreshold;
  }

  static getInstance(projectRoot?: string): SharedMemory {
    if (!SharedMemory.instance && projectRoot) {
      SharedMemory.instance = new SharedMemory(projectRoot);
    }
    return SharedMemory.instance;
  }

  async initialize(): Promise<void> {
    await this.loadUserPatterns();
    await this.loadMemoryEntries();
    this.emit('memory:initialized');
  }

  async store(
    key: string,
    data: any,
    type: MemoryEntry['type'],
    metadata: Record<string, any> = {}
  ): Promise<void> {
    const entry: MemoryEntry = {
      id: key,
      type,
      content: typeof data === 'string' ? data : JSON.stringify(data),
      metadata,
      vector: await this.generateVector(data),
      timestamp: Date.now()
    };

    // Enforce user patterns if applicable
    if (type === 'code' || type === 'collaboration') {
      entry.content = this.enforceUserPatterns(entry.content);
    }

    this.entries.push(entry);

    // Maintain size limits
    if (this.entries.length > this.maxEntries) {
      this.compactMemory();
    }

    this.emit('memory:stored', { entry });
  }

  async search(
    query: string,
    type?: MemoryEntry['type'],
    limit = 10
  ): Promise<MemoryEntry[]> {
    const queryVector = await this.generateVector(query);
    
    let candidates = this.entries;
    
    // Filter by type if specified
    if (type) {
      candidates = candidates.filter(entry => entry.type === type);
    }

    // Calculate similarities
    const similarities = candidates.map(entry => ({
      entry,
      similarity: this.calculateCosineSimilarity(queryVector, entry.vector)
    }));

    // Sort by similarity and return top results
    return similarities
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, limit)
      .map(item => item.entry);
  }

  async getRecentCollaborations(limit = 10): Promise<MemoryEntry[]> {
    return this.entries
      .filter(entry => entry.type === 'collaboration')
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
  }

  getUserPatternStore(): UserPatterns {
    return { ...this.userPatterns };
  }

  async loadUserPatterns(): Promise<void> {
    const patternsPath = path.join(this.projectRoot, '.ai-patterns.json');
    
    try {
      const content = await fs.readFile(patternsPath, 'utf-8');
      const patterns = JSON.parse(content);
      
      this.userPatterns = this.validateUserPatterns(patterns);
      this.emit('patterns:loaded', { patterns: this.userPatterns });
    } catch (error) {
      // Create default patterns file if it doesn't exist
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        await this.createDefaultPatterns(patternsPath);
      } else {
        this.emit('patterns:error', error);
      }
    }
  }

  async saveUserPatterns(): Promise<void> {
    const patternsPath = path.join(this.projectRoot, '.ai-patterns.json');
    const content = JSON.stringify(this.userPatterns, null, 2);
    await fs.writeFile(patternsPath, content);
    this.emit('patterns:saved', { patterns: this.userPatterns });
  }

  addUserPattern(type: string, value: string, description: string, priority = 1): void {
    const key = `@UserPattern(${type}:${value})`;
    this.userPatterns[key] = {
      type,
      value,
      description,
      priority
    };
    this.emit('pattern:added', { key, pattern: this.userPatterns[key] });
  }

  enforceUserPatterns(content: string): string {
    // Sort patterns by priority (higher priority = lower number)
    const sortedPatterns = Object.entries(this.userPatterns)
      .sort(([,a], [,b]) => a.priority - b.priority);

    let modifiedContent = content;

    for (const [key, pattern] of sortedPatterns) {
      modifiedContent = this.applyPattern(modifiedContent, pattern);
    }

    return modifiedContent;
  }

  private applyPattern(content: string, pattern: UserPattern): string {
    switch (pattern.type) {
      case 'naming':
        return this.applyNamingPattern(content, pattern.value);
      case 'imports':
        return this.applyImportPattern(content, pattern.value);
      case 'errorHandling':
        return this.applyErrorHandlingPattern(content, pattern.value);
      case 'logging':
        return this.applyLoggingPattern(content, pattern.value);
      case 'comments':
        return this.applyCommentsPattern(content, pattern.value);
      case 'tests':
        return this.applyTestsPattern(content, pattern.value);
      default:
        return content;
    }
  }

  private applyNamingPattern(content: string, value: string): string {
    // Implementation would use AST manipulation in production
    // For now, simple regex-based approach
    if (value === 'camelCase') {
      // Convert snake_case to camelCase
      return content.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    }
    return content;
  }

  private applyImportPattern(content: string, value: string): string {
    if (value === 'grouped') {
      // Simple implementation - would be more sophisticated in production
      const lines = content.split('\n');
      const imports = lines.filter(line => line.trim().startsWith('import'));
      const otherLines = lines.filter(line => !line.trim().startsWith('import'));
      
      return [...imports, '', ...otherLines].join('\n');
    }
    return content;
  }

  private applyErrorHandlingPattern(content: string, value: string): string {
    if (value === 'try-catch') {
      // Wrap functions in try-catch blocks
      // This is a simplified implementation
      return content.replace(
        /(async\s+)?function\s+\w+\s*\([^)]*\)\s*{/g,
        (match) => {
          if (match.includes('try {')) return match; // Already has try-catch
          return match + '\n  try {';
        }
      );
    }
    return content;
  }

  private applyLoggingPattern(content: string, value: string): string {
    if (value === 'verbose') {
      // Add console.log statements to functions
      // Simplified implementation
      return content.replace(
        /(async\s+)?function\s+(\w+)\s*\([^)]*\)\s*{/g,
        (match, isAsync, funcName) => {
          return match + `\n  console.log('Entering ${funcName}');`;
        }
      );
    }
    return content;
  }

  private applyCommentsPattern(content: string, value: string): string {
    if (value === 'jsdoc') {
      // Add JSDoc comments to functions
      // Simplified implementation
      return content.replace(
        /(async\s+)?function\s+(\w+)\s*\([^)]*\)/g,
        (match, isAsync, funcName) => {
          return `/**\n * ${funcName} function\n */\n${match}`;
        }
      );
    }
    return content;
  }

  private applyTestsPattern(content: string, value: string): string {
    // This would generate test files in production
    // For now, just return the original content
    return content;
  }

  private async generateVector(data: any): Promise<number[]> {
    // In production, this would use a proper embedding model
    // For now, generate a simple hash-based vector
    const content = typeof data === 'string' ? data : JSON.stringify(data);
    const vector = new Array(this.vectorDimensions).fill(0);
    
    for (let i = 0; i < content.length; i++) {
      const charCode = content.charCodeAt(i);
      const index = charCode % this.vectorDimensions;
      vector[index] += (charCode / 65536); // Normalize
    }

    // Normalize vector
    const magnitude = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
    if (magnitude > 0) {
      return vector.map(val => val / magnitude);
    }

    return vector;
  }

  private calculateCosineSimilarity(vecA: number[], vecB: number[]): number {
    if (vecA.length !== vecB.length) return 0;

    const dotProduct = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));

    if (magnitudeA === 0 || magnitudeB === 0) return 0;

    return dotProduct / (magnitudeA * magnitudeB);
  }

  private compactMemory(): void {
    // Remove oldest entries first
    const sortedEntries = this.entries
      .filter(entry => entry.type !== 'pattern') // Keep patterns
      .sort((a, b) => a.timestamp - b.timestamp);

    const entriesToRemove = sortedEntries.slice(0, this.entries.length - this.maxEntries + 100);
    
    // Create summary of removed entries
    const summary = {
      removedCount: entriesToRemove.length,
      types: entriesToRemove.reduce((acc, entry) => {
        acc[entry.type] = (acc[entry.type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      timestamp: Date.now()
    };

    // Remove entries
    this.entries = this.entries.filter(entry => !entriesToRemove.includes(entry));

    // Add summary entry
    this.store('compaction-summary', summary, 'system');
    
    this.emit('memory:compacted', { summary });
  }

  private async loadMemoryEntries(): Promise<void> {
    const memoryPath = path.join(this.projectRoot, '.memory', 'entries.json');
    
    try {
      const content = await fs.readFile(memoryPath, 'utf-8');
      const entries = JSON.parse(content);
      
      if (Array.isArray(entries)) {
        this.entries = entries;
        this.emit('memory:loaded', { count: entries.length });
      }
    } catch (error) {
      // Memory file doesn't exist or is corrupted, start fresh
      this.entries = [];
      this.emit('memory:loaded', { count: 0 });
    }
  }

  async saveMemoryEntries(): Promise<void> {
    const memoryDir = path.join(this.projectRoot, '.memory');
    const memoryPath = path.join(memoryDir, 'entries.json');
    
    try {
      await fs.mkdir(memoryDir, { recursive: true });
      await fs.writeFile(memoryPath, JSON.stringify(this.entries, null, 2));
      this.emit('memory:saved', { count: this.entries.length });
    } catch (error) {
      this.emit('memory:save-error', error);
    }
  }

  private validateUserPatterns(patterns: any): UserPatterns {
    const validated: UserPatterns = {};
    
    for (const [key, pattern] of Object.entries(patterns)) {
      if (this.isValidUserPattern(pattern)) {
        validated[key] = pattern as UserPattern;
      }
    }
    
    return validated;
  }

  private isValidUserPattern(pattern: any): pattern is UserPattern {
    return (
      typeof pattern === 'object' &&
      typeof pattern.type === 'string' &&
      typeof pattern.value === 'string' &&
      typeof pattern.description === 'string' &&
      typeof pattern.priority === 'number'
    );
  }

  private async createDefaultPatterns(patternsPath: string): Promise<void> {
    const defaultPatterns: UserPatterns = {
      '@UserPattern(naming:camelCase)': {
        type: 'naming',
        value: 'camelCase',
        description: 'Use camelCase for variables and functions',
        priority: 1
      },
      '@UserPattern(imports:grouped)': {
        type: 'imports',
        value: 'grouped',
        description: 'Group imports: external, internal, relative',
        priority: 2
      },
      '@UserPattern(errorHandling:try-catch)': {
        type: 'errorHandling',
        value: 'try-catch',
        description: 'Wrap code in try-catch blocks with proper error handling',
        priority: 3
      }
    };

    this.userPatterns = defaultPatterns;
    await this.saveUserPatterns();
  }
}