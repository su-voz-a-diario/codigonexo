import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Design System Components
import PageContainer from '@/components/page/PageContainer';
import PageSection from '@/components/page/PageSection';
import PageGrid from '@/components/page/PageGrid';
import PageHero from '@/components/page/PageHero';
import PageHeader from '@/components/page/PageHeader';
import PageIconCard from '@/components/page/PageIconCard';
import PageFeatureGrid from '@/components/page/PageFeatureGrid';
import PageCTA from '@/components/page/PageCTA';

export const metadata: Metadata = {
  title: 'Seguridad y Compliance | CódigoNexo',
  description: 'Conoce nuestra arquitectura de seguridad, infraestructura, SLA y cumplimiento corporativo.',
};

const slaData = [
  {
    title: "Acuerdos de soporte y disponibilidad",
    description: "Definición contractual de niveles de soporte según la criticidad del proyecto."
  },
  {
    title: "Backups Automatizados",
    description: "Respaldo diario de bases de datos con retención configurable según la industria (ej. HIPAA)."
  },
  {
    title: "CI/CD y Pruebas Unitarias",
    description: "Los despliegues pasan por un pipeline estricto. Si los tests fallan, el código no sube a producción."
  }
];

export default function SeguridadCompliance() {
  return (
    <main>
      <Breadcrumbs />
      
      <PageHero 
        title={<>Seguridad para Entornos <span style={{ color: '#3b82f6' }}>Empresariales</span></>}
        subtitle="Para proyectos corporativos, la arquitectura debe contemplar controles de seguridad, continuidad operativa y manejo responsable de datos desde el diseño."
      />

      <PageSection theme="dark">
        <PageContainer>
          <PageGrid columns={3}>
            <PageIconCard 
              icon="Shield"
              title="Cifrado en Tránsito y Reposo"
              text="Diseñamos conexiones y almacenamiento con controles de cifrado adecuados para proteger información sensible."
            />
            <PageIconCard 
              icon="Server"
              title="Infraestructura Distribuida"
              text="Diseñamos despliegues en la nube con redundancia y estrategias de recuperación según los requisitos del proyecto."
            />
            <PageIconCard 
              icon="Lock"
              title="Propiedad y NDAs"
              text="La propiedad intelectual, confidencialidad y acceso al código se definen de forma explícita en los acuerdos del proyecto."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer width="narrow">
          <PageHeader 
            title="Continuidad de Negocio" 
            align="left" 
            subtitle="Nuestros procesos buscan reducir riesgos operativos y preparar la recuperación ante incidentes relevantes."
          />
          <PageFeatureGrid features={slaData} />
          
          <PageCTA 
            title="¿Necesitas una arquitectura a la medida?" 
            subtitle="Revisemos los requisitos de seguridad, continuidad y soporte de tu proyecto."
            ctaLabel="Revisar arquitectura de seguridad"
            microcopy="Analizaremos el contexto técnico y coordinaremos una conversación para identificar riesgos y prioridades."
          />
        </PageContainer>
      </PageSection>

    </main>
  );
}
