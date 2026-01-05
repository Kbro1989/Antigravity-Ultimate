const fs = require('fs');
const glob = require('glob');

glob('src/**/*.{ts,tsx,js,jsx}', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('as: "raw"') || content.includes("as: 'raw'")) {
            console.log(`Found deprecated syntax in: ${file}`);
        }
    });
});
