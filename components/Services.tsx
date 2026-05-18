import Link from 'next/link';
import { services } from '@/lib/content';
import styles from './Services.module.css';

const icons: Record<string, React.ReactNode> = {
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m13 2-3 7h7l-9 13 3-9H4z" />
    </svg>
  ),
  window: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 4 5-5" />
    </svg>
  ),
};

export function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">What we do</span>
          <h2 className="section-title">Four ways we grow your business.</h2>
          <p className="section-sub">
            Pick one, mix several, or let us build a custom 90-day plan around your revenue goals.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={styles.card}>
              <div
                className={styles.icon}
                style={{ background: s.iconBg, color: s.iconColor }}
              >
                {icons[s.icon]}
              </div>
              <h3 className={styles.h3}>{s.title}</h3>
              <p className={styles.desc}>{s.description}</p>
              <ul className={styles.features}>
                {s.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <div className={styles.foot}>
                <div className={styles.price}>
                  {s.priceLabel && <span>{s.priceLabel}</span>}
                  <strong>{s.price}</strong>
                </div>
                <Link href="/book-call" className={styles.link}>Get details →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
