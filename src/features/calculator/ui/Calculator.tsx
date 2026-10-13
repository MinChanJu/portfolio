import { Calculator as CalculatorIcon, Delete } from "lucide-react";

import { keys } from "../model/calculator.constants";
import { getCalculatorButtonClass } from "../model/calculator.utils";
import { useCalculator } from "../model/use-calculator";

const Calculator = () => {
  const { state, dispatch } = useCalculator();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
      <header className="mb-8 flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
          <CalculatorIcon size={24} aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">계산기</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            가벼운 계산이 필요할 때, 버튼이나 키보드로 입력해 보세요.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-sm rounded-3xl border border-sky-100 bg-slate-50 p-4 shadow-lg shadow-sky-900/5">
        <div className="mb-4 rounded-2xl border border-sky-100 bg-white px-5 py-6 text-right">
          <div className="mb-2 min-h-6 text-sm text-slate-400">
            {state.stored !== null && state.operator ? `${state.stored} ${state.operator}` : "CALCULATOR"}
          </div>
          <output
            aria-label="계산 결과"
            aria-live="polite"
            aria-atomic="true"
            className="block overflow-x-auto text-4xl font-semibold tracking-tight text-slate-800 tabular-nums"
          >
            {state.display}
          </output>
          {state.display === "오류" && (
            <p className="mt-2 text-xs text-rose-600">계산할 수 없는 값입니다. 숫자를 입력해 다시 시작하세요.</p>
          )}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {keys.map((key) => {
            const isOperator = ["+", "−", "×", "÷"].includes(key);
            return (
              <button
                key={key}
                type="button"
                aria-pressed={isOperator ? state.operator === key : undefined}
                onClick={() => dispatch(key)}
                className={getCalculatorButtonClass(key, isOperator, state)}
              >
                {key === "⌫" ? <Delete size={20} aria-hidden="true" /> : key}
              </button>
            );
          })}
        </div>
      </div>
      <p className="mt-6 text-center text-xs leading-6 text-slate-400">
        Enter로 계산 · Backspace로 한 자리 삭제 · Esc로 초기화
        <br />
        %는 현재 값을 100으로 나눕니다. 연속 연산은 입력 순서대로 계산합니다.
      </p>
    </div>
  );
};

export default Calculator;
