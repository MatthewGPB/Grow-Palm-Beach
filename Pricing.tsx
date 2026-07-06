import Link from 'next/link';
import { site } from '@/lib/content';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brandCol}>
              <Link href="/" className={styles.brand}>
                <span className={styles.mark}>G</span>
                <span>{site.name}</span>
              </Link>
              <p>
                AI-optimized websites and local marketing for Palm Beach businesses.
                When locals search for what you do, you should be the one they call.
              </p>
            </div>
            <div>
              <h5>Plans</h5>
              <ul>
                <li><Link href="/#pricing">Just a Website</Link></li>
                <li><Link href="/#pricing">Growth Plan</Link></li>
                <li><Link href="/#pricing">Full Growth</Link></li>
              </ul>
            </div>
            <div>
              <h5>Company</h5>
              <ul>
                <li><Link href="/#results">Results</Link></li>
                <li><Link href="/#faq">FAQ</Link></li>
                <li><Link href="/book-call">Book a call</Link></li>
              </ul>
            </div>
            <div>
              <h5>Get in touch</h5>
              <ul>
                <li><a href={`tel:${site.phoneRaw}`}>{site.phone}</a></li>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li>{site.address}</li>
              </ul>
            </div>
          </div>
          <div className={styles.bottom}>
            <div>© {new Date().getFullYear()} {site.name} · All rights reserved</div>
            <div>
              <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.mobileCta}>
        <Link href="/book-call" className="btn btn-primary">Book free 15-min call →</Link>
      </div>
    </>
  );
}
