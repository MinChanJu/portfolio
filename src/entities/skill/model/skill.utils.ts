import { NON_SLUG, SLUG_MAP } from "./skill.constants";

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

export const getSkillIcon = async (name: string): Promise<{ hex: string; url: string } | null> => {
  const slug =
    SLUG_MAP[name] ??
    name
      .toLowerCase()
      .replace(/\./g, "dot")
      .replace(/[^a-zA-Z0-9]/g, "");

  if (NON_SLUG.has(slug)) return null;
  const url = `https://cdn.simpleicons.org/${slug}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const svg = await res.text();
    const hex = svg.match(/fill="([^"]+)"/)?.[1]?.replace("#", "") || "6366F1";
    return { hex, url };
  } catch (error) {
    console.error(`Error fetching icon for ${name}:`, error);
    return null;
  }
};
