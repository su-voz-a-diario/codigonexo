import styles from './TechStackStrip.module.css';

interface TechStackStripProps {
  label: string;
  items: string[];
}

export default function TechStackStrip({ label, items }: TechStackStripProps) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{label}</p>
      <ul className={styles.list} aria-label={label}>
        {items.map((item) => (
          <li key={item} className={styles.item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
