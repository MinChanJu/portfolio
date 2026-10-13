import { initialState } from "./calculator.constants";
import { CalculatorState, Operator } from "./calculator.types";

const calculate = (left: number, right: number, operator: Operator) => {
  switch (operator) {
    case "+":
      return left + right;
    case "−":
      return left - right;
    case "×":
      return left * right;
    case "÷":
      return right === 0 ? NaN : left / right;
  }
};
const format = (value: number) => (Number.isFinite(value) ? String(Number(value.toPrecision(12))) : "오류");

export const calculatorReducer = (state: CalculatorState, input: string): CalculatorState => {
  if (input === "AC") return { ...initialState };
  if (state.display === "오류") state = { ...initialState };
  if (/^\d$/.test(input)) {
    if (!state.replace && state.display.replace(/[-.]/g, "").length >= 12) return state;
    return {
      ...state,
      display: state.replace || state.display === "0" ? input : state.display + input,
      replace: false,
    };
  }
  if (input === ".") {
    if (state.replace) return { ...state, display: "0.", replace: false };
    return state.display.includes(".") || state.display.includes("e")
      ? state
      : { ...state, display: state.display + "." };
  }
  if (input === "⌫") {
    if (state.replace) return state;
    const display = state.display.slice(0, -1);
    return { ...state, display: !display || display === "-" ? "0" : display };
  }
  if (input === "+/−" || input === "%") {
    return { ...state, display: format(input === "%" ? Number(state.display) / 100 : -Number(state.display)) };
  }
  if (["+", "−", "×", "÷", "="].includes(input)) {
    let value = Number(state.display);
    if (state.operator && state.stored !== null && !state.replace)
      value = calculate(state.stored, value, state.operator);
    const display = format(value);
    if (display === "오류") return { ...initialState, display, replace: true };
    return {
      display,
      stored: input === "=" ? null : Number(display),
      operator: input === "=" ? null : (input as Operator),
      replace: true,
    };
  }
  return state;
};

export const getCalculatorButtonClass = (key: string, isOperator: boolean, state: CalculatorState) => {
  const baseClass =
    "flex h-14 items-center justify-center rounded-2xl text-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 active:scale-95";
  if (key === "=") return `${baseClass} bg-sky-600 text-white hover:bg-sky-700`;
  if (isOperator && state.operator === key) return `${baseClass} bg-sky-200 text-sky-900`;
  if (isOperator) return `${baseClass} bg-sky-100 text-sky-800 hover:bg-sky-200`;
  if (["AC", "+/−", "%", "⌫"].includes(key)) return `${baseClass} bg-slate-200/70 text-slate-600 hover:bg-slate-200`;
  return `${baseClass} border border-slate-200 bg-white text-slate-700 hover:bg-sky-50`;
};
