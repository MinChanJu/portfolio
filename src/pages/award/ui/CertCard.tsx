import { Certificate } from "@entities/certificate";

const CertCard = ({ name, issuer, date, score }: Certificate) => (
  <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md">
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
  </div>
);

export default CertCard;
