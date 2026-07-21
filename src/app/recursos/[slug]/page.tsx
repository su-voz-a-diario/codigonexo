import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageHero from '@/components/page/PageHero';
import PageSection from '@/components/page/PageSection';
import PageContainer from '@/components/page/PageContainer';
import PageHeader from '@/components/page/PageHeader';
import PageFAQ from '@/components/page/PageFAQ';
import PageCTA from '@/components/page/PageCTA';
import { getResourceBySlug, resourceArticles } from '@/data/resources';
import styles from '../page.module.css';

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return resourceArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceBySlug(slug);

  if (!article) {
    return {
      title: 'Recurso no encontrado | Código Nexo',
    };
  }

  const url = `https://codigonexo.mx/recursos/${article.slug}`;

  return {
    title: article.seo.title,
    description: article.seo.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      url,
      type: 'article',
    },
  };
}

export default async function RecursoDetallePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const article = getResourceBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs />

      <PageHero
        title={article.title}
        subtitle={article.summary}
        withCTA
        ctaLabel={article.cta.label}
        microcopy={article.cta.microcopy}
      />

      <PageSection>
        <PageContainer>
          <div className={styles.articleLayout}>
            <article className={styles.articleContent}>
              <section className={styles.articleBlock} aria-labelledby="introduccion">
                <h2 id="introduccion" className={styles.articleBlockTitle}>Introducción</h2>
                {article.intro.map((paragraph) => (
                  <p key={paragraph} className={styles.articleText}>{paragraph}</p>
                ))}
              </section>

              {article.sections.map((section, index) => {
                const sectionId = `seccion-${index + 1}`;

                return (
                <section key={section.title} className={styles.articleBlock} aria-labelledby={sectionId}>
                  <h2 id={sectionId} className={styles.articleBlockTitle}>{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className={styles.articleText}>{paragraph}</p>
                  ))}
                </section>
                );
              })}

              <section className={styles.articleBlock} aria-labelledby="conclusiones">
                <h2 id="conclusiones" className={styles.articleBlockTitle}>Conclusiones</h2>
                {article.conclusion.map((paragraph) => (
                  <p key={paragraph} className={styles.articleText}>{paragraph}</p>
                ))}
              </section>
            </article>

            <aside className={styles.articleAside} aria-label="Información del artículo">
              <h2 className={styles.asideTitle}>Información</h2>
              <p className={styles.asideText}>{article.category}</p>
              <p className={styles.asideText}>{article.readTime} de lectura</p>
              <ul className={styles.asideList}>
                <li>Introducción</li>
                {article.sections.map((section) => (
                  <li key={section.title}>{section.title}</li>
                ))}
                <li>Conclusiones</li>
              </ul>
            </aside>
          </div>
        </PageContainer>
      </PageSection>

      {article.faqs && article.faqs.length > 0 && (
        <PageSection theme="darker">
          <PageContainer>
            <PageHeader title="Preguntas frecuentes" />
            <PageFAQ faqs={article.faqs} />
          </PageContainer>
        </PageSection>
      )}

      <PageCTA
        title={article.cta.title}
        subtitle={article.cta.subtitle}
        ctaLabel={article.cta.label}
        microcopy={article.cta.microcopy}
      />
    </main>
  );
}
