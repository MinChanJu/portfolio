export const getRankStyle = (rank: string) => {
  if (rank.includes("1등") || rank.includes("대상") || rank.includes("금"))
    return "border-amber-300 bg-amber-50 text-amber-700";
  if (rank.includes("2등") || rank.includes("최우수") || rank.includes("은"))
    return "border-slate-300 bg-slate-50 text-slate-600";
  if (rank.includes("3등") || rank.includes("우수") || rank.includes("동"))
    return "border-orange-200 bg-orange-50 text-orange-700";
  return "border-purple-200 bg-purple-50 text-purple-700";
};
