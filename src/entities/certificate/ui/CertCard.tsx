import { SectionCard } from "@shared/ui";

import { Certificate } from "../model/certificate.types";

const CertCard = ({ name, issuer, date, score }: Certificate) => (
  <SectionCard className="flex items-center justify-between gap-4 rounded-xl transition-shadow hover:shadow-md">
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-slate-800">{name}</span>
      <span className="text-xs text-slate-400">{issuer}</span>
    </div>
    <div className="flex shrink-0 flex-col items-end gap-1.5">
      <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-0.5 text-xs font-semibold text-blue-700">
        {score}
      </span>
      <span className="text-xs text-slate-400">{date}</span>
    </div>
  </SectionCard>
);

export default CertCard;
