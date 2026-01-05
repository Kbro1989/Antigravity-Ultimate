/**
 * Master Orchestrator - The central coordinator
 */

import { EventEmitter } from 'events';
import * as fs from 'fs/promises';
import * as path from 'path';
import { glob } from 'glob';
import {
  OrchestratorConfig,
  TSCError,
  BuildNotes,
  WorkDistribution,
  MemoryEntry
} from '../types/index.js';
import { AINegotiationProtocol } from './ai-negotiation.js';
import { TSCErrorMonitor } from './tsc-error-monitor.js';
import { AIErrorResponder } from './ai-error-responder.js';
import { SharedMemory } from './shared-memory.js';
import { CloudflareAIService } from '../services/cloudflare-ai.js';
import { OllamaService } from '../services/ollama.js';
import { Logger } from '../utils/logger.js';
import { ConfigurationManager } from '../utils/config-manager.js';

export class CollaborativeAIOrchestrator extends EventEmitter {
  private config: OrchestratorConfig;
  private cloudflareAI: CloudflareAIService;
  private ollamaAI: OllamaService;
  private negotiationProtocol: AINegotiationProtocol;
  private errorMonitor?: TSCErrorMonitor;
  private errorResponder: AIErrorResponder;
  private sharedMemory: SharedMemory;
  private logger: Logger;
  private configManager: ConfigurationManager;
  private activeFiles: Set<string> = new Set();
  private isRunning = false;

  constructor(configPath?: string) {
    super();
    this.configManager = new ConfigurationManager(configPath);
    this.logger = new Logger('Orchestrator');
    this.sharedMemory = SharedMemory.getInstance();
  }

  async initialize(): Promise<void> {
    this.logger.info('Initializing AI-to-AI Collaborative Orchestrator v7.0');
    
    try {
      // Load configuration
      this.config = await this.configManager.loadConfig();
      this.logger.info('Configuration loaded successfully');

      // Initialize AI services
      await this.initializeAIServices();
      
      // Initialize core components
      this.initializeComponents();
      
      // Setup event handlers
      this.setupEventHandlers();
      
      // Initialize shared memory
      await this.sharedMemory.initialize();
      
      this.isRunning = true;
      this.emit('orchestrator:initialized');
      this.logger.info('Orchestrator initialized successfully');

    } catch (error) {
      this.logger.error('Failed to initialize orchestrator', error);
      this.emit('orchestrator:error', error);
      throw error;
    }
  }

  async processUserRequest(request: string): Promise<{
    success: boolean;
    finalPlan: string;
    workDistribution: WorkDistribution;
    consensusConfidence: number;
    buildNotes: BuildNotes;
    filesCreated: string[];
    filesModified: string[];
    errorsFixed: number;
  }> {
    this.logger.info('Processing user request', { request: request.substring(0, 100) + '...' });
    this.emit('request:start', { request });

    const startTime = Date.now();
    const filesCreated: string[] = [];
    const filesModified: string[] = [];
    let errorsFixed = 0;

    try {
      // Step 1: AI Negotiation Phase
      this.logger.info('Starting AI negotiation phase');
      const negotiation = await this.negotiationProtocol.negotiateTask(
        request,
        this.config.project.root,
        this.sharedMemory.getUserPatternStore(),
        await this.sharedMemory.getRecentCollaborations(5)
      );

      this.logger.info('AI negotiation completed', {
        rounds: negotiation.rounds.length,
        confidence: negotiation.consensusConfidence
      });

      // Store negotiation in memory
      await this.sharedMemory.store(
        `negotiation-${Date.now()}`,
        {
          request,
          rounds: negotiation.rounds,
          finalPlan: negotiation.finalPlan
        },
        'collaboration',
        { type: 'negotiation', confidence: negotiation.consensusConfidence }
      );

      // Step 2: Collaborative Building Phase
      this.logger.info('Starting collaborative building phase');
      this.emit('building:start', { workDistribution: negotiation.workDistribution });

      for (const task of negotiation.workDistribution.tasks) {
        try {
          const result = await this.executeTask(task, negotiation.finalPlan);
          
          if (result.filesCreated) filesCreated.push(...result.filesCreated);
          if (result.filesModified) filesModified.push(...result.filesModified);
          
          this.logger.info('Task completed', { task: task.id, assignedTo: task.assignedTo });
        } catch (error) {
          this.logger.error('Task execution failed', { task: task.id, error });
        }
      }

      // Step 3: Observe & Fix Loop
      this.logger.info('Starting observe and fix loop');
      const maxIterations = this.config.project.maxErrorIterations;
      let iterations = 0;
      let lastErrorCount = Infinity;

      while (iterations < maxIterations) {
        iterations++;
        const currentErrors = this.errorMonitor ? this.errorMonitor.getRecentErrors() : [];
        
        if (currentErrors.length === 0) {
          this.logger.info('No errors found, build is clean');
          break;
        }

        if (currentErrors.length >= lastErrorCount) {
          this.logger.warn('Error count not decreasing, stopping fix loop');
          break;
        }

        lastErrorCount = currentErrors.length;
        this.logger.info('Fixing errors', { iteration: iterations, errorCount: currentErrors.length });

        for (const error of currentErrors) {
          try {
            const fileContent = await fs.readFile(error.file, 'utf-8');
            const fixResult = await this.errorResponder.respondToError(error, {
              fileContent,
              projectRoot: this.config.project.root,
              userPatterns: this.sharedMemory.getUserPatternStore()
            });

            if (fixResult.applied) {
              errorsFixed++;
              this.logger.info('Error fixed', { error: error.code, file: error.file });
            }
          } catch (fixError) {
            this.logger.error('Failed to fix error', { error: error.code, fixError });
          }
        }
      }

      // Step 4: Generate Build Notes
      const buildNotes = await this.generateBuildNotes(
        request,
        negotiation.finalPlan,
        filesCreated,
        filesModified,
        errorsFixed,
        startTime
      );

      const result = {
        success: true,
        finalPlan: negotiation.finalPlan,
        workDistribution: negotiation.workDistribution,
        consensusConfidence: negotiation.consensusConfidence,
        buildNotes,
        filesCreated,
        filesModified,
        errorsFixed
      };

      this.emit('request:success', result);
      this.logger.info('User request processed successfully', { 
        duration: Date.now() - startTime,
        filesCreated: filesCreated.length,
        filesModified: filesModified.length,
        errorsFixed
      });

      return result;

    } catch (error) {
      this.logger.error('Failed to process user request', error);
      this.emit('request:error', { request, error });
      
      return {
        success: false,
        finalPlan: '',
        workDistribution: { tasks: [], totalComplexity: 0, estimatedDuration: 0 },
        consensusConfidence: 0,
        buildNotes: {
          summary: `Failed to process request: ${(error as Error).message}`,
          filesCreated: [],
          filesModified: [],
          errorsFixed: 0,
          warningsFixed: 0,
          estimatedImprovement: 0,
          recommendations: []
        },
        filesCreated: [],
        filesModified: [],
        errorsFixed: 0
      };
    }
  }

