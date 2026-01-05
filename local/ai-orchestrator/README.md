# AI-to-AI Collaborative Orchestrator v7.0

> The Ultimate Free AI Code Editor with Cloudflare & Ollama Integration

[![Version](https://img.shields.io/badge/version-7.0.0-blue.svg)](https://github.com/ai-to-ai/orchestrator)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)

## 🚀 Overview

The AI-to-AI Collaborative Orchestrator v7.0 is a revolutionary free AI code editor that leverages the power of two distinct AI systems working in collaboration. Built on Cloudflare's powerful AI platform and integrated with local Ollama models, this orchestrator provides an intelligent, context-aware development experience that rivals premium AI code editors.

### Key Features

- **🤝 AI-to-AI Collaboration**: Two AI agents negotiate and collaborate on complex coding tasks
- **🔧 Real-time Error Monitoring**: Automatic TypeScript error detection and AI-powered fixing
- **🧠 Bidirectional Shared Memory**: Persistent knowledge base with semantic search capabilities
- **⚡ Cloudflare Integration**: High-performance AI models with optimized performance
- **🏠 Local AI Support**: Ollama integration for privacy and offline development
- **🎯 User Pattern Preservation**: Customizable coding patterns and conventions
- **💻 Terminal-First Design**: Seamless command-line integration

## 🛠 Architecture

The orchestrator is built on a sophisticated architecture that combines:

### Core Components

1. **AI Negotiation Protocol**: Multi-agent planning system for collaborative task execution
2. **TSC Error Monitor**: Real-time TypeScript compilation monitoring
3. **AI Error Responder**: Automated error analysis and fixing
4. **Shared Memory System**: Persistent context and pattern storage
5. **Master Orchestrator**: Central coordination hub

### AI Integration

- **Cloudflare Workers AI**: High-performance cloud-based models (Llama 3.3 70B, Llama 3.1 8B)
- **Ollama**: Local AI models (CodeLlama, Llama 2) for privacy and offline use
- **Dual-AI Negotiation**: Collaborative planning and consensus building

## 📦 Installation

### Prerequisites

- Node.js 18.0 or higher
- TypeScript 5.0 or higher
- Cloudflare account with API access
- Ollama (optional, for local AI models)

### Quick Start

```bash
# Install globally
npm install -g ai-to-ai-collaborative-orchestrator

# Or clone and build from source
git clone https://github.com/ai-to-ai/orchestrator.git
cd ai-orchestrator
npm install
npm run build
```

## 🚀 Getting Started

### 1. Initialize Configuration

```bash
ai-orchestrator init
```

This will guide you through:
- Setting up Cloudflare API credentials
- Configuring Ollama connection
- Setting project preferences
- Creating user coding patterns

### 2. Configure User Patterns

Create a `.ai-patterns.json` file in your project root:

```json
{
  "@UserPattern(naming:camelCase)": {
    "type": "naming",
    "value": "camelCase",
    "description": "Use camelCase for variables and functions",
    "priority": 1
  },
  "@UserPattern(imports:grouped)": {
    "type": "imports",
    "value": "grouped",
    "description": "Group imports: external, internal, relative",
    "priority": 2
  }
}
```

### 3. Start Collaborative Coding

```bash
# Interactive mode
ai-orchestrator start

# Process a single request
ai-orchestrator process "Create a REST API with user authentication"
```

## 💻 Usage Examples

### Basic Requests

```bash
# Create a new feature
ai-orchestrator process "Build a React component for user profiles with TypeScript"

# Refactor existing code
ai-orchestrator process "Refactor the authentication module to use JWT tokens"

# Fix errors automatically
ai-orchestrator process "Fix all TypeScript errors in the src directory"

# Generate documentation
ai-orchestrator process "Generate API documentation for the Express routes"
```

### Advanced Usage

```bash
# Start with custom config
ai-orchestrator start --config ./custom-config.json

# Enable verbose logging
ai-orchestrator process "Create unit tests" --verbose

# Specify project root
ai-orchestrator start --project ./my-project
```

## 🎯 User Patterns

Define your coding conventions in `.ai-patterns.json`:

### Naming Conventions
```json
{
  "@UserPattern(naming:camelCase)": {
    "type": "naming",
    "value": "camelCase",
    "description": "Use camelCase for variables and functions"
  }
}
```

### Import Organization
```json
{
  "@UserPattern(imports:grouped)": {
    "type": "imports",
    "value": "grouped",
    "description": "Group imports: external, internal, relative"
  }
}
```

### Error Handling
```json
{
  "@UserPattern(errorHandling:try-catch)": {
    "type": "errorHandling",
    "value": "try-catch",
    "description": "Wrap code in try-catch blocks with console.error"
  }
}
```

### Logging
```json
{
  "@UserPattern(logging:verbose)": {
    "type": "logging",
    "value": "verbose",
    "description": "Add console.log statements on function entry and exit"
  }
}
```

### Documentation
```json
{
  "@UserPattern(comments:jsdoc)": {
    "type": "comments",
    "value": "jsdoc",
    "description": "Use JSDoc comments for public functions"
  }
}
```

### Testing
```json
{
  "@UserPattern(tests:always)": {
    "type": "tests",
    "value": "always",
    "description": "Generate test files for all new modules"
  }
}
```

## 🔧 Configuration

### Configuration File Structure

```json
{
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
    "root": "/path/to/project",
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
}
```

### Environment Variables

```bash
# Cloudflare
CLOUDFLARE_ACCOUNT_ID=your-account-id
CLOUDFLARE_API_TOKEN=your-api-token

# Ollama
OLLAMA_BASE_URL=http://localhost:11434
```

## 🧠 How It Works

### 1. AI Negotiation Protocol

When you submit a request:
1. **Cloudflare AI** analyzes the request using high-performance models
2. **Ollama AI** provides local context and code-specific insights
3. Both AIs negotiate a collaborative plan
4. Consensus is reached with confidence scoring

### 2. Collaborative Execution

1. **Work Distribution**: Tasks are assigned based on AI capabilities
2. **Real-time Monitoring**: TSC errors are detected immediately
3. **Automated Fixing**: AI collaborates to fix errors automatically
4. **Pattern Enforcement**: User-defined patterns are applied consistently

### 3. Knowledge Preservation

1. **Shared Memory**: All interactions are stored semantically
2. **Context Awareness**: Previous decisions inform future actions
3. **Pattern Learning**: AI learns from user preferences over time

## 🚀 Advanced Features

### Real-time Error Monitoring

```typescript
// Errors are detected and fixed automatically
const errorMonitor = new TSCErrorMonitor('./project');
await errorMonitor.start();

// AI responds to errors immediately
errorMonitor.on('tsc:error', (error) => {
  // AI analyzes and fixes the error
});
```

### Semantic Search

```typescript
// Search through collaboration history
const results = await sharedMemory.search(
  "authentication implementation",
  'collaboration',
  5
);
```

### Custom AI Models

```typescript
// Use different models for different tasks
const response = await cloudflareAI.generateResponse(prompt, {
  model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
});
```

## 📊 Performance Optimization

### Free Tier Optimization

- **Rate Limiting**: Intelligent request management
- **Caching**: Response caching with configurable TTL
- **Model Selection**: Automatic model tiering based on task complexity
- **Token Efficiency**: Optimized prompt and response handling

### Best Practices

1. **Use Specific Patterns**: Define clear coding conventions
2. **Monitor Memory**: Regular memory compaction for optimal performance
3. **Leverage Caching**: Enable gateway caching for repeated tasks
4. **Choose Right Models**: Use smaller models for simple tasks

## 🔍 Monitoring & Debugging

### Logging

```bash
# Enable verbose logging
ai-orchestrator start --verbose

# View recent logs
ai-orchestrator status
```

### Event Tracking

```typescript
// Listen to orchestrator events
orchestrator.on('negotiation:start', (data) => {
  console.log('AI negotiation started');
});

orchestrator.on('error:fixed', (data) => {
  console.log('Error automatically fixed');
});
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/ai-to-ai/orchestrator.git
cd ai-orchestrator
npm install
npm run dev
```

### Testing

```bash
npm test
npm run lint
npm run format
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Cloudflare**: For providing powerful AI infrastructure
- **Ollama**: For making local AI accessible
- **TypeScript Community**: For excellent tooling and support
- **Open Source Contributors**: For making this project possible

## 📚 Documentation

- [API Reference](docs/api.md)
- [Architecture Guide](docs/architecture.md)
- [User Patterns Guide](docs/patterns.md)
- [Troubleshooting](docs/troubleshooting.md)

## 🔗 Links

- [GitHub Repository](https://github.com/ai-to-ai/orchestrator)
- [Issues](https://github.com/ai-to-ai/orchestrator/issues)
- [Discussions](https://github.com/ai-to-ai/orchestrator/discussions)
- [Releases](https://github.com/ai-to-ai/orchestrator/releases)

---

Made with ❤️ by the AI-to-AI Collaborative Team