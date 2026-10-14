import {
  ICONIFY_BASE_URL,
  ICONIFY_MAP,
  NON_ICONS,
  PERSONAL_ICON_MAP,
  SIMPLE_ICON_BASE_URL,
  SIMPLE_ICON_MAP,
} from "./skill.constants";

export const getLevelStyle = (level: number) => {
  if (level >= 8) return "border-emerald-200 bg-emerald-50 text-emerald-800";
  if (level >= 6) return "border-blue-200 bg-blue-50 text-blue-800";
  return "border-slate-200 bg-slate-50 text-slate-800";
};

export const getLevelDotColor = (level: number) => {
  if (level >= 8) return "bg-emerald-400";
  if (level >= 6) return "bg-blue-400";
  return "bg-slate-400";
};

const getIconUrl = (name: string) => {
  const allSkills = [
    ...Object.keys(ICONIFY_MAP),
    ...Object.keys(SIMPLE_ICON_MAP),
    ...Object.keys(PERSONAL_ICON_MAP),
    ...NON_ICONS,
  ];
  if (new Set(allSkills).size !== allSkills.length) console.warn("아이콘 목록에 중복된 기술이 있습니다.");
  if (name in SIMPLE_ICON_MAP) return `${SIMPLE_ICON_BASE_URL}/${SIMPLE_ICON_MAP[name]}`;
  if (name in ICONIFY_MAP) return `${ICONIFY_BASE_URL}/${ICONIFY_MAP[name]}`;
  if (name in PERSONAL_ICON_MAP) return PERSONAL_ICON_MAP[name];
  return null;
};

export const getSkillIcon = async (
  name: string,
): Promise<{ hex: string; url: string; type: "simple" | "iconify" | "personal" } | null> => {
  const url = getIconUrl(name);
  if (!url) {
    if (!NON_ICONS.has(name)) {
      console.warn(`Icon URL not found for ${name}`);
    }
    return null;
  }
  if (!(name in SIMPLE_ICON_MAP)) {
    return { hex: "6366F1", url, type: name in ICONIFY_MAP ? "iconify" : "personal" };
  }
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const svg = await res.text();
    const hex = svg.match(/fill="([^"]+)"/)?.[1]?.replace("#", "") || "6366F1";
    return { hex, url, type: "simple" };
  } catch (error) {
    console.error(`Error fetching icon for ${name}:`, error);
    return null;
  }
};
