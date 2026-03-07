import { Suspense, lazy } from "react";

import { Introduction } from "@widgets/introduction";

import { PROJECTS } from "@entities/project";

import { SECTION_ID } from "@shared/config";

const Award = lazy(() => import("@widgets/award").then((m) => ({ default: m.Award })));
const Career = lazy(() => import("@widgets/career").then((m) => ({ default: m.Career })));
const Link = lazy(() => import("@widgets/link").then((m) => ({ default: m.Link })));
const Project = lazy(() => import("@widgets/project").then((m) => ({ default: m.Project })));
const Skill = lazy(() => import("@widgets/skill").then((m) => ({ default: m.Skill })));

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-12 md:gap-20">
      <section id={SECTION_ID.INTRODUCTION}>
        <Introduction />
      </section>
      <Suspense>
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
      </Suspense>
    </div>
  );
};

export default Home;
