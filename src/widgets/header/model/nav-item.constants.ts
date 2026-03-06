import { SECTION_ID } from "@shared/config";

import { NavItem } from "./nav-item.types";

export const NAV_ITEMS: NavItem[] = [
  { label: "자기소개", sectionId: SECTION_ID.INTRODUCTION },
  { label: "기술스택", sectionId: SECTION_ID.SKILL },
  { label: "프로젝트", sectionId: SECTION_ID.PROJECT },
  { label: "수상/자격증", sectionId: SECTION_ID.AWARD },
  { label: "경력", sectionId: SECTION_ID.CAREER },
  { label: "링크", sectionId: SECTION_ID.LINK },
];
