import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageHero from '@/components/page/PageHero';
import PageSection from '@/components/page/PageSection';
import PageContainer from '@/components/page/PageContainer';
import PageHeader from '@/components/page/PageHeader';
import PageGrid from '@/components/page/PageGrid';
import PageIconCard from '@/components/page/PageIconCard';
import PageFeatureGrid from '@/components/page/PageFeatureGrid';
import PageTimeline from '@/components/page/PageTimeline';
import PageCTA from '@/components/page/PageCTA';
import { featuredProjects, getProjectBySlug } from '@/data/projects';
import styles from '../page.module.css';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado | Código Nexo',
    };
  }

  const title = `${project.name} | Proyecto Destacado | Código Nexo`;
  const description = project.summary;
  const url = `https://codigonexo.mx/proyectos/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
  };
}

export default async function ProyectoDetallePage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs />

      <PageHero
        title={project.name}
        subtitle={project.description}
        withCTA
        ctaLabel="Solicitar revisión técnica"
        microcopy="Revisaremos tu caso y coordinaremos una conversación técnica para entender si requiere una aplicación, plataforma administrativa o integración."
      />

      <PageSection>
        <PageContainer>
          <PageHeader
            title="Descripción general"
            subtitle={`${project.type}. ${project.status}`}
          />
          <PageGrid columns={2}>
            <article className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>{project.problemTitle}</h2>
              <p className={styles.infoText}>{project.problem}</p>
            </article>
            <article className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>{project.solutionTitle}</h2>
              <p className={styles.infoText}>{project.solution}</p>
            </article>
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Características principales" />
          <PageFeatureGrid features={project.features} />
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer>
          <PageHeader title="Arquitectura" subtitle={project.architecture} />
          <PageGrid columns={3}>
            {project.highlights.map((highlight) => (
              <PageIconCard
                key={highlight.title}
                icon="CheckCircle"
                title={highlight.title}
                text={highlight.description}
              />
            ))}
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Tecnologías utilizadas" />
          <div className={styles.techGrid}>
            {project.technologyGroups.map((group) => (
              <article key={group.category} className={styles.techGroup}>
                <h2 className={styles.techTitle}>{group.category}</h2>
                <ul className={styles.techItems}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer>
          <PageHeader title="Aspectos técnicos relevantes" />
          <PageTimeline steps={project.timeline} />
        </PageContainer>
      </PageSection>

      <PageCTA
        title="¿Necesitas una solución con un alcance similar?"
        subtitle="Podemos revisar tu operación, sistemas actuales y objetivos para definir una ruta de implementación realista."
        ctaLabel="Solicitar revisión técnica"
        microcopy="Analizaremos tu caso y coordinaremos una llamada técnica para revisar alcance, dependencias y prioridades."
      />
    </main>
  );
}
