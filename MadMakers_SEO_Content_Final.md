# MAD MAKERS — Contenu SEO du site portfolio

> **Document de travail validé · Avril 2026**
> Version définitive du contenu textuel à intégrer dans le site Mad Makers (Framer).
> Ce document remplace l'intégralité du contenu textuel actuel — chaque bloc est prêt à être copié-collé tel quel dans le composant correspondant.

---

## Pour le Claude qui va intégrer ce contenu

Ce document est le résultat d'un travail de réécriture complet, écran par écran, du site madmakers.fr. Le contenu a été pensé pour servir trois objectifs simultanément :

1. **SEO** — chaque section intègre les mots-clés cibles (architecture détaillée plus bas) sans jamais sacrifier la voix de marque.
2. **Conversion** — la perspective est systématiquement client-centrée (pain point → solution → bénéfice).
3. **Lisibilité décideurs** — le ton est calibré pour être lu indifféremment par un patron de PME pressé ou un Directeur Marketing senior.

**Règles de vigilance pendant l'intégration :**
- Ne pas modifier les mots-clés intégrés ("agence web créative Paris", "création de site web Paris", "direction artistique web", etc.) — leur position est calculée.
- Conserver les majuscules dans les H1 (cohérent avec l'identité typographique Bebas Neue).
- Conserver les structures à plusieurs paragraphes courts (pas de paragraphes de plus de 4 phrases).
- Les retours à la ligne dans les blocs ci-dessous reflètent la mise en page voulue.

---

## A · ARCHITECTURE DE MOTS-CLÉS

| Tier | Mot-clé | Page cible |
|------|---------|------------|
| T1 | agence web créative Paris | Homepage, badge, footer |
| T2 | création de site web Paris (PME) | Services, Homepage |
| T2 | agence digitale hybride Paris | Homepage |
| T2 | agence SEO Paris TPE | Services |
| T2 | direction artistique web Paris | Services, Maïck |
| T2 | refonte site internet Paris | Services |
| T3 | agence web restaurant Paris | Long-tail blog/landing |
| T3 | création site internet hôtel Paris | Long-tail blog/landing |
| T3 | agence growth hacking no-code Paris | À propos / Process |

---

## B · META TAGS (à coller dans `<head>`)

### Homepage — `madmakers.fr/`

```html
<title>Agence Web Créative Paris | Web · DA · SEO · Vidéo — Mad Makers</title>
<meta name="description" content="Agence web créative à Paris, à la croisée du digital et de l'art. Sites web, SEO, direction artistique, vidéo — pour les entreprises qui refusent de ressembler à leurs concurrents.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://madmakers.fr/">

<!-- Open Graph -->
<meta property="og:title" content="Mad Makers — Agence Web Créative Paris">
<meta property="og:description" content="Web, direction artistique, vidéo, SEO. Pour les entreprises qui refusent de ressembler à leurs concurrents.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://madmakers.fr/">
<meta property="og:locale" content="fr_FR">
<meta property="og:image" content="https://madmakers.fr/og-home.jpg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Mad Makers — Agence Web Créative Paris">
```

### Données structurées JSON-LD (à coller dans toutes les pages)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Mad Makers",
  "alternateName": "Mad Makers Agence Web Paris",
  "description": "Agence web créative à Paris. Création de sites web, SEO, direction artistique et production vidéo pour TPE, PME et grands groupes qui refusent le générique.",
  "url": "https://madmakers.fr",
  "logo": "https://madmakers.fr/logo.png",
  "image": "https://madmakers.fr/og-home.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "areaServed": ["Paris", "Île-de-France", "France", "Belgique", "Suisse"],
  "serviceType": [
    "Création de sites web",
    "Référencement naturel SEO",
    "Direction artistique web",
    "Production vidéo",
    "Google My Business",
    "Growth hacking",
    "Gestion réseaux sociaux"
  ],
  "knowsLanguage": ["fr", "en"],
  "priceRange": "€€",
  "sameAs": [
    "https://www.instagram.com/madmakers",
    "https://www.linkedin.com/company/madmakers"
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mad Makers",
  "url": "https://madmakers.fr",
  "inLanguage": "fr-FR"
}
</script>
```

---

# C · CONTENU PAR ÉCRAN

---

## 01 · HOMEPAGE — HERO

**[ H1 ]**

```
DREAM IT. WE MAKE IT.
```

**[ BADGE CIRCULAIRE — haut droite ]**

```
AGENCE WEB CRÉATIVE · PARIS · FR
```

**[ BLOC INTRO — 01 / INTRO ]**

```
Votre prochain client vous cherche sur Google.
On s'assure qu'il vous trouve — et qu'il reste.

Agence web créative à Paris. Sites sur-mesure,
SEO, direction artistique, vidéo. Livraison en
10 jours. Pour les entreprises qui refusent de
ressembler à leurs concurrents.
```

**[ CTA NAVIGATION — haut droite ]**

```
PARLER DE VOTRE PROJET · 30 MIN ↗
```

**[ FOOTER BAR ]**

```
© MAD MAKERS — AGENCE WEB CRÉATIVE PARIS | EST. 2025 | PARIS · FR
```

---

## 02 · MANIFESTO — POSITIONNEMENT

**[ H1 GAUCHE ]**

```
ON NE LIVRE PAS DES SITES.
ON LIVRE DES OUTILS DE VENTE.
```

**[ BLOC 1 — UN SITE DOIT VOUS RAPPORTER ]**

```
La plupart des sites coûtent de l'argent sans
jamais en rapporter. C'est parce qu'ils sont
pensés pour plaire et non pour vendre. Nous ?
Nous partons de votre objectif commercial, et
le design en découle. Vous obtenez un site qui
génère des demandes, des appels et des ventes.
```

**[ BLOC 2 — UNE MÉTHODE CLAIRE ]**

```
Trop d'agences vous laissent dans le flou pendant
des semaines. Nous procédons autrement : chaque
étape est cadrée, chaque livrable est daté. Du
brief à la mise en ligne, vous savez toujours où
en est votre projet.
```

**[ BLOC 3 — LIVRÉ EN 10 JOURS ]**

```
Une agence classique met deux à trois mois pour
livrer un site. Nos outils nous permettent d'aller
cinq fois plus vite. Vous gagnez du temps, vous
économisez du budget — sans rien perdre en qualité
ni en finition.
```

**[ BLOC 4 — ADAPTÉ À VOTRE MARCHÉ ]**

```
Un site qui parle à un client de restaurant ne
parle pas aux cibles d'un cabinet de conseil.
Avant la première maquette, nous étudions donc
votre secteur, vos clients et vos concurrents.
Avec cette préparation : votre site parle vraiment
à vos prospects, dans leurs mots, sur leurs
leviers de décision.
```

**[ BLOC 5 — PARIS, FRANCE, EUROPE ]**

```
Nous accompagnons des PME, des ETI et des
directions marketing de grands groupes — à Paris,
en province et ailleurs en Europe.

Les projets sont livrés en français ou en anglais,
selon votre marché. Confidentialité garantie par
contrat.
```

**[ CRÉDITS ]**

```
MAD MAKERS — MAÏCK · GOUDET
```

---

## 03 · SERVICES

**[ HEADER ]**

```
03 / SERVICES                                [ L'OFFRE STRUCTURÉE ]
```

**[ S.01 — SITE ONE-PAGE ] · 700 — 1 200 €**

```
Pour lancer un produit, un service ou une activité
en quelques jours. Une seule page, pensée pour
une seule action : convertir vos visiteurs en
contacts qualifiés.
```

**[ S.02 — SITE VITRINE ] · 1 200 — 2 800 €**

```
Pour les entreprises qui veulent une présence
digitale complète et professionnelle. Cinq à huit
pages, avec une structure éditoriale claire, et
l'optimisation SEO incluse dès la mise en ligne.
```

**[ S.03 — SITE SUR-MESURE ] · 3 000 — 8 000 €**

```
Pour les marques haut de gamme qui doivent le
démontrer dès la première seconde : animations
avancées, design entièrement sur-mesure,
e-commerce intégré si besoin.
```

**[ S.04 — VIDÉO INSTITUTIONNELLE ] · 800 — 3 500 €**

```
Pour raconter votre entreprise avec impact, en
une à trois minutes. Script, tournage, montage —
livrés en formats adaptés à votre site et à vos
réseaux sociaux.
```

**[ S.05 — AUDIT SEO ] · 400 — 900 €**

```
Votre site est en ligne mais ne génère pas de
trafic qualifié. Nous identifions les blocages
techniques et éditoriaux, puis vous remettons
un plan d'action concret, priorisé et chiffré.
```

**[ S.06 — ACCOMPAGNEMENT SEO ] · 500 — 1 000 € / mois**

```
Pour être trouvé sur Google sans avoir à vous
en occuper. De quatre à huit articles optimisés
par mois, suivi des positions, et gestion complète
de votre fiche Google My Business.
```

**[ S.07 — GESTION RÉSEAUX SOCIAUX ] · 1 000 — 2 000 € / mois**

```
Pour transformer vos comptes en véritable canal
d'acquisition. Huit à seize publications par mois
— stratégie éditoriale, création visuelle et
animation comprises.
```

**[ S.08 — PACK DÉMARRAGE ] · 3 000 — 5 000 €**

```
Pour lancer votre activité avec une présence
digitale complète et cohérente. Site web, identité
visuelle et fondations SEO — l'ensemble livré sous
deux semaines, prêt à convertir vos cibles.
```

---

## 04 · LE DUO — INTRO

**[ HEADER ]**

```
04 / LE DUO                                [ DEUX PROFILS · DEUX MONDES ]
```

**[ H1 ]**

```
UN CRÉATIF.
UN STRATÈGE.
```

**[ CORPS ]**

```
Mad Makers est née de la rencontre de deux profils
complémentaires. D'un côté, un créatif hybride
formé aux codes du web, du marketing et de l'image
— habitué à concevoir des contenus qui tiennent la
route face à des audiences exigeantes.

De l'autre, un stratège passé par le conseil
international auprès de grands groupes et
institutions françaises ou internationales.

Avec cette combinaison, vous bénéficiez d'une
exigence de finition créative, doublée d'une
rigueur de méthode issue du conseil. Ni atelier
déconnecté du business, ni cabinet sans âme.
```

---

## 05 · FICHE MAÏCK

**[ HEADER ]**

```
F.02 / COFONDATEUR
```

**[ EYEBROW ]**

```
COFONDATEUR · DIRECTEUR ARTISTIQUE
```

**[ NOM ]**

```
MAÏCK.
```

**[ SOUS-TITRE TECHNIQUE ]**

```
MARKETING DIGITAL · ORANGE · VINCI CONSTRUCTION
```

**[ CORPS ]**

```
Profil hybride formé au marketing digital chez
Orange et Vinci Construction, où il a piloté des
projets pour des audiences exigeantes. Il sait
parler à un dirigeant de PME comme à un directeur
marketing de grand groupe — sans changer
d'exigence de qualité.

Chez Mad Makers, c'est lui qui prend les briefs,
conçoit les directions créatives et pilote la
production jusqu'à la livraison. Votre
interlocuteur unique, du premier appel au site
mis en ligne.
```

**[ CITATION ]**

```
« Ma mission, c'est de vous aider à obtenir plus
que ce que vous avez investi, grâce à une meilleure
traction commerciale. »
```

**[ STATS BAS ]**

```
2×                          7+                          100%
GRANDS GROUPES              ANNÉES                      INTERLOCUTEUR
ORANGE · VINCI              MARKETING DIGITAL           UNIQUE
```

---

## 06 · FICHE GOUDET

**[ HEADER ]**

```
F.03 / COFONDATEUR
```

**[ EYEBROW ]**

```
COFONDATEUR · STRATÉGIE & DÉVELOPPEMENT
```

**[ NOM ]**

```
GOUDET ABALÉ.
```

**[ SOUS-TITRE TECHNIQUE ]**

```
SCIENCES PO LILLE · JOHNS HOPKINS SAIS · CONSEIL INTERNATIONAL
```

**[ CORPS ]**

```
Diplômé de Sciences Po Lille et titulaire d'un
master à Johns Hopkins (SAIS), Goudet a piloté
des missions de stratégie et de communication
pour des institutions et des grands groupes en
Europe et en Afrique francophone — Assemblée
nationale, ministère de la Justice, dirigeants
d'entreprise.

Chez Mad Makers, il co-dirige le développement
commercial et la stratégie.
```

**[ CITATION ]**

```
« Trop d'entreprises courent après la visibilité.
Ce qui compte, c'est un positionnement clair et
une croissance qui s'installe dans la durée. »
```

**[ STATS BAS ]**

```
10+                         SAIS                        2×
ANNÉES                      JOHNS                       PRIX MUN
CONSEIL STRATÉGIQUE         HOPKINS                     HARVARD
```

**[ FOOTER GAUCHE — sous la photo ]**

```
COFONDATEUR · STRATÉGIE
```

---

## 07 · PROCESS — INTRO

**[ H1 ]**

```
RIEN N'EST IMPROVISÉ.
TOUT EST CADRÉ.
```

**[ CORPS ]**

```
Chaque projet Mad Makers suit un déroulé en
12 étapes, du brief initial à la mise en ligne.
Vous savez à chaque instant où en est votre
projet, ce qui a été validé, et ce qui reste
à faire.

Deux points de validation formelle ponctuent
le processus : sans votre accord écrit, on ne
passe pas à l'étape suivante. Vous gardez le
contrôle. On garde la cadence.
```

---

## 08 · PROCESS — DÉTAIL DES PHASES

**[ COLONNE 1 — STRATÉGIE ]**

```
PHASE 01 — STRATÉGIE

COMPRENDRE
VOTRE PROJET.

01   Brief initial
02   Étude de votre marché
03   Cadrage du projet
04   Proposition commerciale
05   Signature · acompte 40 %
```

**[ COLONNE 2 — PRODUCTION ]**

```
PHASE 02 — PRODUCTION

CONCEVOIR
LE SITE.

06   Collecte des contenus
07   Maquettes design
08   Direction artistique
09   Développement
10   Optimisation SEO · tests
```

**[ COLONNE 3 — LIVRAISON ]**

```
PHASE 03 — LIVRAISON

METTRE
EN LIGNE.

11   Corrections (2 séries incluses)
12   Mise en ligne · clôture
```

**[ COLONNE 4 — MODALITÉS ]**

```
MODALITÉS

LES RÈGLES
DU JEU.

40 % à la signature
60 % à la livraison
2 séries de corrections incluses
Outils de suivi installés et configurés
```

**[ BARRE BAS — VALIDATIONS ]**

```
VALIDATION 01 · ACCORD ÉCRIT SUR LES MAQUETTES AVANT DÉVELOPPEMENT     → ÉTAPE CLÉ
```

```
VALIDATION 02 · ACCORD FINAL ET SOLDE AVANT MISE EN LIGNE              → ÉTAPE CLÉ
```

---

## 09 · ENGAGEMENTS (refus → promesses)

> **Note d'intégration** : la mécanique d'interaction reste identique (clic sur la croix rouge → révélation de la promesse verte). Seul le contenu textuel change. Chaque ligne rouge a un pendant vert qui répond exactement au même thème.

**[ HEADER ]**

```
09 / CE QU'ON REFUSE                              [ NO-LIST ]
```

**[ H1 ]**

```
POUR BIEN SAVOIR QUI ON EST —
VOYEZ CE QU'ON
NE FERA PAS.
```

**[ MICRO-CTA ]**

```
CLIQUEZ SUR UNE CROIX → DÉCOUVREZ NOTRE PROMESSE
```

**[ LIGNE 1 — DESIGN ]**

| | |
|---|---|
| **Refus (rouge)** | Recycler un template qu'on revend trois fois plus cher. |
| **Promesse (vert)** | Concevoir un design unique, pensé pour votre marché. |

**[ LIGNE 2 — COPY ]**

| | |
|---|---|
| **Refus** | Écrire « Bienvenue sur notre site, nous sommes passionnés par notre métier ». |
| **Promesse** | Écrire des textes qui parlent à vos clients, dans leurs mots, sur leurs leviers de décision. |

**[ LIGNE 3 — VISUELS ]**

| | |
|---|---|
| **Refus** | Utiliser des photos de stock qu'on retrouve sur 4 000 autres sites. |
| **Promesse** | Produire des visuels originaux — photos, illustrations, animations — qui n'existent que chez vous. |

**[ LIGNE 4 — TECHNIQUE ]**

| | |
|---|---|
| **Refus** | Livrer un site sans outils de mesure, sans suivi, sans données. |
| **Promesse** | Installer et configurer tous les outils de suivi. Vous savez exactement ce que rapporte votre site. |

**[ LIGNE 5 — CONVERSION ]**

| | |
|---|---|
| **Refus** | Facturer un site « joli » sans stratégie pour générer des contacts. |
| **Promesse** | Concevoir chaque page avec un objectif clair : demande de devis, prise de rendez-vous, vente. |

**[ LIGNE 6 — COMPRÉHENSION CLIENT ]**

| | |
|---|---|
| **Refus** | Nous lancer sans connaître votre métier ni vos clients. |
| **Promesse** | Étudier votre marché et vos concurrents avant la première maquette. |

**[ LIGNE 7 — HONNÊTETÉ COMMERCIALE ]**

| | |
|---|---|
| **Refus** | Accepter un projet pour le facturer, en sachant qu'on n'est pas les bons. |
| **Promesse** | Vous orienter vers d'autres si votre besoin sort de notre expertise. Notre temps et le vôtre comptent. |

---

## 10 · CONTACT

**[ HEADER GAUCHE ]**

```
PROJETS · PRISE DE CONTACT

HELLO@MADMAKERS.FR

Votre interlocuteur direct : Maïck, cofondateur.
```

**[ COLONNE STUDIO ]**

```
STUDIO

Paris · France
Clients : France, Europe, francophonie
FR · EN
```

**[ COLONNE SOCIAL ]**

```
SOCIAL

Mad Makers · Instagram ↗
Mad Makers · LinkedIn ↗
```

**[ COLONNE MODALITÉS ]**

```
MODALITÉS

40 % à la signature · 60 % à la livraison
2 séries de corrections incluses
Outils de suivi installés et configurés
Premier échange gratuit · 30 min
```

**[ BANDEAU CTA ]**

Eyebrow :
```
[ 30 MIN · GRATUIT · SANS ENGAGEMENT ]
```

Titre :
```
PARLONS DE VOTRE PROJET.
```

Corps :
```
Trente minutes en visio pour comprendre vos enjeux,
vous donner un retour direct sur votre projet, et
voir si nous sommes les bons pour vous accompagner.
Pas de commercial, pas de script — juste une
conversation utile.
```

Bouton :
```
RÉSERVER UN CRÉNEAU ↗
```

**[ FOOTER BAS ]**

```
© 2026 — MAD MAKERS · AGENCE WEB CRÉATIVE PARIS    |    PARIS · FR    |    INDEX / 010 / 010
```

---

# D · CHECKLIST TECHNIQUE (post-intégration)

À effectuer une fois le contenu en ligne :

- [ ] Activer le sitemap.xml automatique dans Framer (Settings → SEO → Sitemap)
- [ ] Soumettre le sitemap à Google Search Console
- [ ] Créer / valider la fiche Google Business Profile « Mad Makers »
  - Catégorie principale : *Agence de conception de sites web*
  - Catégories secondaires : *Agence de marketing digital*, *Agence SEO*
- [ ] Vérifier les Core Web Vitals sur PageSpeed Insights (cible : LCP < 2.5s, CLS < 0.1)
- [ ] Ajouter un attribut `alt` descriptif à toutes les images
  - Format type : `alt="agence web créative Paris — [contexte spécifique]"`
- [ ] Vérifier la redirection 301 du domaine (sans-www → avec-www OU l'inverse, choisir un format unique)
- [ ] Tester la version mobile sur Mobile-Friendly Test Google
- [ ] Vérifier que le robots.txt n'exclut pas les pages importantes
- [ ] Maillage interne : chaque page doit être liée par au moins 2 autres pages
- [ ] Référencer Mad Makers sur les annuaires : Malt, Sortlist, Annuaire La French Tech (NAP identique partout)
- [ ] Configurer Google Analytics 4 + connecter à Search Console
- [ ] Demander systématiquement un backlink footer aux premiers clients (« Réalisé par Mad Makers »)

---

*Document de travail validé · Mad Makers · Avril 2026*
*Confidentiel — usage strictement interne*