  async startErrorMonitor(): Promise<void> {
    if (this.errorMonitor) {
      this.logger.warn('Error monitor already running');
      return;
    }

    this.errorMonitor = new TSCErrorMonitor(this.config.project.root);
    this.setupErrorMonitorHandlers();
    await this.errorMonitor.start();
    
    this.logger.info('TSC error monitor started');
  }

  stopErrorMonitor(): void {
    if (this.errorMonitor) {
      this.errorMonitor.stop();
      this.errorMonitor = undefined;
      this.logger.info('TSC error monitor stopped');
    }
  }

  async shutdown(): Promise<void> {
    this.logger.info('Shutting down orchestrator');
    this.isRunning = false;

    // Stop error monitor
    this.stopErrorMonitor();

    // Save memory
    await this.sharedMemory.saveMemoryEntries();

    // Clear event listeners
    this.removeAllListeners();

    this.logger.info('Orchestrator shut down complete');
  }

  private async initializeAIServices(): Promise<void> {
    // Initialize Cloudflare AI
    this.cloudflareAI = new CloudflareAIService(this.config.cloudflare);
    
    const cloudflareConnected = await this.cloudflareAI.testConnection();
    if (!cloudflareConnected) {
      this.logger.warn('Cloudflare AI connection test failed');
    } else {
      this.logger.info('Cloudflare AI connected successfully');
    }

    // Initialize Ollama
    this.ollamaAI = new OllamaService(this.config.ollama);
    
    const ollamaConnected = await this.ollamaAI.testConnection();
    if (!ollamaConnected) {
      this.logger.warn('Ollama connection test failed');
    } else {
      this.logger.info('Ollama connected successfully');
      
      // List available models
      const models = await this.ollamaAI.listModels();
      this.logger.info('Available Ollama models', { count: models.length, models: models.map(m => m.name) });
    }
  }

  private initializeComponents(): void {
    // Initialize negotiation protocol
    this.negotiationProtocol = new AINegotiationProtocol(
      this.cloudflareAI,
      this.ollamaAI
    );

    // Initialize error responder
    this.errorResponder = new AIErrorResponder(
      this.cloudflareAI,
      this.ollamaAI,
      this.config.project.autoFix
    );
  }

  private setupEventHandlers(): void {
    // Negotiation protocol events
    this.negotiationProtocol.on('negotiation:start', (data) => {
      this.emit('negotiation:start', data);
    });

    this.negotiationProtocol.on('negotiation:round', (data) => {
      this.emit('negotiation:round', data);
    });

    this.negotiationProtocol.on('negotiation:end', (data) => {
      this.emit('negotiation:end', data);
    });

    // Error responder events
    this.errorResponder.on('error:start', (data) => {
      this.emit('error:start', data);
    });

    this.errorResponder.on('error:fixed', (data) => {
      this.emit('error:fixed', data);
    });
  }

