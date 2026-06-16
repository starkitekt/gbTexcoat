import sharp from 'sharp';
import { mkdirSync, statSync } from 'node:fs';

// page -> ordered photo ids (cool-toned, on-brand, unique). First = eager/LCP.
const PAGES = {
  home:     ['1553823588-44bb563aa1b7','1631916588949-7e04c763c099','1595637843355-7e4ee4190763','1446776811953-b23d57bd21aa','1770370419338-f9a813302baa'],
  about:    ['1610891015188-5369212db097','1655122878062-a9e885391a1b','1524292332709-b33366a7f165','1660980041852-230420b8f99f','1619459074340-2ad2fbba3014'],
  products: ['1593250816874-8edf4f732edb','1637004732258-4b792ce8f474','1650406268594-c5d310f6fbce','1772376920846-8925e03c3fcf','1763391257816-c4d586ff27e5'],
  rd:       ['1460186136353-977e9d6085a1','1710267224163-0ee7e0d7a7ce','1609764262480-a58aca4dfc93','1762871449925-8adfca51dd34','1634640249833-7307e385f148'],
  contact:  ['1623257573668-c10b95c45fff','1751223786288-25c85adc493e','1712574340322-aaeae2cbaa8f','1728201445946-faaef5bfba58','1708738793054-32b71e3fc822'],
  investors:['1761212534376-a8b8d7c56669','1446776709462-d6b525c57bd3','1712512162392-d523620fbaa2','1636986056375-184676d8ca14','1654111069497-dfd4afcff006'],
};

let total = 0;
for (const [page, ids] of Object.entries(PAGES)) {
  const dir = `public/hero/${page}`;
  mkdirSync(dir, { recursive: true });
  for (let i = 0; i < ids.length; i++) {
    const url = `https://images.unsplash.com/photo-${ids[i]}?w=1920&q=80&fm=jpg&fit=crop`;
    const out = `${dir}/${i + 1}.webp`;
    try {
      const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
      await sharp(buf).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 70, effort: 5 }).toFile(out);
      const kb = Math.round(statSync(out).size / 1024);
      total += kb;
      console.log(`${page}/${i + 1}.webp  ${kb}KB  ${ids[i]}`);
    } catch (e) {
      console.log(`${page}/${i + 1}.webp  FAIL ${ids[i]}  ${e.message}`);
    }
  }
}
console.log(`\nTOTAL ~${(total/1024).toFixed(2)}MB across 30 images`);
