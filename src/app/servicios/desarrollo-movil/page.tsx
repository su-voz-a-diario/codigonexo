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
  title: 'Desarrollo de Aplicaciones Móviles | CódigoNexo',
  description: 'Desarrollo iOS y Android nativo y cross-platform. Construimos Apps empresariales escalables con Flutter, React Native y Swift.',
  alternates: {
    canonical: 'https://codigonexo.com/servicios/desarrollo-movil'
  }
};

const processData = [
  {
    title: "1. Arquitectura de Datos Offline-First",
    description: "Diseñamos bases de datos locales (SQLite/Realm) que se sincronizan con la nube cuando el dispositivo recupera la conexión."
  },
  {
    title: "2. Diseño UX/UI Nativo",
    description: "Respetamos las Human Interface Guidelines de Apple y Material Design de Google para que la App se sienta natural en cada plataforma."
  },
  {
    title: "3. Integración de Hardware",
    description: "Acceso profundo a biometría (Face ID/Fingerprint), Bluetooth BLE, geolocalización en background y cámaras."
  },
  {
    title: "4. Distribución App Store / Google Play",
    description: "Gestionamos la firma de certificados, perfiles de aprovisionamiento, y la negociación de las políticas de revisión de ambas tiendas."
  }
];

export default function DesarrolloMovil() {
  return (
    <main>
      <ServiceSchema 
        name="Agencia de Desarrollo de Apps Móviles"
        description="Ingeniería móvil iOS y Android para empresas."
        url="/servicios/desarrollo-movil"
      />
      <Breadcrumbs />
      
      <PageHero 
        title={<>Desarrollo de Aplicaciones <span style={{ color: '#3b82f6' }}>Móviles</span></>}
        subtitle="Ponemos el núcleo de tu negocio en el bolsillo de tus usuarios. Desarrollamos Apps robustas, offline-first y preparadas para millones de descargas."
        withCTA
      />

      <PageSection theme="dark">
        <PageContainer>
          <PageHeader 
            title="Ingeniería Mobile de Clase Mundial" 
            subtitle="Evitamos las fallas, pantallas blancas y consumos excesivos de batería que plagan a las aplicaciones mal construidas."
          />
          <PageGrid columns={3}>
            <PageIconCard 
              icon="Smartphone"
              title="iOS (Swift) y Android (Kotlin)"
              text="Desarrollo nativo puro cuando tu aplicación demanda exprimir al máximo el rendimiento del hardware, la cámara o la biometría."
            />
            <PageIconCard 
              icon="Layers"
              title="Cross-Platform (React Native)"
              text="Optimización de presupuesto y mantenimiento utilizando un solo código fuente que se compila de forma casi nativa para ambas plataformas."
            />
            <PageIconCard 
              icon="ShieldCheck"
              title="Seguridad Mobile"
              text="Cifrado de bases de datos locales, ofuscación de código y almacenamiento seguro de tokens (Keychain/Keystore) para sector Fintech o Salud."
            />
          </PageGrid>
        </PageContainer>
      </PageSection>

      <PageSection>
        <PageContainer width="narrow">
          <PageHeader 
            title="Proceso de Desarrollo App" 
            align="left" 
            subtitle="De la concepción arquitectónica a la publicación en los Stores."
          />
          <PageFeatureGrid features={processData} />
          
          <PageCTA 
            title="Lanza tu aplicación móvil al mercado" 
            subtitle="Agendemos una sesión técnica para estimar la arquitectura y los tiempos."
          />
        </PageContainer>
      </PageSection>

    </main>
  );
}
