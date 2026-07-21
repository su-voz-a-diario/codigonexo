import Breadcrumbs from '@/components/ui/Breadcrumbs';
import GlobalCTA from '@/components/ui/GlobalCTA';
import { Shield, Lock, Server, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seguridad y Compliance | CódigoNexo',
  description: 'Conoce nuestra arquitectura de seguridad, infraestructura, SLA y cumplimiento corporativo.',
};

export default function SeguridadCompliance() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0c', color: '#fff', paddingBottom: '4rem' }}>
      <Breadcrumbs />
      
      {/* HERO SECTION */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          Seguridad de Grado <span style={{ color: '#3b82f6' }}>Empresarial</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '800px' }}>
          Para corporativos e instituciones de alto perfil, el código bonito no es suficiente. 
          Construimos arquitecturas resilientes con cifrado end-to-end y disponibilidad del 99.99%.
        </p>
      </section>

      {/* BENTO GRID - ARCHITECTURE */}
      <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2rem' }}>
            <Shield size={32} color="#3b82f6" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Cifrado en Tránsito y Reposo</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
              Todas las bases de datos y conexiones utilizan estándares AES-256 y TLS 1.3. 
              Garantizamos que la información sensible siempre permanezca cifrada.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2rem' }}>
            <Server size={32} color="#3b82f6" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Infraestructura Distribuida</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
              Desplegamos en AWS y Google Cloud usando clústeres redundantes. 
              Si un nodo falla, el sistema escala automáticamente sin tiempo de inactividad.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2rem' }}>
            <Lock size={32} color="#3b82f6" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Propiedad y NDAs</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
              Todo el código fuente y la propiedad intelectual te pertenecen al 100%. 
              Operamos bajo estrictos Acuerdos de Confidencialidad corporativos.
            </p>
          </div>

        </div>
      </section>

      {/* SLA & PIPELINE */}
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Continuidad de Negocio</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <CheckCircle color="#10b981" size={24} style={{ flexShrink: 0 }} />
            <div>
              <strong>Service Level Agreement (SLA) del 99.9%</strong>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Garantía contractual de disponibilidad para proyectos de misión crítica.</p>
            </div>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <CheckCircle color="#10b981" size={24} style={{ flexShrink: 0 }} />
            <div>
              <strong>Backups Automatizados</strong>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Respaldo diario de bases de datos con retención configurable según la industria (ej. HIPAA).</p>
            </div>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <CheckCircle color="#10b981" size={24} style={{ flexShrink: 0 }} />
            <div>
              <strong>CI/CD y Pruebas Unitarias</strong>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Los despliegues pasan por un pipeline estricto. Si los tests fallan, el código no sube a producción.</p>
            </div>
          </li>
        </ul>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>¿Necesitas una arquitectura a la medida?</h2>
          <GlobalCTA variant="large" />
        </div>
      </section>
    </main>
  );
}
