import { Error } from ".";

import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { ROUTES } from "../constants/routes";
import { AwardView, CareerView, HomeView, IntroductionView, LinkView, ProjectView, SkillView } from "../pages";
import { Portfolio } from "../types";

interface AppRoutesProps {
  isSidebarOpen: boolean;
  data: Portfolio;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isSidebarOpen, data }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`transition-all duration-300 ${isSidebarOpen ? "ml-75 w-[calc(100%-300px)]" : "ml-0 w-full"}`}>
      <header>
        <img
          className="w-full"
          src="https://capsule-render.vercel.app/api?type=waving&color=0:f50000,100:6dfde0&height=180&animation=twinkling"
          alt="웨이브 물결 위"
        />
      </header>

      <main className="mx-12.5">
        <Routes>
          <Route path={ROUTES.HOME} element={<HomeView data={data} />} />
          <Route path={ROUTES.INTRO} element={<IntroductionView />} />
          <Route
            path={ROUTES.SKILL}
            element={<SkillView languages={data.languages} libraries={data.libraries} tools={data.tools} />}
          />
          <Route path={ROUTES.PROJECT} element={<ProjectView projects={data.projects} />} />
          <Route path={ROUTES.AWARD} element={<AwardView prizes={data.prizes} certificates={data.certificates} />} />
          <Route path={ROUTES.CAREER} element={<CareerView careers={data.careers} />} />
          <Route path={ROUTES.LINK} element={<LinkView />} />
          <Route path={ROUTES.NOT_FOUND} element={<Error />} />
        </Routes>
      </main>

      <footer>
        <img
          className="mx-auto mt-25"
          src="https://readme-typing-svg.demolab.com/?lines=포트폴리오를+방문해+주셔서+감사합니다!;좋은+하루+되세요!+😊&font=Fira%20Code&duration=2000&pause=1000&center=true&height=50"
          alt="마지막 문구"
        ></img>
        <img
          className="w-full"
          src="https://capsule-render.vercel.app/api?type=waving&color=1d5&height=150&section=footer"
          alt="웨이브 물결 아래"
        />
      </footer>
    </div>
  );
};

export default AppRoutes;
