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
  informatique: { [label:string] : string[] };
  outils: { [label:string] : string[] };
  soft: string[];
};