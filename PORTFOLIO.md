# RIOT MMO — Cinematic Web Experience

> Concept site immersif pour le futur MMO de Riot Games · _Mad Makers × Riot Games_

Site one-pager cinématique + sous-pages CMS-style explorant l'univers de **Runeterra**. Direction artistique brutaliste-éditoriale avec interface HUD inspirée des launchers MMO, animations scroll-driven, simulations WebGL, et vidéos plein-cadre.

Ce document détaille le concept, la direction graphique, l'architecture technique, et le catalogue d'effets / animations construits pour le projet.

---

## 🎯 Concept

**Pitch en une ligne** — un site web cinématique de niveau Awwwards qui se comporte comme un trailer interactif pour le futur MMO de Riot Games.

### Intention

- Faire ressentir l'univers AVANT de l'expliquer : la lecture est secondaire au cinema.
- Mélanger codes du **launcher MMO** (HUD, REC, métriques live, scanner lines) et de l'**editorial premium** (typographie display massive, blanc tournant, photographies pleine taille).
- Exposer chaque pan de l'univers (régions, races, gameplay, carte 3D, cinématiques, features) avec son propre langage visuel.
- Aucun framework UI — JavaScript vanilla avec ESM, pour garder un contrôle total sur le rendu.

### Univers couvert

- **13 régions** de Runeterra (Demacia, Noxus, Ionia, Shadow Isles, Freljord, Piltover, Zaun, Shurima, Bilgewater, Targon, Bandle City, Ixtal, The Void)
- **6 races jouables** (Human, Yordle, Vastaya, Troll, Ascended, Dragon)
- Carte 3D temps réel · trailers · dossiers lore · features de gameplay

---

## 🎨 Design graphique

### Inspiration

- **Riot Games** — direction artistique sombre, accents rouges, codes legends-of-runeterra
- **Apple** — minimalisme, hiérarchie typographique épurée, blanc tournant
- **Awwwards 2024-2026** — interactions WebGL, transitions liquid-glass, scroll-driven storytelling
- **HUD militaire / launcher MMO** — REC indicators, corner crosses, scanner lines, métriques live

### Identité visuelle

| Élément | Valeur |
| --- | --- |
| Accent principal | `#ff2e00` (rouge orange brûlé) |
| Encre | `#0a0a0a` |
| Papier | `#ffffff` / `#fafafa` (selon section) |
| Marker HUD | crosses rouges aux 4 coins, 12-18px |
| Typographie display | **Archivo** (900) — titres énormes, ALL CAPS, letter-spacing négatif |
| Typographie body | **Inter** (400-600) — paragraphes longs, lisibilité |
| Typographie mono | **JetBrains Mono** (400-500) — meta labels, codes, %, métriques |

### Composition

- Grilles asymétriques 2/3 + 1/3, cadres serrés, full-bleed alterné
- Header sub-label en `mix-blend-mode: difference` qui change de couleur selon le fond
- Numérotation explicite des sections (`01 / HERO`, `02 / WORLD REVEAL`, etc.)
- Séparateurs typographiques mono : `·` `→` `↓` (motifs récurrents)

---

## 🛠️ Stack technique

### Build & infra

- **Vite 5** — dev server HMR + build production multi-pages
- **ES Modules natifs**, pas de bundler-spécifique au-delà de Vite
- **Multi-page** : 3 entrypoints HTML (`index.html`, `region.html`, `race.html`)
- Asset folder dédié servi via `publicDir: 'asset'`

### Librairies runtime

| Lib | Usage |
| --- | --- |
| **Three.js** + addons (`OrbitControls`, `GLTFLoader`) | Carte 3D Runeterra (modèle GLB temps réel) |
| **GSAP 3** + `ScrollTrigger` | Toutes les timelines / scroll-driven |
| **Lenis** | Smooth scroll natif (relais vers ScrollTrigger) |
| **WebGL2** brut (no library) | Simulations wave-equation custom (hero ripple) |
| **SVG filter primitives** | `feTurbulence`, `feDisplacementMap`, `feGaussianBlur` (effets liquides natifs) |

