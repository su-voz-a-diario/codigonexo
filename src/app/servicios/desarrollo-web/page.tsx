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
  title: 'Desarrollo Web de Alto Rendimiento | CódigoNexo',
  description: 'Aplicaciones web escalables, PWAs y arquitecturas Headless. Especialistas en React, Next.js y ecosistemas modernos para alta concurrencia.',
  alternates: {
    canonical: 'https://codigonexo.mx/servicios/desarrollo-web'
  }
};

const processData = [
  {
    title: "1. Auditoría de Core Web Vitals",
    description: "Analizamos tu sitio actual o planeamos la arquitectura de tu nueva App para garantizar un Largest Contentful Paint (LCP) inferior a 2.5 segundos."
  },
  {
    title: "2. Arquitectura de Estado y Caché",
    description: "Diseñamos el flujo de datos. Si tu plataforma maneja inventarios o precios en tiempo real, utilizamos Server Components y revalidación granular."
  },
  {
    title: "3. Ingeniería Frontend (React/Next.js)",
    description: "Construimos componentes reutilizables, modulares y estandarizados, garantizando que el código sea mantenible por años."
  },
  {
    title: "4. Auditoría de Seguridad Web",
    description: "Validamos vulnerabilidades (XSS, CSRF, inyecciones) antes de desplegar en entornos Edge o Vercel."
  }
];

export default function DesarrolloWeb() {
  return (
    <main>
      <ServiceSchema 
        name="Ingeniería Frontend y Desarrollo Web"
        description="Construcción de aplicaciones web de nivel empresarial con arquitecturas React y Headless."
        url="/servicios/desarrollo-web"
      />
      <Breadcrumbs />
      
      <PageHero 
        title={<>Desarrollo Web de <span style={{ color: '#3b82f6' }}>Alto Rendimiento</span></>}
        subtitle="Construimos plataformas rápidas, seguras y preparadas para millones de usuarios. Adiós al código espagueti y a los tiempos de carga lentos."
        withCTA
      />

      <PageSection theme="dark">
        <PageContainer>
          <PageHeader 
            title="Arquitecturas Frontend Modernas" 
            subtitle="La web ha cambiado. Los usuarios exigen experiencias fluidas similares a aplicaciones nativas. Nosotros las construimos."
          />
          <PageGrid columns={3}>
            <PageIconCard 
              icon="Laptop"
              title="Single Page Apps (SPAs)"
              text="Interfaces ricas e interactivas construidas sobre React donde la navegación ocurre sin recargar el navegador, como Spotify o Netflix."
            />
            <PageIconCard 
              icon="Zap"
              title="Server-Side Rendering (SSR)"
              text="Utilizamos Next.js para renderizar la interfaz en el servidor. Obtendrás un SEO perfecto y tiempos de carga imperceptibles."
            />
            <PageIconCard 
              icon="Globe"
              title="Headless CMS & Commerce"
              text="Desacoplamos tu frontend de tu backend (Shopify, WordPress, Contentful) para mayor velocidad y menor superficie de ataque."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer width="narrow">
          <PageHeader 
            title="Proceso de Ingeniería Web" 
            align="left" 
            subtitle="Calidad de software garantizada desde el primer componente."
          />
          <PageFeatureGrid features={processData} />
          
          <PageCTA 
            title="¿Tu aplicación web se siente lenta u obsoleta?" 
            subtitle="Hablemos de cómo una arquitectura moderna puede transformar tu negocio."
          />
        </PageContainer>
      </PageSection>

    </main>
  );
}
