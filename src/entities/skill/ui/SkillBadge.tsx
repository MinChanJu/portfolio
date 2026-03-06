import { Skill } from "../model/skill.types";
import { getLevelDotColor, getLevelStyle } from "../model/skill.utils";

const SkillBadge = ({ name, level }: Skill) => (
  <span
    className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium shadow-sm ${getLevelStyle(level)}`}
  >
    <span className={`h-1.5 w-1.5 rounded-full ${getLevelDotColor(level)}`} />
    {name}
    <span className="text-xs font-normal opacity-40">{level}/10</span>
  </span>
);

export default SkillBadge;
