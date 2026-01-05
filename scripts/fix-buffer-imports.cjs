const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files);
        } else if (name.endsWith('.ts') || name.endsWith('.tsx')) {
            files.push(name);
        }
    }
    return files;
}

const servicesDir = path.join(process.cwd(), 'src', 'services');
const files = getFiles(servicesDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const hasBufferUsage = /Buffer\./.test(content) || /: Buffer/.test(content);
    const hasBufferImport = /import\s+{[^}]*Buffer[^}]*}\s+from\s+['"]buffer['"]/.test(content);

    if (hasBufferUsage && !hasBufferImport) {
        console.log(`Fixing: ${file}`);
        // Add import at the top
        // Careful not to break @ts-nocheck or existing imports
        const lines = content.split('\n');
        let insertIndex = 0;
        if (lines[0].startsWith('// @ts-nocheck') || lines[0].startsWith('/*')) {
            insertIndex = 1;
        }
        lines.splice(insertIndex, 0, `import { Buffer } from "buffer";`);
        fs.writeFileSync(file, lines.join('\n'), 'utf8');
    }
});
