import type { CategoriaSkill } from './types';

export const skills: CategoriaSkill[] = [
  {
    categoria: { en: "Languages", es: "Lenguajes" },
    items: ["C#", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    categoria: { en: "Backend", es: "Backend" },
    items: [".NET / .NET Core", "ASP.NET MVC", "Spring Boot", "APIs REST/SOAP", "SignalR"],
  },
  {
    categoria: { en: "Databases", es: "Bases de datos" },
    items: ["SQL Server", "MySQL", "PostgreSQL", "EF Core", "Dapper"],
  },
  {
    categoria: { en: "Integrations", es: "Integraciones" },
    items: ["SAP Business One", "DI API / DI Server", "Service Layer", "OAuth"],
  },
  {
    categoria: { en: "DevOps & Cloud", es: "DevOps & Cloud" },
    items: ["Docker", "Microsoft Azure", "Git", "CI/CD"],
  },
];
