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
  title: 'Desarrollo con Inteligencia Artificial & LLMs | CódigoNexo',
  description: 'Automatización B2B con Inteligencia Artificial. Integramos OpenAI, Claude, Vector Databases y LangChain para crear agentes y flujos cognitivos empresariales.',
  alternates: {
    canonical: 'https://codigonexo.com/servicios/inteligencia-artificial'
  }
};

const processData = [
  {
    title: "1. Viabilidad y Estrategia de Datos",
    description: "Evaluamos la calidad de tus datos corporativos para determinar si es viable un modelo RAG (Retrieval-Augmented Generation) o un Fine-Tuning de LLMs."
  },
  {
    title: "2. Construcción de Pipelines (LangChain)",
    description: "Desarrollamos los flujos orquestados donde el software extrae el contexto empresarial y lo inyecta al modelo cognitivo de forma segura."
  },
  {
    title: "3. Privacidad y Seguridad (Vector DBs)",
    description: "Tus datos confidenciales no entrenan modelos públicos. Los vectorizamos y aseguramos en clústeres privados (Pinecone/Milvus)."
  },
  {
    title: "4. Integración al Ecosistema Core",
    description: "Conectamos los motores de IA mediante APIs REST o GraphQL a tu ERP, CRM o plataforma web actual."
  }
];

export default function InteligenciaArtificial() {
  return (
    <main>
      <ServiceSchema 
        name="Integración de Inteligencia Artificial Empresarial"
        description="Desarrollo de automatizaciones con LLMs, arquitecturas RAG y Agentes Autónomos."
        url="/servicios/inteligencia-artificial"
      />
      <Breadcrumbs />
      
      <PageHero 
        title={<>Automatización Cognitiva con <span style={{ color: '#3b82f6' }}>Inteligencia Artificial</span></>}
        subtitle="Dejamos atrás los chatbots de reglas básicas. Integramos LLMs avanzados (OpenAI, Claude, Gemini) con tus bases de datos privadas para resolver procesos operativos complejos en segundos."
        withCTA
      />

      <PageSection theme="dark">
        <PageContainer>
          <PageHeader 
            title="Ingeniería IA de Nivel Corporativo" 
            subtitle="El reto no es llamar a una API, es asegurar que el modelo no alucine y que la información privada de tu corporativo nunca se filtre."
          />
          <PageGrid columns={3}>
            <PageIconCard 
              icon="Brain"
              title="Arquitecturas RAG"
              text="Conectamos la IA directamente a tus manuales, historiales o bases de datos internas para que sus respuestas sean 100% precisas y basadas en tu empresa."
            />
            <PageIconCard 
              icon="Bot"
              title="Agentes Autónomos"
              text="Sistemas capaces de tomar decisiones encadenadas (ej. leer un correo, extraer datos clave, validarlos en tu ERP y emitir una alerta)."
            />
            <PageIconCard 
              icon="Database"
              title="Privacidad de Datos"
              text="Garantizamos que tu data propietaria jamás alimente modelos públicos, implementando capas de anonimización y clústeres vectoriales cerrados."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer width="narrow">
          <PageHeader 
            title="Implementación Técnica" 
            align="left" 
            subtitle="Metodología rigurosa para llevar la IA de prueba de concepto a producción."
          />
          <PageFeatureGrid features={processData} />
          
          <PageCTA 
            title="¿Listo para potenciar tu operación con IA?" 
            subtitle="Nuestros Ingenieros en IA analizarán tus flujos de trabajo."
          />
        </PageContainer>
      </PageSection>

    </main>
  );
}
