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
  title: 'Soluciones de Inteligencia Artificial | CódigoNexo',
  description: 'Automatización cognitiva y agentes autónomos. Integramos IA generativa (LLMs) a procesos empresariales con criterios de seguridad y utilidad operativa.',
  alternates: {
    canonical: 'https://codigonexo.mx/servicios/inteligencia-artificial',
  },
};

export default function IAPage() {
  return (
    <>
      <ServiceSchema 
        name="Soluciones de Inteligencia Artificial"
        description="Integración de IA Generativa, agentes autónomos y análisis cognitivo en procesos corporativos."
        url="https://codigonexo.mx/servicios/inteligencia-artificial"
      />
      
      <PageHero 
        title={<>Inteligencia Artificial<br />Aplicada a Negocios</>}
        subtitle="No vendemos chatbots básicos. Diseñamos Agentes Autónomos y sistemas cognitivos (RAG) integrados a los datos privados de su empresa para automatizar flujos críticos."
        withCTA
        ctaLabel="Analizar un caso de uso"
        microcopy="Revisaremos el proceso, la calidad de los datos y la viabilidad técnica antes de proponer una implementación."
      />

      <PageSection>
        <PageContainer>
          <PageHeader title="El Cuello de Botella Operativo" align="center" />
          <PageFeatureGrid 
            features={[
              {
                title: "Procesamiento Manual de Datos",
                description: "Equipos enteros dedicados a extraer información de PDFs, facturas y correos electrónicos."
              },
              {
                title: "Soporte Saturado",
                description: "Tiempos de respuesta lentos ante clientes B2B debido al volumen de consultas técnicas o logísticas."
              },
              {
                title: "Decisiones Desinformadas",
                description: "Incapacidad para procesar el vasto conocimiento histórico de la empresa y extraer *insights* accionables."
              }
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Casos de Uso Empresariales" />
          <PageGrid columns={3}>
            <PageIconCard 
              icon="Bot"
              title="Agentes Autónomos (RAG)"
              text="Asistentes corporativos que consultan manuales internos, bases de datos y documentación para entregar respuestas trazables."
            />
            <PageIconCard 
              icon="FileText"
              title="Procesamiento Documental"
              text="Extracción y clasificación automatizada de datos desde miles de documentos no estructurados (contratos, reportes médicos, legales)."
            />
            <PageIconCard 
              icon="Brain"
              title="Flujos Cognitivos"
              text="IA capaz de evaluar, categorizar y tomar decisiones de baja fricción (ej. aprobación de créditos, triaje de soporte) orquestada mediante APIs."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer>
          <PageHeader title="Diferenciadores Clave" align="center" />
          <PageGrid columns={2}>
            <PageIconCard 
              icon="ShieldAlert"
              title="Privacidad Total de Datos"
              text="Diseñamos la integración para separar datos privados, controlar accesos y reducir exposición innecesaria de información sensible."
            />
            <PageIconCard 
              icon="Settings"
              title="Orquestación Multi-Modelo"
              text="Utilizamos la herramienta adecuada para el problema (OpenAI, Anthropic, Gemini, o Modelos Open Source auto-alojados para máxima confidencialidad)."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Metodología de Implementación" />
          <PageTimeline 
            steps={[
              {
                title: "Viabilidad y Scope",
                description: "Identificamos el proceso con mayor potencial de automatización (ROI) y evaluamos la calidad de sus datos base."
              },
              {
                title: "Prototipo (PoC)",
                description: "Construimos un modelo inicial para validar si la IA puede ejecutar la tarea con resultados útiles y medibles."
              },
              {
                title: "Ingeniería de Datos y RAG",
                description: "Conectamos el modelo a sus bases de datos reales mediante bases vectoriales (Pinecone/Weaviate) y cadenas de recuperación."
              },
              {
                title: "Despliegue y Monitoreo",
                description: "Lanzamiento a producción con sistemas de auditoría en la sombra para que humanos supervisen el rendimiento de la IA en tiempo real."
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
                question: "¿La IA va a reemplazar a mi equipo?",
                answer: "No. Nuestros sistemas actúan como 'Copilotos'. Asumen la carga cognitiva repetitiva para que su equipo humano se enfoque en el pensamiento estratégico y la supervisión."
              },
              {
                question: "¿Qué es RAG (Retrieval-Augmented Generation)?",
                answer: "Es una técnica donde, antes de responder, la IA busca contexto en documentos corporativos privados. Esto ayuda a reducir respuestas inventadas y mejora la trazabilidad."
              },
              {
                question: "¿Es seguro enviar datos corporativos a la nube?",
                answer: "Evaluamos opciones empresariales como Azure OpenAI o AWS Bedrock y definimos controles de privacidad, retención y acceso según los requisitos del proyecto."
              }
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageCTA 
        title="Evalúe una oportunidad real de automatización" 
        subtitle="Identifiquemos un caso de uso viable antes de invertir en una implementación completa."
        ctaLabel="Analizar un caso de uso"
        microcopy="Revisaremos el proceso, los datos disponibles y los riesgos técnicos para definir el siguiente paso."
      />
    </>
  );
}
