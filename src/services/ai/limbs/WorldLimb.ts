import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';

export class WorldLimb extends NeuralLimb {
    async process(intent: any) {
        const { action, prompt, seed, algorithm, biome } = intent;

        await this.logActivity(`world_${action}`, 'pending', { prompt, seed });

        try {
            switch (action) {
                case 'create_scene':
                    this.enforceCapability(AgentCapability.WRITE_FILES);
                    return {
                        status: 'success',
                        sceneId: `scene_${Date.now()}`,
                        manifest: {
                            type: 'THREE_JS_SCENE',
                            layers: ['terrain', 'env', 'lighting'],
                            provenance: 'AI_AGENT_MANIFESTED'
                        }
                    };

                case 'set_environment':
                    return {
                        status: 'success',
                        env: intent.env || 'tropical_chronicles',
                        lighting: {
                            intensity: 1.5,
                            atmosphereNodes: ['hdr_skybox', 'volumetric_fog']
                        }
                    };

                case 'generate_terrain':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);

                    // Route to AI for procedural biome and material design
                    const terrainDesign = await modelRouter.route({
                        type: 'text',
                        prompt: `Design a procedural terrain for: ${prompt || 'tropical island'}. 
                                Algorithm: ${algorithm || 'perlin_noise'}. 
                                Biome: ${biome || 'arid'}. 
                                Seed: ${seed || Math.random()}.
                                Return JSON: { biomes: string[], materials: string[], features: string[] }`,
                        systemPrompt: "You are a World Architect assistant. Return ONLY valid JSON."
                    }) as any;

                    let designData;
                    try {
                        designData = JSON.parse(terrainDesign.content);
                    } catch (e) {
                        designData = { biomes: [biome || 'default'], materials: ['rock', 'sand'], features: ['dunes'] };
                    }

                    return {
                        status: 'success',
                        seed: seed || 42,
                        terrainMap: `/assets/generated/terrain_${seed || 42}.png`,
                        biomes: designData.biomes,
                        materials: designData.materials,
                        features: designData.features,
                        heightMap: {
                            format: 'float32',
                            algorithm: algorithm || 'perlin_noise',
                            url: `/assets/generated/height_${seed || 42}.raw`
                        },
                        provider: 'neural-world-gen-v1'
                    };

                case 'get_legacy_map': {
                    this.enforceCapability(AgentCapability.READ_FILES);
                    const { mapId } = intent;
                    const { getClassicRSMV } = await import('../../rsmv');
                    const rsc = await getClassicRSMV();
                    const mapData = await rsc.loadMap(parseInt(mapId));

                    return {
                        status: 'success',
                        mapId,
                        data: mapData,
                        provenance: 'RSC_LEGACY_EXCAVATION'
                    };
                }

                default:
                    throw new Error(`Unknown world action: ${action}`);
            }
        } catch (e: any) {
            await this.logActivity(`world_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
    }
}
