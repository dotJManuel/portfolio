export interface Localized {
  en: string;
  es: string;
}

export interface ProyectoImagen {
  src: string;
  caption: Localized;
}

export interface ProyectoDiagrama {
  srcEs: string;
  srcEn: string;
  caption: Localized;
}

export interface Proyecto {
  titulo: Localized;
  descripcion: Localized;
  tecnologias: string[];
  destacados?: Localized[];
  imagenes?: ProyectoImagen[];
  diagramas?: ProyectoDiagrama[];
  rol?: Localized;
  repo?: string;
  demo?: string;
}

export interface Experiencia {
  puesto: Localized;
  empresa: string;
  periodo: Localized;
  ubicacion: Localized;
  logros: Localized[];
}

export interface CategoriaSkill {
  categoria: Localized;
  items: string[];
}

export interface Certificacion {
  nombre: string;
  emisor: string;
  fecha: Localized;
  url?: string;
}
