import React from 'react'
import CustomLink from '../components/CustomLink'
import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import { Project } from '../types'
import { ImageSlider } from '../components'
import { getImages } from '../utils/Image'
import { getSourceCodes } from '../utils/SourceCode'

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
    <div>
      <div className="big purple italic ts">Project {idx + 1}</div>

      <br />
      <div className="info ts">{project.project}</div>
      <hr />
      <div className="subInfo ts">
        <div className="flexRow gap10">
          <span className='darkBlue nowrap'>개발기간:</span>
          <span>{project.period}</span>
        </div>
        <div className="flexRow gap10">
          <span className='darkBlue nowrap'>팀구성:</span>
          <span>{project.team}</span>
        </div>
        <div className="flexRow gap10">
          <span className='darkBlue nowrap'>담당역할:</span>
          <span>{project.role}</span>
        </div>
        <div className="flexRow gap10">
          <span className='darkBlue nowrap'>사용기술:</span>
          <span>{project.skills}</span>
        </div>
        {getSourceCodes(project.name).map((project, idx) => (
          <div key={idx} className="flexRow gap10">
            <span className='darkBlue nowrap'>{project[0]} : </span>
            <span><CustomLink href={project[1]} /></span>
          </div>
        ))}
        <div className="flexRow gap10">
          <div className='darkBlue nowrap'>설명 : </div>
          <div className="orange">{project.description}</div>
        </div>
        <ImageSlider title={project.project} images={getImages(project.name)} />
      </div>
      <br /><br />
    </div>
  );
};

export default ProjectView;