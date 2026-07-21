'use client';

import { RefObject, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import styles from './HomePrivacyModal.module.css';

interface HomePrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  restoreFocusRef: RefObject<HTMLElement | null>;
}

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export default function HomePrivacyModal({ isOpen, onClose, restoreFocusRef }: HomePrivacyModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        restoreFocusRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, restoreFocusRef]);

  if (!isOpen) return null;

  const closeAndRestoreFocus = () => {
    onClose();
    restoreFocusRef.current?.focus();
  };

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeAndRestoreFocus();
        }
      }}
    >
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.close}
          aria-label="Cerrar aviso de privacidad"
          onClick={closeAndRestoreFocus}
        >
          <X size={24} aria-hidden="true" />
        </button>
        <div className={styles.body}>
          <h2 id="privacy-modal-title">Aviso de Privacidad</h2>
          <p>En CódigoNexo, valoramos y respetamos tu privacidad. Los datos personales recabados a través de nuestro formulario de contacto serán utilizados exclusivamente para dar seguimiento a tu solicitud, brindarte asesoría y enviarte información relacionada con nuestros servicios.</p>
          <p>Tus datos no serán compartidos, vendidos ni alquilados a terceros bajo ninguna circunstancia, y se almacenarán de forma segura aplicando medidas técnicas y administrativas para evitar su vulneración.</p>
          <p>De conformidad con la legislación aplicable, tienes derecho a ejercer tus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) sobre tus datos personales. Para cualquier solicitud relacionada con el manejo de tu información, puedes contactarnos directamente en <strong>codigonexo.rgz@gmail.com</strong>.</p>
          <p>Al enviar tus datos, confirmas que has leído y aceptas los términos de este Aviso de Privacidad.</p>
        </div>
      </div>
    </div>
  );
}
