/**
 * TypeScript Compiler Error Monitor
 */

import { EventEmitter } from 'events';
import { spawn, ChildProcess } from 'child_process';
import * as chokidar from 'chokidar';
import * as path from 'path';
import * as fs from 'fs';
import { TSCError } from '../types/index.js';

export class TSCErrorMonitor extends EventEmitter {
  private watcher?: chokidar.FSWatcher;
  private tscProcess?: ChildProcess;
  private projectRoot: string;
  private recentErrors: TSCError[] = [];
  private isRunning = false;
  private readonly debounceMs = 500;
  private debounceTimer?: NodeJS.Timeout;

  constructor(projectRoot: string) {
    super();
    this.projectRoot = projectRoot;
  }

  async start(): Promise<void> {
    if (this.isRunning) {
      return;
    }

    this.isRunning = true;
    this.emit('monitor:start');

    // Check if tsconfig.json exists
    const tsconfigPath = path.join(this.projectRoot, 'tsconfig.json');
    if (!fs.existsSync(tsconfigPath)) {
      this.emit('monitor:error', new Error('tsconfig.json not found in project root'));
      return;
    }

    // Setup file watcher
    this.setupWatcher();
    
    // Initial TypeScript check
    await this.runTypeScriptCheck();

    this.emit('monitor:ready');
  }

  stop(): void {
    if (!this.isRunning) {
      return;
    }

    this.isRunning = false;

    if (this.watcher) {
      this.watcher.close();
      this.watcher = undefined;
    }

    if (this.tscProcess) {
      this.tscProcess.kill();
      this.tscProcess = undefined;
    }

    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = undefined;
    }

    this.emit('monitor:stop');
  }

  getRecentErrors(): TSCError[] {
    return [...this.recentErrors];
  }

  clearErrors(): void {
    this.recentErrors = [];
    this.emit('errors:clear');
  }

  private setupWatcher(): void {
    const watchPattern = path.join(this.projectRoot, '**/*.ts');
    const ignorePattern = [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/*.d.ts'
    ];

    this.watcher = chokidar.watch(watchPattern, {
      ignored: ignorePattern,
      persistent: true,
      ignoreInitial: true
    });

    this.watcher.on('change', (filePath) => {
      this.emit('file:change', { file: filePath });
      this.scheduleTypeScriptCheck();
    });

    this.watcher.on('add', (filePath) => {
      this.emit('file:add', { file: filePath });
      this.scheduleTypeScriptCheck();
    });

    this.watcher.on('unlink', (filePath) => {
      this.emit('file:unlink', { file: filePath });
      this.scheduleTypeScriptCheck();
    });

    this.watcher.on('error', (error) => {
      this.emit('monitor:error', error);
    });
  }

  private scheduleTypeScriptCheck(): void {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      this.runTypeScriptCheck().catch(error => {
        this.emit('monitor:error', error);
      });
    }, this.debounceMs);
  }

  private async runTypeScriptCheck(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.tscProcess) {
        this.tscProcess.kill();
      }

      const tscPath = this.getTSCPath();
      if (!tscPath) {
        reject(new Error('TypeScript compiler (tsc) not found'));
        return;
      }

      this.tscProcess = spawn(tscPath, ['--noEmit', '--incremental'], {
        cwd: this.projectRoot,
        env: {
          ...process.env,
          FORCE_COLOR: '0' // Disable colors for easier parsing
        }
      });

      let stdout = '';
      let stderr = '';

      this.tscProcess.stdout?.on('data', (data) => {
        stdout += data.toString();
      });

      this.tscProcess.stderr?.on('data', (data) => {
        stderr += data.toString();
      });

      this.tscProcess.on('close', (code) => {
        this.tscProcess = undefined;
        
        if (code === 0) {
          // No errors
          this.clearErrors();
          this.emit('check:success');
        } else {
          // Parse and emit errors
          const errors = this.parseTSCOutput(stdout + stderr);
          this.recentErrors = errors;
          
          errors.forEach(error => {
            this.emit('tsc:error', error);
          });
        }
        
        resolve();
      });

      this.tscProcess.on('error', (error) => {
        this.tscProcess = undefined;
        reject(error);
      });
    });
  }

  private getTSCPath(): string | null {
    // Try to find tsc in node_modules first
    const localTSC = path.join(this.projectRoot, 'node_modules', '.bin', 'tsc');
    if (fs.existsSync(localTSC)) {
      return localTSC;
    }

    // Try global tsc
    try {
      const { spawn } = require('child_process');
      return 'tsc';
    } catch {
      return null;
    }
  }

  private parseTSCOutput(output: string): TSCError[] {
    const errors: TSCError[] = [];
    const lines = output.split('\n');
    
    // TypeScript error pattern: file(line,column): error TS####: message
    const errorPattern = /^(.+)\((\d+),(\d+)\): (error|warning) (TS\d+): (.+)$/;

    for (const line of lines) {
      const match = line.match(errorPattern);
      if (match) {
        const [, file, lineNum, colNum, severity, code, message] = match;
        
        // Convert relative paths to absolute
        const absolutePath = path.resolve(this.projectRoot, file);
        
        errors.push({
          file: absolutePath,
          line: parseInt(lineNum, 10),
          column: parseInt(colNum, 10),
          message: message.trim(),
          code,
          severity: severity as 'error' | 'warning',
          timestamp: Date.now()
        });
      }
    }

    return errors;
  }

  private parseDiagnosticOutput(output: string): TSCError[] {
    // Alternative parsing for newer TypeScript versions
    const errors: TSCError[] = [];
    const diagnosticPattern = /(\S+)\((\d+),(\d+)\):\s+(error|warning)\s+(TS\d+):\s+(.+)/g;
    let match;

    while ((match = diagnosticPattern.exec(output)) !== null) {
      const [, file, line, column, severity, code, message] = match;
      
      errors.push({
        file: path.resolve(this.projectRoot, file),
        line: parseInt(line, 10),
        column: parseInt(column, 10),
        message: message.trim(),
        code,
        severity: severity as 'error' | 'warning',
        timestamp: Date.now()
      });
    }

    return errors;
  }
}