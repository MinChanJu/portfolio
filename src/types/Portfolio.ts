import { Career, Certificate, Prize, Project, Skill } from ".";

export type Portfolio = {
  languages: Skill[];
  libraries: Skill[];
  tools: Skill[];
  projects: Project[];
  prizes: Prize[];
  certificates: Certificate[];
  careers: Career[];
};
