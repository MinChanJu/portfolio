import { Career, Award, Project, Skill } from ".";

export type Portfolio = {
  skills: Skill;
  projects: Project[];
  awards: Award;
  careers: Career[];
}