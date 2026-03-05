const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3">
    <h2 className="text-xl font-bold text-slate-700">{children}</h2>
    <div className="h-px flex-1 bg-slate-200" />
  </div>
);

export default SectionTitle;
