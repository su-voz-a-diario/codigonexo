import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageHero from '@/components/page/PageHero';
import PageSection from '@/components/page/PageSection';
import PageContainer from '@/components/page/PageContainer';
import PageHeader from '@/components/page/PageHeader';
import PageTimeline from '@/components/page/PageTimeline';
import PageGrid from '@/components/page/PageGrid';
import PageIconCard from '@/components/page/PageIconCard';
import PageFAQ from '@/components/page/PageFAQ';
import PageCTA from '@/components/page/PageCTA';

export const metadata: Metadata = {
  title: 'Proceso de Proyecto | Código Nexo',
  description: 'Conoce cómo inicia, se estima, se ejecuta, se revisa, se despliega y se acompaña un proyecto tecnológico con Código Nexo.',
  alternates: {
    canonical: 'https://codigonexo.mx/proceso',
  },
  openGraph: {
    title: 'Proceso de Proyecto | Código Nexo',
    description: 'Guía clara para entender qué ocurre después del primer contacto y cómo se ejecuta un proyecto de software.',
    url: 'https://codigonexo.mx/proceso',
    type: 'website',
  },
};

export default function ProcesoPage() {
  return (
    <main>
      <Breadcrumbs />

      <PageHero
        title="Cómo se ejecuta un proyecto"
        subtitle="Un proyecto tecnológico necesita orden, comunicación y decisiones verificables. Esta página explica qué ocurre desde el primer contacto hasta el soporte posterior."
        withCTA
        ctaLabel="Solicitar revisión técnica"
        microcopy="Revisaremos el contexto inicial y te indicaremos qué información ayuda a evaluar el proyecto con mayor claridad."
      />

      <PageSection>
        <PageContainer>
          <PageHeader
            title="Del primer contacto a la operación"
            subtitle="El objetivo es que un director, fundador o responsable operativo entienda qué esperar en cada momento."
          />
          <PageTimeline
            steps={[
              {
                title: 'Primer contacto',
                description: 'Recibimos el contexto general: problema, objetivo, sistemas actuales y urgencia. Si la necesidad corresponde a nuestro enfoque, coordinamos una conversación técnica.',
              },
              {
                title: 'Revisión inicial',
                description: 'Analizamos alcance, usuarios, dependencias, información disponible y riesgos principales. Esta revisión ayuda a saber si conviene construir, integrar, modernizar o automatizar.',
              },
              {
                title: 'Estimación',
                description: 'La estimación se realiza con base en alcance, complejidad, integraciones, datos, disponibilidad de información y nivel de definición requerido.',
              },
              {
                title: 'Inicio del proyecto',
                description: 'Se alinean responsables, accesos, herramientas, entregables y criterios de aceptación. El objetivo es iniciar con expectativas claras.',
              },
              {
                title: 'Entregas y revisiones',
                description: 'Los avances se presentan por bloques funcionales. El cliente valida flujos, detecta ajustes y confirma que la solución responde al proceso real.',
              },
              {
                title: 'Despliegue',
                description: 'La implementación se realiza en el entorno acordado, con configuración, validación final y documentación necesaria para operar la solución.',
              },
              {
                title: 'Continuidad y soporte',
                description: 'Después de la entrega se puede estructurar soporte, correcciones, monitoreo o evolución del producto según las necesidades del proyecto.',
              },
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Qué información ayuda a estimar mejor" align="center" />
          <PageGrid columns={3}>
            <PageIconCard
              icon="Users"
              title="Usuarios y roles"
              text="Quién utilizará la solución, qué permisos necesita y qué flujo sigue en la operación diaria."
            />
            <PageIconCard
              icon="Database"
              title="Datos y sistemas"
              text="Qué información existe, dónde vive y qué sistemas deben conectarse o conservarse."
            />
            <PageIconCard
              icon="ListChecks"
              title="Prioridades"
              text="Qué funcionalidades son indispensables para la primera entrega y cuáles pueden evolucionar después."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer>
          <PageHeader title="Preguntas frecuentes" />
          <PageFAQ
            faqs={[
              {
                question: '¿Se puede estimar un proyecto sin tener todo definido?',
                answer: 'Sí, pero la estimación será más precisa cuando existan objetivos, flujos principales, sistemas involucrados y criterios de aceptación. Si aún no existe esa información, puede iniciar con una etapa de diagnóstico.',
              },
              {
                question: '¿Cómo se entregan los avances?',
                answer: 'Los avances se entregan por bloques funcionales para que el cliente pueda revisar comportamiento, detectar ajustes y confirmar prioridades antes de continuar.',
              },
              {
                question: '¿Qué pasa si durante el proyecto aparece una necesidad nueva?',
                answer: 'Se revisa el impacto sobre alcance, prioridad y tiempos. La idea es tomar decisiones explícitas, no incorporar cambios sin evaluar consecuencias.',
              },
              {
                question: '¿Cómo continúa el soporte?',
                answer: 'El soporte se define según el tipo de solución: correcciones, ajustes, monitoreo, evolución funcional o acompañamiento técnico posterior.',
              },
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageCTA
        title="Aclaremos el camino antes de iniciar"
        subtitle="Una revisión técnica inicial permite identificar alcance, riesgos y próximos pasos sin comprometer decisiones prematuras."
        ctaLabel="Solicitar revisión técnica"
        microcopy="Analizaremos tu caso y coordinaremos una llamada para entender el proyecto, su contexto y sus restricciones."
      />
    </main>
  );
}
