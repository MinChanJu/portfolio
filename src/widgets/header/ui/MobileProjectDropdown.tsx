import { PROJECTS } from "@entities/project";

import { SECTION_ID, SectionId } from "@shared/config";

import { useProjectDropdown } from "../model/use-project-dropdown";

interface MobileProjectDropdownProps {
  className?: string;
  goToSection: (sectionId: SectionId, projectIndex?: number) => void;
  onClose: () => void;
}

const MobileProjectDropdown = ({ className, goToSection, onClose }: MobileProjectDropdownProps) => {
  const { projectOpen, setProjectOpen } = useProjectDropdown();

  return (
    <>
      <button onClick={() => setProjectOpen((v) => !v)} className={className}>
        프로젝트 {projectOpen ? "▲" : "▼"}
      </button>
      {projectOpen && (
        <div className="ml-3 flex flex-col gap-2">
          {PROJECTS.map((project, index) => (
            <button
              key={index}
              onClick={() => {
                onClose();
                setProjectOpen(false);
                requestAnimationFrame(() => goToSection(SECTION_ID.PROJECT, index + 1));
              }}
              className="text-left text-xs text-gray-500 hover:text-violet-600"
            >
              {index + 1}. {project.title}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileProjectDropdown;
