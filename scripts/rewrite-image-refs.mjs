// One-shot rewrite of asset references after the WebP/kebab rename pass.
// Idempotent: running twice is a no-op.

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const log = (...args) => console.log(...args);
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const replaceAll = (haystack, needle, replacement) => {
  const re = new RegExp(escRe(needle), 'g');
  const count = (haystack.match(re) || []).length;
  return [haystack.replace(re, replacement), count];
};

// ── Manifest of renamed paths ──────────────────────────────────────────────
const PATH_RENAMES = {
  'assets/direction%20artistique%20t.01.png': 'assets/direction-artistique.png',
  'assets/creation%20web%20t.02.png':         'assets/creation-web.png',
  'assets/seo%20marketing%20t.04.png':        'assets/seo-marketing.png',
  'assets/reseaux%20sociaux%20t.05.png':      'assets/reseaux-sociaux.png',
  'assets/copstrytelling%20t.06.png':         'assets/copywriting-storytelling.png',
  'assets/direction artistique t.01.png':     'assets/direction-artistique.png',
  'assets/creation web t.02.png':             'assets/creation-web.png',
  'assets/seo marketing t.04.png':            'assets/seo-marketing.png',
  'assets/reseaux sociaux t.05.png':          'assets/reseaux-sociaux.png',
  'assets/copstrytelling t.06.png':           'assets/copywriting-storytelling.png',
  'assets/glass texture.jpg':                 'assets/glass-texture.png'
};

// Picture wrap manifest: <img src="X"> => <picture>...<img>...</picture>
// Each entry maps the PNG src to { webp, width, height, lazy, fetchpriority }
const PICTURE_WRAPS = {
  // Founders (above the fold, LCP candidates)
  'assets/artist-maick.png?v=2':  { webp: 'assets/artist-maick.webp',  width: 1023, height: 1537, lazy: false, fetchpriority: 'high' },
  'assets/artist-goudet.png?v=2': { webp: 'assets/artist-goudet.webp', width: 1122, height: 1402, lazy: true },
  'assets/artist-maick.png':      { webp: 'assets/artist-maick.webp',  width: 1023, height: 1537, lazy: true },
  'assets/artist-goudet.png':     { webp: 'assets/artist-goudet.webp', width: 1122, height: 1402, lazy: true },

  // Talents
  'assets/direction-artistique.png':    { webp: 'assets/direction-artistique.webp',    width: 1672, height: 941,  lazy: true },
  'assets/creation-web.png':            { webp: 'assets/creation-web.webp',            width: 4096, height: 2728, lazy: true },
  'assets/seo-marketing.png':           { webp: 'assets/seo-marketing.webp',           width: 1024, height: 1024, lazy: true },
  'assets/reseaux-sociaux.png':         { webp: 'assets/reseaux-sociaux.webp',         width: 1024, height: 1024, lazy: true },
  'assets/copywriting-storytelling.png':{ webp: 'assets/copywriting-storytelling.webp',width: 1024, height: 1024, lazy: true },

  // Mockups
  'assets/mockup-box.png':    { webp: 'assets/mockup-box.webp',    width: 1024, height: 1536, lazy: true },
  'assets/mockup-poster.png': { webp: 'assets/mockup-poster.webp', width: 1024, height: 1536, lazy: true },
  'assets/mockup-phone.png':  { webp: 'assets/mockup-phone.webp',  width: 1024, height: 1536, lazy: true },

  // Realisations tiles
  'assets/asset-05.png': { webp: 'assets/asset-05.webp', width: 941, height: 1672, lazy: true }
};

// ── Process index.html ─────────────────────────────────────────────────────
let index = await readFile(join(ROOT, 'index.html'), 'utf8');

// 1) Path renames
let totalRenames = 0;
for (const [from, to] of Object.entries(PATH_RENAMES)) {
  const [out, n] = replaceAll(index, from, to);
  index = out;
  if (n) { log(`  ${n} × rename:  ${from}  →  ${to}`); totalRenames += n; }
}

