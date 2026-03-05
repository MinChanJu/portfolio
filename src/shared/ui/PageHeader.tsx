type PageHeaderProps = {
  caption: string;
  title: React.ReactNode;
};

const PageHeader = ({ caption, title }: PageHeaderProps) => (
  <div>
    <p className="text-xs font-semibold tracking-widest text-purple-400 uppercase">{caption}</p>
    <h1 className="mt-1 text-4xl font-bold text-slate-800">{title}</h1>
  </div>
);

export default PageHeader;
