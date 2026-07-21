document.addEventListener('DOMContentLoaded', () => {
            
            // --- Menú Móvil ---
            const hamburgerBtn = document.getElementById('hamburger-btn');
            const closeMenuBtn = document.getElementById('close-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            function toggleMenu() {
                mobileMenu.classList.toggle('active');
                if(mobileMenu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden'; // Prevenir scroll
                } else {
                    document.body.style.overflow = '';
                }
            }

            hamburgerBtn.addEventListener('click', toggleMenu);
            closeMenuBtn.addEventListener('click', toggleMenu);

            mobileLinks.forEach(link => {
                link.addEventListener('click', toggleMenu);
            });

            // --- Header Scroll Effect ---
            const header = document.getElementById('header');
            const scrollTopBtn = document.getElementById('scrollTopBtn');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.style.padding = '2px 0';
                    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                } else {
                    header.style.padding = '5px 0';
                    header.style.boxShadow = 'none';
                }

                // Mostrar/Ocultar botón de scroll top
                if (window.scrollY > 400) {
                    scrollTopBtn.classList.add('visible');
                } else {
                    scrollTopBtn.classList.remove('visible');
                }
            });

            // --- Animaciones Scroll (Intersection Observer) ---
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Solo animar una vez
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in-up').forEach(el => {
                observer.observe(el);
            });

            // --- Formulario (Interceptar submit) ---
            const contactForm = document.getElementById('contactForm');
            const formSuccess = document.getElementById('formSuccess');

            if(contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault(); // Prevenir recarga
                    
                    // Aquí podrías agregar tu código AJAX/Fetch para enviar a Formspree si deseas hacerlo asíncrono.
                    // Ejemplo básico con Fetch:
                    const data = new FormData(contactForm);
                    fetch(contactForm.action, {
                        method: contactForm.method,
                        body: data,
                        headers: {
                            'Accept': 'application/json'
                        }
                    }).then(response => {
                        if (response.ok) {
                            contactForm.style.display = 'none';
                            formSuccess.style.display = 'block';
                            contactForm.reset();
                        } else {
                            alert('Hubo un problema al enviar el formulario. Inténtalo nuevamente.');
                        }
                    }).catch(error => {
                        alert('Hubo un problema de conexión. Inténtalo nuevamente.');
                    });
                });
            }

            // --- Modal Privacidad ---
            const privacyModal = document.getElementById('privacyModal');
            const openPrivacyModalBtn = document.getElementById('openPrivacyModal');
            const openPrivacyFooterBtn = document.getElementById('openPrivacyFooter');
            const closePrivacyModalBtn = document.getElementById('closePrivacyModal');

            function openModal(e) {
                if(e) e.preventDefault();
                privacyModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            function closeModal() {
                privacyModal.classList.remove('active');
                document.body.style.overflow = '';
            }

            if(openPrivacyModalBtn) openPrivacyModalBtn.addEventListener('click', openModal);
            if(openPrivacyFooterBtn) openPrivacyFooterBtn.addEventListener('click', openModal);
            if(closePrivacyModalBtn) closePrivacyModalBtn.addEventListener('click', closeModal);
            
            // Cerrar al clickear afuera del contenido
            privacyModal.addEventListener('click', (e) => {
                if(e.target === privacyModal) {
                    closeModal();
                }
            });
        });