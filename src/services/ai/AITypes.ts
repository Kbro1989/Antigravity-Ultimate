import { AgentCapability } from './AgentConstitution';

/**
 * POG AI Intent & Tool Type Definitions
 * This file serves as the "Symphony Score" - defining the exact vocabulary
 * available to the agent for orchestration and limb execution.
 */

export type AIAction =
    | 'file_read' | 'file_write' | 'file_delete' | 'file_list' | 'file_sync' | 'file_audit_provenance'
    | 'code_complete' | 'code_refactor' | 'code_audit' | 'code_cascade' | 'code_explain' | 'code_test' | 'code_analyze_complexity' | 'code_generate_code'
    | 'data_query' | 'data_persist' | 'data_cache' | 'data_index' | 'data_prune_cache'
    | 'mesh_generate' | 'mesh_edit' | 'mesh_remesh' | 'mesh_uv' | 'mesh_topo' | 'mesh_process_mesh'
    | 'material_generate' | 'material_apply' | 'material_pbr' | 'material_tex' | 'material_bake' | 'material_generate_shader'
    | 'animation_generate' | 'animation_retarget' | 'animation_record' | 'animation_pose' | 'animation_retarget_motion'
    | 'rig_auto' | 'rig_bone' | 'rig_weight' | 'rig_skin'
    | 'vfx_generate' | 'vfx_emit' | 'vfx_particle' | 'vfx_shader'
    | 'image_generate' | 'image_edit' | 'image_upscale' | 'image_restore' | 'image_vector' | 'image_pbr' | 'image_synthesize_texture'
    | 'audio_generate' | 'audio_process' | 'audio_stems' | 'audio_clone' | 'audio_effects' | 'audio_generate_music'
    | 'video_generate' | 'video_render' | 'video_edit' | 'video_fx' | 'video_render_cutscene'
    | 'world_query' | 'world_patch' | 'world_regen' | 'world_biome' | 'world_hydro' | 'world_atmo' | 'world_generate_terrain'
    | 'landscape_generate' | 'landscape_audit'
    | 'entity_spawn' | 'entity_brain' | 'entity_anim' | 'entity_purge' | 'entity_inject_thought'
    | 'physics_gravity' | 'physics_time' | 'physics_fluid' | 'physics_coll' | 'physics_step_simulation'
    | 'network_ping' | 'network_mesh' | 'network_fire' | 'network_ping_limbs'
    | 'security_scan' | 'security_vault' | 'security_lock' | 'security_get_logs' | 'security_emergency_lockdown'
    | 'system_command' | 'system_diag' | 'system_logs' | 'system_core' | 'system_optimize_resources' | 'system_query_health'
    | 'filesystem_explore' | 'filesystem_search' | 'filesystem_mount'
    | 'live_stream' | 'live_mon' | 'live_sync' | 'live_game_action'
    | 'ghost_fix' | 'ghost_heal' | 'ghost_stealth' | 'ghost_stabilize'
    | 'reality_anchor' | 'reality_state' | 'reality_sync' | 'reality_anchor_convergence' | 'reality_verify_integrity' | 'reality_anchor_convergence_legacy'
    | 'quantum_compute' | 'quantum_psi' | 'quantum_wave' | 'quantum_fold' | 'quantum_generate_variants'
    | 'divine_intervention' | 'divine_heart' | 'divine_pulse' | 'divine_grace' | 'divine_synthesize_world'
    | 'relic_scan' | 'relic_item' | 'relic_map'
    | 'env_weather' | 'env_flora' | 'env_terrain'
    | 'spatial_coords' | 'spatial_bounds' | 'spatial_nav'
    | 'game_play' | 'game_pause' | 'game_reboot'
    | 'pipeline_build' | 'pipeline_deploy' | 'pipeline_test'
    | 'classic_import' | 'classic_view' | 'classic_convert'
    | 'orchestrate_plan' | 'orchestrate_limb' | 'orchestrate_auto' | 'orchestrate_negotiate' | 'orchestrate_critique' | 'orchestrate_generate_plan' | 'orchestrate_execute_graph' | 'orchestrate_get_symphony_status' | 'orchestrate_architect_solution'
    | 'proxy_forward' | 'version_commit' | 'version_history' | 'audit_landscape_id' | 'audit_item_id' | 'audit_npc_id';

