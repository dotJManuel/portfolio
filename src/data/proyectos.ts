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
    titulo: "Integración SAP ↔ CrunchTime (freelance · cadena de restaurantes nacional)",
    descripcion: "Integración freelance full-stack para una cadena de restaurantes nacional que sincroniza de forma bidireccional CrunchTime (sistema de gestión de restaurantes) con SAP Business One. Un Worker con 9 jobs programados (Quartz.NET) extrae datos desde la API de CrunchTime hacia una base intermedia en SQL Server y, aplicando tablas de equivalencia, crea automáticamente en SAP B1 las órdenes de compra, entradas de mercancía y conteos de inventario, gestionando también cancelaciones y estados. Desarrollé además un panel web en Angular (sobre una API REST) para monitorear el estado de la sincronización, disparar sincronizaciones y posteos de forma manual y generar reportes para visualizar y exportar la información. Resolví también la ejecución en producción de la DI API COM (x86) de SAP como Windows Service. El sistema eliminó la captura manual entre ambos sistemas y redujo los errores de conciliación.",
    tecnologias: [".NET", "SAP Service Layer", "REST API", "SQL Server", "Dapper", "Worker Service", "Quartz.NET", "Angular", ],
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