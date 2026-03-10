import { URL } from "@shared/config";
import { CustomLink, SectionCard, SectionLayout, SectionTitle } from "@shared/ui";

import { BAEKJOON_ACCOUNTS } from "../model/link.constants";

const Link = () => {
  return (
    <SectionLayout caption="Contact" title="Links">
      <div className="flex flex-col gap-4">
        <SectionTitle
          title={
            <div className="flex flex-row items-center gap-5">
              🐙 GitHub
              <CustomLink
                href={URL.GITHUB}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-100"
              >
                <img src="https://cdn.simpleicons.org/github" alt="GitHub icon" className="h-5 w-5" />
                MinChanJu
              </CustomLink>
            </div>
          }
        />
        <SectionCard>
          <div className="mx-auto flex flex-col gap-3">
            <img src={URL.GITHUB_SUMMARY} alt="GitHub Summary" className="w-full rounded-lg" />
            <div className="flex w-full">
              <img src={URL.GITHUB_TOP_LANGS} alt="Top Languages" className="min-w-0 flex-1 rounded-lg" />
              <img src={URL.GITHUB_STATS} alt="GitHub Stats" className="min-w-0 flex-1 rounded-lg" />
            </div>
            <img src={URL.GITHUB_STREAK} alt="GitHub Streak" className="w-full rounded-lg" />
          </div>
        </SectionCard>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle title="⚔️ BAEKJOON" />
        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {BAEKJOON_ACCOUNTS.map(({ label, href, tier }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md md:px-6 md:py-5"
            >
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                {label}
              </span>
              <img src={tier} alt={`BAEKJOON ${label} tier`} className="w-full" />
            </a>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Link;
