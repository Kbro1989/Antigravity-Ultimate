import os
from datetime import datetime

# Configuration - using a unique output filename
OUTPUT_FILE = 'project_basic_info_snapshot.txt'  # Unique name to avoid conflicts
ROOT_DIR = r'.'
INCLUDE_SUBFOLDERS = ['src', 'bridge', 'cli', '.agent', '.vscode', 'dist', 'public']
MAX_PREVIEW_LINES = 10
MAX_FILE_SIZE_MB = 5

def get_file_metadata(filepath):
    """Get basic file information"""
    try:
        stats = os.stat(filepath)
        size_mb = stats.st_size / (1024 * 1024)
        modified = datetime.fromtimestamp(stats.st_mtime).strftime('%Y-%m-%d %H:%M:%S')
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                lines = sum(1 for _ in f)
        except:
            lines = 'N/A'
        
        return {
            'size_mb': round(size_mb, 2),
            'modified': modified,
            'lines': lines
        }
    except Exception as e:
        return {
            'size_mb': 0,
            'modified': 'N/A',
            'lines': 'N/A'
        }

def should_preview_file(filepath, metadata):
    """Determine if file should have content preview"""
    if metadata['size_mb'] > MAX_FILE_SIZE_MB:
        return False
    
    # Skip common binary/compiled files
    skip_extensions = {'.png', '.jpg', '.jpeg', '.gif', '.ico', '.pdf', '.zip', '.exe', '.dll', '.bin', '.db'}
    ext = os.path.splitext(filepath)[1].lower()
    if ext in skip_extensions:
        return False
    
    return True

def generate_project_info():
    """Generate basic project information snapshot"""
    output_path = os.path.abspath(OUTPUT_FILE)
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write("# PROJECT BASIC INFO SNAPSHOT\n")
        f.write(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"Root Directory: {ROOT_DIR}\n")
        f.write("=" * 60 + "\n\n")
        
        # Project Structure Tree
        f.write("## PROJECT STRUCTURE\n\n")
        for subfolder in INCLUDE_SUBFOLDERS:
            folder_path = os.path.join(ROOT_DIR, subfolder)
            if not os.path.isdir(folder_path):
                f.write(f"⚠️  Folder not found: {subfolder}/\n\n")
                continue
            
            f.write(f"{subfolder}/\n")
            for dirpath, dirnames, filenames in os.walk(folder_path):
                # Skip node_modules
                dirnames[:] = [d for d in dirnames if d != 'node_modules']
                
                level = dirpath.replace(folder_path, '').count(os.sep)
                indent = "  " * level
                folder_name = os.path.basename(dirpath)
                if level > 0:  # Don't print the root folder again
                    f.write(f"{indent}├── {folder_name}/\n")
                
                sub_indent = "  " * (level + 1)
                for filename in sorted(filenames):
                    full_path = os.path.join(dirpath, filename)
                    if full_path == output_path:
                        continue
                    
                    metadata = get_file_metadata(full_path)
                    f.write(f"{sub_indent}├── {filename} "
                           f"({metadata['size_mb']}MB, {metadata['lines']} lines, {metadata['modified']})\n")
            f.write("\n")
        
        # File Previews
        f.write("=" * 60 + "\n")
        f.write("## FILE PREVIEWS\n\n")
        
        file_count = 0
        for subfolder in INCLUDE_SUBFOLDERS:
            folder_path = os.path.join(ROOT_DIR, subfolder)
            if not os.path.isdir(folder_path):
                continue
            
            for dirpath, dirnames, filenames in os.walk(folder_path):
                dirnames[:] = [d for d in dirnames if d != 'node_modules']
                
                for filename in sorted(filenames):
                    full_path = os.path.join(dirpath, filename)
                    if full_path == output_path:
                        continue
                    
                    rel_path = os.path.relpath(full_path, ROOT_DIR)
                    metadata = get_file_metadata(full_path)
                    
                    f.write(f"### {rel_path}\n")
                    f.write(f"- Size: {metadata['size_mb']}MB | Lines: {metadata['lines']} | Modified: {metadata['modified']}\n\n")
                    
                    if should_preview_file(full_path, metadata):
                        try:
                            with open(full_path, 'r', encoding='utf-8') as file:
                                f.write("```\n")
                                for i, line in enumerate(file, 1):
                                    if i > MAX_PREVIEW_LINES:
                                        f.write("... (truncated)\n")
                                        break
                                    f.write(line)
                                f.write("```\n")
                        except:
                            f.write("*Could not read file content*\n")
                    else:
                        f.write("*Content preview skipped (large/binary file)*\n")
                    
                    f.write("\n")
                    file_count += 1
        
        # Summary Statistics
        f.write("=" * 60 + "\n")
        f.write("## SUMMARY STATISTICS\n")
        
        total_files = 0
        total_size = 0
        
        for subfolder in INCLUDE_SUBFOLDERS:
            folder_path = os.path.join(ROOT_DIR, subfolder)
            if not os.path.isdir(folder_path):
                continue
            
            for dirpath, _, filenames in os.walk(folder_path):
                for filename in filenames:
                    full_path = os.path.join(dirpath, filename)
                    if full_path == output_path:
                        continue
                    
                    total_files += 1
                    try:
                        total_size += os.path.getsize(full_path)
                    except:
                        pass
        
        f.write(f"- Total Files: {total_files}\n")
        f.write(f"- Total Size: {round(total_size / (1024 * 1024), 2)}MB\n")
        f.write(f"- Files with Previews: {file_count}\n")
        f.write(f"- Included Folders: {', '.join(INCLUDE_SUBFOLDERS)}\n")
    
    print(f"✅ Project info file created: {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_project_info()