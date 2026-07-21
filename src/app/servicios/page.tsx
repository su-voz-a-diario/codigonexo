import type { Metadata } from 'next';
import Link from 'next/link';
import type * as LucideIcons from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageHero from '@/components/page/PageHero';
import PageSection from '@/components/page/PageSection';
import PageContainer from '@/components/page/PageContainer';
import PageGrid from '@/components/page/PageGrid';
import PageIconCard from '@/components/page/PageIconCard';
import PageCTA from '@/components/page/PageCTA';
import { navigationConfig } from '@/config/navigation';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Servicios de Ingeniería de Software | CódigoNexo',
  description: 'Índice de servicios publicados de CódigoNexo: desarrollo de software, web, móvil, integraciones, automatización, cloud, DevOps, IA y consultoría.',
  alternates: {
    canonical: 'https://codigonexo.mx/servicios',
  },
};

export default function ServiciosPage() {
  return (
    <main>
      <Breadcrumbs />

      <PageHero
        title="Servicios de Ingeniería de Software"
        subtitle="Soluciones publicadas para diseñar, construir, integrar, modernizar y operar software empresarial."
      />

      <PageSection>
        <PageContainer>
          <PageGrid columns={3}>
            {navigationConfig.servicesIndex.map((service) => (
              <Link key={service.href} href={service.href} className={styles.serviceLink}>
                <PageIconCard
                  icon={service.icon as keyof typeof LucideIcons}
                  title={service.title}
                  text={service.description}
                />
              </Link>
            ))}
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer width="narrow">
          <PageCTA
            title="¿Necesitas priorizar una iniciativa?"
            subtitle="Revisemos el contexto del proyecto y definamos qué servicio corresponde a la necesidad actual."
            ctaLabel="Solicitar orientación técnica"
            microcopy="Analizaremos tu caso y coordinaremos una conversación para identificar la ruta más adecuada."
          />
        </PageContainer>
      </PageSection>
    </main>
  );
}
