# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

## [1.0.0] - Producción Premium (2026-07)

### Fase 1: Identidad Visual y Branding
- Extracción de espacios sobrantes transparentes del logotipo original.
- Optimización y exportación a formatos ligeros.
- Reemplazo del ecosistema iconográfico a Lucide Icons para una estética uniforme.
- Diseño e implementación de imagen de Open Graph (`og-image.jpg`) para SEO en redes sociales con percepción premium.

### Fase 2: Performance Máximo
- Conversión masiva de archivos `.png`/`.jpg` pesados a `.webp`.
- Optimización de LCP (Largest Contentful Paint) inyectando `fetchpriority="high"`.
- Carga diferida y asíncrona de tipografías externas (Google Fonts).
- Lighthouse score en dispositivos móviles disparado a un promedio de 86, y 99 en escritorio.

### Fase 3: Robustez Visual y Responsive
- Refactorización a unidades lógicas modernas (`100dvh`) previniendo recortes por la barra de navegación en iOS/Android.
- Substitución de posicionamiento absoluto (`position: absolute`) en el *Hero* hacia *Flexbox* fluido.
- Implementación de escala tipográfica en CSS Grid con funciones modernas como `clamp()`.

### Fase 4: Arquitectura y Mantenibilidad
- Descomposición del monolito `index.html` (de 1,500+ líneas a ~600).
- Extracción de más de 700 líneas de estilos hacia `assets/css/style.css`.
- Aislamiento de lógica interactiva hacia `assets/js/main.js` de carga diferida (`defer`).

### Fase 5: Experiencia Premium y Diseño Táctil
- Transición a diseño top-tier (Stripe, Vercel-like).
- Modificación del espectro de colores (azules profundos `#071524`).
- Modificación paramétrica de sombras planas a sombras de triple capa física.
- Uso de contornos precisos (bordes translúcidos de 1px) en cards y servicios.
- Alteración de *easings* de animación (uso sistemático de curvas `cubic-bezier`).

### Fase 6: Auditoría Final de Producción
- Purgado de *dead code*, `console.log`, y `TODO`.
- Purga estricta de `.DS_Store` y recursos estáticos sin uso de la raíz.
- Inyección de un archivo `.gitignore` estricto de nivel industrial.
- Aprobación 100% de accesibilidad, y SEO en pruebas ciego.

