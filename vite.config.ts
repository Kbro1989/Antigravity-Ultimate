import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';

// Custom plugin for raw text loading
const rawText = (options: { extensions: string[] }) => {
    return {
        name: 'raw-text',
        transform(code: string, id: string) {
            if (options.extensions.some(ext => id.endsWith(ext))) {
                return {
                    code: `export default ${JSON.stringify(code)};`,
                    map: null
                };
            }
        }
    };
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        nodePolyfills(),
        rawText({
            extensions: ['.glsl', '.c', '.jsonc'],
        }),
    ],
    build: {
        target: 'esnext',
        outDir: 'dist/site',
        emptyOutDir: true,
        chunkSizeWarningLimit: 2000,
        rollupOptions: {
            input: {
                main: './index.html',
            },
            // Prevent Rollup from attempting to bundle files in local/ that might have native bindings or non-isomorphic code
            external: (id) => {
                if (id.includes('sqlite3') || id.includes('local/') || id.includes('src/services/rsmv/clientscript')) return true;
                return false;
            }
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8788',
                changeOrigin: true,
            },
            '/parties': {
                target: 'http://localhost:8788',
                ws: true,
            },
            '/ws': {
                target: 'http://localhost:8788',
                ws: true,
            },
        },
    },
});
