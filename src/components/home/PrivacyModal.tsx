'use client';
import { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';

// Exportamos un disparador global para que otros componentes puedan abrirlo fácilmente
export function openPrivacyModal(e?: React.MouseEvent) {
  if (e) e.preventDefault();
  window.dispatchEvent(new Event('openPrivacyModal'));
}

export default function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleOpen = () => {
      previousFocus.current = document.activeElement as HTMLElement;
      setIsOpen(true);
    };
    
    window.addEventListener('openPrivacyModal', handleOpen);
    
    // Compatibilidad para botones legacy que aún existan por ID
    const legacyHandler = (e: Event) => {
      e.preventDefault();
      handleOpen();
    };
    const legacyBtns = document.querySelectorAll('#openPrivacyFooter, #openPrivacyModal');
    legacyBtns.forEach(btn => btn.addEventListener('click', legacyHandler));

    return () => {
      window.removeEventListener('openPrivacyModal', handleOpen);
      legacyBtns.forEach(btn => btn.removeEventListener('click', legacyHandler));
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Guardar el estado anterior y bloquear scroll
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      // Enfocar el botón de cerrar para accesibilidad
      setTimeout(() => closeBtnRef.current?.focus(), 50);
      
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          previousFocus.current?.focus(); // Restaurar foco
        }
      };
      document.addEventListener('keydown', handleEsc);
      
      return () => {
        // Limpieza obligatoria
        document.body.style.overflow = originalOverflow;
        document.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay active" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modalTitle"
      onClick={(e) => {
        // Cierre al hacer click fuera del contenido (en el overlay)
        if (e.target === e.currentTarget) {
          setIsOpen(false);
          previousFocus.current?.focus();
        }
      }}
    >
      <div className="modal-content">
        <button 
          ref={closeBtnRef}
          className="modal-close" 
          aria-label="Cerrar modal"
          onClick={() => {
            setIsOpen(false);
            previousFocus.current?.focus();
          }}
        >
          <X />
        </button>
        <div className="modal-body">
          <h2 id="modalTitle">Aviso de Privacidad</h2>
          <p>En CódigoNexo, valoramos y respetamos tu privacidad. Los datos personales recabados a través de nuestro formulario de contacto serán utilizados exclusivamente para dar seguimiento a tu solicitud, brindarte asesoría y enviarte información relacionada con nuestros servicios.</p>
          <p>Tus datos no serán compartidos, vendidos ni alquilados a terceros bajo ninguna circunstancia, y se almacenarán de forma segura aplicando medidas técnicas y administrativas para evitar su vulneración.</p>
          <p>De conformidad con la legislación aplicable, tienes derecho a ejercer tus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) sobre tus datos personales. Para cualquier solicitud relacionada con el manejo de tu información, puedes contactarnos directamente en <strong>codigonexo.rgz@gmail.com</strong>.</p>
          <p>Al enviar tus datos, confirmas que has leído y aceptas los términos de este Aviso de Privacidad.</p>
        </div>
      </div>
    </div>
  );
}
