import { Skill } from "@entities/skill";

import { Card, SectionTitle } from "@shared/ui";

import SkillBadge from "./SkillBadge";

const SkillGroup = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <Card className="flex flex-col gap-3 px-6 py-5">
    <SectionTitle>{title}</SectionTitle>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillBadge key={index} {...skill} />
      ))}
    </div>
  </Card>
);

export default SkillGroup;
