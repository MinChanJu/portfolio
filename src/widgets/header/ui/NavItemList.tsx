import { Fragment, ReactNode } from "react";

import { SECTION_ID, SectionId } from "@shared/config";

import { NAV_ITEMS } from "../model/nav-item.constants";

interface NavItemListProps {
  getNavItemClass: (sectionId: SectionId) => string;
  goToSection: (sectionId: SectionId, projectIndex?: number) => void;
  renderProjectDropdown: (className: string) => ReactNode;
  onClose?: () => void;
}

const NavItemList = ({ getNavItemClass, goToSection, renderProjectDropdown, onClose }: NavItemListProps) => (
  <>
    {NAV_ITEMS.map(({ label, sectionId }) => {
      if (sectionId === SECTION_ID.PROJECT) {
        return <Fragment key={sectionId}>{renderProjectDropdown(getNavItemClass(sectionId))}</Fragment>;
      }
      return (
        <button
          key={sectionId}
          onClick={() => {
            onClose?.();
            requestAnimationFrame(() => goToSection(sectionId));
          }}
          className={getNavItemClass(sectionId)}
        >
          {label}
        </button>
      );
    })}
  </>
);

export default NavItemList;
