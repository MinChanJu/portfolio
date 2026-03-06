import { PrintButton } from "@features/print-resume";

import { SectionId } from "@shared/config";

import MobileProjectDropdown from "./MobileProjectDropdown";
import NavItemList from "./NavItemList";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  getMobileNavItemClass: (sectionId: SectionId) => string;
  goToSection: (sectionId: SectionId, projectIndex?: number) => void;
}

const MobileMenu = ({ isOpen, onClose, getMobileNavItemClass, goToSection }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
      <nav className="flex flex-col gap-3">
        <NavItemList
          getNavItemClass={getMobileNavItemClass}
          goToSection={goToSection}
          onClose={onClose}
          renderProjectDropdown={(className) => (
            <MobileProjectDropdown className={className} goToSection={goToSection} onClose={onClose} />
          )}
        />
        <PrintButton />
      </nav>
    </div>
  );
};

export default MobileMenu;
