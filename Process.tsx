import Link from 'next/link';
import { site, announcement } from '@/lib/content';
import styles from './Header.module.css';

export function Header() {
  return (
    <>
      {announcement.show && (
        <div className={styles.announcement}>
          <div className="container">
            <strong>{announcement.label}</strong> {announcement.text}{' '}
            <Link href="/book-call">{announcement.cta}</Link>
          </div>
        </div>
      )}
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <Link href="/" className={styles.brand}>
              <span className={styles.mark}>G</span>
              <span>{site.name}</span>
            </Link>
            <div className={styles.links}>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/#results">Results</Link>
              <Link href="/#process">How it works</Link>
              <Link href="/#faq">FAQ</Link>
            </div>
            <div className={styles.cta}>
              <a href={`tel:${site.phoneRaw}`} className={styles.phone}>
                <span>☎</span>{site.phone}
              </a>
              <Link href="/book-call" className="btn btn-primary">Book free call</Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
