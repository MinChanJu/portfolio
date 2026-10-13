import { useSearchParams } from "react-router";

import { PLAYGROUND_CONTENT_MAP } from "./playground.constants";
import type { PlaygroundContent } from "./playground.types";

export const usePlayground = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedContent = searchParams.get("content");
  const content: PlaygroundContent =
    requestedContent !== null && Object.prototype.hasOwnProperty.call(PLAYGROUND_CONTENT_MAP, requestedContent)
      ? (requestedContent as PlaygroundContent)
      : "info";
  const CurrentPlay = PLAYGROUND_CONTENT_MAP[content].Play;

  const changeContent = (newContent: PlaygroundContent) =>
    setSearchParams((currentParams) => {
      const nextParams = new URLSearchParams(currentParams);
      if (newContent === "info") nextParams.delete("content");
      else nextParams.set("content", newContent);
      return nextParams;
    });

  return { content, changeContent, CurrentPlay };
};
