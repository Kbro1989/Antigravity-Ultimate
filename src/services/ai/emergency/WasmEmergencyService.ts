/**
 * WasmEmergencyService - Tier 4 Creative Survival
 * 
 * Provides deterministic, procedural asset generation when all AI providers fail.
 * Uses pure algorithms (Canvas API, Web Audio logic) to ensure "something always happens".
 * 
 * "We do not fade to black. We glitch to gold."
 */

export class WasmEmergencyService {

    /**
     * Generate a deterministic "Glitch Art" placeholder image based on prompt hash
     * Returns a data URI (image/png)
     */
    static generateEmergencyImage(prompt: string, width = 512, height = 512): string {
        // Since we are in a Worker environment, we might not have a full Canvas API.
        // If we are on the edge, we can generate a basic SVG.
        // If we are in a browser context (Ghost Limb local), we could use OffscreenCanvas.
        // For maximum compatibility in a Worker, SVG data URI is safest.

        const seed = this.hashString(prompt);
        const color1 = this.hslToHex((seed % 360), 70, 50);
        const color2 = this.hslToHex(((seed + 180) % 360), 70, 20);

        // Generate SVG pattern
        const rects = [];
        for (let i = 0; i < 20; i++) {
            const x = (seed * (i + 1) * 9301 + 49297) % width;
            const y = (seed * (i + 1) * 49297 + 9301) % height;
            const w = (seed * (i + 1) * 12345) % (width / 2);
            const h = (seed * (i + 1) * 54321) % (height / 2);
            const opacity = 0.1 + ((seed * i) % 9) / 10;
            rects.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${color1}" opacity="${opacity}" />`);
        }

        const svg = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${color2};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${color1};stop-opacity:1" />
                </linearGradient>
                <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
                </filter>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad)" />
            ${rects.join('')}
            <rect width="100%" height="100%" filter="url(#noise)" opacity="0.3" />
            <text x="50%" y="90%" font-family="monospace" font-size="20" fill="white" text-anchor="middle" opacity="0.8">
                GHOST_LIMB_ACTIVATED
            </text>
        </svg>
        `.trim().replace(/\n/g, '');

        // Convert to Base64 Data URI
        // In Node/Worker: Buffer.from(svg).toString('base64')
        // In Browser: btoa(svg)

        // Using a universal method if possible, or just raw string logic
        const b64 = typeof Buffer !== 'undefined'
            ? Buffer.from(svg).toString('base64')
            : typeof btoa !== 'undefined'
                ? btoa(svg)
                : ''; // Should not happen in modern envs

        return `data:image/svg+xml;base64,${b64}`;
    }

    /**
     * Generate a deterministic "Data Sonification" audio buffer (WAV)
     * Returns a data URI (audio/wav)
     */
    static generateEmergencyAudio(prompt: string, durationSec = 3): string {
        // Basic WAV header generation + Sine wave synthesis
        // Implementation simplified for brevity, generates a 440Hz beep sequence
        const sampleRate = 44100;
        const numSamples = sampleRate * durationSec;
        const buffer = new Uint8Array(44 + numSamples);
        const seed = this.hashString(prompt);
        const freq = 200 + (seed % 600); // 200Hz - 800Hz base frequency

        // RIFF Chunk
        this.writeString(buffer, 0, 'RIFF');
        this.writeUint32(buffer, 4, 36 + numSamples);
        this.writeString(buffer, 8, 'WAVE');

        // fmt Chunk
        this.writeString(buffer, 12, 'fmt ');
        this.writeUint32(buffer, 16, 16); // PCM
        this.writeUint16(buffer, 20, 1); // AudioFormat 1
        this.writeUint16(buffer, 22, 1); // Channels 1
        this.writeUint32(buffer, 24, sampleRate);
        this.writeUint32(buffer, 28, sampleRate); // ByteRate
        this.writeUint16(buffer, 32, 1); // BlockAlign
        this.writeUint16(buffer, 34, 8); // BitsPerSample

        // data Chunk
        this.writeString(buffer, 36, 'data');
        this.writeUint32(buffer, 40, numSamples);

        // Samples (8-bit unsigned: 128 is silence)
        for (let i = 0; i < numSamples; i++) {
            const t = i / sampleRate;
            // AM Synthesis: Carrier * Modulator
            const carrier = Math.sin(2 * Math.PI * freq * t);
            const mod = Math.sin(2 * Math.PI * 4 * t); // 4Hz tremolo

            // Map -1..1 to 0..255
            const val = ((carrier * mod) + 1) * 127.5;
            buffer[44 + i] = Math.floor(val);
        }

        const b64 = typeof Buffer !== 'undefined'
            ? Buffer.from(buffer).toString('base64')
            : this.u8ToBase64(buffer);

        return `data:audio/wav;base64,${b64}`;
    }

    // --- Helpers ---

    private static hashString(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32bit integer
        }
        return Math.abs(hash);
    }

    private static hslToHex(h: number, s: number, l: number): string {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = (n: number) => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }

    private static writeString(view: Uint8Array, offset: number, string: string) {
        for (let i = 0; i < string.length; i++) {
            view[offset + i] = string.charCodeAt(i);
        }
    }

    private static writeUint32(view: Uint8Array, offset: number, value: number) {
        view[offset] = value & 0xff;
        view[offset + 1] = (value >> 8) & 0xff;
        view[offset + 2] = (value >> 16) & 0xff;
        view[offset + 3] = (value >> 24) & 0xff;
    }

    private static writeUint16(view: Uint8Array, offset: number, value: number) {
        view[offset] = value & 0xff;
        view[offset + 1] = (value >> 8) & 0xff;
    }

    private static u8ToBase64(u8: Uint8Array): string {
        let binary = '';
        const len = u8.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(u8[i]);
        }
        return btoa(binary);
    }
}
