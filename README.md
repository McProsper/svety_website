# Svetlana — Portfolio, Lab & Atelier

Site personnel (Astro + Tailwind) : vitrine professionnelle, laboratoire de neuromarketing / sociologie, atelier littéraire.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:4321](http://localhost:4321).

## Configuration

Copiez `.env.example` vers `.env` :

- `MEDIUM_USERNAME` — identifiant Medium (sans `@`) pour le flux RSS `https://medium.com/feed/@username`
- `PUBLIC_CAL_EMBED_URL` / `PUBLIC_CAL_URL` — lien Cal.com ou Calendly pour le widget de rendez-vous

Sans ces variables, le site affiche des articles d'exemple et un bouton iCal `.ics`.

## Contenu

- Poèmes : fichiers Markdown dans `src/content/poemes/` ; schéma Zod dans `src/content.config.ts` (Astro 5+ ; ne pas recréer `src/content/config.ts`, cela vide les collections en `dev`)
- Illustrations : URLs Cloudinary (ou toute URL d'image)
- Certifications : `src/data/certifications.ts`
- CV PDF : remplacer `public/cv.pdf`

## Déploiement (Vercel, gratuit)

Connectez le dépôt ; le framework Astro est détecté automatiquement (`npm run build`, dossier `dist`).
