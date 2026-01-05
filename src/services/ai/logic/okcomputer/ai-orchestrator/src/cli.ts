#!/usr/bin/env node

/**
 * CLI interface for the AI-to-AI Collaborative Orchestrator
 */

import { Command } from 'commander';
import * as chalk from 'chalk';
import * as inquirer from 'inquirer';
import * as ora from 'ora';
import { CollaborativeAIOrchestrator } from './core/orchestrator.js';
import { Logger, LogLevel } from './utils/logger.js';
import { ConfigurationManager } from './utils/config-manager.js';

const program = new Command();
const logger = new Logger('CLI');

// Main CLI setup
program
  .name('ai-orchestrator')
  .description('AI-to-AI Collaborative Orchestrator v7.0 - The Ultimate Free AI Code Editor')
  .version('7.0.0');

// Initialize command
program
  .command('init')
  .description('Initialize orchestrator configuration')
  .option('-p, --project <path>', 'Project root path', process.cwd())
  .option('-f, --force', 'Force overwrite existing config')
  .action(async (options) => {
    const spinner = ora('Initializing orchestrator configuration...').start();
    
    try {
      const configManager = new ConfigurationManager();
      
      // Check if config already exists
      try {
        await configManager.loadConfig();
        if (!options.force) {
          spinner.fail('Configuration already exists. Use --force to overwrite.');
          process.exit(1);
        }
      } catch {
        // Config doesn't exist, which is fine
      }

      // Create interactive setup
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'cloudflareAccountId',
          message: 'Enter your Cloudflare Account ID:',
          validate: (input) => input.length > 0 || 'Account ID is required'
        },
        {
          type: 'password',
          name: 'cloudflareApiToken',
          message: 'Enter your Cloudflare API Token:',
          validate: (input) => input.length > 0 || 'API Token is required'
        },
        {
          type: 'input',
          name: 'ollamaBaseUrl',
          message: 'Enter Ollama base URL:',
          default: 'http://localhost:11434'
        },
        {
          type: 'confirm',
          name: 'autoFix',
          message: 'Enable automatic error fixing?',
          default: true
        }
      ]);

      // Create configuration
      const config = configManager.getDefaultConfig ? 
        configManager.getDefaultConfig() : 
        await configManager.loadConfig();

      // Update with user input
      config.cloudflare.accountId = answers.cloudflareAccountId;
      config.cloudflare.apiToken = answers.cloudflareApiToken;
      config.ollama.baseUrl = answers.ollamaBaseUrl;
      config.project.autoFix = answers.autoFix;
      config.project.root = options.project;

      configManager.updateConfig(config);
      await configManager.saveConfig();

      // Create example patterns file
      const patternsPath = path.join(options.project, '.ai-patterns.json');
      const patterns = {
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
        }
      };

      await fs.writeFile(patternsPath, JSON.stringify(patterns, null, 2));

      spinner.succeed('Orchestrator initialized successfully!');
      
      console.log(chalk.green('\n✅ Configuration created!'));
      console.log(chalk.blue('\nNext steps:'));
      console.log('1. Review the configuration file');
      console.log('2. Customize .ai-patterns.json for your coding style');
      console.log('3. Run "ai-orchestrator start" to begin collaborative coding');

    } catch (error) {
      spinner.fail('Failed to initialize orchestrator');
      logger.error('Initialization failed', error);
      process.exit(1);
    }
  });

