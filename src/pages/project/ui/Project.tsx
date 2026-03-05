import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import { PROJECTS } from "@entities/project";

import { getImages } from "@shared/lib/image/model/image";
import { Card, CustomLink, Error, ImageSlider, PageHeader } from "@shared/ui";

import "highlight.js/styles/github.css";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import InfoRow from "./InfoRow";

type ProjectProps = {
  index?: number;
};

const Project = ({ index }: ProjectProps) => {
  const { projectId } = useParams();
  let idx;
  if (index == undefined) idx = Number(projectId) - 1;
  else idx = index;
  if (Number.isNaN(idx)) return <Error subMessage="index가 숫자가 아닙니다." />;
  if (idx < 0 || idx >= PROJECTS.length) return <Error subMessage="index가 프로젝트 범위를 벗어났습니다." />;
  const project = PROJECTS[idx];

  return (
    <div className="flex flex-col gap-8 pb-10">
      <PageHeader caption={`Project ${idx + 1}`} title={project.project} />

      <Card className="bg-slate-50 px-6 py-5">
        <div className="flex flex-col gap-3">
          <InfoRow label="기간">{project.period}</InfoRow>
          <InfoRow label="팀구성">{project.team}</InfoRow>
          <InfoRow label="역할">
            <span className="whitespace-pre-wrap">{project.role}</span>
          </InfoRow>
          <InfoRow label="기술">
            <div className="flex flex-wrap gap-1.5">
              {project.skills.split(",").map((s, i) => (
                <span
                  key={i}
                  className="rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700"
                >
                  {s.trim()}
                </span>
              ))}
            </div>
          </InfoRow>
          {project.source && (
            <InfoRow label="소스코드">
              <CustomLink href={project.source} />
            </InfoRow>
          )}
          {project.back && (
            <InfoRow label="백엔드">
              <CustomLink href={project.back} />
            </InfoRow>
          )}
          {project.front && (
            <InfoRow label="프론트엔드">
              <CustomLink href={project.front} />
            </InfoRow>
          )}
          {project.site && (
            <InfoRow label="사이트">
              <CustomLink href={project.site} />
            </InfoRow>
          )}
        </div>
      </Card>

      <Card className="prose prose-slate prose-sm max-w-none px-6 py-5">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {project.description}
        </ReactMarkdown>
      </Card>

      <ImageSlider title={project.project} images={getImages(project.name)} />
    </div>
  );
};

export default Project;
