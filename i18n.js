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
    'nav.menu':           { fr:'Parler de votre projet · 30 min', en:'Talk about your project · 30 min' },

    /* ——— HERO ——— */
    'hero.h1.sr':         { fr:'Mad Makers — agence web créative à Paris : création de sites web, SEO, direction artistique et production vidéo.',
                            en:'Mad Makers — creative web agency in Paris: web design, SEO, art direction and video production.' },
    'hero.scroll':        { fr:'SCROLL · EXPERIENCE ↓', en:'SCROLL · EXPERIENCE ↓' },
    'hero.disc':          { fr:'AGENCE<br>WEB<br>CRÉATIVE<br>——<br>PARIS · FR',
                            en:'CREATIVE<br>WEB<br>AGENCY<br>——<br>PARIS · FR' },
    'hero.meta.lbl':      { fr:'[ 01 / INTRO ]',        en:'[ 01 / INTRO ]' },
    'hero.meta.body':     { fr:"Votre prochain client vous cherche sur Google. On s'assure qu'il vous trouve — et qu'il reste. Agence web créative à Paris. Sites sur-mesure, SEO, direction artistique, vidéo. Livraison en 10 jours. Pour les entreprises qui refusent de ressembler à leurs concurrents.",
                            en:"Your next client is searching for you on Google. We make sure they find you — and stay. Creative web agency in Paris. Custom websites, SEO, art direction, video. 10-day delivery. For companies that refuse to look like their competitors." },

    /* ——— MANIFESTO ——— */
    'manifesto.sh.a':     { fr:'<span class="num">02</span> / MANIFESTE', en:'<span class="num">02</span> / MANIFESTO' },
    'manifesto.sh.b':     { fr:'[ NOS CONVICTIONS ]',   en:'[ WHAT WE BELIEVE ]' },
    'manifesto.h2':       { fr:'ON NE LIVRE PAS<br>DES SITES.<br>ON LIVRE DES OUTILS<br>DE <span class="g">VENTE.</span>',
                            en:'WE DON’T DELIVER<br>WEBSITES.<br>WE DELIVER SALES<br><span class="g">TOOLS.</span>' },
    'manifesto.c1.h':     { fr:'Un site doit vous <span class="g">rapporter.</span>', en:'A website must <span class="g">pay back.</span>' },
    'manifesto.c1.p':     { fr:"La plupart des sites coûtent de l'argent sans jamais en rapporter. C'est parce qu'ils sont pensés pour plaire et non pour vendre. Nous ? Nous partons de votre objectif commercial, et le design en découle. Vous obtenez un site qui génère des demandes, des appels et des ventes.",
                            en:"Most websites cost money without ever earning any back. That's because they are designed to please rather than to sell. Us? We start from your commercial goal, and the design follows. You get a site that generates leads, calls and sales." },
    'manifesto.c2.h':     { fr:'Une méthode <span class="g">claire.</span>', en:'A clear <span class="g">method.</span>' },
    'manifesto.c2.p':     { fr:'Trop d’agences vous laissent dans le flou pendant des semaines. Nous procédons autrement : chaque étape est cadrée, chaque livrable est daté. Du brief à la mise en ligne, vous savez toujours où en est votre projet.',
                            en:'Too many agencies leave you in the dark for weeks. We work differently: every step is framed, every deliverable is dated. From brief to launch, you always know where your project stands.' },
    'manifesto.c3.h':     { fr:'Livré en <span class="g">10 jours.</span>', en:'Shipped in <span class="g">10 days.</span>' },
    'manifesto.c3.p':     { fr:"Une agence classique met deux à trois mois pour livrer un site. Nos outils nous permettent d'aller cinq fois plus vite. Vous gagnez du temps, vous économisez du budget — sans rien perdre en qualité ni en finition.",
                            en:"A traditional agency takes two to three months to deliver a website. Our tools let us go five times faster. You save time, you save budget — without losing anything in quality or finish." },
    'manifesto.c4.h':     { fr:'Adapté à votre <span class="g">marché.</span>', en:'Tailored to your <span class="g">market.</span>' },
    'manifesto.c4.p':     { fr:"Un site qui parle à un client de restaurant ne parle pas aux cibles d'un cabinet de conseil. Avant la première maquette, nous étudions donc votre secteur, vos clients et vos concurrents. Avec cette préparation : votre site parle vraiment à vos prospects, dans leurs mots, sur leurs leviers de décision.",
                            en:"A site that speaks to a restaurant’s customers doesn’t speak to a consulting firm’s targets. Before the first mockup, we study your industry, your clients, and your competitors. With that preparation: your site truly speaks to your prospects, in their words, on their decision triggers." },
    'manifesto.c5.h':     { fr:'Paris, France, <span class="g">Europe.</span>', en:'Paris, France, <span class="g">Europe.</span>' },
    'manifesto.c5.p':     { fr:'Nous accompagnons des PME, des ETI et des directions marketing de grands groupes — à Paris, en province et ailleurs en Europe. Les projets sont livrés en français ou en anglais, selon votre marché. Confidentialité garantie par contrat.',
                            en:'We support SMBs, mid-market companies and marketing departments of large groups — in Paris, across France and Europe. Projects are delivered in French or English, depending on your market. Confidentiality guaranteed by contract.' },
    'manifesto.sig':      { fr:'MAD MAKERS — MAÏCK · GOUDET', en:'MAD MAKERS — MAÏCK · GOUDET' },

    /* ——— SERVICES ——— */
    'services.sh.a':      { fr:'<span class="num">03</span> / SERVICES', en:'<span class="num">03</span> / SERVICES' },
    'services.sh.b':      { fr:"[ L'OFFRE STRUCTURÉE ]", en:'[ THE STRUCTURED OFFER ]' },
    'services.s1.tit':    { fr:'Site one-page',         en:'One-page site' },
    'services.s1.desc':   { fr:"Pour lancer un produit, un service ou une activité en quelques jours. Une seule page, pensée pour une seule action : convertir vos visiteurs en contacts qualifiés.",
                            en:"To launch a product, a service or an activity in a few days. A single page, built for a single action: turn visitors into qualified leads." },
    'services.s2.tit':    { fr:'Site vitrine', en:'Showcase site' },
    'services.s2.desc':   { fr:"Pour les entreprises qui veulent une présence digitale complète et professionnelle. 5 à 8 pages, structure éditoriale claire, optimisation SEO incluse dès la mise en ligne.",
                            en:"For businesses that want a complete, professional digital presence. 5 to 8 pages, clear editorial structure, SEO optimization included from launch." },
    'services.s3.tit':    { fr:'Site sur-mesure', en:'Custom site' },
    'services.s3.desc':   { fr:"Pour les marques haut de gamme qui doivent le démontrer dès la première seconde : animations avancées, design entièrement sur-mesure, e-commerce intégré si besoin.",
                            en:"For premium brands that must prove it from the first second: advanced animations, fully custom design, integrated e-commerce if needed." },
    'services.s4.tit':    { fr:'Vidéo institutionnelle', en:'Brand film' },
    'services.s4.desc':   { fr:"Pour raconter votre entreprise avec impact, en 1 à 3 minutes. Script, tournage, montage — livrés en formats adaptés à votre site et à vos réseaux sociaux.",
                            en:"To tell your company's story with impact, in 1 to 3 minutes. Script, shoot, edit — delivered in formats fit for your site and your social media." },
    'services.s5.tit':    { fr:'Audit SEO',             en:'SEO audit' },
    'services.s5.desc':   { fr:"Votre site est en ligne mais ne génère pas de trafic qualifié. Nous identifions les blocages techniques et éditoriaux, puis vous remettons un plan d'action concret, priorisé et chiffré.",
                            en:"Your site is live but generates no qualified traffic. We identify the technical and editorial blockers, then deliver a concrete, prioritized, costed action plan." },
    'services.s6.tit':    { fr:'Accompagnement SEO',    en:'SEO retainer' },
    'services.s6.desc':   { fr:"Pour être trouvé sur Google sans avoir à vous en occuper. 4 à 8 articles optimisés par mois, suivi des positions, et gestion complète de votre fiche Google My Business.",
                            en:"To get found on Google without having to deal with it yourself. 4 to 8 optimized articles per month, ranking tracking, and full management of your Google Business Profile." },
    'services.pr':        { fr:'Sur devis',             en:'On request' },
    'services.s7.tit':    { fr:'Gestion réseaux sociaux', en:'Social media management' },
    'services.s7.desc':   { fr:"Pour transformer vos comptes en véritable canal d'acquisition. 8 à 16 publications par mois — stratégie éditoriale, création visuelle et animation comprises.",
                            en:"To turn your accounts into a real acquisition channel. 8 to 16 posts per month — editorial strategy, visual creation and community management included." },
    'services.s8.tit':    { fr:'Pack démarrage',        en:'Starter pack' },
    'services.s8.desc':   { fr:"Pour lancer votre activité avec une présence digitale complète et cohérente. Site web, identité visuelle et fondations SEO — l'ensemble livré sous 2 semaines, prêt à convertir vos cibles.",
                            en:"To launch your activity with a complete, coherent digital presence. Website, visual identity and SEO foundations — all delivered in 2 weeks, ready to convert your targets." },
    'services.cta':       { fr:'Brief →',               en:'Brief →' },

    /* ——— FOUNDERS ——— */
    'founders.sh.a':      { fr:'<span class="num">04</span> / LE DUO', en:'<span class="num">04</span> / THE DUO' },
    'founders.sh.b':      { fr:'[ DEUX PROFILS · DEUX MONDES ]', en:'[ TWO PROFILES · TWO WORLDS ]' },
    'founders.intro.h2':  { fr:'UN <span class="g">CRÉATIF.</span><br>UN <span class="g">STRATÈGE.</span>',
                            en:'A <span class="g">CREATIVE.</span><br>A <span class="g">STRATEGIST.</span>' },
    'founders.intro.p1':  { fr:'Mad Makers est née de la rencontre de deux profils complémentaires. D’un côté, un créatif hybride formé aux codes du web, du marketing et de l’image — habitué à concevoir des contenus qui tiennent la route face à des audiences exigeantes.',
                            en:'Mad Makers was born from the meeting of two complementary profiles. On one side, a hybrid creative trained in the codes of web, marketing and image — used to designing content that holds up against demanding audiences.' },
    'founders.intro.p2':  { fr:'De l’autre, un stratège passé par le conseil international auprès de grands groupes et institutions françaises ou internationales. Avec cette combinaison, vous bénéficiez d’une exigence de finition créative, doublée d’une rigueur de méthode issue du conseil. <b style="color:#fff">Ni atelier déconnecté du business, ni cabinet sans âme.</b>',
                            en:'On the other, a strategist with a background in international consulting for large groups and French or international institutions. With this combination, you get creative finish standards paired with the method discipline of consulting. <b style="color:#fff">Neither disconnected studio, nor soulless firm.</b>' },

    'founders.f2.tag':    { fr:'F.02 / COFONDATEUR', en:'F.02 / CO-FOUNDER' },
    'founders.f2.code':   { fr:'DIRECTEUR ARTISTIQUE · PARIS', en:'ART DIRECTOR · PARIS' },
    'founders.f2.role':   { fr:'Cofondateur · Directeur Artistique', en:'Co-founder · Art Director' },
    'founders.f2.sub':    { fr:'MARKETING DIGITAL · ORANGE · VINCI CONSTRUCTION', en:'DIGITAL MARKETING · ORANGE · VINCI CONSTRUCTION' },
    'founders.f2.p1':     { fr:'Profil hybride formé au marketing digital chez <b style="color:#fff">Orange</b> et <b style="color:#fff">Vinci Construction</b>, où il a piloté des projets pour des audiences exigeantes. Il sait parler à un dirigeant de PME comme à un directeur marketing de grand groupe — sans changer d’exigence de qualité.',
                            en:'Hybrid profile trained in digital marketing at <b style="color:#fff">Orange</b> and <b style="color:#fff">Vinci Construction</b>, where he led projects for demanding audiences. He can speak to an SMB owner as well as a Fortune 500 marketing director — without lowering quality standards.' },
    'founders.f2.p2':     { fr:'Chez Mad Makers, c’est lui qui prend les briefs, conçoit les directions créatives et pilote la production jusqu’à la livraison. <b style="color:#fff">Votre interlocuteur unique, du premier appel au site mis en ligne.</b>',
                            en:'At Mad Makers, he takes the briefs, drives the creative direction and runs production through to delivery. <b style="color:#fff">Your single point of contact, from the first call to launch day.</b>' },
    'founders.f2.quote':  { fr:'Ma mission, c’est de vous aider à obtenir plus que ce que vous avez investi, grâce à une meilleure traction commerciale.',
                            en:'My mission is to help you get more than what you invested, through better commercial traction.' },
    'founders.f2.s1.v':   { fr:'<span class="g">2×</span>', en:'<span class="g">2×</span>' },
    'founders.f2.s1.t':   { fr:'Grands groupes<br>Orange · Vinci', en:'Major groups<br>Orange · Vinci' },
    'founders.f2.s2.v':   { fr:'7+', en:'7+' },
    'founders.f2.s2.t':   { fr:'Années<br>Marketing digital', en:'Years<br>Digital marketing' },
    'founders.f2.s3.v':   { fr:'100%', en:'100%' },
    'founders.f2.s3.t':   { fr:'Interlocuteur<br>unique', en:'Single<br>point of contact' },

    'founders.f3.tag':    { fr:'F.03 / COFONDATEUR', en:'F.03 / CO-FOUNDER' },
    'founders.f3.code':   { fr:'STRATÉGIE · DÉVELOPPEMENT', en:'STRATEGY · DEVELOPMENT' },
    'founders.f3.role':   { fr:'Cofondateur · Stratégie & Développement', en:'Co-founder · Strategy & Development' },
    'founders.f3.sub':    { fr:'SCIENCES PO LILLE · JOHNS HOPKINS SAIS · CONSEIL INTERNATIONAL',
                            en:'SCIENCES PO LILLE · JOHNS HOPKINS SAIS · INTERNATIONAL CONSULTING' },
    'founders.f3.p1':     { fr:'Diplômé de <b style="color:#fff">Sciences Po Lille</b> et titulaire d’un master à <b style="color:#fff">Johns Hopkins (SAIS)</b>, Goudet a piloté des missions de stratégie et de communication pour des institutions et des grands groupes en Europe et en Afrique francophone — Assemblée nationale, ministère de la Justice, dirigeants d’entreprise.',
                            en:'Graduate of <b style="color:#fff">Sciences Po Lille</b> with a master’s from <b style="color:#fff">Johns Hopkins (SAIS)</b>, Goudet has led strategy and communications missions for institutions and major groups in Europe and French-speaking Africa — French National Assembly, Ministry of Justice, business leaders.' },
    'founders.f3.p2':     { fr:'Chez Mad Makers, il co-dirige le développement commercial et la stratégie.',
                            en:'At Mad Makers, he co-leads business development and strategy.' },
    'founders.f3.quote':  { fr:'Trop d’entreprises courent après la visibilité. Ce qui compte, c’est un positionnement clair et une croissance qui s’installe dans la durée.',
                            en:'Too many companies chase visibility. What matters is a clear positioning and growth that lasts.' },
    'founders.f3.s1.v':   { fr:'10+', en:'10+' },
    'founders.f3.s1.t':   { fr:'Années<br>Conseil stratégique', en:'Years<br>Strategic consulting' },
    'founders.f3.s2.v':   { fr:'SAIS', en:'SAIS' },
    'founders.f3.s2.t':   { fr:'Johns<br>Hopkins', en:'Johns<br>Hopkins' },
    'founders.f3.s3.v':   { fr:'<span class="g">2×</span>', en:'<span class="g">2×</span>' },
    'founders.f3.s3.t':   { fr:'Prix MUN<br>Harvard', en:'Harvard MUN<br>Awards' },

    /* ——— PROCESS ——— */
    'process.sh.a':       { fr:'<span class="num">05</span> / PROCESS', en:'<span class="num">05</span> / PROCESS' },
    'process.sh.b':       { fr:'[ 12 ÉTAPES · 2 GATES ]', en:'[ 12 STEPS · 2 GATES ]' },
    'process.h2':         { fr:'RIEN N’EST<br>IMPROVISÉ. TOUT<br>EST <span class="g">CADRÉ.</span>',
                            en:'NOTHING IS<br>IMPROVISED. EVERYTHING<br>IS <span class="g">FRAMED.</span>' },
    'process.p':          { fr:'Chaque projet Mad Makers suit un déroulé en 12 étapes, du brief initial à la mise en ligne. Vous savez à chaque instant où en est votre projet, ce qui a été validé, et ce qui reste à faire. Deux points de validation formelle ponctuent le processus : sans votre accord écrit, on ne passe pas à l’étape suivante. Vous gardez le contrôle. On garde la cadence.',
                            en:'Every Mad Makers project follows a 12-step flow, from initial brief to launch. You always know where your project stands, what has been validated, and what remains. Two formal validation points punctuate the process: without your written approval, we don’t move forward. You keep control. We keep the cadence.' },
    'process.ph1.tag':    { fr:'Phase 01 — Stratégie', en:'Phase 01 — Strategy' },
    'process.ph1.h':      { fr:'Comprendre<br>votre projet.', en:'Understand<br>your project.' },
    'process.ph1.1':      { fr:'Brief initial', en:'Initial brief' },
    'process.ph1.2':      { fr:'Étude de votre marché', en:'Market study' },
    'process.ph1.3':      { fr:'Cadrage du projet', en:'Project framing' },
    'process.ph1.4':      { fr:'Proposition commerciale', en:'Commercial proposal' },
    'process.ph1.5':      { fr:'Signature · acompte 40 %', en:'Signature · 40% deposit' },
    'process.ph2.tag':    { fr:'Phase 02 — Production', en:'Phase 02 — Production' },
    'process.ph2.h':      { fr:'Concevoir<br>le site.', en:'Design<br>the site.' },
    'process.ph2.1':      { fr:'Collecte des contenus', en:'Content collection' },
    'process.ph2.2':      { fr:'Maquettes design', en:'Design mockups' },
    'process.ph2.3':      { fr:'Direction artistique', en:'Art direction' },
    'process.ph2.4':      { fr:'Développement',       en:'Development' },
    'process.ph2.5':      { fr:'Optimisation SEO · tests', en:'SEO optimization · tests' },
    'process.ph3.tag':    { fr:'Phase 03 — Livraison', en:'Phase 03 — Delivery' },
    'process.ph3.h':      { fr:'Mettre<br>en ligne.', en:'Go<br>live.' },
    'process.ph3.1':      { fr:'Corrections (2 séries incluses)', en:'Revisions (2 rounds included)' },
    'process.ph3.2':      { fr:'Mise en ligne · clôture', en:'Launch · close-out' },
    'process.ph4.tag':    { fr:'Modalités',           en:'Terms' },
    'process.ph4.h':      { fr:'Les règles<br>du jeu.', en:'The rules<br>of the game.' },
    'process.ph4.1':      { fr:'40 % à la signature', en:'40% on signature' },
    'process.ph4.2':      { fr:'60 % à la livraison', en:'60% on delivery' },
    'process.ph4.3':      { fr:'2 séries de corrections incluses', en:'2 rounds of revisions included' },
    'process.ph4.4':      { fr:'Outils de suivi installés et configurés', en:'Tracking tools installed and configured' },
    'process.gate1.a':    { fr:'VALIDATION 01 · <b>Accord écrit sur les maquettes avant développement</b>',
                            en:'VALIDATION 01 · <b>Written approval of mockups before development</b>' },
    'process.gate1.b':    { fr:'→ ÉTAPE CLÉ', en:'→ KEY STEP' },
    'process.gate2.a':    { fr:'VALIDATION 02 · <b>Accord final et solde avant mise en ligne</b>',
                            en:'VALIDATION 02 · <b>Final approval and balance before launch</b>' },
    'process.gate2.b':    { fr:'→ ÉTAPE CLÉ', en:'→ KEY STEP' },

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
    'real.r1.h':          { fr:'Riot MMO',             en:'Riot MMO' },
    'real.r1.meta':       { fr:'<span>RIOT GAMES · CINEMATIC WEB</span><b>2025</b>',
                            en:'<span>RIOT GAMES · CINEMATIC WEB</span><b>2025</b>' },
    'real.r2.h':          { fr:'AMV · Atmosphère',    en:'AMV · Mood' },
    'real.r2.meta':       { fr:'<span>MONTAGE · MAÏCK</span><b>2025</b>',
                            en:'<span>EDIT · MAÏCK</span><b>2025</b>' },
    'real.r3.h':          { fr:'Idée Noire',          en:'Idée Noire' },
    'real.r3.meta':       { fr:'<span>MONTAGE · MAÏCK</span><b>2025</b>',
                            en:'<span>EDIT · MAÏCK</span><b>2025</b>' },
    'real.r4.h':          { fr:'Studio · Off-Stage',   en:'Studio · Off-Stage' },
    'real.r4.meta':       { fr:'<span>MAICK · EDITORIAL</span><b>FR</b>',
                            en:'<span>MAICK · EDITORIAL</span><b>FR</b>' },
    'real.r5.h':          { fr:'Stratégie · Altitude', en:'Strategy · Altitude' },
    'real.r5.meta':       { fr:'<span>GOUDET · ARMD</span><b>INT.</b>',
                            en:'<span>GOUDET · ARMD</span><b>INT.</b>' },
    'real.r6.h':          { fr:'Brand System',         en:'Brand System' },
    'real.r6.meta':       { fr:'<span>IDENTITÉ · PHASE 01</span><b>MAD</b>',
                            en:'<span>IDENTITY · PHASE 01</span><b>MAD</b>' },
    'real.r7.h':          { fr:'Anime · AMV',         en:'Anime · AMV' },
    'real.r7.meta':       { fr:'<span>ANIMATION · MAÏCK</span><b>2025</b>',
                            en:'<span>ANIMATION · MAÏCK</span><b>2025</b>' },
    'player.vidoff.a':    { fr:'VIDÉO · LIVE LOOP',    en:'VIDEO · LIVE LOOP' },
    'player.vidoff.b':    { fr:'AUDIO LIVE ↓',         en:'AUDIO LIVE ↓' },
    'player.by.a.lbl':    { fr:'ARTISTE',              en:'ARTIST' },
    'player.by.b.lbl':    { fr:'FORMAT',               en:'FORMAT' },
    'player.by.c.lbl':    { fr:'ANNÉE',                en:'YEAR' },
    'player.by.d.lbl':    { fr:'CURATION',             en:'CURATION' },

    /* ——— REFUSE ——— */
    'refuse.sh.a':        { fr:'<span class="num">09</span> / CE QU\u2019ON REFUSE',
                            en:'<span class="num">09</span> / WHAT WE REFUSE' },
    'refuse.sh.b':        { fr:'[ NO-LIST ]',          en:'[ NO-LIST ]' },
    'refuse.h2':          { fr:'POUR BIEN SAVOIR<br>QUI ON EST —<br>VOYEZ CE QU’ON<br><span class="g">NE FERA PAS.</span>',
                            en:'TO TRULY KNOW<br>WHO WE ARE —<br>SEE WHAT WE<br><span class="g">WON’T DO.</span>' },
    'refuse.hint':        { fr:'<span class="dot"></span>Cliquez sur une croix → découvrez notre promesse',
                            en:'<span class="dot"></span>Click a cross → discover our promise' },
    'refuse.l1.no':       { fr:'Recycler un template qu’on revend trois fois plus cher.', en:'Recycle a template we resell at three times the price.' },
    'refuse.l1.yes':      { fr:'Concevoir un design unique, pensé pour votre marché.', en:'Design a unique site, built for your market.' },
    'refuse.l2.no':       { fr:'Écrire « Bienvenue sur notre site, nous sommes passionnés par notre métier ».', en:'Write “Welcome to our site, we are passionate about what we do”.' },
    'refuse.l2.yes':      { fr:'Écrire des textes qui parlent à vos clients, dans leurs mots, sur leurs leviers de décision.', en:'Write copy that speaks to your clients, in their words, on their decision triggers.' },
    'refuse.l3.no':       { fr:'Utiliser des photos de stock qu’on retrouve sur 4 000 autres sites.', en:'Use stock photos that appear on 4,000 other websites.' },
    'refuse.l3.yes':      { fr:'Produire des visuels originaux — photos, illustrations, animations — qui n’existent que chez vous.', en:'Produce original visuals — photos, illustrations, animations — that only exist on your site.' },
    'refuse.l4.no':       { fr:'Livrer un site sans outils de mesure, sans suivi, sans données.', en:'Deliver a site with no measurement, no tracking, no data.' },
    'refuse.l4.yes':      { fr:'Installer et configurer tous les outils de suivi. Vous savez exactement ce que rapporte votre site.', en:'Install and configure all tracking tools. You know exactly what your site is bringing in.' },
    'refuse.l5.no':       { fr:'Facturer un site « joli » sans stratégie pour générer des contacts.', en:'Charge for a “pretty” site with no lead-generation strategy.' },
    'refuse.l5.yes':      { fr:'Concevoir chaque page avec un objectif clair : demande de devis, prise de rendez-vous, vente.', en:'Design every page with a clear goal: quote request, booking, sale.' },
    'refuse.l6.no':       { fr:'Nous lancer sans connaître votre métier ni vos clients.', en:'Start without knowing your business or your clients.' },
    'refuse.l6.yes':      { fr:'Étudier votre marché et vos concurrents avant la première maquette.', en:'Study your market and competitors before the first mockup.' },
    'refuse.l7.no':       { fr:'Accepter un projet pour le facturer, en sachant qu’on n’est pas les bons.', en:'Take on a project for the invoice, knowing we’re not the right fit.' },
    'refuse.l7.yes':      { fr:'Vous orienter vers d’autres si votre besoin sort de notre expertise. Notre temps et le vôtre comptent.', en:'Refer you elsewhere if your need is outside our expertise. Your time and ours both count.' },

    /* ——— CONTACT ——— */
    'contact.sh.a':       { fr:'<span class="num">10</span> / CONTACT', en:'<span class="num">10</span> / CONTACT' },
    'contact.sh.b':       { fr:'[ ON SE PARLE ]',      en:'[ LET\u2019S TALK ]' },
    'contact.col1.lbl':   { fr:'Projets · Brief',      en:'Projects · Brief' },
    'contact.col1.a':     { fr:'Votre interlocuteur direct : Maïck, cofondateur', en:'Your direct contact: Maïck, co-founder' },
    'contact.col2.lbl':   { fr:'Studio',               en:'Studio' },
    'contact.col2.a1':    { fr:'Paris · France',       en:'Paris · France' },
    'contact.col2.a2':    { fr:'Clients : France, Europe, francophonie', en:'Clients: France, Europe, French-speaking world' },
    'contact.col2.a3':    { fr:'FR · EN',              en:'FR · EN' },
    'contact.col3.lbl':   { fr:'Social',               en:'Social' },
    'contact.col3.a1':    { fr:'Mad Makers · Instagram ↗', en:'Mad Makers · Instagram ↗' },
    'contact.col3.a2':    { fr:'Mad Makers · LinkedIn ↗', en:'Mad Makers · LinkedIn ↗' },
    'contact.col3.a3':    { fr:'Goudet · LinkedIn ↗',  en:'Goudet · LinkedIn ↗' },
    'contact.col3.a4':    { fr:'Instagram ↗',          en:'Instagram ↗' },
    'contact.col4.lbl':   { fr:'Modalités',            en:'Terms' },
    'contact.col4.a1':    { fr:'40 % à la signature · 60 % à la livraison', en:'40% on signature · 60% on delivery' },
    'contact.col4.a2':    { fr:'2 séries de corrections incluses', en:'2 rounds of revisions included' },
    'contact.col4.a3':    { fr:'Outils de suivi installés et configurés', en:'Tracking tools installed and configured' },
    'contact.col4.a4':    { fr:'Premier échange gratuit · 30 min ↗', en:'First call free · 30 min ↗' },
    'contact.book.kk':    { fr:'[ 30 MIN · GRATUIT · SANS ENGAGEMENT ]', en:'[ 30 MIN · FREE · NO COMMITMENT ]' },
    'contact.book.ll':    { fr:'Parlons de<br>votre projet.', en:'Let’s talk about<br>your project.' },
    'contact.book.sub':   { fr:'Trente minutes en visio pour comprendre vos enjeux, vous donner un retour direct sur votre projet, et voir si nous sommes les bons pour vous accompagner. Pas de commercial, pas de script — juste une conversation utile.',
                            en:'Thirty minutes on video to understand your stakes, give you direct feedback on your project, and see whether we’re the right fit. No salesperson, no script — just a useful conversation.' },
    'contact.book.btn':   { fr:'Réserver un créneau', en:'Book a slot' },
    'contact.foot.slogan':{ fr:'AGENCE WEB CRÉATIVE PARIS', en:'CREATIVE WEB AGENCY PARIS' }
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
