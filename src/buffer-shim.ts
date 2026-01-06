// src/buffer-shim.ts
import { Buffer } from 'buffer/';
(globalThis as any).Buffer = Buffer;