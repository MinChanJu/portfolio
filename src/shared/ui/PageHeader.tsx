import { ReactNode } from "react";

type PageHeaderProps = {
  caption: string;
  title: ReactNode;
};

const PageHeader = ({ caption, title }: PageHeaderProps) => (
  <div className="print:break-before-page">
    <p className="text-xs font-semibold tracking-widest text-purple-400 uppercase">{caption}</p>
    <h1 className="mt-1 text-2xl font-bold text-slate-800 md:text-4xl">{title}</h1>
  </div>
);

export default PageHeader;