### CSS

- Custom properties (theming, valeurs animées par JS)
- Grid + Flex + `aspect-ratio` + `clamp()` pour responsive sans media queries quand possible
- Modern CSS : `mix-blend-mode`, `backdrop-filter`, `mask-image`, `clip-path`, `text-wrap: pretty`, `paint-order`
- Approche **BEM** (`.region__cross--tl`, `.boot-screen__door--top`)

---

## 🏗️ Architecture

```
/
├── index.html                  # Page d'accueil cinématique
├── region.html                 # Template région (CMS-style)
├── race.html                   # Template race (CMS-style)
├── vite.config.js              # Multi-page entrypoints
├── asset/                      # Public dir (vidéos, images, GLB, crests)
│   ├── *.mp4                   # Trailers, race videos, gameplay clips
│   ├── runeterra_3d_map.glb    # Modèle 3D continent
│   └── *_crest_icon.png        # 13 crests régions
└── src/
    ├── main.js                 # Boot screen, hero, sections, trailer
    ├── region.js               # Logique région (slug → template)
    ├── race.js                 # Logique race (slug → template)
    ├── regions-data.js         # Store contenu 13 régions
    ├── races-data.js           # Store contenu 6 races
    ├── hero-ripple.js          # Module WebGL2 wave-equation
    ├── runeterra-map.js        # Init Three.js + OrbitControls
    └── style.css               # Design system (~3000 lignes)
```

**Pattern CMS** : un seul template HTML + un store JS (objet) → chaque page (`?id=demacia`) lit le slug en URL et hydrate le DOM. **13 pages régions + 6 pages races sans dupliquer le HTML.**

---

## 🎬 Sections principales

### 01 / Hero
- Image plein-cadre + WebGL liquid ripple par-dessus
- Titre `FORGE YOUR LEGACY` en display 240px, scroll-parallax
- Bouton trailer avec **liquid morph open** (animation polygon 56-points avec ondulations multi-octaves)

### 02 / World Reveal — 13 Régions
- Strip horizontale drag/scroll-snap
- Wheel vertical → scroll horizontal (avec hand-off Lenis aux bords)
- Click → `/region.html?id=<slug>` (navigation préservée vs drag détecté à 4px)

### 03 / Races
- Grille de 6 cartes avec image + tooltip vidéo HUD au hover (vidéo race en muted loop suit le curseur)
- Click → `/race.html?id=<slug>`
- Portrait Leblanc full-height en overlay (mix-blend-mode + animation idle "Living Black Rose")

### 04 / Gameplay
- Liste de features cliquables (`EXPLORE VAST LANDS`, `JOIN FORCES`, `FIGHT EPIC BATTLES`)
- Click sur un item → swap iframe YouTube par vidéo locale dans le player à droite
- Click sur le titre → reset à la live news

### 05 / Interactive 3D Map
- **Three.js** : modèle GLB de Runeterra, `OrbitControls` (drag-rotate, wheel-zoom 1.2-250, pinch)
- Auto-rotation jusqu'à première interaction
- Compass needle dynamique (azimut camera), FPS counter HUD
- Lazy-load via `IntersectionObserver`
- `data-lenis-prevent` + `preventDefault` wheel pour ne pas scroll la page pendant le zoom

### 06 / Cinematic Break
- Vidéo plein-cadre avec `clip-path: inset()` reveal scroll-driven
- Auto-play sur entrée viewport

### 07 / Features
- 3 cartes éditoriales (Massive Open World, Epic Raids, Guild Wars)
- `flex-grow: 1` sur les info-blocks pour aligner les hauteurs malgré différences de texte
- `text-wrap: pretty` pour éviter les orphelins typographiques

