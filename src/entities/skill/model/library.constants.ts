import { Skill } from "./skill.types";

export const LIBRARIES: Skill[] = (
  [
    {
      name: "Spring",
      level: 7,
    },
    {
      name: "Flutter",
      level: 5,
    },
    {
      name: "React",
      level: 8,
    },
    {
      name: "Unity",
      level: 5,
    },
    {
      name: "Django",
      level: 4,
    },
    {
      name: "NestJS",
      level: 7,
    },
    {
      name: "Next.JS",
      level: 5,
    },
    {
      name: "FastAPI",
      level: 5,
    },
  ] satisfies Skill[]
).sort((a, b) => b.level - a.level);
