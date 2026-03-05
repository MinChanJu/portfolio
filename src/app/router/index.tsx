import { createBrowserRouter } from "react-router-dom";

import { Award } from "@pages/award";
import { Career } from "@pages/career";
import { Home } from "@pages/home";
import { Introduction } from "@pages/introduction";
import { Link } from "@pages/link";
import { Project } from "@pages/project";
import { Skill } from "@pages/skill";

import { ROUTES } from "@shared/config/routes";
import { Error } from "@shared/ui";

import Layout from "../ui/Layout";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: ROUTES.HOME, element: <Home /> },
        { path: ROUTES.INTRO, element: <Introduction /> },
        { path: ROUTES.SKILL, element: <Skill /> },
        { path: ROUTES.PROJECT, element: <Project /> },
        { path: ROUTES.AWARD, element: <Award /> },
        { path: ROUTES.CAREER, element: <Career /> },
        { path: ROUTES.LINK, element: <Link /> },
        { path: ROUTES.NOT_FOUND, element: <Error /> },
      ],
    },
  ],
  { basename: "/portfolio" },
);
