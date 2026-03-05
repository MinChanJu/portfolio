import { LANGUAGES, LIBRARIES, TOOLS } from "@entities/skill";

import { PageHeader } from "@shared/ui";

import { LEGEND } from "../model/skill.constants";
import SkillGroup from "./SkillGroup";

const Skill = () => {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <PageHeader caption="Tech Stack" title="Skill Set" />

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
    </div>
  );
};

export default Skill;
