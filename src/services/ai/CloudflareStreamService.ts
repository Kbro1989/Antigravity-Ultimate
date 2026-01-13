import { Env } from '../../types/env';
import { ProductionMetrics } from './trinity/types';

export interface StreamVideo {
    uid: string;
    thumbnail: string;
    readyToStream: boolean;
    status: {
        state: 'pendingupload' | 'downloading' | 'queued' | 'processing' | 'ready' | 'error';
        pctComplete?: string;
        errorReasonCode?: string;
        errorReasonText?: string;
    };
    meta: Record<string, any>;
    created: string;
    modified: string;
    size: number;
    preview: string;
}

export class CloudflareStreamService {
    private accountId: string;
    private apiToken: string;

    constructor(private env: Env) {
        this.accountId = env.CLOUDFLARE_ACCOUNT_ID;
        this.apiToken = env.CLOUDFLARE_API_TOKEN;
    }

    /**
     * Uploads a video from a remote URL to Cloudflare Stream.
     */
    async uploadFromUrl(url: string, meta: Record<string, any> = {}): Promise<StreamVideo> {
        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${this.accountId}/stream/copy`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url,
                meta: {
                    ...meta,
                    source: 'pog-ultimate-limbs'
                }
            })
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Cloudflare Stream Upload Failed: ${error}`);
        }

        const data = await response.json() as any;
        const video = data.result as StreamVideo;

        ProductionMetrics.log('stream_upload', {
            uid: video.uid,
            source: url,
            timestamp: Date.now()
        });

        return video;
    }

    /**
     * Generates a signed URL/token for secure private viewing.
     * Note: Requires a signing key to be configured in the Cloudflare Dashboard.
     */
    async createSignedUrl(videoUid: string): Promise<string> {
        // For actual JWT signing, we would use WebCrypto and the signing key.
        // As a fallback/first-step, we use the Cloudflare /token endpoint if available.
        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${this.accountId}/stream/${videoUid}/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            console.warn(`[STREAM] Failed to generate signed token for ${videoUid}. Access may be public.`);
            return `https://customer-${this.accountId}.cloudflarestream.com/${videoUid}/manifest/video.m3u8`;
        }

        const data = await response.json() as any;
        const token = data.result.token;

        return `https://customer-${this.accountId}.cloudflarestream.com/${token}/manifest/video.m3u8`;
    }

    /**
     * Constructs a Media Transformation URL for server-side editing.
     */
    getMediaTransformUrl(zone: string, sourceUrl: string, options: {
        mode?: 'video' | 'frame' | 'spritesheet' | 'audio';
        width?: number;
        height?: number;
        time?: string;
        duration?: string;
        fit?: 'contain' | 'cover' | 'scale-down';
    }): string {
        const optionParts = Object.entries(options)
            .map(([key, val]) => `${key}=${val}`)
            .join(',');

        return `https://${zone}/cdn-cgi/media/${optionParts}/${sourceUrl}`;
    }

    /**
     * Lists videos in the account.
     */
    async listVideos(params: {
        limit?: number;
        after?: string;
        before?: string;
        backend?: string;
        status?: string;
        asc?: boolean;
    } = {}): Promise<StreamVideo[]> {
        const query = new URLSearchParams();
        if (params.limit) query.set('limit', params.limit.toString());
        if (params.after) query.set('after', params.after);
        if (params.before) query.set('before', params.before);
        if (params.status) query.set('status', params.status);
        if (params.asc) query.set('asc', params.asc.toString());

        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${this.accountId}/stream?${query.toString()}`, {
            headers: {
                'Authorization': `Bearer ${this.apiToken}`
            }
        });

        const data = await response.json() as any;
        return data.result as StreamVideo[];
    }
}
