import { useState } from "react";

import { ALL_CAREER_TYPES, CAREERS } from "@entities/career";
import { CareerType } from "@entities/career";

import { PageHeader } from "@shared/ui";

import { classStyle } from "../model/career.types";
import Timeline from "./Timeline";

const Career = () => {
  const [selectedCareerTypes, setSelectedCareerTypes] = useState<Set<CareerType>>(new Set(ALL_CAREER_TYPES));

  const filtered = CAREERS.filter((c) => selectedCareerTypes.has(c.type));

  const toggleCareerType = (type: CareerType) => {
    setSelectedCareerTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <PageHeader caption="Timeline" title="Careers" />

      <div className="flex flex-wrap gap-2">
        {ALL_CAREER_TYPES.map((type) => {
          const isActive = selectedCareerTypes.has(type);
          const activeClass = classStyle[type];
          return (
            <button
              key={type}
              onClick={() => toggleCareerType(type)}
              className={`rounded-full border px-3.5 py-1 text-xs font-medium transition-all duration-200 ${
                isActive
                  ? activeClass + " shadow-sm"
                  : "border-slate-100 bg-white text-slate-300 hover:border-slate-300 hover:text-slate-700"
              }`}
            >
              {type}
            </button>
          );
        })}
      </div>

      <Timeline items={filtered} />
    </div>
  );
};

export default Career;
