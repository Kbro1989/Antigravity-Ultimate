import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LIMBS_DIR = path.join(ROOT, 'src', 'services', 'ai', 'limbs');
const PUBLIC_DIST = path.join(ROOT, 'public', 'dist');
const PUBLIC_LIMBS = path.join(ROOT, 'public', 'limbs');

// Ensure directories exist
[PUBLIC_DIST, PUBLIC_LIMBS].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

console.log('[PACKAGE-LIMBS] Starting neural payload extraction...');

// Scan limbs
const limbs = fs.readdirSync(LIMBS_DIR)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'NeuralLimb.ts');

limbs.forEach(limbFile => {
    const limbId = limbFile.replace('Limb.ts', '').toLowerCase();
    const sourcePath = path.join(LIMBS_DIR, limbFile);

    // In a "maximal" implementation, we might use esbuild to bundle these.
    // For now, we'll create a simulated .bin payload (header + source) 
    // to verify the serving infrastructure.

    const content = fs.readFileSync(sourcePath, 'utf8');
    const payload = `POG_LIMB_V6.5\nID:${limbId}\nSOURCE_MAP:INTERNAL\n---\n${content}`;

    // 1. Serve as .bin in /dist
    fs.writeFileSync(path.join(PUBLIC_DIST, `${limbId}.bin`), payload);

    // 2. Serve as direct metadata in /limbs
    const metadata = {
        id: limbId,
        version: '6.5.0-CORE',
        status: 'READY',
        endpoint: `/limbs/${limbId}`,
        payload: `/dist/${limbId}.bin`,
        capabilities: [] // Could parse from source if needed
    };
    fs.writeFileSync(path.join(PUBLIC_LIMBS, `${limbId}.json`), JSON.stringify(metadata, null, 2));

    console.log(`[Neural Link] Packed: ${limbId} -> /dist/${limbId}.bin`);
});

console.log(`[PACKAGE-LIMBS] Success. ${limbs.length} neural payloads synchronized to public distribution.`);
