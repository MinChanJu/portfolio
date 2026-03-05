import { Career } from "@entities/career";
import { Certificate } from "@entities/certificate";
import { Prize } from "@entities/prize";
import { Project } from "@entities/project";
import { Skill } from "@entities/skill";

export type Portfolio = {
  languages: Skill[];
  libraries: Skill[];
  tools: Skill[];
  projects: Project[];
  prizes: Prize[];
  certificates: Certificate[];
  careers: Career[];
};
