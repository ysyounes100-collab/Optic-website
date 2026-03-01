import { useState, useEffect } from 'react';
import { SITE, NAV_LINKS } from '../data/site';
import styles from './Header.module.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#accueil" className={styles.logo}>
          <span className={styles.logoName}>{SITE.name}</span>
          <span className={styles.logoTagline}>{SITE.tagline}</span>
        </a>

        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`} aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.ctaMobile}>
            <a href={`tel:${SITE.phoneRaw}`} className={styles.phoneLink} onClick={() => setMobileOpen(false)}>
              {SITE.phone}
            </a>
            <a href="#contact" className={styles.btnPrimary} onClick={() => setMobileOpen(false)}>
              Prendre Rendez-vous
            </a>
          </div>
        </nav>

        <div className={styles.cta}>
          <a href={`tel:${SITE.phoneRaw}`} className={styles.phoneLink}>
            {SITE.phone}
          </a>
          <a href="#contact" className={styles.btnPrimary}>
            Prendre Rendez-vous
          </a>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
