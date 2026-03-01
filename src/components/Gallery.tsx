import { useState } from 'react';
import styles from './Gallery.module.css';

const GALLERY_ITEMS = [
  { id: 1, title: 'Montures & lunettes design', caption: 'Large choix de marques', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&q=80' },
  { id: 2, title: 'Lunettes de soleil', caption: 'Protection UV et style', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80' },
  { id: 3, title: 'Examen de la vue', caption: 'Conseil personnalisé', image: 'https://www.dynamiclabs.net/cdn/shop/files/Zeiss_8oz_Spray_Front_F.jpg?v=1726586700' },
  { id: 4, title: 'Intérieur magasin', caption: 'Ezza Optique Agadir', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80' },
  { id: 5, title: 'Verres et lentilles', caption: 'Qualité premium', image: 'https://t4.ftcdn.net/jpg/02/44/14/05/360_F_244140583_MQ27ktdnXHxoWcDCRyX7YjZF49NsuJ86.jpg' },
  { id: 6, title: 'Accessoires', caption: 'Entretien et étuis', image: 'https://media.istockphoto.com/id/1350804383/photo/eye-doctor-oculist-in-clinic.jpg?s=612x612&w=0&k=20&c=b68TGGuoZgoSiWYPLZegePU2fEWRFViaXljwj6Nxs2c=' },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className={styles.section} aria-labelledby="gallery-heading">
      <div className="container">
        <h2 id="gallery-heading" className={styles.heading}>
          Notre univers
        </h2>
        <p className={styles.subheading}>
          Montures, lunettes de soleil et examens de vue dans un cadre professionnel.
        </p>
        <div className={styles.grid}>
          {GALLERY_ITEMS.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.card} ${active === i ? styles.cardActive : ''}`}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className={styles.image} style={{ backgroundImage: `url(${item.image})` }} />
              <div className={styles.overlay}>
                <span className={styles.caption}>{item.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
