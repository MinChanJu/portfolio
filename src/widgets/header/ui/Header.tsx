import { useState } from "react";

import useHeaderNav from "../model/useHeaderNav";
import MobileMenu from "./MobileMenu";
import ProjectDropdown from "./ProjectDropdown";

const Header = () => {
  const { goToHome, goToProjectId, navItems, isActive, navItemClass } = useHeaderNav();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <button
          onClick={goToHome}
          className="bg-linear-to-r from-violet-500 via-sky-500 to-teal-500 bg-clip-text text-base font-bold tracking-[0.2em] text-transparent"
        >
          MIN CHAN JU
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(({ label, action, path }) => {
            if (label === "프로젝트") {
              return <ProjectDropdown key={path} className={navItemClass(path)} onNavigate={goToProjectId} />;
            }
            return (
              <button key={path} onClick={action} className={navItemClass(path)}>
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
        </nav>

        <button className="flex flex-col gap-1.5 md:hidden" onClick={() => setMobileOpen((v) => !v)}>
          <span
            className={`block h-0.5 w-6 bg-gray-600 transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-600 transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-600 transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        isActive={isActive}
        navItems={navItems}
        onProjectNavigate={goToProjectId}
      />
    </header>
  );
};

export default Header;
