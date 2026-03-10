import { Career, CareerType } from "./career.types";

export const CAREERS: Career[] = (
  [
    {
      type: "고등학교",
      title: "서울 성보고등학교 졸업",
      period: "2017.03 ~ 2020.02",
    },
    {
      type: "아르바이트",
      title: "대치에스에스학원 수학 TA. 수학 질문에 대한 답",
      period: "2019.01 ~ 2020.10",
    },
    {
      type: "대학교",
      title: "아주대학교 재학. 1전공 수학과, 복수전공 소프트웨어학과",
      period: "2020.03 ~ 2026.02",
    },
    {
      type: "군복무",
      title: "2022년 11월 30일 육군 병장 만기전역",
      period: "2021.05 ~ 2022.11",
    },
    {
      type: "아르바이트",
      title: "CU관악두산점",
      period: "2022.12 ~ 2023.02",
    },
    {
      type: "아르바이트",
      title: "광교에듀플렉스 수학 튜터. 수학 진도를 나가며 질문에 대한 답",
      period: "2023.07 ~ 2024.02",
    },
    {
      type: "대회",
      title: "제 3회 산업수학 프로그래밍 경진대회 2등",
      period: "2023.12 ~ 2023.12",
    },
    {
      type: "동아리 활동",
      title: "2024년 아주대학교 수학과 소학회 MiC 회장",
      period: "2024.01 ~ 2024.12",
    },
    {
      type: "대회",
      title: "2024 아주대학교 프로그래밍 경진대회 Div.2 대상",
      period: "2024.05 ~ 2024.05",
    },
    {
      type: "대회",
      title: "2024 ICPC Seoul Regional 예선",
      period: "2024.10 ~ 2024.10",
    },
    {
      type: "대회",
      title: "2024 아주대학교 프로그래밍 경진대회 Extra",
      period: "2024.12 ~ 2024.12",
    },
    {
      type: "아르바이트",
      title: "키코랩스 코딩 트레이너. 초중학생을 대상으로 코딩 기초와 심화에 대한 수업",
      period: "2025.01 ~ 2025.07",
    },
    {
      type: "대회",
      title: "2025 아주대학교 해커톤 (아주톤) 장려상",
      period: "2025.05 ~ 2025.05",
    },
    {
      type: "부트캠프",
      title: "네이버 부스트캠프 10기 베이직 수료",
      period: "2025.06 ~ 2025.07",
    },
    {
      type: "부트캠프",
      title: "네이버 부스트캠프 10기 챌린지 수료",
      period: "2025.07 ~ 2025.08",
    },
    {
      type: "부트캠프",
      title: "네이버 부스트캠프 10기 멤버십 수료",
      period: "2025.08 ~ 2026.02",
    },
  ] satisfies Career[]
).sort((a, b) => {
  const [aStart] = a.period.split(" ~ ");
  const [bStart] = b.period.split(" ~ ");
  return new Date(bStart).getTime() - new Date(aStart).getTime();
});

export const ALL_CAREER_TYPES: Career["type"][] = [...new Set(CAREERS.map((c) => c.type))];

export const CAREER_BADGE_STYLE: Record<CareerType, string> = {
  대학교: "border-purple-200 bg-purple-50 text-purple-700",
  고등학교: "border-purple-200 bg-purple-50 text-purple-700",
  부트캠프: "border-emerald-200 bg-emerald-50 text-emerald-700",
  대회: "border-amber-200 bg-amber-50 text-amber-700",
  "동아리 활동": "border-blue-200 bg-blue-50 text-blue-700",
  아르바이트: "border-slate-200 bg-slate-50 text-slate-700",
  군복무: "border-rose-200 bg-rose-50 text-rose-700",
};

export const CAREER_DOT_STYLE: Record<CareerType, string> = {
  대학교: "bg-purple-400",
  고등학교: "bg-purple-400",
  부트캠프: "bg-emerald-400",
  대회: "bg-amber-400",
  "동아리 활동": "bg-blue-400",
  아르바이트: "bg-slate-400",
  군복무: "bg-rose-400",
};
