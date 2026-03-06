import { CareerType } from "@entities/career";

export const classStyle: Record<CareerType, string> = {
  대학교: "border-purple-200 bg-purple-50 text-purple-700",
  고등학교: "border-purple-200 bg-purple-50 text-purple-700",
  부트캠프: "border-emerald-200 bg-emerald-50 text-emerald-700",
  대회: "border-amber-200 bg-amber-50 text-amber-700",
  "동아리 활동": "border-blue-200 bg-blue-50 text-blue-700",
  아르바이트: "border-slate-200 bg-slate-50 text-slate-700",
  군복무: "border-rose-200 bg-rose-50 text-rose-700",
};

export const dotStyle: Record<CareerType, string> = {
  대학교: "bg-purple-400",
  고등학교: "bg-purple-400",
  부트캠프: "bg-emerald-400",
  대회: "bg-amber-400",
  "동아리 활동": "bg-blue-400",
  아르바이트: "bg-slate-400",
  군복무: "bg-rose-400",
};
