/**
 * Main entry point for the AI-to-AI Collaborative Orchestrator
 */

import { CollaborativeAIOrchestrator } from './core/orchestrator.js';
import { Logger } from './utils/logger.js';
import { ConfigurationManager } from './utils/config-manager.js';

const logger = new Logger('Main');

async function main(): Promise<void> {
  logger.info('AI-to-AI Collaborative Orchestrator v7.0 starting...');

  try {
    // Parse command line arguments
    const args = process.argv.slice(2);
    const configPath = args.find(arg => arg.startsWith('--config='))?.split('=')[1];
    const verbose = args.includes('--verbose') || args.includes('-v');

    if (verbose) {
      Logger.getInstance().setLevel(0); // DEBUG level
    }

    // Initialize orchestrator
    const orchestrator = new CollaborativeAIOrchestrator(configPath);
    await orchestrator.initialize();

    logger.info('Orchestrator started successfully');
    logger.info('Use the CLI for interactive mode: npx ai-orchestrator start');

    // Keep the process running
    process.on('SIGINT', async () => {
      logger.info('Received SIGINT, shutting down gracefully...');
      await orchestrator.shutdown();
      process.exit(0);
    });

    process.on('SIGTERM', async () => {
      logger.info('Received SIGTERM, shutting down gracefully...');
      await orchestrator.shutdown();
      process.exit(0);
    });

  } catch (error) {
    logger.error('Failed to start orchestrator', error);
    process.exit(1);
  }
}

// Handle uncaught errors
process.on('uncaughtException', (error) => {
  logger.error('Uncaught exception', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled rejection', { reason, promise });
  process.exit(1);
});

// Start the application
main().catch((error) => {
  logger.error('Main function failed', error);
  process.exit(1);
});