import { useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";

import { Project } from "@entities/project";

import { ROUTES } from "@shared/config/routes";
import { getLastPathParam } from "@shared/lib/path/model/path";

interface UsePageTitleProps {
  projects: Project[];
}

const usePageTitle = ({ projects }: UsePageTitleProps) => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const param = getLastPathParam(path);

    const titleMap: { [key: string]: string } = {
      [ROUTES.HOME]: "홈",
      [ROUTES.INTRO]: "자기 소개",
      [ROUTES.SKILL]: "기술 스택",
      [ROUTES.AWARD]: "수상 및 자격증",
      [ROUTES.CAREER]: "경력",
      [ROUTES.LINK]: "링크",
    };

    let title = titleMap[path] || "오류";

    if (matchPath(ROUTES.PROJECT, path)) {
      const index = Number(param);
      if (!Number.isNaN(index) && 1 <= index && index <= projects.length) {
        title = projects[index - 1].project;
      } else {
        title = "프로젝트 오류";
      }
    }

    document.title = title + " | MinChanJu";
  }, [location.pathname, projects]);

  return null;
};

export default usePageTitle;
