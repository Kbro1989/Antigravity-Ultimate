// Polyfill for Node.js globals in the browser
if (typeof window !== 'undefined') {
    window.global = window;
    if (typeof window.process === 'undefined') {
        window.process = { env: {}, browser: true };
    }
}

// We rely on the 'buffer' package being bundled or loaded.
// Since this script runs first, we define a stub that will be filled.
// However, a better way is to bundle a small buffer polyfill here.
// For now, we will ensure that main.tsx assignment is early.
