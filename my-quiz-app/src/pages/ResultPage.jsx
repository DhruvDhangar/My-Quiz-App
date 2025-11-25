import React, { useEffect, useState } from "react";

export default function ResultPage({ score = 0, onRestart = () => {} }) {
  // smooth rolling animation for the number
  const safeScore = Number.isFinite(Number(score)) ? Math.round(Number(score)) : 0;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let raf;
    let start;
    const duration = 800;
    const from = 0;
    const to = safeScore;

    function easeOutCubic(t) {
      return (--t) * t * t + 1;
    }

    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const value = Math.round(from + (to - from) * easeOutCubic(progress));
      setDisplay(value);
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    if (to === 0) {
      setDisplay(0);
      return;
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [safeScore]);

  return (
    <div className="result-center-wrapper">
      {/* Pill */}
      <div className="pill-small mb-6">Keep Learning!</div>

      {/* Title */}
      <h2 className="result-title mb-10">Your Final Score Is</h2>

      {/* Percentage */}
      <div className="result-percent">
        <span className="number">{display}</span>
        <span className="percent">%</span>
      </div>

      {/* Button */}
      <button className="start-btn mt-10" onClick={onRestart}>
        Start Again
      </button>
    </div>
  );
}
