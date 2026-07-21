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
  title: 'Desarrollo de Software a la Medida | CódigoNexo',
  description: 'Ingeniería de software para empresas. Construimos sistemas core, plataformas B2B y SaaS utilizando Next.js, Node.js y arquitecturas escalables.',
  alternates: {
    canonical: 'https://codigonexo.com/servicios/desarrollo-a-la-medida'
  }
};

const processData = [
  {
    title: "1. Levantamiento y Discovery Arquitectónico",
    description: "Mapeamos tus procesos de negocio y definimos la arquitectura tecnológica (Bases de datos relacionales, microservicios, integraciones de terceros)."
  },
  {
    title: "2. Diseño de Sistemas UI/UX",
    description: "Creación de prototipos interactivos de alta fidelidad centrados en optimizar flujos de trabajo operativos y reducir la fricción del usuario."
  },
  {
    title: "3. Ingeniería y Desarrollo Iterativo",
    description: "Codificación en sprints ágiles. Entregamos módulos funcionales periódicamente para validación temprana del negocio."
  },
  {
    title: "4. Quality Assurance y Lanzamiento",
    description: "Pruebas de estrés, auditoría de seguridad y despliegue final sobre infraestructura automatizada."
  }
];

export default function DesarrolloMedida() {
  return (
    <main>
      <ServiceSchema 
        name="Firma de Desarrollo de Software a la Medida"
        description="Construcción de plataformas empresariales y sistemas core con Next.js y arquitecturas cloud nativas."
        url="/servicios/desarrollo-a-la-medida"
      />
      <Breadcrumbs />
      
      <PageHero 
        title={<>Desarrollo Core para <span style={{ color: '#3b82f6' }}>Operaciones Críticas</span></>}
        subtitle="No usamos plantillas ni sistemas genéricos. Construimos plataformas de ingeniería robusta (Next.js, Node.js, PostgreSQL) diseñadas para orquestar la operación completa de tu empresa."
        withCTA
      />

      <PageSection theme="dark">
        <PageContainer>
          <PageHeader 
            title="Por qué elegir Ingeniería a la Medida" 
            subtitle="Cuando los SaaS comerciales limitan tu crecimiento y te obligan a adaptar tu empresa al software, es momento de que el software se adapte a tu empresa."
          />
          <PageGrid columns={3}>
            <PageIconCard 
              icon="Layers"
              title="Sistemas Core B2B"
              text="Plataformas transaccionales, ERPs personalizados y portales de proveedores diseñados para manejar alto volumen de datos concurrentes."
            />
            <PageIconCard 
              icon="Zap"
              title="Stack Moderno"
              text="Desarrollamos con el mismo stack de las Big Tech: React, Next.js (App Router), y arquitecturas Headless para rendimiento milisegundo."
            />
            <PageIconCard 
              icon="Code"
              title="Código Limpio y Propio"
              text="Entregamos código fuente documentado, versionado en Git y con cobertura de pruebas. 100% de la propiedad intelectual es tuya."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer width="narrow">
          <PageHeader 
            title="Ingeniería Predictible" 
            align="left" 
            subtitle="Nuestro ciclo de desarrollo elimina la incertidumbre técnica."
          />
          <PageFeatureGrid features={processData} />
          
          <PageCTA 
            title="Convierte tu visión en infraestructura real" 
            subtitle="Agenda una consultoría de Discovery con nuestro equipo de ingenieros."
          />
        </PageContainer>
      </PageSection>

    </main>
  );
}
