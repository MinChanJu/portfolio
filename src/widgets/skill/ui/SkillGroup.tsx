import { Skill, SkillBadge } from "@entities/skill";

import { SectionCard } from "@shared/ui";

const SkillGroup = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <SectionCard title={title}>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillBadge key={index} {...skill} />
      ))}
    </div>
  </SectionCard>
);

export default SkillGroup;
