// One-off: find unused files under assets/.
import { readdirSync, statSync, readFileSync } from 'node:fs';
import path from 'node:path';

function walk(dir, files = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, files);
    else files.push(p);
  }
  return files;
}

const assetFiles = walk('assets').map(p => p.split(path.sep).join('/'));

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

const used = new Set();
const unused = [];

for (const asset of assetFiles) {
  const base = path.basename(asset);
  const baseNoExt = base.replace(/\.[^.]+$/, '');
  if (combined.includes(asset) || combined.includes(base) || combined.includes(baseNoExt)) {
    used.add(asset);
  } else {
    unused.push(asset);
  }
}

const withSize = unused.map(f => ({ f, s: statSync(f).size })).sort((a, b) => b.s - a.s);
const totalUnused = withSize.reduce((a, b) => a + b.s, 0);
const totalAll = assetFiles.reduce((a, p) => a + statSync(p).size, 0);

console.log(`Total assets: ${assetFiles.length}  (${(totalAll / 1024 / 1024).toFixed(1)} MB)`);
console.log(`Used: ${used.size}`);
console.log(`Unused: ${withSize.length}  (${(totalUnused / 1024 / 1024).toFixed(1)} MB)`);
console.log('');
console.log('--- UNUSED (sorted by size) ---');
for (const { f, s } of withSize) {
  console.log(`${(s / 1024 | 0).toString().padStart(7)} KB  ${f}`);
}
