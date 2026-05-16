// Delete files under assets/ that are not referenced anywhere in HTML/JS/CSS/MD.
import { readdirSync, statSync, readFileSync, unlinkSync } from 'node:fs';
import path from 'node:path';

function walk(dir, files = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, files);
    else files.push(p);
  }
  return files;
}

const assetFiles = walk('assets')
  .map(p => p.split(path.sep).join('/'))
  // Protect vendor/ — Tarteaucitron loads services.js dynamically (not referenced by name)
  .filter(p => !p.includes('assets/vendor/'));

const codeFiles = walk('.')
  .map(p => p.split(path.sep).join('/'))
  .filter(p => /\.(html|js|css|mjs|json|xml|md|txt)$/i.test(p))
  .filter(p => !p.includes('node_modules/'))
  .filter(p => !p.includes('.git/'))
  .filter(p => !p.includes('assets/'));

const codeContent = codeFiles.map(p => {
  try { return readFileSync(p, 'utf8'); } catch { return ''; }
}).join('\n');

const decoded = codeContent.replace(/%20/g, ' ').replace(/%28/g, '(').replace(/%29/g, ')');
const combined = codeContent + '\n' + decoded;

const unused = [];
for (const asset of assetFiles) {
  const base = path.basename(asset);
  const baseNoExt = base.replace(/\.[^.]+$/, '');
  if (!combined.includes(asset) && !combined.includes(base) && !combined.includes(baseNoExt)) {
    unused.push(asset);
  }
}

let totalBytes = 0;
const dryRun = process.argv.includes('--dry-run');
console.log(dryRun ? '── DRY RUN ──' : '── PURGING ──');
for (const f of unused) {
  const s = statSync(f).size;
  totalBytes += s;
  if (dryRun) {
    console.log(`  would delete  ${(s / 1024 | 0).toString().padStart(7)} KB  ${f}`);
  } else {
    try {
      unlinkSync(f);
      console.log(`  ✗ deleted     ${(s / 1024 | 0).toString().padStart(7)} KB  ${f}`);
    } catch (e) {
      console.log(`  ! failed      ${f}  ${e.message}`);
    }
  }
}

console.log(`\n${dryRun ? 'Would free' : 'Freed'}: ${(totalBytes / 1024 / 1024).toFixed(1)} MB across ${unused.length} files`);
