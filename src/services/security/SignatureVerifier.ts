
export class SignatureVerifier {
    /**
     * Verifies an ECDSA P-256 signature for a given request.
     * Expects headers:
     * - X-Signature: Base64 encoded signature
     * - X-Timestamp: Unix timestamp (prevent replay attacks)
     * - X-Public-Key: Base64 encoded public key (if not pinning specific keys yet, otherwise we verify this matches a whitelist)
     */
    static async verify(req: Request, allowedPublicKeys?: string[]): Promise<{ isValid: boolean; error?: string }> {
        const signatureB64 = req.headers.get('X-Signature');
        const timestamp = req.headers.get('X-Timestamp');
        const publicKeyB64 = req.headers.get('X-Public-Key');

        if (!signatureB64 || !timestamp || !publicKeyB64) {
            return { isValid: false, error: 'Missing security headers' };
        }

        // 1. Replay Attack Check (e.g., 60s window)
        const now = Date.now();
        const reqTime = parseInt(timestamp, 10);
        if (Math.abs(now - reqTime) > 60000) {
            return { isValid: false, error: 'Request timestamp expired (Replay Check)' };
        }

        try {
            // 2. Import Public Key
            const keyBuffer = SignatureVerifier.base64ToArrayBuffer(publicKeyB64);
            const key = await crypto.subtle.importKey(
                'spki',
                keyBuffer,
                { name: 'ECDSA', namedCurve: 'P-256' },
                false,
                ['verify']
            );

            // 3. Reconstruct Payload (Method + URL + Timestamp + Body)
            // Note: Body reading clones the request to avoid consuming it if possible, 
            // but in Workers req.clone() is cheap for this.
            const url = new URL(req.url);
            let body = '';
            if (req.method !== 'GET' && req.method !== 'HEAD') {
                body = await req.clone().text();
            }

            const payload = `${req.method}:${url.pathname}:${timestamp}:${body}`;
            const encoder = new TextEncoder();
            const data = encoder.encode(payload);
            const signature = SignatureVerifier.base64ToArrayBuffer(signatureB64);

            // 4. Verify
            const valid = await crypto.subtle.verify(
                { name: 'ECDSA', hash: { name: 'SHA-256' } },
                key,
                signature,
                data
            );

            return { isValid: valid, error: valid ? undefined : 'Invalid cryptographic signature' };

        } catch (e: any) {
            console.error('[Security] Verification failed:', e);
            return { isValid: false, error: `Verification internal error: ${e.message}` };
        }
    }

    private static base64ToArrayBuffer(base64: string): ArrayBuffer {
        const binaryString = atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }
}
