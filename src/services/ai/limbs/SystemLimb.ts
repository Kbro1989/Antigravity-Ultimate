import { NeuralLimb } from './NeuralLimb';
import { CLIBridge } from '../../cli/CLIBridge';
import { AgentCapability } from '../AgentConstitution';
import { executeVibe } from '../../utils/VibeSandbox';

export class SystemLimb extends NeuralLimb {
    private bridge: CLIBridge;

    constructor(config: any) {
        super(config);
        this.bridge = CLIBridge.getInstance();
    }

    async process(intent: any) {
        const { action, command, code, context } = intent;

        await this.logActivity(`system_${action}`, 'pending', { command, code });

        try {
            let result;
            switch (action) {
                case 'execute':
                    this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
                    result = await this.bridge.execute(command);
                    break;
                case 'execute_vibe':
                    this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
                    result = await executeVibe(code, context || {});
                    break;
                case 'stats':
                    this.enforceCapability(AgentCapability.METRIC_ACCESS);
                    result = await this.bridge.execute('systeminfo');
                    break;
                case 'shutdown':
                    this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
                    await this.logActivity('system_shutdown', 'pending');
                    // Send SHUTDOWN signal to CLI bridge
                    await this.bridge.execute('taskkill /f /im node.exe');
                    result = { status: 'terminating', message: 'Core System Shutdown Initiated.' };
                    break;
                case 'restart_worker':
                    this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
                    // Use wrangler to restart if possible
                    result = await this.bridge.execute('npx wrangler dev');
                    break;
                case 'optimize_resources':
                    this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
                    const { purge_temp } = intent;

                    let freedSummary = '0B';
                    if (purge_temp) {
                        try {
                            // Real purge of Windows temp directorires if requested
                            await this.bridge.execute('del /q /s %temp%\\*');
                            await this.bridge.execute('del /q /s C:\\Windows\\Temp\\*');
                            freedSummary = 'Dynamic cleanup performed';
                        } catch (e) {
                            freedSummary = 'Cleanup protocol restricted';
                        }
                    }

                    const sysInfo = await this.bridge.execute('systeminfo');

                    result = {
                        status: 'optimized',
                        memory_freed: freedSummary,
                        timestamp: Date.now(),
                        system_report_snapshot: sysInfo?.substring(0, 500) // Provide real data fragment
                    };
                    break;
                default:
                    throw new Error(`Unknown system action: ${action}`);
            }

            await this.logActivity(`system_${action}`, 'success', { command, code });
            return { status: 'success', data: result };
        } catch (e: any) {
            await this.logActivity(`system_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
    }
}
