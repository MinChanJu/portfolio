import { career, certificate, prize, project, skill } from ".";

export type portfolio = {
  languages: skill[];
  librarys: skill[];
  tools: skill[];
  projects: project[];
  prizes: prize[];
  certificates: certificate[];
  careers: career[];
}