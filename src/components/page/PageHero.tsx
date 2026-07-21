import styles from './PageHero.module.css';
import PageContainer from './PageContainer';
import GlobalCTA from '../ui/GlobalCTA';

interface Props {
  title: string | React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  withCTA?: boolean;
}

export default function PageHero({ title, subtitle, align = 'center', withCTA = false }: Props) {
  return (
    <div className={`${styles.hero} ${styles[align]}`}>
      <PageContainer width={align === 'center' ? 'narrow' : 'default'}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {withCTA && (
          <div className={styles.actions}>
            <GlobalCTA variant="large" />
          </div>
        )}
      </PageContainer>
    </div>
  );
}
