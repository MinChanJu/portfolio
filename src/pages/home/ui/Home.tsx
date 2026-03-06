import { Award } from "@widgets/award";
import { Career } from "@widgets/career";
import { Introduction } from "@widgets/introduction";
import { Link } from "@widgets/link";
import { Project } from "@widgets/project";
import { Skill } from "@widgets/skill";

import { PROJECTS } from "@entities/project";

import { SECTION_ID } from "@shared/config";

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-12 md:gap-20">
      <section id={SECTION_ID.INTRODUCTION}>
        <Introduction />
      </section>
      <section id={SECTION_ID.SKILL}>
        <Skill />
      </section>
      {PROJECTS.map((_, index) => (
        <section key={index} id={`${SECTION_ID.PROJECT}-${index + 1}`}>
          <Project index={index} />
        </section>
      ))}
      <section id={SECTION_ID.AWARD}>
        <Award />
      </section>
      <section id={SECTION_ID.CAREER}>
        <Career />
      </section>
      <section id={SECTION_ID.LINK}>
        <Link />
      </section>
    </div>
  );
};

export default Home;
