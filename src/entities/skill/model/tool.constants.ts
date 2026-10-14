import { Skill } from "./skill.types";

export const TOOLS: Skill[] = (
  [
    {
      name: "Git",
      level: 8,
    },
    {
      name: "Visual Studio Code",
      level: 8,
    },
    {
      name: "Supabase",
      level: 5,
    },
    {
      name: "IntelliJ",
      level: 7,
    },
    {
      name: "PyCharm",
      level: 5,
    },
  ] satisfies Skill[]
).sort((a, b) => b.level - a.level);
