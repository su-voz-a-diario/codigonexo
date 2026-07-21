import styles from './LogoCloud.module.css';

interface LogoCloudProps {
  label: string;
  items: string[];
}

export default function LogoCloud({ label, items }: LogoCloudProps) {
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
