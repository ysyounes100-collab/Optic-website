import { SITE } from '../data/site';
import styles from './Hero.module.css';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&q=80';

export function Hero() {
  return (
    <section id="accueil" className={styles.hero} aria-label="Bannière principale">
      <div className={styles.bg}>
        <div className={styles.gradient} />
      </div>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={styles.badge}>Opticien à Agadir</p>
            <h1 className={styles.title}>Votre Vision, Notre Soin à Agadir</h1>
            <p className={styles.subtitle}>
              Expertise en lunettes de vue, lunettes de soleil et soins de la vision.
              Des conseils personnalisés et une qualité irréprochable pour toute la famille.
            </p>
            <div className={styles.actions}>
              <a href="#contact" className={styles.btnPrimary}>
                Prendre Rendez-vous
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className={styles.btnSecondary}>
                Appeler Maintenant
              </a>
            </div>
            <div className={styles.meta}>
              <span className={styles.rating}>⭐ {SITE.rating} ({SITE.reviewCount} avis)</span>
              <span className={styles.hours}>{SITE.openingHours}</span>
            </div>
          </div>
          <div className={styles.heroImageWrap}>
            <img
              src={HERO_IMAGE}
              alt="Ezza Optique – lunettes et soins de la vision à Agadir"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
