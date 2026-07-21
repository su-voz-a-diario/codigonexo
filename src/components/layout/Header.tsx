'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import MegaMenuDesktop from './MegaMenuDesktop';
import NavigationMobile from './NavigationMobile';
import GlobalCTA from '../ui/GlobalCTA';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <Link href="/" className={styles.logo}>CódigoNexo.</Link>
        <MegaMenuDesktop />
        <div className={styles.actions}>
          <GlobalCTA variant="small" />
          <button className={styles.menuButton} onClick={() => setIsMobileOpen(true)} aria-label="Abrir menú">
            <Menu size={24} />
          </button>
        </div>
      </header>
      <NavigationMobile isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
