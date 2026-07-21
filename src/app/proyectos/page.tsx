import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageHero from '@/components/page/PageHero';
import PageSection from '@/components/page/PageSection';
import PageContainer from '@/components/page/PageContainer';
import PageHeader from '@/components/page/PageHeader';
import PageGrid from '@/components/page/PageGrid';
import PageCTA from '@/components/page/PageCTA';
import { featuredProjects } from '@/data/projects';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Proyectos Destacados | Código Nexo',
  description: 'Proyectos destacados desarrollados por Código Nexo: documentación técnica y comercial de soluciones reales construidas para clientes y comunidades.',
  alternates: {
    canonical: 'https://codigonexo.mx/proyectos',
  },
  openGraph: {
    title: 'Proyectos Destacados | Código Nexo',
    description: 'Casos reales de software, plataformas administrativas, aplicaciones móviles, PWA e integraciones desarrolladas por Código Nexo.',
    url: 'https://codigonexo.mx/proyectos',
    type: 'website',
  },
};

export default function ProyectosPage() {
  return (
    <main>
      <Breadcrumbs />

      <PageHero
        title="Proyectos Destacados"
        subtitle="Una selección de proyectos reales desarrollados por Código Nexo, presentados con contexto técnico, alcance funcional y estado actual."
        withCTA
        ctaLabel="Solicitar revisión técnica"
        microcopy="Revisaremos tu caso y coordinaremos una conversación técnica para entender el proyecto, sus restricciones y posibles rutas de trabajo."
      />

      <PageSection>
        <PageContainer>
          <PageHeader
            title="Documentación de proyectos reales"
            subtitle="Estos proyectos muestran cómo se aplican decisiones de arquitectura, desarrollo, operación y producto en necesidades concretas."
          />
          <PageGrid columns={2}>
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/proyectos/${project.slug}`}
                className={styles.projectLink}
              >
                <article className={styles.projectCard}>
                  <div className={styles.meta}>
                    <span className={styles.pill}>{project.type}</span>
                    <span className={styles.status}>{project.status}</span>
                  </div>
                  <h2 className={styles.projectTitle}>{project.name}</h2>
                  <p className={styles.projectDescription}>{project.summary}</p>
                  <div className={styles.techList} aria-label={`Tecnologías principales de ${project.name}`}>
                    {project.mainTechnologies.map((technology) => (
                      <span key={technology} className={styles.techPill}>{technology}</span>
                    ))}
                  </div>
                  <span className={styles.linkText}>Ver proyecto</span>
                </article>
              </Link>
            ))}
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageCTA
        title="¿Quieres documentar o construir una plataforma similar?"
        subtitle="Podemos revisar el contexto técnico y definir una ruta clara para una aplicación, plataforma administrativa o integración."
        ctaLabel="Solicitar revisión técnica"
        microcopy="Analizaremos tu caso y coordinaremos una llamada para revisar objetivos, alcance y restricciones."
      />
    </main>
  );
}
