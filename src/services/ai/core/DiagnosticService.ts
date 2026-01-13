
import { EventEmitter } from 'events';
import { TSCError } from '../orchestrator/types';
import { nexusBus } from '../../core/NexusCommandBus';

export class DiagnosticService extends EventEmitter {
    private errors: TSCError[] = [];

    /**
     * Reports a diagnostic error to the system.
     * Replaces the logic from the CLI's tsc-monitor.
     */
    reportError(error: TSCError) {
        this.errors.push(error);

        nexusBus.dispatchEvent('system:diagnostic', {
            type: 'error',
            message: `Diagnostic Failure: ${error.message} in ${error.file}`,
            data: error,
            source: 'DiagnosticService'
        });

        this.emit('diagnostic:error', error);
    }

    getActiveErrors(): TSCError[] {
        return this.errors;
    }

    clearErrors() {
        this.errors = [];
    }

    /**
     * Integrates with Cloud project's telemetry to broadcast health state.
     */
    broadcastHealth() {
        const health = this.errors.length === 0 ? 'NOMINAL' : 'DEGRADED';
        nexusBus.dispatchEvent('brain:activity', {
            type: 'health_check',
            message: `System Health: ${health} (${this.errors.length} issues)`,
            source: 'DiagnosticService'
        });
    }
}

export const diagnosticService = new DiagnosticService();
