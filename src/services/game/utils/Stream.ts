
// using global Buffer

export class Stream {
    offset: number = 0;
    constructor(private buffer: Buffer) { }

    readByte(): number {
        const val = this.buffer.readUInt8(this.offset);
        this.offset += 1;
        return val;
    }

    readUInt(littleEndian = false): number {
        const val = littleEndian ? this.buffer.readUInt32LE(this.offset) : this.buffer.readUInt32BE(this.offset);
        this.offset += 4;
        return val;
    }

    readInt(littleEndian = false): number {
        const val = littleEndian ? this.buffer.readInt32LE(this.offset) : this.buffer.readInt32BE(this.offset);
        this.offset += 4;
        return val;
    }

    readUShort(littleEndian = false): number {
        const val = littleEndian ? this.buffer.readUInt16LE(this.offset) : this.buffer.readUInt16BE(this.offset);
        this.offset += 2;
        return val;
    }

    readFloat(littleEndian = true): number { // Default LE for many formats
        const val = littleEndian ? this.buffer.readFloatLE(this.offset) : this.buffer.readFloatBE(this.offset);
        this.offset += 4;
        return val;
    }

    readStringLine(): string {
        let str = "";
        let char = this.readByte();
        while (char !== 0x0A && this.offset < this.buffer.length) { // \n
            str += String.fromCharCode(char);
            char = this.readByte();
        }
        return str.trim();
    }

    readBuffer(length: number): Buffer {
        const buf = this.buffer.slice(this.offset, this.offset + length);
        this.offset += length;
        return buf;
    }

    scanloc(): number {
        return this.offset;
    }
}

