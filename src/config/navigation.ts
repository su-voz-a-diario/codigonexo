import { Cloud, Code, Database, Shield, Smartphone, Zap, Briefcase, Users, Layout, Server, Activity, FileText } from "lucide-react";

export const navigationConfig = {
  mainNav: [
    {
      title: "Servicios",
      items: [
        { title: "Desarrollo a la medida", href: "/servicios/desarrollo-a-la-medida", description: "Software empresarial de alto rendimiento.", icon: Code },
        { title: "Arquitectura Cloud", href: "/servicios/arquitectura-cloud", description: "Infraestructura AWS/GCP escalable.", icon: Cloud },
        { title: "Modernización Legacy", href: "/servicios/modernizacion-legacy", description: "Actualización de sistemas monolíticos.", icon: Database },
        { title: "Inteligencia Artificial", href: "/servicios/inteligencia-artificial", description: "Integración de LLMs y automatización.", icon: Zap },
      ]
    },
    {
      title: "Soluciones",
      items: [
        { title: "Fintech", href: "/soluciones/fintech", description: "Core bancario y pasarelas de pago.", icon: Briefcase },
        { title: "HealthTech", href: "/soluciones/healthtech", description: "Sistemas médicos HIPAA compliant.", icon: Activity },
        { title: "Startups", href: "/soluciones/startups", description: "MVPs robustos para levantar capital.", icon: Zap },
      ]
    },
    {
      title: "Ingeniería",
      items: [
        { title: "Tech Stack", href: "/ingenieria/tech-stack", description: "Nuestras herramientas de élite.", icon: Server },
        { title: "Procesos", href: "/ingenieria/procesos", description: "El Pipeline de CI/CD y despliegue.", icon: Layout },
        { title: "Casos de Éxito", href: "/casos-de-exito", description: "Arquitecturas que hemos construido.", icon: FileText },
      ]
    },
    {
      title: "Trust",
      items: [
        { title: "Seguridad & Compliance", href: "/trust/seguridad-compliance", description: "Protección de datos y SLAs.", icon: Shield },
        { title: "Nosotros", href: "/nosotros", description: "Conoce a nuestros ingenieros.", icon: Users },
      ]
    }
  ],
  footerNav: {
    servicios: [
      { title: "Arquitectura Cloud", href: "/servicios/arquitectura-cloud" },
      { title: "Modernización Legacy", href: "/servicios/modernizacion-legacy" },
      { title: "Desarrollo Web", href: "/servicios/desarrollo-web" },
      { title: "Desarrollo Móvil", href: "/servicios/desarrollo-movil" },
      { title: "Inteligencia Artificial", href: "/servicios/inteligencia-artificial" }
    ],
    soluciones: [
      { title: "Fintech", href: "/soluciones/fintech" },
      { title: "HealthTech", href: "/soluciones/healthtech" },
      { title: "Startups", href: "/soluciones/startups" },
      { title: "Retail & E-commerce", href: "/soluciones/retail" }
    ],
    empresa: [
      { title: "Casos de Éxito", href: "/casos-de-exito" },
      { title: "Procesos", href: "/ingenieria/procesos" },
      { title: "Manifiesto", href: "/ingenieria/manifiesto" },
      { title: "Seguridad y Compliance", href: "/trust/seguridad-compliance" },
      { title: "Contacto", href: "/contacto" }
    ],
    legal: [
      { title: "Términos de Servicio", href: "/legal/terminos" },
      { title: "Política de Privacidad", href: "/legal/privacidad" },
      { title: "SLAs", href: "/legal/slas" }
    ]
  }
};
