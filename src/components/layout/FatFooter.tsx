import Link from 'next/link';
import { navigationConfig } from '@/config/navigation';
import styles from './FatFooter.module.css';

export default function FatFooter() {
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
          {navigationConfig.footerNav.servicios.map(link => (
            <Link key={link.href} href={link.href} className={styles.link}>{link.title}</Link>
          ))}
        </div>

        <div className={styles.column}>
          <div className={styles.title}>Soluciones</div>
          {navigationConfig.footerNav.soluciones.map(link => (
            <Link key={link.href} href={link.href} className={styles.link}>{link.title}</Link>
          ))}
        </div>

        <div className={styles.column}>
          <div className={styles.title}>Empresa</div>
          {navigationConfig.footerNav.empresa.map(link => (
            <Link key={link.href} href={link.href} className={styles.link}>{link.title}</Link>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} CódigoNexo. Todos los derechos reservados.
        </div>
        <div className={styles.legal}>
          {navigationConfig.footerNav.legal.map(link => (
            <Link key={link.href} href={link.href} className={styles.link}>{link.title}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
