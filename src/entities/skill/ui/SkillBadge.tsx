import { CSSProperties, useEffect, useState } from "react";

import { FORCE_DARK } from "../model/skill.constants";
import { getLevelDotColor, getLevelStyle, getSkillIcon } from "../model/skill.utils";

interface SkillBadgeProps {
  name: string;
  level?: number;
}

const SkillBadge = ({ name, level }: SkillBadgeProps) => {
  const [icon, setIcon] = useState<{ style?: CSSProperties; url?: string } | null>(null);

  useEffect(() => {
    getSkillIcon(name).then((icon) => {
      const rawHex = icon?.hex ?? "1366F1";
      const hex = FORCE_DARK.has(rawHex.toUpperCase()) ? "64748B" : rawHex;
      const style = !level
        ? {
            borderColor: `#${hex}66`,
            backgroundColor: `#${hex}1F`,
            color: `#${hex}`,
          }
        : undefined;
      setIcon({ style, url: icon ? icon.url + (icon.type === "simple" ? `/${hex}` : "") : undefined });
    });
  }, [level, name]);

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium shadow-sm ${level && getLevelStyle(level)}`}
      style={icon?.style}
    >
      {level && <span className={`h-1.5 w-1.5 rounded-full ${getLevelDotColor(level)}`} />}
      {icon?.url && <img src={icon.url} alt={`${name} icon`} className="h-4 w-4 shrink-0" />}
      {name}
      {level && <span className="text-xs font-normal opacity-80">{level}/10</span>}
    </span>
  );
};

export default SkillBadge;
