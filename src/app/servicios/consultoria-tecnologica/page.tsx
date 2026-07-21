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
  title: 'Consultoría Tecnológica para Empresas | CódigoNexo',
  description: 'Firma de consultoría de software. Alineamos tu estrategia de tecnología corporativa mediante auditorías de arquitectura, seguridad y liderazgo interino (vCTO).',
  alternates: {
    canonical: 'https://codigonexo.mx/servicios/consultoria-tecnologica'
  }
};

const processData = [
  {
    title: "1. Diagnóstico Inicial y Code Review",
    description: "Evaluamos el estado de tu base de código actual, buscando vulnerabilidades de seguridad, cuellos de botella y violaciones a estándares de la industria."
  },
  {
    title: "2. Diseño de Arquitectura Futura",
    description: "Elaboramos planos técnicos (C4 Model, Topologías de Red) que dictarán cómo debe evolucionar el software en los próximos años para soportar el crecimiento."
  },
  {
    title: "3. Selección de Tecnología (Tech Stack)",
    description: "Evaluamos herramientas con criterios de soporte, madurez, compatibilidad y costo de mantenimiento."
  },
  {
    title: "4. Gobernanza y Plan de Ejecución",
    description: "Entregamos un roadmap táctico priorizado, organizando los esfuerzos del equipo interno o de proveedores para transicionar hacia la nueva arquitectura."
  }
];

export default function ConsultoriaTecnologica() {
  return (
    <main>
      <ServiceSchema 
        name="Firma de Consultoría Tecnológica"
        description="Auditoría técnica, diseño de arquitectura de software y servicios vCTO para empresas."
        url="/servicios/consultoria-tecnologica"
      />
      <Breadcrumbs />
      
      <PageHero 
        title={<>Consultoría en <span style={{ color: '#3b82f6' }}>Arquitectura de Software</span></>}
        subtitle="Ayudamos a tomar decisiones técnicas con mayor claridad, evaluando arquitectura, deuda técnica, riesgos y capacidad de evolución."
        withCTA
        ctaLabel="Solicitar diagnóstico tecnológico"
        microcopy="Revisaremos el contexto técnico y coordinaremos una conversación para entender objetivos, restricciones y prioridades."
      />

      <PageSection theme="dark">
        <PageContainer>
          <PageHeader 
            title="Liderazgo Técnico (vCTO)" 
            subtitle="Asesoramiento objetivo. No buscamos venderte una herramienta específica, buscamos diseñar el ecosistema correcto para tu modelo de negocio."
          />
          <PageGrid columns={3}>
            <PageIconCard 
              icon="SearchCode"
              title="Auditoría de Código y Arquitectura"
              text="Revisión técnica de aplicaciones existentes para identificar deuda técnica, riesgos de seguridad y oportunidades de mejora."
            />
            <PageIconCard 
              icon="Milestone"
              title="Roadmap Tecnológico"
              text="Trazamos la evolución de tu software a 3 y 5 años, alineando los objetivos financieros del C-Level con la capacidad técnica operativa."
            />
            <PageIconCard 
              icon="UsersRound"
              title="Acompañamiento a Equipos"
              text="Acompañamos a equipos internos en la adopción de prácticas de ingeniería como Clean Code, pruebas y CI/CD."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer width="narrow">
          <PageHeader 
            title="El Proceso Consultivo" 
            align="left" 
            subtitle="Análisis profundo y entregables procesables."
          />
          <PageFeatureGrid features={processData} />
          
          <PageCTA 
            title="¿No estás seguro de si tu infraestructura está lista para escalar?" 
            subtitle="Revisemos arquitectura, deuda técnica y prioridades antes de definir una ruta de evolución."
            ctaLabel="Solicitar diagnóstico tecnológico"
            microcopy="Analizaremos la información disponible y programaremos una llamada técnica para revisar hallazgos iniciales."
          />
        </PageContainer>
      </PageSection>

    </main>
  );
}
