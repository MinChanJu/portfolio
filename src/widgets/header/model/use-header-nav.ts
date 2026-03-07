import { useEffect, useState } from "react";

import { SECTION_ID, SectionId } from "@shared/config";

export const useHeaderNav = () => {
  const [activeSection, setActiveSection] = useState<SectionId | "">("");

  useEffect(() => {
    const sectionElements = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const mid = window.innerHeight / 2;
      let current: SectionId | "" = "";

      for (const el of sectionElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top >= mid || rect.bottom <= mid) continue;
        current = el.id.startsWith(SECTION_ID.PROJECT)
          ? SECTION_ID.PROJECT
          : Object.values(SECTION_ID).find((id) => id === el.id) || "";
        break;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToHome = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const goToSection = (sectionId: SectionId, projectIndex?: number) => {
    const id = projectIndex !== undefined ? `${SECTION_ID.PROJECT}-${projectIndex}` : sectionId;
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = 56 + (window.innerWidth >= 768 ? 20 : 12);
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const getDesktopNavItemClass = (sectionId: SectionId) => {
    const className = activeSection === sectionId ? "text-violet-600" : "text-gray-500 hover:text-gray-900";
    return `text-sm font-medium transition-colors duration-200 ${className}`;
  };

  const getMobileNavItemClass = (sectionId: SectionId) => {
    const className = activeSection === sectionId ? "text-violet-600" : "text-gray-600";
    return `text-left text-sm font-medium ${className}`;
  };

  return { goToHome, goToSection, getDesktopNavItemClass, getMobileNavItemClass };
};