// Start command
program
  .command('start')
  .description('Start the orchestrator in interactive mode')
  .option('-p, --project <path>', 'Project root path', process.cwd())
  .option('-c, --config <path>', 'Configuration file path')
  .option('-v, --verbose', 'Enable verbose logging')
  .action(async (options) => {
    const spinner = ora('Starting AI-to-AI Collaborative Orchestrator...').start();
    
    try {
      // Set log level
      if (options.verbose) {
        Logger.getInstance().setLevel(LogLevel.DEBUG);
      }

      // Initialize orchestrator
      const orchestrator = new CollaborativeAIOrchestrator(options.config);
      await orchestrator.initialize();

      // Start error monitor
      await orchestrator.startErrorMonitor();

      spinner.succeed('Orchestrator started successfully!');

      console.log(chalk.green('\n🚀 AI-to-AI Collaborative Orchestrator v7.0'));
      console.log(chalk.blue('Ready for collaborative coding!\n'));

      // Setup event handlers for real-time feedback
      orchestrator.on('negotiation:start', () => {
        console.log(chalk.yellow('🤝 AI negotiation started...'));
      });

      orchestrator.on('negotiation:end', (data) => {
        console.log(chalk.green(`✅ Negotiation completed with ${data.consensusConfidence.toFixed(2)} confidence`));
      });

      orchestrator.on('building:start', () => {
        console.log(chalk.blue('🏗️  Collaborative building phase...'));
      });

      orchestrator.on('tsc:error', (error) => {
        console.log(chalk.red(`❌ TypeScript error: ${error.code} in ${error.file}:${error.line}`));
      });

      orchestrator.on('error:fixed', (data) => {
        console.log(chalk.green(`🔧 Fixed error in ${data.error.file}:${data.error.line}`));
      });

      // Start interactive mode
      await startInteractiveMode(orchestrator);

    } catch (error) {
      spinner.fail('Failed to start orchestrator');
      logger.error('Startup failed', error);
      process.exit(1);
    }
  });

// Process command
program
  .command('process <request>')
  .description('Process a single user request')
  .option('-p, --project <path>', 'Project root path', process.cwd())
  .option('-c, --config <path>', 'Configuration file path')
  .option('-o, --output <format>', 'Output format (json|table)', 'table')
  .action(async (request, options) => {
    const spinner = ora('Processing request...').start();
    
    try {
      const orchestrator = new CollaborativeAIOrchestrator(options.config);
      await orchestrator.initialize();

      spinner.text = 'AI agents are negotiating...';
      const result = await orchestrator.processUserRequest(request);

      if (result.success) {
        spinner.succeed('Request processed successfully!');
        
        if (options.output === 'json') {
          console.log(JSON.stringify(result, null, 2));
        } else {
          displayResults(result);
        }
      } else {
        spinner.fail('Request processing failed');
        process.exit(1);
      }

      await orchestrator.shutdown();

    } catch (error) {
      spinner.fail('Request processing failed');
      logger.error('Processing failed', error);
      process.exit(1);
    }
  });

// Config command
program
  .command('config')
  .description('Manage orchestrator configuration')
  .option('--show', 'Show current configuration')
  .option('--edit', 'Edit configuration interactively')
  .option('--reset', 'Reset to default configuration')
  .action(async (options) => {
    const configManager = new ConfigurationManager();
    
    try {
      if (options.show) {
        const config = await configManager.loadConfig();
        console.log(chalk.blue('Current configuration:'));
        console.log(JSON.stringify(config, null, 2));
      } else if (options.edit) {
        const config = await configManager.loadConfig();
        
        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: 'cloudflareAccountId',
            message: 'Cloudflare Account ID:',
            default: config.cloudflare.accountId
          },
          {
            type: 'password',
            name: 'cloudflareApiToken',
            message: 'Cloudflare API Token:',
            default: config.cloudflare.apiToken
          },
          {
            type: 'input',
            name: 'ollamaBaseUrl',
            message: 'Ollama Base URL:',
            default: config.ollama.baseUrl
          },
          {
            type: 'confirm',
            name: 'autoFix',
            message: 'Enable automatic error fixing?',
            default: config.project.autoFix
          }
        ]);

        config.cloudflare.accountId = answers.cloudflareAccountId;
        config.cloudflare.apiToken = answers.cloudflareApiToken;
        config.ollama.baseUrl = answers.ollamaBaseUrl;
        config.project.autoFix = answers.autoFix;

        configManager.updateConfig(config);
        await configManager.saveConfig();
        
        console.log(chalk.green('✅ Configuration updated successfully!'));
      } else if (options.reset) {
        const { confirm } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'confirm',
            message: 'Are you sure you want to reset the configuration?',
            default: false
          }
        ]);

        if (confirm) {
          const defaultConfig = configManager.getDefaultConfig();
          configManager.updateConfig(defaultConfig);
          await configManager.saveConfig();
          console.log(chalk.green('✅ Configuration reset to defaults!'));
        }
      } else {
        console.log(chalk.yellow('Please specify an action: --show, --edit, or --reset'));
      }
    } catch (error) {
      logger.error('Configuration operation failed', error);
      process.exit(1);
    }
  });

