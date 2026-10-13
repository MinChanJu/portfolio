export const ROUTE_PATHS = {
  HOME: "/",
  PLAYGROUND: "/playground",
};

type RoutePaths = keyof typeof ROUTE_PATHS;

export const ROUTE_PATH_LABELS: Record<RoutePaths, string> = {
  HOME: "포트폴리오",
  PLAYGROUND: "플레이그라운드",
};
