import os
import sys

# Output file name
output_file = 'combined_scripts.txt'

# Root directory to start from
root_dir = r'.'
include_subfolders = ['src', 'bridge', 'cli', '.agent', '.vscode', 'dist', 'public']

# Absolute paths
script_path = os.path.abspath(__file__)
output_path = os.path.abspath(output_file)

def read_file_safely(path):
    for enc in ('utf-8', 'utf-16', 'latin-1'):
        try:
            with open(path, 'r', encoding=enc) as f:
                return f.read()
        except UnicodeDecodeError:
            continue
    return f'[ERROR] Could not decode file: {path}\n'

with open(output_file, 'w', encoding='utf-8') as outfile:
    outfile.write('### COMBINED PROJECT SNAPSHOT ###\n\n')

    # --- Include THIS script first ---
    outfile.write(f'===== BEGIN {os.path.basename(script_path)} =====\n')
    outfile.write(read_file_safely(script_path))
    outfile.write(f'\n===== END {os.path.basename(script_path)} =====\n\n')

    # --- Walk included folders ---
    for subfolder in include_subfolders:
        dir_to_walk = os.path.join(root_dir, subfolder)
        if not os.path.isdir(dir_to_walk):
            continue

        for dirpath, dirnames, filenames in os.walk(dir_to_walk):
            dirnames[:] = [d for d in dirnames if d != 'node_modules']

            for filename in sorted(filenames):
                full_path = os.path.abspath(os.path.join(dirpath, filename))

                # Skip output file only
                if full_path == output_path:
                    continue

                rel_path = os.path.relpath(full_path, root_dir)

                outfile.write(f'===== BEGIN {rel_path} =====\n')
                outfile.write(read_file_safely(full_path))
                outfile.write(f'\n===== END {rel_path} =====\n\n')

print(f'Combined file created: {output_file}')
