import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import profile from "../assets/image/profile.jpeg";
import useNavigation from "../hooks/useNavigation";
import { Project } from "../types";
import { getPathId } from "../utils/Path";

interface SideBarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projects: Project[];
}

const SideBar: React.FC<SideBarProps> = ({ isSidebarOpen, setIsSidebarOpen, projects }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { goToHome, goToIntro, goToSkill, goToProjectId, goToAward, goToCarrer, goToLink } = useNavigation();
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setTab(getPathId(path, projects));
  }, [location.pathname, projects]);

  const getSelectBtnClass = (idx: number) => {
    let style = "w-full border-t border-b border-gray-400 py-2 text-xl";
    if (idx >= 10) style += " " + "bg-gray-100";
    if (idx == tab) style += " " + "bg-gray-200 font-semibold";
    return style;
  };

  return (
    <div
      ref={scrollRef}
      className={`fixed top-0 bottom-0 left-0 z-5 box-border flex w-75 flex-col items-center border-r border-gray-500 bg-white transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <button
        className="absolute top-2.5 -right-12.5 h-10 w-10 rounded-xl bg-gray-500/80 text-xl text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "⏎" : "☰"}
      </button>
      <img className="mt-5 w-4/5 rounded-[40%]" src={profile} alt="프로필 사진" />
      <img
        className="mt-5 w-4/5"
        src="https://readme-typing-svg.demolab.com/?lines=Min+Chan+Ju;Junior+Developer&font=Emblema+One&duration=1000&pause=3000&center=true&width=200&color=BE58F7"
      ></img>
      <div className="scrollbar relative mb-7.5 flex w-full flex-col gap-2.5 overflow-y-scroll pl-2.5">
        <button className={getSelectBtnClass(0)} onClick={goToHome}>
          전체보기
        </button>
        <button className={getSelectBtnClass(1)} onClick={goToIntro}>
          자기소개
        </button>
        <button className={getSelectBtnClass(2)} onClick={goToSkill}>
          기술스택
        </button>
        <button className={getSelectBtnClass(-2)} onClick={() => setIsOpen(!isOpen)}>
          프로젝트 {isOpen ? "▲" : "▼"}
        </button>
        {isOpen &&
          projects.map((project, index) => (
            <button key={index} className={getSelectBtnClass(10 + index + 1)} onClick={() => goToProjectId(index + 1)}>
              {index + 1}. {project.project}
            </button>
          ))}
        <button className={getSelectBtnClass(3)} onClick={goToAward}>
          수상 및 자격증
        </button>
        <button className={getSelectBtnClass(4)} onClick={goToCarrer}>
          경력
        </button>
        <button className={getSelectBtnClass(5)} onClick={goToLink}>
          링크
        </button>
      </div>
    </div>
  );
};

export default SideBar;
