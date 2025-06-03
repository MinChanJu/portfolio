import React from 'react'
import CustomLink from '../components/CustomLink'
import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import { Project } from '../types'
import { ImageSlider } from '../components'
import { getImages } from '../utils/Image'

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
        {project.back && <div className="flexRow gap10">
          <span className='darkBlue nowrap'>백엔드 : </span>
          <span><CustomLink href={project.back} /></span>
        </div>}
        {project.front && <div className="flexRow gap10">
          <span className='darkBlue nowrap'>프론트엔드 : </span>
          <span><CustomLink href={project.front} /></span>
        </div>}
        {project.source && <div className="flexRow gap10">
          <span className='darkBlue nowrap'>소스코드 : </span>
          <span><CustomLink href={project.source} /></span>
        </div>}
        {project.site &&
          <div className="flexRow gap10">
            <span className='darkBlue nowrap'>사이트 : </span>
            <span><CustomLink href={project.site} /></span>
          </div>
        }
        <div className="flexRow gap10">
          <div className='darkBlue nowrap'>설명 : </div>
          <div className="dark" dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
        <ImageSlider title={project.project} images={getImages(project.name)} />
      </div>
      <br /><br />
    </div>
  );
};

export default ProjectView;