import React, { useState, useMemo } from 'react';
import { WorkspaceMode } from '../../../services/core/ModeManager';

interface Tool {
    id: string;
    icon: string;
    label: string;
    hotkey: string;
    color: string;
    capability?: string;
    defaultParams?: any;
}

interface WorkspaceSpineProps {
    workspace: WorkspaceMode;
    onToolSelect?: (toolId: string, capability?: string, params?: any) => void;
}

export function WorkspaceSpine({ workspace, onToolSelect }: WorkspaceSpineProps) {
    const [selectedTool, setSelectedTool] = useState<string | null>(null);

    const handleToolClick = (tool: Tool) => {
        setSelectedTool(tool.id);
        if (onToolSelect) onToolSelect(tool.id, tool.capability, tool.defaultParams);
    };

    const tools: Record<WorkspaceMode, Tool[]> = useMemo(() => ({
        code: [
            { id: 'cascade', icon: '🌊', label: 'Cascade', hotkey: '⌘K', color: '#00ffff', capability: 'cascade', defaultParams: { prompt: 'Cascade edit...' } },
            { id: 'complete', icon: '✨', label: 'AI Complete', hotkey: '⌘I', color: '#00ffff', capability: 'complete', defaultParams: { prompt: 'Complete code...' } },
            { id: 'refactor', icon: '🔧', label: 'Refactor', hotkey: '⌘R', color: '#9d00ff', capability: 'refactor', defaultParams: { code: '...' } },
            { id: 'explain', icon: '💡', label: 'Explain', hotkey: '⌘E', color: '#ff00ff', capability: 'explain', defaultParams: { code: '...' } },
            { id: 'test', icon: '🧪', label: 'Tests', hotkey: '⌘T', color: '#0080ff', capability: 'test', defaultParams: { path: 'src/' } },
        ],
        creative: [
            { id: 'generate', icon: '🎨', label: 'Generate', hotkey: 'G', color: '#ff00ff', capability: 'generate', defaultParams: { prompt: 'Creative visual...' } },
            { id: 'variation', icon: '🔄', label: 'Variations', hotkey: 'V', color: '#9d00ff', capability: 'variation', defaultParams: { prompt: 'Variation...' } },
            { id: 'upscale', icon: '⬆️', label: 'Upscale', hotkey: 'U', color: '#00ffff', capability: 'upscale', defaultParams: { upscale: true } },
            { id: 'inpaint', icon: '✏️', label: 'Inpaint', hotkey: 'I', color: '#ff0080', capability: 'restore', defaultParams: { mode: 'inpaint' } },
        ],
        audio: [
            { id: 'generate', icon: '🎵', label: 'Generate', hotkey: 'G', color: '#9d00ff', capability: 'generate', defaultParams: { type: 'music', prompt: 'New track...' } },
            { id: 'stems', icon: '✂️', label: 'Stems', hotkey: 'S', color: '#00ffff', capability: 'stems', defaultParams: { type: 'stem' } },
            { id: 'clone', icon: '🎤', label: 'Clone', hotkey: 'C', color: '#ff00ff', capability: 'clone', defaultParams: { type: 'speech', prompt: 'Voice clone...' } },
            { id: 'effects', icon: '✨', label: 'FX Rack', hotkey: 'F', color: '#0080ff', capability: 'effects', defaultParams: { type: 'fx', prompt: 'Apply FX...' } },
        ],
        flow: [
            { id: 'add', icon: '➕', label: 'Add Node', hotkey: 'A', color: '#00ffff', capability: 'dispatch', defaultParams: { task: 'add_node' } },
            { id: 'execute', icon: '▶️', label: 'Execute', hotkey: 'E', color: '#00ff80', capability: 'dispatch', defaultParams: { task: 'execute_flow' } },
            { id: 'debug', icon: '🐛', label: 'Debug', hotkey: 'D', color: '#ff00ff', capability: 'dispatch', defaultParams: { task: 'debug_flow' } },
            { id: 'template', icon: '📋', label: 'Library', hotkey: 'L', color: '#ff0080', capability: 'dispatch', defaultParams: { task: 'load_template' } },
        ],
        '3d': [
            { id: 'sculpt', icon: '🔨', label: 'Sculpt', hotkey: 'S', color: '#0080ff', capability: 'edit_geometry', defaultParams: { operation: 'sculpt' } },
            { id: 'paint', icon: '🖌️', label: 'PBR Paint', hotkey: 'P', color: '#ff00ff', capability: 'process_mesh', defaultParams: { operation: 'vertex_paint' } },
            { id: 'render', icon: '🎬', label: 'Raytrace', hotkey: 'F', color: '#ff0080', capability: 'process_mesh', defaultParams: { operation: 'render' } },
            { id: 'rigger', icon: '🦴', label: 'Rigging', hotkey: 'R', color: '#00ff80', capability: 'auto_rig', defaultParams: {} },
        ],
        world: [
            { id: 'regen', icon: '🌍', label: 'Genesis', hotkey: 'G', color: '#00ff80', capability: 'regen', defaultParams: { seed: Date.now() } },
            { id: 'biome', icon: '🌿', label: 'Ecology', hotkey: 'B', color: '#00ffff', capability: 'biome', defaultParams: { biome: 'tropical' } },
            { id: 'hydro', icon: '💧', label: 'Hydrology', hotkey: 'H', color: '#0080ff', capability: 'terraform_sector', defaultParams: { operation: 'hydro' } },
            { id: 'atmo', icon: '☁️', label: 'Skybox', hotkey: 'A', color: '#ffffff', capability: 'terraform_sector', defaultParams: { operation: 'atmo' } },
        ],
        entity: [
            { id: 'spawn', icon: '👶', label: 'Instantiate', hotkey: 'N', color: '#ff00ff' },
            { id: 'brain', icon: '🧠', label: 'Cortex', hotkey: 'B', color: '#00ffff' },
            { id: 'anim', icon: '🏃', label: 'Kinetics', hotkey: 'K', color: '#00ff80' },
            { id: 'purge', icon: '💀', label: 'De-rez', hotkey: 'X', color: '#ff0000' },
        ],
        physics: [
            { id: 'gravity', icon: '🍎', label: 'Newton', hotkey: 'G', color: '#ffff00' },
            { id: 'time', icon: '⏳', label: 'Time Scale', hotkey: 'T', color: '#00ffff' },
            { id: 'fluid', icon: '🌊', label: 'Navier', hotkey: 'F', color: '#0080ff' },
            { id: 'coll', icon: '💥', label: 'Collision', hotkey: 'C', color: '#ff8000' },
        ],
        animation: [
            { id: 'record', icon: '⏺️', label: 'Capture', hotkey: 'R', color: '#ff0000' },
            { id: 'pose', icon: '💃', label: 'Keyframe', hotkey: 'K', color: '#ff00ff' },
            { id: 'retarget', icon: '🎯', label: 'Target', hotkey: 'T', color: '#00ffff' },
        ],
        network: [
            { id: 'ping', icon: '📡', label: 'Echo', hotkey: 'P', color: '#00ffff' },
            { id: 'mesh', icon: '🕸️', label: 'Topology', hotkey: 'M', color: '#00ff80' },
            { id: 'fire', icon: '🔥', label: 'Firewall', hotkey: 'F', color: '#ff0000' },
        ],
        security: [
            { id: 'scan', icon: '🔍', label: 'Sentinel', hotkey: 'S', color: '#ff0000' },
            { id: 'vault', icon: '🔒', label: 'Vault', hotkey: 'V', color: '#ffff00' },
            { id: 'lock', icon: '🚨', label: 'Lockdown', hotkey: 'L', color: '#ff0000' },
        ],
        data: [
            { id: 'query', icon: '📊', label: 'Insight', hotkey: 'Q', color: '#00ffff' },
            { id: 'cache', icon: '💾', label: 'Cold Storage', hotkey: 'C', color: '#0080ff' },
            { id: 'index', icon: '🗂️', label: 'Manifest', hotkey: 'I', color: '#00ff80' },
        ],
        video: [
            { id: 'render', icon: '🎥', label: 'Cinema', hotkey: 'C', color: '#ff00ff' },
            { id: 'edit', icon: '✂️', label: 'Splice', hotkey: 'E', color: '#00ffff' },
            { id: 'fx', icon: '✨', label: 'Optical FX', hotkey: 'F', color: '#9d00ff' },
        ],
        image: [
            { id: 'upscale', icon: '💎', label: 'Enhance', hotkey: 'U', color: '#00ffff' },
            { id: 'restore', icon: '🩹', label: 'Heal', hotkey: 'H', color: '#00ff80' },
            { id: 'vector', icon: '📐', label: 'Tracing', hotkey: 'V', color: '#ff00ff' },
        ],
        mesh: [
            { id: 'remesh', icon: '🔷', label: 'Geomancy', hotkey: 'R', color: '#00ffff' },
            { id: 'uv', icon: '🗺️', label: 'Unwrap', hotkey: 'U', color: '#9d00ff' },
            { id: 'topo', icon: '📈', label: 'Analysis', hotkey: 'T', color: '#00ff80' },
        ],
        material: [
            { id: 'pbr', icon: '💎', label: 'Shader', hotkey: 'S', color: '#ff00ff' },
            { id: 'tex', icon: '🖼️', label: 'Albedo', hotkey: 'T', color: '#00ffff' },
            { id: 'bake', icon: '🔥', label: 'Baking', hotkey: 'B', color: '#ff8000' },
        ],
        orchestrator: [
            { id: 'plan', icon: '🗺️', label: 'Tactical', hotkey: 'P', color: '#00ffff' },
            { id: 'limb', icon: '🦾', label: 'Limb Sync', hotkey: 'L', color: '#00ff80' },
            { id: 'auto', icon: '🤖', label: 'Auto-pilot', hotkey: 'A', color: '#9d00ff' },
        ],
        system: [
            { id: 'diag', icon: '🩺', label: 'Vitals', hotkey: 'V', color: '#00ff80' },
            { id: 'logs', icon: '📜', label: 'History', hotkey: 'L', color: '#00ffff' },
            { id: 'core', icon: '⚛️', label: 'Kernel', hotkey: 'K', color: '#ff00ff' },
        ],
        filesystem: [
            { id: 'explore', icon: '📂', label: 'Data Lake', hotkey: 'E', color: '#0080ff' },
            { id: 'search', icon: '🔎', label: 'Global', hotkey: 'S', color: '#00ffff' },
            { id: 'mount', icon: '💿', label: 'Mount', hotkey: 'M', color: '#00ff80' },
        ],
        live: [
            { id: 'stream', icon: '📡', label: 'Link', hotkey: 'L', color: '#ff0000' },
            { id: 'mon', icon: '📺', label: 'Relay', hotkey: 'R', color: '#00ff80' },
            { id: 'sync', icon: '🔄', label: 'Live Sync', hotkey: 'S', color: '#00ffff' },
        ],
        ghost: [
            { id: 'fix', icon: '👻', label: 'Wraith', hotkey: 'W', color: '#ffffff' },
            { id: 'heal', icon: '💖', label: 'Self-Heal', hotkey: 'H', color: '#ff0080' },
            { id: 'stealth', icon: '🕶️', label: 'Veil', hotkey: 'V', color: '#000000' },
        ],
        reality: [
            { id: 'anchor', icon: '🔮', label: 'Anchor', hotkey: 'A', color: '#ffff00' },
            { id: 'state', icon: '💾', label: 'Persist', hotkey: 'P', color: '#ff8000' },
            { id: 'sync', icon: '⚡', label: 'Converge', hotkey: 'C', color: '#ffffff' },
        ],
        quantum: [
            { id: 'psi', icon: '⚛️', label: 'Entangle', hotkey: 'E', color: '#9d00ff' },
            { id: 'wave', icon: '〰️', label: 'Waveform', hotkey: 'W', color: '#00ffff' },
            { id: 'fold', icon: '📁', label: 'Fold', hotkey: 'F', color: '#ff00ff' },
        ],
        divine: [
            { id: 'heart', icon: '🤍', label: 'Cerebro', hotkey: 'C', color: '#ffffff' },
            { id: 'pulse', icon: '✨', label: 'Pulse', hotkey: 'P', color: '#ffff00' },
            { id: 'grace', icon: '🕊️', label: 'Grace', hotkey: 'G', color: '#ffffff' },
        ],
        relic: [
            { id: 'scan', icon: '⛏️', label: 'Excavate', hotkey: 'E', color: '#00ffff', capability: 'excavate_cache', defaultParams: { id: 0 } },
            { id: 'item', icon: '🛡️', label: 'Restoration', hotkey: 'R', color: '#0080ff', capability: 'salvage_relic', defaultParams: { relicType: 'modern' } },
            { id: 'map', icon: '🗺️', label: 'Archive', hotkey: 'A', color: '#ffffff', capability: 'salvage_relic', defaultParams: { relicType: 'map' } },
        ],
        environment: [
            { id: 'weather', icon: '🌦️', label: 'Weather', hotkey: 'W', color: '#ffff00' },
            { id: 'flora', icon: '🌲', label: 'Flora', hotkey: 'F', color: '#00ff80' },
            { id: 'terrain', icon: '🏔️', label: 'Sculpt', hotkey: 'T', color: '#ff8000' },
        ],
        spatial: [
            { id: 'coords', icon: '📍', label: 'Position', hotkey: 'P', color: '#00ffff' },
            { id: 'bounds', icon: '📏', label: 'Bounds', hotkey: 'B', color: '#ff00ff' },
            { id: 'nav', icon: '🧭', label: 'Navigation', hotkey: 'N', color: '#00ff80' },
        ],
        game: [
            { id: 'play', icon: '▶️', label: 'Play', hotkey: 'P', color: '#00ff00' },
            { id: 'pause', icon: '⏸️', label: 'Pause', hotkey: 'K', color: '#ffff00' },
            { id: 'reboot', icon: '🔄', label: 'Reset', hotkey: 'R', color: '#ff0000' },
        ],
        rig: [
            { id: 'bone', icon: '🦴', label: 'Skeleton', hotkey: 'B', color: '#ffffff' },
            { id: 'weight', icon: '⚖️', label: 'Weights', hotkey: 'W', color: '#00ffff' },
            { id: 'skin', icon: '🧥', label: 'Skinning', hotkey: 'S', color: '#ff00ff' },
        ],
        vfx: [
            { id: 'emit', icon: '✨', label: 'Emitter', hotkey: 'E', color: '#ff8000' },
            { id: 'particle', icon: '🌫️', label: 'Particles', hotkey: 'P', color: '#00ffff' },
            { id: 'shader', icon: '🌈', label: 'VFX Shader', hotkey: 'S', color: '#ff00ff' },
        ],
        file: [
            { id: 'read', icon: '📖', label: 'Read', hotkey: 'R', color: '#0080ff' },
            { id: 'write', icon: '✍️', label: 'Write', hotkey: 'W', color: '#00ff80' },
            { id: 'sync', icon: '🔄', label: 'Sync', hotkey: 'S', color: '#00ffff' },
        ],
        pipeline: [
            { id: 'build', icon: '🏗️', label: 'Build', hotkey: 'B', color: '#00ffff' },
            { id: 'deploy', icon: '🚀', label: 'Deploy', hotkey: 'D', color: '#00ff80' },
            { id: 'test', icon: '🧪', label: 'Test', hotkey: 'T', color: '#ffff00' },
        ],
        classic: [
            { id: 'import', icon: '📦', label: 'Legacy Import', hotkey: 'I', color: '#ff8000' },
            { id: 'view', icon: '👁️', label: 'Viewer', hotkey: 'V', color: '#00ffff' },
            { id: 'convert', icon: '♻️', label: 'Transcode', hotkey: 'T', color: '#00ff80' },
        ],
    }), []);

    const currentTools = tools[workspace] || tools.code;

    return (
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-30 animate-fade-in">
            <div className="flex flex-col gap-6 p-4 glass-ultra rounded-[32px] border border-white/5 shadow-2xl max-h-[85vh] overflow-y-auto custom-scrollbar">
                {currentTools.map((tool, index) => (
                    <div key={tool.id} className="group relative">
                        <div
                            className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 cursor-pointer border
                                ${selectedTool === tool.id
                                    ? 'bg-white/10 border-white/40 shadow-[0_0_25px_rgba(255,255,255,0.2)]'
                                    : 'bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5'}`}
                            onClick={() => handleToolClick(tool)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-2xl filter drop-shadow-[0_0_8px_var(--tool-color)]" style={{ '--tool-color': tool.color } as any}>
                                {tool.icon}
                            </div>
                            <div className="text-[7px] mt-1 font-black opacity-20 group-hover:opacity-60 transition-opacity uppercase tracking-widest">{tool.hotkey}</div>

                            <div className="absolute left-full ml-10 px-6 py-3 glass-ultra rounded-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none translate-x-10 group-hover:translate-x-0 shadow-2xl border border-white/10 z-50">
                                <div className="text-[9px] font-black uppercase tracking-[0.4em]" style={{ color: tool.color }}>
                                    {tool.label}
                                </div>
                                <div className="text-[7px] text-neon-cyan/40 font-mono mt-1 uppercase tracking-widest border-t border-white/5 pt-1">
                                    /limbs/{workspace}/{tool.id}
                                </div>
                                <div className="text-[6px] opacity-20 font-mono uppercase tracking-[0.3em] mt-0.5">
                                    LOAD: /dist/tools/{tool.id}.bin
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
