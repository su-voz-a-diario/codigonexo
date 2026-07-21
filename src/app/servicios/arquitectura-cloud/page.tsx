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
  title: 'Arquitectura Cloud & DevOps | CódigoNexo',
  description: 'Migración, modernización y gestión de infraestructura en la nube. Operaciones resilientes, seguras y altamente disponibles para empresas.',
  alternates: {
    canonical: 'https://codigonexo.mx/servicios/arquitectura-cloud',
  },
};

export default function ArquitecturaCloudPage() {
  return (
    <>
      <ServiceSchema 
        name="Arquitectura Cloud y DevOps"
        description="Diseño, migración y gestión de infraestructura en la nube para alta disponibilidad y resiliencia corporativa."
        url="https://codigonexo.mx/servicios/arquitectura-cloud"
      />
      
      <PageHero 
        title={<>Infraestructura Cloud<br />Diseñada para Escalar</>}
        subtitle="Migramos y modernizamos sus operaciones hacia entornos Cloud Nativos. Alta disponibilidad, despliegues sin interrupciones y reducción de costos operativos."
        withCTA
      />

      <PageSection>
        <PageContainer>
          <PageHeader title="El Riesgo del On-Premise" align="center" />
          <PageFeatureGrid 
            features={[
              {
                title: "Costos de Inactividad (Downtime)",
                description: "Cada minuto de caída cuesta miles de dólares y daña irremediablemente la reputación de la marca."
              },
              {
                title: "Sobreaprovisionamiento",
                description: "Pago de servidores inactivos esperando un pico de tráfico que ocurre solo unas cuantas veces al año."
              },
              {
                title: "Recuperación ante Desastres (DRP)",
                description: "Ausencia de respaldos geo-redundantes que garantizan la continuidad del negocio ante fallos físicos."
              }
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Nuestra Solución: Cloud Nativo" />
          <PageGrid columns={3}>
            <PageIconCard 
              icon="Cloud"
              title="Migración y Modernización"
              text="Transicionamos sus sistemas monolíticos hacia arquitecturas Serverless o de Contenedores (Kubernetes)."
            />
            <PageIconCard 
              icon="Activity"
              title="Monitorización y Observabilidad"
              text="Implementamos telemetría avanzada (Datadog, Grafana) para anticipar fallos antes de que afecten al usuario."
            />
            <PageIconCard 
              icon="Cpu"
              title="DevOps y Automatización"
              text="Infraestructura como Código (IaC) con Terraform. Sus servidores se despliegan y versionan como software."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer>
          <PageHeader title="Beneficios Corporativos" align="center" />
          <PageGrid columns={2}>
            <PageIconCard 
              icon="Lock"
              title="Seguridad y Cumplimiento"
              text="Configuraciones estandarizadas bajo normas internacionales (ISO 27001, SOC2). Redes privadas, WAFs y cifrado at-rest/in-transit."
            />
            <PageIconCard 
              icon="BarChart"
              title="Elasticidad Financiera (FinOps)"
              text="Auto-escalado dinámico: pague únicamente por el cómputo que su aplicación requiere en tiempo real, maximizando su ROI."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection theme="darker">
        <PageContainer>
          <PageHeader title="Cronología de Migración" />
          <PageTimeline 
            steps={[
              {
                title: "Assessment & Auditoría",
                description: "Evaluamos su infraestructura actual, dependencias, cuellos de botella y costos ocultos."
              },
              {
                title: "Estrategia Cloud",
                description: "Definimos si el enfoque será Rehosting (Lift & Shift), Replatforming o Refactoring hacia Microservicios."
              },
              {
                title: "Proof of Concept (PoC)",
                description: "Migramos un flujo no crítico para validar el rendimiento, la latencia y la seguridad del nuevo entorno."
              },
              {
                title: "Migración a Producción",
                description: "Corte controlado con mínima disrupción. Implementación de CI/CD para futuros despliegues automáticos."
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
                question: "¿Con qué proveedores de nube trabajan?",
                answer: "Somos agnósticos, aunque nos especializamos en AWS y Google Cloud Platform (GCP). También operamos ecosistemas Vercel/Next.js para aplicaciones Frontend Serverless."
              },
              {
                question: "¿Habrá tiempo de inactividad durante la migración?",
                answer: "Diseñamos la estrategia para lograr Zero-Downtime. Sincronizamos las bases de datos en tiempo real y realizamos un cambio de DNS instantáneo cuando el nuevo entorno está validado."
              },
              {
                question: "¿Qué es Infraestructura como Código (IaC)?",
                answer: "Es la práctica de definir sus servidores (redes, bases de datos, permisos) en archivos de código. Esto permite recrear su infraestructura completa en minutos ante un desastre, eliminando el error humano."
              }
            ]}
          />
        </PageContainer>
      </PageSection>

      <PageCTA 
        title="Eleve la resiliencia de sus operaciones" 
        subtitle="Permítanos auditar su infraestructura actual y diseñar un roadmap de modernización Cloud."
      />
    </>
  );
}
