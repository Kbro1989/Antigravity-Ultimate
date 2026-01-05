
const AIMLAPI_BASE_URL = 'https://api.aimlapi.com/v1';

export interface AimlapiImageTo3DResponse {
    url: string;
    fileName: string;
    blob: Blob;
    format: 'glb' | 'obj';
    metadata: any;
}

export async function imageToModel(imageUrl: string, apiKey: string): Promise<AimlapiImageTo3DResponse> {
    try {
        const response = await fetch(`${AIMLAPI_BASE_URL}/images/generations`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'triposr',
                image_url: imageUrl,
            }),
        });

        if (!response.ok) throw new Error(`AIML API error: ${response.statusText}`);

        const data = await response.json() as any;
        const meshUrl = data.model_mesh.url;
        const fileName = data.model_mesh.file_name;

        const meshResponse = await fetch(meshUrl);
        const meshBlob = await meshResponse.blob();

        return {
            url: meshUrl,
            fileName,
            blob: meshBlob,
            format: fileName.endsWith('.glb') ? 'glb' : 'obj',
            metadata: data
        };
    } catch (error) {
        console.error('[AIML] Failed:', error);
        throw error;
    }
}

export const aimlapiService = { imageToModel };
export default aimlapiService;
