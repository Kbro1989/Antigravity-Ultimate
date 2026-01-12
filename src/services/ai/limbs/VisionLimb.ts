import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';
import { BaseIntent } from '../AITypes';

export class VisionLimb extends NeuralLimb {

    /**
     * Critiques an image or texture map for PBR quality.
     */
    async critique_material(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { imageUrl, mapType, prompt } = params;

        const critiquePrompt = `Analyze this ${mapType} map for a PBR material of: "${prompt}". 
        Check for:
        1. Correct color space (e.g. Normal maps should be blue/purple).
        2. Tiling artifacts or seams.
        3. Level of detail and noise.
        4. Consistency with the original intent.
        
        Provide a JSON critique with "score" (1-10) and "deficiencies" (array of strings).`;

        const response: any = await modelRouter.route({
            type: 'text', // In a real system, this would be a multi-modal 'vision' type
            prompt: `${critiquePrompt} Image URL: ${imageUrl}`,
            modelId: '@cf/meta/llama-3.2-11b-vision-instruct', // Vision model
            options: { json: true }
        }, this.env);

        let critique = { score: 0, deficiencies: [] };
        try {
            const content = response.content || response;
            const json = content.match(/\{[\s\S]*\}/);
            if (json) critique = JSON.parse(json[0]);
        } catch (e) {
            console.error("[VisionLimb] Critique Parsing Failed:", e);
        }

        return {
            status: 'success',
            score: critique.score,
            deficiencies: critique.deficiencies,
            provider: response.provider
        };
    }
}
