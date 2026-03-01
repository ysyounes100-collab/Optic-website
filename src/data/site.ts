export const SITE = {
  name: 'Ezza Optique',
  tagline: 'Opticien à Agadir',
  rating: 4.9,
  reviewCount: 157,
  address: 'Ben Zidane, N°60 Av. Abderrahmane Ben Zidan, Agadir 80000, Morocco',
  phone: '05 28 29 27 03',
  phoneRaw: '0528292703',
  googleMapsCode: '9FX2+RC Agadir',
  googleMapsUrl: 'https://www.google.com/maps/place/Ezza+Optique/@30.3995939,-9.549166,20.34z/data=!4m6!3m5!1s0xdb3b74302017f6b:0x8a8d796371484847!8m2!3d30.3995673!4d-9.5489854!16s%2Fg%2F11ks0d6b80?entry=ttu',
  /** Coordonnées pour l’embed carte (lat, lng) */
  mapCenter: { lat: 30.3995673, lng: -9.5489854 },
  openingHours: 'Fermé — Ouvre à 9h Lundi',
  whatsapp: '212528292703',
} as const;

export const NAV_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#collections', label: 'Collections' },
  { href: '#a-propos', label: 'À Propos' },
  { href: '#avis', label: 'Avis' },
  { href: '#contact', label: 'Contact' },
] as const;

/** Images libres (Unsplash) pour les catégories */
export const CATEGORIES = [
  {
    id: 'lunettes-vue',
    title: 'Lunettes de vue',
    description: 'Montures et verres correcteurs pour une vision optimale.',
    cta: 'Voir la collection',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80',
  },
  {
    id: 'lunettes-soleil',
    title: 'Lunettes de soleil',
    description: 'Protection UV et style pour tous les goûts.',
    cta: 'Voir la collection',
    image: 'https://i.etsystatic.com/53069327/r/il/525194/6102126096/il_1588xN.6102126096_42c8.jpg',
  },
  {
    id: 'lentilles',
    title: 'Lentilles & Vision Care',
    description: 'Lentilles de contact et solutions d\'entretien.',
    cta: 'Voir la collection',
    image: 'https://www.opticalh.com/img/cms/landings/error%20404/Gafas%20de%20sol%20.jpg',
  },
  {
    id: 'accessoires',
    title: 'Accessoires & Entretien',
    description: 'Étuis, lingettes et accessoires pour vos lunettes.',
    cta: 'Voir la collection',
    image: 'https://cdn.displate.com/artwork/1200x857/2020-10-01/5ec4c00a3451a37b2f105e123a79b4f2_7e3611d474d178e3ee75e7ef909d4130.jpg',
  },
] as const;

export const WHY_US = [
  'Expertise optique personnalisée',
  'Satisfaction 5 étoiles',
  'Qualité des montures & verres',
  'Conseils professionnels adaptés à chaque client',
] as const;

export const TESTIMONIALS = [
  { name: 'Fatima M.', text: 'Service impeccable et conseils très professionnels. Je recommande Ezza Optique à tous.', stars: 5 },
  { name: 'Karim B.', text: 'Belle sélection de montures et équipe à l\'écoute. Rendez-vous pris facilement.', stars: 5 },
  { name: 'Sara L.', text: 'Mon fils a eu son premier examen ici. Très rassurant et des lunettes parfaites.', stars: 5 },
  { name: 'Omar K.', text: 'Qualité des verres au top, prix correct. J\'y reviendrai sans hésiter.', stars: 5 },
] as const;
