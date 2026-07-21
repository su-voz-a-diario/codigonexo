import styles from './PageSection.module.css';

interface Props {
  children: React.ReactNode;
  theme?: 'dark' | 'darker' | 'transparent';
  spacing?: 'default' | 'none' | 'large';
  className?: string;
}

export default function PageSection({ children, theme = 'dark', spacing = 'default', className = '' }: Props) {
  return (
    <section className={`${styles.section} ${styles[theme]} ${styles[`space-${spacing}`]} ${className}`}>
      {children}
    </section>
  );
}
