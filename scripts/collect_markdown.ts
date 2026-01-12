
import * as fs from 'fs';
import * as path from 'path';

const IGNORE_DIRS = ['node_modules', 'reference', 'dist', '.git', '.vscode', 'webviewer-deconstructed'];
const OUTPUT_FILE = 'collected_markdown.md';

interface MDFile {
    path: string;
    birthtime: Date;
    content: string;
}

function getAllFiles(dir: string, fileList: string[] = []): string[] {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (!IGNORE_DIRS.includes(file)) {
                getAllFiles(filePath, fileList);
            }
        } else {
            if (path.extname(file).toLowerCase() === '.md') {
                fileList.push(filePath);
            }
        }
    });

    return fileList;
}

async function run() {
    console.log('--- Collecting Markdown Files ---');
    const rootDir = process.cwd();
    const allFiles = getAllFiles(rootDir);

    const mdFiles: MDFile[] = [];

    for (const filePath of allFiles) {
        // Skip the output file itself if it exists
        if (path.basename(filePath) === OUTPUT_FILE) continue;

        const stat = fs.statSync(filePath);
        const content = fs.readFileSync(filePath, 'utf8');

        mdFiles.push({
            path: filePath,
            birthtime: stat.birthtime, // Creation time
            content: content
        });
    }

    // Sort oldest first
    mdFiles.sort((a, b) => a.birthtime.getTime() - b.birthtime.getTime());

    console.log(`Found ${mdFiles.length} markdown files.`);

    let finalOutput = `# Collected Markdown Content\nGenerated: ${new Date().toISOString()}\n\n`;

    for (const file of mdFiles) {
        const relativePath = path.relative(rootDir, file.path);
        finalOutput += `\n\n${'='.repeat(50)}\n`;
        finalOutput += `# FILE: ${relativePath}\n`;
        finalOutput += `# CREATED: ${file.birthtime.toISOString()}\n`;
        finalOutput += `${'='.repeat(50)}\n\n`;
        finalOutput += file.content;
    }

    fs.writeFileSync(OUTPUT_FILE, finalOutput);
    console.log(`\nSuccessfully wrote content to ${OUTPUT_FILE}`);
    console.log('Files included:');
    mdFiles.forEach(f => console.log(`- ${path.relative(rootDir, f.path)} (${f.birthtime.toISOString()})`));
}

run().catch(console.error);
