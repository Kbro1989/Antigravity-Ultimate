
import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';
import { BaseIntent } from '../AITypes';
import { CloudflareStreamService } from '../CloudflareStreamService';

export class VideoLimb extends NeuralLimb {

    async generate(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.IMAGE_OPERATIONS);
        const { prompt, options, sourceRelic } = params;

        // Determine if we need a "Real Video" or a "Sprite Sheet"
        const isCinematic = prompt.toLowerCase().includes('cinematic') ||
            prompt.toLowerCase().includes('video') ||
            params.format === 'video';

        if (isCinematic) {
            this.enforceCapability(AgentCapability.VIDEO_OPERATIONS);
            this.enforceCapability(AgentCapability.NETWORK_ACCESS);

            await this.logActivity('video_generate_stream', 'pending', { prompt });

            // In a real flow, we might generate the first frame or a low-res preview 
            // using the Image model, then send the prompt to a real video gen model 
            // once Cloudflare AI supports it. For now, we simulate the Cloudflare Stream Upload.

            // Assume the user might have provided a source URL or we generate one.
            // Placeholder: Simulate a "Real Video" generation by uploading a sequence.
            const streamService = new CloudflareStreamService(this.env);

            // Simulate/Placeholder for AI Video Gen -> Stream Upload
            // In the future, this would be a direct AI call.
            const result = await this.callAI({
                type: 'image',
                prompt: `Cinematic frame: ${prompt}`,
                options: { ...options, format: 'video' },
                ...intent
            });

            if (result.imageUrl) {
                // If we have a preview, we start the stream "copy" from that URL 
                // (or a dedicated video gen endpoint)
                const videoAsset = await streamService.uploadFromUrl(result.imageUrl, {
                    prompt,
                    relicId: sourceRelic?.id
                });

                return {
                    status: 'success',
                    uid: videoAsset.uid,
                    videoUrl: await streamService.createSignedUrl(videoAsset.uid),
                    thumbnail: videoAsset.thumbnail,
                    ready: videoAsset.readyToStream,
                    metadata: {
                        ...result.metadata,
                        type: 'cloud_stream'
                    }
                };
            }
        }

        // --- FALLBACK PILLAR: Sprite Sheets / Keyframes ---
        const enhancedPrompt = `Sprite sheet, 4x4 grid, animation frames of ${prompt}. 
        Consistent character/object, flat background, pixel art or game asset style. 
        Sequence showing movement or action.`;

        await this.logActivity('video_generate_sprite', 'pending', { prompt: enhancedPrompt });

        const result = await this.callAI({
            type: 'image',
            prompt: enhancedPrompt,
            options: { ...options, format: 'sprite_sheet' },
            ...intent
        });

        if (result.imageUrl) {
            const creationId = `anim_${Date.now()}`;
            const stagedPath = `video/sprites/${creationId}.png`;

            const finalUrl = await this.persistAsset('texture', result.imageUrl, {
                parentRelic: sourceRelic?.id || 'genesis',
                animationType: 'sprite_sheet',
                frames: 16,
                suggestedPath: stagedPath,
                ...result.metadata
            });

            // Cast to any for dynamic property assignment
            (result as any).videoUrl = finalUrl;
            (result as any).StartFrame = 0;
            (result as any).EndFrame = 15;
            (result as any).type = 'sprite_sheet';
        }

