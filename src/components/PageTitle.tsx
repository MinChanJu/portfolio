import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { project } from "../types";

type PageTitleProps = {
  projects: project[];
}

const PageTitle: React.FC<PageTitleProps> = ({ projects }) => {
  const location = useLocation();

  const getLastPathParam = (path: string): string => {
    const segments = path.split('/').filter(Boolean);  // '/' 기준으로 나누기
    return segments.pop() || '';       // 마지막 요소 가져오기 (없으면 빈 문자열)
  };

  useEffect(() => {
    const path = location.pathname;
    const param = getLastPathParam(path);

    // 페이지별 제목 매핑
    const titleMap: { [key: string]: string } = {
      "/": "홈",
      '/intro': "자기 소개",
      '/skill': "기술 스택",
      '/award': "수상 및 자격증",
      '/carrer': "경력",
      '/link': "링크",
    };

    let title = titleMap[path] || "오류";
    
    if (matchPath("/project/:projectId", path)) {
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