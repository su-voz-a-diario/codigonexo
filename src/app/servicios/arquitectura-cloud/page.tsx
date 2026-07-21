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
  title: 'Arquitectura Cloud & DevOps | CódigoNexo',
  description: 'Migramos y escalamos infraestructuras en AWS y Google Cloud. Construimos clústeres serverless y Kubernetes para alta disponibilidad.',
  alternates: {
    canonical: 'https://codigonexo.com/servicios/arquitectura-cloud'
  }
};

const processData = [
  {
    title: "1. Auditoría de Carga (Stress Testing)",
    description: "Analizamos el comportamiento de tu infraestructura actual bajo estrés para identificar cuellos de botella y Single Points of Failure."
  },
  {
    title: "2. Diseño Arquitectónico Híbrido/Multi-Cloud",
    description: "Diseñamos la topología óptima en AWS/GCP garantizando resiliencia (Multi-AZ) y optimización de costos computacionales."
  },
  {
    title: "3. Infraestructura como Código (IaC)",
    description: "Desplegamos entornos inmutables utilizando Terraform. Todo cambio es versionado, auditable y reversible."
  },
  {
    title: "4. Automatización CI/CD",
    description: "Implementamos pipelines estrictos mediante GitHub Actions o GitLab CI para despliegues cero-downtime (Blue/Green Deployments)."
  }
];

export default function ArquitecturaCloud() {
  return (
    <main>
      <ServiceSchema 
        name="Consultoría en Arquitectura Cloud"
        description="Diseño e implementación de infraestructuras escalables en AWS y Google Cloud."
        url="/servicios/arquitectura-cloud"
      />
      <Breadcrumbs />
      
      <PageHero 
        title={<>Arquitectura Cloud de <span style={{ color: '#3b82f6' }}>Alto Rendimiento</span></>}
        subtitle="Si tu sistema colapsa durante picos de tráfico, estás perdiendo dinero. Migramos, estabilizamos y automatizamos infraestructuras complejas en AWS y GCP para garantizar 99.99% de disponibilidad."
        withCTA
      />

      <PageSection theme="dark">
        <PageContainer>
          <PageHeader 
            title="Ingeniería DevOps & Cloud Nativa" 
            subtitle="Cambiamos servidores frágiles por ecosistemas elásticos. Nuestra ingeniería asegura que tus costos escalen proporcionalmente a tu éxito, nunca antes."
          />
          <PageGrid columns={3}>
            <PageIconCard 
              icon="Cloud"
              title="Migración Zero-Downtime"
              text="Transicionamos tus monolitos heredados hacia microservicios o Serverless en AWS/GCP sin interrumpir tu operación comercial."
            />
            <PageIconCard 
              icon="Cpu"
              title="Auto-Escalado Elástico"
              text="Clústeres configurados (Amazon EKS, ECS) para absorber picos de Black Friday y contraerse automáticamente de madrugada."
            />
            <PageIconCard 
              icon="Lock"
              title="Cloud Security"
              text="Aislamiento mediante VPCs, Subnets privadas y políticas IAM estrictas. Tu información jamás está expuesta directamente a internet."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer width="narrow">
          <PageHeader 
            title="Proceso de Despliegue" 
            align="left" 
            subtitle="No adivinamos, medimos. Nuestro framework de adopción Cloud minimiza el riesgo técnico."
          />
          <PageFeatureGrid features={processData} />
          
          <PageCTA 
            title="¿Tu infraestructura no soporta tu crecimiento?" 
            subtitle="Agendemos una sesión técnica con uno de nuestros Cloud Architects."
          />
        </PageContainer>
      </PageSection>

    </main>
  );
}
