import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';

const root = 'public/hero';
const pages = readdirSync(root);
let before = 0, after = 0;

for (const page of pages) {
  const dir = join(root, page);
  if (!statSync(dir).isDirectory()) continue;
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.jpg')) continue;
    const src = join(dir, file);
    const out = join(dir, file.replace(/\.jpg$/, '.webp'));
    const inSize = statSync(src).size;
    before += inSize;
    await sharp(src)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 70, effort: 5 })
      .toFile(out);
    const outSize = statSync(out).size;
    after += outSize;
    unlinkSync(src); // remove the heavy jpg
    console.log(`${page}/${file}  ${(inSize/1024).toFixed(0)}KB -> ${(outSize/1024).toFixed(0)}KB webp`);
  }
}
console.log(`\nTOTAL  ${(before/1024/1024).toFixed(2)}MB -> ${(after/1024/1024).toFixed(2)}MB  (${Math.round((1-after/before)*100)}% smaller)`);
