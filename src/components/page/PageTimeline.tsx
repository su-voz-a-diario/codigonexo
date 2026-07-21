import { LucideIcon } from 'lucide-react';
import styles from './PageTimeline.module.css';

interface Step {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface Props {
  steps: Step[];
}

export default function PageTimeline({ steps }: Props) {
  return (
    <div className={styles.timeline}>
      {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <div className={styles.markerContainer}>
            <div className={styles.marker}>
              {step.icon ? <step.icon size={18} /> : <span>{index + 1}</span>}
            </div>
            {index < steps.length - 1 && <div className={styles.connector}></div>}
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
