import { useEffect, useRef, useState } from "react";

const useProjectDropdown = () => {
  const [projectOpen, setProjectOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownRef.current) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current?.offsetParent) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        setProjectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return { projectOpen, setProjectOpen, dropdownRef };
};

export default useProjectDropdown;
