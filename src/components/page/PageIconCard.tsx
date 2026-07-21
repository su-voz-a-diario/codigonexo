import * as LucideIcons from 'lucide-react';
import styles from './PageIconCard.module.css';

interface Props {
  title: string;
  text: string;
  icon: keyof typeof LucideIcons;
}

export default function PageIconCard({ title, text, icon }: Props) {
  const IconComponent = LucideIcons[icon] as React.ElementType;

  return (
    <div className={styles.card}>
      {IconComponent && <IconComponent size={32} className={styles.icon} />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
