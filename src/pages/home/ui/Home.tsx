import { Award } from "@pages/award";
import { Career } from "@pages/career";
import { Introduction } from "@pages/introduction";
import { Link } from "@pages/link";
import { Project } from "@pages/project";
import { Skill } from "@pages/skill";

import { PROJECTS } from "@entities/project";

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-25">
      <Introduction />
      <Skill />
      {PROJECTS.map((_, index) => (
        <Project key={index} index={index} />
      ))}
      <Award />
      <Career />
      <Link />
    </div>
  );
};

export default Home;
