/**
 * Example POG Extension
 * Demonstrates local execution via ProxyLimb and Bridge.
 */
module.exports = {
    process: async ({ action, payload }) => {
        console.log(`[Extension: example-extension] Processing action: ${action}`);

        switch (action) {
            case 'vibe_check':
                return {
                    status: 'success',
                    vibe: 'Maximum Aesthetic',
                    hardware: process.platform,
                    uptime: process.uptime()
                };
            case 'echo':
                return {
                    status: 'success',
                    echo: payload.text || 'No text provided'
                };
            default:
                throw new Error(`Action ${action} not implemented in example-extension`);
        }
    }
};
