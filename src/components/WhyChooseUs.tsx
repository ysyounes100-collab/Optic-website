import { WHY_US } from '../data/site';
import styles from './WhyChooseUs.module.css';

export function WhyChooseUs() {
  return (
    <section id="a-propos" className={styles.section} aria-labelledby="why-heading">
      <div className="container">
        <h2 id="why-heading" className={styles.heading}>
          Pourquoi nous choisir
        </h2>
        <ul className={styles.list}>
          {WHY_US.map((item, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.check} aria-hidden>✔️</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
