import { Info } from "../model/info.types";

interface InfoTableProps {
  rows: Info[];
}

const InfoTable = ({ rows }: InfoTableProps) => (
  <div className="flex flex-col divide-y divide-slate-100">
    {rows.map(({ label, value }) => (
      <div key={label} className="flex items-baseline gap-3 py-2">
        <span className="w-24 shrink-0 text-xs font-semibold tracking-wider text-slate-400 uppercase">{label}</span>
        <span className="text-sm text-slate-700">{value}</span>
      </div>
    ))}
  </div>
);

export default InfoTable;
