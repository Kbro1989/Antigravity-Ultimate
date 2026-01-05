/**
 * Agent Constitution - The Ethical and Functional Core of POG AI
 * Based on the "Brutal Truth" Framework from Phase 3.
 */

export enum AgentCapability {
    // Basic File Operations
    READ_FILES = 'READ_FILES',
    WRITE_FILES = 'WRITE_FILES',
    DELETE_FILES = 'DELETE_FILES',
    MODIFY_CODE = 'MODIFY_CODE',

    // AI & Intelligence
    CALL_AI_MODEL = 'CALL_AI_MODEL',
    AI_INFERENCE = 'AI_INFERENCE',
    MEMORY_QUERY = 'MEMORY_QUERY',
    SNAPSHOT_CREATE = 'SNAPSHOT_CREATE',

    // System & Network
    EXECUTE_COMMAND = 'EXECUTE_COMMAND',
    NETWORK_ACCESS = 'NETWORK_ACCESS',
    METRIC_ACCESS = 'METRIC_ACCESS',
    COMMIT_CHANGES = 'COMMIT_CHANGES',

    // Domain Specific
    MESH_OPERATIONS = 'MESH_OPERATIONS',
    IMAGE_OPERATIONS = 'IMAGE_OPERATIONS',
    WORLD_STATE_WRITE = 'WORLD_STATE_WRITE',
    NEGOTIATE_INTENT = 'NEGOTIATE_INTENT'
}

export enum AgentLawType {
    BASE_AGENT_LAW = 'BASE_AGENT_LAW',
    CONTEXT_PURITY = 'CONTEXT_PURITY',
    TOKEN_CAP_ENFORCEMENT = 'TOKEN_CAP_ENFORCEMENT',
    HARD_BLOCK_ENFORCER = 'HARD_BLOCK_ENFORCER'
}

export interface AgentLaw {
    name: string;
    allowed: AgentCapability[];
    forbidden: AgentCapability[];
    maxTokensPerRun: number;
}

export const BASE_AGENT_LAW: AgentLaw = {
    name: 'Base Constitutional Agent',
    allowed: [
        AgentCapability.READ_FILES,
        AgentCapability.CALL_AI_MODEL,
        AgentCapability.AI_INFERENCE,
        AgentCapability.MEMORY_QUERY
    ],
    forbidden: [
        AgentCapability.EXECUTE_COMMAND,
        AgentCapability.COMMIT_CHANGES,
        AgentCapability.WRITE_FILES
    ],
    maxTokensPerRun: 120_000
};

export const NEGOTIATION_LAW: AgentLaw = {
    name: 'Intent Negotiation Protocol',
    allowed: [
        AgentCapability.READ_FILES,
        AgentCapability.AI_INFERENCE,
        AgentCapability.MEMORY_QUERY,
        AgentCapability.NEGOTIATE_INTENT
    ],
    forbidden: [
        AgentCapability.EXECUTE_COMMAND,
        AgentCapability.COMMIT_CHANGES
    ],
    maxTokensPerRun: 250_000
};

/**
 * Validates if the current agent context has the required capability
 */
export function assertCapability(limbName: string, capability: AgentCapability, law: AgentLaw = BASE_AGENT_LAW): void {
    // 1. Check if the capability is forbidden globally by the agent's law
    if (law.forbidden.includes(capability)) {
        throw new Error(`Agent violation: ${law.name} attempted forbidden capability '${capability}'`);
    }

    // 2. Check if the capability is allowed for the specific limb
    const limbManifest: Record<string, AgentCapability[]> = {
        "FileLimb": [AgentCapability.READ_FILES, AgentCapability.WRITE_FILES, AgentCapability.EXECUTE_COMMAND],
        "AIModelLimb": [AgentCapability.AI_INFERENCE, AgentCapability.CALL_AI_MODEL],
        "EntityLimb": [AgentCapability.MEMORY_QUERY, AgentCapability.WRITE_FILES],
        "SecurityLimb": [AgentCapability.READ_FILES, AgentCapability.WRITE_FILES],
        "CodeLimb": [AgentCapability.READ_FILES, AgentCapability.WRITE_FILES, AgentCapability.MODIFY_CODE],
        "ImageLimb": [AgentCapability.AI_INFERENCE],
        "AudioLimb": [AgentCapability.AI_INFERENCE],
        "VideoLimb": [AgentCapability.AI_INFERENCE],
        "MeshOpsLimb": [AgentCapability.AI_INFERENCE, AgentCapability.WRITE_FILES],
        "MaterialLimb": [AgentCapability.WRITE_FILES],
        "AnimationLimb": [AgentCapability.AI_INFERENCE],
        "WorldLimb": [AgentCapability.READ_FILES],
        "OrchestratorLimb": [AgentCapability.AI_INFERENCE, AgentCapability.CALL_AI_MODEL],
        "SystemLimb": [AgentCapability.EXECUTE_COMMAND, AgentCapability.READ_FILES],
        "RigLimb": [AgentCapability.AI_INFERENCE],
        "VFXLimb": [AgentCapability.IMAGE_OPERATIONS, AgentCapability.AI_INFERENCE],
        "EnvironmentLimb": [AgentCapability.WORLD_STATE_WRITE, AgentCapability.READ_FILES]
    };

    const allowedCapabilities = limbManifest[limbName] || [];

    if (!allowedCapabilities.includes(capability)) {
        throw new Error(`Permission Denied: Limb '${limbName}' is not authorized for capability '${capability}'.`);
    }

    // 3. Double-check against global allowed list if not explicitly forbidden but also not explicitly in global allowed
    if (!law.allowed.includes(capability) && !limbManifest[limbName]?.includes(capability)) {
        throw new Error(`Security Violation: Capability '${capability}' is not explicitly allowed in ${law.name}`);
    }
}
