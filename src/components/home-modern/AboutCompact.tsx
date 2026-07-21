import styles from './AboutCompact.module.css';

interface AboutCompactProps {
  title: string;
  body: string;
  highlights: string[];
}

export default function AboutCompact({ title, body, highlights }: AboutCompactProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.marker} aria-hidden="true">CN</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{body}</p>
        <ul className={styles.highlights}>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
