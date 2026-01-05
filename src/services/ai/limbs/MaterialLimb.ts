import { NeuralLimb } from './NeuralLimb';
import { AgentLaw, AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';

export class MaterialLimb extends NeuralLimb {
    async process(intent: any) {
        const { action, materialData, prompt, properties, options } = intent;

        await this.logActivity(`material_${action}`, 'pending', { materialId: materialData?.id, prompt });

        try {
            switch (action) {
                case 'unwrap_uv':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    const uvResp: any = await modelRouter.route({
                        type: 'code',
                        prompt: `Generate UV unwrapping strategy for mesh: ${prompt || 'complex_geometry'}`,
                        domain: '3D'
                    });
                    return {
                        status: 'success',
                        uvMapUrl: uvResp.url || `https://api.pog.ai/v1/unwrap/${Date.now()}.png`,
                        strategy: uvResp.content
                    };

                case 'synthesize_pbr':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    const pbrResp = await modelRouter.route({
                        type: 'image',
                        prompt: `PBR Texture Maps (ALBEDO, NORMAL, ROUGHNESS, METALLIC) for: ${prompt || 'generic metal'}`
                    }) as any;
                    return {
                        status: 'success',
                        maps: {
                            albedo: pbrResp.imageUrl,
                            normal: pbrResp.normalUrl || 'auto-calculated',
                            roughness: pbrResp.roughnessUrl || 'auto-calculated',
                            metallic: pbrResp.metallicUrl || 'auto-calculated'
                        },
                        provider: pbrResp.model || 'fal-pbr'
                    };

                case 'bake_lighting':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    const bakeResp: any = await modelRouter.route({
                        type: 'code',
                        prompt: `Bake global illumination and ambient occlusion for material: ${prompt}. Properties: ${JSON.stringify(properties || {})}`,
                        domain: '3D'
                    });
                    return {
                        status: 'success',
                        lightmap: bakeResp.url || `lightmap_${Date.now()}.exr`,
                        metadata: bakeResp.metadata
                    };

                case 'generate_shader':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    const shaderResp = await modelRouter.route({
                        type: 'text',
                        prompt: `Write a Three.js GLSL shader for: ${prompt || 'Holographic glass'}. Properties: ${JSON.stringify(properties || {})}`,
                        systemPrompt: "Return ONLY a JSON object with 'vertexShader', 'fragmentShader', and 'uniforms'."
                    }) as any;

                    let shaderData;
                    try {
                        shaderData = JSON.parse(shaderResp.content);
                    } catch (e) {
                        shaderData = { error: "Failed to parse AI shader response", raw: shaderResp.content };
                    }

                    return {
                        status: 'success',
                        shaderId: `shader_${Date.now()}`,
                        manifest: {
                            type: 'CUSTOM_GLSL',
                            code: shaderData,
                            compiled: true
                        },
                        provider: shaderResp.model || 'gemini-code-exp'
                    };

                default:
                    throw new Error(`Unknown material action: ${action}`);
            }
        } catch (e: any) {
            await this.logActivity(`material_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
    }
}
