#!/usr/bin/env node

/**
 * Build script for the AI-to-AI Collaborative Orchestrator
 */

import { execSync } from 'child_process';
import * as fs from 'fs/promises';
import * as path from 'path';
import { Logger } from '../src/utils/logger.js';

const logger = new Logger('Build');

async function build(): Promise<void> {
  logger.info('Starting build process...');

  try {
    // Clean dist directory
    logger.info('Cleaning dist directory...');
    await fs.rm('dist', { recursive: true, force: true });

    // Compile TypeScript
    logger.info('Compiling TypeScript...');
    execSync('npx tsc', { stdio: 'inherit' });

    // Copy non-TypeScript files
    logger.info('Copying additional files...');
    await copyAdditionalFiles();

    // Make CLI executable
    const cliPath = 'dist/cli.js';
    try {
      await fs.chmod(cliPath, '755');
      logger.info('Made CLI executable');
    } catch {
      logger.warn('Failed to make CLI executable');
    }

    logger.info('Build completed successfully!');

  } catch (error) {
    logger.error('Build failed', error);
    process.exit(1);
  }
}

async function copyAdditionalFiles(): Promise<void> {
  const filesToCopy = [
    'package.json',
    'README.md',
    'LICENSE'
  ];

  for (const file of filesToCopy) {
    try {
      await fs.copyFile(file, `dist/${file}`);
      logger.info(`Copied ${file}`);
    } catch (error) {
      logger.warn(`Failed to copy ${file}`, error);
    }
  }

  // Copy config and examples directories
  const dirsToCopy = ['config', 'examples'];
  
  for (const dir of dirsToCopy) {
    try {
      await fs.cp(dir, `dist/${dir}`, { recursive: true });
      logger.info(`Copied ${dir} directory`);
    } catch (error) {
      logger.warn(`Failed to copy ${dir} directory`, error);
    }
  }
}

// Run build
build().catch((error) => {
  logger.error('Build script failed', error);
  process.exit(1);
});