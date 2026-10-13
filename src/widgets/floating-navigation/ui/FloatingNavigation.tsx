import { useRef, useState } from "react";
import { NavLink } from "react-router";

import { ROUTE_PATHS, ROUTE_PATH_LABELS } from "@shared/config/router.config";

import { Menu, X } from "lucide-react";

const FloatingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <div
      className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 flex flex-col items-end gap-3 print:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenu();
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
    >
      {isOpen && (
        <nav
          id="floating-navigation"
          aria-label="주요 메뉴"
          className="w-60 rounded-2xl border border-sky-100 bg-white p-2 shadow-xl shadow-sky-900/10"
        >
          <p className="px-3 py-2 text-xs font-semibold text-slate-500">어디로 이동할까요?</p>
          <div className="space-y-1">
            {(Object.keys(ROUTE_PATHS) as Array<keyof typeof ROUTE_PATHS>).map((key) => {
              const path = ROUTE_PATHS[key];
              const label = ROUTE_PATH_LABELS[key];
              return (
                <NavLink
                  key={path}
                  to={path}
                  end
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex min-h-11 items-center rounded-xl px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${
                      isActive ? "bg-sky-100 text-sky-800" : "text-slate-600 hover:bg-sky-50 hover:text-sky-800"
                    }`
                  }
                >
                  {label}
                </NavLink>
              );
            })}
          </div>
        </nav>
      )}
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={isOpen ? "floating-navigation" : undefined}
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-14 items-center justify-center rounded-full border border-sky-200 bg-sky-100 text-sky-700 shadow-lg shadow-sky-900/10 transition-colors hover:bg-sky-200 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
      >
        {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>
    </div>
  );
};

export default FloatingNavigation;
