import { useEffect, useReducer } from "react";

import { initialState, keyboardMap, keys } from "./calculator.constants";
import { calculatorReducer } from "./calculator.utils";

export const useCalculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey || event.isComposing) return;
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.closest("input, textarea, select, [contenteditable]") ||
          (target.closest("button, a") && event.key === "Enter"))
      )
        return;
      const input = keyboardMap[event.key] ?? event.key;
      if (keys.includes(input)) {
        event.preventDefault();
        dispatch(input);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return { state, dispatch };
};
