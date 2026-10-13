import { createBrowserRouter } from "react-router";

import { Home } from "@pages/home";
import { Playground } from "@pages/playground";

import { ROUTE_PATHS } from "@shared/config/router.config";

import AppLayout from "./AppLayout";
import RootLayout from "./RootLayout";

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        {
          element: <AppLayout />,
          children: [{ path: ROUTE_PATHS.HOME, element: <Home /> }],
        },
        {
          path: ROUTE_PATHS.PLAYGROUND,
          element: <Playground />,
        },
      ],
    },
  ],
  { basename: "/portfolio" },
);
