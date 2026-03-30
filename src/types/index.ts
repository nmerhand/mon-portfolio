export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
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