// Patterns command
program
  .command('patterns')
  .description('Manage user coding patterns')
  .option('--list', 'List all patterns')
  .option('--add', 'Add a new pattern')
  .option('--remove <type>', 'Remove a pattern by type')
  .action(async (options) => {
    const patternsPath = path.join(process.cwd(), '.ai-patterns.json');
    
    try {
      if (options.list) {
        const patterns = await loadPatterns(patternsPath);
        console.log(chalk.blue('User coding patterns:'));
        
        for (const [key, pattern] of Object.entries(patterns)) {
          console.log(chalk.yellow(`\n${key}:`));
          console.log(`  Type: ${pattern.type}`);
          console.log(`  Value: ${pattern.value}`);
          console.log(`  Description: ${pattern.description}`);
          console.log(`  Priority: ${pattern.priority}`);
        }
      } else if (options.add) {
        const answers = await inquirer.prompt([
          {
            type: 'list',
            name: 'type',
            message: 'Pattern type:',
            choices: ['naming', 'imports', 'errorHandling', 'logging', 'comments', 'tests']
          },
          {
            type: 'input',
            name: 'value',
            message: 'Pattern value:',
            validate: (input) => input.length > 0 || 'Value is required'
          },
          {
            type: 'input',
            name: 'description',
            message: 'Pattern description:',
            validate: (input) => input.length > 0 || 'Description is required'
          },
          {
            type: 'number',
            name: 'priority',
            message: 'Pattern priority (lower = higher priority):',
            default: 1,
            validate: (input) => input > 0 || 'Priority must be positive'
          }
        ]);

        const patterns = await loadPatterns(patternsPath);
        const key = `@UserPattern(${answers.type}:${answers.value})`;
        
        patterns[key] = {
          type: answers.type,
          value: answers.value,
          description: answers.description,
          priority: answers.priority
        };

        await savePatterns(patternsPath, patterns);
        console.log(chalk.green(`✅ Pattern added: ${key}`));
      } else if (options.remove) {
        const patterns = await loadPatterns(patternsPath);
        const patternKeys = Object.keys(patterns).filter(key => 
          key.includes(`(${options.remove}:`)
        );

        if (patternKeys.length === 0) {
          console.log(chalk.yellow(`No patterns found for type: ${options.remove}`));
          return;
        }

        const { keyToRemove } = await inquirer.prompt([
          {
            type: 'list',
            name: 'keyToRemove',
            message: 'Select pattern to remove:',
            choices: patternKeys
          }
        ]);

        delete patterns[keyToRemove];
        await savePatterns(patternsPath, patterns);
        console.log(chalk.green(`✅ Pattern removed: ${keyToRemove}`));
      } else {
        console.log(chalk.yellow('Please specify an action: --list, --add, or --remove'));
      }
    } catch (error) {
      logger.error('Pattern operation failed', error);
      process.exit(1);
    }
  });

