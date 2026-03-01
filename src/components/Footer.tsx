import { useState } from 'react';
import type { FormEvent } from 'react';
import { SITE } from '../data/site';
import styles from './Footer.module.css';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.name}>{SITE.name}</span>
            <span className={styles.tagline}>{SITE.tagline}</span>
            <p className={styles.slogan}>Votre vision, notre soin.</p>
          </div>
          <div className={styles.links}>
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
            <p className={styles.address}>{SITE.address}</p>
            <div className={styles.social}>
              <a href="https://web.facebook.com/p/EZZA-optique-100046585196648/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                Facebook
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                Instagram
              </a>
            </div>
          </div>
          <div className={styles.newsletter}>
            <h3 className={styles.newsletterTitle}>Newsletter</h3>
            {subscribed ? (
              <p className={styles.newsletterSuccess}>Merci pour votre inscription.</p>
            ) : (
              <form onSubmit={handleNewsletter} className={styles.newsletterForm}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className={styles.newsletterInput}
                  required
                />
                <button type="submit" className={styles.newsletterBtn}>
                  S&apos;inscrire
                </button>
              </form>
            )}
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.legal}>
            © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
          </p>
          <a href="#mentions" className={styles.legalLink}>Mentions légales</a>
        </div>
      </div>
    </footer>
  );
}
