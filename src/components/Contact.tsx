import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { SITE } from '../data/site';
import styles from './Contact.module.css';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const mapElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mapElRef.current;
    if (!el) return;

    const { lat, lng } = SITE.mapCenter;

    const map = L.map(el, {
      center: [lat, lng],
      zoom: 17,
      minZoom: 0,
      maxZoom: 19,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const pinSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="28" height="42" aria-hidden="true"><path fill="#c62828" d="M12 0C7.8 0 4 3.3 4 8c0 5.2 8 16 8 16s8-10.8 8-16c0-4.7-3.8-8-8-8z"/><circle fill="#fff" cx="12" cy="8" r="3"/></svg>';

    L.marker([lat, lng], {
      icon: L.divIcon({
        className: styles.markerWrap,
        html: pinSvg,
        iconSize: [28, 42],
        iconAnchor: [14, 42],
      }),
      title: SITE.name,
    })
      .addTo(map)
      .bindPopup(`<strong>${SITE.name}</strong><br />${SITE.address}`);

    return () => {
      map.remove();
    };
  }, []);

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
          <div
            ref={mapElRef}
            className={styles.mapRoot}
            aria-label={`Carte — ${SITE.name}, Agadir`}
          />
          <p className={styles.mapCaption}>
            Zoomez ou déplacez la carte (jusqu&apos;à la vue monde). L&apos;itinéraire et la fiche Google Maps du
            magasin s&apos;ouvrent via les liens ci-dessus ou ci-dessous.
          </p>
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
