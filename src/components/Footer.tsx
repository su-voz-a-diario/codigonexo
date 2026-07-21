export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer-grid">
                <div>
                    <div className="footer-logo">
                        <img src="/assets/images/logo-transparente.webp" alt="CódigoNexo Logo" className="footer-brand-logo" width="2098" height="568" loading="lazy" decoding="async" />
                    </div>
                    <p style={{fontSize: '0.9rem'}}>Convertimos tus ideas en herramientas digitales.</p>
                </div>
                
                <div className="footer-links">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#portafolio">Portafolio</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
                
                <div className="footer-legal">
                    <h4>Legal</h4>
                    <ul>
                        <li><button type="button" id="openPrivacyFooter">Aviso de Privacidad</button></li>
                    </ul>
                </div>
            </div>
            
            <div className="copyright">
                &copy; 2025 CódigoNexo. Todos los derechos reservados.
            </div>
        </div>
    </footer>
  );
}
