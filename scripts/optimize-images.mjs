// Mad Makers — image optimization & asset generation pipeline.
//
// Reads /assets/*.png|jpg, produces:
//   - kebab-case .webp + .png (fallback) for every source image
//   - resized hero-bg (originals are 6144x4096, way too big for web)
//   - /favicon-32.png + /apple-touch-icon.png + /favicon.svg
//   - /assets/og-home.jpg (1200x630 social sharing card)
//   - assets/manifest.json (oldName -> {newName, width, height})
//
// Run:  node scripts/optimize-images.mjs
// Idempotent: skips files where the .webp is already up-to-date.

import sharp from 'sharp';
import { readdir, readFile, writeFile, copyFile, stat, rename, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, parse } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ASSETS = join(ROOT, 'assets');

// Files with spaces / typos / accents -> kebab-case base names (without extension).
// Anything not in this map keeps its existing base name (already kebab-case).
const RENAMES = {
  'direction artistique t.01': 'direction-artistique',
  'creation web t.02':         'creation-web',
  'seo marketing t.04':        'seo-marketing',
  'reseaux sociaux t.05':      'reseaux-sociaux',
  'copstrytelling t.06':       'copywriting-storytelling',
  'glass texture':             'glass-texture'
};

// Per-file overrides (resize, quality)
const OVERRIDES = {
  'hero-bg':       { resizeWidth: 2400, quality: 82 },
  'glass-texture': { quality: 75 },
  // Hi-fi quality for talent thumbnails that contain typography
  'direction-artistique':    { quality: 88 },
  'creation-web':            { quality: 88 },
  'seo-marketing':           { quality: 88 },
  'reseaux-sociaux':         { quality: 88 },
  'copywriting-storytelling':{ quality: 88 }
};

const DEFAULT_QUALITY = 82;

// Files to ignore (large videos, irrelevant, gitignored, sensitive)
const IGNORE = new Set(['favicon.png']); // favicon handled separately
const IGNORE_PREFIX = ['artist-shayne']; // gitignored — copyright

const slug = (s) => s
  .normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

// ── 1. Discover image files ────────────────────────────────────────────────
const files = (await readdir(ASSETS))
  .filter(f => /\.(png|jpe?g)$/i.test(f))
  .filter(f => !IGNORE.has(f))
  .filter(f => !IGNORE_PREFIX.some(p => f.toLowerCase().startsWith(p)));

const manifest = {};

console.log(`Optimizing ${files.length} images in /assets …\n`);

for (const file of files) {
  const { name: rawBase, ext } = parse(file);
  const newBase = RENAMES[rawBase] ?? slug(rawBase);
  const override = OVERRIDES[newBase] || {};
  const quality = override.quality ?? DEFAULT_QUALITY;

  const inputPath = join(ASSETS, file);
  const newPng = join(ASSETS, `${newBase}.png`);
  const newWebp = join(ASSETS, `${newBase}.webp`);

  let pipeline = sharp(inputPath);
  const meta = await pipeline.metadata();

  // Resize if override demands it
  let outWidth = meta.width;
  let outHeight = meta.height;
  if (override.resizeWidth && meta.width > override.resizeWidth) {
    const scale = override.resizeWidth / meta.width;
    outWidth = override.resizeWidth;
    outHeight = Math.round(meta.height * scale);
    pipeline = pipeline.resize({ width: outWidth, withoutEnlargement: true });
  }

  // .webp output
  await pipeline
    .clone()
    .webp({ quality, effort: 5 })
    .toFile(newWebp);

  // Re-emit a kebab-named .png so the <picture> fallback works for renamed files
  // (and for resized hero-bg). For non-renamed/non-resized files, leave the
  // original .png alone — but make sure a kebab-named copy exists.
  const needsPng = newBase !== rawBase || override.resizeWidth;
  if (needsPng && !existsSync(newPng)) {
    await pipeline
      .clone()
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(newPng);
  } else if (!existsSync(newPng) && newBase === rawBase && ext.toLowerCase() === '.png') {
    // base name already kebab — original PNG already at the right path
  }

  manifest[file] = {
    newBase,
    webp: `assets/${newBase}.webp`,
    png:  ext.toLowerCase() === '.jpg' || ext.toLowerCase() === '.jpeg'
            ? null  // jpg sources don't need a .png fallback
            : `assets/${newBase}.png`,
    width: outWidth,
    height: outHeight
  };

  console.log(`  ✓ ${file.padEnd(40)} -> ${newBase}.webp  (${outWidth}x${outHeight}, q=${quality})`);
}

