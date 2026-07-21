import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageHero from '@/components/page/PageHero';
import PageSection from '@/components/page/PageSection';
import PageContainer from '@/components/page/PageContainer';
import PageHeader from '@/components/page/PageHeader';
import PageGrid from '@/components/page/PageGrid';
import PageIconCard from '@/components/page/PageIconCard';
import PageCTA from '@/components/page/PageCTA';
import DiagnosticTool from './DiagnosticTool';

export const metadata: Metadata = {
  title: 'Diagnóstico Tecnológico Gratuito | Código Nexo',
  description: 'Evalúa de forma orientativa el estado de tu plataforma tecnológica: infraestructura, software, procesos, seguridad, escalabilidad y mantenimiento.',
  alternates: {
    canonical: 'https://codigonexo.mx/diagnostico',
  },
  openGraph: {
    title: 'Diagnóstico Tecnológico Gratuito | Código Nexo',
    description: 'Herramienta gratuita para identificar posibles áreas de mejora en plataformas tecnológicas empresariales.',
    url: 'https://codigonexo.mx/diagnostico',
    type: 'website',
  },
};

export default function DiagnosticoPage() {
  return (
    <main>
      <Breadcrumbs />

      <PageHero
        title="Diagnóstico tecnológico gratuito"
        subtitle="Una herramienta rápida para identificar posibles áreas de mejora en infraestructura, software, procesos, seguridad, escalabilidad y mantenimiento."
      />

      <PageSection>
        <PageContainer>
          <PageHeader
            title="Evalúa el estado general de tu plataforma"
            subtitle="El diagnóstico es orientativo y está pensado para empresas que necesitan una primera lectura antes de decidir si conviene mantener, modernizar, automatizar o revisar su base tecnológica."
          />
          <PageGrid columns={3}>
            <PageIconCard
              icon="Server"
              title="Infraestructura"
              text="Revisa señales relacionadas con nube, respaldos, escalabilidad y continuidad operativa."
            />
            <PageIconCard
              icon="Shield"
              title="Seguridad"
              text="Identifica puntos básicos sobre autenticación, permisos, documentación y revisión de accesos."
            />
            <PageIconCard
              icon="Workflow"
              title="Procesos"
              text="Detecta tareas manuales, integraciones pendientes y oportunidades de automatización."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <DiagnosticTool />
        </PageContainer>
      </PageSection>

      <PageCTA
        title="¿Quieres revisar el resultado con contexto técnico?"
        subtitle="Podemos analizar tus respuestas junto con arquitectura, sistemas actuales, operación y prioridades de negocio."
        ctaLabel="Solicitar diagnóstico tecnológico"
        microcopy="Revisaremos tu caso y coordinaremos una llamada técnica para identificar riesgos, prioridades y posibles rutas de mejora."
      />
    </main>
  );
}
