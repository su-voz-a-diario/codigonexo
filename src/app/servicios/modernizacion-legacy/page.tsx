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
  title: 'Modernización de Sistemas Legacy | CódigoNexo',
  description: 'Refactorización y migración de software obsoleto a arquitecturas modernas (Microservicios, React, Node.js) sin interrumpir la operación del negocio.',
  alternates: {
    canonical: 'https://codigonexo.com/servicios/modernizacion-legacy'
  }
};

const processData = [
  {
    title: "1. Auditoría del Código Fuente (Due Diligence)",
    description: "Revisamos la base de datos, las dependencias y la deuda técnica actual para trazar la ruta de migración más segura."
  },
  {
    title: "2. Estrategia Estrangulador (Strangler Fig)",
    description: "No reescribimos el sistema desde cero de golpe. Reemplazamos módulo por módulo, permitiendo que ambos sistemas coexistan pacíficamente."
  },
  {
    title: "3. Refactorización a Microservicios",
    description: "Desacoplamos la lógica de negocio monolítica en servicios independientes y escalables (API REST / GraphQL)."
  },
  {
    title: "4. Modernización Frontend (Decoupling)",
    description: "Sustituimos interfaces pesadas y obsoletas (ej. jQuery, ASP.NET clásico) por una capa moderna de React/Next.js hiper rápida."
  }
];

export default function ModernizacionLegacy() {
  return (
    <main>
      <ServiceSchema 
        name="Servicios de Modernización Legacy"
        description="Migración y refactorización de software obsoleto a arquitecturas web modernas."
        url="/servicios/modernizacion-legacy"
      />
      <Breadcrumbs />
      
      <PageHero 
        title={<>Modernización de Sistemas <span style={{ color: '#3b82f6' }}>Legacy</span></>}
        subtitle="Tu software crítico fue construido hace 10 años y hoy frena la innovación corporativa. Lo refactorizamos a tecnologías modernas sin detener tu operación."
        withCTA
      />

      <PageSection theme="dark">
        <PageContainer>
          <PageHeader 
            title="Rescate y Refactorización Arquitectónica" 
            subtitle="Sistemas lentos, dependencias sin mantenimiento y bases de datos que no escalan representan el mayor riesgo para tu continuidad de negocio."
          />
          <PageGrid columns={3}>
            <PageIconCard 
              icon="RefreshCw"
              title="Estrategia Zero-Downtime"
              text="Migramos tus datos y lógica de negocio mediante patrones de coexistencia. Tus usuarios no notarán la transición técnica profunda."
            />
            <PageIconCard 
              icon="Database"
              title="Migración de Datos"
              text="ETLs seguras para mover tu información desde bases de datos obsoletas hacia clusters modernos de PostgreSQL o MongoDB."
            />
            <PageIconCard 
              icon="Code2"
              title="Eliminación de Deuda Técnica"
              text="Reducimos drásticamente los costos de mantenimiento y las brechas de vulnerabilidad actualizando tu stack a estándares vigentes."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer width="narrow">
          <PageHeader 
            title="Nuestra Metodología" 
            align="left" 
            subtitle="Cómo reemplazamos motores de avión en pleno vuelo."
          />
          <PageFeatureGrid features={processData} />
          
          <PageCTA 
            title="¿Tu sistema core se está volviendo insostenible?" 
            subtitle="Agenda una auditoría técnica para evaluar la viabilidad de refactorización."
          />
        </PageContainer>
      </PageSection>

    </main>
  );
}
