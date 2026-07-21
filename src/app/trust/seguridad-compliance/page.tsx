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
    title: "Service Level Agreement (SLA) del 99.9%",
    description: "Garantía contractual de disponibilidad para proyectos de misión crítica."
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
        title={<>Seguridad de Grado <span style={{ color: '#3b82f6' }}>Empresarial</span></>}
        subtitle="Para corporativos e instituciones de alto perfil, el código bonito no es suficiente. Construimos arquitecturas resilientes con cifrado end-to-end y disponibilidad del 99.99%."
      />

      <PageSection theme="dark">
        <PageContainer>
          <PageGrid columns={3}>
            <PageIconCard 
              icon="Shield"
              title="Cifrado en Tránsito y Reposo"
              text="Todas las bases de datos y conexiones utilizan estándares AES-256 y TLS 1.3. Garantizamos que la información sensible siempre permanezca cifrada."
            />
            <PageIconCard 
              icon="Server"
              title="Infraestructura Distribuida"
              text="Desplegamos en AWS y Google Cloud usando clústeres redundantes. Si un nodo falla, el sistema escala automáticamente sin tiempo de inactividad."
            />
            <PageIconCard 
              icon="Lock"
              title="Propiedad y NDAs"
              text="Todo el código fuente y la propiedad intelectual te pertenecen al 100%. Operamos bajo estrictos Acuerdos de Confidencialidad corporativos."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer width="narrow">
          <PageHeader 
            title="Continuidad de Negocio" 
            align="left" 
            subtitle="Nuestros procesos de mitigación de desastres aseguran que tu operación jamás se detenga."
          />
          <PageFeatureGrid features={slaData} />
          
          <PageCTA 
            title="¿Necesitas una arquitectura a la medida?" 
            subtitle="Agendemos una auditoría técnica sin compromiso."
          />
        </PageContainer>
      </PageSection>

    </main>
  );
}
