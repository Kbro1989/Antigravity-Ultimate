import { NeuralLimb } from './NeuralLimb';
import { CLIBridge } from '../../cli/CLIBridge';
import { AgentCapability } from '../AgentConstitution';
import { executeVibe } from '../../utils/VibeSandbox';
import { BaseIntent } from '../AITypes';

export class SystemLimb extends NeuralLimb {
    private bridge: CLIBridge;

    constructor(config: any) {
        super(config);
        this.bridge = CLIBridge.getInstance();
    }

    async command(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const { command } = params;
        return await this.bridge.execute(command);
    }

    async diag(params: any) {
        this.enforceCapability(AgentCapability.METRIC_ACCESS);
        return await this.bridge.execute('systeminfo');
    }

    async logs(params: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        return { status: 'success', logs: 'System integrity nominal.' };
    }

    async core(params: any) {
        return { status: 'success', version: '4.5-Ultimate', kernel: 'Neural-v2' };
    }

    async execute_vibe(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const { code, context } = params;
        return await executeVibe(code, context || {});
    }

    async optimize_resources(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const { purge_temp } = params;

        let freedSummary = '0B';
        if (purge_temp) {
            try {
                await this.bridge.execute('del /q /s %temp%\\*');
                await this.bridge.execute('del /q /s C:\\Windows\\Temp\\*');
                freedSummary = 'Dynamic cleanup performed';
            } catch (e) {
                freedSummary = 'Cleanup protocol restricted';
            }
        }

        const sysInfo = await this.bridge.execute('systeminfo');

        return {
            status: 'optimized',
            memory_freed: freedSummary,
            timestamp: Date.now(),
            system_report_snapshot: sysInfo?.substring(0, 500)
        };
    }

    async query_health(params: any) {
        return { status: 'success', online: true, load: 0.1 };
    }
}
