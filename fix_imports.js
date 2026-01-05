import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function replaceInFile(filePath, search, replace) {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(search, replace);
    fs.writeFileSync(filePath, newContent);
}

const rootDir = process.argv[2] || '.';
const animPath = path.join(rootDir, 'src/services/rsmv/3d/animationframes.ts');
const mapPath = path.join(rootDir, 'src/services/rsmv/3d/classicmap.ts');

try {
    replaceInFile(animPath, /import \{ ThreejsSceneCache \} from "\.\/modeltothree";/g, 'import { ThreejsSceneCache } from "./enginecache";');
    replaceInFile(mapPath, /import \{ constModelsIds, EngineCache \} from "\.\/modeltothree";/g, 'import { constModelsIds, EngineCache } from "./enginecache";');
    replaceInFile(animPath, /framearch\.map\(\(q, i\) =>/g, 'framearch.map((q: any) =>');
    replaceInFile(mapPath, /config\.tiles\.map\(async q =>/g, 'config.tiles.map(async (q: any) =>');
    console.log('Replacements done');
} catch (e) {
    console.error('Error during replacements:', e);
}
