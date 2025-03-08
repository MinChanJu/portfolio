import useNavigation from "../hooks/useNavigation"
import styles from "../assets/css/SideBar.module.css"
import profile from "../assets/image/profile.jpeg"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Project } from "../types"
import { getPathId } from "../utils/Path"

type SideBarProps = {
  isClosed: boolean;
  setIsClosed: React.Dispatch<React.SetStateAction<boolean>>;
  projects: Project[];
}

const SideBar: React.FC<SideBarProps> = ({ isClosed, setIsClosed, projects }) => {
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
    if (idx == tab) style +=  " " + styles.selected;
    return style
  }

  return (
    <div className={`${styles.sidebar} ${isClosed ? styles.closed : ""}`}>
      <button className={styles.toggleBtn} onClick={() => setIsClosed(!isClosed)}>{isClosed ? "☰" : "⏎"}</button>
      <img src={profile} alt="프로필 사진" />
      <div className={`info ${styles.center}`}>신입 개발자{"\n"}주민찬</div>
      <br />
      <div className={styles.selectList}>
        <button className={getSelectBtnClass(0)} onClick={goToHome}>전체 보기</button>
        <button className={getSelectBtnClass(1)} onClick={goToIntro}>자기소개</button>
        <button className={getSelectBtnClass(2)} onClick={goToSkill}>기술스택</button>
        <button className={getSelectBtnClass(-2)} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "프로젝트 ▲" : "프로젝트 ▼"}
        </button>
        {isOpen && projects.map((project, index) => (
          <button key={index} className={getSelectBtnClass(10 + index + 1)} onClick={() => goToProjectId(index + 1)}>
            {index + 1}. {project.project}
          </button>
        ))}
        <button className={getSelectBtnClass(3)} onClick={goToAward}>수상 및 자격증</button>
        <button className={getSelectBtnClass(4)} onClick={goToCarrer}>경력</button>
        <button className={getSelectBtnClass(5)} onClick={goToLink}>링크</button>
      </div>
    </div>

  )
}

export default SideBar;