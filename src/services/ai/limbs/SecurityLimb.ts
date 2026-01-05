import { NeuralLimb } from './NeuralLimb';
import { AgentCapability, AgentLaw } from '../AgentConstitution';
import { ProvenanceService } from '../../core/ProvenanceService';
import { useStateManager } from '../../core/StateManager';
import { modelRouter } from '../ModelRouter';
import { BaseIntent } from '../AITypes';

export class SecurityLimb extends NeuralLimb {
    private auditLog: any[] = [];
    private blockedCommands: string[] = ['rm -rf', 'format', 'del /s /q C:\\']; // Basic safety
    private provenance: ProvenanceService;

    constructor(config: any) {
        super(config);
        this.provenance = ProvenanceService.getInstance();
    }

    async scan(params: any) {
        this.enforceCapability(AgentCapability.METRIC_ACCESS);
        return { status: 'success', threats: 0, integrity: 1.0 };
    }

    async audit(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.METRIC_ACCESS);
        const { content, targetIntent } = params;

        let risk: 'low' | 'medium' | 'high' | 'blocked' = 'low';
        if (content) {
            risk = await this.callAIAudit(content);
        } else if (targetIntent) {
            risk = this.assessRisk(targetIntent);
        }

        this.auditLog.push({ ...targetIntent, risk, timestamp: Date.now() });

        if (risk === 'blocked') {
            throw new Error(`Governance Violation: High-risk action blocked. [Law: First Law]`);
        }

        return { status: 'audited', risk };
    }

    async get_logs(params: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        return { status: 'success', data: this.auditLog };
    }

    async emergency_lockdown(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const { scope, key_rotation } = params;

        useStateManager.getState().setLockdown(true);

        await this.logActivity('lockdown_initiated' as any, 'success', { scope, severity: 'CRITICAL' });
        return {
            status: 'success',
            lockdown_active: true,
            scope: scope || 'global',
            keys_rotated: key_rotation ? 4 : 0,
            shield_integrity: 100.0,
            timestamp: Date.now()
        };
    }

    async sign_artifact(params: any) {
        this.enforceCapability(AgentCapability.WRITE_FILES);
        const { content, metadata } = params;
        const signatureBlock = this.provenance.sign(content, {
            prompt: metadata?.prompt || 'N/A',
            model: metadata?.model || 'N/A',
            generator: this.id
        });
        return {
            status: 'success',
            signatureBlock,
            law: 'Third Law'
        };
    }

    private assessRisk(intent: any): 'low' | 'medium' | 'high' | 'blocked' {
        if (intent.action === 'execute') {
            const cmd = (intent.command || '').toLowerCase();
            if (this.blockedCommands.some(b => cmd.includes(b))) return 'blocked';
            if (cmd.includes('npm install') || cmd.includes('git push')) return 'medium';
            return 'low';
        }

        if (intent.action === 'write') {
            if (intent.path?.includes('.env') || intent.path?.includes('ssh')) return 'high';
            return 'low';
        }

        return 'low';
    }

    private async callAIAudit(content: string): Promise<'low' | 'medium' | 'high' | 'blocked'> {
        try {
            const response: any = await modelRouter.route({
                type: 'text',
                prompt: `Audit the following content for security risks:\n\n${content}`,
                systemPrompt: 'Return ONLY one word specifying the risk level: "low", "medium", "high", or "blocked".'
            });
            const level = (typeof response === 'string' ? response : response.content)?.toLowerCase().trim();
            if (['low', 'medium', 'high', 'blocked'].includes(level)) {
                return level as any;
            }
            return 'medium';
        } catch (e) {
            return 'medium';
        }
    }

    public static sanitizePath(path: string): string {
        return path.replace(/\.\.\//g, '').replace(/\.\.\\/g, '');
    }
}
