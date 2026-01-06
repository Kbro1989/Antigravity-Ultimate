#!/usr/bin/env python3
"""Extract file list from combined_scripts.txt and compare with current repo."""
import re
import os

# Extract files from snapshot
with open('combined_scripts.txt', 'r', encoding='utf-8') as f:
    content = f.read()

snapshot_files = set()
for match in re.finditer(r'===== BEGIN (.+?) =====', content):
    path = match.group(1).replace('\\', '/')
    # Skip the script itself and malformed paths
    if 'combine_files.py' not in path and '{' not in path and 'os.path' not in path:
        snapshot_files.add(path)

# Get current files in src, cli, bridge
current_files = set()
for folder in ['src', 'cli', 'bridge', '.agent', 'public', 'dist', '.vscode']:
    if os.path.isdir(folder):
        for root, dirs, files in os.walk(folder):
            dirs[:] = [d for d in dirs if d != 'node_modules']
            for f in files:
                rel = os.path.relpath(os.path.join(root, f), '.').replace('\\', '/')
                current_files.add(rel)

# Find missing files (in snapshot but not in current)
missing = snapshot_files - current_files

# Categorize missing
src_missing = [f for f in missing if f.startswith('src/')]
dist_missing = [f for f in missing if f.startswith('dist/')]
other_missing = [f for f in missing if not f.startswith('src/') and not f.startswith('dist/')]

print("=== SOURCE FILES MISSING (CRITICAL) ===")
for f in sorted(src_missing):
    print(f"  {f}")
    
print(f"\n=== BUILD ARTIFACTS MISSING (can rebuild): {len(dist_missing)} files ===")

print("\n=== OTHER MISSING ===")
for f in sorted(other_missing):
    print(f"  {f}")
