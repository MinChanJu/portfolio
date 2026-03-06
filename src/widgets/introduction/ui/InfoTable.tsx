import { InfoRow } from "@shared/ui";

import { Info } from "../model/info.types";

interface InfoTableProps {
  rows: Info[];
}

const InfoTable = ({ rows }: InfoTableProps) => (
  <div className="flex flex-col gap-3 divide-y divide-slate-100">
    {rows.map(({ label, value }) => (
      <InfoRow key={label} label={label}>
        {value}
      </InfoRow>
    ))}
  </div>
);

export default InfoTable;
