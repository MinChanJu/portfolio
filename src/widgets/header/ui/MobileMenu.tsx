import { Fragment, useState } from "react";

import { PROJECTS } from "@entities/project";

interface NavItem {
  label: string;
  action: () => void;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isActive: (path: string) => boolean;
  navItems: NavItem[];
  onProjectNavigate: (index: number) => void;
}

const MobileMenu = ({ isOpen, onClose, isActive, navItems, onProjectNavigate }: MobileMenuProps) => {
  const [projectOpen, setProjectOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
      <div className="flex flex-col gap-3">
        {navItems.map(({ label, action, path }) => {
          if (label === "프로젝트") {
            return (
              <Fragment key={path}>
                <button
                  onClick={() => setProjectOpen((v) => !v)}
                  className={`text-left text-sm font-medium ${isActive("/project") ? "text-violet-600" : "text-gray-600"}`}
                >
                  프로젝트 {projectOpen ? "▲" : "▼"}
                </button>
                {projectOpen && (
                  <div className="mt-2 ml-3 flex flex-col gap-2">
                    {PROJECTS.map((project, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          onProjectNavigate(index + 1);
                          onClose();
                          setProjectOpen(false);
                        }}
                        className="text-left text-xs text-gray-500 hover:text-violet-600"
                      >
                        {index + 1}. {project.project}
                      </button>
                    ))}
                  </div>
                )}
              </Fragment>
            );
          }
          return (
            <button
              key={path}
              onClick={() => {
                action();
                onClose();
              }}
              className={`text-left text-sm font-medium ${isActive(path) ? "text-violet-600" : "text-gray-600"}`}
            >
              {label}
            </button>
          );
        })}

        <button
          onClick={() => window.print()}
          className="rounded-full border border-slate-200 px-3.5 py-1 text-sm font-medium text-slate-500 transition-colors duration-200 hover:border-slate-300 hover:text-slate-700"
        >
          PDF
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
