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
  title: 'Metodología de Trabajo | Código Nexo',
  description: 'Metodología de Código Nexo para descubrir, analizar, diseñar, desarrollar, probar, implementar y acompañar proyectos tecnológicos.',
  alternates: {
    canonical: 'https://codigonexo.mx/metodologia',
  },
  openGraph: {
    title: 'Metodología de Trabajo | Código Nexo',
    description: 'Proceso técnico para convertir necesidades de negocio en soluciones digitales mantenibles y verificables.',
    url: 'https://codigonexo.mx/metodologia',
    type: 'website',
  },
};

export default function MetodologiaPage() {
  return (
    <main>
      <Breadcrumbs />

      <PageHero
        title="Metodología clara para proyectos tecnológicos"
        subtitle="Trabajamos con etapas definidas para reducir ambigüedad, validar decisiones y mantener trazabilidad desde el primer diagnóstico hasta el soporte posterior."
        withCTA
        ctaLabel="Solicitar diagnóstico tecnológico"
        microcopy="Revisaremos el contexto inicial y definiremos qué información conviene reunir antes de estimar o construir."
      />

      <PageSection>
        <PageContainer>
          <PageHeader
            title="Etapas de trabajo"
            subtitle="Cada etapa tiene un objetivo concreto, entregables esperados y participación definida del cliente."
          />
          <PageTimeline
            steps={[
              {
                title: 'Descubrimiento',
                description: 'Objetivo: entender el problema, usuarios, operación actual y restricciones. Entregables: contexto inicial, objetivos y mapa de necesidades. Participación del cliente: compartir procesos, prioridades y expectativas.',
              },
              {
                title: 'Análisis',
                description: 'Objetivo: ordenar requerimientos, dependencias y riesgos. Entregables: alcance preliminar, criterios de aceptación y supuestos. Participación del cliente: validar prioridades y resolver dudas operativas.',
              },
              {
                title: 'Arquitectura',
                description: 'Objetivo: definir estructura técnica, integraciones, datos y despliegue. Entregables: propuesta técnica, componentes principales y ruta de implementación. Participación del cliente: revisar restricciones, sistemas existentes y políticas internas.',
              },
              {
                title: 'Desarrollo',
                description: 'Objetivo: construir incrementos funcionales con control de calidad. Entregables: versiones revisables, repositorio y avances documentados. Participación del cliente: revisar entregas y confirmar ajustes.',
              },
              {
                title: 'Pruebas',
                description: 'Objetivo: validar comportamiento, seguridad básica, rendimiento esperado y experiencia de uso. Entregables: hallazgos, correcciones y criterios de salida. Participación del cliente: probar flujos críticos y confirmar aceptación.',
              },
              {
                title: 'Implementación',
                description: 'Objetivo: llevar la solución al entorno acordado con una ruta controlada. Entregables: despliegue, configuración y documentación operativa. Participación del cliente: coordinar accesos, usuarios y validación final.',
              },
              {
                title: 'Soporte',
                description: 'Objetivo: acompañar operación, ajustes y continuidad técnica. Entregables: seguimiento, correcciones y recomendaciones de evolución. Participación del cliente: reportar incidencias y priorizar mejoras.',
              },
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Cómo se controla el avance" align="center" />
          <PageGrid columns={3}>
            <PageIconCard
              icon="ClipboardCheck"
              title="Entregables definidos"
              text="Cada fase se orienta a resultados verificables para evitar avances difíciles de evaluar."
            />
            <PageIconCard
              icon="GitBranch"
              title="Iteraciones revisables"
              text="El proyecto avanza por incrementos que permiten revisar, corregir y ajustar prioridades con contexto."
            />
            <PageIconCard
              icon="FileText"
              title="Documentación útil"
              text="La documentación se enfoca en decisiones, configuración y operación, no en procesos innecesarios."
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
                question: '¿Siempre se siguen todas las etapas?',
                answer: 'La secuencia se adapta al tipo de proyecto. En iniciativas pequeñas algunas etapas pueden ser más ligeras, pero el objetivo es conservar claridad sobre alcance, riesgos y validación.',
              },
              {
                question: '¿La metodología aplica para sistemas existentes?',
                answer: 'Sí. En proyectos de modernización o integración, las primeras etapas ayudan a entender dependencias, deuda técnica y restricciones antes de intervenir una plataforma activa.',
              },
              {
                question: '¿Qué necesita preparar el cliente?',
                answer: 'Conviene reunir contexto del proceso, accesos disponibles, sistemas involucrados, usuarios clave, restricciones internas y objetivos del proyecto.',
              },
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageCTA
        title="Definamos la ruta correcta antes de construir"
        subtitle="Una metodología clara ayuda a estimar, priorizar y reducir riesgos técnicos desde el inicio."
        ctaLabel="Solicitar diagnóstico tecnológico"
        microcopy="Analizaremos tu caso y coordinaremos una conversación técnica para revisar la etapa inicial del proyecto."
      />
    </main>
  );
}
