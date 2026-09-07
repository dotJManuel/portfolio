import type { Experiencia } from './types';

export const experiencias: Experiencia[] = [
  {
    puesto: "Desarrollador de Software",
    empresa: "WKS Door Systems",
    periodo: "Mayo 2023 – Presente",
    ubicacion: "Escobedo, N.L., México",
    logros: [
      "Desarrollé una plataforma integral en .NET con sincronización bidireccional en tiempo real con SAP Business One, optimizando la respuesta operativa en un 70%.",
      "Migré de DI API/DI Server a SAP Service Layer en .NET 8, reduciendo los errores de conexión en un 80%.",
      "Diseñé y consumí APIs REST y SOAP con OAuth para integrar sistemas internos y plataformas de terceros.",
      "Desarrollé un CRM interno que centralizó el pipeline de ventas, reduciendo 10 horas semanales de trabajo manual.",
    ],
  },
  {
    puesto: "Desarrollador de Software",
    empresa: "LogisticPro",
    periodo: "Septiembre 2021 – Mayo 2023",
    ubicacion: "Tulancingo de Bravo, Hidalgo, México",
    logros: [
      "Participé en una plataforma SaaS de logística con arquitectura de microservicios en .NET Core, con Web APIs distribuidas y mensajería asíncrona (RabbitMQ).",
      "Desarrollé un módulo de tracking de envíos en tiempo real usando SignalR y Angular.",
      "Implementé autenticación y control de acceso mediante JWT y middleware personalizado.",
    ],
  },
];