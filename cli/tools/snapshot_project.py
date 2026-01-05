# cli/tools/snapshot_project.py
import os
import json
import argparse
import sys
from pathlib import Path

# AI-specific ignore patterns (falls back to .gitignore if not present)
DEFAULT_IGNORE = {
    'node_modules', 'dist', '.git', '__pycache__', '*.pyc',
    '.wrangler', '.env', '*.log', 'combined_scripts.txt', 'project_snapshot.json'
}

def load_ignore_patterns(root_dir: Path):
    aigignore = root_dir / '.aigignore'
    gitignore = root_dir / '.gitignore'
    
    patterns = set(DEFAULT_IGNORE)
    if aigignore.exists():
        patterns.update(aigignore.read_text().splitlines())
    elif gitignore.exists():
        patterns.update(gitignore.read_text().splitlines())
    return patterns

def should_include(path: Path, ignore_patterns: set, allowed_exts: set):
    if path.name in ignore_patterns:
        return False
    # Check parent directory names for ignore patterns
    for part in path.parts:
        if part in ignore_patterns:
            return False
    # Use glob matching for patterns
    for p in ignore_patterns:
        if p and not p.startswith('#') and path.match(p):
            return False
            
    return path.suffix.lower() in allowed_exts

def create_snapshot(target_dir: str, output_path: str):
    root = Path(target_dir).resolve()
    ignore = load_ignore_patterns(root)
    
    snapshot = {
        "metadata": {
            "root": str(root),
            "timestamp": 0, # Will update after creation
            "total_files": 0,
            "total_chars": 0,
            "context_domains": {}  # For Gold Context splitting
        },
        "files": []
    }

    ALLOWED_EXTENSIONS = {'.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.yaml', '.yml', '.sql', '.py', '.txt', '.html', '.css'}
    
    for dirpath, dirnames, filenames in os.walk(root):
        # Filter directories in-place to avoid walking into them
        dirnames[:] = [d for d in dirnames if d not in ignore]
        
        for filename in sorted(filenames):
            full_path = Path(dirpath) / filename
            rel_path = full_path.relative_to(root)
            
            if not should_include(full_path, ignore, ALLOWED_EXTENSIONS):
                continue
                
            try:
                content = full_path.read_text(encoding='utf-8', errors='ignore')
                snapshot["files"].append({
                    "path": str(rel_path),
                    "content": content
                })
                snapshot["metadata"]["total_files"] += 1
                snapshot["metadata"]["total_chars"] += len(content)
                
                # Categorize for Gold Contexts
                if "src/services" in str(rel_path):
                    snapshot["metadata"]["context_domains"]["services"] = True
                elif "src/frontend" in str(rel_path):
                    snapshot["metadata"]["context_domains"]["frontend"] = True
                elif "bridge" in str(rel_path):
                    snapshot["metadata"]["context_domains"]["bridge"] = True
                    
            except Exception as e:
                print(f"[SKIP] {rel_path}: {e}", file=sys.stderr)
    
    # Write combined file
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(snapshot, f, indent=2)
    
    # Update timestamp
    snapshot["metadata"]["timestamp"] = os.path.getmtime(output_path)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(snapshot, f, indent=2)
    
    return snapshot

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--target', default='.')
    parser.add_argument('--output', default='project_snapshot.json')
    args = parser.parse_args()
    
    create_snapshot(args.target, args.output)
    print(f"✅ Snapshot created: {args.output}")
