import { ALL_CAREER_TYPES, CAREER_BADGE_STYLE, type CareerType } from "@entities/career";

interface CareerFilterProps {
  selectedCareerTypes: Set<CareerType>;
  onToggle: (type: CareerType) => void;
}

const CareerFilter = ({ selectedCareerTypes, onToggle }: CareerFilterProps) => (
  <div className="flex flex-wrap gap-2">
    {ALL_CAREER_TYPES.map((type) => {
      const isActive = selectedCareerTypes.has(type);
      const activeClass = CAREER_BADGE_STYLE[type];
      return (
        <button
          key={type}
          onClick={() => onToggle(type)}
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
);

export default CareerFilter;
