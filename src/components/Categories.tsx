import { CATEGORIES } from '../data/site';
import styles from './Categories.module.css';

export function Categories() {
  return (
    <section id="collections" className={styles.section} aria-labelledby="categories-heading">
      <div className="container">
        <h2 id="categories-heading" className={styles.heading}>
          Nos collections
        </h2>
        <p className={styles.subheading}>
          Lunettes de vue, soleil, lentilles et accessoires pour toute la famille.
        </p>
        <div className={styles.grid}>
          {CATEGORIES.map((cat) => (
            <article key={cat.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{cat.title}</h3>
                <p className={styles.desc}>{cat.description}</p>
                <a href={`#${cat.id}`} className={styles.link}>
                  {cat.cta} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
