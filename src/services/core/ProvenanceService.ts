/**
// using global Buffer
 * ProvenanceService - reality Anchors for AI-generated artifacts.
 * Ensures the lineage and integrity of generated files.
 */



export interface ProvenanceMetadata {
    prompt: string;
    model: string;
    timestamp: number;
    generator: string; // The Limb ID
    hash: string;      // Hash of the generated content
}

export class ProvenanceService {
    private static instance: ProvenanceService;

    private constructor() { }

    public static getInstance(): ProvenanceService {
        if (!ProvenanceService.instance) {
            ProvenanceService.instance = new ProvenanceService();
        }
        return ProvenanceService.instance;
    }

    /**
     * Signs an artifact with its creation metadata
     */
    public sign(content: string, metadata: Omit<ProvenanceMetadata, 'hash' | 'timestamp'>): string {
        const timestamp = Date.now();
        const hash = this.simpleHash(content);

        const fullMetadata: ProvenanceMetadata = {
            ...metadata,
            hash,
            timestamp
        };

        const signature = Buffer.from(JSON.stringify(fullMetadata)).toString('base64');

        // Return the signature block to be appended to the file
        return `\n\n/* REALITY_ANCHOR_BEGIN */\n/* SIGNATURE: ${signature} */\n/* LAW: Third Law */\n/* REALITY_ANCHOR_END */`;
    }

    /**
     * Verifies the signature of an artifact
     */
    public verify(content: string, signatureBlock: string): boolean {
        try {
            const match = signatureBlock.match(/SIGNATURE: (.*) \*/);
            if (!match) return false;

            const metadataString = Buffer.from(match[1], 'base64').toString('utf-8');
            const metadata: ProvenanceMetadata = JSON.parse(metadataString);

            // Re-hash content (excluding the anchor block)
            const actualHash = this.simpleHash(content.split('/* REALITY_ANCHOR_BEGIN */')[0].trim());

            return actualHash === metadata.hash;
        } catch (e) {
            return false;
        }
    }

    private simpleHash(s: string): string {
        // A simple non-cryptographic hash for demonstration; in production, use WebCrypto or Node crypto
        let h = 0;
        for (let i = 0; i < s.length; i++) {
            h = Math.imul(31, h) + s.charCodeAt(i) | 0;
        }
        return Math.abs(h).toString(16);
    }
}

