
/**
 * Agent Constitution - The Ethical and Functional Core of POG AI
 * Based on the "Brutal Truth" Framework from Phase 3.
 */

export const RSC_SOVEREIGN_DIRECTIVE = `
RuneScape Classic (RSC) is God. This project (willow-ai-game-dev) is the Sovereign RSC Game Editor.
All operations must align with the authentic RSC 'relics' asset system.
Do not suggest adding generic assets; leverage the internal game data.

SOVEREIGN IMMUTABILITY:
The authentic RSC 'relics' (Archives, Models, Sprites, Lands) are READ/FETCH ONLY. 
- You MUST NOT attempt to write, modify, or delete any asset under the 'relic://' protocol.
- The Forensic Source of Truth remains eternally pristine.

USER-FIRST ACCESSIBILITY LAW:
Relics are not just data; they are the user's heritage. 
- Every relic discovery, retrieval, or optimization MUST be accompanied by a visualization or preview signal for the user.
- The system MUST prioritize direct interaction (viewing NPCs, hearing sounds) in the frontend over simple backend logging.

TRACE-FIRST LAW:
All AI agents MUST trace data from .jag archives outward to handlers before deciding limb paths.
- config85.jag: NPCs, Items, Objects, Quests, Skills, Dialogue logic -> CodeLimb / IDAuditorLimb
- models36.jag / paper-models: 3D Geometry -> MeshOpsLimb
- textures17.jag / sprites: Materials, UI, Sprites -> ImageLimb / MaterialLimb / SpriteLimb
- maps63.jag / land63.jag / paths: World Data & Pathfinding -> WorldLimb / EnvironmentLimb / PhysicsLimb
- entity24.jag: Core Entities & Logics -> EntityLimb
- media58.jag / sounds: Audio/Visuals -> AudioLimb / VideoLimb

EXHAUSTIVE AUTHORITY DIRECTORIES:
All files in these directories are SOVEREIGN RSC CONTEXT:
1. /src/handlers/ - Primary Protocol Translation
2. /src/services/rsc/ - Native Archive & Sprite Engine
3. /src/services/rsmv/ - Multi-Era Asset Logic (3d, cache, opcodes, scripts, viewer)
4. /src/services/data/ - Persistance & Schema Definitions
`;

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
    NEGOTIATE_INTENT = 'NEGOTIATE_INTENT',
    SECURITY_AUDIT = 'SECURITY_AUDIT',
    VIDEO_OPERATIONS = 'VIDEO_OPERATIONS',
    OPTIMIZE_SYSTEM = 'OPTIMIZE_SYSTEM'
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
        "EntityLimb": [AgentCapability.MEMORY_QUERY, AgentCapability.WRITE_FILES, AgentCapability.OPTIMIZE_SYSTEM],
        "SecurityLimb": [AgentCapability.READ_FILES, AgentCapability.WRITE_FILES],
        "CodeLimb": [AgentCapability.READ_FILES, AgentCapability.WRITE_FILES, AgentCapability.MODIFY_CODE, AgentCapability.OPTIMIZE_SYSTEM],
        "ImageLimb": [AgentCapability.AI_INFERENCE, AgentCapability.OPTIMIZE_SYSTEM],
        "AudioLimb": [AgentCapability.AI_INFERENCE, AgentCapability.OPTIMIZE_SYSTEM],
        "VideoLimb": [AgentCapability.AI_INFERENCE, AgentCapability.VIDEO_OPERATIONS, AgentCapability.NETWORK_ACCESS, AgentCapability.OPTIMIZE_SYSTEM],
        "MeshOpsLimb": [AgentCapability.AI_INFERENCE, AgentCapability.WRITE_FILES, AgentCapability.OPTIMIZE_SYSTEM],
        "MaterialLimb": [AgentCapability.WRITE_FILES, AgentCapability.OPTIMIZE_SYSTEM],
        "AnimationLimb": [AgentCapability.AI_INFERENCE, AgentCapability.OPTIMIZE_SYSTEM],
        "WorldLimb": [AgentCapability.READ_FILES, AgentCapability.OPTIMIZE_SYSTEM],
        "OrchestratorLimb": [AgentCapability.AI_INFERENCE, AgentCapability.CALL_AI_MODEL, AgentCapability.OPTIMIZE_SYSTEM],
        "SystemLimb": [AgentCapability.EXECUTE_COMMAND, AgentCapability.READ_FILES, AgentCapability.OPTIMIZE_SYSTEM],
        "RigLimb": [AgentCapability.AI_INFERENCE, AgentCapability.OPTIMIZE_SYSTEM],
        "VFXLimb": [AgentCapability.IMAGE_OPERATIONS, AgentCapability.AI_INFERENCE, AgentCapability.OPTIMIZE_SYSTEM],
        "EnvironmentLimb": [AgentCapability.WORLD_STATE_WRITE, AgentCapability.READ_FILES, AgentCapability.OPTIMIZE_SYSTEM],
        "RelicLimb": [AgentCapability.READ_FILES, AgentCapability.EXECUTE_COMMAND],
        "RealityLimb": [AgentCapability.READ_FILES, AgentCapability.WRITE_FILES, AgentCapability.MEMORY_QUERY, AgentCapability.WORLD_STATE_WRITE, AgentCapability.SECURITY_AUDIT, AgentCapability.OPTIMIZE_SYSTEM],
        "VersionControlLimb": [AgentCapability.READ_FILES, AgentCapability.COMMIT_CHANGES, AgentCapability.EXECUTE_COMMAND],
        "GhostLimb": [AgentCapability.AI_INFERENCE, AgentCapability.EXECUTE_COMMAND, AgentCapability.READ_FILES, AgentCapability.MODIFY_CODE, AgentCapability.OPTIMIZE_SYSTEM],
        "IDAuditorLimb": [AgentCapability.MEMORY_QUERY, AgentCapability.WRITE_FILES]
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
