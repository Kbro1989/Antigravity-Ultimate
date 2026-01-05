import { modeManager } from '../core/ModeManager';
import { cloudflareProvider } from './providers/CloudflareProvider';
import { ollamaProvider } from './providers/OllamaProvider';
import { costOptimizer } from './CostOptimizer';

/**
 * Orchestrator - The Brain of POG AI
 * Decoupled routing of all AI intents
 */
export const runOrchestration = async (prompt: string, history: any[] = []) => {
    return modeManager.routeRequest({ prompt, history });
};

export const codeComplete = async (prefix: string, suffix: string, filename: string) => {
    // Check mode
    const { mode } = (await import('../core/StateManager')).useStateManager.getState();

    if (mode === 'offline') {
        return ollamaProvider.codeComplete(prefix, suffix);
    }

    return cloudflareProvider.codeCompletion({ prefix, suffix, filename });
};

export const refactorCode = async (code: string, filename: string) => {
    const prompt = `Refactor the following code in ${filename}:\n\n${code}`;
    return runOrchestration(prompt);
};

export const auditCode = async (code: string, filename: string) => {
    const prompt = `Audit the following code for security and performance issues in ${filename}:\n\n${code}`;
    return runOrchestration(prompt);
};
