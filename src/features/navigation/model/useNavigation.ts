import { useNavigate } from "react-router-dom";

import { ROUTES } from "@shared/config/routes";

const useNavigation = () => {
  const navigate = useNavigate();

  return {
    goToPage: (path: string) => navigate(path),
    goToHome: () => navigate(ROUTES.HOME),
    goToIntro: () => navigate(ROUTES.INTRO),
    goToSkill: () => navigate(ROUTES.SKILL),
    goToProjectId: (projectId: number) => navigate(ROUTES.PROJECT_ID(projectId)),
    goToAward: () => navigate(ROUTES.AWARD),
    goToCareer: () => navigate(ROUTES.CAREER),
    goToLink: () => navigate(ROUTES.LINK),
  };
};

export default useNavigation;
