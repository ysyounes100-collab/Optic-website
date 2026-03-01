import styles from './FeaturedSection.module.css';

export function FeaturedSection() {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2 id="featured-heading" className={styles.title}>
              👁️ Chez Ezza Optique, votre vision est entre de bonnes mains
            </h2>
            <p className={styles.desc}>
              Nous vous accueillons dans notre magasin à Agadir pour un conseil personnalisé, 
              un large choix de montures et des verres de qualité. Passez nous voir pour un examen 
              de la vue ou pour trouver la paire qui vous correspond.
            </p>
            <a href="#contact" className={styles.cta}>
              Nous rendre visite
            </a>
          </div>
          <div className={styles.visual}>
            <img
              src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80"
              alt="Lunettes et optique chez Ezza Optique Agadir"
              className={styles.visualImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
