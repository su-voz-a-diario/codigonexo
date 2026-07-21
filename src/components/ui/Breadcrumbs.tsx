'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import styles from './Breadcrumbs.module.css';

const SITE_URL = 'https://codigonexo.mx';

const routeLabels: Record<string, string> = {
  servicios: 'Servicios',
  nosotros: 'Nosotros',
  metodologia: 'Metodología',
  proceso: 'Proceso',
  tecnologias: 'Tecnologías',
  proyectos: 'Proyectos destacados',
  'su-voz-a-diario': 'Su Voz a Diario',
  'club-colombia-fc': 'Club Colombia FC',
  recursos: 'Centro de Conocimiento',
  'cuanto-cuesta-desarrollar-software-a-medida': '¿Cuánto cuesta desarrollar software a medida?',
  'cuando-conviene-modernizar-un-sistema-legacy': '¿Cuándo conviene modernizar un sistema legacy?',
  'como-elegir-empresa-desarrollo-software': 'Cómo elegir una empresa de desarrollo de software',
  'aplicaciones-web-vs-aplicaciones-moviles': 'Aplicaciones Web vs Aplicaciones Móviles',
  diagnostico: 'Diagnóstico tecnológico',
  trust: 'Trust',
  'seguridad-compliance': 'Seguridad y Compliance',
  'desarrollo-software': 'Desarrollo de software',
  'desarrollo-web': 'Desarrollo web',
  'desarrollo-movil': 'Desarrollo móvil',
  'desarrollo-a-la-medida': 'Desarrollo a la medida',
  'apis-e-integraciones': 'APIs e integraciones',
  automatizacion: 'Automatización',
  'arquitectura-cloud': 'Arquitectura cloud',
  devops: 'DevOps',
  'inteligencia-artificial': 'Inteligencia artificial',
  'modernizacion-legacy': 'Modernización legacy',
  'consultoria-tecnologica': 'Consultoría tecnológica',
};

const linkableBreadcrumbs = new Set([
  '/',
  '/nosotros/',
  '/metodologia/',
  '/proceso/',
  '/tecnologias/',
  '/proyectos/',
  '/proyectos/su-voz-a-diario/',
  '/proyectos/club-colombia-fc/',
  '/recursos/',
  '/recursos/cuanto-cuesta-desarrollar-software-a-medida/',
  '/recursos/cuando-conviene-modernizar-un-sistema-legacy/',
  '/recursos/como-elegir-empresa-desarrollo-software/',
  '/recursos/aplicaciones-web-vs-aplicaciones-moviles/',
  '/diagnostico/',
  '/servicios/',
  '/servicios/desarrollo-software/',
  '/servicios/desarrollo-web/',
  '/servicios/desarrollo-movil/',
  '/servicios/desarrollo-a-la-medida/',
  '/servicios/apis-e-integraciones/',
  '/servicios/automatizacion/',
  '/servicios/arquitectura-cloud/',
  '/servicios/devops/',
  '/servicios/inteligencia-artificial/',
  '/servicios/modernizacion-legacy/',
  '/servicios/consultoria-tecnologica/',
  '/trust/seguridad-compliance/',
]);

function getLabel(path: string) {
  return routeLabels[path] ?? path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
}

function withTrailingSlash(href: string) {
  return href.endsWith('/') ? href : `${href}/`;
}

function getLinkableHref(href: string) {
  return linkableBreadcrumbs.has(href) ? href : null;
}

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
        "item": `${SITE_URL}/`
      },
      ...paths.map((path, index) => {
        const href = withTrailingSlash(`/${paths.slice(0, index + 1).join('/')}`);
        const itemHref = getLinkableHref(href);
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": getLabel(path),
          ...(itemHref ? { "item": `${SITE_URL}${itemHref}` } : {})
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
          const href = withTrailingSlash(`/${paths.slice(0, index + 1).join('/')}`);
          const linkableHref = getLinkableHref(href);
          const title = getLabel(path);

          return (
            <div key={path} className={styles.item}>
              <ChevronRight size={14} className={styles.separator} />
              {isLast ? (
                <span className={styles.current} aria-current="page">{title}</span>
              ) : linkableHref ? (
                <Link href={linkableHref} className={styles.link}>{title}</Link>
              ) : (
                <span className={styles.current}>{title}</span>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
