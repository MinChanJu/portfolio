import { useLocation } from "react-router-dom";

import { useNavigation } from "@features/navigation";

import { ROUTES } from "@shared/config/routes";

const useHeaderNav = () => {
  const { goToHome, goToIntro, goToSkill, goToProjectId, goToAward, goToCareer, goToLink } = useNavigation();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isProjectActive = location.pathname.startsWith("/project");

  const navItemClass = (path: string) =>
    `text-sm font-medium transition-colors duration-200 ${isActive(path) ? "text-violet-600" : "text-gray-500 hover:text-gray-900"}`;

  const navItems = [
    { label: "전체보기", action: goToHome, path: ROUTES.HOME },
    { label: "자기소개", action: goToIntro, path: ROUTES.INTRO },
    { label: "기술스택", action: goToSkill, path: ROUTES.SKILL },
    { label: "수상/자격증", action: goToAward, path: ROUTES.AWARD },
    { label: "경력", action: goToCareer, path: ROUTES.CAREER },
    { label: "링크", action: goToLink, path: ROUTES.LINK },
  ];

  return { goToHome, goToProjectId, navItems, isActive, isProjectActive, navItemClass };
};

export default useHeaderNav;
