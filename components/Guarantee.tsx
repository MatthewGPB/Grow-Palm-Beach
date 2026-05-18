import { guarantee } from '@/lib/content';
import styles from './Guarantee.module.css';

export function Guarantee() {
  return (
    <section className={styles.guarantee}>
      <div className="container">
        <div className={styles.badge}>
          <div>
            <span>{guarantee.badgeTop}</span>
            {guarantee.badgeBottom}
          </div>
        </div>
        <h2 className="section-title">{guarantee.title}</h2>
        <p className={styles.body}>{guarantee.body}</p>
        <ul className={styles.points}>
          {guarantee.points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    </section>
  );
}