### 08 / CTA
- Wipe rouge + clip-path reveal du titre `THE JOURNEY BEGINS`
- Form email avec parallax bg

---

## 🌌 Loading screen

Premier paint : un **launcher MMO** avec animation d'ouverture théâtrale.

- Vidéo `Explore vast lands.mp4` en B&W, full-bleed, opacity 0.95
- Deux **portes** (top + bottom door, 50vh chacune) clippant la vidéo en deux halves
- Chrome HUD :
  - TL : `RIOT MMO · v0.1.0 BETA`
  - TR : `REC · BOOTING SYSTEMS` (pulse rouge)
  - BL : log boot cycling 7 messages (700ms)
  - BR : `VALORAN-EU · 124 MS`
  - Center : `MAD MAKERS × RIOT GAMES` + barre de progression 1px
- Strip des **13 crests régions** au bas, animée par un **scanner rouge vertical** qui balaie de gauche à droite (1.6s) → chaque crest est révélé au passage avec fade-up + scale overshoot + blur unblur
- Idle : halo radial rouge breathing (4s, déphasé par crest)
- Sortie sur `window.load` :
  - Hold 380ms à 100% (`READY`)
  - Add `.is-done` → top door slide `translateY(-100%)`, bot door slide `translateY(100%)` (1.15s `cubic-bezier(0.65, 0, 0.2, 1)`)
  - Crests **zipper out** : index pairs → up, impairs → down (110vh, blur 8px)
  - Seam fade
- Self-remove après 1.3s + restore `body.overflow`

---

## ✨ Catalogue des effets / animations

### Cursor

- **Custom cursor** : dot follows instantanément, ring lerp 0.18 (trailing)
- **Magnetic hover** sur `[data-magnetic]` : pull vers curseur (strength 0.35, ease `power3.out`), retour élastique sur leave (`elastic.out(1, 0.4)`)
- `cursor: none` global, l'élément `.cursor` est rendu manuellement

### Smooth scroll

- **Lenis** (duration 1.2s, ease custom exponentielle)
- Bridge `lenis.on('scroll', ScrollTrigger.update)` + `gsap.ticker.add(lenis.raf)`
- `data-lenis-prevent` sur les zones interactives (carrousel régions, map 3D)

### Hero — Liquid Glass Ripple (WebGL2)

Custom `hero-ripple.js` :

