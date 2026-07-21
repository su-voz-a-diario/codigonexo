import Link from 'next/link';
import { navigationConfig } from '@/config/navigation';
import styles from './FatFooter.module.css';

export default function FatFooter() {
  const { footerNav } = navigationConfig;

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <div className={styles.logo}>CódigoNexo.</div>
          <p className={styles.tagline}>
            Ingeniería de software de clase mundial para empresas que exigen excelencia.
          </p>
        </div>
        
        <div className={styles.column}>
          <div className={styles.title}>Servicios</div>
          {footerNav.servicios.map(link => (
            <Link key={link.href} href={link.href} className={styles.link}>{link.title}</Link>
          ))}
        </div>

        <div className={styles.column}>
          <div className={styles.title}>Empresa</div>
          {footerNav.empresa.map(link => (
            <Link key={link.href} href={link.href} className={styles.link}>{link.title}</Link>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} CódigoNexo. Todos los derechos reservados.
        </div>
        {footerNav.legal.length > 0 && (
          <div className={styles.legal}>
            {footerNav.legal.map(link => (
              <Link key={link.href} href={link.href} className={styles.link}>{link.title}</Link>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
