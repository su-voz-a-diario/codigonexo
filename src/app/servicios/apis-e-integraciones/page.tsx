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
  title: 'Desarrollo de APIs e Integraciones de Sistemas | CódigoNexo',
  description: 'Arquitectura de APIs REST y GraphQL. Conectamos software empresarial, ERPs (SAP, Oracle) y aplicaciones web a través de middlewares seguros.',
  alternates: {
    canonical: 'https://codigonexo.mx/servicios/apis-e-integraciones'
  }
};

const processData = [
  {
    title: "1. Análisis de Endpoints y Documentación",
    description: "Evaluamos las capacidades de los sistemas actuales, autenticación requerida (OAuth 2.0, JWT) y los límites de rate-limiting."
  },
  {
    title: "2. Diseño de Contratos de API",
    description: "Utilizamos Swagger/OpenAPI para diseñar contratos claros antes de programar, asegurando que todos los sistemas 'hablen el mismo idioma'."
  },
  {
    title: "3. Desarrollo del Middleware / Gateway",
    description: "Construimos capas intermedias (Node.js/Go) que se encargan de enrutar, transformar y validar los datos sin sobrecargar tus sistemas core."
  },
  {
    title: "4. Seguridad y Pruebas (Penetration Testing)",
    description: "Validación contra el OWASP Top 10 para APIs, asegurando que ningún endpoint crítico esté expuesto a inyecciones o abusos masivos."
  }
];

export default function ApisIntegraciones() {
  return (
    <main>
      <ServiceSchema 
        name="Ingeniería y Desarrollo de APIs"
        description="Arquitectura de APIs corporativas e integraciones seguras entre sistemas (ERPs, SaaS, Legacy)."
        url="/servicios/apis-e-integraciones"
      />
      <Breadcrumbs />
      
      <PageHero 
        title={<>Desarrollo de APIs e <span style={{ color: '#3b82f6' }}>Integración de Sistemas</span></>}
        subtitle="Construimos puentes tecnológicos seguros. Conectamos aplicaciones heredadas, ERPs y plataformas modernas a través de arquitecturas de microservicios."
        withCTA
        ctaLabel="Evaluar integración"
        microcopy="Revisaremos los sistemas involucrados, dependencias técnicas y riesgos de integración antes de proponer una ruta."
      />

      <PageSection theme="dark">
        <PageContainer>
          <PageHeader 
            title="Interoperabilidad de Nivel Corporativo" 
            subtitle="Tener los datos aislados en diferentes plataformas ralentiza la operación corporativa. Nosotros orquestamos la comunicación."
          />
          <PageGrid columns={3}>
            <PageIconCard 
              icon="Network"
              title="APIs REST & GraphQL"
              text="Diseñamos endpoints eficientes y documentados bajo estándares OpenAPI que pueden ser consumidos por cualquier cliente web, móvil o de terceros."
            />
            <PageIconCard 
              icon="Waypoints"
              title="Integración de ERPs"
              text="Experiencia técnica conectando sistemas cerrados como SAP, Salesforce u Oracle con ecosistemas digitales modernos y portales a la medida."
            />
            <PageIconCard 
              icon="LockKeyhole"
              title="API Security & Gateways"
              text="Implementación de OAuth 2.0, validaciones JWT, limitación de peticiones (Rate Limiting) e inyección de WAF (Web Application Firewalls)."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer width="narrow">
          <PageHeader 
            title="Flujo de Integración" 
            align="left" 
            subtitle="Cómo unimos ecosistemas incompatibles."
          />
          <PageFeatureGrid features={processData} />
          
          <PageCTA 
            title="¿Tus sistemas no se comunican entre sí?" 
            subtitle="Evaluemos la integración necesaria y los sistemas que deben conectarse."
            ctaLabel="Evaluar integración"
            microcopy="Analizaremos endpoints, restricciones y flujos de datos para definir el siguiente paso técnico."
          />
        </PageContainer>
      </PageSection>

    </main>
  );
}
