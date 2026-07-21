import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ServiceSchema from '@/components/ui/ServiceSchema';
import PageContainer from '@/components/page/PageContainer';
import PageSection from '@/components/page/PageSection';
import PageGrid from '@/components/page/PageGrid';
import PageHero from '@/components/page/PageHero';
import PageHeader from '@/components/page/PageHeader';
import PageIconCard from '@/components/page/PageIconCard';
import PageFeatureGrid from '@/components/page/PageFeatureGrid';
import PageCTA from '@/components/page/PageCTA';

export const metadata: Metadata = {
  title: 'Consultoría DevOps & CI/CD | CódigoNexo',
  description: 'Automatización de infraestructura y despliegues con Terraform, Kubernetes, Docker y GitHub Actions. Incrementamos la velocidad de entrega de tu equipo.',
  alternates: {
    canonical: 'https://codigonexo.mx/servicios/devops'
  }
};

const processData = [
  {
    title: "1. Contenerización de Aplicaciones",
    description: "Empaquetamos tus aplicaciones en Docker para asegurar que corran idénticamente en la máquina del desarrollador y en el clúster de producción."
  },
  {
    title: "2. Pipelines de Integración Continua (CI)",
    description: "Configuramos pruebas automatizadas en cada commit. Si el código falla, se bloquea la integración al branch principal."
  },
  {
    title: "3. Despliegue Continuo (CD)",
    description: "Automatizamos el paso a producción utilizando estrategias Canary o Blue/Green para mitigar riesgos de caídas del sistema."
  },
  {
    title: "4. Monitoreo y Observabilidad",
    description: "Instalamos Datadog, Prometheus y Grafana para trazar logs distribuidos y configurar alertas en tiempo real ante anomalías de uso."
  }
];

export default function DevOps() {
  return (
    <main>
      <ServiceSchema 
        name="Consultoría e Ingeniería DevOps"
        description="Automatización de infraestructura, CI/CD y observabilidad para equipos de ingeniería."
        url="/servicios/devops"
      />
      <Breadcrumbs />
      
      <PageHero 
        title={<>Automatización <span style={{ color: '#3b82f6' }}>DevOps</span> y CI/CD</>}
        subtitle="Convertimos despliegues manuales en pipelines auditables y repetibles para mejorar la velocidad y confiabilidad del equipo de ingeniería."
        withCTA
        ctaLabel="Revisar pipeline actual"
        microcopy="Revisaremos tu flujo de despliegue, entornos y riesgos operativos para identificar mejoras prioritarias."
      />

      <PageSection theme="dark">
        <PageContainer>
          <PageHeader 
            title="Cultura de Entrega Continua" 
            subtitle="Si hacer un pase a producción le toma a tu equipo horas o requiere apagar el sistema, estás perdiendo competitividad."
          />
          <PageGrid columns={3}>
            <PageIconCard 
              icon="GitMerge"
              title="Pipelines CI/CD"
              text="Automatización completa desde el commit hasta producción usando GitHub Actions, GitLab CI o Jenkins."
            />
            <PageIconCard 
              icon="TerminalSquare"
              title="Infraestructura como Código"
              text="Definimos infraestructura mediante scripts auditables de Terraform o Ansible para reducir configuración manual."
            />
            <PageIconCard 
              icon="Activity"
              title="Observabilidad (APM)"
              text="Implementamos logs, métricas y alertas para detectar problemas operativos con mayor anticipación."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer width="narrow">
          <PageHeader 
            title="Ingeniería de Automatización" 
            align="left" 
            subtitle="Las fases para blindar tu operación tecnológica."
          />
          <PageFeatureGrid features={processData} />
          
          <PageCTA 
            title="¿Tu pipeline de despliegue necesita más control?" 
            subtitle="Revisemos el ciclo actual de desarrollo, pruebas y publicación."
            ctaLabel="Revisar pipeline actual"
            microcopy="Analizaremos tu flujo actual y coordinaremos una llamada para priorizar mejoras de automatización."
          />
        </PageContainer>
      </PageSection>

    </main>
  );
}
