import { ReactNode } from "react";

interface SectionTitleProps {
  title: ReactNode;
  titlePosition?: "left" | "center" | "right";
}

const SectionTitle = ({ title, titlePosition = "left" }: SectionTitleProps) => (
  <div className="flex items-center gap-3">
    {(titlePosition === "center" || titlePosition === "right") && <div className="h-px flex-1 bg-slate-200" />}
    <h2 className="text-xl font-bold text-slate-700">{title}</h2>
    {(titlePosition === "center" || titlePosition === "left") && <div className="h-px flex-1 bg-slate-200" />}
  </div>
);

export default SectionTitle;
