'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import styles from './FloatingActions.module.css';

interface FloatingActionsProps {
  whatsappHref: string;
}

export default function FloatingActions({ whatsappHref }: FloatingActionsProps) {
  const [showTop, setShowTop] = useState(false);
  const showTopRef = useRef(false);

  useEffect(() => {
    const updateVisibility = () => {
      const nextShowTop = window.scrollY > 400;

      if (showTopRef.current !== nextShowTop) {
        showTopRef.current = nextShowTop;
        setShowTop(nextShowTop);
      }
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className={styles.actions} aria-label="Acciones rápidas">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.action}
        aria-label="Chat en WhatsApp"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>
      {showTop && (
        <button
          type="button"
          className={styles.action}
          aria-label="Volver arriba"
          onClick={scrollToTop}
        >
          <ArrowUp size={24} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
