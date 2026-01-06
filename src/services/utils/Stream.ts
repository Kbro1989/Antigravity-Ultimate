
export type Stream = {
    getData(): Buffer;
    skip(n: number): Stream;
    scanloc(): number;
    readByte(): number;
    readUByte(): number;
    readUShortSmart(): number;
    readShortSmart(): number;
    readShortSmartBias(): number;
    readShort(flip?: boolean): number;
    readUShort(flip?: boolean): number;
    readUInt(flip?: boolean): number;
    readUIntSmart(): number;
    readTribyte(): number;
    readFloat(flip?: boolean, signage?: boolean): number;
    readHalf(flip?: boolean): number;
    eof(): boolean;
    bytesLeft(): number;
    readBuffer(len?: number): Buffer;
    tee(): Stream
}

export const Stream: { new(buf: Buffer): Stream, prototype: Stream } = function Stream(this: Stream, data: Buffer, scan = 0) {
    this.getData = function () {
        return data;
    }
    this.bytesLeft = function () {
        return data.length - scan;
    }
    this.readBuffer = function (len = data.length - scan) {
        let res = data.slice(scan, scan + len);
        scan += len;
        return res;
    }
    this.tee = function () {
        return new Stream(data, scan);
    }
    this.eof = function () {
        if (scan > data.length) { throw new Error("reading past end of buffer"); }
        return scan >= data.length;
    }
    this.skip = function (n: number) {
        scan += n;
        return this;
    }
    this.scanloc = function () {
        return scan;
    }

    this.readByte = function () {
        var val = this.readUByte();
        if (val > 127)
            return val - 256;
        return val;
    }
    this.readUShortSmart = function () {
        let byte0 = this.readUByte();
        if ((byte0 & 0x80) == 0) {
            return byte0;
        }
        let byte1 = this.readUByte();
        return ((byte0 & 0x7f) << 8) | byte1;
    }
    this.readShortSmart = function () {
        let byte0 = this.readUByte();
        let byte0val = byte0 & 0x7f;
        byte0val = (byte0 < 0x40 ? byte0 : byte0 - 0x80);
        if ((byte0 & 0x80) == 0) {
            return byte0val;
        }
        let byte1 = this.readUByte();
        return (byte0val << 8) | byte1;
    }
    this.readShortSmartBias = function () {
        let byte0 = this.readUByte();
        if ((byte0 & 0x80) == 0) {
            return byte0 - 0x40;
        }
        let byte1 = this.readUByte();
        return (((byte0 & 0x7f) << 8) | byte1) - 0x4000;
    }

    this.readUIntSmart = function () {
        let byte0 = this.readUByte();
        let byte1 = this.readUByte();
        if ((byte0 & 0x80) == 0) {
            return (byte0 << 8) | byte1;
        }
        let byte2 = this.readUByte();
        let byte3 = this.readUByte();
        return ((byte0 & 0x7f) << 24) | (byte1 << 16) | (byte2 << 8) | byte3;
    }

    this.readUByte = function () {
        return data[scan++];
    }

    this.readShort = function (bigendian = false) {
        var val = this.readUShort(bigendian);
        if (val > 32767)
            return val - 65536;
        return val;
    }
    this.readTribyte = function () {
        let val = data.readIntBE(scan, 3);
        scan += 3;
        return val;
    }

    this.readUShort = function (bigendian = false) {
        if (bigendian)
            return ((data[scan++] << 8) & 0xFF00) | data[scan++];
        else
            return data[scan++] | ((data[scan++] << 8) & 0xFF00);
    }

    this.readUInt = function (bigendian = false) {
        if (bigendian)
            return (((data[scan++] << 24) & 0xFF000000) | ((data[scan++] << 16) & 0xFF0000) | ((data[scan++] << 8) & 0xFF00) | data[scan++]) >>> 0;
        else
            return (data[scan++] | ((data[scan++] << 8) & 0xFF00) | ((data[scan++] << 16) & 0xFF0000) | ((data[scan++] << 24) & 0xFF000000)) >>> 0;
    }

    this.readFloat = function (bigendian = false, signage = false) {
        var upper, mid, lower, exponent;
        if (bigendian) {
            exponent = data[scan++];
            lower = (data[scan++] << 16) & 0xFF0000;
            mid = (data[scan++] << 8) & 0xFF00;
            upper = data[scan++];
        }
        else {
            upper = data[scan++];
            mid = (data[scan++] << 8) & 0xFF00;
            lower = (data[scan++] << 16) & 0xFF0000;
            exponent = data[scan++];
        }
        var mantissa = upper | mid | lower;
        if (signage) {
            exponent = (exponent << 1) & 0xFE;
            if ((mantissa & 0x800000) == 0x800000)
                exponent |= 0x1;
            mantissa &= 0x7FFFFF;
        }
        return (1.0 + mantissa * Math.pow(2.0, signage ? -23.0 : -24.0)) * Math.pow(2.0, exponent - 127.0);
    }

    this.readHalf = function (flip = false) {
        var upper = data[scan++];
        var lower = data[scan++];
        var mantissa = lower | ((upper << 8) & 0x0300);
        var exponent = (upper >> 2) & 0x1F;
        mantissa = mantissa * Math.pow(2.0, -10.0) + (exponent == 0 ? 0.0 : 1.0);
        mantissa *= Math.pow(2.0, exponent - 15.0);
        if ((upper & 0x80) == 0x80)
            mantissa *= -1.0;
        return mantissa;
    }
} as any
