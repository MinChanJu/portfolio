import { PrintButton } from "@features/print-resume";

import { SectionId } from "@shared/config";

import DesktopProjectDropdown from "./DesktopProjectDropdown";
import NavItemList from "./NavItemList";

interface DesktopMenuProps {
  goToSection: (sectionId: SectionId, projectIndex?: number) => void;
  getDesktopNavItemClass: (sectionId: SectionId) => string;
}

const DesktopMenu = ({ goToSection, getDesktopNavItemClass }: DesktopMenuProps) => {
  return (
    <nav className="flex items-center gap-6">
      <NavItemList
        getNavItemClass={getDesktopNavItemClass}
        goToSection={goToSection}
        renderProjectDropdown={(className) => (
          <DesktopProjectDropdown className={className} goToSection={goToSection} />
        )}
      />
      <PrintButton />
    </nav>
  );
};

export default DesktopMenu;
