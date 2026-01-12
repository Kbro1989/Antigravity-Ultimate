const { execSync } = require('child_process');
const fs = require('fs');

const WRANGLER_CMD = 'npx wrangler';

function runHelp(args = []) {
    try {
        const cmd = `${WRANGLER_CMD} ${args.join(' ')} --help`;
        // console.log(`Running: ${cmd}`);
        return execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    } catch (e) {
        // Some commands exit with 1 on help or error if no args, try caching stdout if available
        return e.stdout || '';
    }
}

function parseHelpOutput(output) {
    const lines = output.split('\n');
    const commands = [];
    let capture = false;

    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed === 'COMMANDS') {
            capture = true;
            continue;
        }
        if (trimmed === 'GLOBAL FLAGS' || trimmed === 'FLAGS' || trimmed === 'ARGUMENTS' || trimmed === 'POSITIONALS') {
            capture = false;
        }

        if (capture && trimmed) {
            // Lines look like: "wrangler doc [search]   Description..."
            // Or "wrangler kv:namespace create <binding>  Description"
            const match = line.match(/^\s+wrangler\s+([a-z0-9:-]+)/);
            if (match) {
                commands.push(match[1]);
            }
        }
    }
    return commands;
}

function cleanDescription(output) {
    // Extract description or usage
    return output;
}

const documentation = [];

function explore(cmdPath) {
    console.log(`Exploring: wrangler ${cmdPath.join(' ')}`);
    const output = runHelp(cmdPath);

    // Add to doc
    documentation.push(`\n## \`wrangler ${cmdPath.join(' ')}\`\n`);
    documentation.push('```text');
    documentation.push(output.trim());
    documentation.push('```');

    // Find subcommands
    const subcommands = parseHelpOutput(output);

    // Filter out the current command itself (sometimes listed) and dupes
    const uniqueSubcommands = subcommands.filter(sub => {
        const parts = sub.split(' '); // "kv:namespace" or "kv namespace"? usually "kv"
        const lastPart = parts[parts.length - 1];
        // If we are at "wrangler kv", and it lists "wrangler kv:namespace", we want "kv:namespace"
        // But parseHelpOutput extracts "kv:namespace".

        // We only want direct children. 
        // If cmdPath is [], we accept "kv", "dev", etc.
        // If cmdPath is ["kv"], we might see "kv:namespace" or "namespace" depending on formatting.

        // Let's rely on the parsing logic: it returns the full token after "wrangler".
        // e.g. "kv" or "kv:namespace"

        return sub.startsWith(cmdPath.join(':')) || (cmdPath.length === 0);
    });

    // Heuristic: If we are deep, stop? No, user wants all.
    // Logic: 
    // Top level: "wrangler" -> ["kv", "dev", ...]
    // "kv" -> output shows "wrangler kv:namespace", "wrangler kv:key", etc.

    // We need to parse strictly what are the SUB commands.
    // The help output usually lists commands like:
    // COMMANDS
    //   wrangler kv:namespace
    //   wrangler kv:key

    const children = [];
    if (cmdPath.length === 0) {
        // Root
        children.push(...subcommands);
    } else {
        // Subcommand level
        // if we are at "kv", we look for "kv:namespace", "kv:key"
        subcommands.forEach(sub => {
            // sub is like "kv:namespace"
            if (sub !== cmdPath.join(':') && sub.startsWith(cmdPath.join(':'))) {
                // It is a child
                // Check if it's a direct child?
                // e.g. "kv:namespace" is child of "kv"
                // "kv:namespace:create" is child of "kv:namespace"

                // We only traverse if it's 1 level deeper?
                // Actually, just traverse all found "COMMANDS" that haven't been visited.
                children.push(sub);
            }
        });
    }

    // Recurse
    // To avoid infinite loops or re-visiting, maybe keep a visited set?
    // But structure is tree-like.

    // Process children
    // The children strings from parseHelpOutput are like "kv:namespace" or "dev"
    // We need to pass them recursively.
    // Note: "wrangler kv:namespace" might just be "kv:namespace" arg.

    // Wait, "wrangler kv:namespace" -> is "kv:namespace" a single token or "kv namespace"?
    // Modern wrangler (v3+) uses space separator for some, colon for others?
    // Based on `wrangler_help_output.txt`: "wrangler kv", "wrangler r2".
    // Let's check `wrangler kv --help`.

    // For now, let's just assume the parsed tokens are the next commands.

}

