import styles from './PageHeader.module.css';

interface Props {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function PageHeader({ title, subtitle, align = 'center' }: Props) {
  return (
    <div className={`${styles.header} ${styles[align]}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line}></div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
