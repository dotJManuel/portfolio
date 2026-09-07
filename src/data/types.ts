export interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  repo?: string;
}

export interface Experiencia {
  puesto: string;
  empresa: string;
  periodo: string;
  ubicacion: string;
  logros: string[];
}

export interface CategoriaSkill {
  categoria: string;
  items: string[];
}

export interface Certificacion {
  nombre: string;
  emisor: string;
  fecha: string;
  url?: string;
}