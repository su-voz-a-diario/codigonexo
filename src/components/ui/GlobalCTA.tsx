import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './GlobalCTA.module.css';

interface Props {
  variant?: 'small' | 'large';
  onClick?: () => void;
}

export default function GlobalCTA({ variant = 'small', onClick }: Props) {
  return (
    <Link 
      href="/contacto" 
      className={`${styles.cta} ${styles[variant]}`}
      onClick={onClick}
    >
      Agendar Auditoría <ArrowRight size={variant === 'small' ? 16 : 20} />
    </Link>
  );
}
