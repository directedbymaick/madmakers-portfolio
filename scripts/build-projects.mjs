// Mad Makers — pre-render project pages for SEO + social sharing.
//
// Reads projects.js + project.html template, writes one project-XX.html
// per project with hardcoded meta, OG, Twitter, canonical, robots, JSON-LD.
// Also rewrites sitemap.xml to list only published (non-Placeholder) projects.
//
// Run:  node scripts/build-projects.mjs
// Hooked into Vercel build via "buildCommand" in vercel.json.

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE_ORIGIN = 'https://www.mad-makers.fr';
const TODAY = new Date().toISOString().slice(0, 10);

const escHtml = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

// --- Load projects.js (exposes window.MM_PROJECTS) ---
const projectsJs = await readFile(join(ROOT, 'projects.js'), 'utf8');
const sandbox = {};
new Function('window', projectsJs)(sandbox);
const PROJECTS = sandbox.MM_PROJECTS;
if (!PROJECTS) throw new Error('Cannot parse window.MM_PROJECTS from projects.js');

// --- Load template ---
const template = await readFile(join(ROOT, 'project.html'), 'utf8');

// --- Generate one HTML per project ---
const ids = Object.keys(PROJECTS).sort();
const published = [];

for (const id of ids) {
  const data = PROJECTS[id];
  if (!data.slug) throw new Error(`Project ${id} is missing a "slug" field in projects.js`);
  const slug = data.slug;
  const url = `${SITE_ORIGIN}/${slug}`;
  const isPlaceholder = data.status === 'Placeholder';
  const title = `${data.title} — Mad Makers`;
  const desc = (data.subtitle || data.intro || '').slice(0, 160);

  // Cover/OG image: use poster for video covers, src for image covers
  let ogImage = `${SITE_ORIGIN}/assets/og-home.jpg`;
  if (data.cover) {
    if (data.cover.type === 'video' && data.cover.poster) {
      ogImage = `${SITE_ORIGIN}/${data.cover.poster}`;
    } else if (data.cover.type === 'image' && data.cover.src) {
      ogImage = /^https?:/i.test(data.cover.src) ? data.cover.src : `${SITE_ORIGIN}/${data.cover.src}`;
    }
  }

  let html = template;
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escHtml(title)}</title>`
  );
  html = html.replace(
    /<meta name="description" content="[^"]*"\/>/,
    `<meta name="description" content="${escHtml(desc)}"/>`
  );
  html = html.replace(
    /<meta name="robots" content="[^"]*"\/>/,
    `<meta name="robots" content="${isPlaceholder ? 'noindex,follow' : 'index,follow,max-image-preview:large'}"/>`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\/>/,
    `<link rel="canonical" href="${url}"/>`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\/>/,
    `<meta property="og:title" content="${escHtml(title)}"/>`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\/>/,
    `<meta property="og:description" content="${escHtml(desc)}"/>`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\/>/,
    `<meta property="og:url" content="${url}"/>`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*"\/>/,
    `<meta property="og:image" content="${ogImage}"/>`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\/>/,
    `<meta name="twitter:title" content="${escHtml(title)}"/>`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\/>/,
    `<meta name="twitter:description" content="${escHtml(desc)}"/>`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"\/>/,
    `<meta name="twitter:image" content="${ogImage}"/>`
  );

  // Inject the project ID before projects.js so the runtime knows which entry to render.
  html = html.replace(
    '<script src="projects.js"></script>',
    `<script>window.MM_PROJECT_ID = ${JSON.stringify(id)};</script>\n<script src="projects.js"></script>`
  );

  await writeFile(join(ROOT, `${slug}.html`), html, 'utf8');
  console.log(`✓ ${slug}.html  ${isPlaceholder ? '[noindex]' : '[indexed]'}  ${title}`);

  if (!isPlaceholder) published.push({ id, slug });
}

// --- Rebuild sitemap.xml from PROJECTS data ---
// Note: image tags removed from sitemap. GSC's validator throws false-positive
// "incorrect namespace" warnings even with valid XML matching Google's official
// example. Images are still discovered via HTML crawl (alt + og:image).

const sitemapEntries = [
  {
    loc: `${SITE_ORIGIN}/`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '1.0'
  },
  ...published.map(({ slug }) => ({
    loc: `${SITE_ORIGIN}/${slug}`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.8'
  })),
  {
    loc: `${SITE_ORIGIN}/mentions-legales`,
    lastmod: TODAY,
    changefreq: 'yearly',
    priority: '0.3'
  },
  {
    loc: `${SITE_ORIGIN}/politique-confidentialite`,
    lastmod: TODAY,
    changefreq: 'yearly',
    priority: '0.3'
  }
];

const renderEntry = (e) => [
  '  <url>',
  `    <loc>${e.loc}</loc>`,
  `    <lastmod>${e.lastmod}</lastmod>`,
  `    <changefreq>${e.changefreq}</changefreq>`,
  `    <priority>${e.priority}</priority>`,
  '  </url>'
].join('\n');

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '',
  ...sitemapEntries.map(renderEntry),
  '',
  '</urlset>',
  ''
].join('\n');

await writeFile(join(ROOT, 'sitemap.xml'), sitemap, 'utf8');
console.log(`✓ sitemap.xml  (${published.length} project URL${published.length > 1 ? 's' : ''} + 3 static)`);

console.log('\nDone.');
