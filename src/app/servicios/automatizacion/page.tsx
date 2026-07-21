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
  title: 'Automatización de Procesos de Negocio (BPA) | CódigoNexo',
  description: 'Desarrollamos bots y flujos de trabajo automatizados para eliminar tareas manuales. Integramos sistemas aislados para aumentar la eficiencia operativa.',
  alternates: {
    canonical: 'https://codigonexo.com/servicios/automatizacion'
  }
};

const processData = [
  {
    title: "1. Mapeo de Flujos de Trabajo",
    description: "Identificamos los cuellos de botella manuales en tus departamentos de Operaciones, Finanzas o Recursos Humanos."
  },
  {
    title: "2. Diseño de Arquitectura de Automatización",
    description: "Definimos si requerimos integraciones API (N8N, Zapier Enterprise, Make) o el desarrollo de scripts de extracción de datos a la medida."
  },
  {
    title: "3. Desarrollo de Agentes Autónomos",
    description: "Programamos la lógica de negocio (reglas de decisión, validación de datos, enrutamiento de notificaciones) para operar sin supervisión humana."
  },
  {
    title: "4. Monitorización Continua",
    description: "Implementamos dashboards para visualizar cuántas horas-hombre el sistema ha ahorrado en tiempo real y asegurar que los flujos no fallen."
  }
];

export default function Automatizacion() {
  return (
    <main>
      <ServiceSchema 
        name="Consultoría en Automatización de Procesos (BPA)"
        description="Ingeniería para la automatización de procesos operativos empresariales."
        url="/servicios/automatizacion"
      />
      <Breadcrumbs />
      
      <PageHero 
        title={<>Automatización de <span style={{ color: '#3b82f6' }}>Procesos Operativos</span></>}
        subtitle="Las tareas repetitivas destruyen el talento de tu equipo. Construimos flujos de software que conectan tus sistemas para operar 24/7 sin intervención manual."
        withCTA
      />

      <PageSection theme="dark">
        <PageContainer>
          <PageHeader 
            title="Eficiencia Corporativa" 
            subtitle="Eliminamos el trabajo manual repetitivo interconectando el software que tu empresa ya utiliza."
          />
          <PageGrid columns={3}>
            <PageIconCard 
              icon="Workflow"
              title="Orquestación de Flujos"
              text="Conectamos el ERP con el CRM y con tus sistemas contables. Un dato ingresado en ventas se refleja automáticamente en facturación."
            />
            <PageIconCard 
              icon="Bot"
              title="Automatización Robótica (RPA)"
              text="Cuando no hay APIs disponibles, desarrollamos scripts seguros para emular clics y tecleo, extrayendo datos de sistemas cerrados."
            />
            <PageIconCard 
              icon="TrendingDown"
              title="Reducción de Errores"
              text="Un sistema automatizado no comete errores tipográficos. Garantizamos integridad de datos del 100% en conciliaciones o transferencias de información."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer width="narrow">
          <PageHeader 
            title="Proceso de Implementación" 
            align="left" 
            subtitle="Transformamos procesos manuales lentos en pipelines de datos instantáneos."
          />
          <PageFeatureGrid features={processData} />
          
          <PageCTA 
            title="¿Tu equipo gasta horas copiando y pegando datos?" 
            subtitle="Contacta a nuestros expertos en automatización."
          />
        </PageContainer>
      </PageSection>

    </main>
  );
}
