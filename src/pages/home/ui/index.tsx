import { AwardPage } from "@pages/award";
import { CareerPage } from "@pages/career";
import { IntroductionPage } from "@pages/introduction";
import { LinkPage } from "@pages/link";
import { ProjectPage } from "@pages/project";
import { SkillPage } from "@pages/skill";

import data from "@shared/assets/data.json";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-25">
      <IntroductionPage />
      <SkillPage />
      {data.projects.map((_, index) => (
        <ProjectPage key={index} index={index} />
      ))}
      <AwardPage />
      <CareerPage />
      <LinkPage />
    </div>
  );
};

export default HomePage;
