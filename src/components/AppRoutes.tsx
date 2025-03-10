import { Route, Routes, useLocation } from 'react-router-dom';
import { Portfolio } from '../types';
import { SkillView, ProjectView, AwardView, HomeView, IntroductionView, CareerView, LinkView } from '../pages';
import { Error, PageTitle } from '.';
import { ROUTES } from '../constants/routes';
import styles from "../assets/css/AppRoutes.module.css"
import { useEffect } from 'react';

type AppRoutesProps = {
  isSidebarOpen: boolean;
  data: Portfolio;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isSidebarOpen, data }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className={`${styles.content}  ${isSidebarOpen ? styles.closed : ""}`}>
      <PageTitle projects={data.projects} />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomeView data={data} />} />
        <Route path={ROUTES.INTRO} element={<IntroductionView />} />
        <Route path={ROUTES.SKILL} element={<SkillView languages={data.languages} librarys={data.librarys} tools={data.tools} />} />
        <Route path={ROUTES.PROJECT} element={<ProjectView projects={data.projects} />} />
        <Route path={ROUTES.AWARD} element={<AwardView prizes={data.prizes} certificates={data.certificates} />} />
        <Route path={ROUTES.CARRER} element={<CareerView careers={data.careers} />} />
        <Route path={ROUTES.LINK} element={<LinkView />} />
        <Route path={ROUTES.NOT_FOUND} element={<Error />} />
      </Routes>
    </div>

  )
}

export default AppRoutes;