import { Route, Routes } from 'react-router-dom';
import { Portfolio } from '../types';
import { SkillView, ProjectView, AwardView, HomeView, IntroductionView, CareerView, LinkView } from '../pages';
import { Error, PageTitle } from '.';
import styles from "../assets/css/AppRoutes.module.css"
import useNavigation from '../hooks/useNavigation';
import { ROUTES } from '../constants/routes';

type AppRoutesProps = {
  isClosed: boolean;
  data: Portfolio;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isClosed, data }) => {
  const { goToHome } = useNavigation();

  return (
    <div className={`${styles.content}  ${isClosed ? styles.closed : ""}`}>
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
      <button className={styles.nextBtn} onClick={goToHome}>▶</button>
    </div>

  )
}

export default AppRoutes;