// Status command
program
  .command('status')
  .description('Show orchestrator status')
  .action(async () => {
    console.log(chalk.blue('AI-to-AI Collaborative Orchestrator Status'));
    console.log(chalk.gray('============================================'));
    
    // Check Cloudflare connection
    console.log(chalk.yellow('\n🔌 Cloudflare AI:'));
    // TODO: Implement actual status check
    console.log(chalk.gray('   Status: Unknown (not implemented)'));
    
    // Check Ollama connection
    console.log(chalk.yellow('\n🏠 Ollama:'));
    // TODO: Implement actual status check
    console.log(chalk.gray('   Status: Unknown (not implemented)'));
    
    // Show config info
    console.log(chalk.yellow('\n⚙️  Configuration:'));
    const configManager = new ConfigurationManager();
    try {
      const config = await configManager.loadConfig();
      console.log(chalk.gray(`   Project root: ${config.project.root}`));
      console.log(chalk.gray(`   Auto-fix: ${config.project.autoFix}`));
      console.log(chalk.gray(`   Max error iterations: ${config.project.maxErrorIterations}`));
    } catch {
      console.log(chalk.red('   Configuration not found'));
    }
    
    // Show patterns
    console.log(chalk.yellow('\n📝 User Patterns:'));
    const patternsPath = path.join(process.cwd(), '.ai-patterns.json');
    try {
      const patterns = await loadPatterns(patternsPath);
      console.log(chalk.gray(`   Total patterns: ${Object.keys(patterns).length}`));
    } catch {
      console.log(chalk.red('   Patterns file not found'));
    }
  });

// Helper functions
async function startInteractiveMode(orchestrator: CollaborativeAIOrchestrator): Promise<void> {
  console.log(chalk.blue('\n🎯 Interactive Mode'));
  console.log(chalk.gray('Type your coding request or "exit" to quit'));
  
  while (true) {
    const { request } = await inquirer.prompt([
      {
        type: 'input',
        name: 'request',
        message: chalk.cyan('🤖 What would you like to build?'),
        validate: (input) => input.trim().length > 0 || 'Please enter a request'
      }
    ]);

    if (request.toLowerCase() === 'exit') {
      console.log(chalk.yellow('👋 Goodbye!'));
      await orchestrator.shutdown();
      process.exit(0);
    }

    const spinner = ora('AI agents are collaborating...').start();
    
    try {
      const result = await orchestrator.processUserRequest(request);
      
      if (result.success) {
        spinner.succeed('Request completed!');
        displayResults(result);
      } else {
        spinner.fail('Request failed');
      }
    } catch (error) {
      spinner.fail('Request failed');
      logger.error('Interactive mode error', error);
    }
  }
}

function displayResults(result: any): void {
  console.log(chalk.green('\n📊 Results:'));
  console.log(chalk.gray('============'));
  
  console.log(chalk.blue(`\n✅ Success: ${result.success}`));
  console.log(chalk.blue(`🎯 Confidence: ${(result.consensusConfidence * 100).toFixed(1)}%`));
  console.log(chalk.blue(`📁 Files created: ${result.filesCreated.length}`));
  console.log(chalk.blue(`📝 Files modified: ${result.filesModified.length}`));
  console.log(chalk.blue(`🔧 Errors fixed: ${result.errorsFixed}`));
  
  if (result.filesCreated.length > 0) {
    console.log(chalk.green('\n📁 Created files:'));
    result.filesCreated.forEach((file: string) => {
      console.log(chalk.gray(`   + ${file}`));
    });
  }
  
  if (result.filesModified.length > 0) {
    console.log(chalk.yellow('\n📝 Modified files:'));
    result.filesModified.forEach((file: string) => {
      console.log(chalk.gray(`   ~ ${file}`));
    });
  }
  
  console.log(chalk.cyan('\n📋 Build Notes:'));
  console.log(chalk.gray(result.buildNotes.summary));
  
  if (result.buildNotes.recommendations.length > 0) {
    console.log(chalk.magenta('\n💡 Recommendations:'));
    result.buildNotes.recommendations.forEach((rec: string) => {
      console.log(chalk.gray(`   • ${rec}`));
    });
  }
}

async function loadPatterns(patternsPath: string): Promise<any> {
  try {
    const content = await fs.readFile(patternsPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return {};
    }
    throw error;
  }
}

async function savePatterns(patternsPath: string, patterns: any): Promise<void> {
  const dir = path.dirname(patternsPath);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(patternsPath, JSON.stringify(patterns, null, 2));
}

// Error handling
process.on('unhandledRejection', (error) => {
  logger.error('Unhandled rejection', error);
  process.exit(1);
});

process.on('SIGINT', () => {
  console.log(chalk.yellow('\n\n👋 Interrupted by user'));
  process.exit(0);
});

// Run the CLI
program.parse();