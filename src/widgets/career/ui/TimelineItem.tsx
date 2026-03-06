import { CAREER_BADGE_STYLE, CAREER_DOT_STYLE, Career } from "@entities/career";

import { Card } from "@shared/ui";

interface TimelineItemProps {
  item: Career;
  isLast: boolean;
}

const TimelineItem = ({ item, isLast }: TimelineItemProps) => {
  const badge = CAREER_BADGE_STYLE[item.type] ?? "border-slate-200 bg-slate-50 text-slate-600";
  const dot = CAREER_DOT_STYLE[item.type] ?? "bg-slate-300";

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`mt-1 h-3 w-3 shrink-0 rounded-full ring-2 ring-white ${dot}`} />
        {!isLast && <div className="mt-1 w-px flex-1 bg-slate-200" />}
      </div>

      <Card className="mb-4 flex flex-1 items-start justify-between gap-3 rounded-xl">
        <div className="flex flex-col gap-0.5">
          <span className="font-semibold text-slate-800">{item.title}</span>
          <span className={`mt-1 w-fit rounded-full border px-2.5 py-0.5 text-xs font-medium ${badge}`}>
            {item.type}
          </span>
        </div>
        <span className="shrink-0 text-xs text-slate-400">{item.period}</span>
      </Card>
    </div>
  );
};

export default TimelineItem;
