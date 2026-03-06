import { PROJECTS } from "@entities/project";

import useProjectDropdown from "../model/useProjectDropdown";

interface ProjectDropdownProps {
  isProjectActive: boolean;
  onNavigate: (index: number) => void;
}

const ProjectDropdown = ({ isProjectActive, onNavigate }: ProjectDropdownProps) => {
  const { projectOpen, setProjectOpen, dropdownRef } = useProjectDropdown();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setProjectOpen((v) => !v)}
        className={`text-sm font-medium transition-colors duration-200 ${isProjectActive ? "text-violet-600" : "text-gray-500 hover:text-gray-900"}`}
      >
        프로젝트 {projectOpen ? "▲" : "▼"}
      </button>
      {projectOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
          {PROJECTS.map((project, index) => (
            <button
              key={index}
              onClick={() => {
                onNavigate(index + 1);
                setProjectOpen(false);
              }}
              className="w-full px-4 py-2.5 text-left text-sm text-gray-600 transition-colors hover:bg-violet-50 hover:text-violet-600"
            >
              {index + 1}. {project.project}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDropdown;
