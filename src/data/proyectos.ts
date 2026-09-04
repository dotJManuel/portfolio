import type { Proyecto } from './types';

export const proyectos: Proyecto[] = [
  {
    titulo: "CRM de Ventas",
    descripcion: "Sistema para centralizar el pipeline de ventas y automatizar reportes, reduciendo 10 horas semanales de trabajo manual.",
    tecnologias: ["Angular", "ASP.NET Core", "SQL Server", "JWT"],
    repo: "",
  },
  {
    titulo: "Integración SAP Business One",
    descripcion: "Sincronización bidireccional en tiempo real con SAP B1 vía Service Layer, eliminando flujos manuales.",
    tecnologias: [".NET 8", "SAP Service Layer", "REST", "SQL Server"],
    repo: "",
  },
  {
    titulo: "Plataforma SaaS de Logística",
    descripcion: "Arquitectura de microservicios con mensajería asíncrona y tracking de envíos en tiempo real.",
    tecnologias: [".NET Core", "RabbitMQ", "SignalR", "Ocelot"],
  },
];