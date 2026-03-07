import ReactMarkdown from "react-markdown";

import { ImageSlider } from "@features/image-slider";

import { PROJECTS } from "@entities/project";

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
            <img src={project.site.favicon} alt="favicon" className="h-6 w-6 md:h-10 md:w-10" crossOrigin="anonymous" />
          )}
          <div>{project.title}</div>
        </div>
      }
    >
      <SectionCard title="📌 프로젝트 정보">
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
        </div>
      </SectionCard>

      {(project.links || project.site) && (
        <SectionCard title="🔗 Links">
          <div className="flex flex-col gap-3">
            {project.links?.map(({ label, url }, i) => (
              <InfoRow key={i} label={label}>
                <CustomLink href={url} />
              </InfoRow>
            ))}
            {project.site && (
              <InfoRow label="사이트">
                <CustomLink href={project.site.url} />
              </InfoRow>
            )}
          </div>
        </SectionCard>
      )}

      <SectionCard className="prose prose-slate max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {project.description}
        </ReactMarkdown>
      </SectionCard>

      <ImageSlider title={project.title} images={getImages(project.name)} />
    </SectionLayout>
  );
};

export default Project;
