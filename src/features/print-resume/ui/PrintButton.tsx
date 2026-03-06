const PrintButton = () => (
  <button
    onClick={() => window.print()}
    className="rounded-full border border-slate-200 px-3.5 py-1 text-sm font-medium text-slate-500 transition-colors duration-200 hover:border-slate-300 hover:text-slate-700"
  >
    PDF
  </button>
);

export default PrintButton;
