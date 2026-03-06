import { Skill, SkillBadge } from "@entities/skill";

import { Card, SectionTitle } from "@shared/ui";

const SkillGroup = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <Card className="flex flex-col gap-3">
    <SectionTitle>{title}</SectionTitle>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillBadge key={index} {...skill} />
      ))}
    </div>
  </Card>
);

export default SkillGroup;
