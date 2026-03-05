import { AwardView, CareerView, IntroductionView, LinkView, ProjectView, SkillView } from ".";

import React from "react";

import { Portfolio } from "../types";

type HomeViewProps = {
  data: Portfolio;
};

const HomeView: React.FC<HomeViewProps> = ({ data }) => {
  return (
    <div className="flex w-full flex-col gap-25">
      <IntroductionView />
      <SkillView languages={data.languages} libraries={data.libraries} tools={data.tools} />
      {data.projects.map((_, index) => (
        <ProjectView key={index} index={index} projects={data.projects} />
      ))}
      <AwardView prizes={data.prizes} certificates={data.certificates} />
      <CareerView careers={data.careers} />
      <LinkView />
    </div>
  );
};

export default HomeView;
