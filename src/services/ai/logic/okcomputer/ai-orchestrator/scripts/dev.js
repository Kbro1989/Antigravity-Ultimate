#!/usr/bin/env node

/**
 * Development script for the AI-to-AI Collaborative Orchestrator
 */

import { spawn } from 'child_process';
import { Logger } from '../src/utils/logger.js';

const logger = new Logger('Dev');

function startDevelopment(): void {
  logger.info('Starting development mode...');

  // Use tsx to run TypeScript directly
  const child = spawn('npx', ['tsx', 'watch', 'src/cli.ts', 'start'], {
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'development'
    }
  });

  child.on('close', (code) => {
    logger.info(`Development server stopped with code ${code}`);
    process.exit(code || 0);
  });

  child.on('error', (error) => {
    logger.error('Failed to start development server', error);
    process.exit(1);
  });

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    logger.info('Received SIGINT, shutting down development server...');
    child.kill('SIGINT');
  });

  process.on('SIGTERM', () => {
    logger.info('Received SIGTERM, shutting down development server...');
    child.kill('SIGTERM');
  });
}

// Run development mode
startDevelopment();