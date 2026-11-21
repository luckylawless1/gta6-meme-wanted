// Entry program for the make.fun bounty "Post a GTA 6 meme on X"
// (gta6-meme-x-01), v5.
//
// The post on X is the entry; this program only ferries its address to the
// grader. POST.json at the repository root holds {"url": "https://x.com/..."};
// the house reads that file from the output folder, then reads the post from
// X itself and builds the dossier the judge sees. Nothing here is judged.
//
// Dry run, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// On success it prints nothing and out/POST.json matches POST.json exactly.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

if (!existsSync(source)) {
  console.error(`POST.json not found in ${botDir}`);
  process.exit(1);
}

// Refuse a malformed address file here rather than at the gate: POST.json
// must be one JSON object carrying a string "url".
let data: unknown;
try {
  data = JSON.parse(readFileSync(source, 'utf8'));
} catch {
  console.error('POST.json is not valid JSON');
  process.exit(1);
}
const url = (data as { url?: unknown } | null)?.url;
if (typeof data !== 'object' || data === null || typeof url !== 'string') {
  console.error('POST.json must be an object with a "url" string');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
