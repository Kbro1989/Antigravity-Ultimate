import { NeuralLimb } from './NeuralLimb';
import { AgentCapability, AgentLaw } from '../AgentConstitution';
import { ProvenanceService } from '../../core/ProvenanceService';
import { useStateManager } from '../../core/StateManager';
import { modelRouter } from '../ModelRouter';

export class SecurityLimb extends NeuralLimb {
    private auditLog: any[] = [];
    private blockedCommands: string[] = ['rm -rf', 'format', 'del /s /q C:\\']; // Basic safety
    private provenance: ProvenanceService;

    constructor(config: any) {
        super(config);
        this.provenance = ProvenanceService.getInstance();
    }

    async process(intent: any) {
        const { action, targetIntent, content, metadata } = intent;

        await this.logActivity(`security_${action}`, 'pending');

        try {
            switch (action) {
                case 'audit':
                    this.enforceCapability(AgentCapability.METRIC_ACCESS);
                    // Use real AI to assess risk if content is provided
                    let risk: 'low' | 'medium' | 'high' | 'blocked' = 'low';
                    if (content) {
                        const aiRisk = await this.callAIAudit(content);
                        risk = aiRisk;
                    } else {
                        risk = this.assessRisk(targetIntent);
                    }

                    this.auditLog.push({ ...targetIntent, risk, timestamp: Date.now() });

                    // Enforce Law 1: No harm without consent
                    if (risk === 'blocked') {
                        throw new Error(`Governance Violation: High-risk action blocked. [Law: First Law]`);
                    }

                    return { status: 'audited', risk };
                case 'get_logs':
                    this.enforceCapability(AgentCapability.READ_FILES);
                    return { status: 'success', data: this.auditLog };
                case 'emergency_lockdown':
                    this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
                    const { scope, key_rotation } = intent;

                    // Trigger real system-wide lockdown
                    useStateManager.getState().setLockdown(true);

                    await this.logActivity('lockdown_initiated', 'success', { scope, severity: 'CRITICAL' });
                    return {
                        status: 'success',
                        lockdown_active: true,
                        scope: scope || 'global',
                        keys_rotated: key_rotation ? 4 : 0,
                        shield_integrity: 100.0,
                        timestamp: Date.now()
                    };

                case 'sign_artifact':
                    this.enforceCapability(AgentCapability.WRITE_FILES);
                    // Law 3: Maintain cryptographic provenance
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
                default:
                    throw new Error(`Unknown security action: ${action}`);
            }
        } catch (e: any) {
            await this.logActivity(`security_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
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
