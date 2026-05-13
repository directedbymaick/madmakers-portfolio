/* Mad Makers, Projects data
   Each key maps to ?id=XX in project.html.
   Placeholder content, replace per project once briefs are finalized. */
window.MM_PROJECTS = {
  '01': {
    num: 'R.01',
    title: 'Riot MMO, Cinematic Web Experience',
    subtitle: 'Site cinématique concept pour le futur MMO de Riot Games, explorant l\'univers de Runeterra avec un niveau Awwwards.',
    liveUrl: 'https://riot-mmo.mad-makers.fr',
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
        body: 'Un trailer interactif. Faire ressentir l\'univers AVANT de l\'expliquer, la lecture est secondaire au cinema. Mélange de codes du launcher MMO (HUD, REC, métriques live, scanner lines) et d\'editorial premium (typographie display massive, photographies pleine taille). Chaque pan de l\'univers a son propre langage visuel.'
      },
      {
        title: 'Stack technique',
        body: 'Vite 5 multi-page (3 entrypoints HTML), Three.js pour la carte 3D temps réel de Runeterra, GSAP + ScrollTrigger pour toutes les timelines scroll-driven, Lenis pour le smooth scroll, WebGL2 brut pour la simulation wave-equation du hero ripple. CSS moderne (mix-blend-mode, backdrop-filter, mask-image, clip-path). Aucun framework UI, JavaScript vanilla en ESM.'
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
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/hero.png', caption: '01 · Hero · Forge Your Legacy' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2002%20-%20regions.png', caption: '02 · 13 Régions de Runeterra' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2003%20-%20races.png', caption: '03 · 6 Races jouables' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2003%20bis%20-%20races.png', caption: '03 bis, Race detail' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2004%20-%20gameplay%20experience.png', caption: '04 · Gameplay experience' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2005%20-%20navigation%20map.png', caption: '05 · Carte 3D Runeterra' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2005%20bis%20-%20navigation%20map.png', caption: '05 bis, Map detail' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2006%20-%20cinematic.png', caption: '06 · Cinematic break' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2007%20-%20features.png', caption: '07 · Features' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2007%20bis%20-%20features.png', caption: '07 bis, Features detail' },
      { type: 'image', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/section%2008%20-%20contact.png', caption: '08 · CTA · The Journey Begins' },
      { type: 'video', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/yordle%20race%20lol.mp4', caption: 'Race · Yordle (clip page race)' },
      { type: 'video', src: 'assets/RIOT%20MMO%20CINEMATIC%20WEB%20EXPERIENCE/vastayan%20race%20lol.mp4', caption: 'Race · Vastaya (clip page race)' }
    ],
    quote: {
      text: 'Built with care by Mad Makers - no framework, just the platform.',
      author: 'Note d\'auteur · Mad Makers'
    },
    /* Performance HUD, mesures réelles + spécifications techniques.
       'why' = pourquoi c'est bien / neutre, affiché au flip de la carte. */
    stats: [
      { lbl: 'TTFB', val: '97', unit: 'ms', tone: 'good', note: 'Time to first byte (edge)',
        why: 'Sous 100 ms = excellent. L\'utilisateur perçoit le chargement comme instantané. Standard Lighthouse "fast" : moins de 200 ms.' },
      { lbl: 'Réponse totale', val: '128', unit: 'ms', tone: 'good', note: 'Document HTML chargé',
        why: 'Le HTML complet arrive en moins de 130 ms, bien dans le seuil "fast" de Lighthouse. Sans cache, sans CDN, sans framework côté serveur.' },
      { lbl: 'Bundle JS', val: '<250', unit: 'KB', tone: 'good', note: 'Hors Three.js (chunk lazy)',
        why: 'Le JS principal reste sous 250 KB. Three.js (la lourde lib WebGL) est chargée en chunk paresseux, uniquement quand la carte 3D devient visible. Time to Interactive minimisé.' },
      { lbl: 'Pages générées', val: '20', unit: '', tone: 'neutral', note: '1 home · 13 régions · 6 races',
        why: 'Pré-rendu de 20 pages statiques au build (1 accueil + 13 régions + 6 races). Aucun rendu serveur, indexable instantanément par Google, hébergement quasi gratuit.' },
      { lbl: 'Simulations', val: '5', unit: '', tone: 'neutral', note: 'WebGL · GSAP · SVG · drag',
        why: 'Cinq systèmes d\'animation distincts : WebGL2 wave-equation, GSAP springs multi-loops, SVG turbulence, drag-velocity squash, magnetic pull. Niveau Awwwards atteint sans framework.' },
      { lbl: 'Frameworks UI', val: '0', unit: '', tone: 'good', note: 'Vanilla JS ESM',
        why: 'Aucun framework UI (pas de React, Vue, Svelte). JavaScript vanilla en modules ES. Bundle plus léger, zéro dépendance externe, code lisible 5 ans après.' }
    ],
    next: '02'
  },
  '02': {
    num: 'R.02',
    title: 'La Papiche - Bistrot de Saint-Avit',
    subtitle: 'Refonte complète de l\'identité éditoriale et site web pour un bistrot de campagne en Charente. Une adresse qui assume son caractère, sans pastiche rustique.',
    liveUrl: 'https://lapapiche.mad-makers.fr',
    client: 'La Papiche · Saint-Avit (16210)',
    year: '2026',
    scope: ['Direction artistique', 'Site web', 'Identité éditoriale', 'Photo & vidéo'],
    role: 'Concept · Design · Front-end · Production',
    duration: '3 semaines',
    stack: ['HTML/CSS vanilla', 'GSAP + ScrollTrigger', 'IntersectionObserver', 'Cormorant Garamond', 'Caveat', 'Archivo Narrow'],
    cover: {
      type: 'video',
      src: 'assets/papiche-concept/region.mp4',
      poster: 'assets/papiche-concept/hero.png'
    },
    intro: 'Une vraie adresse de village en Charente, avec une identité plus nette : graphique, chaleureuse, un peu brute, jamais copiée-collée. La Papiche garde l\'esprit simple d\'une auberge mais assume une personnalité visuelle affirmée - moins de beige convenu, plus de contraste, de matière et de rythme.',
    sections: [
      {
        title: 'Concept',
        body: 'Refuser le folklore bistrot. La direction artistique mise sur quatre familles typographiques complémentaires (Cormorant Garamond, Caveat, Archivo Narrow, Newsreader), une palette terre/vin/porcelaine inspirée du lieu, et un grain photographique constant qui unifie assiettes et architecture. Chaque image traverse le même filtre - sépia mat, contraste maîtrisé, légère désaturation - pour créer une série cohérente où les plats et la salle racontent la même maison.'
      },
      {
        title: 'Architecture',
        body: 'Un parcours linéaire en six chapitres : hero immersif avec vidéo aérienne de la Charente et carrousel maison, présentation éditoriale du lieu, mur photographique des plats signatures, formules tarifaires lisibles, mise en valeur de la salle bleu profond et de la terrasse sous les arbres, avis clients avec score 4,6/5 animé. Pas de page intermédiaire, pas de menu déroulant - le scroll fait tout le travail.'
      },
      {
        title: 'Stack technique',
        body: 'HTML/CSS vanilla, GSAP + ScrollTrigger pour les animations scroll-driven (timeline du hero, mur photographique, parallaxe douce sur les images). IntersectionObserver en fallback léger. Reveal progressif respectant prefers-reduced-motion. Aucun framework UI, aucun build runtime côté client, 100% responsive avec breakpoints 980px et 640px.'
      },
      {
        title: 'Livrables',
        body: 'Site one-page complet, 14 photographies retraitées et harmonisées, vidéo aérienne de la Charente, copywriting éditorial complet, charte typographique et chromatique. Le tout livré prêt à mettre en ligne avec configuration SEO de base et installation des outils de mesure.'
      }
    ],
    gallery: [
      { type: 'image', src: 'assets/papiche-concept/hero.png',          caption: '01 - Hero · La Papiche · 4,6/5' },
      { type: 'image', src: 'assets/papiche-concept/section-01.png',    caption: '02 - La maison · Une cuisine honnête, sans artifice' },
      { type: 'image', src: 'assets/papiche-concept/section-02.png',    caption: '03 - À la carte · Les plats de la maison' },
      { type: 'image', src: 'assets/papiche-concept/section-03.png',    caption: '04 - Nos formules · Des prix honnêtes, comme le reste' },
      { type: 'image', src: 'assets/papiche-concept/section-04.png',    caption: '05 - L\'adresse · Entre les murs bleus et le jardin' },
      { type: 'image', src: 'assets/papiche-concept/section-05.png',    caption: '06 - Avis clients · Une adresse qu\'on recommande' },
      { type: 'image', src: 'assets/papiche-concept/section-footer.png',caption: '07 - Footer · Contact, horaires, adresse' }
    ],
    quote: {
      text: 'Une adresse qu\'on recommande sans hésiter. Très bon accueil, restaurant chaleureux, produits frais et bien présentés.',
      author: 'Laure D. · TripAdvisor'
    },
    stats: [
      { lbl: 'TTFB', val: '83', unit: 'ms', tone: 'good', note: 'Time to first byte (edge)',
        why: 'Sous 100 ms = excellent. La page se sent instantanée même en 4G dégradée. Standard Lighthouse "fast" : moins de 200 ms.' },
      { lbl: 'Réponse totale', val: '109', unit: 'ms', tone: 'good', note: 'Document HTML chargé',
        why: 'Document HTML complet sous 110 ms. Bien dans le seuil "fast" de Lighthouse. Hébergement standard sans optimisation premium.' },
      { lbl: 'Bundle JS', val: '<60', unit: 'KB', tone: 'good', note: 'GSAP + ScrollTrigger inclus',
        why: 'Très léger pour un site avec autant d\'animations scroll-driven. GSAP + ScrollTrigger compris dans le bundle. Pas de framework UI à charger en plus.' },
      { lbl: 'Chapitres', val: '6', unit: '', tone: 'neutral', note: 'Hero, maison, plats, formules, salle, avis',
        why: 'Architecture one-page en six chapitres linéaires. Pas de menu déroulant, le scroll fait tout le travail. Choix éditorial, pas une contrainte technique.' },
      { lbl: 'Polices', val: '4', unit: '', tone: 'neutral', note: 'Cormorant, Caveat, Archivo, Newsreader',
        why: 'Quatre familles typographiques complémentaires. Servies par Bunny Fonts (EU, RGPD-conforme), pas de pénalité de chargement notable grâce au preload.' },
      { lbl: 'Frameworks UI', val: '0', unit: '', tone: 'good', note: 'HTML / CSS vanilla',
        why: 'HTML/CSS vanilla. GSAP est une lib d\'animation, pas un framework UI. Performance préservée, indépendance technique pour le client maintenue.' }
    ],
    next: '03'
  },
  '03': {
    num: 'R.03',
    title: 'Dr. Sophie Marchand - Cabinet médical à Nantes',
    subtitle: 'Site multi-pages pour un médecin généraliste à Nantes. Une présence digitale claire, rassurante et conforme aux exigences éthiques de l\'Ordre des médecins.',
    liveUrl: 'https://sophiemarchand.mad-makers.fr',
    client: 'Dr. Sophie Marchand · Nantes (44000)',
    year: '2026',
    scope: ['Direction artistique', 'Site multi-pages', 'SEO local', 'Conformité Ordre des médecins'],
    role: 'Concept · Design · Front-end · Architecture éditoriale',
    duration: '2 semaines',
    stack: ['HTML/CSS vanilla', 'JavaScript ESM', 'DM Serif Display', 'DM Sans', 'Schema.org Physician + MedicalClinic'],
    cover: {
      type: 'image',
      src: 'assets/sophie-marchand/hero.png'
    },
    intro: 'Médecin généraliste secteur 1 à Nantes, accepte de nouveaux patients, téléconsultation jusqu\'à 20h. Le site devait répondre à un cahier des charges délicat : se faire trouver sur Google sans franchir la ligne déontologique. Pas de promesse, pas de mise en avant comparative, juste de l\'information utile au patient.',
    sections: [
      {
        title: 'Concept',
        body: 'Une typographie classique mais moderne (DM Serif Display + DM Sans), une palette neutre vert sapin / crème, des photographies de cabinet apaisantes. Toute la mise en scène fuit le ton commercial - pas de superlatif, pas de témoignage hyperbolique. Le ton reste celui d\'un cabinet médical : factuel, rassurant, lisible.'
      },
      {
        title: 'Architecture',
        body: '5 pages thématiques : accueil, le cabinet, consultations, infos pratiques, contact. Chacune répond à une question concrète qu\'un patient se pose avant de prendre rendez-vous : comment trouver le cabinet ? quels actes pratiqués ? quels horaires ? que prévoir pour la première consultation ? Le bouton Doctolib est présent partout, le numéro d\'urgence aussi (bandeau permanent).'
      },
      {
        title: 'SEO local & conformité',
        body: 'Schema.org typé Physician + MedicalClinic avec adresse, téléphone, géolocalisation, horaires structurés et aggregateRating. Mentions légales et politique de confidentialité conformes au RGPD et au code de déontologie médicale (article R.4127-13). Pas de tracking, pas de bouton de paiement, mention explicite du secteur 1 et de l\'absence de dépassement.'
      },
      {
        title: 'Stack technique',
        body: 'HTML/CSS vanilla, JavaScript ESM léger pour la navigation mobile et les interactions. DM Serif Display pour les titres (le sérieux institutionnel), DM Sans pour le corps (la lisibilité moderne). Bandeau d\'urgence permanent en haut de page. 100% responsive, accessibilité ARIA labellée, pas de framework UI.'
      }
    ],
    gallery: [
      { type: 'image', src: 'assets/sophie-marchand/hero.png',                caption: '01 - Accueil · Médecin généraliste à Nantes' },
      { type: 'image', src: 'assets/sophie-marchand/section-01.png',         caption: '02 - Services · Consultations adaptées' },
      { type: 'image', src: 'assets/sophie-marchand/section-02.png',         caption: '03 - Témoignages patients' },
      { type: 'image', src: 'assets/sophie-marchand/section-03.png',         caption: '04 - Infos pratiques' },
      { type: 'image', src: 'assets/sophie-marchand/section-04.png',         caption: '05 - CTA · Médecin traitant' },
      { type: 'image', src: 'assets/sophie-marchand/page01-section01.png',   caption: '06 - Le cabinet · Présentation' },
      { type: 'image', src: 'assets/sophie-marchand/page01-section02.png',   caption: '07 - Le cabinet · Détail' },
      { type: 'image', src: 'assets/sophie-marchand/numeros-utiles.png',     caption: '08 - Numéros utiles · Urgences et garde' },
      { type: 'image', src: 'assets/sophie-marchand/contact.png',            caption: '09 - Contact · Plan d\'accès et coordonnées' },
      { type: 'image', src: 'assets/sophie-marchand/footer.png',             caption: '10 - Footer · Navigation et mentions' }
    ],
    quote: {
      text: 'Médecin à l\'écoute, prend le temps d\'expliquer, cabinet propre et accueil chaleureux. Le site Doctolib est très clair, on trouve ce qu\'on cherche en deux clics.',
      author: 'Avis patient · Doctolib'
    },
    stats: [
      { lbl: 'TTFB', val: '77', unit: 'ms', tone: 'good', note: 'Time to first byte (edge)',
        why: 'Sous 80 ms, exceptionnel. Cache edge plus HTML statique pré-rendu. La consultation de la fiche praticien se sent instantanée, important pour un site médical où l\'attente irrite.' },
      { lbl: 'Réponse totale', val: '90', unit: 'ms', tone: 'good', note: 'Document HTML chargé',
        why: 'Document complet sous 100 ms, top 5 % des sites mesurés. Conforme aux Core Web Vitals exigés par Google pour le ranking en 2026.' },
      { lbl: 'Pages', val: '5', unit: '', tone: 'neutral', note: 'Accueil, cabinet, consultations, infos, contact',
        why: 'Architecture multi-pages adaptée à une recherche médicale segmentée. Chaque page répond à une question concrète qu\'un patient se pose avant de prendre rendez-vous.' },
      { lbl: 'Bundle JS', val: '<30', unit: 'KB', tone: 'good', note: 'Vanilla ESM, pas de framework',
        why: 'Minimal, pas de React, pas de jQuery, pas de tracker tiers. Indépendance technique totale pour le cabinet, le site reste fonctionnel même offline (Service Worker).' },
      { lbl: 'Schema.org', val: '3', unit: '', tone: 'good', note: 'Physician + MedicalClinic + BreadcrumbList',
        why: 'Trois schémas structurés permettent à Google de comprendre la nature exacte du site et de le positionner en recherche locale médicale (Knowledge Panel + Local Pack).' },
      { lbl: 'Conformité Ordre', val: '✓', unit: '', tone: 'good', note: 'Aucun superlatif, mention secteur 1',
        why: 'Validation conforme aux règles déontologiques de l\'Ordre des médecins : pas de superlatif, pas de comparatif, mention "secteur 1" obligatoire. Site indexable et éthiquement carré.' }
    ],
    next: '01'
  }
};
