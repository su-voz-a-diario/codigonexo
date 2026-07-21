import styles from './PageSection.module.css';

interface Props {
  id?: string;
  children: React.ReactNode;
  theme?: 'dark' | 'darker' | 'transparent';
  spacing?: 'default' | 'none' | 'large';
  className?: string;
}

export default function PageSection({ id, children, theme = 'dark', spacing = 'default', className = '' }: Props) {
  return (
    <section id={id} className={`${styles.section} ${styles[theme]} ${styles[`space-${spacing}`]} ${className}`}>
      {children}
    </section>
  );
}
