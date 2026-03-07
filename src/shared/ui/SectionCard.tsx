import { ReactNode } from "react";

import SectionTitle from "./SectionTitle";

type SectionCardProps = {
  title?: ReactNode;
  titlePosition?: "left" | "center" | "right";
  children: ReactNode;
  className?: string;
};

const SectionCard = ({ title, titlePosition = "left", children, className }: SectionCardProps) => (
  <div className={`rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm md:px-6 md:py-5 ${className}`}>
    {title && (
      <>
        <SectionTitle title={title} titlePosition={titlePosition} />
        <div className="h-3" />
      </>
    )}
    {children}
  </div>
);

export default SectionCard;
