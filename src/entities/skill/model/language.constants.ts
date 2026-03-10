import { Skill } from "./skill.types";

export const LANGUAGES: Skill[] = (
  [
    {
      name: "Python",
      level: 8,
    },
    {
      name: "Java",
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
      name: "HTML5",
      level: 8,
    },
    {
      name: "CSS",
      level: 7,
    },
    {
      name: "MySQL",
      level: 6,
    },
  ] satisfies Skill[]
).sort((a, b) => b.level - a.level);
