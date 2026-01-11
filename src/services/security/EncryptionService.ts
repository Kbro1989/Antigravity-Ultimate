export class EncryptionService {
    private static ALGORITHM = 'AES-GCM';
    private static IV_LENGTH = 12; // 96 bits recommended for GCM

    /**
     * Import a raw master key from secret variable
     */
    static async importKey(rawKey: string): Promise<CryptoKey> {
        const encoder = new TextEncoder();
        const keyData = encoder.encode(rawKey);
        // Hash the key to ensure it's the correct length (256 bits)
        const hash = await crypto.subtle.digest('SHA-256', keyData);

        return await crypto.subtle.importKey(
            'raw',
            hash,
            { name: this.ALGORITHM },
            false,
            ['encrypt', 'decrypt']
        );
    }

    /**
     * Encrypt data using AES-GCM
     * Returns "iv:ciphertext" string
     */
    static async encrypt(text: string, masterKey: CryptoKey): Promise<string> {
        const iv = crypto.getRandomValues(new Uint8Array(this.IV_LENGTH));
        const encoder = new TextEncoder();
        const data = encoder.encode(text);

        const encrypted = await crypto.subtle.encrypt(
            {
                name: this.ALGORITHM,
                iv: iv as any
            },
            masterKey,
            data
        );

        const encryptedArray = new Uint8Array(encrypted);
        return `${this.toHex(iv)}:${this.toHex(encryptedArray)}`;
    }

    /**
     * Decrypt data using AES-GCM
     * Expects "iv:ciphertext" string
     */
    static async decrypt(encryptedString: string, masterKey: CryptoKey): Promise<string> {
        const [ivHex, cipherHex] = encryptedString.split(':');
        if (!ivHex || !cipherHex) throw new Error('Invalid encrypted format');

        const iv = this.fromHex(ivHex);
        const ciphertext = this.fromHex(cipherHex);

        const decrypted = await crypto.subtle.decrypt(
            {
                name: this.ALGORITHM,
                iv: iv as any
            },
            masterKey,
            ciphertext as any
        );

        const decoder = new TextDecoder();
        return decoder.decode(decrypted);
    }

    // --- Helpers ---

    private static toHex(buffer: Uint8Array): string {
        return Array.from(buffer)
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
    }

    private static fromHex(hex: string): Uint8Array {
        const bytes = new Uint8Array(hex.length / 2);
        for (let i = 0; i < hex.length; i += 2) {
            bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
        }
        return bytes;
    }
}
