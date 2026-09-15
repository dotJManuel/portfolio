import type { Proyecto } from './types';

export const proyectos: Proyecto[] = [
  {
    titulo: {
      en: "PROYECTIA — Enterprise management platform (SaaS)",
      es: "PROYECTIA — Plataforma de gestión empresarial (SaaS)",
    },
    descripcion: {
      en: "SaaS product in production with an active client. Custom modular ERP that centralizes CRM, electronic invoicing, expenses, travel expenses, payroll and projects, with real-time dashboards. Ongoing development and improvement.",
      es: "Producto SaaS en producción con cliente activo. ERP modular a la medida que centraliza CRM, facturación electrónica, gastos, viáticos, nómina y proyectos, con dashboards en tiempo real. Desarrollo y mejora continua.",
    },
    tecnologias: ["ASP.NET Core 8", "Dapper", "SQL Server", "JWT + Google OAuth"],
    rol: {
      en: "Full-stack analyst and developer",
      es: "Analista y desarrollador full-stack",
    },
    demo: "https://uteam.com.mx/#dev-medida",
  },
  {
    titulo: {
      en: "SAP ↔ CrunchTime integration (freelance · national restaurant chain)",
      es: "Integración SAP ↔ CrunchTime (freelance · cadena de restaurantes nacional)",
    },
    descripcion: {
      en: "Full-stack freelance integration for a national restaurant chain that bidirectionally syncs CrunchTime (a restaurant management system) with SAP Business One. A Worker with 9 scheduled jobs (Quartz.NET) pulls data from the CrunchTime API into an intermediate SQL Server database and, applying mapping tables, automatically creates purchase orders, goods receipts and inventory counts in SAP B1, also handling cancellations and statuses. I also built an Angular web panel (over a REST API) to monitor sync status, trigger syncs and postings manually, and generate reports to view and export the data. I also solved running SAP's DI API COM (x86) in production as a Windows Service. The system eliminated manual data entry between both systems and reduced reconciliation errors.",
      es: "Integración freelance full-stack para una cadena de restaurantes nacional que sincroniza de forma bidireccional CrunchTime (sistema de gestión de restaurantes) con SAP Business One. Un Worker con 9 jobs programados (Quartz.NET) extrae datos desde la API de CrunchTime hacia una base intermedia en SQL Server y, aplicando tablas de equivalencia, crea automáticamente en SAP B1 las órdenes de compra, entradas de mercancía y conteos de inventario, gestionando también cancelaciones y estados. Desarrollé además un panel web en Angular (sobre una API REST) para monitorear el estado de la sincronización, disparar sincronizaciones y posteos de forma manual y generar reportes para visualizar y exportar la información. Resolví también la ejecución en producción de la DI API COM (x86) de SAP como Windows Service. El sistema eliminó la captura manual entre ambos sistemas y redujo los errores de conciliación.",
    },
    tecnologias: [".NET", "SAP Service Layer", "REST API", "SQL Server", "Dapper", "Worker Service", "Quartz.NET", "Angular", ],
    repo: "",
  },
  {
    titulo: {
      en: "Sales CRM",
      es: "CRM de Ventas",
    },
    descripcion: {
      en: "System to centralize the sales pipeline and automate reports, cutting 10 hours of manual work per week.",
      es: "Sistema para centralizar el pipeline de ventas y automatizar reportes, reduciendo 10 horas semanales de trabajo manual.",
    },
    tecnologias: ["Angular", "ASP.NET Core", "SQL Server", "JWT"],
    repo: "",
  },
  {
    titulo: {
      en: "Logistics SaaS Platform",
      es: "Plataforma SaaS de Logística",
    },
    descripcion: {
      en: "Microservices architecture with asynchronous messaging and real-time shipment tracking.",
      es: "Arquitectura de microservicios con mensajería asíncrona y tracking de envíos en tiempo real.",
    },
    tecnologias: [".NET Core", "RabbitMQ", "SignalR", "Ocelot"],
  },
];
