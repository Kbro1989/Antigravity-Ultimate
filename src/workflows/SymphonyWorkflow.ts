
import { WorkflowEntrypoint, WorkflowEvent, WorkflowStep } from 'cloudflare:workers';
import { SymphonyParser, ParsedWorkflow } from '../services/symphony/SymphonyParser';
import type { Env } from '../types/env';

export type SymphonyParams = {
    workflowId?: string;
    workflowContent?: string;
    params?: Record<string, string>;
    sessionId?: string;
};

export class SymphonyWorkflow extends WorkflowEntrypoint<Env, SymphonyParams> {
    async run(event: WorkflowEvent<SymphonyParams>, step: WorkflowStep) {
        const { workflowId, workflowContent, sessionId = 'default' } = event.payload;

        // Step 1: Fetch Workflow Definition
        const markdown = await step.do('fetch-workflow', async () => {
            if (workflowContent) return workflowContent;
            if (workflowId) {
                const stored = await this.env.BRAIN.get(`workflow:${workflowId}`);
                if (!stored) throw new Error(`Workflow ${workflowId} not found`);
                return stored;
            }
            throw new Error('No workflow provided');
        }) as any;

        // Step 2: Parse
        const parsed: ParsedWorkflow = SymphonyParser.parse(markdown);

        // Step 3: Execute Steps
        const results = [];
        for (const workflowStep of parsed.steps) {
            const stepResult = await step.do(`exec:${workflowStep.id}`, async () => {
                console.log(`[Symphony] Executing ${workflowStep.name}`);

                // Connect to the Session Agent
                const id = this.env.SESSION_AGENT.idFromName(sessionId);
                const stub = this.env.SESSION_AGENT.get(id);

                // Execute the intent via the agent
                const response = await stub.fetch(`http://agent/ai/process`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: workflowStep.action,
                        payload: workflowStep.params
                    })
                });

                if (!response.ok) throw new Error(`Agent failed step ${workflowStep.id}: ${response.statusText}`);

                return await response.json() as any;
            });
            results.push(stepResult);
        }

        return { success: true, executedSteps: parsed.steps.length, results };
    }
}