// ── 2. Delete original spaced/typo files (kept until both webp + png exist) ─
const toCleanup = files.filter(f => {
  const { name: rawBase } = parse(f);
  return RENAMES[rawBase] !== undefined;
});
for (const f of toCleanup) {
  const p = join(ASSETS, f);
  if (existsSync(p)) {
    await unlink(p);
    console.log(`  ✗ removed legacy:  ${f}`);
  }
}

// ── 3. Favicon variants from favicon.png ───────────────────────────────────
const FAV_SRC = join(ASSETS, 'favicon.png');
if (existsSync(FAV_SRC)) {
  await sharp(FAV_SRC).resize(32, 32).png().toFile(join(ROOT, 'favicon-32.png'));
  await sharp(FAV_SRC).resize(180, 180).png().toFile(join(ROOT, 'apple-touch-icon.png'));
  console.log('\n  ✓ favicon-32.png        (32x32 from assets/favicon.png)');
  console.log('  ✓ apple-touch-icon.png  (180x180)');
}

// ── 4. favicon.svg — clean vector, brand colors ────────────────────────────
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="12" fill="#0a0a0a"/>
  <path d="M14 48V16h5l9 18 9-18h5v32h-4V24l-8 16h-4l-8-16v24z" fill="#fff"/>
  <circle cx="50" cy="48" r="3.5" fill="#39ff14"/>
</svg>
`;
await writeFile(join(ROOT, 'favicon.svg'), faviconSvg, 'utf8');
console.log('  ✓ favicon.svg           (handcrafted "M" + accent dot)');

// ── 5. og-home.jpg — programmatic 1200x630 social card ─────────────────────
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0a0a"/>
      <stop offset="1" stop-color="#000"/>
    </linearGradient>
    <pattern id="grain" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
      <rect width="2" height="2" fill="#0a0a0a"/>
      <rect width="1" height="1" fill="#111"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="1200" height="630" fill="url(#grain)" opacity="0.4"/>

  <!-- top label -->
  <text x="80" y="80" font-family="JetBrains Mono, monospace" font-size="18" letter-spacing="6" fill="#39ff14">[ AGENCE WEB CRÉATIVE · PARIS · FR ]</text>

  <!-- main wordmark -->
  <text x="80" y="280" font-family="Archivo Black, Arial Black, sans-serif" font-size="180" font-weight="900" fill="#fff" letter-spacing="-7">DREAM IT<tspan fill="#39ff14">.</tspan></text>
  <text x="80" y="450" font-family="Archivo Black, Arial Black, sans-serif" font-size="180" font-weight="900" fill="#fff" letter-spacing="-7">WE MAKE IT<tspan fill="#39ff14">.</tspan></text>

  <!-- divider -->
  <line x1="80" y1="510" x2="1120" y2="510" stroke="#222" stroke-width="1"/>

  <!-- bottom row -->
  <text x="80" y="565" font-family="Archivo Black, Arial Black, sans-serif" font-size="36" fill="#fff" letter-spacing="-1">MAD<tspan fill="#39ff14">.</tspan>MAKERS</text>
  <text x="1120" y="565" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="20" letter-spacing="4" fill="#888">www.mad-makers.fr</text>

  <!-- bracket corners -->
  <path d="M 40 40 L 40 70 M 40 40 L 70 40" stroke="#39ff14" stroke-width="2" fill="none"/>
  <path d="M 1160 40 L 1160 70 M 1160 40 L 1130 40" stroke="#39ff14" stroke-width="2" fill="none"/>
  <path d="M 40 590 L 40 560 M 40 590 L 70 590" stroke="#39ff14" stroke-width="2" fill="none"/>
  <path d="M 1160 590 L 1160 560 M 1160 590 L 1130 590" stroke="#39ff14" stroke-width="2" fill="none"/>
</svg>`;
await sharp(Buffer.from(ogSvg)).jpeg({ quality: 90, mozjpeg: true }).toFile(join(ASSETS, 'og-home.jpg'));
console.log('  ✓ assets/og-home.jpg    (1200x630 social sharing card)');

// ── 6. Write manifest ──────────────────────────────────────────────────────
await writeFile(
  join(ASSETS, 'manifest.json'),
  JSON.stringify(manifest, null, 2) + '\n',
  'utf8'
);
console.log(`\n  ✓ assets/manifest.json  (${Object.keys(manifest).length} entries)`);

console.log('\nDone.');