export interface BaseIntent {
    action: AIAction;
    limbId?: string;
    sessionId?: string;
    payload: Record<string, any>;
}

// --- SPECIFIC INTENT SCHEMAS ---

export interface LandscapeGenerateIntent extends BaseIntent {
    action: 'landscape_generate';
    payload: {
        width: number;
        height: number;
        biomes: string[];
        seed?: number;
        outputDir?: string;
    };
}

export interface IDAuditIntent extends BaseIntent {
    action: 'audit_landscape_id' | 'audit_item_id' | 'audit_npc_id';
    payload: {
        suggestedId?: number;
        type: 'landscape' | 'item' | 'npc';
    };
}

export interface VersionCommitIntent extends BaseIntent {
    action: 'version_commit';
    payload: {
        assetPath: string;
        message: string;
        branch?: string;
    };
}

export interface FileOperationIntent extends BaseIntent {
    action: 'file_read' | 'file_write' | 'file_delete' | 'file_list';
    payload: {
        path: string;
        content?: string;
        base64?: boolean;
    };
}

// --- TOOL DEFINITIONS (For Model Routing) ---

export interface AITool {
    name: string;
    description: string;
    parameters: any; // JSON Schema
    capability: AgentCapability;
}

export const POG_TOOL_CABINET: Record<AIAction, AITool> = {
    'landscape_generate': {
        name: 'Generate Landscape',
        description: 'Generates authentic RSC JAG/MEM landscape data from biomes.',
        capability: AgentCapability.WORLD_STATE_WRITE,
        parameters: {
            type: 'object',
            properties: {
                width: { type: 'number' },
                height: { type: 'number' },
                biomes: { type: 'array', items: { type: 'string' } }
            }
        }
    },
    'audit_landscape_id': {
        name: 'Audit Landscape ID',
        description: 'Ensures a new landscape ID is unique and within valid ranges.',
        capability: AgentCapability.READ_FILES,
        parameters: {
            type: 'object',
            properties: {
                suggestedId: { type: 'number' }
            }
        }
    },
    'version_commit': {
        name: 'Commit Asset',
        description: 'Cements an asset into the version-controlled pipeline with a SHA-256 hash.',
        capability: AgentCapability.COMMIT_CHANGES,
        parameters: {
            type: 'object',
            properties: {
                assetPath: { type: 'string' },
                message: { type: 'string' }
            }
        }
    },
    'code_complete': {
        name: 'Code Completion',
        description: 'Generates intelligent code completions based on context.',
        capability: AgentCapability.MODIFY_CODE,
        parameters: {
            type: 'object',
            properties: {
                prefix: { type: 'string' },
                suffix: { type: 'string' },
                filename: { type: 'string' }
            }
        }
    },
    'image_generate': {
        name: 'Generate Image',
        description: 'Creates high-quality images from text prompts.',
        capability: AgentCapability.IMAGE_OPERATIONS,
        parameters: {
            type: 'object',
            properties: {
                prompt: { type: 'string' },
                negativePrompt: { type: 'string' }
            }
        }
    },
    'quantum_compute': {
        name: 'Quantum Compute',
        description: 'Solves complex non-linear problems using quantum-inspired heuristics.',
        capability: AgentCapability.MESH_OPERATIONS,
        parameters: { type: 'object', properties: { complexity: { type: 'number' } } }
    },
    'reality_anchor': {
        name: 'Reality Anchor',
        description: 'Drops a cryptographic provenance anchor for a generated artifact.',
        capability: AgentCapability.COMMIT_CHANGES,
        parameters: { type: 'object', properties: { reference: { type: 'string' } } }
    },
    'divine_intervention': {
        name: 'Divine Intervention',
        description: 'Overrides system constraints for emergency recovery.',
        capability: AgentCapability.MESH_OPERATIONS,
        parameters: { type: 'object', properties: { reason: { type: 'string' } } }
    }
} as any;
