import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageHero from '@/components/page/PageHero';
import PageSection from '@/components/page/PageSection';
import PageContainer from '@/components/page/PageContainer';
import PageHeader from '@/components/page/PageHeader';
import PageGrid from '@/components/page/PageGrid';
import PageIconCard from '@/components/page/PageIconCard';
import PageFAQ from '@/components/page/PageFAQ';
import PageCTA from '@/components/page/PageCTA';

export const metadata: Metadata = {
  title: 'Tecnologías | Código Nexo',
  description: 'Tecnologías utilizadas por Código Nexo para frontend, backend, cloud, bases de datos, DevOps, inteligencia artificial y automatización.',
  alternates: {
    canonical: 'https://codigonexo.mx/tecnologias',
  },
  openGraph: {
    title: 'Tecnologías | Código Nexo',
    description: 'Criterios para seleccionar tecnologías según contexto, operación, integraciones, seguridad y mantenibilidad.',
    url: 'https://codigonexo.mx/tecnologias',
    type: 'website',
  },
};

export default function TecnologiasPage() {
  return (
    <main>
      <Breadcrumbs />

      <PageHero
        title="Tecnologías seleccionadas por contexto"
        subtitle="No elegimos una herramienta solo por tendencia. La tecnología debe responder al problema, al equipo que la operará y a las restricciones del negocio."
        withCTA
        ctaLabel="Evaluar stack tecnológico"
        microcopy="Revisaremos tu caso para entender si conviene construir, integrar, modernizar o simplificar la base tecnológica actual."
      />

      <PageSection>
        <PageContainer>
          <PageHeader
            title="Frontend"
            subtitle="Tecnologías para construir interfaces web mantenibles, rápidas y preparadas para crecer."
          />
          <PageGrid columns={3}>
            <PageIconCard
              icon="Monitor"
              title="React"
              text="Sirve para construir interfaces por componentes. Se utiliza cuando la experiencia requiere interacción, reutilización y evolución continua."
            />
            <PageIconCard
              icon="Globe"
              title="Next.js"
              text="Sirve para crear aplicaciones web con routing, metadata y renderizado optimizado. Se utiliza cuando importan rendimiento, SEO y estructura escalable."
            />
            <PageIconCard
              icon="Palette"
              title="CSS Modules"
              text="Sirve para aislar estilos por componente. Se utiliza cuando el proyecto necesita mantener consistencia visual sin colisiones globales."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader
            title="Backend"
            subtitle="Herramientas para APIs, lógica de negocio, integraciones y servicios internos."
          />
          <PageGrid columns={3}>
            <PageIconCard
              icon="Server"
              title="Node.js"
              text="Sirve para construir APIs y servicios orientados a eventos. Se utiliza en plataformas web, integraciones y automatizaciones con alto intercambio de datos."
            />
            <PageIconCard
              icon="Code"
              title="TypeScript"
              text="Sirve para reducir errores mediante tipado. Se utiliza cuando el código debe mantenerse, crecer y ser comprensible para equipos técnicos."
            />
            <PageIconCard
              icon="Network"
              title="APIs REST"
              text="Sirven para conectar sistemas de forma clara. Se utilizan cuando se requiere interoperabilidad entre plataformas, CRMs, ERPs o servicios externos."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer>
          <PageHeader
            title="Cloud y bases de datos"
            subtitle="Infraestructura y persistencia seleccionadas según disponibilidad, operación, costos y requisitos de datos."
          />
          <PageGrid columns={3}>
            <PageIconCard
              icon="Cloud"
              title="AWS y Google Cloud"
              text="Sirven para desplegar servicios, almacenamiento y componentes administrados. Se utilizan cuando el proyecto necesita disponibilidad, escalabilidad y operación controlada."
            />
            <PageIconCard
              icon="Database"
              title="PostgreSQL"
              text="Sirve para datos relacionales y transacciones estructuradas. Se utiliza cuando la integridad, consultas claras y consistencia son importantes."
            />
            <PageIconCard
              icon="Archive"
              title="Almacenamiento administrado"
              text="Sirve para archivos, respaldos y recursos estáticos. Se utiliza cuando se requiere disponibilidad sin operar infraestructura manualmente."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader
            title="DevOps"
            subtitle="Prácticas y herramientas para entregar cambios con mayor control técnico."
          />
          <PageGrid columns={3}>
            <PageIconCard
              icon="GitBranch"
              title="Control de versiones"
              text="Sirve para mantener historial, revisión y colaboración sobre el código. Se utiliza en cualquier proyecto que requiera continuidad técnica."
            />
            <PageIconCard
              icon="Wrench"
              title="CI/CD"
              text="Sirve para automatizar validaciones y despliegues. Se utiliza cuando el proyecto necesita entregas repetibles y menor riesgo operativo."
            />
            <PageIconCard
              icon="Activity"
              title="Observabilidad"
              text="Sirve para monitorear errores, rendimiento y comportamiento. Se utiliza cuando la operación necesita visibilidad posterior al despliegue."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer>
          <PageHeader
            title="Inteligencia artificial y automatización"
            subtitle="Aplicaciones prácticas para apoyar procesos, reducir tareas manuales y conectar información."
          />
          <PageGrid columns={3}>
            <PageIconCard
              icon="BrainCircuit"
              title="IA generativa"
              text="Sirve para asistir análisis, generación de texto o procesamiento de información. Se utiliza cuando existe un caso de uso claro y validable."
            />
            <PageIconCard
              icon="Bot"
              title="Automatización de procesos"
              text="Sirve para ejecutar tareas repetitivas entre sistemas. Se utiliza cuando hay reglas definidas, datos disponibles y alto trabajo manual."
            />
            <PageIconCard
              icon="Workflow"
              title="Orquestación de flujos"
              text="Sirve para coordinar pasos entre herramientas. Se utiliza cuando una operación depende de múltiples sistemas y aprobaciones."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Preguntas frecuentes" />
          <PageFAQ
            faqs={[
              {
                question: '¿Siempre usan el mismo stack?',
                answer: 'No. Partimos del contexto del proyecto: sistemas existentes, operación, equipo disponible, seguridad, presupuesto y objetivos de evolución.',
              },
              {
                question: '¿Pueden trabajar con tecnologías ya existentes en la empresa?',
                answer: 'Sí. En muchos proyectos conviene integrarse con herramientas actuales antes de proponer cambios de mayor alcance.',
              },
              {
                question: '¿Cómo deciden si una tecnología es adecuada?',
                answer: 'Evaluamos mantenibilidad, disponibilidad de talento, integración, seguridad, costos operativos y capacidad de evolucionar con el proyecto.',
              },
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageCTA
        title="Revisemos tu base tecnológica"
        subtitle="Podemos analizar si el stack actual soporta tus objetivos o si conviene una evolución gradual."
        ctaLabel="Evaluar stack tecnológico"
        microcopy="Analizaremos tu caso y coordinaremos una conversación técnica para revisar sistemas, integraciones y prioridades."
      />
    </main>
  );
}
