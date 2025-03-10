import React from 'react'
import { IMG, PROJECT } from '../constants/URLManage'
import CustomLink from '../components/CustomLink'
import styles from "../assets/css/Project.module.css"
import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import { Project } from '../types'
import { ImageSlider } from '../components'

type ProjectViewProps = {
  index?: number;
  projects: Project[];
}

const ProjectView: React.FC<ProjectViewProps> = ({ index, projects }) => {
  const { projectId } = useParams();
  let idx;
  if (index == undefined) idx = Number(projectId) - 1;
  else idx = index;
  if (Number.isNaN(idx)) return <Error subMessage='index가 숫자가 아닙니다.' />
  if (idx < 0 || idx >= projects.length) return <Error subMessage='index가 프로젝트 범위를 벗어났습니다.' />
  const project = projects[idx];

  return (
    <div className='margin'>
      <div className="big">Project {idx + 1}</div>
      <div className="info">{project.project}</div>
      <hr />
      <br />
      <div className="subinfo">
        <div className={styles.group}>
          <span className={styles.line}>개발기간 : </span>
          <span className={styles.linePre}>{project.period}</span>
        </div>
        <div className={styles.group}>
          <span className={styles.line}>팀구성 : </span>
          <span className={styles.linePre}>{project.team}</span>
        </div>
        <div className={styles.group}>
          <span className={styles.line}>담당역할 : </span>
          <span className={styles.linePre}>{project.role}</span>
        </div>
        <div className={styles.group}>
          <span className={styles.line}>사용기술 : </span>
          <span className={styles.linePre}>{project.skills}</span>
        </div>
        {PROJECT[project.name].map((project, idx) => (
          <div key={idx} className={styles.group}>
            <span className={styles.line}>{project[0]} : </span>
            <span className={styles.linePre}><CustomLink href={project[1]} /></span>
          </div>
        ))}
        <div className={styles.group}>
          <div className={styles.line}>설명 : </div>
          <div className={styles.description}>{project.description}</div>
        </div>
        <ImageSlider title={project.project} images={IMG[project.name]} height={500} />
      </div>
      <br /><br />
    </div>
  );
};

export default ProjectView;