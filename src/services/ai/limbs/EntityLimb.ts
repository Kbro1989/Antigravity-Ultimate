import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';

export interface Entity {
    id: string;
    type: 'class' | 'function' | 'variable' | 'component' | 'file';
    path: string;
    description: string;
    dependencies: string[];
}

export class EntityLimb extends NeuralLimb {
    private entities: Map<string, Entity> = new Map();

    async process(intent: any) {
        const { action, entity, target_id, content, priority, payload } = intent;

        await this.logActivity(`entity_${action}`, 'pending', { entity: entity?.id || target_id });

        try {
            let result;
            switch (action) {
                // Game Entity Actions
                case 'inject_thought':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    result = {
                        target: target_id,
                        thought: content,
                        priority: priority || 'normal',
                        injected: true,
                        timestamp: Date.now()
                    };
                    break;

                case 'spawn_entity':
                    this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
                    result = {
                        entityId: `entity_${Date.now()}`,
                        type: payload?.type || 'npc',
                        position: payload?.position || [0, 0, 0],
                        spawned: true
                    };
                    break;

                case 'set_behavior':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    result = {
                        target: target_id,
                        behavior: payload?.behavior || 'idle',
                        applied: true
                    };
                    break;

                // Code Entity Actions
                case 'register':
                    this.enforceCapability(AgentCapability.WRITE_FILES);
                    this.entities.set(entity.id, entity);
                    result = { success: true };
                    break;
                case 'get':
                    this.enforceCapability(AgentCapability.MEMORY_QUERY);
                    result = this.entities.get(entity.id);
                    break;
                case 'query':
                    this.enforceCapability(AgentCapability.MEMORY_QUERY);
                    result = Array.from(this.entities.values()).filter(e =>
                        e.type === intent.type || e.path.includes(intent.path)
                    );
                    break;
                case 'analyze_deps':
                    this.enforceCapability(AgentCapability.MEMORY_QUERY);
                    const target = this.entities.get(intent.entityId);
                    result = target ? this.resolveDependencies(target) : [];
                    break;
                default:
                    throw new Error(`Unknown entity action: ${action}`);
            }

            await this.logActivity(`entity_${action}`, 'success', { entity: entity?.id || target_id });
            return { status: 'success', data: result, ...result };
        } catch (e: any) {
            await this.logActivity(`entity_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
    }

    private resolveDependencies(entity: Entity): string[] {
        const deps = new Set<string>();
        const stack = [...entity.dependencies];

        while (stack.length > 0) {
            const depId = stack.pop()!;
            if (!deps.has(depId)) {
                deps.add(depId);
                const dep = this.entities.get(depId);
                if (dep) stack.push(...dep.dependencies);
            }
        }

        return Array.from(deps);
    }
}
