import { Building2, Cloud, Code, Cpu, GitBranch, Globe, Layers, List, Network, Rocket, Shield, Smartphone } from "lucide-react";

export const navigationConfig = {
  mainNav: [
    {
      title: "Servicios",
      items: [
        { title: "Desarrollo de software", href: "/servicios/desarrollo-software", description: "Plataformas empresariales a la medida.", icon: Code },
        { title: "Desarrollo Web", href: "/servicios/desarrollo-web", description: "Aplicaciones web rápidas y escalables.", icon: Globe },
        { title: "Desarrollo Móvil", href: "/servicios/desarrollo-movil", description: "Apps iOS y Android para operación real.", icon: Smartphone },
        { title: "Desarrollo a la medida", href: "/servicios/desarrollo-a-la-medida", description: "Software empresarial de alto rendimiento.", icon: Code },
        { title: "APIs e Integraciones", href: "/servicios/apis-e-integraciones", description: "Conexión segura entre sistemas.", icon: Network },
        { title: "Arquitectura Cloud", href: "/servicios/arquitectura-cloud", description: "Infraestructura AWS/GCP escalable.", icon: Cloud },
        { title: "Ver todos los servicios", href: "/servicios", description: "Explora el catálogo completo publicado.", icon: List },
      ]
    },
    {
      title: "Empresa",
      items: [
        { title: "Nosotros", href: "/nosotros", description: "Cómo trabajamos y qué puede esperar un cliente.", icon: Building2 },
        { title: "Metodología", href: "/metodologia", description: "Etapas para descubrir, diseñar, construir y operar.", icon: Layers },
        { title: "Proceso", href: "/proceso", description: "Qué ocurre desde el primer contacto hasta el soporte.", icon: GitBranch },
        { title: "Tecnologías", href: "/tecnologias", description: "Criterios para seleccionar herramientas y stack.", icon: Cpu },
      ]
    },
    {
      title: "Trust",
      items: [
        { title: "Seguridad & Compliance", href: "/trust/seguridad-compliance", description: "Protección de datos y SLAs.", icon: Shield },
        { title: "Portafolio", href: "/#portafolio", description: "Proyectos y casos presentados en el home.", icon: Rocket },
      ]
    }
  ],
  servicesIndex: [
    { title: "Desarrollo de software", href: "/servicios/desarrollo-software", description: "Plataformas empresariales diseñadas para crecer, integrarse y evolucionar con el negocio.", icon: "Code" },
    { title: "Desarrollo web", href: "/servicios/desarrollo-web", description: "Aplicaciones web modernas, rápidas y preparadas para alta concurrencia.", icon: "Globe" },
    { title: "Desarrollo móvil", href: "/servicios/desarrollo-movil", description: "Aplicaciones iOS y Android orientadas a operación, rendimiento y seguridad.", icon: "Smartphone" },
    { title: "Desarrollo a la medida", href: "/servicios/desarrollo-a-la-medida", description: "Software personalizado para procesos empresariales específicos.", icon: "Code" },
    { title: "APIs e integraciones", href: "/servicios/apis-e-integraciones", description: "Conexión entre ERPs, sistemas legacy, SaaS y plataformas modernas.", icon: "Network" },
    { title: "Automatización", href: "/servicios/automatizacion", description: "Flujos operativos automatizados para reducir trabajo manual repetitivo.", icon: "Bot" },
    { title: "Arquitectura cloud", href: "/servicios/arquitectura-cloud", description: "Infraestructura cloud resiliente, escalable y preparada para despliegues seguros.", icon: "Cloud" },
    { title: "DevOps", href: "/servicios/devops", description: "Pipelines, infraestructura como código y observabilidad para equipos de ingeniería.", icon: "Wrench" },
    { title: "Inteligencia artificial", href: "/servicios/inteligencia-artificial", description: "Integración de IA generativa y agentes autónomos en procesos corporativos.", icon: "Zap" },
    { title: "Modernización legacy", href: "/servicios/modernizacion-legacy", description: "Actualización gradual de sistemas obsoletos sin detener la operación.", icon: "Database" },
    { title: "Consultoría tecnológica", href: "/servicios/consultoria-tecnologica", description: "Auditoría técnica, diseño de arquitectura y acompañamiento estratégico.", icon: "Layers" },
  ],
  futureNav: {
    soluciones: [
      { title: "Fintech", href: "/soluciones/fintech" },
      { title: "HealthTech", href: "/soluciones/healthtech" },
      { title: "Startups", href: "/soluciones/startups" },
      { title: "Retail & E-commerce", href: "/soluciones/retail" }
    ],
    ingenieria: [
      { title: "Tech Stack", href: "/ingenieria/tech-stack" },
      { title: "Procesos", href: "/ingenieria/procesos" },
      { title: "Manifiesto", href: "/ingenieria/manifiesto" }
    ],
    legal: [
      { title: "Términos de Servicio", href: "/legal/terminos" },
      { title: "Política de Privacidad", href: "/legal/privacidad" },
      { title: "SLAs", href: "/legal/slas" }
    ]
  },
  footerNav: {
    servicios: [
      { title: "Todos los servicios", href: "/servicios" },
      { title: "Desarrollo de software", href: "/servicios/desarrollo-software" },
      { title: "Arquitectura Cloud", href: "/servicios/arquitectura-cloud" },
      { title: "Modernización Legacy", href: "/servicios/modernizacion-legacy" },
      { title: "Inteligencia Artificial", href: "/servicios/inteligencia-artificial" },
      { title: "Desarrollo Web", href: "/servicios/desarrollo-web" },
    ],
    empresa: [
      { title: "Nosotros", href: "/nosotros" },
      { title: "Metodología", href: "/metodologia" },
      { title: "Proceso", href: "/proceso" },
      { title: "Tecnologías", href: "/tecnologias" },
      { title: "Portafolio", href: "/#portafolio" },
      { title: "Seguridad y Compliance", href: "/trust/seguridad-compliance" },
      { title: "Contacto", href: "/#contacto" }
    ],
    legal: [] as { title: string; href: string }[]
  }
};
