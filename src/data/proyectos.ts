import type { Proyecto } from './types';

export const proyectos: Proyecto[] = [
  {
    titulo: "PROYECTIA — Plataforma de gestión empresarial (SaaS)",
    descripcion: "Producto SaaS en producción con cliente activo. ERP modular a la medida que centraliza CRM, facturación electrónica, gastos, viáticos, nómina y proyectos, con dashboards en tiempo real. Desarrollo y mejora continua.",
    tecnologias: ["ASP.NET Core 8", "Dapper", "SQL Server", "JWT + Google OAuth"],
    rol: "Analista y desarrollador full-stack",
    demo: "https://uteam.com.mx/#dev-medida",
  },
  {
    titulo: "Integración SAP ↔ CrunchTime",
    descripcion: "Integración freelance que sincroniza SAP Business One con CrunchTime mediante un worker de procesamiento continuo, eliminando la captura manual entre ambos sistemas y reduciendo errores de conciliación. Procesa [N] registros/día de forma automática.",
    tecnologias: [".NET", "SAP Service Layer", "REST API", "Worker Service", "SQL Server"],
    repo: "",
  },
  {
    titulo: "CRM de Ventas",
    descripcion: "Sistema para centralizar el pipeline de ventas y automatizar reportes, reduciendo 10 horas semanales de trabajo manual.",
    tecnologias: ["Angular", "ASP.NET Core", "SQL Server", "JWT"],
    repo: "",
  },
  {
    titulo: "Plataforma SaaS de Logística",
    descripcion: "Arquitectura de microservicios con mensajería asíncrona y tracking de envíos en tiempo real.",
    tecnologias: [".NET Core", "RabbitMQ", "SignalR", "Ocelot"],
  },
];