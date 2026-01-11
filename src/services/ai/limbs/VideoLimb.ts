
import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';
import { BaseIntent } from '../AITypes';

export class VideoLimb extends NeuralLimb {

    async generate(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        const { prompt, options, sourceRelic } = params;

        // "Real" Video for Games = Sprite Sheets / Keyframes
        // Since we don't have a direct Video Gen model bound in basic Cloudflare AI (yet),
        // we generate a high-quality Sprite Sheet which constitutes an animation sequence.

        const enhancedPrompt = `Sprite sheet, 4x4 grid, animation frames of ${prompt}. 
        Consistent character/object, flat background, pixel art or game asset style. 
        Sequence showing movement or action.`;

        await this.logActivity('video_generate', 'pending', { prompt: enhancedPrompt });

        // We route to the Image model but with the intent of creating a video asset (Sprite Sheet)
        const result = await this.callAI({
            type: 'image',
            prompt: enhancedPrompt,
            options: { ...options, format: 'sprite_sheet' },
            ...intent
        }) as any;

        if (result.imageUrl) {
            const creationId = `anim_${Date.now()}`;
            // Save as 'video' category logically, even if physically an image
            const stagedPath = `video/sprites/${creationId}.png`;

            // Prepare Content for Persistence (Pass the source URL as the "content" hint, 
            // persistAsset handles fetch if it's http or decode if data:)
            // Note: We pass the result.imageUrl as the 'url' arg, which persistAsset uses to fetch/decode content.
            // But we also want to suggest the path name.

            // Actually, we should just pass the URL as the source and let persistAsset do the fetching we just implemented.
            // But we want the final URL to be the persisted one.

            const finalUrl = await this.persistAsset('texture', result.imageUrl, {
                parentRelic: sourceRelic?.id || 'genesis',
                animationType: 'sprite_sheet',
                frames: 16,
                suggestedPath: stagedPath,
                ...result.metadata
            });

            result.videoUrl = finalUrl;
            result.StartFrame = 0;
            result.EndFrame = 15;
        }

        return result;
    }

    private async callAI(request: any) {
        // Route through standard ModelRouter but request image generation
        const response: any = await modelRouter.route(request, this.env);
        return {
            status: 'success',
            imageUrl: response.imageUrl || response.url || response.content,
            metadata: {
                model: response.model,
                provider: response.provider,
                isAnimation: true
            }
        };
    }
}
