/* Mad Makers — Projects data
   Each key maps to ?id=XX in project.html.
   Placeholder content — replace per project once briefs are finalized. */
window.MM_PROJECTS = {
  '01': {
    num: 'R.01',
    status: 'Placeholder',
    title: 'Showcase · Live',
    subtitle: 'Direction artistique scénique pour Shayne.',
    client: 'Shayne · COSHCO',
    year: '2025',
    scope: ['Direction artistique', 'Stage design', 'Motion'],
    role: 'Concept · Exécution · Livraison',
    duration: '3 mois',
    stack: ['Figma', 'After Effects', 'Cinema 4D', 'Resolve'],
    cover: { type: 'video', src: 'assets/WUSYANAME.mp4', poster: 'assets/artist-shayne-show.png' },
    intro: 'Un showcase live pensé comme un long-métrage : direction lumière, habillage vidéo, prise de parole scénographiée. La scène comme statement artistique.',
    sections: [
      { title: 'Contexte', body: 'Première date hors série pour Shayne post-Nouvelle École. L\'enjeu : traduire l\'univers studio dans un format live sans perdre la tension du disque.' },
      { title: 'Approche', body: 'Palette graphique monochrome traversée par un accent unique. Habillage vidéo généré procéduralement, calé au tempo. Transitions respiratoires, pas de saturation.' },
      { title: 'Livrables', body: 'Storyboard scénique, mapping vidéo, habillage broadcast, assets sociaux — pack complet, documenté, réutilisable en tournée.' }
    ],
    gallery: [
      { type: 'image', src: 'assets/artist-shayne-show.png', caption: 'Stage — grand angle' },
      { type: 'image', src: 'assets/artist-shayne-scream.png', caption: 'Raw — drop' },
      { type: 'video', src: 'assets/WUSYANAME.mp4', caption: 'Habillage vidéo — extrait' }
    ],
    quote: { text: 'La direction artistique a élevé l\'ensemble du show. On a vu la différence dès la première date.', author: 'Shayne' },
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
