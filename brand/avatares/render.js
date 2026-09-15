const zlib = require('zlib'), fs = require('fs');

// Retangulos disjuntos que compoem o simbolo (grade 64x64 do design system)
const RECTS = [
  [12,10,36,20], [12,20,22,42], [12,42,42,52], [42,10,52,52],
];
const BBOX = { cx: 32, cy: 31, h: 42 };
const SYMBOL_RATIO = 560 / 1080; // altura do simbolo sobre o lado do quadrado

const hex = h => [1,3,5].map(i => parseInt(h.slice(i, i+2), 16));
const clamp = (v,a,b) => Math.max(a, Math.min(b, v));

function render(size, bgHex, fgHex, out) {
  const bg = hex(bgHex), fg = hex(fgHex);
  const s = (SYMBOL_RATIO * size) / BBOX.h;
  const px = u => (u - BBOX.cx) * s + size / 2;
  const py = u => (u - BBOX.cy) * s + size / 2;
  const rects = RECTS.map(([x0,y0,x1,y1]) => [px(x0), py(y0), px(x1), py(y1)]);

  const raw = Buffer.alloc((size * 3 + 1) * size);
  for (let y = 0; y < size; y++) {
    const row = y * (size * 3 + 1);
    raw[row] = 0; // filtro none
    for (let x = 0; x < size; x++) {
      let a = 0;
      for (const [rx0, ry0, rx1, ry1] of rects) {
        const w = clamp(rx1, x, x+1) - clamp(rx0, x, x+1);
        const h = clamp(ry1, y, y+1) - clamp(ry0, y, y+1);
        if (w > 0 && h > 0) a += w * h; // retangulos disjuntos: soma exata
      }
      a = clamp(a, 0, 1);
      const i = row + 1 + x * 3;
      for (let c = 0; c < 3; c++) raw[i+c] = Math.round(bg[c] + (fg[c] - bg[c]) * a);
    }
  }
  const chunk = (type, data) => {
    const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
    const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
    const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body) >>> 0);
    return Buffer.concat([len, body, crc]);
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 2; // 8 bits, truecolor RGB
  fs.writeFileSync(out, Buffer.concat([
    Buffer.from([0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]));
  console.log(out, size + 'x' + size);
}

let TBL = null;
function crc32(buf) {
  if (!TBL) { TBL = []; for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; TBL[n] = c; } }
  let c = 0xffffffff;
  for (const b of buf) c = TBL[(c ^ b) & 0xff] ^ (c >>> 8);
  return c ^ 0xffffffff;
}

for (const size of [1080, 640]) {
  render(size, '#F7F8FA', '#17324D', `avatar-juripratico-primary-${size}.png`);
  render(size, '#17324D', '#FFFFFF', `avatar-juripratico-inverso-${size}.png`);
}
