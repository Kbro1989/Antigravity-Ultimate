
import * as fs from 'fs';
import * as path from 'path';

const REF_ROOT = path.join(process.cwd(), 'reference', 'rsc-cloudflare');
const DATA_ROOT = path.join(REF_ROOT, 'rsc-data', 'config');

const FALLBACK_ITEM_MAX = 1289;
const FALLBACK_NPC_MAX = 793;

async function audit() {
    console.log('--- Auditing POG Reference Data ---');
    console.log(`Target: ${REF_ROOT}`);

    // Load Museum Ranges
    const itemRangesPath = path.join(REF_ROOT, 'ITEM_ID_RANGES.json');
    const npcRangesPath = path.join(REF_ROOT, 'NPC_ID_RANGES.json');

    const itemRanges = fs.existsSync(itemRangesPath) ? JSON.parse(fs.readFileSync(itemRangesPath, 'utf8')) : null;
    const npcRanges = fs.existsSync(npcRangesPath) ? JSON.parse(fs.readFileSync(npcRangesPath, 'utf8')) : null;

    if (!itemRanges || !npcRanges) {
        console.error('CRITICAL: Missing Museum ID Ranges in reference folder!');
        process.exit(1);
    }

    // Load Active Config
    const itemsPath = path.join(DATA_ROOT, 'items.json');
    const npcsPath = path.join(DATA_ROOT, 'npcs.json');

    const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));
    const npcs = JSON.parse(fs.readFileSync(npcsPath, 'utf8'));

    // --- ITEM AUDIT ---
    console.log('\n[ITEM AUDIT]');
    let itemMismatches = 0;
    let itemShadows = 0;

    // 1. Check Historical Range (0-1289)
    for (let i = 0; i <= FALLBACK_ITEM_MAX; i++) {
        const active = items[i];
        if (!active) continue; // Missing is fine for now, we care about conflicts

        // Find authentic name
        let validName = '';
        for (const cat of Object.values(itemRanges.categories) as any[]) {
            const match = cat.items?.find((x: any) => x.id === i);
            if (match) { validName = match.name; break; }
        }

        if (validName && active.name.toLowerCase() !== validName.toLowerCase()) {
            console.error(`Mismatch ID ${i}: Expected "${validName}", Found "${active.name}"`);
            itemMismatches++;
        }
    }

    // 2. Check Custom Range (Must not be in 1290-19999 ideally, but mainly ensure Necromancy is safe)
    // Necromancy Items: 754 (Modified Authentic), 37 (Modified Authentic) - These are safe if they match name.
    console.log('Verifying Necromancy Items...');
    const axe = items[754];
    const rune = items[37];

    if (axe && axe.name === 'Bloody axe of zamorak' && axe.price === 1000000) {
        console.log('✅ Bloody Axe (754) confirmed authentic + patched price.');
    } else {
        console.error('❌ Bloody Axe mismatch:', axe);
        itemMismatches++;
    }

    if (rune && rune.name === 'Life rune' && rune.price === 5000) {
        console.log('✅ Life Rune (37) confirmed authentic + patched price.');
    } else {
        console.error('❌ Life Rune mismatch:', rune);
        itemMismatches++;
    }

    // --- NPC AUDIT ---
    console.log('\n[NPC AUDIT]');
    let npcMismatches = 0;

    // 1. Check Historical Range (0-793)
    for (let i = 0; i <= FALLBACK_NPC_MAX; i++) {
        const active = npcs[i];
        if (!active) continue;

        let validName = '';
        for (const cat of Object.values(npcRanges.categories) as any[]) {
            const match = cat.npcs?.find((x: any) => x.id === i);
            if (match) { validName = match.name; break; }
        }

        if (validName && active.name.toLowerCase() !== validName.toLowerCase()) {
            console.error(`Mismatch ID ${i}: Expected "${validName}", Found "${active.name}"`);
            npcMismatches++;
        }
    }

    // 2. Check Necromancy Range (10000+)
    const zombie = npcs[10000];
    if (zombie && zombie.name.includes('Zombie')) {
        console.log('✅ Necromancy NPCs (10000+) detected.');
    } else {
        console.warn('⚠️ No Necromancy NPCs found at ID 10000.');
    }

    console.log('\n--- Final Result ---');
    if (itemMismatches === 0 && npcMismatches === 0) {
        console.log('SUCCESS: Reference data is clean and valid.');
        process.exit(0);
    } else {
        console.error(`FAILURE: Found ${itemMismatches} item mismatches and ${npcMismatches} NPC mismatches.`);
        process.exit(1);
    }
}

audit();
