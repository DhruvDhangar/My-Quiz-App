export default function Option({ id, text, checked, onSelect }) {
  return (
    <button
      role="radio"
      aria-checked={checked}
      id={id}
      onClick={onSelect}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect(); }}
      className={
        `w-full text-left py-4 px-6 rounded-lg border transition-transform
         focus:outline-none focus:ring-4 focus:ring-sky-100
         ${checked ? "bg-gradient-to-r from-sky-50 to-white border-sky-200 shadow" : "bg-white border-slate-100 hover:translate-y-[-2px]"}`
      }
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center font-bold">
          {id.replace(/.*-/, "") /* shows A,B,C */}
        </div>
        <div className="flex-1 text-center text-lg font-medium text-slate-900">{text}</div>
      </div>
    </button>
  );
}
