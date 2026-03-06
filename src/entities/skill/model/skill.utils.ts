export const getLevelStyle = (level: number) => {
  if (level >= 8) return "border-emerald-200 bg-emerald-50 text-emerald-800";
  if (level >= 6) return "border-blue-200 bg-blue-50 text-blue-800";
  return "border-slate-200 bg-slate-50 text-slate-500";
};

export const getLevelDotColor = (level: number) => {
  if (level >= 8) return "bg-emerald-400";
  if (level >= 6) return "bg-blue-400";
  return "bg-slate-300";
};
