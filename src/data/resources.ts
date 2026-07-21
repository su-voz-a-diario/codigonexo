export type ResourceCategory = 'Desarrollo' | 'Arquitectura' | 'Modernización' | 'Transformación Digital';

export type ResourceArticle = {
  slug: string;
  title: string;
  summary: string;
  category: ResourceCategory;
  readTime: string;
  seo: {
    title: string;
    description: string;
  };
  intro: string[];
  sections: {
    title: string;
    body: string[];
  }[];
  conclusion: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  cta: {
    title: string;
    subtitle: string;
    label: string;
    microcopy: string;
  };
};

export const resourceCategories: ResourceCategory[] = [
  'Desarrollo',
  'Arquitectura',
  'Modernización',
  'Transformación Digital',
];

export const resourceArticles: ResourceArticle[] = [
  {
    slug: 'cuanto-cuesta-desarrollar-software-a-medida',
    title: '¿Cuánto cuesta desarrollar software a medida?',
    summary: 'Una guía práctica para entender qué variables influyen en el costo de un proyecto de software empresarial.',
    category: 'Desarrollo',
    readTime: '8 min',
    seo: {
      title: '¿Cuánto cuesta desarrollar software a medida? | Código Nexo',
      description: 'Conoce los factores que influyen en el costo de desarrollar software a medida: alcance, complejidad, integraciones, equipo, calidad y soporte.',
    },
    intro: [
      'El costo de desarrollar software a medida no depende solo de la cantidad de pantallas. Un proyecto puede parecer pequeño en interfaz y ser complejo por reglas de negocio, integraciones, seguridad, datos o procesos internos.',
      'Para una empresa, la pregunta correcta no es únicamente cuánto cuesta, sino qué se necesita construir, qué riesgo se quiere reducir y qué nivel de continuidad debe tener la solución después de entregarse.',
    ],
    sections: [
      {
        title: 'El alcance define la primera frontera',
        body: [
          'El alcance incluye funcionalidades, tipos de usuario, permisos, flujos operativos, reportes, integraciones y condiciones especiales del negocio. Mientras más ambiguo sea el alcance, mayor será la incertidumbre para estimar.',
          'Una etapa de diagnóstico permite separar lo indispensable para una primera versión de lo que puede evolucionar después. Esto evita convertir la primera entrega en una lista demasiado amplia y difícil de validar.',
        ],
      },
      {
        title: 'La complejidad técnica cambia el presupuesto',
        body: [
          'Dos sistemas con el mismo número de pantallas pueden tener costos muy distintos. No es lo mismo capturar información simple que calcular reglas comerciales, sincronizar datos, consumir APIs externas, manejar pagos o operar con permisos por rol.',
          'La complejidad también aparece cuando se debe trabajar con sistemas existentes, bases de datos históricas o procesos que todavía no están documentados.',
        ],
      },
      {
        title: 'La calidad no debe verse como un extra',
        body: [
          'Pruebas, documentación, control de versiones, seguridad básica, manejo de errores y despliegue ordenado forman parte de una solución sostenible. Reducir estos elementos puede abaratar el inicio, pero suele aumentar el costo de mantenimiento.',
          'En proyectos empresariales, la calidad técnica protege la continuidad del negocio y facilita que el sistema pueda crecer sin rehacerse desde cero.',
        ],
      },
      {
        title: 'Soporte y evolución también forman parte de la decisión',
        body: [
          'Después del lanzamiento pueden aparecer ajustes, nuevas reglas, integraciones adicionales o mejoras de experiencia. Por eso conviene pensar desde el inicio si el proyecto requerirá soporte, monitoreo o evolución continua.',
          'Un presupuesto responsable debe distinguir construcción inicial, despliegue, capacitación operativa, soporte y mejoras posteriores.',
        ],
      },
    ],
    conclusion: [
      'El costo de un software a medida se estima mejor cuando existe claridad sobre problema, usuarios, reglas, integraciones, datos y nivel de soporte requerido.',
      'Antes de pedir una cifra cerrada, conviene solicitar una revisión técnica que permita entender alcance, riesgos y prioridades. Eso ayuda a tomar una decisión más informada y evita comparar propuestas que no contemplan lo mismo.',
    ],
    faqs: [
      {
        question: '¿Se puede estimar sin tener todos los requerimientos?',
        answer: 'Sí, pero la estimación será más amplia. Cuando hay poca definición, conviene iniciar con diagnóstico o discovery para reducir incertidumbre antes de comprometer alcance y tiempos.',
      },
      {
        question: '¿Qué encarece más un proyecto?',
        answer: 'Integraciones complejas, reglas de negocio no documentadas, migración de datos, seguridad avanzada, múltiples perfiles de usuario y cambios frecuentes de alcance suelen aumentar el esfuerzo.',
      },
      {
        question: '¿Conviene empezar con una primera versión?',
        answer: 'En muchos casos sí. Una primera versión bien definida permite validar operación real, priorizar mejoras y evitar invertir demasiado en funcionalidades que todavía no han sido comprobadas.',
      },
    ],
    cta: {
      title: '¿Necesitas estimar un proyecto de software?',
      subtitle: 'Podemos revisar alcance, usuarios, integraciones y riesgos para construir una estimación técnica más clara.',
      label: 'Solicitar estimación técnica',
      microcopy: 'Analizaremos tu caso y coordinaremos una conversación para revisar el proyecto con mayor contexto.',
    },
  },
  {
    slug: 'cuando-conviene-modernizar-un-sistema-legacy',
    title: '¿Cuándo conviene modernizar un sistema legacy?',
    summary: 'Señales prácticas para decidir si un sistema existente debe mantenerse, integrarse, refactorizarse o modernizarse gradualmente.',
    category: 'Modernización',
    readTime: '7 min',
    seo: {
      title: '¿Cuándo conviene modernizar un sistema legacy? | Código Nexo',
      description: 'Aprende a identificar cuándo modernizar un sistema legacy y cómo evaluar riesgos, costos, integraciones, seguridad y continuidad operativa.',
    },
    intro: [
      'Un sistema legacy no es necesariamente un problema por ser antiguo. Muchas plataformas siguen sosteniendo operaciones críticas durante años. El riesgo aparece cuando el sistema impide evolucionar, integrarse, auditarse o mantenerse con seguridad.',
      'Modernizar no siempre significa reemplazar todo. En muchos casos, la mejor estrategia es intervenir por etapas para reducir riesgo operativo y conservar lo que todavía funciona.',
    ],
    sections: [
      {
        title: 'Señales de que el sistema ya limita al negocio',
        body: [
          'Cuando cada cambio tarda demasiado, depende de pocas personas o provoca fallas en áreas no relacionadas, el sistema comienza a frenar la operación. También es una alerta cuando la información debe duplicarse manualmente entre herramientas.',
          'Otra señal frecuente es la falta de visibilidad: reportes lentos, datos inconsistentes, procesos difíciles de auditar o ausencia de trazabilidad sobre cambios importantes.',
        ],
      },
      {
        title: 'El riesgo técnico debe medirse con cuidado',
        body: [
          'Antes de intervenir, conviene evaluar arquitectura, base de datos, dependencias, seguridad, despliegue, respaldos y conocimiento disponible. Esta revisión evita decisiones basadas solo en percepción.',
          'Un sistema puede necesitar mejoras puntuales, una capa de APIs, una migración gradual o una reconstrucción. La decisión depende de impacto, costo, riesgo y urgencia.',
        ],
      },
      {
        title: 'Modernizar por etapas reduce interrupciones',
        body: [
          'Una estrategia gradual permite aislar módulos, crear integraciones, mejorar seguridad y reemplazar componentes críticos sin detener toda la operación.',
          'Este enfoque suele ser más manejable para empresas que no pueden apagar su sistema principal mientras se construye una nueva plataforma.',
        ],
      },
      {
        title: 'No todo debe modernizarse al mismo tiempo',
        body: [
          'Algunos componentes pueden mantenerse si cumplen su función, son estables y no representan un riesgo significativo. Otros pueden requerir atención inmediata por seguridad, rendimiento o dependencia operativa.',
          'La prioridad debe establecerse con criterios técnicos y de negocio, no por preferencia tecnológica.',
        ],
      },
    ],
    conclusion: [
      'Conviene modernizar un sistema legacy cuando mantenerlo empieza a generar más riesgo, costo o fricción que evolucionarlo de forma controlada.',
      'El primer paso no debería ser reescribir, sino diagnosticar. Una revisión técnica permite decidir qué conservar, qué integrar, qué refactorizar y qué reemplazar.',
    ],
    faqs: [
      {
        question: '¿Modernizar significa cambiar todo el sistema?',
        answer: 'No. Puede significar mejorar arquitectura, crear APIs, actualizar módulos, migrar datos o reemplazar partes específicas sin rehacer toda la plataforma.',
      },
      {
        question: '¿Cómo evitar afectar la operación?',
        answer: 'Con una ruta gradual, ambientes de prueba, respaldos, validación por módulos y despliegues controlados. La estrategia depende del nivel crítico del sistema.',
      },
      {
        question: '¿Qué debe revisarse primero?',
        answer: 'Dependencias, seguridad, base de datos, integraciones, despliegue, módulos críticos, documentación disponible y capacidad del equipo para mantener la plataforma.',
      },
    ],
    cta: {
      title: '¿Tu sistema actual empieza a limitar la operación?',
      subtitle: 'Podemos evaluar deuda técnica, riesgos y rutas de modernización sin detener procesos críticos.',
      label: 'Evaluar deuda técnica',
      microcopy: 'Revisaremos tu caso y coordinaremos una llamada técnica para identificar prioridades de modernización.',
    },
  },
  {
    slug: 'como-elegir-empresa-desarrollo-software',
    title: 'Cómo elegir una empresa de desarrollo de software',
    summary: 'Criterios para evaluar una consultora tecnológica antes de iniciar un proyecto de software empresarial.',
    category: 'Transformación Digital',
    readTime: '9 min',
    seo: {
      title: 'Cómo elegir una empresa de desarrollo de software | Código Nexo',
      description: 'Guía para elegir una empresa de desarrollo de software: metodología, alcance, comunicación, arquitectura, soporte, propiedad del código y riesgos.',
    },
    intro: [
      'Elegir una empresa de desarrollo de software no debería basarse solo en precio o apariencia visual de propuestas. Un proyecto empresarial requiere entendimiento operativo, criterio técnico, comunicación clara y capacidad para sostener decisiones después del lanzamiento.',
      'La elección correcta reduce riesgos de alcance, sobrecostos, dependencia técnica y entregas difíciles de mantener.',
    ],
    sections: [
      {
        title: 'Evalúa cómo entienden el problema',
        body: [
          'Una consultora seria no debería saltar directamente a construir sin entender usuarios, procesos, restricciones, sistemas actuales y objetivos de negocio.',
          'Si la conversación se enfoca solo en pantallas, puede faltar profundidad sobre reglas, datos, seguridad e integración con la operación real.',
        ],
      },
      {
        title: 'Revisa la metodología de trabajo',
        body: [
          'Es importante saber cómo levantan requerimientos, cómo estiman, cómo entregan avances, cómo manejan cambios y cómo validan calidad.',
          'Una metodología clara no debe sentirse burocrática. Debe ayudar a que el cliente sepa qué ocurre, qué debe revisar y qué decisiones están pendientes.',
        ],
      },
      {
        title: 'Pregunta por arquitectura, mantenimiento y propiedad',
        body: [
          'El proyecto no termina cuando se ve bien en pantalla. Debe existir una base técnica que pueda mantenerse, desplegarse y evolucionar.',
          'También conviene aclarar propiedad del código, acceso a repositorios, documentación, ambientes, credenciales y condiciones de soporte.',
        ],
      },
      {
        title: 'Compara propuestas con el mismo criterio',
        body: [
          'Dos propuestas pueden tener precios distintos porque incluyen alcances diferentes: discovery, UX, arquitectura, pruebas, integraciones, despliegue, soporte o documentación.',
          'Antes de decidir, conviene confirmar qué incluye cada propuesta y qué quedaría como costo adicional.',
        ],
      },
    ],
    conclusion: [
      'Una buena empresa de desarrollo debe ayudarte a tomar mejores decisiones, no solo escribir código. Debe explicar riesgos, priorizar alcance y construir una solución que tenga sentido para la operación.',
      'La mejor elección suele ser la que combina claridad técnica, comunicación honesta y una ruta de trabajo verificable.',
    ],
    faqs: [
      {
        question: '¿Qué debo preguntar antes de contratar?',
        answer: 'Pregunta cómo estiman, qué entregables incluyen, cómo manejan cambios, quién es dueño del código, qué soporte ofrecen y cómo documentan la solución.',
      },
      {
        question: '¿El precio más bajo siempre implica mayor riesgo?',
        answer: 'No necesariamente, pero debe revisarse qué incluye. Un precio bajo puede excluir pruebas, documentación, soporte, arquitectura o integraciones necesarias.',
      },
      {
        question: '¿Conviene contratar por proyecto o por acompañamiento?',
        answer: 'Depende del alcance. Un proyecto cerrado funciona cuando el objetivo está claro. El acompañamiento conviene cuando hay evolución continua o incertidumbre técnica.',
      },
    ],
    cta: {
      title: '¿Estás evaluando proveedores de desarrollo?',
      subtitle: 'Podemos ayudarte a revisar alcance, riesgos técnicos y criterios para tomar una decisión mejor informada.',
      label: 'Solicitar diagnóstico tecnológico',
      microcopy: 'Analizaremos tu caso y coordinaremos una conversación para entender el proyecto y sus alternativas.',
    },
  },
  {
    slug: 'aplicaciones-web-vs-aplicaciones-moviles',
    title: 'Aplicaciones Web vs Aplicaciones Móviles: ¿cuál necesita realmente una empresa?',
    summary: 'Comparación práctica para decidir entre una aplicación web, una aplicación móvil o una PWA según uso, operación y presupuesto.',
    category: 'Arquitectura',
    readTime: '8 min',
    seo: {
      title: 'Aplicaciones Web vs Aplicaciones Móviles | Código Nexo',
      description: 'Compara aplicaciones web, móviles y PWA para decidir qué necesita realmente tu empresa según usuarios, operación, presupuesto y funcionalidades.',
    },
    intro: [
      'Muchas empresas piden una aplicación móvil porque parece el formato natural para estar cerca del usuario. Sin embargo, no todos los procesos necesitan una app instalada en el teléfono.',
      'La decisión debe considerar quién la usará, con qué frecuencia, qué funcionalidades requiere, si necesita notificaciones, uso offline, acceso a cámara, ubicación o distribución en tiendas.',
    ],
    sections: [
      {
        title: 'Cuándo conviene una aplicación web',
        body: [
          'Una aplicación web suele ser adecuada para sistemas administrativos, portales internos, dashboards, herramientas de gestión y plataformas que deben funcionar en escritorio y móvil sin pasar por tiendas.',
          'También facilita despliegues rápidos, mantenimiento centralizado y acceso desde diferentes dispositivos con un navegador.',
        ],
      },
      {
        title: 'Cuándo conviene una aplicación móvil',
        body: [
          'Una app móvil tiene sentido cuando el usuario la utiliza con frecuencia, necesita notificaciones push, capacidades del dispositivo, experiencia instalada o presencia en tiendas.',
          'También puede ser relevante si la operación requiere interacción desde campo, uso intensivo del teléfono o una experiencia muy integrada al dispositivo.',
        ],
      },
      {
        title: 'El punto intermedio: PWA',
        body: [
          'Una PWA puede ofrecer una experiencia web instalable, optimizada para móvil y con ciertas capacidades avanzadas. No reemplaza todos los casos de una app nativa, pero puede ser suficiente para muchos proyectos empresariales.',
          'Para empresas que necesitan validar una solución antes de invertir en apps separadas, una PWA puede reducir costo inicial y acelerar aprendizaje.',
        ],
      },
      {
        title: 'La decisión debe partir del uso real',
        body: [
          'Si el sistema será usado por personal administrativo durante horas, una web puede ser más adecuada. Si será usado por usuarios finales con interacción frecuente en móvil, una app o PWA puede tener más sentido.',
          'El presupuesto también importa: desarrollar, publicar y mantener aplicaciones móviles puede requerir más coordinación que una aplicación web centralizada.',
        ],
      },
    ],
    conclusion: [
      'No existe una respuesta universal. Una empresa puede necesitar web, móvil, PWA o una combinación. La opción correcta depende de usuarios, frecuencia de uso, funcionalidades, operación y mantenimiento.',
      'Antes de decidir por formato, conviene revisar el flujo completo y validar qué experiencia realmente aporta valor al negocio.',
    ],
    faqs: [
      {
        question: '¿Una PWA puede reemplazar una app móvil?',
        answer: 'En algunos casos sí, especialmente cuando se busca acceso móvil, instalación ligera y menor complejidad de distribución. Si se requieren capacidades avanzadas del dispositivo, puede convenir una app móvil.',
      },
      {
        question: '¿Qué opción es más fácil de mantener?',
        answer: 'Generalmente una aplicación web centralizada es más simple de mantener. Las apps móviles requieren considerar tiendas, versiones, permisos y compatibilidad con dispositivos.',
      },
      {
        question: '¿Se puede empezar con web y después crear móvil?',
        answer: 'Sí. Si se diseña bien la arquitectura, es posible iniciar con web o PWA y posteriormente construir una app móvil conectada a la misma lógica o servicios.',
      },
    ],
    cta: {
      title: '¿No tienes claro qué tipo de aplicación necesitas?',
      subtitle: 'Podemos analizar usuarios, operación y funcionalidades para definir si conviene web, móvil, PWA o una combinación.',
      label: 'Evaluar proyecto digital',
      microcopy: 'Revisaremos tu caso y coordinaremos una conversación técnica para identificar la alternativa más adecuada.',
    },
  },
];

export function getResourceBySlug(slug: string) {
  return resourceArticles.find((article) => article.slug === slug);
}
