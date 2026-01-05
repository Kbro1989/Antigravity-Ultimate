const fs = require('fs');
const path = require('path');

function scanDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            scanDir(filePath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('as: "raw"') || content.includes("as: 'raw'")) {
                console.log(`Found deprecated syntax in: ${filePath}`);
            }
        }
    });
}

scanDir('src');
