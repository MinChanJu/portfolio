import { useState } from "react";

import { useHeaderNav } from "../model/use-header-nav";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { goToHome, goToSection, getDesktopNavItemClass, getMobileNavItemClass } = useHeaderNav();
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

        <div className="hidden md:block">
          <DesktopMenu goToSection={goToSection} getDesktopNavItemClass={getDesktopNavItemClass} />
        </div>

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
        getMobileNavItemClass={getMobileNavItemClass}
        goToSection={goToSection}
      />
    </header>
  );
};

export default Header;
