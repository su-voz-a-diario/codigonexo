'use client';

import { useMemo, useState } from 'react';
import styles from './DiagnosticTool.module.css';

type Question = {
  id: string;
  text: string;
  help: string;
};

type Option = {
  label: string;
  value: number;
};

const questions: Question[] = [
  {
    id: 'custom-software',
    text: '¿Su empresa utiliza software desarrollado a medida para procesos críticos?',
    help: 'Considere sistemas internos, plataformas administrativas, portales o integraciones propias.',
  },
  {
    id: 'maintenance',
    text: '¿Su sistema recibe mantenimiento periódico?',
    help: 'Incluye actualizaciones, correcciones, revisión de dependencias y seguimiento posterior al lanzamiento.',
  },
  {
    id: 'backups',
    text: '¿Existen respaldos automáticos y verificables?',
    help: 'No solo respaldos manuales; idealmente deben poder restaurarse y comprobarse.',
  },
  {
    id: 'mobile',
    text: '¿La plataforma funciona correctamente en dispositivos móviles?',
    help: 'Evalúe navegación, velocidad, legibilidad y tareas frecuentes desde teléfonos.',
  },
  {
    id: 'performance',
    text: '¿Los usuarios experimentan lentitud o interrupciones frecuentes?',
    help: 'Considere reportes de espera, caídas, bloqueos o tareas que tardan más de lo esperado.',
  },
  {
    id: 'documentation',
    text: '¿Existe documentación técnica actualizada?',
    help: 'Incluye arquitectura, despliegue, credenciales, APIs, procesos y decisiones técnicas importantes.',
  },
  {
    id: 'authentication',
    text: '¿Se cuenta con autenticación segura y control de permisos?',
    help: 'Revise contraseñas, roles, accesos, usuarios inactivos y permisos por responsabilidad.',
  },
  {
    id: 'scalability',
    text: '¿La infraestructura puede crecer fácilmente si aumenta la demanda?',
    help: 'Piense en usuarios, tráfico, datos, almacenamiento e integraciones futuras.',
  },
  {
    id: 'manual-processes',
    text: '¿Existen procesos manuales repetitivos que podrían automatizarse?',
    help: 'Por ejemplo capturas dobles, reportes manuales, envío de correos o conciliaciones recurrentes.',
  },
  {
    id: 'cloud',
    text: '¿Se utilizan servicios en la nube de forma ordenada?',
    help: 'Considere configuración, costos, accesos, respaldos, monitoreo y responsabilidades.',
  },
  {
    id: 'monitoring',
    text: '¿Existe monitoreo de errores, disponibilidad o rendimiento?',
    help: 'Una plataforma crítica debería facilitar detección temprana de incidentes.',
  },
  {
    id: 'integrations',
    text: '¿Los sistemas principales se integran sin duplicar información manualmente?',
    help: 'Evalúe si ventas, operación, pagos, inventario, CRM o ERP comparten datos con claridad.',
  },
  {
    id: 'security-review',
    text: '¿Se realizan revisiones básicas de seguridad?',
    help: 'Incluye accesos, dependencias, exposición de datos, respaldos, permisos y configuración.',
  },
  {
    id: 'ownership',
    text: '¿La empresa tiene acceso claro a repositorios, documentación y proveedores clave?',
    help: 'La continuidad mejora cuando la empresa no depende de una sola persona o proveedor sin respaldo.',
  },
];

const options: Option[] = [
  { label: 'Sí, está cubierto', value: 3 },
  { label: 'Parcialmente', value: 2 },
  { label: 'No o no está claro', value: 1 },
];

