// Renders a meme page (1080x1080 CSS px) to a PNG at 2x device scale.
// Usage: node render-v5.mjs [page.html] [out.png]
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const require = createRequire('/home/hatch/workspace/makefun-best-game-01/tools/package.json');
const puppeteer = require('puppeteer');

const here = dirname(fileURLToPath(import.meta.url));
const pageFile = process.argv[2] ?? 'meme-v5.html';
const out = process.argv[3] ?? join(here, 'meme-v5-2x.png');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--mute-audio'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto(pathToFileURL(join(here, pageFile)).href, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: out, type: 'png' });
  console.log(`wrote ${out} (pageerrors=${errors.length})`);
  if (errors.length) console.error(errors.join('\n'));
} finally {
  await browser.close();
}
