import { LANGUAGES, LEGEND, LIBRARIES, TOOLS } from "@entities/skill";

import { SectionLayout } from "@shared/ui";

import SkillGroup from "./SkillGroup";

const Skill = () => {
  return (
    <SectionLayout caption="Tech Stack" title="Skill Set">
      <SkillGroup title="🖥 언어" skills={LANGUAGES} />
      <SkillGroup title="📦 프레임워크 및 라이브러리" skills={LIBRARIES} />
      <SkillGroup title="🔧 도구" skills={TOOLS} />

      <div className="flex items-center gap-5">
        {LEGEND.map(({ color, label, range }) => (
          <div key={label} className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
            <span className="text-xs text-slate-500">
              {label} <span className="text-slate-400">({range})</span>
            </span>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Skill;
