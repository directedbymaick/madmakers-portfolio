/* Mad Makers — Translations FR ↔ EN
   Every translatable node in the page carries a [data-i18n="KEY"] attribute.
   This file defines the FR + EN strings per key, and wires the 3D switch. */
(function(){
  const DICT = {
    /* ——— NAV ——— */
    'nav.realisations':   { fr:'Réalisations',          en:'Work' },
    'nav.studio':         { fr:'Studio',                en:'Studio' },
    'nav.services':       { fr:'Services',              en:'Services' },
    'nav.process':        { fr:'Process',               en:'Process' },
    'nav.contact':        { fr:'Contact',               en:'Contact' },
    'nav.menu':           { fr:'Réserver · 30 min',     en:'Book · 30 min' },

    /* ——— HERO ——— */
    'hero.scroll':        { fr:'SCROLL · EXPERIENCE ↓', en:'SCROLL · EXPERIENCE ↓' },
    'hero.disc':          { fr:'AGENCE<br>DIGITALE<br>HYBRIDE<br>——<br>PARIS · FR',
                            en:'HYBRID<br>DIGITAL<br>STUDIO<br>——<br>PARIS · FR' },
    'hero.meta.lbl':      { fr:'[ 01 / INTRO ]',        en:'[ 01 / INTRO ]' },
    'hero.meta.body':     { fr:"Agence digitale hybride — à la croisée du monde artistique et entrepreneurial. Web, direction artistique, vidéo, SEO. Pour les entreprises qui refusent le générique.",
                            en:"A hybrid digital studio where art meets business. Web, art direction, video, SEO. Built for companies that refuse the generic." },

    /* ——— MANIFESTO ——— */
    'manifesto.sh.a':     { fr:'<span class="num">02</span> / MANIFESTE', en:'<span class="num">02</span> / MANIFESTO' },
    'manifesto.sh.b':     { fr:'[ NOS CONVICTIONS ]',   en:'[ WHAT WE BELIEVE ]' },
    'manifesto.h2':       { fr:'ON NE LIVRE<br>PAS DES SITES.<br>ON LIVRE DU<br><span class="g">CONCRET.</span>',
                            en:'WE DON\u2019T SHIP<br>WEBSITES.<br>WE SHIP<br><span class="g">RESULTS.</span>' },
    'manifesto.c1.h':     { fr:"Le générique, c'est <span class=\"g\">l'ennemi.</span>",
                            en:'Generic is the <span class="g">enemy.</span>' },
    'manifesto.c1.p':     { fr:"Pas de templates interchangeables. Pas de slogans creux. Un site Mad Makers doit être reconnaissable sans le logo.",
                            en:'No interchangeable templates. No hollow taglines. A Mad Makers site should be recognizable without the logo.' },
    'manifesto.c2.h':     { fr:'Chaque ligne de code est pensée pour <span class="g">convertir.</span>',
                            en:'Every line of code is written to <span class="g">convert.</span>' },
    'manifesto.c2.p':     { fr:"Un site qui ne génère pas de demandes, pas d'appels, pas de CA n'est pas un livrable réussi — c'est un joli objet.",
                            en:"A site that brings in no leads, no calls, no revenue isn\u2019t a successful deliverable \u2014 it\u2019s a pretty object." },
    'manifesto.c3.h':     { fr:'L\u2019IA accélère. <span class="g">L\u2019humain décide.</span>',
                            en:'AI accelerates. <span class="g">Humans decide.</span>' },
    'manifesto.c3.p':     { fr:"L'intelligence artificielle nous permet de livrer en jours ce qui prendrait des semaines. Mais la direction artistique, le ton, la stratégie — ça reste humain.",
                            en:'AI lets us ship in days what would take weeks. But art direction, tone, strategy \u2014 that stays human.' },
    'manifesto.c4.h':     { fr:'La scène nous a appris la <span class="g">discipline.</span>',
                            en:'The stage taught us <span class="g">discipline.</span>' },
    'manifesto.c4.p':     { fr:"Dix secondes pour accrocher, trois minutes pour convaincre. Rien de brouillon, rien de \"à peu près\", rien qui ne tient pas la route en public.",
                            en:'Ten seconds to hook, three minutes to close. Nothing sloppy, nothing half-done, nothing that wouldn\u2019t survive a live audience.' },
    'manifesto.c5.h':     { fr:'Local <span class="g">d\u2019abord.</span>',
                            en:'Local <span class="g">first.</span>' },
    'manifesto.c5.p':     { fr:"Notre cœur de cible : les PME de proximité. Artisans, commerces, professions libérales, entrepreneurs de terrain. Nous parlons leur langue.",
                            en:'Our core audience: neighborhood businesses. Craftspeople, shops, practitioners, ground-level entrepreneurs. We speak their language.' },
    'manifesto.sig':      { fr:'MAD MAKERS — SHAYNE · MAICK · GOUDET',
                            en:'MAD MAKERS — SHAYNE · MAICK · GOUDET' },

    /* ——— SERVICES ——— */
    'services.sh.a':      { fr:'<span class="num">03</span> / SERVICES', en:'<span class="num">03</span> / SERVICES' },
    'services.sh.b':      { fr:"[ L'OFFRE STRUCTURÉE ]", en:'[ THE STRUCTURED OFFER ]' },
    'services.s1.tit':    { fr:'Site one-page',         en:'One-page site' },
    'services.s1.desc':   { fr:"L'entrée de gamme pensée pour convertir. Vitrine éditoriale, performances, SEO technique de base.",
                            en:'The entry tier, built to convert. Editorial showcase, performance, technical SEO baseline.' },
    'services.s2.tit':    { fr:'Site multipage',        en:'Multipage site' },
    'services.s2.desc':   { fr:"Présence digitale complète pour PME ambitieuse. 5 à 8 pages, CMS léger, stratégie éditoriale.",
                            en:'Full digital presence for an ambitious SMB. 5 to 8 pages, light CMS, editorial strategy.' },
    'services.s3.tit':    { fr:'Site complexe / Framer', en:'Complex site / Framer' },
    'services.s3.desc':   { fr:"Expérience premium. Animations, CMS avancé, e-commerce léger. Le niveau Awwwards.",
                            en:'Premium experience. Animations, advanced CMS, light e-commerce. Awwwards tier.' },
    'services.s4.tit':    { fr:'Vidéo institutionnelle', en:'Brand film' },
    'services.s4.desc':   { fr:"1 à 3 minutes. Scripts, tournage, montage. Sensibilité issue du clip et de la scène.",
                            en:'1 to 3 minutes. Script, shoot, edit. A sensibility forged in music videos and live performance.' },
    'services.s5.tit':    { fr:'Audit SEO',             en:'SEO audit' },
    'services.s5.desc':   { fr:"Rapport technique et éditorial complet. Plan d'action priorisé, chiffré, actionnable.",
                            en:'Full technical and editorial report. Prioritized, costed, actionable roadmap.' },
    'services.s6.tit':    { fr:'Accompagnement SEO',    en:'SEO retainer' },
    'services.s6.desc':   { fr:"Suivi mensuel, 2 articles rédigés par mois, rapports clairs. Référencement local inclus.",
                            en:'Monthly follow-up, 2 articles written per month, clear reports. Local SEO included.' },
    'services.s6.pr':     { fr:'350 — 700 € / mois',    en:'€350 — 700 / month' },
    'services.s7.tit':    { fr:'Gestion réseaux sociaux', en:'Social media management' },
    'services.s7.desc':   { fr:"8 à 16 publications / mois. Stratégie éditoriale, création visuelle, animation communautaire.",
                            en:'8 to 16 posts per month. Editorial strategy, visual creation, community.' },
    'services.s7.pr':     { fr:'300 — 600 € / mois',    en:'€300 — 600 / month' },
    'services.s8.tit':    { fr:'Pack démarrage',        en:'Starter pack' },
    'services.s8.desc':   { fr:"Site + identité visuelle + SEO de base. Le bundle complet pour partir sur de bonnes bases.",
                            en:'Site + visual identity + baseline SEO. The complete bundle to start right.' },
    'services.cta':       { fr:'Brief →',               en:'Brief →' },

    /* ——— FOUNDERS ——— */
    'founders.sh.a':      { fr:'<span class="num">04</span> / LE TRIO', en:'<span class="num">04</span> / THE TRIO' },
    'founders.sh.b':      { fr:'[ TROIS PROFILS · TROIS MONDES ]', en:'[ THREE PROFILES · THREE WORLDS ]' },
    'founders.intro.h2':  { fr:'DEUX ARTISTES,<br>UN <span class="g">STRATÈGE.</span>',
                            en:'TWO ARTISTS,<br>ONE <span class="g">STRATEGIST.</span>' },
    'founders.intro.p1':  { fr:"Mad Makers ne naît pas d'un business plan. Mad Makers naît d'une amitié artistique — celle de deux artistes qui ont grandi ensemble dans la scène rap française, avant de transposer leur exigence scénique au digital.",
                            en:'Mad Makers wasn\u2019t born from a business plan. It was born from an artistic friendship \u2014 two artists who grew up together in the French rap scene before turning their stage-level discipline on the digital world.' },
    'founders.intro.p2':  { fr:"Autour du duo fondateur, un mentor stratégique : Goudet Abalé, bâtisseur international. Trois profils. Trois mondes. Une seule obsession : <b style=\"color:#fff\">faire ce que les autres ne font pas.</b>",
                            en:'Around the founding duo, a strategic mentor: Goudet Abalé, international operator. Three profiles. Three worlds. One obsession: <b style="color:#fff">doing what others won\u2019t.</b>' },

    'founders.f1.tag':    { fr:'F.01 / ACTIONNAIRE',    en:'F.01 / SHAREHOLDER' },
    'founders.f1.role':   { fr:'Représentant · Vision Artistique', en:'Face of the brand · Artistic Vision' },
    'founders.f1.sub':    { fr:'COSHCO RECORDS · NEUVIÈME TOIT · NOUVELLE ÉCOLE S.4',
                            en:'COSHCO RECORDS · NEUVIÈME TOIT · NOUVELLE ÉCOLE S.4' },
    'founders.f1.p1':     { fr:"Vainqueur de la saison 4 de <b style=\"color:#fff\">Nouvelle École</b> sur Netflix aux côtés du jury Shay, SCH et Niska. Signé chez COSHCO, figure montante du rap alternatif français. Univers : fusion trap saturée, cloud rap et rock alternatif.",
                            en:'Winner of Season 4 of <b style="color:#fff">Nouvelle École</b> on Netflix alongside jurors Shay, SCH and Niska. Signed to COSHCO, a rising figure in alternative French rap. Sound: saturated trap, cloud rap and alt rock.' },
    'founders.f1.p2':     { fr:"Son rôle : exigence artistique sans filtre. Chaque choix de direction artistique passe par son regard. <b style=\"color:#fff\">Pas de plan B, juste la quête.</b>",
                            en:'His role: unfiltered artistic standards. Every art-direction call goes through him. <b style="color:#fff">No plan B, just the pursuit.</b>' },
    'founders.f1.quote':  { fr:'Pas de plan B, juste la quête.', en:'No plan B, just the pursuit.' },
    'founders.f1.s1.v':   { fr:'S.<span class="g">04</span>', en:'S.<span class="g">04</span>' },
    'founders.f1.s1.t':   { fr:'Nouvelle École<br>Netflix · 2025', en:'Nouvelle École<br>Netflix · 2025' },
    'founders.f1.s2.v':   { fr:'2023', en:'2023' },
    'founders.f1.s2.t':   { fr:'Signature<br>COSHCO', en:'Signed to<br>COSHCO' },
    'founders.f1.s3.v':   { fr:'CONTROL', en:'CONTROL' },
    'founders.f1.s3.t':   { fr:'Premier projet<br>2024', en:'Debut project<br>2024' },

    'founders.f2.tag':    { fr:'F.02 / COFONDATEUR',    en:'F.02 / CO-FOUNDER' },
    'founders.f2.code':   { fr:'OPÉRATIONNEL · PARIS',  en:'OPERATIONS · PARIS' },
    'founders.f2.role':   { fr:'Cofondateur · Directeur Artistique',
                            en:'Co-founder · Art Director' },
    'founders.f2.sub':    { fr:'MASTER MARKETING DIGITAL · ORANGE B.S. · VINCI CONSTRUCTION',
                            en:'DIGITAL MARKETING MSc · ORANGE B.S. · VINCI CONSTRUCTION' },
    'founders.f2.p1':     { fr:"Artiste, marketeur, bâtisseur. <b style=\"color:#fff\">628 656 écoutes cumulées</b> sur SoundCloud (@maickdufutur). Master en marketing digital, expériences en grands groupes et PME — il sait parler à un dirigeant d'artisan comme à un directeur marketing.",
                            en:'Artist, marketer, builder. <b style="color:#fff">628,656 total plays</b> on SoundCloud (@maickdufutur). Digital marketing MSc, with experience at both corporates and SMBs \u2014 he can talk to a craftsman-owner and a CMO in the same breath.' },
    'founders.f2.p2':     { fr:"Il est le cerveau opérationnel : audit, propositions, pilotage production, livraison. Celui qui prend les briefs et qui livre.",
                            en:'He\u2019s the operating brain: audit, proposal, production lead, delivery. The one who takes the brief and ships.' },
    'founders.f2.quote':  { fr:'La créativité sans exécution, c\u2019est du vent.',
                            en:'Creativity without execution is just wind.' },
    'founders.f2.s1.v':   { fr:'<span class="g">628K</span>', en:'<span class="g">628K</span>' },
    'founders.f2.s1.t':   { fr:'Écoutes<br>SoundCloud',  en:'Plays<br>SoundCloud' },
    'founders.f2.s2.v':   { fr:'MSc', en:'MSc' },
    'founders.f2.s2.t':   { fr:'Marketing<br>Digital', en:'Digital<br>Marketing' },
    'founders.f2.s3.v':   { fr:'2×', en:'2×' },
    'founders.f2.s3.t':   { fr:'Grands Groupes<br>Orange · Vinci', en:'Corporates<br>Orange · Vinci' },

    'founders.f3.tag':    { fr:'F.03 / MENTOR',         en:'F.03 / MENTOR' },
    'founders.f3.code':   { fr:'ARMD GROUP · CEO',      en:'ARMD GROUP · CEO' },
    'founders.f3.role':   { fr:'Sparring Partner · Stratégie',
                            en:'Sparring Partner · Strategy' },
    'founders.f3.sub':    { fr:'SCIENCES PO LILLE · JOHNS HOPKINS SAIS · ARMD GROUP',
                            en:'SCIENCES PO LILLE · JOHNS HOPKINS SAIS · ARMD GROUP' },
    'founders.f3.p1':     { fr:"Fondateur & CEO d'<b style=\"color:#fff\">ARMD Group</b>. Diplômé de Sciences Po Lille, master à Johns Hopkins (SAIS). Vice-président Model UN — primé aux MUN de Harvard 2016 & 2017.",
                            en:'Founder & CEO of <b style="color:#fff">ARMD Group</b>. Sciences Po Lille graduate, master\u2019s from Johns Hopkins (SAIS). Model UN Vice-President \u2014 awarded at Harvard MUN 2016 & 2017.' },
    'founders.f3.p2':     { fr:"Expériences en affaires publiques (Assemblée nationale, Ministère de la Justice CI), communication stratégique, actifs numériques. Le regard d'un bâtisseur qui voit plus loin.",
                            en:'Public affairs (French National Assembly, Ivorian Ministry of Justice), strategic communications, digital assets. The eye of a builder who sees further.' },
    'founders.f3.quote':  { fr:"Mad Makers n'est pas une agence de plus — c'est une proposition de valeur différente.",
                            en:'Mad Makers isn\u2019t another agency \u2014 it\u2019s a different value proposition.' },
    'founders.f3.s1.v':   { fr:'CEO', en:'CEO' },
    'founders.f3.s1.t':   { fr:'ARMD<br>Group', en:'ARMD<br>Group' },
    'founders.f3.s2.v':   { fr:'SAIS', en:'SAIS' },
    'founders.f3.s2.t':   { fr:'Johns<br>Hopkins', en:'Johns<br>Hopkins' },
    'founders.f3.s3.v':   { fr:'<span class="g">2×</span>', en:'<span class="g">2×</span>' },
    'founders.f3.s3.t':   { fr:'Prix MUN<br>Harvard', en:'Harvard MUN<br>Awards' },

    /* ——— PROCESS ——— */
    'process.sh.a':       { fr:'<span class="num">05</span> / PROCESS', en:'<span class="num">05</span> / PROCESS' },
    'process.sh.b':       { fr:'[ 12 ÉTAPES · 2 GATES ]', en:'[ 12 STEPS · 2 GATES ]' },
    'process.h2':         { fr:"RIEN N'EST<br>SAUTÉ. RIEN<br>N'EST LAISSÉ AU<br><span class=\"g\">HASARD.</span>",
                            en:'NOTHING IS<br>SKIPPED. NOTHING<br>IS LEFT TO<br><span class="g">CHANCE.</span>' },
    'process.p':          { fr:"Un projet Mad Makers suit 12 étapes documentées, de la prise de brief à la clôture. Chaque étape a ses preuves de complétion. Deux moments bloquants garantissent qu'on livre ce qui a été validé.",
                            en:'A Mad Makers project runs through 12 documented steps, from brief to close. Each step has its proof of completion. Two blocking gates guarantee we ship what was signed off.' },
    'process.ph1.tag':    { fr:'Phase 01 — Commerciale', en:'Phase 01 — Commercial' },
    'process.ph1.h':      { fr:'Prendre<br>le brief.', en:'Take<br>the brief.' },
    'process.ph1.1':      { fr:'Brief initial',       en:'Initial brief' },
    'process.ph1.2':      { fr:'Analyse marché',      en:'Market analysis' },
    'process.ph1.3':      { fr:'Dossier projet',      en:'Project dossier' },
    'process.ph1.4':      { fr:'Proposition',         en:'Proposal' },
    'process.ph1.5':      { fr:'Signature · 40%',     en:'Signature · 40%' },
    'process.ph2.tag':    { fr:'Phase 02 — Production', en:'Phase 02 — Production' },
    'process.ph2.h':      { fr:"Construire<br>l'outil.", en:'Build<br>the tool.' },
    'process.ph2.1':      { fr:'Collecte matière',    en:'Material gathering' },
    'process.ph2.2':      { fr:'Design / maquettes',  en:'Design / mockups' },
    'process.ph2.3':      { fr:'Direction artistique', en:'Art direction' },
    'process.ph2.4':      { fr:'Développement',       en:'Development' },
    'process.ph2.5':      { fr:'SEO · Tests',         en:'SEO · Testing' },
    'process.ph3.tag':    { fr:'Phase 03 — Livraison', en:'Phase 03 — Delivery' },
    'process.ph3.h':      { fr:'Livrer<br>le concret.', en:'Ship the<br>real thing.' },
    'process.ph3.1':      { fr:'Corrections (2 A/R)', en:'Revisions (2 rounds)' },
    'process.ph3.2':      { fr:'Mise en ligne · Clôture', en:'Launch · Close-out' },
    'process.ph4.tag':    { fr:'Modalités',           en:'Terms' },
    'process.ph4.h':      { fr:'Les règles<br>du jeu.', en:'The rules<br>of the game.' },
    'process.ph4.1':      { fr:'40% à la signature',  en:'40% at signature' },
    'process.ph4.2':      { fr:'60% à la livraison',  en:'60% at delivery' },
    'process.ph4.3':      { fr:'2 A/R révisions inclus', en:'2 revision rounds included' },
    'process.ph4.4':      { fr:'GA4 + Search Console livrés', en:'GA4 + Search Console handed over' },
    'process.gate1.a':    { fr:'GATE 01 · <b>Validation écrite des maquettes avant tout développement</b>',
                            en:'GATE 01 · <b>Written mockup sign-off before any development</b>' },
    'process.gate1.b':    { fr:'→ BLOQUANT',          en:'→ BLOCKING' },
    'process.gate2.a':    { fr:'GATE 02 · <b>Validation finale + paiement du solde avant mise en ligne</b>',
                            en:'GATE 02 · <b>Final sign-off + balance paid before launch</b>' },
    'process.gate2.b':    { fr:'→ BLOQUANT',          en:'→ BLOCKING' },

    /* ——— TALENTS ——— */
    'talents.sh.a':       { fr:'<span class="num">06</span> / TALENTS', en:'<span class="num">06</span> / CRAFT' },
    'talents.sh.b':       { fr:"[ CE QU'ON SAIT FAIRE ]", en:'[ WHAT WE DO ]' },
    'talents.t1.tit':     { fr:'Direction<br>Artistique<small>Identité · univers · impact</small>',
                            en:'Art<br>Direction<small>Identity · world · impact</small>' },
    'talents.t2.tit':     { fr:'Création<br>Web<small>Framer · Vercel · Figma</small>',
                            en:'Web<br>Design<small>Framer · Vercel · Figma</small>' },
    'talents.t3.tit':     { fr:'Vidéo<br>Institutionnelle<small>Davinci · Runway · Clip</small>',
                            en:'Brand<br>Film<small>Davinci · Runway · Clip</small>' },
    'talents.t4.tit':     { fr:'SEO<br>Marketing<small>Audit · local · contenus</small>',
                            en:'SEO<br>Marketing<small>Audit · local · content</small>' },
    'talents.t5.tit':     { fr:'Réseaux<br>Sociaux<small>Strat · visuel · anim</small>',
                            en:'Social<br>Media<small>Strategy · visuals · comms</small>' },
    'talents.t6.tit':     { fr:'Copywriting<br>Storytelling<small>AIDA · scripts · SEO</small>',
                            en:'Copy<br>Storytelling<small>AIDA · scripts · SEO</small>' },

    /* ——— TOOLKIT ——— */
    'toolkit.sh.a':       { fr:'<span class="num">07</span> / TOOLKIT', en:'<span class="num">07</span> / TOOLKIT' },
    'toolkit.sh.b':       { fr:'[ STACK · INTERFACE · CRAFT ]', en:'[ STACK · INTERFACE · CRAFT ]' },
    'toolkit.e1.lbl':     { fr:'ICÔNES · SYSTÈME',     en:'ICONS · SYSTEM' },
    'toolkit.e2.lbl':     { fr:'ÉLÉMENTS GRAPHIQUES',  en:'GRAPHIC ELEMENTS' },

    /* ——— REALISATIONS ——— */
    'real.head.num':      { fr:'<span class="num">08</span> / RÉALISATIONS · TERRAIN',
                            en:'<span class="num">08</span> / WORK · ON THE GROUND' },
    'real.head.h':        { fr:'LA SCÈNE<br>N\u2019EST PAS UN DÉCOR<span style="color:var(--green)">.</span>',
                            en:'THE STAGE<br>IS NOT A BACKDROP<span style="color:var(--green)">.</span>' },
    'real.head.drag':     { fr:'DRAG → SCROLL →',      en:'DRAG → SCROLL →' },
    'real.r1.h':          { fr:'Showcase · Live',      en:'Showcase · Live' },
    'real.r1.meta':       { fr:'<span>SHAYNE · STAGE DESIGN</span><b>2025</b>',
                            en:'<span>SHAYNE · STAGE DESIGN</span><b>2025</b>' },
    'real.r2.h':          { fr:'Raw Energy',           en:'Raw Energy' },
    'real.r2.meta':       { fr:'<span>DIRECTION ARTISTIQUE</span><b>CLIP</b>',
                            en:'<span>ART DIRECTION</span><b>MUSIC VIDEO</b>' },
    'real.r3.h':          { fr:'Stage Portrait',       en:'Stage Portrait' },
    'real.r3.meta':       { fr:'<span>PHOTO · LIVE</span><b>2025</b>',
                            en:'<span>PHOTO · LIVE</span><b>2025</b>' },
    'real.r4.h':          { fr:'Studio · Off-Stage',   en:'Studio · Off-Stage' },
    'real.r4.meta':       { fr:'<span>MAICK · EDITORIAL</span><b>FR</b>',
                            en:'<span>MAICK · EDITORIAL</span><b>FR</b>' },
    'real.r5.h':          { fr:'Stratégie · Altitude', en:'Strategy · Altitude' },
    'real.r5.meta':       { fr:'<span>GOUDET · ARMD</span><b>INT.</b>',
                            en:'<span>GOUDET · ARMD</span><b>INT.</b>' },
    'real.r6.h':          { fr:'Brand System',         en:'Brand System' },
    'real.r6.meta':       { fr:'<span>IDENTITÉ · PHASE 01</span><b>MAD</b>',
                            en:'<span>IDENTITY · PHASE 01</span><b>MAD</b>' },
    'real.r7.h':          { fr:'Waiting For You',      en:'Waiting For You' },
    'real.r7.meta':       { fr:'<span>CLIP · MOTION</span><b>2025</b>',
                            en:'<span>MUSIC VIDEO · MOTION</span><b>2025</b>' },
    'player.vidoff.a':    { fr:'VIDÉO · LIVE LOOP',    en:'VIDEO · LIVE LOOP' },
    'player.vidoff.b':    { fr:'AUDIO LIVE ↓',         en:'AUDIO LIVE ↓' },

    /* ——— REFUSE ——— */
    'refuse.sh.a':        { fr:'<span class="num">09</span> / CE QU\u2019ON REFUSE',
                            en:'<span class="num">09</span> / WHAT WE REFUSE' },
    'refuse.sh.b':        { fr:'[ NO-LIST ]',          en:'[ NO-LIST ]' },
    'refuse.h2':          { fr:'POUR BIEN<br>SAVOIR QUI<br>ON EST —<br>VOYEZ CE<br>QU\u2019ON<br><span class="g">NE FERA PAS.</span>',
                            en:'TO REALLY<br>KNOW WHO<br>WE ARE —<br>SEE WHAT<br>WE<br><span class="g">WON\u2019T DO.</span>' },
    'refuse.hint':        { fr:'<span class="dot"></span>Cliquez sur une croix → révélez ce qu\u2019on fait à la place',
                            en:'<span class="dot"></span>Click a cross → see what we do instead' },
    'refuse.l1.no':       { fr:'Copier un template WordPress qu\u2019on vend trois fois plus cher.',
                            en:'Copy a WordPress template and resell it three times as expensive.' },
    'refuse.l1.yes':      { fr:'Coder sur-mesure, design unique, pensé pour votre métier.',
                            en:'Custom code, unique design, tailored to your business.' },
    'refuse.l2.no':       { fr:'Écrire « Bienvenue sur notre site, nous sommes passionnés par notre métier ».',
                            en:'Write "Welcome to our site, we are passionate about what we do".' },
    'refuse.l2.yes':      { fr:'Écrire des accroches qui parlent à vos clients, pas à votre ego.',
                            en:'Write hooks that speak to your customers, not your ego.' },
    'refuse.l3.no':       { fr:'Utiliser des photos de stock qui apparaissent sur 4 000 autres sites.',
                            en:'Use stock photos that already appear on 4,000 other websites.' },
    'refuse.l3.yes':      { fr:'Shooter, illustrer, modéliser — des visuels qui n\u2019existent qu\u2019ici.',
                            en:'Shoot, illustrate, model \u2014 visuals that only exist here.' },
    'refuse.l4.no':       { fr:'Livrer un site sans GA4, sans Search Console, sans schema.org.',
                            en:'Ship a site without GA4, without Search Console, without schema.org.' },
    'refuse.l4.yes':      { fr:'Livrer tout mesuré, tout indexé, tout documenté. Clefs en main.',
                            en:'Ship it all measured, indexed, documented. Keys in hand.' },
    'refuse.l5.no':       { fr:'Facturer un « site vitrine » sans stratégie de conversion.',
                            en:'Bill for a "showcase site" with no conversion strategy.' },
    'refuse.l5.yes':      { fr:'Chaque page a un objectif — leads, RDV, ventes. Jamais décoratif.',
                            en:'Every page has a goal \u2014 leads, meetings, sales. Never decorative.' },
    'refuse.l6.no':       { fr:'Travailler avec un client qu\u2019on ne comprend pas.',
                            en:'Work with a client we don\u2019t understand.' },
    'refuse.l6.yes':      { fr:'Plonger dans votre métier avant d\u2019ouvrir Figma. Immersion d\u2019abord.',
                            en:'Dive into your business before opening Figma. Immersion first.' },
    'refuse.l7.no':       { fr:'Dire oui à tout — on sait dire non quand un projet ne nous ressemble pas.',
                            en:'Say yes to everything \u2014 we know how to say no when a project isn\u2019t right.' },
    'refuse.l7.yes':      { fr:'Dire oui quand on peut dire oui à 100%. Sinon on vous oriente.',
                            en:'Say yes only when we can say yes at 100%. Otherwise we refer you on.' },

    /* ——— CONTACT ——— */
    'contact.sh.a':       { fr:'<span class="num">10</span> / CONTACT', en:'<span class="num">10</span> / CONTACT' },
    'contact.sh.b':       { fr:'[ ON SE PARLE ]',      en:'[ LET\u2019S TALK ]' },
    'contact.col1.lbl':   { fr:'Projets · Brief',      en:'Projects · Brief' },
    'contact.col1.a':     { fr:'Interlocuteur · Maick (fondateur opérationnel)',
                            en:'Point of contact · Maick (operating co-founder)' },
    'contact.col2.lbl':   { fr:'Studio',               en:'Studio' },
    'contact.col2.a1':    { fr:'Paris · France',       en:'Paris · France' },
    'contact.col2.a2':    { fr:'Zone : PME de proximité', en:'Scope: Local SMBs' },
    'contact.col2.a3':    { fr:'FR · EN',              en:'FR · EN' },
    'contact.col3.lbl':   { fr:'Social',               en:'Social' },
    'contact.col3.a1':    { fr:'Shayne · Wikipédia ↗', en:'Shayne · Wikipedia ↗' },
    'contact.col3.a2':    { fr:'Maick · SoundCloud ↗', en:'Maick · SoundCloud ↗' },
    'contact.col3.a3':    { fr:'Goudet · LinkedIn ↗',  en:'Goudet · LinkedIn ↗' },
    'contact.col3.a4':    { fr:'Instagram ↗',          en:'Instagram ↗' },
    'contact.col4.lbl':   { fr:'Modalités',            en:'Terms' },
    'contact.col4.a1':    { fr:'40% signature · 60% livraison', en:'40% signature · 60% delivery' },
    'contact.col4.a2':    { fr:'2 A/R de révisions inclus', en:'2 revision rounds included' },
    'contact.col4.a3':    { fr:'GA4 + Search Console livrés', en:'GA4 + Search Console handed over' },
    'contact.col4.a4':    { fr:'Brief gratuit · 30 min ↗', en:'Free brief · 30 min ↗' },
    'contact.book.kk':    { fr:'[ 30 min · Gratuit · Sans engagement ]',
                            en:'[ 30 min · Free · No commitment ]' },
    'contact.book.ll':    { fr:'Réserver un brief —<br>choisir un créneau.',
                            en:'Book a brief —<br>pick a slot.' },
    'contact.book.sub':   { fr:'On cale 30 minutes sur Google Meet. Vous présentez le projet, on pose les bonnes questions, on repart avec un plan clair.',
                            en:'We set up 30 minutes on Google Meet. You walk us through the project, we ask the right questions, everyone leaves with a clear plan.' },
    'contact.book.btn':   { fr:'Voir les créneaux',    en:'See available slots' },
    'contact.foot.slogan':{ fr:'DREAM IT · WE MAKE IT', en:'DREAM IT · WE MAKE IT' }
  };

  function applyLang(lang){
    document.documentElement.lang = lang;
    document.body.classList.toggle('lang-en', lang === 'en');
    document.body.classList.toggle('lang-fr', lang === 'fr');
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      const entry = DICT[k];
      if(!entry) return;
      const val = entry[lang];
      if(val !== undefined && el.innerHTML !== val){
        el.innerHTML = val;
      }
    });
    // swap the switch visual state
    const sw = document.getElementById('langSwitch');
    if(sw){ sw.classList.toggle('en', lang==='en'); sw.setAttribute('aria-checked', lang==='en' ? 'true':'false'); }
  }

  function init(){
    const saved = localStorage.getItem('mm_lang') || 'fr';
    applyLang(saved);

    const sw = document.getElementById('langSwitch');
    if(!sw) return;
    const toggle = () => {
      const next = document.documentElement.lang === 'en' ? 'fr' : 'en';
      localStorage.setItem('mm_lang', next);
      applyLang(next);
    };
    sw.addEventListener('click', toggle);
    sw.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggle(); }
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
