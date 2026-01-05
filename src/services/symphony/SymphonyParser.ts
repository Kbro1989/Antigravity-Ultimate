import { AIIntent } from '../../types';

export interface WorkflowStep {
    id: string;
    name: string;
    description: string;
    toolPattern?: string;
    action?: string;
    params?: Record<string, any>;
    autoExecute?: boolean;
}

export interface ParsedWorkflow {
    id: string;
    name: string;
    description: string;
    steps: WorkflowStep[];
    triggers?: string[];
}

export class SymphonyParser {
    static parse(markdown: string): ParsedWorkflow {
        const lines = markdown.split('\n');
        const metadata: Record<string, string> = {};
        const steps: WorkflowStep[] = [];
        let parsingFrontmatter = false;
        let currentStep: Partial<WorkflowStep> | null = null;

        for (let line of lines) {
            const trimmed = line.trim();

            // Frontmatter Parsing (YAML-like)
            if (trimmed === '---') {
                parsingFrontmatter = !parsingFrontmatter;
                continue;
            }
            if (parsingFrontmatter) {
                const [key, ...values] = trimmed.split(':');
                if (key && values) {
                    metadata[key.trim()] = values.join(':').trim();
                }
                continue;
            }

            // Step Parsing (H2 or H3 usually)
            if (trimmed.startsWith('## ')) {
                if (currentStep && currentStep.name) {
                    steps.push(currentStep as WorkflowStep);
                }
                currentStep = {
                    id: `step-${steps.length + 1}`,
                    name: trimmed.replace('## ', ''),
                    description: '',
                    params: {},
                    autoExecute: false
                };
            } else if (currentStep) {
                // Capture directives
                if (trimmed.startsWith('// turbo')) {
                    currentStep.autoExecute = true;
                } else if (trimmed.includes(':')) {
                    const [key, ...values] = trimmed.split(':');
                    const value = values.join(':').trim();
                    const cleanKey = key.trim().toLowerCase();

                    if (cleanKey === 'action') {
                        currentStep.action = value;
                    } else {
                        currentStep.params![cleanKey] = value;
                    }
                } else if (trimmed.length > 0) {
                    currentStep.description += trimmed + '\\n';
                }
            }
        }

        if (currentStep && currentStep.name) {
            steps.push(currentStep as WorkflowStep);
        }

        return {
            id: metadata.id || 'unknown-workflow',
            name: metadata.description || 'Untitled Workflow',
            description: metadata.description || '',
            steps
        };
    }
}
