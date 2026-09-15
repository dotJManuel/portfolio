import type { Experiencia } from './types';

export const experiencias: Experiencia[] = [
  {
    puesto: { en: "Software Developer", es: "Desarrollador de Software" },
    empresa: "WKS Door Systems",
    periodo: { en: "May 2023 – Present", es: "Mayo 2023 – Presente" },
    ubicacion: { en: "Escobedo, N.L., Mexico", es: "Escobedo, N.L., México" },
    logros: [
      {
        en: "Built a comprehensive .NET platform with real-time two-way sync with SAP Business One, improving operational response by 70%.",
        es: "Desarrollé una plataforma integral en .NET con sincronización bidireccional en tiempo real con SAP Business One, optimizando la respuesta operativa en un 70%.",
      },
      {
        en: "Migrated from DI API/DI Server to SAP Service Layer on .NET 8, cutting connection errors by 80%.",
        es: "Migré de DI API/DI Server a SAP Service Layer en .NET 8, reduciendo los errores de conexión en un 80%.",
      },
      {
        en: "Designed and consumed REST and SOAP APIs with OAuth to integrate internal systems and third-party platforms.",
        es: "Diseñé y consumí APIs REST y SOAP con OAuth para integrar sistemas internos y plataformas de terceros.",
      },
      {
        en: "Built an internal CRM that centralized the sales pipeline, cutting 10 hours of manual work per week.",
        es: "Desarrollé un CRM interno que centralizó el pipeline de ventas, reduciendo 10 horas semanales de trabajo manual.",
      },
    ],
  },
  {
    puesto: { en: "Software Developer", es: "Desarrollador de Software" },
    empresa: "LogisticPro",
    periodo: { en: "September 2021 – May 2023", es: "Septiembre 2021 – Mayo 2023" },
    ubicacion: { en: "Tulancingo de Bravo, Hidalgo, Mexico", es: "Tulancingo de Bravo, Hidalgo, México" },
    logros: [
      {
        en: "Contributed to a logistics SaaS platform with a .NET Core microservices architecture, distributed Web APIs and asynchronous messaging (RabbitMQ).",
        es: "Participé en una plataforma SaaS de logística con arquitectura de microservicios en .NET Core, con Web APIs distribuidas y mensajería asíncrona (RabbitMQ).",
      },
      {
        en: "Built a real-time shipment tracking module using SignalR and Angular.",
        es: "Desarrollé un módulo de tracking de envíos en tiempo real usando SignalR y Angular.",
      },
      {
        en: "Implemented authentication and access control with JWT and custom middleware.",
        es: "Implementé autenticación y control de acceso mediante JWT y middleware personalizado.",
      },
    ],
  },
];
