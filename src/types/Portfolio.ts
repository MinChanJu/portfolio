import { Career, Project, Skill, Prize, Certificate } from ".";

export type Portfolio = {
  languages: Skill[];
  librarys: Skill[];
  tools: Skill[];
  projects: Project[];
  prizes: Prize[];
  certificates: Certificate[];
  careers: Career[];
}