import styles from './PageContainer.module.css';

interface Props {
  children: React.ReactNode;
  width?: 'narrow' | 'default' | 'wide';
  className?: string;
}

export default function PageContainer({ children, width = 'default', className = '' }: Props) {
  return (
    <div className={`${styles.container} ${styles[width]} ${className}`}>
      {children}
    </div>
  );
}
