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
  description: 'Automatización cognitiva y agentes autónomos. Integramos IA generativa (LLMs) a los procesos de su empresa para multiplicar su eficiencia.',
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
              text="Asistentes corporativos que consumen sus manuales internos, bases de datos y documentaciones para brindar respuestas precisas y referenciadas."
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
              text="Sus datos empresariales nunca se utilizan para entrenar modelos públicos. Implementamos barreras de seguridad (Data Fences) de nivel corporativo."
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
                description: "En semanas, construimos un modelo inicial para validar que la IA es capaz de ejecutar la tarea con alta precisión (baja tasa de alucinación)."
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
                answer: "Es una técnica donde, antes de que la IA responda, primero busca la respuesta en sus documentos corporativos privados. Esto elimina las 'alucinaciones' y asegura que las respuestas sean 100% precisas respecto a las políticas de su empresa."
              },
              {
                question: "¿Es seguro enviar datos corporativos a la nube?",
                answer: "Configuramos instancias empresariales (ej. Azure OpenAI, AWS Bedrock) que garantizan por contrato que los datos no persisten, no se usan para entrenamiento y cumplen normativas (HIPAA, SOC2)."
              }
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageCTA 
        title="Multiplique la capacidad operativa de su empresa" 
        subtitle="Descubra cómo los modelos fundacionales pueden integrarse a su cadena de valor."
      />
    </>
  );
}
