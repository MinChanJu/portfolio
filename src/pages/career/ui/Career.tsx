import { CAREERS } from "@entities/career";

import { PageHeader } from "@shared/ui";

import TimelineItem from "./TimelineItem";

const Career = () => {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <PageHeader caption="Timeline" title="Careers" />

      <div>
        {CAREERS.map((item, i) => (
          <TimelineItem key={i} item={item} isLast={i === CAREERS.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default Career;
