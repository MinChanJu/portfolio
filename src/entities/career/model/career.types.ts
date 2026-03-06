export type CareerType = "대학교" | "고등학교" | "부트캠프" | "대회" | "동아리 활동" | "아르바이트" | "군복무";

export type Career = {
  type: CareerType;
  title: string;
  description?: string;
  period: string;
};
