import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { modelRouter } from '../ModelRouter';

export class AnimationLimb extends NeuralLimb {
    async process(intent: any) {
        const { action, animationData, prompt, options } = intent;

        await this.logActivity(`animation_${action}`, 'pending', { animationId: animationData?.id, prompt });

        try {
            switch (action) {
                case 'rig_model':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    const rigResult: any = await modelRouter.route({
                        type: 'animation',
                        prompt: `Rig this 3D model for humanoid animation: ${prompt || 'Standard Humanoid'}`,
                        domain: '3D'
                    });

                    if (rigResult.skeletonUrl) {
                        await this.persistAsset('skeleton', rigResult.skeletonUrl, { source: 'ai-rigger' });
                    }

                    return {
                        status: 'success',
                        skeletonUrl: rigResult.skeletonUrl || 'rsmv://7', // Fallback to standard skeleton if AI fails
                        metadata: rigResult.metadata
                    };

                case 'generate_motion':
                case 'retarget':
                case 'retarget_motion':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    const motionResult: any = await modelRouter.route({
                        type: 'animation',
                        prompt: prompt || `Generate and retarget motion: ${action}`,
                        options: { ...options, action }
                    });

                    if (motionResult.clipUrl || motionResult.resultUrl) {
                        await this.persistAsset('animation', motionResult.clipUrl || motionResult.resultUrl, { action });
                    }

                    return {
                        status: 'success',
                        clipUrl: motionResult.clipUrl || motionResult.resultUrl || 'rsmv://motion:default',
                        metadata: motionResult.metadata
                    };

                default:
                    throw new Error(`Unknown animation action: ${action}`);
            }
        } catch (e: any) {
            await this.logActivity(`animation_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
    }
}
