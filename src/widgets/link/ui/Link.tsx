import { URL } from "@shared/config";
import { Card, CustomLink, SectionLayout, SectionTitle } from "@shared/ui";

import { BAEKJOON_ACCOUNTS } from "../model/link.constants";

const Link = () => {
  return (
    <SectionLayout caption="Contact" title="Links">
      <div className="flex flex-col gap-4">
        <SectionTitle>🐙 GitHub</SectionTitle>
        <Card>
          <CustomLink href={URL.GITHUB} />
          <div className="mx-auto flex max-w-2xl flex-col gap-3">
            <img src={URL.GITHUB_SUMMARY} alt="GitHub Summary" className="w-full rounded-lg" />
            <div className="flex w-full">
              <img src={URL.GITHUB_TOP_LANGS} alt="Top Languages" className="min-w-0 flex-1 rounded-lg" />
              <img src={URL.GITHUB_STATS} alt="GitHub Stats" className="min-w-0 flex-1 rounded-lg" />
            </div>
            <img src={URL.GITHUB_STREAK} alt="GitHub Streak" className="w-full rounded-lg" />
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle>⚔️ BAEKJOON</SectionTitle>
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
