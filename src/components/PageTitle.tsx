import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { Project } from "../types";
import { ROUTES } from "../constants/routes";
import { getLastPathParam } from "../utils/Path";

interface PageTitleProps {
  projects: Project[];
}

const PageTitle: React.FC<PageTitleProps> = ({ projects }) => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const param = getLastPathParam(path);

    // 페이지별 제목 매핑
    const titleMap: { [key: string]: string } = {
      [ROUTES.HOME] : "홈",
      [ROUTES.INTRO] : "자기 소개",
      [ROUTES.SKILL] : "기술 스택",
      [ROUTES.AWARD] : "수상 및 자격증",
      [ROUTES.CAREER] : "경력",
      [ROUTES.LINK] : "링크",
    };

    let title = titleMap[path] || "오류";
    
    if (matchPath(ROUTES.PROJECT, path)) {
      let index = Number(param);
      if (!Number.isNaN(index) && 1 <= index && index <= projects.length ) {
        title = projects[index-1].project;
      } else {
        title = "프로젝트 오류";
      }
    }

    document.title = title + " | MinChanJu";
  }, [location.pathname]);

  return null;
};

export default PageTitle;