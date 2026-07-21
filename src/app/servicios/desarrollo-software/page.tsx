import type { Metadata } from 'next';
import PageHero from '@/components/page/PageHero';
import PageSection from '@/components/page/PageSection';
import PageContainer from '@/components/page/PageContainer';
import PageHeader from '@/components/page/PageHeader';
import PageGrid from '@/components/page/PageGrid';
import PageIconCard from '@/components/page/PageIconCard';
import PageFeatureGrid from '@/components/page/PageFeatureGrid';
import PageCTA from '@/components/page/PageCTA';
import PageTimeline from '@/components/page/PageTimeline';
import PageFAQ from '@/components/page/PageFAQ';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Desarrollo de Software Empresarial | CódigoNexo',
  description: 'Aceleramos la transformación digital de empresas mediante plataformas diseñadas para crecer, integrarse y evolucionar con el negocio. Arquitectura de alto rendimiento.',
  alternates: {
    canonical: 'https://codigonexo.mx/servicios/desarrollo-software',
  },
  openGraph: {
    title: 'Desarrollo de Software Empresarial | CódigoNexo',
    description: 'Ingeniería de software para corporativos. Arquitecturas escalables, integraciones complejas y código mantenible.',
    url: 'https://codigonexo.mx/servicios/desarrollo-software',
    type: 'website',
  },
};

export default function DesarrolloSoftwarePage() {
  return (
    <>
      <ServiceSchema 
        name="Desarrollo de Software Empresarial"
        description="Ingeniería de software para resolver problemas complejos de negocio con criterios de escalabilidad, seguridad y rendimiento."
        url="https://codigonexo.mx/servicios/desarrollo-software"
      />
      
      <PageHero 
        title={<>Ingeniería de Software<br />para Misión Crítica</>}
        subtitle="Aceleramos la transformación digital de corporativos mediante plataformas diseñadas para escalar, integrarse y evolucionar con su modelo de negocio."
        withCTA
        ctaLabel="Solicitar estimación técnica"
        microcopy="Revisaremos el contexto del proyecto y coordinaremos una conversación técnica para entender alcance, riesgos y prioridades."
      />

      <PageSection>
        <PageContainer>
          <PageHeader title="El Costo de la Deuda Técnica" align="center" />
          <PageFeatureGrid 
            features={[
              {
                title: "Sistemas Aislados",
                description: "Información fragmentada que requiere trabajo manual para sincronizarse, reduciendo la velocidad operativa."
              },
              {
                title: "Falta de Escalabilidad",
                description: "Plataformas legacy que colapsan ante picos de demanda y frenan el crecimiento internacional."
              },
              {
                title: "Vulnerabilidades de Seguridad",
                description: "Código no actualizado que expone datos sensibles a brechas de seguridad y auditorías fallidas."
              },
              {
                title: "Time-to-Market Lento",
                description: "Meses para lanzar una nueva funcionalidad debido a arquitecturas monolíticas inflexibles."
              }
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Nuestra Solución: Arquitectura Empresarial" />
          <PageGrid columns={3}>
            <PageIconCard 
              icon="Layers"
              title="Diseño de Microservicios"
              text="Desacoplamos la lógica de negocio para permitir despliegues continuos sin afectar la estabilidad global de la plataforma."
            />
            <PageIconCard 
              icon="Server"
              title="Integración de Sistemas"
              text="Conectamos ERPs, CRMs y pasarelas de pago mediante APIs robustas y mensajería asíncrona."
            />
            <PageIconCard 
              icon="Shield"
              title="Seguridad por Diseño"
              text="Implementamos DevSecOps desde el día cero. Auditorías de código automatizadas y protección OWASP."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer>
          <PageHeader title="Beneficios Corporativos" align="center" />
          <PageGrid columns={2}>
            <PageIconCard 
              icon="Zap"
              title="Rendimiento Planificado"
              text="Diseñamos aplicaciones con criterios de latencia, concurrencia y estabilidad definidos desde la arquitectura."
            />
            <PageIconCard 
              icon="GitBranch"
              title="Mantenibilidad a Largo Plazo"
              text="Entregamos código limpio, documentado y tipado estrictamente, asegurando que su equipo interno pueda gestionarlo en el futuro."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Proceso de Ingeniería" />
          <PageTimeline 
            steps={[
              {
                title: "Discovery & Blueprint",
                description: "Auditamos la infraestructura actual, entendemos los objetivos de negocio y diseñamos la arquitectura óptima antes de escribir una sola línea de código."
              },
              {
                title: "Diseño de Arquitectura",
                description: "Definición de modelos de datos, flujos de integración, topología de servidores y stacks tecnológicos requeridos."
              },
              {
                title: "Desarrollo Ágil",
                description: "Ejecución mediante Sprints con entregas continuas (CI/CD). Validamos suposiciones rápidamente y pivotamos sin comprometer calidad."
              },
              {
                title: "QA & Despliegue",
                description: "Pruebas automatizadas (Unitarias, E2E, Carga) y despliegue automatizado sin tiempo de inactividad (Zero-Downtime Deployment)."
              }
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer>
          <PageHeader title="Preguntas Frecuentes" />
          <PageFAQ 
            faqs={[
              {
                question: "¿Cómo aseguran la calidad del código?",
                answer: "Utilizamos tipado estricto, pruebas automatizadas y pipelines de CI/CD para detectar problemas antes del despliegue y mantener estándares consistentes."
              },
              {
                question: "¿Se integran con nuestros sistemas actuales (SAP, Salesforce, etc.)?",
                answer: "Sí. Somos especialistas en construir capas middleware y APIs Gateway seguras para orquestar la comunicación bidireccional entre sistemas legados y plataformas modernas."
              },
              {
                question: "¿Quién es el propietario intelectual del código?",
                answer: "La propiedad del código se define contractualmente. En proyectos a la medida, entregamos repositorio, documentación y los derechos acordados sobre el producto construido."
              },
              {
                question: "¿Ofrecen soporte post-lanzamiento?",
                answer: "Sí. Podemos estructurar soporte post-lanzamiento, monitorización, parches de seguridad y bolsas de horas según las necesidades del proyecto."
              }
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageCTA 
        title="¿Listo para escalar su infraestructura?" 
        subtitle="Revisemos los objetivos, restricciones técnicas y alcance inicial de la plataforma."
        ctaLabel="Solicitar estimación técnica"
        microcopy="Analizaremos tu caso y programaremos una llamada técnica para revisar el proyecto."
      />
    </>
  );
}
