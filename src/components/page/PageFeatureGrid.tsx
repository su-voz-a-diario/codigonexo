import { CheckCircle } from 'lucide-react';
import styles from './PageFeatureGrid.module.css';

interface Feature {
  title: string;
  description: string;
}

interface Props {
  features: Feature[];
}

export default function PageFeatureGrid({ features }: Props) {
  return (
    <ul className={styles.list}>
      {features.map((feature, idx) => (
        <li key={idx} className={styles.item}>
          <CheckCircle color="#10b981" size={24} className={styles.icon} />
          <div>
            <strong className={styles.title}>{feature.title}</strong>
            <p className={styles.desc}>{feature.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
