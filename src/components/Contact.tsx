import { useState } from 'react';
import type { FormEvent } from 'react';
import { SITE } from '../data/site';
import styles from './Contact.module.css';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading" className={styles.heading}>
          Contact & Localisation
        </h2>

        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>📍 Adresse</h3>
              <p className={styles.address}>{SITE.address}</p>
              <a
                href={SITE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                Voir sur la carte / Itinéraire
              </a>
            </div>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>📞 Téléphone</h3>
              <a href={`tel:${SITE.phoneRaw}`} className={styles.phone}>
                {SITE.phone}
              </a>
              <span className={styles.hint}>Cliquez pour appeler</span>
            </div>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>🕐 Horaires</h3>
              <p className={styles.hours}>{SITE.openingHours}</p>
            </div>
          </div>

          <div className={styles.formWrap}>
            <h3 className={styles.formTitle}>Nous envoyer un message</h3>
            {sent ? (
              <p className={styles.success}>
                Merci ! Votre message a bien été envoyé. Nous vous recontacterons rapidement.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>
                  <span>Nom</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className={styles.input}
                    placeholder="Votre nom"
                  />
                </label>
                <label className={styles.label}>
                  <span>Email</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={styles.input}
                    placeholder="votre@email.com"
                  />
                </label>
                <label className={styles.label}>
                  <span>Message</span>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className={styles.textarea}
                    placeholder="Votre message ou demande de rendez-vous..."
                    rows={4}
                  />
                </label>
                <button type="submit" className={styles.submit}>
                  Envoyer
                </button>
              </form>
            )}
          </div>
        </div>

        <div className={styles.mapWrap}>
          <iframe
            title="Ezza Optique sur Google Maps"
            src="https://maps.google.com/maps?q=Ezza+Optique+Agadir&output=embed&z=17"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: 'var(--radius)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={SITE.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsBtn}
          >
            Obtenir l&apos;itinéraire
          </a>
        </div>
      </div>
    </section>
  );
}
