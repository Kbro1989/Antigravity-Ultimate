import { JagArchive, hashFilename } from './JagArchive';
import { JagBuffer } from './JagBuffer';
import * as THREE from 'three';

const DATA_URL_PREFIX = 'data:image/png;base64,';

function cssColorToInt(colour: string | { r: number, g: number, b: number }): number {
    if (typeof colour === 'string') {
        const c = new THREE.Color(colour);
        return (Math.round(c.r * 255) << 16) | (Math.round(c.g * 255) << 8) | Math.round(c.b * 255);
    }
    return (colour.r << 16) | (colour.g << 8) | colour.b;
}

export class SpritePacker {
    archive: JagArchive;
    sprites: Map<string, any>;
    CanvasKit: any;

    constructor() {
        this.archive = new JagArchive();
        this.sprites = new Map();
    }

    async init() {
        // In a real implementation we might load WASM here if on server
        if (typeof window === 'undefined' && (globalThis as any).CanvasKitInit) {
            this.CanvasKit = await (globalThis as any).CanvasKitInit();
        }
    }

    loadArchive(buffer: Buffer) {
        this.archive.readArchive(buffer);
    }

    createCanvas(width: number, height: number): HTMLCanvasElement | any {
        if (typeof document !== 'undefined') {
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            return canvas;
        } else if (this.CanvasKit) {
            const canvas = this.CanvasKit.MakeCanvas(width, height);
            canvas.width = width;
            canvas.height = height;
            return canvas;
        }
        throw new Error('No Canvas environment found');
    }

    parseSprite(spriteData: JagBuffer, indexData: JagBuffer, frameCount: number): any[] {
        indexData.caret = spriteData.getUShort();
        const fullWidth = indexData.getUShort();
        const fullHeight = indexData.getUShort();

        const paletteSize = indexData.getUByte();
        const palette = new Int32Array(paletteSize);
        palette[0] = 0xff00ff; // Transparent magenta

        for (let i = 0; i < paletteSize - 1; i++) {
            palette[i + 1] =
                (indexData.getUByte() << 16) +
                (indexData.getUByte() << 8) +
                indexData.getUByte();
        }

        const frames = [];

        for (let i = 0; i < frameCount; i += 1) {
            const spriteOffsetX = indexData.getUByte();
            const spriteOffsetY = indexData.getUByte();
            const spriteWidth = indexData.getUShort();
            const spriteHeight = indexData.getUShort();
            const size = spriteWidth * spriteHeight;

            const indexOrder = indexData.getUByte();
            const spriteColourIndex = new Uint8Array(size);

            if (indexOrder === 0) {
                for (let j = 0; j < size; j++) {
                    spriteColourIndex[j] = spriteData.getUByte();
                }
            } else {
                for (let x = 0; x < spriteWidth; x++) {
                    for (let y = 0; y < spriteHeight; y++) {
                        spriteColourIndex[x + y * spriteWidth] = spriteData.getUByte();
                    }
                }
            }

            // Draw to Canvas
            try {
                const canvas = this.createCanvas(fullWidth, fullHeight);
                const context = canvas.getContext('2d');
                context.translate(spriteOffsetX, spriteOffsetY);

                for (let x = 0; x < spriteWidth; x++) {
                    for (let y = 0; y < spriteHeight; y++) {
                        const colour = palette[spriteColourIndex[x + y * spriteWidth]];
                        if (colour === 0xff00ff) continue;

                        const hex = colour.toString(16).padStart(6, '0');
                        context.fillStyle = `#${hex}`;
                        context.fillRect(x, y, 1, 1);
                    }
                }
                frames.push(canvas);
            } catch (e) {
                console.warn('Canvas creation failed, storing raw data', e);
                frames.push({ spriteColourIndex, palette, width: spriteWidth, height: spriteHeight });
            }
        }

        return frames;
    }

    compressSprites() {
        // High-Fidelity Binary Reconstruction
        console.log(`[SpritePacker] Reconstructing Archive with ${this.sprites.size} sprites...`);

        for (const [name, sprite] of this.sprites.entries()) {
            if (sprite.raw) {
                this.archive.entries.set(hashFilename(`${name}.dat`), sprite.raw);
            }
        }

        return this.archive.toArchive(true); // Return Bzip2 compressed bytes
    }

    getSprite(name: string): any {
        if (this.sprites.has(name)) {
            return this.sprites.get(name);
        }

        try {
            const datBuffer = this.archive.getEntry(`${name}.dat`);
            const idxBuffer = this.archive.getEntry('index.dat');

            const frames = this.parseSprite(new JagBuffer(datBuffer), new JagBuffer(idxBuffer), 1);
            if (frames && frames.length > 0) {
                const sprite = { img: frames[0] };
                this.sprites.set(name, sprite);
                return sprite;
            }
        } catch (e) {
            console.warn(`SpritePacker: Failed to extract sprite ${name}`, e);
        }
        return null;
    }
}
