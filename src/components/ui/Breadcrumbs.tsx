'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(p => p);

  if (paths.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://codigonexo.com/"
      },
      ...paths.map((path, index) => {
        const url = `https://codigonexo.com/${paths.slice(0, index + 1).join('/')}`;
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
          "item": url
        };
      })
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.item}>
          <Link href="/" className={styles.link} aria-label="Inicio">
            <Home size={14} />
          </Link>
        </div>
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;
          const href = `/${paths.slice(0, index + 1).join('/')}`;
          const title = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');

          return (
            <div key={path} className={styles.item}>
              <ChevronRight size={14} className={styles.separator} />
              {isLast ? (
                <span className={styles.current} aria-current="page">{title}</span>
              ) : (
                <Link href={href} className={styles.link}>{title}</Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
