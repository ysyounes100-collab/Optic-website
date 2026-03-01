import { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/site';
import styles from './Reviews.module.css';

export function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const goPrev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const goNext = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section id="avis" className={styles.section} aria-labelledby="reviews-heading">
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.header}>
          <h2 id="reviews-heading" className={styles.heading}>
            Ce que disent nos clients
          </h2>
          <p className={styles.subheading}>
            Plus de 157 avis · Note moyenne 4,9/5
          </p>
          <div className={styles.ratingBadge} aria-hidden>
            <span className={styles.ratingStars}>★★★★★</span>
            <span className={styles.ratingValue}>4,9</span>
          </div>
        </div>

        <div className={styles.carouselWrap}>
          <button
            type="button"
            className={styles.arrow}
            onClick={goPrev}
            aria-label="Avis précédent"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <div className={styles.carousel}>
            <div
              className={styles.track}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <blockquote key={t.name} className={styles.slide}>
                  <div className={styles.quoteIcon} aria-hidden>"</div>
                  <div className={styles.stars} aria-label={`${t.stars} étoiles`}>
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i} className={styles.star} aria-hidden>★</span>
                    ))}
                  </div>
                  <p className={styles.text}>{t.text}</p>
                  <footer className={styles.author}>
                    <span className={styles.avatar}>{t.name.charAt(0)}</span>
                    <span>{t.name}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={styles.arrow}
            onClick={goNext}
            aria-label="Avis suivant"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>

        <div className={styles.dots}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Voir avis ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
