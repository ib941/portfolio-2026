import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createPNG(width, height, pixelMatrix) {
  const scanlineLength = 1 + width * 4;
  const rawData = Buffer.alloc(height * scanlineLength);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength;
    rawData[rowOffset] = 0; // Filter type 0 (None)

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const char = (pixelMatrix[y] && pixelMatrix[y][x]) || ' ';

      if (char === 'B') {
        rawData[pxOffset + 0] = 10;
        rawData[pxOffset + 1] = 15;
        rawData[pxOffset + 2] = 25;
        rawData[pxOffset + 3] = 255;
      } else if (char === 'W') {
        rawData[pxOffset + 0] = 255;
        rawData[pxOffset + 1] = 255;
        rawData[pxOffset + 2] = 255;
        rawData[pxOffset + 3] = 255;
      } else if (char === 'G') {
        rawData[pxOffset + 0] = 180;
        rawData[pxOffset + 1] = 180;
        rawData[pxOffset + 2] = 180;
        rawData[pxOffset + 3] = 255;
      } else {
        // Transparent
        rawData[pxOffset + 0] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
      }
    }
  }

  // Deflate IDAT data
  const compressedData = zlib.deflateSync(rawData);

  // Build PNG chunks
  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);

    const typeBuf = Buffer.from(type, 'ascii');
    const toCrc = Buffer.concat([typeBuf, data]);
    const crcVal = zlib.crc32(toCrc);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crcVal >>> 0, 0);

    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  // PNG Signature
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

  // IHDR chunk: 13 bytes
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // color type: 6 (RGBA)
  ihdrData[10] = 0; // compression method
  ihdrData[11] = 0; // filter method
  ihdrData[12] = 0; // interlace method

  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// 24x24 Pixel Arrow Cursor
const cursorRows = [
  "B                       ",
  "BB                      ",
  "BWB                     ",
  "BWWB                    ",
  "BWWWB                   ",
  "BWWWWB                  ",
  "BWWWWWB                 ",
  "BWWWWWWB                ",
  "BWWWWWWWB               ",
  "BWWWWWWWWB              ",
  "BWWWWWWWWWB             ",
  "BWWWWWWWWWWB            ",
  "BWWWWWWWWWWWB           ",
  "BWWWWWWWWWWWWB          ",
  "BWWWWWWBBBBBBBB         ",
  "BWWWBWWB                ",
  "BWWB BWWB               ",
  "BWB   BWWB              ",
  "BB     BWWB             ",
  "B       BWWB            ",
  "         BWWB           ",
  "          BB            ",
  "                        ",
  "                        ",
];

const cleanCursorRows = cursorRows.map(r => r.padEnd(24, ' '));

// 24x24 Pixel Pointer Hand
const pointerRows = [
  "      BBB               ",
  "     BWWWB              ",
  "     BWWWB              ",
  "     BWWWB              ",
  "     BWWWB              ",
  "     BWWWB   BBB        ",
  " BBB BWWWB  BWWWB       ",
  "BWWWB BWWWB BWWWB   BBB ",
  "BWWWB BWWWB BWWWB  BWWWB",
  "BWWWB BWWWB BWWWB  BWWWB",
  "BWWWB BWWWB BWWWB  BWWWB",
  "BWWWB BWWWB BWWWB  BWWWB",
  " BWWBBWWWBWWWBWWWB BWWWB",
  " BWWWWWWWWWWWWWWWB BWWWB",
  "  BWWWWWWWWWWWWWWB BWWWB",
  "  BWWWWWWWWWWWWWWBBWWWB ",
  "  BWWWWWWWWWWWWWWWWWWWB ",
  "   BWWWWWWWWWWWWWWWWWB  ",
  "   BWWWWWWWWWWWWWWWWWB  ",
  "    BWWWWWWWWWWWWWWWB   ",
  "    BWWWWWWWWWWWWWWWB   ",
  "     BBBBBBBBBBBBBBB    ",
  "                        ",
  "                        ",
];
const cleanPointerRows = pointerRows.map(r => r.padEnd(24, ' '));

const outDir = path.resolve('public');
const cursorPng = createPNG(24, 24, cleanCursorRows);
const pointerPng = createPNG(24, 24, cleanPointerRows);

fs.writeFileSync(path.join(outDir, 'pixel-cursor.png'), cursorPng);
fs.writeFileSync(path.join(outDir, 'pixel-pointer.png'), pointerPng);

console.log('Generated pixel-cursor.png:', cursorPng.length, 'bytes');
console.log('Generated pixel-pointer.png:', pointerPng.length, 'bytes');
