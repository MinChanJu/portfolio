import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const useNavigation = () => {
	const navigate = useNavigate();

	return {
		goToPage: (path: string) => navigate(path),
		goToHome: () => navigate(ROUTES.HOME),
		goToIntro: () => navigate(ROUTES.INTRO),
		goToSkill: () => navigate(ROUTES.SKILL),
		goToProjectId: (projectId: number) => navigate(ROUTES.PROJECCT_ID(projectId)),
		goToAward: () => navigate(ROUTES.AWARD),
		goToCarrer: () => navigate(ROUTES.CARRER),
		goToLink: () => navigate(ROUTES.LINK),
	};
};

export default useNavigation;