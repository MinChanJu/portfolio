import { Skill } from "./skill.types";

export const LANGUAGES: Skill[] = (
  [
    {
      name: "Python",
      level: 8,
    },
    {
      name: "JAVA",
      level: 8,
    },
    {
      name: "C언어",
      level: 6,
    },
    {
      name: "C++",
      level: 7,
    },
    {
      name: "C#",
      level: 6,
    },
    {
      name: "Dart",
      level: 6,
    },
    {
      name: "JavaScript",
      level: 8,
    },
    {
      name: "TypeScript",
      level: 8,
    },
    {
      name: "HTML",
      level: 8,
    },
    {
      name: "CSS",
      level: 7,
    },
    {
      name: "SQL",
      level: 6,
    },
  ] satisfies Skill[]
).sort((a, b) => b.level - a.level);
