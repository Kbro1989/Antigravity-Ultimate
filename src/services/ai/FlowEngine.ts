/**
 * FlowEngine.ts
 * Integrates Cloudflare Workflows for resilient, multi-step AI operations.
 * Ported/Inspired by workflows-starter-template.
 */

export interface FlowStep {
    id: string;
    type: 'inference' | 'code' | 'sleep' | 'wait';
    payload: any;
}

export class FlowEngine {
    private static instance: FlowEngine;

    public static getInstance() {
        if (!FlowEngine.instance) {
            FlowEngine.instance = new FlowEngine();
        }
        return FlowEngine.instance;
    }

    /**
     * Triggers a Cloudflare Workflow instance.
     * @note This is a stub for the client side. The actual execution happens via the Worker.
     */
    public async triggerWorkflow(name: string, steps: FlowStep[]) {
        console.log(`[FlowEngine] Triggering workflow: ${name}`, steps);

        // In a real implementation, this would call:
        // await env.MY_WORKFLOW.create({ params: { steps } });

        return {
            instanceId: `flow_${Date.now()}`,
            status: 'queued',
            trackingUrl: `/api/workflow/status/${name}`
        };
    }

    /**
     * Executes a single step within a workflow context.
     * Mimics the step.do behavior from Cloudflare Workflows.
     */
    public async runStep(stepId: string, action: () => Promise<any>) {
        console.log(`[FlowEngine] Entering step.do: ${stepId}`);
        try {
            const result = await action();
            console.log(`[FlowEngine] Step ${stepId} completed.`);
            return result;
        } catch (error) {
            console.error(`[FlowEngine] Step ${stepId} failed:`, error);
            throw error;
        }
    }
}

export default FlowEngine;
