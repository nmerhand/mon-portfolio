export type Project = {
  id: number;
  title: string;
  descriptionCourte: string;
  descriptionLongue: string;
  contexte: string;
  objectifs?: string[];
  tech: string[];
  competences: string[];
  liens: { [label: string]: string };
  detailsConnexion?: string;
};

export type Experience = {
  id: number;
  company: string;
  description: string;
  contexte: string;
  missions: { [projet:string] : string[] } | string[];
  startDate: string;
  endDate?: string;
  skills: string[];
};

export type Skill = {
  id: number;
  categorie: string;
  sous_catégorie: { [label:string] : string[] } | string[];
};

export type School = {
  id: number;
  name: string;
  date : string;
  title: string;
  description?: string[];
  localisation: string;
}