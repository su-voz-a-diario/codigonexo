'use client';

import { RefObject, useId, useState } from 'react';
import styles from './HomeContactForm.module.css';

interface HomeContactFormProps {
  onOpenPrivacy: () => void;
  privacyTriggerRef: RefObject<HTMLButtonElement | null>;
}

export default function HomeContactForm({ onOpenPrivacy, privacyTriggerRef }: HomeContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formId = useId();
  const isLoading = status === 'loading';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        return;
      }

      setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        Gracias. Revisaremos tu mensaje y daremos seguimiento a la solicitud.
      </div>
    );
  }

  return (
    <form
      action="https://formsubmit.co/ajax/codigonexo.rgz@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      className={styles.form}
      aria-describedby={`${formId}-privacy`}
    >
      <div className={styles.field}>
        <label htmlFor={`${formId}-name`}>Nombre</label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          disabled={isLoading}
          placeholder="Tu nombre"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor={`${formId}-email`}>Correo electrónico</label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={isLoading}
          placeholder="tu@empresa.com"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor={`${formId}-phone`}>Teléfono</label>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          disabled={isLoading}
          placeholder="Opcional"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor={`${formId}-message`}>Mensaje</label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          disabled={isLoading}
          placeholder="Cuéntanos sobre el proyecto o necesidad técnica"
        />
      </div>
      <button type="submit" className={styles.submit} disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Solicitar revisión técnica'}
      </button>
      {status === 'error' && (
        <p className={styles.error} role="alert">
          No pudimos enviar el formulario. Intenta nuevamente o escríbenos por correo.
        </p>
      )}
      <p id={`${formId}-privacy`} className={styles.privacy}>
        Al enviar este formulario aceptas nuestro{' '}
        <button
          ref={privacyTriggerRef}
          type="button"
          className={styles.privacyButton}
          onClick={onOpenPrivacy}
        >
          Aviso de Privacidad
        </button>
        .
      </p>
    </form>
  );
}
