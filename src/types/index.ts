export type Project = {
  id: number;
  title: string;
  descriptionCourte: string;
  descriptionLongue: string;
  contexte: string;
  objectifs?: string[];
  tech: { [key: string]: string[] };
  competences: string[];
  liens: { [label: string]: string };
  detailsConnexion?: string;
};

export type Experience = {
  id: number;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate?: string;
  skills: string[];
};