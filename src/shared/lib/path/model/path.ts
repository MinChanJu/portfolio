import { matchPath } from "react-router-dom";

import { Project } from "@entities/project";

import { ROUTES } from "@shared/config/routes";

export const getLastPathParam = (path: string): string => {
  const segments = path.split("/").filter(Boolean);
  return segments.pop() || "";
};

export const getPathId = (path: string, projects: Project[]): number => {
  if (path === ROUTES.HOME) return 0;
  if (path === ROUTES.INTRO) return 1;
  if (path === ROUTES.SKILL) return 2;
  if (path === ROUTES.AWARD) return 3;
  if (path === ROUTES.CAREER) return 4;
  if (path === ROUTES.LINK) return 5;
  if (matchPath(ROUTES.PROJECT, path)) {
    const param = getLastPathParam(path);
    const index = Number(param);
    if (!Number.isNaN(index) && 1 <= index && index <= projects.length) {
      return 10 + index;
    } else {
      return 10;
    }
  }
  return -1;
};
