export default function NavArrows({ onPrev, onNext, prevDisabled = false, nextDisabled = false }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onPrev}
        disabled={prevDisabled}
        aria-label="Previous"
        className="w-10 h-10 rounded-md bg-white/60 backdrop-blur-sm border border-slate-100 flex items-center justify-center disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-sky-100"
      >
        {/* left arrow SVG */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-700">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        onClick={onNext}
        disabled={nextDisabled}
        aria-label="Next"
        className="w-10 h-10 rounded-md bg-sky-100/60 border border-slate-100 flex items-center justify-center disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-sky-200"
      >
        {/* right arrow SVG */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-800">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
