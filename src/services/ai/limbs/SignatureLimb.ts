import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { BaseIntent } from '../AITypes';

export class SignatureLimb extends NeuralLimb {

    /**
     * Generates a cryptographic SHA-256 signature for a given payload or asset.
     */
    async sign(params: any, intent: BaseIntent) {
        this.enforceCapability(AgentCapability.SECURITY_AUDIT);
        const { targetId, content, metadata } = params;

        // Ensure we have something to hash
        const dataToHash = content
            ? (typeof content === 'string' ? content : JSON.stringify(content))
            : JSON.stringify({ targetId, metadata, timestamp: Date.now() });

        const signature = await this.generateHash(dataToHash);

        await this.logActivity('asset_signed', 'success', { targetId, signature });

        return {
            status: 'success',
            targetId,
            signature,
            algorithm: 'SHA-256',
            signed_at: Date.now(),
            signer: 'POG_SIGNATURE_LIMB_V1'
        };
    }

    /**
     * Verifies a signature against a payload.
     */
    async verify(params: any) {
        this.enforceCapability(AgentCapability.SECURITY_AUDIT);
        const { content, signature } = params;
        const currentHash = await this.generateHash(typeof content === 'string' ? content : JSON.stringify(content));

        return {
            status: 'success',
            isValid: currentHash === signature,
            currentHash,
            expectedHash: signature
        };
    }

    /**
     * Native WebCrypto SHA-256 Implementation
     */
    private async generateHash(message: string): Promise<string> {
        const msgUint8 = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
}
