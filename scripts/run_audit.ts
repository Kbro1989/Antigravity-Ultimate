import { IDAuditorLimb } from '../src/services/ai/limbs/IDAuditorLimb';
import { AgentCapability } from '../src/services/ai/AgentConstitution';
import * as fs from 'fs';
import * as path from 'path';

async function runAudit() {
    console.log('--- Starting POG Forensic Audit ---');

    // @ts-ignore
    const config = {
        id: 'auditor',
        userId: 'system',
        capabilities: [AgentCapability.MEMORY_QUERY, AgentCapability.WRITE_FILES],
        env: {} as any
    };

    const auditor = new IDAuditorLimb(config);

    console.log('Auditing NPC Database...');
    const npcResult: any = await auditor.audit_npc_database();

    console.log('Auditing Item Database...');
    const itemResult: any = await auditor.audit_item_database();

    const auditReport = `
--- POG FORENSIC AUDIT REPORT ---
Generated: ${new Date().toISOString()}

[NPC AUDIT]
Aligned: ${npcResult.aligned}
Museum Count: ${npcResult.museumCount}
Mismatches: ${npcResult.mismatches?.length || 0}
Missing IDs: ${npcResult.missing?.length || 0}

[ITEM AUDIT]
Aligned: ${itemResult.aligned}
Museum Count: ${itemResult.museumCount}
Mismatches: ${itemResult.mismatches?.length || 0}
Missing IDs: ${itemResult.missing?.length || 0}
    `;

    fs.writeFileSync('audit_report.txt', auditReport);
    fs.writeFileSync('authority_audit.txt', JSON.stringify({ npcs: npcResult, items: itemResult }, null, 2));

    console.log('Audit complete. Results written to audit_report.txt and authority_audit.txt');
}

runAudit().catch(console.error);
