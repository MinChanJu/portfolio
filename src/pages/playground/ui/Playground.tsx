import { useState } from "react";

import { PLAYGROUND_CONTENT_MAP } from "../model/playground.constants";
import type { PlaygroundContent, PlaygroundContentDetail } from "../model/playground.types";

const Playground = () => {
  const [content, setContent] = useState<PlaygroundContent>("info");
  const CurrentPlay = PLAYGROUND_CONTENT_MAP[content].Play;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 pb-28 md:px-6 md:py-16">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold tracking-widest text-sky-700">PLAYGROUND</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            작은 아이디어를 실험하는 공간
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-500">
            직접 만들고, 눌러 보고, 바꿔 보면서 새로운 경험을 탐색합니다.
          </p>
        </header>

        <nav aria-label="플레이그라운드 콘텐츠" className="flex flex-wrap gap-2">
          {(Object.entries(PLAYGROUND_CONTENT_MAP) as [PlaygroundContent, PlaygroundContentDetail][]).map(
            ([key, { label }]) => (
              <button
                key={key}
                type="button"
                aria-pressed={content === key}
                aria-controls="playground-content"
                onClick={() => setContent(key)}
                className={`min-h-11 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 ${
                  content === key
                    ? "border-sky-200 bg-sky-100 text-sky-800"
                    : "border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-800"
                }`}
              >
                {label}
              </button>
            ),
          )}
        </nav>

        <section id="playground-content" aria-label={PLAYGROUND_CONTENT_MAP[content].label}>
          <CurrentPlay />
        </section>
      </div>
    </main>
  );
};

export default Playground;
