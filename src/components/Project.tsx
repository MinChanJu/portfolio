import React from 'react'
import { IMG, PROJECT } from '../constants/URLManage'
import CustomLink from './CustomLink'
import styles from "../assets/css/Project.module.css"
import { project } from '../types/project'

type ProjectProps = {
  index: number;
  project: project;
}

const Project = React.forwardRef<HTMLDivElement, ProjectProps>(({ index, project }, ref) => {
  return (
    <div ref={ref}>
      <div className="big">Project {index + 1}</div>
      <div className="info">{project.project}</div>
      <hr />
      <br />
      <div className="subinfo">
        <div className={styles.group}>
          <span className={styles.line}>개발기간 : </span>
          <span className={styles.linePre}>{project.time}</span>
        </div>
        <div className={styles.group}>
          <span className={styles.line}>개발인원 : </span>
          <span className={styles.linePre}>{project.team}</span>
        </div>
        <div className={styles.group}>
          <span className={styles.line}>담당 역할 : </span>
          <span className={styles.linePre}>{project.role}</span>
        </div>
        <div className={styles.group}>
          <span className={styles.line}>사용기술 : </span>
          <span className={styles.linePre}>{project.skills}</span>
        </div>
        {PROJECT[project.name].map((project, _) => (
          <div className={styles.group}>
            <span className={styles.line}>{project[0]} : </span>
            <span className={styles.linePre}><CustomLink href={project[1]} /></span>
          </div>
        ))}
        <div className={styles.group}>
          <div className={styles.line}>설명 : </div>
          <div className={styles.description}>{project.description}</div>
        </div>
        {IMG[project.name].reduce((acc, src, index) => {
          let groupIndex = Math.floor(index / project.cnt);
          if (!acc[groupIndex]) {
            acc[groupIndex] = [];
          }
          acc[groupIndex].push(src);
          return acc;
        }, [] as string[][]).map((group, groupIndex) => (
          <div key={groupIndex} className="imageContainer">
            {group.map((src, index) => (
              <img key={index} style={{ width: `${100 / group.length - ((group.length - 1) * 2)}%`, }} src={src} alt={`project_image_${groupIndex + 1}_${index + 1}`} />
            ))}
          </div>
        ))}
      </div>
      <br /><br />
    </div>
  );
});

export default Project;