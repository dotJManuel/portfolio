import type { CategoriaSkill } from './types';

export const skills: CategoriaSkill[] = [
  {
    categoria: "Lenguajes",
    items: ["C#", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    categoria: "Backend",
    items: [".NET / .NET Core", "ASP.NET MVC", "Spring Boot", "APIs REST/SOAP", "SignalR"],
  },
  {
    categoria: "Bases de datos",
    items: ["SQL Server", "MySQL", "PostgreSQL", "EF Core", "Dapper"],
  },
  {
    categoria: "Integraciones",
    items: ["SAP Business One", "DI API / DI Server", "Service Layer", "OAuth"],
  },
  {
    categoria: "DevOps & Cloud",
    items: ["Docker", "Microsoft Azure", "Git", "CI/CD"],
  },
];