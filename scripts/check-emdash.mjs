#!/usr/bin/env node
/*
 * Em dash guard for GB Texcoat.
 *
 * Two modes:
 *   node scripts/check-emdash.mjs          -> scans src/ and lists any em dash (exit 1 if found)
 *   node scripts/check-emdash.mjs --hook   -> reads a Claude Code PostToolUse JSON event on stdin,
 *                                             checks the edited file, and reminds the AI (exit 2)
 *
 * Project rule: never use the em dash (U+2014). Use a comma, colon, period,
 * parentheses, or the word "to" for numeric ranges.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const EM = '—';
const REMINDER =
  'Em dash (' + EM + ') is banned in this project. Replace it with a comma, colon, period, ' +
  'parentheses, or the word "to" for ranges, then re-save.';

function scanDir(dir, hits) {
  for (const entry of readdirSync(dir)) {
    if (['node_modules', '.next', '.git', '.vercel'].includes(entry)) continue;
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) scanDir(p, hits);
    else if (/\.(tsx?|jsx?|css|md|mdx|json|mjs|cjs)$/.test(entry)) {
      const lines = readFileSync(p, 'utf8').split('\n');
      lines.forEach((ln, i) => { if (ln.includes(EM)) hits.push(p + ':' + (i + 1) + ': ' + ln.trim().slice(0, 100)); });
    }
  }
}

if (process.argv.includes('--hook')) {
  let buf = '';
  process.stdin.on('data', d => (buf += d));
  process.stdin.on('end', () => {
    try {
      const fp = (JSON.parse(buf || '{}').tool_input || {}).file_path;
      if (fp && /\.(tsx?|jsx?|css|md|mdx|json|mjs|cjs)$/.test(fp)) {
        if (readFileSync(fp, 'utf8').includes(EM)) {
          process.stderr.write(REMINDER + ' Offending file: ' + fp + '\n');
          process.exit(2); // exit 2 surfaces stderr back to the assistant
        }
      }
    } catch { /* never block on parse/read errors */ }
    process.exit(0);
  });
} else {
  const hits = [];
  scanDir('src', hits);
  if (hits.length) {
    console.error('Found ' + hits.length + ' em dash(es). ' + REMINDER + '\n');
    hits.forEach(h => console.error('  ' + h));
    process.exit(1);
  }
  console.log('No em dashes found in src/.');
}
