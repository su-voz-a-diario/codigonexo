export type ProjectTechnologyGroup = {
  category: string;
  items: string[];
};

export type FeaturedProject = {
  slug: string;
  name: string;
  type: string;
  status: string;
  summary: string;
  description: string;
  problemTitle: string;
  problem: string;
  solutionTitle: string;
  solution: string;
  architecture: string;
  mainTechnologies: string[];
  technologyGroups: ProjectTechnologyGroup[];
  features: {
    title: string;
    description: string;
  }[];
  highlights: {
    title: string;
    description: string;
  }[];
  timeline: {
    title: string;
    description: string;
  }[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'su-voz-a-diario',
    name: 'Su Voz a Diario',
    type: 'Aplicación móvil, PWA y comunidad digital',
    status: 'Publicada en Google Play. Preparación para App Store.',
    summary: 'Aplicación orientada a comunidad y lectura bíblica, con experiencia móvil optimizada, PWA y sincronización de contenido.',
    description: 'Su Voz a Diario es una aplicación publicada en Google Play y preparada para su distribución en App Store. El proyecto combina experiencia móvil, PWA, comunidad, lectura bíblica, notificaciones push y sincronización de contenido.',
    problemTitle: 'Necesidad de una experiencia móvil accesible y sincronizada',
    problem: 'El proyecto requería una experiencia pensada para consumo frecuente de contenido, participación comunitaria y disponibilidad desde dispositivos móviles, manteniendo una base que pudiera funcionar como aplicación instalable y PWA.',
    solutionTitle: 'Aplicación móvil con base PWA y servicios Firebase',
    solution: 'Se implementó una solución basada en Capacitor y Firebase para llevar la experiencia web progresiva a dispositivos móviles, incorporar notificaciones push y mantener contenido sincronizado para la comunidad.',
    architecture: 'La arquitectura combina una aplicación PWA empaquetada con Capacitor para distribución móvil y servicios Firebase para sincronización, notificaciones y soporte de funcionalidades comunitarias.',
    mainTechnologies: ['PWA', 'Capacitor', 'Firebase', 'Push notifications'],
    technologyGroups: [
      {
        category: 'Frontend',
        items: ['PWA', 'Experiencia móvil optimizada'],
      },
      {
        category: 'Mobile',
        items: ['Capacitor', 'Google Play', 'Preparación para App Store'],
      },
      {
        category: 'Backend y Cloud',
        items: ['Firebase', 'Sincronización de contenido'],
      },
      {
        category: 'Notificaciones',
        items: ['Notificaciones Push'],
      },
    ],
    features: [
      {
        title: 'Lectura bíblica',
        description: 'Experiencia enfocada en consulta y consumo de contenido bíblico desde dispositivos móviles.',
      },
      {
        title: 'Comunidad',
        description: 'Funcionalidades orientadas a mantener una experiencia digital para la comunidad del proyecto.',
      },
      {
        title: 'Sincronización de contenido',
        description: 'Base técnica para mantener información disponible y actualizada dentro de la aplicación.',
      },
      {
        title: 'Notificaciones push',
        description: 'Canal de comunicación para enviar avisos relevantes a los usuarios de la aplicación.',
      },
      {
        title: 'PWA',
        description: 'Experiencia web progresiva que facilita acceso móvil y comportamiento instalable.',
      },
      {
        title: 'Optimización móvil',
        description: 'Interfaz y comportamiento orientados al uso frecuente desde teléfonos.',
      },
    ],
    highlights: [
      {
        title: 'Distribución móvil',
        description: 'El proyecto está publicado en Google Play y se encuentra preparado para App Store.',
      },
      {
        title: 'Base multiplataforma',
        description: 'Capacitor permite empaquetar la experiencia PWA para entornos móviles.',
      },
      {
        title: 'Servicios administrados',
        description: 'Firebase soporta sincronización, notificaciones y capacidades operativas del proyecto.',
      },
    ],
    timeline: [
      {
        title: 'Base PWA',
        description: 'Definición de una experiencia progresiva orientada a lectura, comunidad y uso móvil.',
      },
      {
        title: 'Integración móvil',
        description: 'Empaquetado con Capacitor para habilitar distribución como aplicación móvil.',
      },
      {
        title: 'Servicios Firebase',
        description: 'Integración de sincronización de contenido y notificaciones push.',
      },
      {
        title: 'Publicación',
        description: 'Aplicación publicada en Google Play y preparación para App Store.',
      },
    ],
  },
  {
    slug: 'club-colombia-fc',
    name: 'Club Colombia FC',
    type: 'Plataforma administrativa para operación deportiva',
    status: 'Proyecto en producción con el cliente.',
    summary: 'Plataforma administrativa para gestionar alumnos, entrenadores, padres, pagos, asistencia, evaluaciones y operación interna.',
    description: 'Club Colombia FC es una plataforma administrativa desarrollada con Next.js y Firebase para centralizar procesos operativos del club, incluyendo alumnos, entrenadores, padres, pagos, asistencia, evaluaciones y dashboard administrativo.',
    problemTitle: 'Operación deportiva con múltiples actores y procesos',
    problem: 'El proyecto necesitaba organizar información y tareas asociadas a alumnos, entrenadores, padres, pagos, asistencia y evaluaciones dentro de una plataforma administrativa para uso operativo.',
    solutionTitle: 'Dashboard administrativo centralizado',
    solution: 'Se construyó una plataforma administrativa con Next.js y Firebase para centralizar la gestión de usuarios, seguimiento operativo, pagos, asistencia y evaluaciones en un entorno de producción para el cliente.',
    architecture: 'La arquitectura se basa en una aplicación Next.js conectada con Firebase para soportar autenticación, datos operativos y administración desde un dashboard centralizado.',
    mainTechnologies: ['Next.js', 'Firebase', 'Dashboard administrativo'],
    technologyGroups: [
      {
        category: 'Frontend',
        items: ['Next.js', 'Dashboard administrativo'],
      },
      {
        category: 'Backend y Cloud',
        items: ['Firebase'],
      },
      {
        category: 'Gestión operativa',
        items: ['Alumnos', 'Entrenadores', 'Padres'],
      },
      {
        category: 'Procesos',
        items: ['Pagos', 'Asistencia', 'Evaluaciones'],
      },
    ],
    features: [
      {
        title: 'Gestión de alumnos',
        description: 'Registro y administración de información asociada a alumnos del club.',
      },
      {
        title: 'Gestión de entrenadores',
        description: 'Herramientas administrativas para organizar información relacionada con entrenadores.',
      },
      {
        title: 'Gestión de padres',
        description: 'Administración de datos y relación operativa con padres dentro de la plataforma.',
      },
      {
        title: 'Pagos',
        description: 'Funcionalidad orientada a seguimiento y administración de pagos.',
      },
      {
        title: 'Asistencia',
        description: 'Registro operativo de asistencia para actividades y seguimiento interno.',
      },
      {
        title: 'Evaluaciones',
        description: 'Módulo para administrar evaluaciones dentro del proceso deportivo.',
      },
      {
        title: 'Dashboard administrativo',
        description: 'Vista central para consultar y gestionar la operación del club.',
      },
    ],
    highlights: [
      {
        title: 'Proyecto en producción',
        description: 'La plataforma se encuentra actualmente en producción con el cliente.',
      },
      {
        title: 'Operación centralizada',
        description: 'Integra alumnos, entrenadores, padres, pagos, asistencia y evaluaciones en un solo entorno administrativo.',
      },
      {
        title: 'Stack web moderno',
        description: 'Next.js y Firebase permiten una base web administrable para la operación del proyecto.',
      },
    ],
    timeline: [
      {
        title: 'Modelado operativo',
        description: 'Organización de los módulos necesarios para alumnos, entrenadores, padres y procesos internos.',
      },
      {
        title: 'Construcción del dashboard',
        description: 'Desarrollo de la plataforma administrativa y sus flujos principales.',
      },
      {
        title: 'Gestión de procesos',
        description: 'Implementación de pagos, asistencia y evaluaciones dentro del sistema.',
      },
      {
        title: 'Producción',
        description: 'Proyecto actualmente en producción con el cliente.',
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}