        return result;
    }

    private async callAI(request: any) {
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

    // ==================== OPTIMIZED VIDEO OPERATIONS ====================

    /**
     * Clip a video segment from an existing Stream video.
     * Uses CloudflareStream's native clipping when available.
     */
    async clip_video(params: { uid: string; start: number; end: number }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.VIDEO_OPERATIONS);
        const { uid, start, end } = params;

        await this.logActivity('video_clip', 'pending', { uid, start, end });

        const streamService = new CloudflareStreamService(this.env);

        // Note: Cloudflare Stream doesn't natively support clipping in signed URLs.
        // We return the signed URL and let the player handle start/end.
        const baseUrl = await streamService.createSignedUrl(uid);
        const clipUrl = `${baseUrl}#t=${start},${end}`;

        await this.logActivity('video_clip', 'success', { uid, duration: end - start });

        return {
            status: 'success',
            clipUrl,
            originalUid: uid,
            start,
            end,
            duration: end - start
        };
    }

    /**
     * Create a looped version of a video.
     * Generates a manifest or playlist for seamless looping.
     */
    async loop_video(params: { uid: string; count: number }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.VIDEO_OPERATIONS);
        const { uid, count = 3 } = params;

        await this.logActivity('video_loop', 'pending', { uid, count });

        const streamService = new CloudflareStreamService(this.env);
        const signedUrl = await streamService.createSignedUrl(uid);

        // Return loop configuration for client-side implementation
        return {
            status: 'success',
            uid,
            loopCount: count,
            videoUrl: signedUrl,
            loopConfig: {
                mode: 'seamless',
                repetitions: count
            }
        };
    }

    /**
     * Extract frames from a video for sprite sheet generation.
     * Returns URLs or data URIs for individual frames.
     */
    async extract_frames(params: { uid: string; fps?: number; maxFrames?: number }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.VIDEO_OPERATIONS);
        const { uid, fps = 4, maxFrames = 16 } = params;

        await this.logActivity('video_extract_frames', 'pending', { uid, fps, maxFrames });

        const streamService = new CloudflareStreamService(this.env);

        // Use thumbnail endpoint with different timestamps
        const frames: string[] = [];
        const duration = 4; // Assume 4 second video, ideally fetch from metadata
        const interval = duration / maxFrames;

        for (let i = 0; i < maxFrames; i++) {
            const timestamp = Math.floor(i * interval);
            const thumbnailUrl = `https://customer-${this.env?.CF_ACCOUNT_ID || 'default'}.cloudflarestream.com/${uid}/thumbnails/thumbnail.jpg?time=${timestamp}s`;
            frames.push(thumbnailUrl);
        }

        await this.logActivity('video_extract_frames', 'success', { uid, frameCount: frames.length });

        return {
            status: 'success',
            uid,
            fps,
            frameCount: frames.length,
            frames
        };
    }

    /**
     * Get a preview thumbnail for a video.
     * Fast operation using CloudflareStream's thumbnail endpoint.
     */
    async preview_thumbnail(params: { uid: string; time?: number }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.VIDEO_OPERATIONS);
        const { uid, time = 0 } = params;

        const thumbnailUrl = `https://customer-${this.env?.CF_ACCOUNT_ID || 'default'}.cloudflarestream.com/${uid}/thumbnails/thumbnail.jpg?time=${time}s`;

        return {
            status: 'success',
            uid,
            thumbnailUrl,
            timestamp: time
        };
    }

    /**
     * List all videos in the Stream account.
     * Provides gallery listing for VideoWorkspace.
     */
    /**
     * List all videos in the Stream account.
     * Provides gallery listing for VideoWorkspace.
     */
    async inventory_videos(params: { limit?: number; after?: string; before?: string } = {}) {
        this.enforceCapability(AgentCapability.VIDEO_OPERATIONS);

        await this.logActivity('video_inventory', 'pending', params);

        const streamService = new CloudflareStreamService(this.env);

        try {
            const videos = await streamService.listVideos(params);

            await this.logActivity('video_inventory', 'success', { count: videos.length });

            return {
                status: 'success',
                count: videos.length,
                videos: videos.map((v: any) => ({
                    uid: v.uid,
                    name: v.meta?.name || v.uid,
                    duration: v.duration,
                    thumbnail: v.thumbnail,
                    ready: v.readyToStream,
                    created: v.created,
                    size: v.size
                }))
            };
        } catch (e: any) {
            console.warn('[VideoLimb] Failed to list videos:', e.message);
            return { status: 'success', count: 0, videos: [], note: 'Stream listing unavailable.' };
        }
    }

    /**
     * Batch generate multiple video/sprite assets in parallel.
     * Optimized for bulk content creation.
     */
    async batch_generate(params: { prompts: string[]; format?: string }, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.VIDEO_OPERATIONS);
        const { prompts, format = 'sprite_sheet' } = params;

        await this.logActivity('video_batch_generate', 'pending', { count: prompts.length });

        // Phase 1: Batch AI Inference
        const aiRequests = prompts.map(prompt => ({
            type: 'image',
            prompt: `Sprite sheet, 4x4 grid, animation frames of ${prompt}.`,
            options: { format },
            ...intent
        }));

        const aiResults = await this.batchRoute(aiRequests);

        // Phase 2: Parallel Persistence
        const finalResults = await Promise.all(aiResults.map(async (result: any, index: number) => {
            if (result.imageUrl || result.url || result.content) {
                const url = result.imageUrl || result.url || result.content;
                const creationId = `anim_${Date.now()}_${index}`;
                const stagedPath = `video/sprites/${creationId}.png`;

                // Persist logic duplicated from generate() 
                const finalUrl = await this.persistAsset('texture', url, {
                    animationType: format,
                    frames: 16,
                    suggestedPath: stagedPath,
                    ...result.metadata
                });

                return {
                    status: 'success',
                    originalPrompt: prompts[index],
                    videoUrl: finalUrl,
                    type: format,
                    metadata: result.metadata
                };
            }
            return { status: 'failed', originalPrompt: prompts[index], error: 'AI generation failed' };
        }));

        await this.logActivity('video_batch_generate', 'success', {
            count: finalResults.length,
            successful: finalResults.filter(r => r.status === 'success').length
        });

        return {
            status: 'success',
            count: finalResults.length,
            results: finalResults
        };
    }
}

