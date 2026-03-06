import { Career } from "@entities/career";

import TimelineItem from "./TimelineItem";

interface TimelineItemProps {
  items: Career[];
}

const Timeline = ({ items }: TimelineItemProps) => {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-12 text-center">
        <span className="text-2xl">🔍</span>
        <p className="text-sm font-medium text-slate-400">해당 유형의 경력이 없습니다.</p>
      </div>
    );
  }

  return (
    <div>
      {items.map((item, i) => (
        <TimelineItem key={i} item={item} isLast={i === items.length - 1} />
      ))}
    </div>
  );
};

export default Timeline;
