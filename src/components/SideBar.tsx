import useNavigation from "../hooks/useNavigation"
import data from '../assets/data.json'
import styles from "../assets/css/SideBar.module.css"
import profile from "../assets/image/profile.jpeg"

type SideBarProps = {
  isClosed: boolean;
  setIsClosed: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({ isClosed, setIsClosed }) => {
  const { goToHome, goToIntro, goToSkill, goToProjectId, goToAward, goToCarrer, goToLink } = useNavigation()

  const toggleSidebar = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div className={`${styles.sidebar} ${isClosed ? styles.closed : ""}`}>
      <button className={styles.toggleBtn} onClick={toggleSidebar}>{isClosed ? "▶" : "◀"}</button>
      <img src={profile} alt="" />
      <button className={styles.selectBtn} onClick={goToIntro}>자기소개</button>
      <button className={styles.selectBtn} onClick={goToSkill}>기술스택</button>
      {data.projects.map((project, index) => (
        <button key={index} className={styles.selectBtn} onClick={() => { goToProjectId(index + 1) }}>프로젝트 {index + 1}{"\n"}{project.project}</button>
      ))}
      <button className={styles.selectBtn} onClick={goToAward}>수상 및 자격증</button>
      <button className={styles.selectBtn} onClick={goToCarrer}>경력</button>
      <button className={styles.selectBtn} onClick={goToLink}>링크</button>
      <button className={styles.selectBtn} onClick={goToHome}>전체 보기</button>
    </div>
  )
}

export default SideBar;