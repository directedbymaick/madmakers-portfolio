// Minify CSS + JS assets in place. Runs on Vercel build only (or with --force).
//
// Source files in git stay unminified. Vercel build overwrites them in the
// deploy container with minified output. Local dev untouched.
//
//   node scripts/minify-assets.mjs            # only minifies if process.env.VERCEL
//   node scripts/minify-assets.mjs --force    # minify locally too (will overwrite!)

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import * as esbuild from 'esbuild';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const isVercel = !!process.env.VERCEL;
const force = process.argv.includes('--force');

if (!isVercel && !force) {
  console.log('Skipping minify (not on Vercel and --force not passed).');
  process.exit(0);
}

const CSS_FILES = ['styles.css', 'assets/vendor/tarteaucitron/css/tarteaucitron.css'];
const JS_FILES = ['main.js', 'cards-fx.js', 'projects.js', 'assets/vendor/tarteaucitron/tarteaucitron.js', 'assets/vendor/tarteaucitron/tarteaucitron.services.js'];

let totalBefore = 0;
let totalAfter = 0;

for (const f of CSS_FILES) {
  const src = await readFile(join(ROOT, f), 'utf8');
  const result = await esbuild.transform(src, { loader: 'css', minify: true });
  await writeFile(join(ROOT, f), result.code, 'utf8');
  totalBefore += src.length;
  totalAfter += result.code.length;
  console.log(`  ✓ ${f.padEnd(60)} ${(src.length / 1024).toFixed(1).padStart(5)} KB → ${(result.code.length / 1024).toFixed(1).padStart(5)} KB`);
}

for (const f of JS_FILES) {
  const src = await readFile(join(ROOT, f), 'utf8');
  const result = await esbuild.transform(src, { loader: 'js', minify: true, target: 'es2020' });
  await writeFile(join(ROOT, f), result.code, 'utf8');
  totalBefore += src.length;
  totalAfter += result.code.length;
  console.log(`  ✓ ${f.padEnd(60)} ${(src.length / 1024).toFixed(1).padStart(5)} KB → ${(result.code.length / 1024).toFixed(1).padStart(5)} KB`);
}

console.log(`\nTotal: ${(totalBefore / 1024).toFixed(1)} KB → ${(totalAfter / 1024).toFixed(1)} KB (-${Math.round((1 - totalAfter / totalBefore) * 100)}%)`);
