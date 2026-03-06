import { URL } from "@shared/config/url";
import { Card, CustomLink, PageHeader, SectionTitle } from "@shared/ui";

import { BAEKJOON_ACCOUNTS } from "../model/link.constants";

const Link = () => {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <PageHeader caption="Contact" title="Links" />

      <div className="flex flex-col gap-4">
        <SectionTitle>🐙 GitHub</SectionTitle>
        <Card className="px-5 py-4">
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
        <div className="grid grid-cols-2 gap-3">
          {BAEKJOON_ACCOUNTS.map(({ label, href, tier }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                {label}
              </span>
              <img src={tier} alt={`BAEKJOON ${label} tier`} className="w-full" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Link;
