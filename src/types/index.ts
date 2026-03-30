export type Project = {
  id: number;
  title: string;
  description: string;
  objectifs?: string[];
  tech: { [key: string]: string[] };
  competences: string[];
  links: { [label: string]: string };
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