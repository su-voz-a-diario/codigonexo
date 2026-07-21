import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageHero from '@/components/page/PageHero';
import PageSection from '@/components/page/PageSection';
import PageContainer from '@/components/page/PageContainer';
import PageHeader from '@/components/page/PageHeader';
import PageGrid from '@/components/page/PageGrid';
import PageIconCard from '@/components/page/PageIconCard';
import PageFeatureGrid from '@/components/page/PageFeatureGrid';
import PageFAQ from '@/components/page/PageFAQ';
import PageCTA from '@/components/page/PageCTA';

export const metadata: Metadata = {
  title: 'Nosotros | Código Nexo',
  description: 'Conoce cómo trabaja Código Nexo: consultoría tecnológica, desarrollo de software empresarial y acompañamiento técnico para proyectos digitales.',
  alternates: {
    canonical: 'https://codigonexo.mx/nosotros',
  },
  openGraph: {
    title: 'Nosotros | Código Nexo',
    description: 'Equipo de ingeniería y consultoría tecnológica enfocado en construir soluciones digitales claras, mantenibles y alineadas al negocio.',
    url: 'https://codigonexo.mx/nosotros',
    type: 'website',
  },
};

export default function NosotrosPage() {
  return (
    <main>
      <Breadcrumbs />

      <PageHero
        title="Ingeniería con criterio de negocio"
        subtitle="Código Nexo diseña, construye e integra soluciones digitales para empresas que necesitan claridad técnica, continuidad operativa y una base mantenible para evolucionar."
        withCTA
        ctaLabel="Solicitar diagnóstico tecnológico"
        microcopy="Revisaremos el contexto de tu iniciativa y coordinaremos una conversación técnica para entender objetivos, restricciones y siguientes pasos."
      />

      <PageSection>
        <PageContainer>
          <PageHeader
            title="Quiénes somos"
            subtitle="Somos una consultora tecnológica enfocada en desarrollo de software, arquitectura cloud, integraciones, automatización y modernización de sistemas."
          />
          <PageGrid columns={3}>
            <PageIconCard
              icon="Code"
              title="Construcción de software"
              text="Diseñamos aplicaciones, plataformas y componentes a la medida para resolver necesidades operativas específicas."
            />
            <PageIconCard
              icon="Network"
              title="Integración de sistemas"
              text="Conectamos herramientas existentes mediante APIs, flujos de datos y capas de integración que reducen trabajo manual."
            />
            <PageIconCard
              icon="Layers"
              title="Acompañamiento técnico"
              text="Apoyamos decisiones de arquitectura, priorización técnica y evolución gradual de plataformas existentes."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Misión y visión" align="center" />
          <PageGrid columns={2}>
            <PageIconCard
              icon="Target"
              title="Nuestra misión"
              text="Ayudar a las empresas a convertir necesidades operativas en soluciones tecnológicas comprensibles, seguras y sostenibles."
            />
            <PageIconCard
              icon="Eye"
              title="Nuestra visión"
              text="Ser un aliado técnico confiable para organizaciones que buscan evolucionar sus sistemas sin perder control sobre sus procesos."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer>
          <PageHeader
            title="Qué tipo de proyectos desarrollamos"
            subtitle="Nos enfocamos en iniciativas donde la tecnología debe integrarse con operación, datos, seguridad y crecimiento."
          />
          <PageFeatureGrid
            features={[
              {
                title: 'Plataformas empresariales',
                description: 'Sistemas internos, portales, aplicaciones web y herramientas operativas construidas alrededor de procesos reales.',
              },
              {
                title: 'Modernización de sistemas',
                description: 'Evolución gradual de aplicaciones existentes para mejorar mantenibilidad, seguridad e integración.',
              },
              {
                title: 'Automatización e integraciones',
                description: 'Flujos que conectan sistemas, reducen tareas repetitivas y mejoran la trazabilidad de la información.',
              },
              {
                title: 'Arquitectura y consultoría',
                description: 'Evaluación técnica, definición de rutas de implementación y apoyo para tomar decisiones con menor incertidumbre.',
              },
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Cómo trabajamos con nuestros clientes" />
          <PageGrid columns={3}>
            <PageIconCard
              icon="Search"
              title="Entendemos el contexto"
              text="Antes de proponer una solución, revisamos objetivos, usuarios, restricciones técnicas y dependencias del negocio."
            />
            <PageIconCard
              icon="FileText"
              title="Definimos alcance claro"
              text="Alineamos entregables, responsabilidades y criterios de aceptación para reducir ambigüedad durante el proyecto."
            />
            <PageIconCard
              icon="MessagesSquare"
              title="Mantenemos comunicación directa"
              text="Explicamos avances, riesgos y decisiones técnicas con lenguaje claro para facilitar la toma de decisiones."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer>
          <PageHeader title="Principios de trabajo" align="center" />
          <PageFeatureGrid
            features={[
              {
                title: 'Claridad antes que complejidad',
                description: 'Buscamos soluciones que el equipo pueda entender, operar y mantener después de la entrega.',
              },
              {
                title: 'Decisiones técnicas justificadas',
                description: 'Cada elección de arquitectura, tecnología o integración debe responder a una necesidad del proyecto.',
              },
              {
                title: 'Transparencia sobre riesgos',
                description: 'Identificamos dependencias, limitaciones y decisiones pendientes para evitar sorpresas durante la ejecución.',
              },
              {
                title: 'Evolución gradual',
                description: 'Cuando existe operación activa, priorizamos rutas de cambio que reduzcan interrupciones innecesarias.',
              },
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Preguntas frecuentes" />
          <PageFAQ
            faqs={[
              {
                question: '¿Qué puede esperar un cliente al colaborar con Código Nexo?',
                answer: 'Un proceso ordenado, comunicación técnica clara, entregables definidos y acompañamiento para tomar decisiones de implementación con mayor contexto.',
              },
              {
                question: '¿Trabajan con sistemas existentes?',
                answer: 'Sí. Podemos revisar plataformas actuales, identificar riesgos y proponer una ruta de integración o modernización gradual.',
              },
              {
                question: '¿El cliente participa durante el proyecto?',
                answer: 'Sí. La participación del cliente es importante para validar prioridades, revisar avances y confirmar que la solución responde al proceso real.',
              },
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageCTA
        title="Conversemos sobre tu contexto técnico"
        subtitle="Podemos revisar la necesidad actual y definir si corresponde construir, integrar, modernizar o automatizar."
        ctaLabel="Solicitar diagnóstico tecnológico"
        microcopy="Analizaremos tu caso y coordinaremos una llamada técnica para revisar objetivos, restricciones y posibles rutas de trabajo."
      />
    </main>
  );
}
