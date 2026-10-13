export type Operator = "+" | "−" | "×" | "÷";
export type CalculatorState = {
  display: string;
  stored: number | null;
  operator: Operator | null;
  replace: boolean;
};
