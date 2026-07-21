'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { navigationConfig } from '@/config/navigation';
import styles from './MegaMenuDesktop.module.css';

export default function MegaMenuDesktop() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {navigationConfig.mainNav.map((section) => (
        <div key={section.title} className={styles.item}>
          <button className={`${styles.trigger} ${pathname.includes(section.title.toLowerCase()) ? styles.active : ''}`}>
            {section.title} <ChevronDown size={14} />
          </button>
          
          <div className={styles.dropdown}>
            <div className={styles.dropdownGrid}>
              {section.items.map((item) => (
                <Link key={item.title} href={item.href} className={styles.dropdownLink}>
                  <div className={styles.iconWrapper}>
                    <item.icon size={20} />
                  </div>
                  <div className={styles.linkText}>
                    <span className={styles.linkTitle}>{item.title}</span>
                    <span className={styles.linkDesc}>{item.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
}
