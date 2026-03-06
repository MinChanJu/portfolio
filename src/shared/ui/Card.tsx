import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm md:px-6 md:py-5 ${className}`}>
    {children}
  </div>
);

export default Card;
