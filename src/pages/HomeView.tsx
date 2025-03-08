import React from "react"
import { AwardView, IntroductionView, ProjectView, SkillView, CareerView, LinkView } from "."
import { Portfolio } from "../types";

type HomeViewProps = {
  data: Portfolio;
}

const HomeView: React.FC<HomeViewProps> = ({ data }) => {
  return (
    <>
      <IntroductionView />
      <SkillView languages={data.languages} librarys={data.librarys} tools={data.tools} />
      {data.projects.map((_, index) => (
        <ProjectView key={index} index={index} projects={data.projects} />
      ))}
      <AwardView prizes={data.prizes} certificates={data.certificates} />
      <CareerView careers={data.careers} />
      <LinkView />
    </>
  )
}

export default HomeView