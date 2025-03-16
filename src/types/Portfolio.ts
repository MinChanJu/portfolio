import { Career, Project, Skill, Prize, Certificate } from ".";

export type Portfolio = {
  languages: Skill[];
  libraries: Skill[];
  tools: Skill[];
  projects: Project[];
  prizes: Prize[];
  certificates: Certificate[];
  careers: Career[];
}