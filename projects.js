/* Mad Makers — Projects data
   Each key maps to ?id=XX in project.html.
   Placeholder content — replace per project once briefs are finalized. */
window.MM_PROJECTS = {
  '01': {
    num: 'R.01',
    title: 'Riot MMO — Cinematic Web Experience',
    subtitle: 'Site cinématique concept pour le futur MMO de Riot Games — explorant l\'univers de Runeterra avec un niveau Awwwards.',
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
      text: 'Built with care by Mad Makers - no framework, just the platform.',
      author: 'Note d\'auteur · Mad Makers'
    },
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
    next: '01'
  }
};
