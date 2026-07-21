export default function Home() {
  return (
    <>
      {/*  MAIN CONTENT  */}
    <main>
        {/*  HÉROE  */}
        <section id="inicio" className="hero">
            <div className="hero-content fade-in-up">
                <img src="assets/images/logo-solo.webp" alt="CódigoNexo Icon" className="hero-logo-solo" width="3932" height="3627" fetchPriority="high" />
                <h1>ACELERAMOS TU NEGOCIO<br />CON SOFTWARE A LA MEDIDA</h1>
                <p>En CódigoNexo construimos plataformas web, aplicaciones y software a la medida para empresas que buscan automatizar y escalar sus operaciones con tecnología de nivel premium.</p>
                <div className="hero-buttons">
                    <a href="#contacto" className="btn btn-primary">Cotiza tu proyecto hoy</a>
                    <a href="#servicios" className="btn btn-secondary">Explora nuestras soluciones</a>
                </div>

            <div className="logo-cloud fade-in-up" style={{transitionDelay: '0.4s', marginTop: '60px', textAlign: 'center'}}>
                <p style={{fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: '25px', letterSpacing: '0.1em', textTransform: 'uppercase'}}>Empresas e instituciones que confían en nosotros</p>
                <div className="logos" style={{display: 'flex', gap: '40px', justifyContent: 'center', opacity: '0.7', flexWrap: 'wrap', alignItems: 'center'}}>
                    <span style={{fontFamily: '\'Montserrat\', sans-serif', fontWeight: '700', fontSize: '1.1rem', color: '#fff'}}>Su Voz a Diario</span>
                    <span style={{fontFamily: '\'Montserrat\', sans-serif', fontWeight: '700', fontSize: '1.1rem', fontStyle: 'italic', color: '#fff'}}>Club Colombia FC</span>
                    <span style={{fontFamily: '\'Montserrat\', sans-serif', fontWeight: '800', fontSize: '1.1rem', letterSpacing: '-1px', color: '#fff'}}>Joga Bonito</span>
                    <span style={{fontFamily: '\'Montserrat\', sans-serif', fontWeight: '600', fontSize: '1.1rem', color: '#fff'}}>Esdras</span>
                </div>
            </div>
            <div className="tech-stack fade-in-up" style={{transitionDelay: '0.5s', marginTop: '40px', textAlign: 'center'}}>
                <p style={{fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '20px', letterSpacing: '0.1em', textTransform: 'uppercase'}}>Stack Tecnológico de Nivel Industrial</p>
                <div className="tech-logos" style={{display: 'flex', gap: '30px', justifyContent: 'center', opacity: '0.5', flexWrap: 'wrap', alignItems: 'center', filter: 'grayscale(100%)'}}>
                    <span style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '600', fontSize: '1rem', color: '#fff'}}>Next.js</span>
                    <span style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '600', fontSize: '1rem', color: '#fff'}}>React</span>
                    <span style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '600', fontSize: '1rem', color: '#fff'}}>Node.js</span>
                    <span style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '600', fontSize: '1rem', color: '#fff'}}>Firebase</span>
                    <span style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '600', fontSize: '1rem', color: '#fff'}}>AWS</span>
                    <span style={{fontFamily: '\'Inter\', sans-serif', fontWeight: '600', fontSize: '1rem', color: '#fff'}}>Python</span>
                </div>
            </div>


            </div>
            <a href="#servicios" className="scroll-down" aria-label="Bajar a servicios">
                {/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-chevron-down"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="m6 9 6 6 6-6" />
</svg>

            </a>
        </section>

        {/*  SERVICIOS  */}
        <section id="servicios" className="section-padding servicios">
            <div className="container">
                <h2 className="section-title fade-in-up">SOLUCIONES TECNOLÓGICAS A TU MEDIDA</h2>
                <div className="title-line fade-in-up"></div>
                
                <div className="services-grid">
                    {/*  Tarjeta 1  */}
                    <div className="service-card fade-in-up">
                        <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        <h3>Plataformas de Capacitación</h3>
                        <p>Digitalizamos tu formación presencial. Cursos, exámenes, certificados y reportes automáticos, todo con tu marca.</p>
                    </div>
                    
                    {/*  Tarjeta 2  */}
                    <div className="service-card fade-in-up" style={{transitionDelay: '0.1s'}}>
                        <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            <polyline points="9 12 11 14 15 10"></polyline>
                        </svg>
                        <h3>Evaluaciones de Talento</h3>
                        <p>Creamos pruebas personalizadas para medir conocimientos técnicos. Resultados instantáneos y reportes exportables.</p>
                    </div>
                    
                    {/*  Tarjeta 3  */}
                    <div className="service-card fade-in-up" style={{transitionDelay: '0.2s'}}>
                        <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                        <h3>Aplicaciones Web a Medida</h3>
                        <p>Sistemas de gestión, dashboards, automatizaciones. Software que se adapta exactamente a tus procesos.</p>
                    </div>
                    
                    {/*  Tarjeta 4  */}
                    <div className="service-card fade-in-up" style={{transitionDelay: '0.3s'}}>
                        <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <h3>Consultoría Tecnológica</h3>
                        <p>Analizamos tu operación y te proponemos la solución digital más eficiente, sin rodeos.</p>
                    </div>
                </div>
            </div>
        </section>

        
        {/*  METODOLOGÍA / PROCESO  */}
        <section id="metodologia" className="section-padding">
            <div className="container">
                <h2 className="section-title fade-in-up">NUESTRO PIPELINE DE INGENIERÍA</h2>
                <div className="title-line fade-in-up"></div>
                <p style={{textAlign: 'center', color: 'var(--gris-texto)', marginBottom: '40px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto'}} className="fade-in-up">No improvisamos. Aplicamos metodologías de Silicon Valley para garantizar software escalable, seguro y mantenible.</p>
                
                <div className="process-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', position: 'relative'}}>
                    <div className="process-card fade-in-up" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '30px', textAlign: 'center', backdropFilter: 'blur(10px)'}}>
                        <div style={{fontSize: '2rem', color: 'var(--naranja-cta)', marginBottom: '15px', fontWeight: '700', fontFamily: '\'Montserrat\', sans-serif'}}>01</div>
                        <h4 style={{marginBottom: '10px', fontSize: '1.1rem', color: '#fff'}}>Arquitectura</h4>
                        <p style={{fontSize: '0.9rem', color: 'var(--gris-texto)'}}>Diseño de bases de datos, selección del stack ideal y wireframes lógicos.</p>
                    </div>
                    <div className="process-card fade-in-up" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '30px', textAlign: 'center', backdropFilter: 'blur(10px)', transitionDelay: '0.1s'}}>
                        <div style={{fontSize: '2rem', color: 'var(--naranja-cta)', marginBottom: '15px', fontWeight: '700', fontFamily: '\'Montserrat\', sans-serif'}}>02</div>
                        <h4 style={{marginBottom: '10px', fontSize: '1.1rem', color: '#fff'}}>Código Riguroso</h4>
                        <p style={{fontSize: '0.9rem', color: 'var(--gris-texto)'}}>Desarrollo modular bajo estándares limpios (Clean Code) y repositorios privados.</p>
                    </div>
                    <div className="process-card fade-in-up" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '30px', textAlign: 'center', backdropFilter: 'blur(10px)', transitionDelay: '0.2s'}}>
                        <div style={{fontSize: '2rem', color: 'var(--naranja-cta)', marginBottom: '15px', fontWeight: '700', fontFamily: '\'Montserrat\', sans-serif'}}>03</div>
                        <h4 style={{marginBottom: '10px', fontSize: '1.1rem', color: '#fff'}}>QA y Testing</h4>
                        <p style={{fontSize: '0.9rem', color: 'var(--gris-texto)'}}>Pruebas exhaustivas de rendimiento, seguridad y responsividad multiformato.</p>
                    </div>
                    <div className="process-card fade-in-up" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '30px', textAlign: 'center', backdropFilter: 'blur(10px)', transitionDelay: '0.3s'}}>
                        <div style={{fontSize: '2rem', color: 'var(--naranja-cta)', marginBottom: '15px', fontWeight: '700', fontFamily: '\'Montserrat\', sans-serif'}}>04</div>
                        <h4 style={{marginBottom: '10px', fontSize: '1.1rem', color: '#fff'}}>Deploy & DevOps</h4>
                        <p style={{fontSize: '0.9rem', color: 'var(--gris-texto)'}}>Lanzamiento en la nube (AWS/Vercel/Firebase) con monitoreo 24/7 y respaldos.</p>
                    </div>
                </div>
            </div>
        </section>

        {/*  POR QUE ELEGIRNOS  */}
        <section id="por-que" className="section-padding">
            <div className="container">
                <h2 className="section-title fade-in-up">VENTAJAS DE NUESTRO DESARROLLO DE SOFTWARE</h2>
                <div className="title-line fade-in-up"></div>
                
                <div className="features-grid">
                    <div className="feature-item fade-in-up">
                        {/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-check-circle-2"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m9 12 2 2 4-4" />
</svg>

                        <p className="feature-text">Desarrollo ágil: entregas en semanas, no meses.</p>
                    </div>
                    <div className="feature-item fade-in-up" style={{transitionDelay: '0.1s'}}>
                        {/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-check-circle-2"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m9 12 2 2 4-4" />
</svg>

                        <p className="feature-text">Soluciones 100% personalizadas.</p>
                    </div>
                    <div className="feature-item fade-in-up" style={{transitionDelay: '0.2s'}}>
                        {/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-check-circle-2"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m9 12 2 2 4-4" />
</svg>

                        <p className="feature-text">No necesitas un área de sistemas interna.</p>
                    </div>
                    <div className="feature-item fade-in-up" style={{transitionDelay: '0.3s'}}>
                        {/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-check-circle-2"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m9 12 2 2 4-4" />
</svg>

                        <p className="feature-text">Modelo flexible: membresía o desarrollo exclusivo.</p>
                    </div>
                    <div className="feature-item fade-in-up" style={{transitionDelay: '0.4s'}}>
                        {/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-check-circle-2"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m9 12 2 2 4-4" />
</svg>

                        <p className="feature-text">Acompañamiento real: un líder de proyecto siempre disponible.</p>
                    </div>
                    <div className="feature-item fade-in-up" style={{transitionDelay: '0.5s'}}>
                        <svg className="lucide lucide-check-circle-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                        <p className="feature-text">Propiedad Intelectual 100% tuya y código documentado (No vendor lock-in).</p>
                    </div>

                </div>
            </div>
        </section>

        {/*  PORTAFOLIO  */}
        <section id="portafolio" className="section-padding portafolio">
            <div className="container">
                <h2 className="section-title fade-in-up">CASOS DE ÉXITO EN DESARROLLO WEB</h2>
                <div className="title-line fade-in-up"></div>
                
                <div className="portfolio-grid">
                    {/*  Proyecto 1  */}
                    <div className="portfolio-card fade-in-up">
                        <div className="portfolio-image">
                            {/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-laptop"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" />
  <path d="M20.054 15.987H3.946" />
</svg>

                        </div>
                        <div className="portfolio-content">
                            <span className="badge">2025</span>
                            <h3>Integriti Test</h3>
                            <p>Arquitectura serverless procesando miles de evaluaciones simultáneas con 99.9% de uptime.</p>
                        </div>
                    </div>
                    
                    {/*  Proyecto 2  */}
                    <div className="portfolio-card fade-in-up" style={{transitionDelay: '0.2s'}}>
                        <div className="portfolio-image">
                            {/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-graduation-cap"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
  <path d="M22 10v6" />
  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
</svg>

                        </div>
                        <div className="portfolio-content">
                            <span className="badge">Reciente</span>
                            <h3>Plataforma de Capacitación Sector Salud</h3>
                            <p>LMS a la medida con streaming seguro y emisión automatizada de certificados para +5,000 usuarios.</p>
                        </div>
                    </div>
                </div>
                
                <div className="fade-in-up" style={{textAlign: 'center', marginTop: '40px'}}>
                    <p style={{marginBottom: '20px', color: 'var(--azul-oscuro)', fontSize: '1.1rem'}}>Y docenas de proyectos exitosos más, como: <br /><strong>Su Voz a Diario, Club Colombia FC, Joga Bonito, Escuela Bíblica Esdras</strong>, entre otros.</p>
                    <a href="#contacto" className="btn btn-primary">¿Quieres ver más? Contáctanos</a>
                </div>
            </div>
        </section>

        {/*  NOSOTROS  */}
        <section id="nosotros" className="section-padding">
            <div className="container">
                <h2 className="section-title fade-in-up">EL EQUIPO DETRÁS DE CÓDIGONEXO</h2>
                <div className="title-line fade-in-up"></div>
                
                <div className="nosotros-content fade-in-up">
                    <div className="nosotros-image">
                        {/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-briefcase"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  <rect width="20" height="14" x="2" y="6" rx="2" />
</svg>

                    </div>
                    <div className="nosotros-text">
                        <p>En CódigoNexo combinamos experiencia en desarrollo de software y consultoría de procesos. Somos un equipo compacto y enfocado en resultados, sin burocracia. Cada proyecto tiene un líder dedicado que entiende tu negocio y se comunica directamente contigo.</p>
                        <p className="signature">Director de Proyectos</p>
                    </div>
                </div>
            </div>
        </section>

        {/*  CONTACTO  */}
        <section id="contacto" className="section-padding contacto">
            <div className="container">
                <h2 className="section-title fade-in-up">INICIA TU PROYECTO DE SOFTWARE HOY</h2>
                <div className="title-line fade-in-up"></div>
                
                <div className="contact-grid">
                    {/*  Formulario  */}
                    <div className="contact-form fade-in-up">
                        <form id="contactForm" action="https://formsubmit.co/ajax/codigonexo.rgz@gmail.com" method="POST">
                            <div className="form-group">
                                <label htmlFor="nombre" style={{display: 'none'}}>Nombre</label>
                                <input type="text" id="nombre" name="name" className="form-control" placeholder="Tu Nombre *" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" style={{display: 'none'}}>Correo Electrónico</label>
                                <input type="email" id="email" name="email" className="form-control" placeholder="Tu Correo Electrónico *" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefono" style={{display: 'none'}}>Teléfono</label>
                                <input type="tel" id="telefono" name="phone" className="form-control" placeholder="Tu Teléfono (Opcional)" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensaje" style={{display: 'none'}}>Mensaje</label>
                                <textarea id="mensaje" name="message" className="form-control" placeholder="Cuéntanos sobre tu idea o proyecto *" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary form-btn">Cotizar proyecto</button>
<p style={{fontSize: '0.85rem', marginTop: '15px', color: 'var(--gris-texto)', textAlign: 'center', fontWeight: '500'}}>Recibe una propuesta técnica y cotización inicial en menos de 24 horas.</p>
                        </form>
                        <div id="formSuccess" className="success-message">
                            ¡Gracias! Te responderemos en menos de 24 horas.
                        </div>
                        <p className="disclaimer">Al enviar este formulario aceptas nuestro <a href="#" id="openPrivacyModal">Aviso de Privacidad</a>.</p>
                    </div>
                    
                    {/*  Info de Contacto  */}
                    <div className="contact-info fade-in-up" style={{transitionDelay: '0.2s'}}>
                        <div className="info-item">
                            <div className="info-icon">{/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-mail"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
  <rect x="2" y="4" width="20" height="16" rx="2" />
</svg>
</div>
                            <div className="info-text">
                                <h4>Email</h4>
                                <a href="mailto:codigonexo.rgz@gmail.com">codigonexo.rgz@gmail.com</a>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">{/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-phone"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
</svg>
</div>
                            <div className="info-text">
                                <h4>Teléfono</h4>
                                <a href="tel:525529058845">+52 55 2905 8845</a>
                                <p style={{fontSize: '0.85rem', marginTop: '5px'}}>También puedes escribirnos por WhatsApp.</p>
                            </div>
                        </div>
                        
                        <div className="map-placeholder">
                            {/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-map-pin"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
  <circle cx="12" cy="10" r="3" />
</svg>
 México / Colombia
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    {/*  BOTONES FLOTANTES  */}
    <a href="https://wa.me/525529058845?text=Hola%20CódigoNexo,%20me%20interesa%20una%20solución%20digital." target="_blank" rel="noopener noreferrer" className="floating-btn whatsapp-btn" aria-label="Chat en WhatsApp">
        {/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-message-circle"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
</svg>

    </a>
    
    <a href="#inicio" className="floating-btn scroll-top-btn" id="scrollTopBtn" aria-label="Volver arriba">
        {/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-arrow-up"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="m5 12 7-7 7 7" />
  <path d="M12 19V5" />
</svg>

    </a>

    {/*  MODAL AVISO DE PRIVACIDAD  */}
    <div className="modal-overlay" id="privacyModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div className="modal-content">
            <button className="modal-close" id="closePrivacyModal" aria-label="Cerrar modal">
                {/*  @license lucide-static v1.25.0 - ISC  */}
<svg
  className="lucide lucide-x"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>

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

    {/*  SCRIPTS  */}
    <script src="assets/js/main.js" defer></script>

    </>
  );
}
