import { Route, Routes } from 'react-router-dom';
import { skill, project, prize, certificate, career, portfolio } from '../types';
import { SkillView, ProjectView, AwardView, HomeView, IntroductionView, CareerView, LinkView } from '../pages';
import { Error, PageTitle } from '.';
import styles from "../assets/css/AppRoutes.module.css"
import useNavigation from '../hooks/useNavigation';
import { ROUTES } from '../constants/routes';

type AppRoutesProps = {
  isClosed: boolean;
  data: portfolio;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isClosed, data }) => {
  const { goToHome } = useNavigation();
  const languages: skill[] = data.languages;
  const librarys: skill[] = data.librarys;
  const tools: skill[] = data.tools;
  const projects: project[] = data.projects;
  const prizes: prize[] = data.prizes;
  const certificates: certificate[] = data.certificates;
  const careers: career[] = data.careers;

  return (
    <div className={`${styles.content}  ${isClosed ? styles.closed : ""}`}>
      <PageTitle projects={data.projects} />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomeView data={data} />} />
        <Route path={ROUTES.INTRO} element={<IntroductionView />} />
        <Route path={ROUTES.SKILL} element={<SkillView languages={languages} librarys={librarys} tools={tools} />} />
        <Route path={ROUTES.PROJECT} element={<ProjectView projects={projects} />} />
        <Route path={ROUTES.AWARD} element={<AwardView prizes={prizes} certificates={certificates} />} />
        <Route path={ROUTES.CARRER} element={<CareerView careers={careers} />} />
        <Route path={ROUTES.LINK} element={<LinkView />} />
        <Route path={ROUTES.NOT_FOUND} element={<Error />} />
      </Routes>
      <button className={styles.nextBtn} onClick={goToHome}>▶</button>
    </div>

  )
}

export default AppRoutes;