import { Calculator } from "@features/calculator";
import { PlaygroundInfo } from "@features/playground-info";

import { PlaygroundContent, PlaygroundContentDetail } from "./playground.types";

export const PLAYGROUND_CONTENT_MAP: Record<PlaygroundContent, PlaygroundContentDetail> = {
  info: {
    label: "플레이그라운드 정보",
    Play: PlaygroundInfo,
  },
  calculator: {
    label: "계산기",
    Play: Calculator,
  },
};
