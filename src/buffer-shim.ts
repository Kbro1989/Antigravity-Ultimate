// src/buffer-shim.ts
import { Buffer } from 'buffer/';
(window as any).Buffer = Buffer;