// 2) Wrap <img> in <picture> with webp source + width/height/lazy/decoding
// Match a single-line <img ...> tag whose src is in PICTURE_WRAPS.
const imgTagRe = /<img\s+src="([^"]+)"\s+alt="([^"]*)"(?:\s+(?:loading="(lazy|eager)"|decoding="async"|width="\d+"|height="\d+"|fetchpriority="(?:high|low|auto)"))*\s*\/?>/g;

let pictureWraps = 0;
index = index.replace(imgTagRe, (full, src, alt) => {
  const meta = PICTURE_WRAPS[src];
  if (!meta) return full;
  pictureWraps++;
  const loading = meta.lazy ? 'lazy' : 'eager';
  const fp = meta.fetchpriority ? ` fetchpriority="${meta.fetchpriority}"` : '';
  const altEsc = alt;  // already HTML-encoded in source
  return `<picture><source srcset="${meta.webp}" type="image/webp"><img src="${src}" alt="${altEsc}" width="${meta.width}" height="${meta.height}" loading="${loading}" decoding="async"${fp}></picture>`;
});
log(`  ${pictureWraps} × <img> wrapped in <picture>`);

// 3) Replace hero-bg.png with og-home.jpg in OG/Twitter/schema.org meta
const ogReplacements = [
  ['assets/hero-bg.png', 'assets/og-home.jpg', /og:image|twitter:image|"logo":|"image":/]
];
let ogCount = 0;
{
  const re = /(og:image|twitter:image|"logo":\s*|"image":\s*)([^"]*?)assets\/hero-bg\.png/g;
  index = index.replace(re, (full, prefix, mid) => {
    ogCount++;
    return `${prefix}${mid}assets/og-home.jpg`;
  });
}
log(`  ${ogCount} × og:image / schema.org image  →  og-home.jpg`);

// 4) Hero CSS background — switch to image-set(webp, png) for browser support detection
{
  const before = index;
  index = index.replace(
    /background:url\("assets\/hero-bg\.png"\) center\/cover no-repeat/,
    'background:image-set(url("assets/hero-bg.webp") type("image/webp"), url("assets/hero-bg.png") type("image/png")) center/cover no-repeat;background-size:cover'
  );
  if (before !== index) log('  ✓ hero background promoted to image-set(webp, png)');
}

await writeFile(join(ROOT, 'index.html'), index, 'utf8');
log(`\nindex.html — ${totalRenames} path renames, ${pictureWraps} picture wraps, ${ogCount} og fixes`);

// ── Process projects.js ────────────────────────────────────────────────────
let projects = await readFile(join(ROOT, 'projects.js'), 'utf8');
let projectsRenames = 0;
for (const [from, to] of Object.entries(PATH_RENAMES)) {
  const [out, n] = replaceAll(projects, from, to);
  projects = out;
  projectsRenames += n;
}
// Also: artist-maick.png and asset-05.png references in projects.js — keep PNG (no picture wrap in JS-emitted gallery; webp is fetched separately by browsers that support it via the image fallback in modern browsers)
// Actually we'll just leave projects.js refs as PNGs since the gallery images in the lightbox are clicked and rendered via JS — keeping PNG is safer.
await writeFile(join(ROOT, 'projects.js'), projects, 'utf8');
log(`projects.js — ${projectsRenames} path renames`);

// ── Process project.html (template) ────────────────────────────────────────
let projectHtml = await readFile(join(ROOT, 'project.html'), 'utf8');
let projectRenames = 0;
for (const [from, to] of Object.entries(PATH_RENAMES)) {
  const [out, n] = replaceAll(projectHtml, from, to);
  projectHtml = out;
  projectRenames += n;
}
// Replace hero-bg.png fallbacks with og-home.jpg in the template (used for default OG image when project has no cover)
{
  const re = /assets\/hero-bg\.png/g;
  const matches = (projectHtml.match(re) || []).length;
  projectHtml = projectHtml.replace(re, 'assets/og-home.jpg');
  if (matches) log(`  ${matches} × project.html hero-bg.png  →  og-home.jpg`);
}
await writeFile(join(ROOT, 'project.html'), projectHtml, 'utf8');
log(`project.html — ${projectRenames} path renames`);

log('\nDone. Re-run scripts/build-projects.mjs to regenerate project-XX.html.');