// recursive approach can be tricky with formatting.
// Iterative BFS/DFS is safer.

async function main() {
    const queue = [[]];
    const visited = new Set();
    const results = [];

    while (queue.length > 0) {
        const currentPath = queue.shift();
        const pathKey = currentPath.join(' ');

        if (visited.has(pathKey)) continue;
        visited.add(pathKey);

        console.log(`Processing: wrangler ${pathKey}`);
        const output = runHelp(currentPath);

        results.push({
            path: pathKey,
            output: output
        });

        // Parse children
        // lines with "wrangler <cmd>"
        const lines = output.split('\n');
        let inCommands = false;

        for (const line of lines) {
            if (line.trim() === 'COMMANDS') {
                inCommands = true;
                continue;
            }
            if (line.trim().match(/^[A-Z ]+$/) && line.trim() !== 'COMMANDS') {
                inCommands = false; // Next section like GLOBAL FLAGS
            }

            if (inCommands) {
                const match = line.match(/^\s+wrangler\s+([a-z0-9:-]+(?:\s+[a-z0-9:-]+)*)/);
                if (match) {
                    const fullCmdStr = match[1];
                    // fullCmdStr might be "kv:namespace list" or just "kv"
                    // We need to turn this into array
                    // But wait, "wrangler kv" output shows "wrangler kv:namespace" 
                    // which is 100% "kv:namespace".

                    // If we are at root, we see "kv". Path ["kv"].
                    // If we are at "kv", we see "kv:namespace". Path ["kv:namespace"].
                    // If we are at "kv:namespace", we see "kv:namespace:create".

                    const nextPath = fullCmdStr.split(' '); // Usually no spaces in newer wrangler?
                    // Actually, let's look at `wrangler_help_output.txt`:
                    // "wrangler kv" -> single token.

                    // Check if it's strictly deeper
                    // Root: pathKey="" -> child "kv" -> deeper.
                    // "kv": pathKey="kv" -> child "kv:namespace" -> deeper.

                    // Avoid adding self
                    if (fullCmdStr !== pathKey) {
                        // Some commands aliases might appear?
                        // Just add to queue if not visited.
                        // We need to parse it as array for `runHelp`
                        // For "kv:namespace", runHelp expects ["kv:namespace"]? 
                        // Or "wrangler kv:namespace --help" works.

                        // BUT, `wrangler kv namespace` (space) is sometimes valid too.
                        // Let's stick to what help output says.

                        const nextPathArgs = fullCmdStr.split(' ');
                        const nextKey = nextPathArgs.join(' ');

                        if (!visited.has(nextKey)) {
                            // Only add if it starts with current path (to ensure it's a child)
                            // Root ("") starts everything.
                            // "kv" starts "kv:namespace" ? No, "kv:namespace" starts with "kv" checks string.

                            // Heuristic:
                            if (pathKey === "" || nextKey.startsWith(pathKey)) {
                                queue.push(nextPathArgs);
                                // Add to visited here to prevent duplicates in queue? 
                                // Better to check at start of loop.
                            }
                        }
                    }
                }
            }
        }
    }

    // Write markdown
    const md = ['# Wrangler CLI Reference\n\nGenerated ' + new Date().toISOString()];

    for (const res of results) {
        md.push(`\n## \`wrangler ${res.path}\`\n`);
        md.push('```text');
        md.push(res.output.trim());
        md.push('```');
    }

    fs.writeFileSync('wrangler_cli_reference.md', md.join('\n'));
    console.log('Done!');
}

main();
