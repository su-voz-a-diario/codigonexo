import type { Metadata } from 'next';
import Link from 'next/link';
import PageContainer from '@/components/page/PageContainer';
import PageFeatureGrid from '@/components/page/PageFeatureGrid';
import PageGrid from '@/components/page/PageGrid';
import PageIconCard from '@/components/page/PageIconCard';
import PageSection from '@/components/page/PageSection';
import HomeHero from '@/components/home-modern/HomeHero';
import ProcessCards from '@/components/home-modern/ProcessCards';
import PortfolioPreviewGrid from '@/components/home-modern/PortfolioPreviewGrid';
import AboutCompact from '@/components/home-modern/AboutCompact';
import ContactSection from '@/components/home-modern/ContactSection';
import FloatingActions from '@/components/home-modern/FloatingActions';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'Código Nexo | Ingeniería de Software para Empresas',
  description: 'Código Nexo diseña, construye e integra software empresarial, plataformas web, automatizaciones y arquitectura cloud para operaciones que necesitan evolucionar con claridad técnica.',
  alternates: {
    canonical: 'https://codigonexo.mx/',
  },
  openGraph: {
    title: 'Código Nexo | Ingeniería de Software para Empresas',
    description: 'Soluciones de software, web, automatización, integraciones y cloud para entornos empresariales.',
    url: 'https://codigonexo.mx/',
    siteName: 'Código Nexo',
    type: 'website',
    images: [
      {
        url: 'https://codigonexo.mx/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Código Nexo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Código Nexo | Ingeniería de Software para Empresas',
    description: 'Soluciones de software, web, automatización, integraciones y cloud para entornos empresariales.',
    images: ['https://codigonexo.mx/assets/images/og-image.jpg'],
  },
};

const references = ['Su Voz a Diario', 'Club Colombia FC', 'Joga Bonito', 'Esdras'];

const technologies = ['Next.js', 'React', 'Node.js', 'Firebase', 'AWS', 'Python'];

const services = [
  {
    title: 'Desarrollo de software',
    text: 'Plataformas empresariales diseñadas para integrarse con procesos, datos y operación real.',
    href: '/servicios/desarrollo-software',
    icon: 'Code',
  },
  {
    title: 'Desarrollo web',
    text: 'Aplicaciones web rápidas, mantenibles y preparadas para crecer con el producto.',
    href: '/servicios/desarrollo-web',
    icon: 'Globe',
  },
  {
    title: 'APIs e integraciones',
    text: 'Conexión entre sistemas internos, SaaS, plataformas legacy y servicios externos.',
    href: '/servicios/apis-e-integraciones',
    icon: 'Network',
  },
  {
    title: 'Automatización',
    text: 'Flujos operativos que reducen trabajo manual y ayudan a ordenar procesos repetitivos.',
    href: '/servicios/automatizacion',
    icon: 'Bot',
  },
  {
    title: 'Arquitectura cloud',
    text: 'Infraestructura cloud con criterios de seguridad, continuidad y capacidad de evolución.',
    href: '/servicios/arquitectura-cloud',
    icon: 'Cloud',
  },
  {
    title: 'Consultoría tecnológica',
    text: 'Diagnóstico técnico para tomar mejores decisiones sobre arquitectura y deuda técnica.',
    href: '/servicios/consultoria-tecnologica',
    icon: 'Layers',
  },
] as const;

const processSteps = [
  {
    title: 'Arquitectura',
    description: 'Definimos estructura técnica, datos, integraciones y criterios de evolución antes de construir.',
  },
  {
    title: 'Desarrollo',
    description: 'Construimos de forma modular, con repositorios organizados y decisiones técnicas trazables.',
  },
  {
    title: 'Calidad y pruebas',
    description: 'Revisamos comportamiento, rendimiento, seguridad y experiencia en los flujos críticos.',
  },
  {
    title: 'Entrega y operación',
    description: 'Preparamos despliegue, documentación y acompañamiento para operar la solución con mayor claridad.',
  },
];

const advantages = [
  {
    title: 'Desarrollo ágil',
    description: 'Trabajamos por entregables claros para validar avance y ajustar prioridades durante el proyecto.',
  },
  {
    title: 'Soluciones ajustadas al proceso',
    description: 'Diseñamos software alrededor de necesidades operativas concretas, no alrededor de plantillas genéricas.',
  },
  {
    title: 'Acompañamiento técnico',
    description: 'Mantenemos comunicación directa para explicar decisiones, riesgos y alternativas de implementación.',
  },
  {
    title: 'Modelo flexible',
    description: 'Podemos estructurar el trabajo como desarrollo puntual o acompañamiento continuo según el alcance.',
  },
  {
    title: 'Código documentado',
    description: 'Entregamos una base técnica comprensible para facilitar mantenimiento y continuidad del proyecto.',
  },
  {
    title: 'Menor dependencia operativa',
    description: 'Automatizamos tareas y conectamos herramientas para reducir intervención manual innecesaria.',
  },
];

const portfolioItems = [
  {
    name: 'Integriti Test',
    category: 'Evaluación técnica',
    description: 'Plataforma orientada a gestionar evaluaciones y reportes dentro de procesos de talento.',
  },
  {
    name: 'Plataforma de Capacitación Sector Salud',
    category: 'Capacitación digital',
    description: 'LMS a la medida para organizar contenidos, seguimiento y emisión de certificados.',
  },
];

const aboutHighlights = [
  'Equipo compacto y enfocado en resultados.',
  'Comunicación directa durante el proyecto.',
  'Combinación de ingeniería de software y consultoría de procesos.',
];

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HomeHero
          eyebrow="Ingeniería de software empresarial"
          title="Software a la medida para operar, integrar y escalar con claridad técnica"
          description="En Código Nexo diseñamos plataformas web, aplicaciones, integraciones y automatizaciones para empresas que necesitan convertir procesos complejos en herramientas confiables."
          primaryCta={{ label: 'Solicitar revisión técnica', href: '#contacto' }}
          secondaryCta={{ label: 'Explorar servicios', href: '#servicios' }}
          brands={references}
          technologies={technologies}
        />

        <PageSection id="servicios" theme="darker">
          <PageContainer>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Servicios</p>
              <h2 className={styles.title}>Soluciones tecnológicas para proyectos que necesitan estructura</h2>
              <p className={styles.description}>
                Una selección de servicios modernos conectados con páginas reales del sitio. El catálogo completo está disponible para revisar cada línea de trabajo.
              </p>
            </div>
            <PageGrid columns={3}>
              {services.map((service) => (
                <Link key={service.href} href={service.href} className={styles.serviceLink}>
                  <PageIconCard icon={service.icon} title={service.title} text={service.text} />
                </Link>
              ))}
            </PageGrid>
            <div className={styles.sectionAction}>
              <Link href="/servicios/" className={styles.secondaryLink}>Ver todos los servicios</Link>
            </div>
          </PageContainer>
        </PageSection>

        <PageSection id="metodologia">
          <PageContainer>
            <div className={styles.sectionIntroLeft}>
              <p className={styles.eyebrow}>Metodología</p>
              <h2 className={styles.title}>Un proceso técnico para reducir incertidumbre</h2>
              <p className={styles.description}>
                El trabajo se organiza por etapas para entender el problema, construir con criterio y preparar la operación de la solución.
              </p>
            </div>
            <ProcessCards steps={processSteps} />
          </PageContainer>
        </PageSection>

        <PageSection theme="darker">
          <PageContainer>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Ventajas</p>
              <h2 className={styles.title}>Prácticas que hacen más mantenible el desarrollo</h2>
              <p className={styles.description}>
                Estas ventajas describen cómo abordamos los proyectos y qué tipo de acompañamiento técnico puede esperar un equipo.
              </p>
            </div>
            <PageFeatureGrid features={advantages} />
          </PageContainer>
        </PageSection>

        <PageSection id="portafolio">
          <PageContainer>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Portafolio</p>
              <h2 className={styles.title}>Referencias de proyectos mencionados</h2>
              <p className={styles.description}>
                Estos son proyectos y referencias que ya aparecían en el Home anterior. No se agregan métricas ni casos documentados adicionales en esta fase.
              </p>
            </div>
            <PortfolioPreviewGrid items={portfolioItems} />
          </PageContainer>
        </PageSection>

        <PageSection id="nosotros" theme="darker">
          <PageContainer>
            <div className={styles.sectionIntroLeft}>
              <p className={styles.eyebrow}>Nosotros</p>
              <h2 className={styles.title}>Un equipo compacto para proyectos donde importa la claridad técnica</h2>
            </div>
            <AboutCompact
              title="Código Nexo combina desarrollo de software y consultoría de procesos."
              body="Trabajamos con foco en resultados, evitando burocracia innecesaria y manteniendo comunicación directa para entender el negocio, las prioridades y las restricciones técnicas de cada proyecto."
              highlights={aboutHighlights}
            />
          </PageContainer>
        </PageSection>

        <PageSection id="contacto">
          <PageContainer>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Contacto</p>
              <h2 className={styles.title}>Revisemos tu proyecto con criterio técnico</h2>
              <p className={styles.description}>
                Comparte el contexto inicial y analizaremos la necesidad para identificar el siguiente paso.
              </p>
            </div>
            <ContactSection
              email="codigonexo.rgz@gmail.com"
              phoneLabel="+52 55 2905 8845"
              phoneHref="tel:525529058845"
              location="México / Colombia"
            />
          </PageContainer>
        </PageSection>
      </main>
      <FloatingActions whatsappHref="https://wa.me/525529058845?text=Hola%20CódigoNexo,%20me%20interesa%20una%20solución%20digital." />
    </>
  );
}
