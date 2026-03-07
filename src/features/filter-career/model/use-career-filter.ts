import { useState } from "react";

import { ALL_CAREER_TYPES, CAREERS, type Career, type CareerType } from "@entities/career";

const useCareerFilter = () => {
  const [selectedCareerTypes, setSelectedCareerTypes] = useState<Set<CareerType>>(new Set(ALL_CAREER_TYPES));

  const filteredCareers: Career[] = CAREERS.filter((c) => selectedCareerTypes.has(c.type));

  const toggleCareerType = (type: CareerType) => {
    setSelectedCareerTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  };

  return { selectedCareerTypes, filteredCareers, toggleCareerType };
};

export default useCareerFilter;
