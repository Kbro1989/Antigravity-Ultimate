import { NeuralLimb, LimbConfig } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';
import { BaseIntent } from '../AITypes';

export class AnimationLimb extends NeuralLimb {
    name = 'AnimationLimb';

    constructor(config: LimbConfig) {
        super(config);
    }

    async generate(params: any, intent: BaseIntent & { modelId?: string; provider?: string }) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompt, options } = params;
        await this.logActivity('generate_motion', 'pending', { prompt });

        const motionResult: any = await modelRouter.route({
            type: 'animation',
            prompt: prompt || 'Generate standard motion',
            options: options,
            modelId: intent.modelId,
            provider: intent.provider
        }, this.env);

        if (motionResult.clipUrl || motionResult.resultUrl) {
            await this.persistAsset('animation', motionResult.clipUrl || motionResult.resultUrl, { action: 'generate' });
        }

        return {
            status: 'success',
            clipUrl: motionResult.clipUrl || motionResult.resultUrl || 'rsmv://motion:default',
            metadata: motionResult.metadata
        };
    }

    async retarget(params: any, intent: BaseIntent & { modelId?: string; provider?: string }) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { sourceRig, targetRig, prompt } = params;
        await this.logActivity('retarget_motion', 'pending', { sourceRig, targetRig });

        const motionResult: any = await modelRouter.route({
            type: 'animation',
            prompt: prompt || `Retarget session from ${sourceRig} to ${targetRig}`,
            options: { ...params, action: 'retarget' },
            modelId: intent.modelId,
            provider: intent.provider
        }, this.env);

        return {
            status: 'success',
            clipUrl: motionResult.clipUrl || motionResult.resultUrl || 'rsmv://motion:retargeted',
            metadata: motionResult.metadata
        };
    }

    async retarget_motion(params: any, intent: BaseIntent) {
        return this.retarget(params, intent as any);
    }

    // ==================== OPTIMIZED ANIMATION OPERATIONS ====================

    /**
     * Blend two animation clips together with configurable ratio.
     * Useful for smooth transitions between animations.
     */
    async blend_animations(params: { clipA: string; clipB: string; ratio?: number }, intent: BaseIntent & { modelId?: string; provider?: string }) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { clipA, clipB, ratio = 0.5 } = params;

        await this.logActivity('animation_blend', 'pending', { clipA, clipB, ratio });

        const blendResult: any = await this.cachedRoute({
            type: 'animation',
            prompt: `Blend animation clips: ${clipA} and ${clipB} with ratio ${ratio}. Create smooth transition.`,
            options: { action: 'blend', clipA, clipB, ratio },
            modelId: intent.modelId,
            provider: intent.provider
        });

        await this.logActivity('animation_blend', 'success', { clipA, clipB, ratio });

        return {
            status: 'success',
            clipUrl: blendResult.clipUrl || blendResult.resultUrl || `rsmv://motion:blended_${Date.now()}`,
            blendRatio: ratio,
            sources: [clipA, clipB],
            metadata: blendResult.metadata
        };
    }

    /**
     * Edit a specific keyframe in an animation clip.
     * Allows manual adjustment of animation data.
     */
    async keyframe_edit(params: { clipId: string; frame: number; transform: any }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { clipId, frame, transform } = params;

        await this.logActivity('animation_keyframe_edit', 'pending', { clipId, frame });

        // In a real implementation, this would modify the animation data
        // For now, we generate a modified clip via AI
        const editResult: any = await modelRouter.route({
            type: 'animation',
            prompt: `Modify keyframe ${frame} of animation ${clipId} with transform: ${JSON.stringify(transform)}`,
            options: { action: 'keyframe_edit', clipId, frame, transform }
        }, this.env);

        await this.logActivity('animation_keyframe_edit', 'success', { clipId, frame });

        return {
            status: 'success',
            clipId,
            modifiedFrame: frame,
            transform,
            resultUrl: editResult.resultUrl || `rsmv://motion:edited_${clipId}`,
            metadata: editResult.metadata
        };
    }

    /**
     * Extract animation data from a relic asset.
     * Directly parses RSC animation frames without AI overhead.
     */
    async extract_from_relic(params: { relicId: string }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { relicId } = params;

        await this.logActivity('animation_extract_relic', 'pending', { relicId });

        // Use the NeuralLimb helper to directly access relic content
        const relicData = await this.getRelicContent(relicId, 'animation');

        if (relicData) {
            await this.logActivity('animation_extract_relic', 'success', { relicId, source: 'direct' });
            return {
                status: 'success',
                relicId,
                clipUrl: `rsmv://relic:${relicId}`,
                frameCount: relicData.frameCount || 16,
                fps: relicData.fps || 15,
                data: relicData,
                source: 'relic_direct'
            };
        }

        // Fallback: Use AI to interpret the relic
        const aiResult: any = await modelRouter.route({
            type: 'animation',
            prompt: `Extract and interpret animation data from relic asset: ${relicId}`,
            options: { action: 'extract', relicId }
        }, this.env);

        await this.logActivity('animation_extract_relic', 'success', { relicId, source: 'ai' });

        return {
            status: 'success',
            relicId,
            clipUrl: aiResult.resultUrl || `rsmv://relic:${relicId}`,
            metadata: aiResult.metadata,
            source: 'ai_interpretation'
        };
    }

    /**
     * Generate a preview URL for an animation clip.
     * Fast operation for gallery/UI purposes.
     */
    async preview_url(params: { clipId: string; format?: string }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { clipId, format = 'gif' } = params;

        // Generate a preview URL based on clip ID
        const previewUrl = clipId.startsWith('rsmv://')
            ? `/api/relic/preview?id=${clipId.replace('rsmv://', '')}&format=${format}`
            : `/ai/assets/animations/${clipId}_preview.${format}`;

        return {
            status: 'success',
            clipId,
            previewUrl,
            format
        };
    }

    /**
     * List all animations in the innovation layer.
     * Provides gallery listing for AnimationWorkspace.
     */
    async inventory_animations(params?: any) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);

        await this.logActivity('animation_inventory', 'pending', {});

        const root = 'innovations/animation';

        // Try Cloud R2
        if (this.env?.ASSETS_BUCKET) {
            try {
                const list = await this.env.ASSETS_BUCKET.list({ prefix: root + '/' });
                const animations = list.objects.map((o: any) => ({
                    id: o.key.split('/').pop()?.replace(/\.[^/.]+$/, ''),
                    key: o.key,
                    size: o.size,
                    uploaded: o.uploaded,
                    url: `/ai/assets/${o.key}`,
                    source: 'cloud'
                }));

                await this.logActivity('animation_inventory', 'success', { count: animations.length });

                return {
                    status: 'success',
                    count: animations.length,
                    animations
                };
            } catch (e: any) {
                console.warn('[AnimationLimb] R2 inventory failed:', e.message);
            }
        }

        return { status: 'success', count: 0, animations: [], note: 'Animation storage unavailable.' };
    }

    /**
     * Batch generate multiple animations in parallel.
     * Optimized for bulk content creation.
     */
    async batch_generate(params: { prompts: string[] }, intent: BaseIntent & { modelId?: string; provider?: string }) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { prompts } = params;

        await this.logActivity('animation_batch_generate', 'pending', { count: prompts.length });

        const results = await this.batchRoute(
            prompts.map(prompt => ({
                type: 'animation',
                prompt,
                modelId: intent.modelId,
                provider: intent.provider
            }))
        );

        await this.logActivity('animation_batch_generate', 'success', { count: results.length });

        return {
            status: 'success',
            count: results.length,
            results: results.map((r: any, i: number) => ({
                prompt: prompts[i],
                clipUrl: r.clipUrl || r.resultUrl || `rsmv://motion:batch_${i}`,
                metadata: r.metadata
            }))
        };
    }
}

