export const SECTION_ID = {
  INTRODUCTION: "introduction",
  SKILL: "skill",
  PROJECT: "project",
  AWARD: "award",
  CAREER: "career",
  LINK: "link",
} as const;

export type SectionId = (typeof SECTION_ID)[keyof typeof SECTION_ID];
