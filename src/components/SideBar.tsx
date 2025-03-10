import useNavigation from "../hooks/useNavigation"
import styles from "../assets/css/SideBar.module.css"
import profile from "../assets/image/profile.jpeg"
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { Project } from "../types"
import { getPathId } from "../utils/Path"

type SideBarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projects: Project[];
}

const SideBar: React.FC<SideBarProps> = ({ isSidebarOpen, setIsSidebarOpen, projects }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { goToHome, goToIntro, goToSkill, goToProjectId, goToAward, goToCarrer, goToLink } = useNavigation()
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setTab(getPathId(path, projects));
  }, [location.pathname]);

  const getSelectBtnClass = (idx: number) => {
    let style = styles.selectBtn;
    if (idx >= 10) style += " " + styles.project;
    if (idx == tab) style += " " + styles.selected;
    return style
  }

  return (
    <div ref={scrollRef} className={`${styles.sidebar} ${isSidebarOpen ? styles.closed : ""}`}>
      <button className={styles.toggleBtn} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>{isSidebarOpen ? "☰" : "⏎"}</button>
      <img src={profile} alt="프로필 사진" />
      <img src="https://readme-typing-svg.demolab.com/?lines=Min+Chan+Ju;Junior+Developer&font=Fira%20Code&duration=1000&pause=3000&center=true&width=200&color=BE58F7"></img>
      <div className={styles.selectList}>
        <button className={getSelectBtnClass(0)} onClick={goToHome}>전체보기</button>
        <button className={getSelectBtnClass(1)} onClick={goToIntro}>자기소개</button>
        <button className={getSelectBtnClass(2)} onClick={goToSkill}>기술스택</button>
        <button className={getSelectBtnClass(-2)} onClick={() => setIsOpen(!isOpen)}>프로젝트 {isOpen ? "▲" : "▼"}</button>
        {isOpen && projects.map((project, index) => (
          <button key={index} className={getSelectBtnClass(10 + index + 1)} onClick={() => goToProjectId(index + 1)}>{index + 1}. {project.project}</button>
        ))}
        <button className={getSelectBtnClass(3)} onClick={goToAward}>수상 및 자격증</button>
        <button className={getSelectBtnClass(4)} onClick={goToCarrer}>경력</button>
        <button className={getSelectBtnClass(5)} onClick={goToLink}>링크</button>
      </div>
    </div>

  )
}

export default SideBar;