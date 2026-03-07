import { ReactNode } from "react";

interface SectionLayoutProps {
  caption: string;
  title: ReactNode;
  children: ReactNode;
}

const SectionLayout = ({ caption, title, children }: SectionLayoutProps) => {
  return (
    <div className="flex flex-col gap-3 md:gap-5 print:break-before-page">
      <div>
        <p className="text-xs font-semibold tracking-widest text-purple-600 uppercase">{caption}</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-800 md:text-4xl">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default SectionLayout;
