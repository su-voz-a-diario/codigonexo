import styles from './PortfolioPreviewGrid.module.css';

interface PortfolioItem {
  name: string;
  category: string;
  description: string;
}

interface PortfolioPreviewGridProps {
  items: PortfolioItem[];
}

export default function PortfolioPreviewGrid({ items }: PortfolioPreviewGridProps) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article key={item.name} className={styles.card}>
          <div className={styles.visual} aria-hidden="true">
            <span>{item.name.slice(0, 2).toUpperCase()}</span>
          </div>
          <div className={styles.content}>
            <span className={styles.category}>{item.category}</span>
            <h3 className={styles.title}>{item.name}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