- Deux FBOs ping-pong (RGBA16F, format `EXT_color_buffer_float`)
- **3 shader passes** : drop (Gaussian impulse), update (équation d'onde `h_new = (l+r+u+d)/2 - h_prev` × damping 0.985), render (sample bg texture déplacé par gradient height-field)
- **Aberration chromatique** : R/G/B échantillonnés à offsets différents le long du gradient
- **Specular silver** : `pow(facing · lightDir, 5) × gradLen × specStrength`
- Cursor → drops Gaussian le long du chemin (interpolés à 14px max entre samples pour traînée continue)
- IntersectionObserver pause hors viewport

### Trailer Player — Liquid Morph

Animation **polygon clip-path** custom dans `main.js` :

- 56 points perimetraux (sous-segments rectangle exacts → coins parfaits)
- Catmull-Rom → Cubic Bezier pour smooth path SVG
- Morph `from = button rect` (border-radius lu en runtime) `→ to = viewport rect` (radius 0)
- **Multi-octave wave deformation** : `[3.0, 7.3, 17.1, 31.7]` Hz × `[5.7, 9.4, 14.2, 22.9]` rad/s (normales) + tangentielles
- Enveloppe `4·t·(1-t)` × turbulence `1 + sin(πt) × 0.35` → sharp aux extrêmes, pic au milieu
- Open : 1.5s `expo.out` + filter blur 14→0 + saturation 1.5→1
- Close : 1.25s `expo.in` + audio fade out + cleanup

### Mix-Blend-Mode magic

- **Hero meta** sub-label : `mix-blend-mode: difference` sur fond vidéo HUD launcher → couleur opposée automatique (cyan sur rouge, etc.)
- **CINEMATIC WEB EXPERIENCE** : `text-stroke: 0.6px white` + `mix-blend-mode: difference` → contour qui s'inverse selon le fond
- **Choose your blood** (factions title) : `mix-blend-mode: difference` sur les spans CHOOSE/YOUR (mais pas BLOOD qui garde son rouge accent) — `clearProps: 'transform'` GSAP indispensable pour que le blend traverse les stacking contexts

### Leblanc — Living Black Rose

3 GSAP loops désynchronisés sur la matrone Black Rose :

| Propriété | Range | Période | Ease |
| --- | --- | --- | --- |
| `scale` | 1 → 1.022 | 3.4s | `sine.inOut` yoyo |
| `rotation` | 0° → 0.45° | 5.7s | `sine.inOut` yoyo |
| `--aura` (CSS var) | 1 → 1.7 | 2.6s | `sine.inOut` yoyo |

Périodes 2.6 / 3.4 / 5.7 sans ratio commun → ne se réaligne jamais.

**Plus** : phase glitch RGB-split aléatoire toutes les 9-16s (red/cyan drop-shadows brièvement) — suggère sa nature illusoire.

`transform-origin: 50% 100%` → le bord inférieur reste collé aux cartes peu importe l'animation.

### Region 3D Map

- Three.js perspective camera (FOV 45, near 0.05, far 1000)
- 3 lights : key warm (`#ffe7c4`), rim cool (`#6a8eff`), accent red (`#ff5230`)
- Scene fog (120 → 380) pour amortir le zoom out
- OrbitControls : minDistance 0.4, maxDistance 250, zoomSpeed 1.6
- Auto-rotate jusqu'à pointerdown/wheel
- Resize via `ResizeObserver`

### Region Page — Gallery Deck

Stacked deck of N cards qui s'éventent en arc circulaire au hover :

- **Vrai pivot circulaire** : `transform-origin: 50% calc(100% + var(--pivot-y))` (pivot sous le deck, non visible)
- Rotation only — chaque carte tourne autour du pivot, donc bords inférieurs convergent vers un point unique (vraie main de cartes)
- Adaptive : JS calcule `--fan-rot-step` et `--pivot-y` selon le nombre de cartes (3 cards → arc large, 12 cards → bouquet serré)
- Hover individuel : `z-index: 999` (au premier plan) + `scale(1.05)` sans translate (reste sur l'arc)
- Click → **Liquid lightbox open** (même logique de morph que le trailer player, ported)

### Race Page — Editorial layout

Design contre-pied du brutalisme des régions :

- Hero vidéo full-bleed
- Profile 2-col avec image stretchée à la hauteur exacte du bloc texte
- Origin section centrée éditoriale (max 720px)
- Champion cards en grid auto-fit (3:4 portrait + bandeau rouge)
- Pull quote display italic 56px avec gros guillemet rouge décoratif
- Cinematic vidéo player + pager prev/next bouclé

### Glitch effects

- **BLOOD glitch** (early prototype, retiré) : RGB-split timeline GSAP avec stagger random
- **Boot screen scanner** : ligne rouge 2px qui sweep horizontalement + révèle les crests par stagger
- **Section 04 reveal stagger** : meta + h2 + cards → power3.out, durations 1.2-1.8s, total 2.6s

---

## 🔧 Techniques particulières

### Drag-vs-click arbitration (carousel régions)

Le carousel utilise le pointer down/move/up natif. Problème : les cartes sont des `<a>` (navigation). Comment distinguer un **drag** (scroll horizontal) d'un **click** (navigation) ?

- `DRAG_THRESHOLD = 4px` : si pointermove dépasse 4px de déplacement → `isDragging = true`
- Sur drag confirmé → `setPointerCapture` (drag continue même si curseur sort du strip)
- Click event en **capture phase** (`addEventListener('click', fn, true)`) → `preventDefault` + `stopPropagation` si `suppressNextClick = true` (set à la fin d'un drag)
- Reset `suppressNextClick = false` à chaque pointerdown → pas d'état stale

### Liquid lightbox sans librairie

Le lightbox de la galerie de région reproduit l'animation liquid du trailer mais en standalone. Toute la chaîne `feTurbulence + perimeter sampling + Catmull-Rom Bezier` est portée localement dans `region.js`. Aucune dépendance externe pour le morph — uniquement du SVG path computé à la frame.

### Scroll-snap mandatory vs proximity

Sur la strip des régions, `scroll-snap-type: x mandatory` cassait le wheel scroll (snap revenait à la carte précédente entre 2 ticks). Solution :

- `scroll-snap-type: x proximity` (snap moins agressif)
- + classe `.is-wheeling` ajoutée 160ms par JS au wheel → désactive temporairement le snap pendant le scroll

### Mix-blend-mode et stacking contexts

Plusieurs blend modes "ne fonctionnaient pas" sur la page car les transforms GSAP créaient des stacking contexts qui isolaient le blend. Pattern corrigé :

```js
gsap.to('.factions__title', { y: 0, clearProps: 'transform' })
```

`clearProps` retire la transform inline post-animation → le blend retraverse jusqu'au stacking context isolé `.section--factions`.

### CSS adaptive sizing

Tout le site est responsive sans media queries-only : `clamp(min, fluid, max)` partout pour les `font-size`, `padding`, `gap`. Ex :

```css
font-size: clamp(72px, 13vw, 220px);
```

→ 72px sur mobile, ~13vw entre, max 220px sur écran large. Une seule règle, fluid sur toute la plage.

---

## 🚀 Performance

- Toutes les vidéos `muted loop playsinline preload="metadata"` → autoplay accepté browsers
- Modèle 3D GLB lazy-loaded via IntersectionObserver (rootMargin 300px)
- WebGL hero ripple paused hors viewport (IO + flag `visible`)
- Image `loading="lazy"` sur galleries non-immédiatement visibles
- Boot screen self-removes du DOM après split → libère les filtres backdrop-filter
- `will-change` ciblé sur les éléments animés (transform, filter, opacity)
- Lerp à `requestAnimationFrame` ne reschedule que si non-settled → idle sans CPU

---

## 📦 Livrables

- Site one-pager `index.html` + 19 sous-pages (13 régions + 6 races) générées dynamiquement
- 100% statique (zéro backend) → déployable sur n'importe quel CDN (Vercel, Netlify, GitHub Pages)
- Build production via `npm run build` → bundle optimisé avec assets versionnés
- Dev server `npm run dev` avec HMR

---

## 🎯 Achievements

- **3 templates HTML** seulement pour 20 pages → maintenance économe
- **Aucun framework UI** (React/Vue/Svelte) → bundle JS < 250 KB hors Three.js
- **Design system CSS** mono-fichier (~3000 lignes), 100+ composants typés BEM
- **5 simulations physiques différentes** : WebGL wave-equation, SVG turbulence/displacement, GSAP springs multi-loops, magnetic pull, drag-velocity squash
- **2 lightboxes liquid morph** (trailer player + region gallery) avec algorithm de perimeter morphing custom
- Multi-page Vite avec un seul bundle CSS partagé entre les 3 entry points

---

## 🔮 Crédits & inspirations

- **Riot Games** — concept artistique, lore officiel _League of Legends_
- **Awwwards** showcases 2024-2026 — référence pour les transitions liquid-glass
- **Apple.com** — patterns minimalistes, typographie display, clamp-based responsive
- **Linear.app / Vercel.com** — palette sobre, accents primaires unique, surface dark/light alternée

> _Built with care by Mad Makers — no framework, just the platform._
