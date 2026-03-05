import { useParams } from "react-router-dom";

import data from "@shared/assets/data.json";
import { getImages } from "@shared/lib/image/model/image";
import { CustomLink, Error, ImageSlider } from "@shared/ui";

type ProjectPageProps = {
  index?: number;
};

const ProjectPage = ({ index }: ProjectPageProps) => {
  const projects = data.projects;
  const { projectId } = useParams();
  let idx;
  if (index == undefined) idx = Number(projectId) - 1;
  else idx = index;
  if (Number.isNaN(idx)) return <Error subMessage="index가 숫자가 아닙니다." />;
  if (idx < 0 || idx >= projects.length) return <Error subMessage="index가 프로젝트 범위를 벗어났습니다." />;
  const project = projects[idx];

  return (
    <div>
      <div className="text-start text-5xl font-bold text-purple-600 italic">Project {idx + 1}</div>

      <br />
      <div className="text-start text-2xl font-bold">{project.project}</div>
      <hr />
      <div className="text-start text-lg font-normal">
        <div className="flex flex-row gap-2.5">
          <span className="whitespace-pre-wrap text-blue-900">개발기간:</span>
          <span>{project.period}</span>
        </div>
        <div className="flex flex-row gap-2.5">
          <span className="whitespace-pre-wrap text-blue-900">팀구성:</span>
          <span>{project.team}</span>
        </div>
        <div className="flex flex-row gap-2.5">
          <span className="whitespace-pre-wrap text-blue-900">담당역할:</span>
          <span>{project.role}</span>
        </div>
        <div className="flex flex-row gap-2.5">
          <span className="whitespace-pre-wrap text-blue-900">사용기술:</span>
          <span>{project.skills}</span>
        </div>
        {project.back && (
          <div className="flex flex-row gap-2.5">
            <span className="whitespace-pre-wrap text-blue-900">백엔드 : </span>
            <span>
              <CustomLink href={project.back} />
            </span>
          </div>
        )}
        {project.front && (
          <div className="flex flex-row gap-2.5">
            <span className="whitespace-pre-wrap text-blue-900">프론트엔드 : </span>
            <span>
              <CustomLink href={project.front} />
            </span>
          </div>
        )}
        {project.source && (
          <div className="flex flex-row gap-2.5">
            <span className="whitespace-pre-wrap text-blue-900">소스코드 : </span>
            <span>
              <CustomLink href={project.source} />
            </span>
          </div>
        )}
        {project.site && (
          <div className="flex flex-row gap-2.5">
            <span className="whitespace-pre-wrap text-blue-900">사이트 : </span>
            <span>
              <CustomLink href={project.site} />
            </span>
          </div>
        )}
        <div className="flex flex-row gap-2.5">
          <div className="shrink-0 whitespace-pre-wrap text-blue-900">설명 : </div>
          <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
        <ImageSlider title={project.project} images={getImages(project.name)} />
      </div>
      <br />
      <br />
    </div>
  );
};

export default ProjectPage;