  private setupErrorMonitorHandlers(): void {
    if (!this.errorMonitor) return;

    this.errorMonitor.on('tsc:error', (error: TSCError) => {
      this.emit('tsc:error', error);
      this.logger.warn('TypeScript error detected', { 
        code: error.code, 
        file: error.file, 
        line: error.line 
      });
    });

    this.errorMonitor.on('file:change', (data) => {
      this.activeFiles.add(data.file);
      this.emit('file:change', data);
    });

    this.errorMonitor.on('check:success', () => {
      this.emit('check:success');
    });
  }

  private async executeTask(
    task: any,
    plan: string
  ): Promise<{
    filesCreated: string[];
    filesModified: string[];
  }> {
    this.logger.info('Executing task', { task: task.id, assignedTo: task.assignedTo });

    const filesCreated: string[] = [];
    const filesModified: string[] = [];

    try {
      // For each file in the task
      for (const filePath of task.files) {
        const fullPath = path.resolve(this.config.project.root, filePath);
        const exists = await this.fileExists(fullPath);

        if (!exists) {
          // Create new file
          const content = await this.generateFileContent(task, filePath, plan);
          await fs.mkdir(path.dirname(fullPath), { recursive: true });
          await fs.writeFile(fullPath, content);
          filesCreated.push(filePath);
          
          this.logger.info('File created', { file: filePath });
        } else {
          // Modify existing file
          const existingContent = await fs.readFile(fullPath, 'utf-8');
          const modifiedContent = await this.modifyFileContent(
            task,
            filePath,
            existingContent,
            plan
          );
          
          if (modifiedContent !== existingContent) {
            await fs.writeFile(fullPath, modifiedContent);
            filesModified.push(filePath);
            this.logger.info('File modified', { file: filePath });
          }
        }

        // Store in memory
        await this.sharedMemory.store(
          `file-${filePath}-${Date.now()}`,
          {
            task: task.id,
            file: filePath,
            action: exists ? 'modified' : 'created',
            content: await fs.readFile(fullPath, 'utf-8')
          },
          'code',
          { task: task.id, file: filePath }
        );
      }

      return { filesCreated, filesModified };

    } catch (error) {
      this.logger.error('Task execution failed', { task: task.id, error });
      throw error;
    }
  }

  private async generateFileContent(
    task: any,
    filePath: string,
    plan: string
  ): Promise<string> {
    // Simple implementation - in production, this would use AI to generate content
    const fileName = path.basename(filePath, path.extname(filePath));
    const extension = path.extname(filePath);

    let content = '';

    switch (extension) {
      case '.ts':
        content = `/**
 * Generated by AI-to-AI Collaborative Orchestrator
 * Task: ${task.description}
 * File: ${filePath}
 */

export class ${this.toPascalCase(fileName)} {
  // Implementation goes here
}
`;
        break;
      case '.js':
        content = `/**
 * Generated by AI-to-AI Collaborative Orchestrator
 * Task: ${task.description}
 * File: ${filePath}
 */

class ${this.toPascalCase(fileName)} {
  // Implementation goes here
}

module.exports = ${this.toPascalCase(fileName)};
`;
        break;
      case '.json':
        content = JSON.stringify({
          generated: true,
          task: task.description,
          timestamp: new Date().toISOString()
        }, null, 2);
        break;
      default:
        content = `# Generated by AI-to-AI Collaborative Orchestrator
# Task: ${task.description}
# File: ${filePath}
`;
    }

    // Apply user patterns
    return this.sharedMemory.enforceUserPatterns(content);
  }

  private async modifyFileContent(
    task: any,
    filePath: string,
    existingContent: string,
    plan: string
  ): Promise<string> {
    // Simple implementation - in production, this would use AI to intelligently modify content
    // For now, just add a comment at the top
    const comment = `// Modified by AI-to-AI Collaborative Orchestrator for task: ${task.description}\n`;
    
    if (!existingContent.startsWith(comment)) {
      return comment + existingContent;
    }
    
    return existingContent;
  }

  private async generateBuildNotes(
    request: string,
    finalPlan: string,
    filesCreated: string[],
    filesModified: string[],
    errorsFixed: number,
    startTime: number
  ): Promise<BuildNotes> {
    const duration = Date.now() - startTime;
    
    return {
      summary: `Successfully processed request: "${request.substring(0, 50)}..."`,
      filesCreated,
      filesModified,
      errorsFixed,
      warningsFixed: 0, // Would track warnings in production
      estimatedImprovement: Math.min(100, (filesCreated.length + filesModified.length) * 10),
      recommendations: [
        'Review generated files for correctness',
        'Run tests to verify functionality',
        'Consider adding more user patterns for better code consistency',
        'Monitor error logs for any issues'
      ]
    };
  }

  private async fileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  private toPascalCase(str: string): string {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
}