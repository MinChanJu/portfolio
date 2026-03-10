export const SLUG_MAP: Record<string, string> = {
  "C++": "cplusplus",
  IntelliJ: "intellijidea",
};

export const NON_SLUG = new Set([
  "yjs",
  "awss3",
  "reactthreefiber",
  "passkey",
  "emotion",
  "java",
  "jpa",
  "mathjax",
  "phaser3",
  "visualstudiocode",
]);

export const LEGEND = [
  { color: "bg-emerald-400", label: "숙련", range: "8+" },
  { color: "bg-blue-400", label: "중급", range: "6~7" },
  { color: "bg-slate-300", label: "기초", range: "~5" },
];

export const FORCE_DARK = new Set(["FFFFFF", "FAFAFA", "F5F5F5"]);
