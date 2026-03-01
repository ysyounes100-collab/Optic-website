import styles from './Services.module.css';

const SERVICES = [
  { title: 'Examen de la vue', desc: 'Bilan visuel complet et prescription adaptée.' },
  { title: 'Lunettes sur mesure', desc: 'Montures et verres de qualité pour une vision optimale.' },
  { title: 'Lunettes de soleil', desc: 'Protection UV et large choix de modèles.' },
  { title: 'Lentilles de contact', desc: 'Conseil et suivi pour le port de lentilles.' },
];

export function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <h2 id="services-heading" className={styles.heading}>
          Nos services
        </h2>
        <p className={styles.subheading}>
          Une offre complète pour prendre soin de votre vision à Agadir.
        </p>
        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <article key={s.title} className={styles.card}>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
