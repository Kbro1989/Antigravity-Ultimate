import { BehaviorLimb } from './src/services/ai/limbs/BehaviorLimb';
import { AgentCapability } from './src/services/ai/AgentConstitution';

async function testSynthesis() {
    console.log('--- Testing BehaviorLimb Synthesis ---');

    const config = {
        id: 'behavior',
        userId: 'test_user',
        capabilities: [AgentCapability.AI_INFERENCE, AgentCapability.WRITE_FILES],
        env: {
            ASSETS_BUCKET: null // Fallback to local disk
        } as any
    };

    const limb = new BehaviorLimb(config);

    try {
        const result = await limb.synthesize_logic({
            prompt: "A aggressive guard that patrols the gate and attacks intruders",
            context: { area: 'main_gate' }
        }, { action: 'behavior_synthesize' } as any);

        console.log('Status:', result.status);
        console.log('Behavior ID:', result.behaviorId);
        console.log('Root Node:', result.behavior.root.name);
        console.log('Metadata:', result.behavior.metadata);
    } catch (e) {
        console.error('Synthesis Failed:', e);
    }
}

// Mocking callAI for the test env if needed, but in this context 
// we want to see if the limb is structurally sound.
// Since I can't run real AI calls in this test shim easily, 
// I'll verify the code structure compiles and has no obvious flaws.
console.log('Verification script ready.');
