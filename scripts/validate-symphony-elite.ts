
import * as fs from 'fs';
import * as path from 'path';
import { SymphonyParser } from '../src/services/symphony/SymphonyParser.ts';
import { LimbRegistry } from '../src/services/ai/LimbRegistry.ts';
import { AgentCapability } from '../src/services/ai/AgentConstitution.ts';

// Mock CLI Bridge
const mockBridge: any = {
    executeCommand: async (cmd: string) => ({ statusCode: 0, stdout: `Mock output for ${cmd}` }),
    writeLocalFile: async (path: string, content: string) => {
        console.log(`[MockBridge] Writing to ${path}`);
        return { success: true };
    }
};

const DATA204_PATH = 'C:/Users/Destiny/Desktop/New folder/POG-Ultimate/dist/data204';
const RSC_CONFIG_PATH = 'C:/Users/Destiny/Desktop/New folder/POG-Ultimate/rsc-data/config';

// Initialize Registry
const registry = new LimbRegistry('elite-test-user', mockBridge, {
    KV: {},
    DB: {},
    AI: { run: async () => ({ response: '{"steps": []}' }) }
});

// Load the actual Limbs (mocking the extension manager scan for this test)
import { RelicLimb } from '../src/services/ai/limbs/RelicLimb.ts';
import { ImageLimb } from '../src/services/ai/limbs/ImageLimb.ts';
import { MeshOpsLimb } from '../src/services/ai/limbs/MeshOpsLimb.ts';
import { MaterialLimb } from '../src/services/ai/limbs/MaterialLimb.ts';
import { AnimationLimb } from '../src/services/ai/limbs/AnimationLimb.ts';
import { LiveGameLimb } from '../src/services/ai/limbs/LiveGameLimb.ts';
import { RealityLimb } from '../src/services/ai/limbs/RealityLimb.ts';

registry.safeRegister('relic', RelicLimb, [AgentCapability.READ_FILES, AgentCapability.EXECUTE_COMMAND]);
registry.safeRegister('image', ImageLimb, [AgentCapability.AI_INFERENCE]);
registry.safeRegister('mesh', MeshOpsLimb, [AgentCapability.WRITE_FILES]);
registry.safeRegister('material', MaterialLimb, [AgentCapability.AI_INFERENCE]);
registry.safeRegister('animation', AnimationLimb, [AgentCapability.AI_INFERENCE]);
registry.safeRegister('live_game', LiveGameLimb, [AgentCapability.EXECUTE_COMMAND]);
registry.safeRegister('reality', RealityLimb, [AgentCapability.EXECUTE_COMMAND]);

async function validate() {
    console.log("🚀 Starting Elite Validation: Volcanic Ascension");
    console.log(`📂 Data204: ${DATA204_PATH}`);
    console.log(`📂 RSC Config: ${RSC_CONFIG_PATH}\n`);

    const workflowPath = path.join(__dirname, '../public/assets/generated/workflows/volcanic-ascension.md');
    const content = fs.readFileSync(workflowPath, 'utf-8');

    console.log("📦 Parsing Workflow...");
    const parsed = SymphonyParser.parse(content);
    console.log(`✅ Parsed ${parsed.steps.length} steps: ${parsed.name}\n`);

    for (const step of parsed.steps) {
        console.log(`➡️  Executing Step [${step.id}]: ${step.name}`);
        console.log(`   Action: ${step.action}`);

        try {
            const result = await registry.processIntent({
                action: step.action as any,
                payload: step.params,
                limbId: step.limbId // If explicitly provided
            });
            console.log(`   ✅ Success: ${JSON.stringify(result).substring(0, 100)}...`);
        } catch (e: any) {
            console.error(`   ❌ Failed: ${e.message}`);
            process.exit(1);
        }
        console.log("");
    }

    console.log("🏁 Validation Complete. All Neural Pathways Functional.");
}

validate().catch(err => {
    console.error("Fatal Validation Error:", err);
    process.exit(1);
});
