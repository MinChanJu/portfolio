import { Certificate } from "./certificate.types";

export const CERTIFICATES: Certificate[] = (
  [
    {
      name: "PCCE(Python)-프로그래머스코딩필수역량자격",
      issuer: "(주)그렙",
      date: "2024.08.18",
      score: "1000/Lv.4",
    },
    {
      name: "PCCP(Python)-프로그래머스코딩전문가자격",
      issuer: "(주)그렙",
      date: "2024.09.22",
      score: "689/Lv.3",
    },
  ] satisfies Certificate[]
).sort((a, b) => {
  const aDate = new Date(a.date.replace(/\./g, "-")).getTime();
  const bDate = new Date(b.date.replace(/\./g, "-")).getTime();
  return aDate - bDate;
});