function getLevel(score: number) {
  if (score >= 86) {
    return {
      label: 'Excelente',
      description: 'La plataforma parece contar con una base tecnológica ordenada. Aun así, conviene mantener revisiones periódicas para conservar seguridad, documentación y capacidad de evolución.',
      recommendations: [
        'Mantener revisiones técnicas programadas para detectar deuda antes de que afecte la operación.',
        'Documentar cambios relevantes de arquitectura, accesos e integraciones.',
        'Revisar métricas de rendimiento, seguridad y continuidad conforme el negocio crezca.',
      ],
    };
  }

  if (score >= 68) {
    return {
      label: 'Bueno',
      description: 'La plataforma muestra señales positivas, aunque podrían existir áreas que conviene ordenar antes de que se vuelvan fricción operativa.',
      recommendations: [
        'Priorizar documentación, respaldos, monitoreo y control de accesos si alguno está incompleto.',
        'Identificar procesos manuales repetitivos que puedan automatizarse con bajo riesgo.',
        'Revisar si la infraestructura actual soporta crecimiento esperado de usuarios, datos o integraciones.',
      ],
    };
  }

  if (score >= 48) {
    return {
      label: 'Requiere atención',
      description: 'El resultado sugiere posibles brechas en mantenimiento, seguridad, documentación, escalabilidad o procesos. No implica una falla definitiva, pero sí amerita revisión técnica.',
      recommendations: [
        'Realizar un diagnóstico técnico para separar riesgos críticos de mejoras deseables.',
        'Revisar respaldos, accesos, documentación e integraciones antes de agregar nuevas funcionalidades.',
        'Definir una ruta gradual de mejora para evitar cambios grandes sin control operativo.',
      ],
    };
  }

  return {
    label: 'Alta prioridad',
    description: 'El resultado orientativo sugiere varias áreas que podrían afectar continuidad, seguridad o capacidad de crecimiento. Conviene revisar la plataforma con mayor detalle.',
    recommendations: [
      'Evaluar primero respaldos, accesos, seguridad básica y dependencia de proveedores o personas clave.',
      'Documentar sistemas críticos, flujos principales e integraciones antes de intervenir la plataforma.',
      'Construir un plan de estabilización gradual para reducir riesgos sin detener la operación.',
    ],
  };
}

export default function DiagnosticTool() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const result = useMemo(() => {
    if (answeredCount === 0) return null;

    const total = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const max = questions.length * 3;
    const score = Math.round((total / max) * 100);

    return {
      score,
      ...getLevel(score),
    };
  }, [answers, answeredCount]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className={styles.tool}>
      <div className={styles.intro}>
        <p className={styles.introText}>
          Responde estas preguntas con el estado actual de tu empresa. El resultado no reemplaza una auditoría técnica, pero ayuda a identificar áreas que podrían requerir revisión.
        </p>
        <p className={styles.note}>
          Resultado orientativo. No se almacenan respuestas ni se envía información desde esta herramienta.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <fieldset key={question.id} className={styles.question}>
            <legend className={styles.questionTitle}>
              {index + 1}. {question.text}
            </legend>
            <p className={styles.questionHelp}>{question.help}</p>
            <div className={styles.options}>
              {options.map((option) => (
                <label key={option.label} className={styles.option}>
                  <input
                    type="radio"
                    name={question.id}
                    value={option.value}
                    checked={answers[question.id] === option.value}
                    onChange={() => setAnswers((current) => ({ ...current, [question.id]: option.value }))}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        <div className={styles.actions}>
          <button className={styles.button} type="submit">
            Ver resultado orientativo
          </button>
          <button className={styles.secondaryButton} type="button" onClick={handleReset}>
            Reiniciar respuestas
          </button>
        </div>
      </form>

      {submitted && result ? (
        <section className={styles.result} aria-live="polite" aria-labelledby="diagnostico-resultado">
          <div className={styles.resultHeader}>
            <h2 id="diagnostico-resultado" className={styles.level}>{result.label}</h2>
            <span className={styles.score}>{result.score}/100</span>
          </div>
          <p className={styles.resultText}>{result.description}</p>
          <div className={styles.recommendations}>
            {result.recommendations.map((recommendation) => (
              <p key={recommendation} className={styles.recommendation}>{recommendation}</p>
            ))}
          </div>
          <p className={styles.note}>
            Este resultado es una referencia inicial. Para tomar decisiones de inversión o cambios críticos, conviene revisar arquitectura, datos, infraestructura, seguridad y operación con mayor detalle.
          </p>
        </section>
      ) : (
        <div className={styles.emptyResult} aria-live="polite">
          Respuestas registradas: {answeredCount} de {questions.length}. Completa las áreas que conozcas y genera el resultado cuando estés listo.
        </div>
      )}
    </div>
  );
}
