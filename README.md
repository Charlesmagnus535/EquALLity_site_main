# EquALLity

Site web du club féministe du campus, disponible en français et en anglais.
**Site :** https://equallity.fr

## Présentation

EquALLity est le club féministe du campus. Ce site présente l'équipe, nos actions régulières (stand Safe, distribution de serviettes hygiéniques) et nos évènements exceptionnels (Octobre Rose, Girl Xtreme).

Ce club est situé sur le campus de Télécom SudParis et IMT-BS et vise à lutter pour l'égalité homme-femme ainsi que pour un campus plus sûr.

## Technologies

- [Astro](https://astro.build) 5, site statique
- Internationalisation intégrée d'Astro (français par défaut, anglais sur `/en/`)
- CSS écrit à la main (pas de framework)
- Polices : Playfair Display, Montserrat, Italianno (Google Fonts)
- Hébergement : GitHub Pages

## Structure du projet

```text
.
├── public/
│   ├── photos/            # photos affichées sur le site
│   ├── EquALLity.svg      # logo
│   ├── placeholder.svg    # image par défaut
│   └── CNAME              # nom de domaine pour GitHub Pages
├── src/
│   ├── components/        # une section = un composant (Navbar, Home, Actions, Gallery, Events, Team, Footer…)
│   ├── data/site.ts       # photos et liens (Instagram, BDE)
│   ├── i18n/ui.ts         # tous les textes, en français et en anglais
│   ├── layouts/Layout.astro
│   ├── pages/
│   │   ├── index.astro    # version française  (/)
│   │   └── en/index.astro # version anglaise   (/en/)
│   └── utils/links.ts     # nettoyage des liens externes
├── astro.config.mjs
└── package.json
```

## Installation

Prérequis : [Node.js](https://nodejs.org) 18 ou plus récent.

```bash
git clone https://github.com/Charlesmagnus535/EquALLity_site_main.git
cd equallity.fr_bis
npm install
```

## Lancer le site en local

```bash
npm run dev
```

Le site est alors visible sur http://localhost:4321 (français) et http://localhost:4321/en/ (anglais).

Autres commandes :

| Commande | Effet |
| --- | --- |
| `npm run build` | construit le site final dans `dist/` |
| `npm run preview` | affiche le site construit, tel qu'il sera en ligne |

## Modifier le contenu

### Textes et traductions (FR / EN)

Tous les textes sont dans `src/i18n/ui.ts`. Chaque texte existe en `fr` et en `en` : pense à modifier les deux.

### Photos et images

1. Placer la photo dans `public/photos/`.
2. La déclarer dans `src/data/site.ts` avec un chemin commençant par `/`:
   ```ts
   const safe = '/photos/safe.webp';
   ```

### Liens (Instagram, BDE)

Les liens sont dans `src/data/site.ts` (`instagram`, `bde`)

## Déploiement

### Build

```bash
npm run build
```

### GitHub Pages

Le site est publié automatiquement à chaque `git push` sur la branche `main`, grâce au workflow `.github/workflows/deploy.yml`.

Réglage à faire une seule fois : **Settings → Pages → Source : GitHub Actions**.

### Nom de domaine (equallity.fr)

Le nom de domaine est géré chez OVHcloud.

## Sécurité et confidentialité

pour signaler un problème, contacter equallityint@gmail.com

## Crédits

- crédit photos : déclic
- développement du site : pôle num d'EquALLity
- autre: EquALLity

## Licence

photos: © déclic, tous droits réservés. Les photos sont publiées sur ce site avec l'accord de leurs auteurs. Toute reproduction, copie ou réutilisation en dehors de ce site est interdite sans autorisation écrite.