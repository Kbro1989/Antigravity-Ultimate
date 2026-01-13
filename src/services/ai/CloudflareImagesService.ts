import { Env } from '../../types/env';
import { ProductionMetrics } from './trinity/types';

export interface ImageUploadResult {
    id: string;
    filename: string;
    uploaded: string;
    requireSignedURLs: boolean;
    variants: string[];
    meta: Record<string, any>;
}

export class CloudflareImagesService {
    private accountId: string;
    private apiToken: string;

    constructor(private env: Env) {
        this.accountId = env.CLOUDFLARE_ACCOUNT_ID;
        this.apiToken = env.CLOUDFLARE_API_TOKEN;
    }

    /**
     * Uploads an image to Cloudflare Images via URL.
     */
    async uploadFromUrl(url: string, meta: Record<string, any> = {}): Promise<ImageUploadResult> {
        const formData = new FormData();
        formData.append('url', url);
        formData.append('metadata', JSON.stringify({
            ...meta,
            source: 'pog-ultimate-limbs'
        }));

        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${this.accountId}/images/v1`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiToken}`
            },
            body: formData
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Cloudflare Images Upload Failed: ${error}`);
        }

        const data = await response.json() as any;
        const result = data.result as ImageUploadResult;

        ProductionMetrics.log('image_upload', {
            id: result.id,
            source: url,
            timestamp: Date.now()
        });

        return result;
    }

    /**
     * Constructs a transformation URL.
     * Note: User noted 5,000 unique transformations limit on Free plan.
     * We should be conservative with "unique" combinations.
     */
    getTransformUrl(imageId: string, variant: string = 'public'): string {
        // Standard Cloudflare Images delivery URL
        return `https://imagedelivery.net/${this.env.CLOUDFLARE_IMAGES_HASH}/${imageId}/${variant}`;
    }

    /**
     * Uses Flexible Variants (if enabled) for custom transformations.
     * https://developers.cloudflare.com/images/manage-images/#flexible-variants
     */
    getFlexibleUrl(imageId: string, options: {
        width?: number,
        height?: number,
        fit?: 'contain' | 'cover' | 'scale-down' | 'pad',
        background?: string,
        quality?: number,
        format?: 'auto' | 'avif' | 'webp' | 'json'
    }): string {
        const optionParts = Object.entries(options)
            .map(([key, val]) => `${key}=${val}`)
            .join(',');

        // This usually requires a custom domain or specific setup:
        // https://example.com/cdn-cgi/image/width=100,height=100/https://imagedelivery.net/<HASH>/<ID>/public
        const base = `https://imagedelivery.net/${this.env.CLOUDFLARE_IMAGES_HASH}/${imageId}/public`;
        return `https://${this.env.CUSTOM_DOMAIN || 'pog-network.com'}/cdn-cgi/image/${optionParts}/${base}`;
    }

    /**
     * Deletes an image.
     */
    async deleteImage(imageId: string): Promise<void> {
        await fetch(`https://api.cloudflare.com/client/v4/accounts/${this.accountId}/images/v1/${imageId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${this.apiToken}`
            }
        });
    }
}
