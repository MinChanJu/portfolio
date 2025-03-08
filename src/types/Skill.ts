export type Skill = {
  languages: Lang[];
  librarys: Lang[];
  tools: Lang[];
}

export type Lang = {
  name: string;
  level: number;
}