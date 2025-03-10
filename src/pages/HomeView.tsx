import React from "react"
import { AwardView, IntroductionView, ProjectView, SkillView, CareerView, LinkView } from "."
import { Portfolio } from "../types";

type HomeViewProps = {
  data: Portfolio;
}

const HomeView: React.FC<HomeViewProps> = ({ data }) => {
  return (
    <div>
      <img style={{ width: "100%" }} src="https://capsule-render.vercel.app/api?type=waving&color=0:f50000,100:6dfde0&height=200&animation=twinkling" alt="" />
      <div className="flexCol gap50">

        <IntroductionView />
        <SkillView languages={data.languages} librarys={data.librarys} tools={data.tools} />
        {data.projects.map((_, index) => (
          <ProjectView key={index} index={index} projects={data.projects} />
        ))}
        <AwardView prizes={data.prizes} certificates={data.certificates} />
        <CareerView careers={data.careers} />
        <LinkView />
      </div>
      <img style={{ marginTop: "50px" }} src="https://readme-typing-svg.demolab.com/?lines=프로필을+방문해+주셔서+감사합니다!;좋은+하루+되세요!+😊&font=Fira%20Code&duration=2000&pause=1000&center=true&height=50"></img>
      <img style={{ width: "100%" }} src="https://capsule-render.vercel.app/api?type=waving&color=1d5&height=200&section=footer" alt="" />
    </div>
  )
}

export default HomeView