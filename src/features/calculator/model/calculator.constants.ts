import { CalculatorState } from "./calculator.types";

export const keys = [
  "AC",
  "+/−",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "−",
  "1",
  "2",
  "3",
  "+",
  "⌫",
  "0",
  ".",
  "=",
];

export const keyboardMap: Record<string, string> = {
  "/": "÷",
  "*": "×",
  "-": "−",
  Enter: "=",
  Backspace: "⌫",
  Escape: "AC",
  Delete: "AC",
};

export const initialState: CalculatorState = { display: "0", stored: null, operator: null, replace: false };
