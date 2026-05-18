import Link from 'next/link';
import { site } from '@/lib/content';
import styles from './CTA.module.css';

export function CTA() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.h2}>
            Ready to <em>3x your leads</em> in the next 90 days?
          </h2>
          <p className={styles.sub}>
            Book a free 30-minute strategy call with Matthew. Walk away with a clear plan — whether you hire us or not.
          </p>
          <div className={styles.actions}>
            <Link href="/book-call" className="btn btn-primary">Book free strategy call →</Link>
            <a href={`tel:${site.phoneRaw}`} className="btn btn-light">Call {site.phone}</a>
          </div>
          <div className={styles.meta}>
            <span>No pitch deck</span>
            <span>No obligation</span>
            <span>Real strategy on the call</span>
          </div>
        </div>
      </div>
    </section>
  );
}
