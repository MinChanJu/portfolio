import { Prize } from "@entities/prize";

import { Card } from "@shared/ui";

import { rankStyle } from "../model/award.constants";

const PrizeCard = ({ name, host, date, rank }: Prize) => (
  <Card className="flex items-center justify-between gap-4 rounded-xl transition-shadow hover:shadow-md">
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-slate-800">{name}</span>
      <span className="text-xs text-slate-400">{host}</span>
    </div>
    <div className="flex shrink-0 flex-col items-end gap-1.5">
      <span className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${rankStyle(rank)}`}>{rank}</span>
      <span className="text-xs text-slate-400">{date}</span>
    </div>
  </Card>
);

export default PrizeCard;
