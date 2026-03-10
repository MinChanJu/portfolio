export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectSite = {
  url: string;
  favicon: string;
};

export type Project = {
  title: string;
  period: string;
  team: string;
  role: string;
  skills: string[];
  site?: ProjectSite;
  links?: ProjectLink[];
  imageName: string;
  description: string;
};
