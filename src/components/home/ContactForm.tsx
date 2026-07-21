'use client';
import { useState } from 'react';
import { openPrivacyModal } from './PrivacyModal';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="success-message" style={{ display: 'block' }}>
        ¡Gracias! Te responderemos en menos de 24 horas.
      </div>
    );
  }

  return (
    <>
      <form action="https://formsubmit.co/ajax/codigonexo.rgz@gmail.com" method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre" style={{display: 'none'}}>Nombre</label>
          <input type="text" id="nombre" name="name" className="form-control" placeholder="Tu Nombre *" required disabled={status === 'loading'} />
        </div>
        <div className="form-group">
          <label htmlFor="email" style={{display: 'none'}}>Correo Electrónico</label>
          <input type="email" id="email" name="email" className="form-control" placeholder="Tu Correo Electrónico *" required disabled={status === 'loading'} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono" style={{display: 'none'}}>Teléfono</label>
          <input type="tel" id="telefono" name="phone" className="form-control" placeholder="Tu Teléfono (Opcional)" disabled={status === 'loading'} />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje" style={{display: 'none'}}>Mensaje</label>
          <textarea id="mensaje" name="message" className="form-control" placeholder="Cuéntanos sobre tu idea o proyecto *" required disabled={status === 'loading'}></textarea>
        </div>
        <button type="submit" className="btn btn-primary form-btn" disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando...' : 'Cotizar proyecto'}
        </button>
        {status === 'error' && <p style={{color: 'red', marginTop: '10px', textAlign: 'center'}}>Hubo un error al enviar. Por favor intenta nuevamente.</p>}
        <p style={{fontSize: '0.85rem', marginTop: '15px', color: 'var(--gris-texto)', textAlign: 'center', fontWeight: '500'}}>
          Recibe una propuesta técnica y cotización inicial en menos de 24 horas.
        </p>
      </form>
      <p className="disclaimer">Al enviar este formulario aceptas nuestro <button type="button" style={{background: 'none', border: 'none', padding: 0, color: 'var(--naranja-cta)', textDecoration: 'underline', cursor: 'pointer', font: 'inherit'}} onClick={openPrivacyModal}>Aviso de Privacidad</button>.</p>
    </>
  );
}
