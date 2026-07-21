'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { navigationConfig } from '@/config/navigation';
import GlobalCTA from '../ui/GlobalCTA';
import styles from './NavigationMobile.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationMobile({ isOpen, onClose }: Props) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div
      className={`${styles.drawer} ${isOpen ? styles.open : ''}`}
      role="dialog"
      aria-modal={isOpen ? true : undefined}
      aria-hidden={!isOpen}
      inert={!isOpen ? true : undefined}
    >
      <div className={styles.header}>
        <div className={styles.logo}>CódigoNexo.</div>
        <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar menú" type="button">
          <X size={24} />
        </button>
      </div>

      <div className={styles.content}>
        {navigationConfig.mainNav.map((section) => (
          <div key={section.title}>
            <div className={styles.sectionTitle}>{section.title}</div>
            <div className={styles.linkList}>
              {section.items.map((item) => (
                <Link key={item.title} href={item.href} className={styles.link} onClick={onClose}>
                  <item.icon size={20} className={styles.linkIcon} />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <GlobalCTA variant="large" onClick={onClose} />
      </div>
    </div>
  );
}
