import ReactMarkdown from "react-markdown";

import { ImageSlider } from "@features/image-slider";

import { PROJECTS } from "@entities/project";
import { SkillBadge } from "@entities/skill";

import { getImages } from "@shared/lib/image";
import { CustomLink, InfoRow, SectionCard, SectionLayout } from "@shared/ui";

import "highlight.js/styles/github.css";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

type ProjectProps = {
  index: number;
};

const Project = ({ index }: ProjectProps) => {
  const project = PROJECTS[index];

  return (
    <SectionLayout
      caption={`Project ${index + 1}`}
      title={
        <div className="mt-5 flex flex-row items-center gap-2">
          {project.site?.favicon && (
            <img src={project.site.favicon} alt="favicon" className="h-6 w-6 md:h-10 md:w-10" />
          )}
          <div>{project.title}</div>
        </div>
      }
    >
      <SectionCard title="📌 프로젝트 정보">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2 text-sm text-slate-600">
            <InfoRow label="📅 기간">{project.period}</InfoRow>
            <InfoRow label="👥 팀구성">{project.team}</InfoRow>
            <InfoRow label="🙋 역할">{project.role}</InfoRow>
          </div>

          {(project.links || project.site) && (
            <div className="flex flex-wrap gap-2">
              {project.links?.map(({ label, url }, i) => (
                <CustomLink
                  key={i}
                  href={url}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-100"
                >
                  <img src="https://cdn.simpleicons.org/github" alt="GitHub icon" className="h-3.5 w-3.5" />
                  {label}
                </CustomLink>
              ))}

              {project.site && (
                <CustomLink
                  href={project.site.url}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-purple-200 bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700 transition hover:border-purple-300 hover:bg-purple-100"
                >
                  <img src={project.site.favicon} alt="" className="h-3.5 w-3.5" />
                  사이트 바로가기
                </CustomLink>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
          {project.skills.map((s, i) => (
            <SkillBadge key={i} name={s} />
          ))}
        </div>
      </SectionCard>

      <SectionCard className="prose prose-slate max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {project.description}
        </ReactMarkdown>
      </SectionCard>

      <ImageSlider title={project.title} images={getImages(project.imageName)} />
    </SectionLayout>
  );
};

export default Project;
