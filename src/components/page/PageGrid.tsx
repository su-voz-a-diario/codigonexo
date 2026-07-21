import styles from './PageGrid.module.css';

interface Props {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function PageGrid({ children, columns = 3, gap = 'md', className = '' }: Props) {
  return (
    <div className={`${styles.grid} ${styles[`cols-${columns}`]} ${styles[`gap-${gap}`]} ${className}`}>
      {children}
    </div>
  );
}
