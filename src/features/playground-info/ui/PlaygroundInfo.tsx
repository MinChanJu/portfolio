import { Sparkles } from "lucide-react";

import { highlights } from "../model/playground-info.constants";

const PlaygroundInfo = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="bg-linear-to-br from-sky-50 via-white to-indigo-50 p-6 md:p-10">
        <div className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-sky-100 bg-white text-sky-600">
          <Sparkles size={24} aria-hidden="true" />
        </div>
        <p className="mb-2 text-sm font-medium text-sky-700">플레이그라운드 소개</p>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">호기심에서 시작하는 작은 실험</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          포트폴리오가 완성된 결과를 보여주는 곳이라면, 플레이그라운드는 아이디어를 직접 구현하고 탐색하는 곳입니다.
          새로운 기능과 화면 속 작은 움직임을 하나씩 만들어 갑니다.
        </p>
      </div>

      <div className="grid gap-6 border-t border-slate-100 p-6 md:grid-cols-2 md:gap-10 md:p-10">
        {highlights.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
              <Icon size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaygroundInfo;
