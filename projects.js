/* Mad Makers — Projects data
   Each key maps to ?id=XX in project.html.
   Placeholder content — replace per project once briefs are finalized. */
window.MM_PROJECTS = {
  '01': {
    num: 'R.01',
    title: 'Riot MMO — Cinematic Web Experience',
    subtitle: 'Site cinématique concept pour le futur MMO de Riot Games — explorant l\'univers de Runeterra avec un niveau Awwwards.',
    client: 'Riot Games · Concept',
    year: '2025',
    scope: ['Direction artistique', 'WebGL · Three.js', 'Motion design', 'Front-end'],
    role: 'Concept · Direction artistique · Développement',
    duration: '8 semaines',
    stack: ['Vite 5', 'Three.js', 'GSAP + ScrollTrigger', 'Lenis', 'WebGL2', 'JavaScript ESM'],
    cover: {
      type: 'video',
      src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/fight%20epic%20battles.mp4',
      poster: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/hero.png'
    },
    intro: 'Site one-pager cinématique + sous-pages CMS-style explorant l\'univers de Runeterra. Direction artistique brutaliste-éditoriale avec interface HUD inspirée des launchers MMO, animations scroll-driven, simulations WebGL et vidéos plein-cadre. 13 régions, 6 races jouables, carte 3D temps réel.',
    sections: [
      {
        title: 'Concept',
        body: 'Un trailer interactif. Faire ressentir l\'univers AVANT de l\'expliquer — la lecture est secondaire au cinema. Mélange de codes du launcher MMO (HUD, REC, métriques live, scanner lines) et d\'editorial premium (typographie display massive, photographies pleine taille). Chaque pan de l\'univers a son propre langage visuel.'
      },
      {
        title: 'Stack technique',
        body: 'Vite 5 multi-page (3 entrypoints HTML), Three.js pour la carte 3D temps réel de Runeterra, GSAP + ScrollTrigger pour toutes les timelines scroll-driven, Lenis pour le smooth scroll, WebGL2 brut pour la simulation wave-equation du hero ripple. CSS moderne (mix-blend-mode, backdrop-filter, mask-image, clip-path). Aucun framework UI — JavaScript vanilla en ESM.'
      },
      {
        title: 'Loading screen',
        body: 'Premier paint : un launcher MMO avec animation d\'ouverture théâtrale. Vidéo plein-cadre clippée par deux portes top/bottom, chrome HUD militaire, log boot cycling, strip des 13 crests régions révélés un par un par un scanner rouge vertical (1.6s). Sortie sur window.load avec slide des portes (1.15s expo) et zipper-out des crests.'
      },
      {
        title: 'Achievements',
        body: '3 templates HTML pour 20 pages (1 home + 13 régions + 6 races) via pattern CMS store-driven. Bundle JS < 250 KB hors Three.js. 5 simulations physiques distinctes : WebGL wave-equation, SVG turbulence/displacement, GSAP springs multi-loops, magnetic pull, drag-velocity squash. 2 lightboxes liquid morph custom (trailer player + region gallery) avec algorithme de perimeter morphing 56-points.'
      }
    ],
    gallery: [
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/hero.png', caption: '01 — Hero · Forge Your Legacy' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2002%20-%20regions.png', caption: '02 — 13 Régions de Runeterra' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2003%20-%20races.png', caption: '03 — 6 Races jouables' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2003%20bis%20-%20races.png', caption: '03 bis — Race detail' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2004%20-%20gameplay%20experience.png', caption: '04 — Gameplay experience' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2005%20-%20navigation%20map.png', caption: '05 — Carte 3D Runeterra' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2005%20bis%20-%20navigation%20map.png', caption: '05 bis — Map detail' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2006%20-%20cinematic.png', caption: '06 — Cinematic break' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2007%20-%20features.png', caption: '07 — Features' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2007%20bis%20-%20features.png', caption: '07 bis — Features detail' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2008%20-%20contact.png', caption: '08 — CTA · The Journey Begins' },
      { type: 'video', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/yordle%20race%20lol.mp4', caption: 'Race · Yordle (clip page race)' },
      { type: 'video', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/vastayan%20race%20lol.mp4', caption: 'Race · Vastaya (clip page race)' }
    ],
    quote: {
      text: 'Built with care by Mad Makers — no framework, just the platform.',
      author: 'Note d\'auteur · Mad Makers'
    },
    next: '02'
  },
  '02': {
    num: 'R.02',
    status: 'Placeholder',
    title: 'Raw Energy',
    subtitle: 'Direction artistique d\'un clip — tension brute, cadre serré.',
    client: 'Shayne · COSHCO',
    year: '2024',
    scope: ['Clip', 'Direction artistique', 'Édition'],
    role: 'Concept · Storyboard · Post-prod',
    duration: '6 semaines',
    stack: ['Premiere', 'DaVinci Resolve', 'Runway', 'After Effects'],
    cover: { type: 'video', src: 'assets/Savarabia.mp4', poster: 'assets/artist-shayne-scream.png' },
    intro: 'Un clip minimal, intentionnellement sec. On coupe tout le décor. Il ne reste que la voix, la matière, la lumière.',
    sections: [
      { title: 'Contexte', body: 'Un morceau qui demande une lecture directe. Pas de storytelling emballé — on veut le fond, pas la forme.' },
      { title: 'Approche', body: 'Un seul axe caméra. Peu de coupes. Colorimétrie poussée au charbon, grain 35mm numérique. L\'intention : l\'oeil reste dans le cadre jusqu\'à la dernière mesure.' },
      { title: 'Résultat', body: 'Un clip dense qui a circulé via canaux organiques. Le format court sans dilution.' }
    ],
    gallery: [
      { type: 'video', src: 'assets/Savarabia.mp4', caption: 'Clip — séquence complète' },
      { type: 'image', src: 'assets/artist-shayne-scream.png', caption: 'Cadre serré' }
    ],
    quote: { text: 'On voulait qu\'un seul plan suffise. C\'est ce qu\'on a obtenu.', author: 'Mad Makers · Direction' },
    next: '03'
  },
  '03': {
    num: 'R.03',
    status: 'Placeholder',
    title: 'Stage Portrait',
    subtitle: 'Photo éditoriale live pendant une date privée.',
    client: 'Shayne · COSHCO',
    year: '2025',
    scope: ['Photo', 'Édition', 'Direction lumière'],
    role: 'Shooting · Post-traitement',
    duration: '1 soirée + 2 semaines',
    stack: ['Canon R6', '35mm f/1.4', 'Capture One', 'Photoshop'],
    cover: { type: 'image', src: 'assets/artist-shayne-sing.png' },
    intro: 'Capturer l\'artiste en performance sans romantiser. Le geste brut, la lumière dure, le grain assumé.',
    sections: [
      { title: 'Approche', body: 'Aucun flash. Exposition au fil de la scène. Tirages contrastés, palette froide, pas de retouche visage. La performance est la seule direction.' },
      { title: 'Livraison', body: '36 tirages éditoriaux, format 2:3 et 4:5 pour dossier presse + réseaux. Licensing inclus pour 18 mois.' }
    ],
    gallery: [
      { type: 'image', src: 'assets/artist-shayne-sing.png', caption: 'Portrait — scène' },
      { type: 'image', src: 'assets/artist-shayne-show.png', caption: 'Large — stage' },
      { type: 'image', src: 'assets/artist-shayne-scream.png', caption: 'Raw — drop' }
    ],
    quote: { text: 'Les images parlent sans légende. C\'est ce qu\'on voulait.', author: 'Shayne' },
    next: '04'
  },
  '04': {
    num: 'R.04',
    status: 'Placeholder',
    title: 'Studio · Off-Stage',
    subtitle: 'Portrait éditorial — Maick, l\'opérationnel.',
    client: 'Mad Makers · Interne',
    year: '2025',
    scope: ['Photo', 'Édito', 'Direction artistique'],
    role: 'Concept · Shoot · Retouche',
    duration: '2 semaines',
    stack: ['Fujifilm X-T5', '23mm f/2', 'Capture One', 'Lightroom'],
    cover: { type: 'image', src: 'assets/artist-maick.png' },
    intro: 'Un visuel fondateur pour le site : Maick hors scène, dans l\'atelier. Pas d\'effet — juste l\'intention.',
    sections: [
      { title: 'Intention', body: 'Refuser la photo corporate. On voulait la matière, le cadre, le silence. Un portrait qu\'on peut lire deux secondes ou deux minutes.' },
      { title: 'Exécution', body: 'Décor in-situ, lumière naturelle rabattue, lentille fixe. Une seule session, 40 minutes, 6 tirages retenus sur 180.' }
    ],
    gallery: [
      { type: 'image', src: 'assets/artist-maick.png', caption: 'Portrait principal' }
    ],
    quote: null,
    next: '05'
  },
  '05': {
    num: 'R.05',
    status: 'Placeholder',
    title: 'Stratégie · Altitude',
    subtitle: 'Sparring stratégique avec Goudet Abalé · ARMD Group.',
    client: 'ARMD Group',
    year: '2025',
    scope: ['Consulting', 'Vision', 'Stratégie digitale'],
    role: 'Cadrage · Recommandations',
    duration: '4 sessions sur 2 mois',
    stack: ['Notion', 'Miro', 'Google Workspace'],
    cover: { type: 'image', src: 'assets/artist-goudet.png' },
    intro: 'Une collaboration de cadrage. On confronte la vision Mad Makers à une grille internationale, regard de bâtisseur.',
    sections: [
      { title: 'Contexte', body: 'Sortir la tête du guidon opérationnel. Vérifier que les axes Mad Makers résistent à un challenge stratégique sans complaisance.' },
      { title: 'Apports', body: 'Clarification du positionnement, priorisation des segments de clientèle, grille de décision pour les opportunités entrantes. Rien de cosmétique — des arbitrages durs, validés à haute altitude.' }
    ],
    gallery: [
      { type: 'image', src: 'assets/artist-goudet.png', caption: 'Goudet — ARMD Group' }
    ],
    quote: { text: 'Mad Makers n\'est pas une agence de plus — c\'est une proposition de valeur différente.', author: 'Goudet Abalé · ARMD' },
    next: '06'
  },
  '06': {
    num: 'R.06',
    status: 'Placeholder',
    title: 'Brand System · Mad Makers',
    subtitle: 'Identité visuelle de l\'agence — phase 01.',
    client: 'Mad Makers · Interne',
    year: '2025',
    scope: ['Identité', 'Brand system', 'Typographie'],
    role: 'Direction artistique · Exécution',
    duration: '5 semaines',
    stack: ['Figma', 'Illustrator', 'Glyphs Mini', 'After Effects'],
    cover: { type: 'image', src: 'assets/asset-05.png' },
    intro: 'Construire l\'identité Mad Makers comme on construirait une identité artiste : statement fort, peu d\'éléments, beaucoup de variantes.',
    sections: [
      { title: 'Système', body: 'Une typographie display (Archivo Black), un accent unique (vert néon), une règle de grille mono-colonne. Le reste du système en découle mécaniquement.' },
      { title: 'Applications', body: 'Web, print, motion, réseaux sociaux. Chaque surface garde l\'ADN sans le dupliquer bêtement. Un kit vivant, versionné, documenté dans Figma.' }
    ],
    gallery: [
      { type: 'image', src: 'assets/asset-01.png', caption: 'Glyph · 01' },
      { type: 'image', src: 'assets/asset-02.png', caption: 'Glyph · 02' },
      { type: 'image', src: 'assets/asset-03.png', caption: 'Glyph · 03' },
      { type: 'image', src: 'assets/asset-05.png', caption: 'Poster system' }
    ],
    quote: null,
    next: '07'
  },
  '07': {
    num: 'R.07',
    status: 'Placeholder',
    title: 'Waiting For You',
    subtitle: 'Clip motion · atmosphère cinématographique.',
    client: 'Shayne · COSHCO',
    year: '2025',
    scope: ['Motion design', 'Clip', 'Color'],
    role: 'Concept · Animation · Color',
    duration: '4 semaines',
    stack: ['After Effects', 'Cinema 4D', 'DaVinci Resolve', 'Runway'],
    cover: { type: 'video', src: 'assets/waitinforyou.mp4' },
    intro: 'Une pièce motion entre clip et court-métrage. On joue le temps long — plans tenus, respiration, transitions organiques.',
    sections: [
      { title: 'Concept', body: 'La lenteur comme signature. À rebours de la saturation des feeds, on assume des plans qui durent.' },
      { title: 'Fabrication', body: 'Plaques rendues en 3D, compositing multi-passes, étalonnage final en Rec.709 avec LUT custom. Export multi-format pour broadcast et social.' }
    ],
    gallery: [
      { type: 'video', src: 'assets/waitinforyou.mp4', caption: 'Clip — version intégrale' }
    ],
    quote: null,
    next: '01'
  }
};
