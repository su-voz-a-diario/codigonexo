import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './GlobalCTA.module.css';

interface Props {
  variant?: 'small' | 'large';
  onClick?: () => void;
  label?: string;
}

export default function GlobalCTA({ variant = 'small', onClick, label = 'Agendar Auditoría' }: Props) {
  return (
    <Link 
      href="/#contacto" 
      className={`${styles.cta} ${styles[variant]}`}
      onClick={onClick}
    >
      {label} <ArrowRight size={variant === 'small' ? 16 : 20} />
    </Link>
  );
}
