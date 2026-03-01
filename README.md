# Ezza Optique – Site Opticien Agadir

Site vitrine moderne pour **Ezza Optique**, opticien à Agadir. Inspiré du style epoptique.ma : propre, visuel et orienté prise de rendez-vous et appels.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173).

## Build production

```bash
npm run build
npm run preview
```

## Contenu du site

- **Hero** : titre « Votre Vision, Notre Soin à Agadir », CTA Rendez-vous & Appeler
- **Navigation** : Accueil, Services, Collections, À Propos, Avis, Contact (menu sticky)
- **Bloc marque** : « Chez Ezza Optique, votre vision est entre de bonnes mains »
- **Services** : examen de la vue, lunettes, lentilles, etc.
- **Collections** : Lunettes de vue, Soleil, Lentilles, Accessoires
- **Pourquoi nous** : expertise, satisfaction 5★, qualité, conseils
- **Avis** : carousel de témoignages (note 4,9 – 157 avis)
- **Galerie** : grille visuelle (montures, soleil, examen, magasin)
- **Contact** : adresse, téléphone, horaires, formulaire, carte (OpenStreetMap), lien Google Maps
- **Footer** : coordonnées, newsletter, liens légaux
- **WhatsApp** : bouton flottant pour contacter

## Personnalisation

- Données (nom, adresse, tél, horaires, avis…) : `src/data/site.ts`
- Couleurs et polices : variables CSS dans `src/index.css`
- Pour des photos réelles : ajouter des images dans `public/images/` et mettre à jour les chemins dans `site.ts` (catégories) ou dans les composants (hero, galerie, bloc marque).

## SEO

- Balises meta et titre dans `index.html` (opticien Agadir, Ezza Optique)
- Langue `fr`, structure sémantique (sections, titres, aria)

## Technique

- **Vite** + **React** + **TypeScript**
- CSS Modules pour les composants
- Design responsive (mobile-first)
- Smooth scroll, animations légères, sticky header
