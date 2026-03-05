import { createBrowserRouter } from "react-router-dom";

import { AwardPage } from "@pages/award";
import { CareerPage } from "@pages/career";
import { HomePage } from "@pages/home";
import { IntroductionPage } from "@pages/introduction";
import { LinkPage } from "@pages/link";
import { ProjectPage } from "@pages/project";
import { SkillPage } from "@pages/skill";

import { ROUTES } from "@shared/config/routes";
import { Error } from "@shared/ui";

import Layout from "../ui/Layout";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: ROUTES.HOME, element: <HomePage /> },
        { path: ROUTES.INTRO, element: <IntroductionPage /> },
        { path: ROUTES.SKILL, element: <SkillPage /> },
        { path: ROUTES.PROJECT, element: <ProjectPage /> },
        { path: ROUTES.AWARD, element: <AwardPage /> },
        { path: ROUTES.CAREER, element: <CareerPage /> },
        { path: ROUTES.LINK, element: <LinkPage /> },
        { path: ROUTES.NOT_FOUND, element: <Error /> },
      ],
    },
  ],
  { basename: "/portfolio" },
);
