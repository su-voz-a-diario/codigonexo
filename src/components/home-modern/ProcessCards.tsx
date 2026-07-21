import styles from './ProcessCards.module.css';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessCardsProps {
  steps: ProcessStep[];
}

export default function ProcessCards({ steps }: ProcessCardsProps) {
  return (
    <div className={styles.grid}>
      {steps.map((step, index) => (
        <article key={step.title} className={styles.card}>
          <div className={styles.number}>{String(index + 1).padStart(2, '0')}</div>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.description}>{step.description}</p>
        </article>
      ))}
    </div>
  );
}
