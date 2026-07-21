import GlobalCTA from '../ui/GlobalCTA';
import styles from './PageCTA.module.css';

interface Props {
  title: string;
  subtitle?: string;
}

export default function PageCTA({ title, subtitle }: Props) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <GlobalCTA variant="large" />
    </div>
  );
}
