import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageHero from '@/components/page/PageHero';
import PageSection from '@/components/page/PageSection';
import PageContainer from '@/components/page/PageContainer';
import PageHeader from '@/components/page/PageHeader';
import PageGrid from '@/components/page/PageGrid';
import PageCTA from '@/components/page/PageCTA';
import { resourceArticles, resourceCategories } from '@/data/resources';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Centro de Conocimiento | Código Nexo',
  description: 'Recursos técnicos y guías prácticas de Código Nexo para empresas que evalúan desarrollo de software, modernización y transformación digital.',
  alternates: {
    canonical: 'https://codigonexo.mx/recursos',
  },
  openGraph: {
    title: 'Centro de Conocimiento | Código Nexo',
    description: 'Guías profesionales para entender costos, modernización, selección de proveedores y decisiones de arquitectura digital.',
    url: 'https://codigonexo.mx/recursos',
    type: 'website',
  },
};

export default function RecursosPage() {
  return (
    <main>
      <Breadcrumbs />

      <PageHero
        title="Centro de Conocimiento"
        subtitle="Guías técnicas y comerciales para tomar mejores decisiones antes de construir, modernizar o contratar software empresarial."
        withCTA
        ctaLabel="Solicitar diagnóstico tecnológico"
        microcopy="Revisaremos tu caso y coordinaremos una conversación técnica para aclarar alcance, riesgos y prioridades."
      />

      <PageSection>
        <PageContainer>
          <PageHeader
            title="Recursos para decidir con más claridad"
            subtitle="Este centro reúne artículos pensados para empresarios, directores y equipos que necesitan entender implicaciones reales antes de invertir en tecnología."
          />
          <div className={styles.categoryList} aria-label="Categorías del Centro de Conocimiento">
            {resourceCategories.map((category) => (
              <span key={category} className={styles.categoryPill}>{category}</span>
            ))}
          </div>
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Artículos iniciales" />
          <PageGrid columns={2}>
            {resourceArticles.map((article) => (
              <Link key={article.slug} href={`/recursos/${article.slug}`} className={styles.articleLink}>
                <article className={styles.articleCard}>
                  <div className={styles.articleMeta}>
                    <span className={styles.categoryPill}>{article.category}</span>
                    <span className={styles.readTime}>{article.readTime} de lectura</span>
                  </div>
                  <h2 className={styles.articleTitle}>{article.title}</h2>
                  <p className={styles.articleSummary}>{article.summary}</p>
                  <span className={styles.linkText}>Leer artículo</span>
                </article>
              </Link>
            ))}
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageCTA
        title="¿Necesitas aterrizar una decisión tecnológica?"
        subtitle="Podemos revisar tu contexto y ayudarte a definir si conviene construir, modernizar, automatizar o integrar."
        ctaLabel="Solicitar diagnóstico tecnológico"
        microcopy="Analizaremos tu caso y coordinaremos una llamada técnica para revisar objetivos y restricciones."
      />
    </main>
  );
}
