/**
 * QuantumProvenance - Cryptographic verification of neural content origin.
 * Ensures data integrity for synchronization between Ghost Limbs (local) and Cloud Limbs.
 */
export class QuantumProvenance {
    private static async getKey(secret: string): Promise<CryptoKey> {
        const enc = new TextEncoder();
        return crypto.subtle.importKey(
            "raw",
            enc.encode(secret),
            { name: "HMAC", hash: "SHA-256" },
            false,
            ["sign", "verify"]
        );
    }

    /**
     * Sign content with platform key
     */
    static async sign(content: string, provider: string, secret: string = "dev-secret"): Promise<string> {
        const origin = provider === 'local' || provider === 'ollama' ? 'GHOST' : 'CLOUD';
        const timestamp = Date.now();
        const dataToSign = `${origin}:${timestamp}:${content}`;

        const key = await this.getKey(secret);
        const signature = await crypto.subtle.sign(
            "HMAC",
            key,
            new TextEncoder().encode(dataToSign)
        );

        const sigHex = Array.from(new Uint8Array(signature))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');

        return `pog_sig_v1:${origin}:${timestamp}:${sigHex}`;
    }

    /**
     * Verify content origin
     */
    static async verify(content: string, signature: string, secret: string = "dev-secret"): Promise<boolean> {
        if (!signature.startsWith('pog_sig_v1:')) return false;

        const parts = signature.split(':');
        if (parts.length !== 4) return false;

        const [_, origin, timestamp, sigHex] = parts;
        const dataToSign = `${origin}:${timestamp}:${content}`;

        const key = await this.getKey(secret);
        const sigBytes = new Uint8Array(sigHex.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));

        return crypto.subtle.verify(
            "HMAC",
            key,
            sigBytes,
            new TextEncoder().encode(dataToSign)
        );
    }
}
