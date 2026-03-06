import { ReactNode } from "react";

interface InfoRowProps {
  label: string;
  children: ReactNode;
}

const InfoRow = ({ label, children }: InfoRowProps) => (
  <div className="flex items-baseline gap-3">
    <span className="w-20 shrink-0 text-xs font-semibold tracking-widest text-slate-400 uppercase">{label}</span>
    <span className="text-sm text-slate-700">{children}</span>
  </div>
);

export default InfoRow;
