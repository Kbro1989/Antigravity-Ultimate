import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { nodePolyfills } = require('vite-plugin-node-polyfills');
console.log(typeof nodePolyfills);
