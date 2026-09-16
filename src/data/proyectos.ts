import type { Proyecto } from './types';

export const proyectos: Proyecto[] = [
  {
    titulo: {
      en: "PROYECTIA — Enterprise management platform (SaaS)",
      es: "PROYECTIA — Plataforma de gestión empresarial (SaaS)",
    },
    descripcion: {
      en: "SaaS ERP in production with an active client. A modular platform in ASP.NET Core 8 that centralizes CRM, electronic invoicing, expense and travel reports, payroll, HR, projects and inventory, with real-time dashboards and budgets by cost center. Built over 50+ controllers on a multi-company data layer, under ongoing development and improvement.",
      es: "ERP SaaS en producción con cliente activo. Plataforma modular en ASP.NET Core 8 que centraliza CRM, facturación electrónica, comprobación de gastos y viáticos, nómina, RR.HH., proyectos e inventario, con dashboards en tiempo real y presupuestos por centro de costos. Construida sobre más de 50 controllers y una capa de datos multiempresa, en desarrollo y mejora continua.",
    },
    tecnologias: ["ASP.NET Core 8", "Dapper", "SQL Server", "AutoMapper", "JWT + Google OAuth", "Serilog"],
    destacados: [
      {
        en: "Modular architecture with 50+ controllers covering CRM, invoicing, payroll, HR, projects and inventory.",
        es: "Arquitectura modular con más de 50 controllers: CRM, facturación, nómina, RR.HH., proyectos e inventario.",
      },
      {
        en: "Multi-company data layer that consolidates several entities into unified reports and dashboards.",
        es: "Capa de datos multiempresa que consolida varias sociedades en reportes y dashboards unificados.",
      },
      {
        en: "Authentication with JWT + refresh tokens and Google OAuth, plus Google Calendar integration.",
        es: "Autenticación con JWT + refresh tokens y Google OAuth, más integración con Google Calendar.",
      },
      {
        en: "Data access with Dapper over SQL Server, tuned for real-time dashboards and KPIs.",
        es: "Acceso a datos con Dapper sobre SQL Server, afinado para dashboards y KPIs en tiempo real.",
      },
    ],
    imagenes: [
      {
        src: "/proyectos/proyectia/dashboard.png",
        caption: {
          en: "Real-time dashboard with KPIs and cost-center budgets.",
          es: "Dashboard en tiempo real con KPIs y presupuestos por centro de costos.",
        },
      },
      {
        src: "/proyectos/proyectia/crm.png",
        caption: {
          en: "CRM — sales pipeline and opportunities board.",
          es: "CRM — pipeline de ventas y tablero de oportunidades.",
        },
      },
      {
        src: "/proyectos/proyectia/home.png",
        caption: {
          en: "Home — general task management across the platform.",
          es: "Home — gestión general de tareas de la plataforma.",
        },
      },
    ],
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
      en: "Full-stack freelance integration for a national restaurant chain that bidirectionally syncs CrunchTime (restaurant management) with SAP Business One. A .NET Worker with 10 scheduled Quartz jobs pulls data from the CrunchTime REST API (typed clients with Refit) into an intermediate SQL Server database and, applying mapping tables, automatically creates purchase orders, goods receipts and inventory counts in SAP B1 through the DI API, handling cancellations and statuses. I built an Angular panel over a REST API to monitor sync status, trigger syncs and postings manually and generate reports. I also got SAP's DI API COM (x86) running in production as a Windows Service. It eliminated manual data entry between systems and reduced reconciliation errors.",
      es: "Integración freelance full-stack para una cadena nacional de restaurantes que sincroniza de forma bidireccional CrunchTime (gestión de restaurantes) con SAP Business One. Un Worker en .NET con 10 jobs programados (Quartz) extrae datos de la API REST de CrunchTime (clientes tipados con Refit) hacia una base intermedia en SQL Server y, aplicando tablas de equivalencia, crea automáticamente en SAP B1 las órdenes de compra, entradas de mercancía y conteos de inventario mediante la DI API, gestionando cancelaciones y estados. Desarrollé un panel en Angular sobre una API REST para monitorear el estado de la sincronización, disparar sincronizaciones y posteos de forma manual y generar reportes. Además dejé corriendo en producción la DI API COM (x86) de SAP como Windows Service. Eliminó la captura manual entre sistemas y redujo los errores de conciliación.",
    },
    tecnologias: [".NET", "SAP DI API", "Refit", "Quartz.NET", "Worker Service", "SQL Server", "Dapper", "Angular"],
    destacados: [
      {
        en: "Bidirectional sync between CrunchTime and SAP B1 with mapping tables and idempotency to avoid duplicate documents.",
        es: "Sincronización bidireccional CrunchTime ↔ SAP B1 con tablas de equivalencia e idempotencia para evitar documentos duplicados.",
      },
      {
        en: "Worker with 10 Quartz jobs running as a Windows Service, with Serilog logging.",
        es: "Worker con 10 jobs de Quartz corriendo como Windows Service, con logging en Serilog.",
      },
      {
        en: "Typed CrunchTime API clients with Refit; SAP writes through the DI API (COM, x86).",
        es: "Clientes tipados de la API de CrunchTime con Refit; escritura en SAP mediante la DI API (COM, x86).",
      },
      {
        en: "Angular panel over a REST API for monitoring, manual syncs/postings and reporting.",
        es: "Panel en Angular sobre API REST para monitoreo, sincronizaciones/posteos manuales y reportes.",
      },
    ],
    imagenes: [
      {
        src: "/proyectos/crunchtime/panel.jpeg",
        caption: {
          en: "Admin panel — manual sync per document type.",
          es: "Panel de administración — sincronización manual por tipo de documento.",
        },
      },
      {
        src: "/proyectos/crunchtime/conversionUnidades.png",
        caption: {
          en: "Unit conversion — factors and equivalences between CrunchTime and SAP units.",
          es: "Conversión de unidades — factores y equivalencias entre unidades de CrunchTime y SAP.",
        },
      },
    ],
    diagramas: [
      {
        srcEs: "/proyectos/crunchtime/arquitectura-es.svg",
        srcEn: "/proyectos/crunchtime/arquitectura-en.svg",
        caption: {
          en: "System architecture: CrunchTime → .NET integration platform → SQL Server → SAP B1.",
          es: "Arquitectura del sistema: CrunchTime → plataforma de integración .NET → SQL Server → SAP B1.",
        },
      },
      {
        srcEs: "/proyectos/crunchtime/posteo-es.svg",
        srcEn: "/proyectos/crunchtime/posteo-en.svg",
        caption: {
          en: "Posting flow SQL → SAP with statuses, unit conversion and automatic retries.",
          es: "Flujo de posteo SQL → SAP con estados, conversión de unidades y reintentos automáticos.",
        },
      },
    ],
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
