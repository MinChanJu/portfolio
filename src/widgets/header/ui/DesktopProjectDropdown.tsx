import { PROJECTS } from "@entities/project";

import { SECTION_ID, SectionId } from "@shared/config";

import useProjectDropdown from "../model/useProjectDropdown";

interface DesktopProjectDropdownProps {
  className: string;
  goToSection: (sectionId: SectionId, projectIndex?: number) => void;
}

const DesktopProjectDropdown = ({ className, goToSection }: DesktopProjectDropdownProps) => {
  const { projectOpen, setProjectOpen, dropdownRef } = useProjectDropdown();

  return (
    <div className="relative flex" ref={dropdownRef}>
      <button onClick={() => setProjectOpen((v) => !v)} className={className}>
        프로젝트 {projectOpen ? "▲" : "▼"}
      </button>
      {projectOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
          {PROJECTS.map((project, index) => (
            <button
              key={index}
              onClick={() => {
                goToSection(SECTION_ID.PROJECT, index + 1);
                setProjectOpen(false);
              }}
              className="w-full px-4 py-2.5 text-left text-sm text-gray-600 transition-colors hover:bg-violet-50 hover:text-violet-600"
            >
              {index + 1}. {project.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DesktopProjectDropdown;
